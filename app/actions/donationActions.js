'use server';

import dbConnect from '@/lib/mongodb';
import Donation from '@/models/Donation';
import { revalidatePath } from 'next/cache';

/**
 * Creates a new donation record in the database.
 */
export async function createDonation(formData) {
  try {
    await dbConnect();

    const { name, email, category, amount, paymentMethod } = formData;

    const isPaymentSuccessful = true; 
    const dummyTransactionId = `TRX-${Math.random().toString(36).substring(2, 11).toUpperCase()}`;

    if (!isPaymentSuccessful) {
      throw new Error('Payment failed');
    }

    const donationData = {
      name,
      email,
      category,
      amount: Number(amount),
      paymentMethod,
      transactionId: dummyTransactionId,
      status: 'completed',
      paymentDetails: {
        gateway: paymentMethod.toLowerCase(),
        processedAt: new Date().toISOString(),
        dummy: true
      }
    };

    const donation = await Donation.create(donationData);

    revalidatePath('/donations');
    revalidatePath('/dashboard/donations-mgnt');
    
    return {
      success: true,
      message: 'Donation successful! JazakAllah Khair.',
      donation: JSON.parse(JSON.stringify(donation))
    };
  } catch (error) {
    console.error('Donation Error:', error);
    return {
      success: false,
      message: error.message || 'Something went wrong. Please try again.'
    };
  }
}

/**
 * Get all donations
 */
export async function getDonations() {
  try {
    await dbConnect();
    const donations = await Donation.find({}).sort({ createdAt: -1 });
    return {
      success: true,
      data: JSON.parse(JSON.stringify(donations))
    };
  } catch (error) {
    console.error('Get Donations Error:', error);
    return { success: false, message: 'Failed to fetch donations' };
  }
}

/**
 * Delete a donation
 */
export async function deleteDonation(id) {
  try {
    await dbConnect();
    const donation = await Donation.findByIdAndDelete(id);
    if (!donation) throw new Error('Donation not found');
    
    revalidatePath('/dashboard/donations-mgnt');
    
    return { success: true, message: 'Donation record deleted successfully' };
  } catch (error) {
    console.error('Delete Donation Error:', error);
    return { success: false, message: 'Failed to delete donation record' };
  }
}
