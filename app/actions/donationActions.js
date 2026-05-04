'use server';

import dbConnect from '@/lib/mongodb';
import Donation from '@/models/Donation';
import { revalidatePath } from 'next/cache';

/**
 * Creates a new donation record in the database.
 * This is a dummy implementation that simulates payment processing.
 */
export async function createDonation(formData) {
  try {
    await dbConnect();

    const { name, email, category, amount, paymentMethod } = formData;

    // Dummy payment processing simulation
    // In a real scenario, you would call bKash/Nagad API here
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
