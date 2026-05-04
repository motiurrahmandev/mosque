'use server';

import dbConnect from '@/lib/mongodb';
import Campaign from '@/models/Campaign';
import imagekit from '@/lib/imagekit';
import { revalidatePath } from 'next/cache';

/**
 * Get all campaigns
 */
export async function getCampaigns() {
  try {
    await dbConnect();
    const campaigns = await Campaign.find({}).sort({ createdAt: -1 });
    return {
      success: true,
      data: JSON.parse(JSON.stringify(campaigns))
    };
  } catch (error) {
    console.error('Get Campaigns Error:', error);
    return { success: false, message: 'Failed to fetch campaigns' };
  }
}

/**
 * Create a new campaign
 */
export async function createCampaign(formData) {
  try {
    await dbConnect();
    
    const title = formData.get('title');
    const description = formData.get('description');
    const goalAmount = formData.get('goalAmount');
    const raisedAmount = formData.get('raisedAmount') || 0;
    const category = formData.get('category');
    const status = formData.get('status') || 'active';
    const isUrgent = formData.get('isUrgent') === 'true';
    const imageFile = formData.get('image');

    let imageUrl = null;
    if (imageFile && imageFile instanceof File && imageFile.size > 0) {
      const buffer = Buffer.from(await imageFile.arrayBuffer());
      const uploadResponse = await imagekit.upload({
        file: buffer,
        fileName: imageFile.name || `campaign-${Date.now()}`,
        folder: "/mosque/campaigns",
      });
      imageUrl = uploadResponse.url;
    }

    const campaign = await Campaign.create({
      title,
      description,
      goalAmount: Number(goalAmount),
      raisedAmount: Number(raisedAmount),
      category,
      status,
      isUrgent,
      image: imageUrl
    });

    revalidatePath('/dashboard/donations-mgnt');
    revalidatePath('/donations');
    
    return {
      success: true,
      message: 'Campaign created successfully',
      data: JSON.parse(JSON.stringify(campaign))
    };
  } catch (error) {
    console.error('Create Campaign Error:', error);
    return { success: false, message: error.message || 'Failed to create campaign' };
  }
}

/**
 * Update an existing campaign
 */
export async function updateCampaign(id, formData) {
  try {
    await dbConnect();
    
    const title = formData.get('title');
    const description = formData.get('description');
    const goalAmount = formData.get('goalAmount');
    const raisedAmount = formData.get('raisedAmount');
    const category = formData.get('category');
    const status = formData.get('status');
    const isUrgent = formData.get('isUrgent') === 'true';
    const imageFile = formData.get('image');

    const updateData = {
      title,
      description,
      goalAmount: Number(goalAmount),
      raisedAmount: Number(raisedAmount),
      category,
      status,
      isUrgent
    };

    if (imageFile && imageFile instanceof File && imageFile.size > 0) {
      const buffer = Buffer.from(await imageFile.arrayBuffer());
      const uploadResponse = await imagekit.upload({
        file: buffer,
        fileName: imageFile.name || `campaign-${Date.now()}`,
        folder: "/mosque/campaigns",
      });
      updateData.image = uploadResponse.url;
    }

    const campaign = await Campaign.findByIdAndUpdate(id, updateData, { new: true });
    if (!campaign) throw new Error('Campaign not found');
    
    revalidatePath('/dashboard/donations-mgnt');
    revalidatePath('/donations');
    
    return {
      success: true,
      message: 'Campaign updated successfully',
      data: JSON.parse(JSON.stringify(campaign))
    };
  } catch (error) {
    console.error('Update Campaign Error:', error);
    return { success: false, message: error.message || 'Failed to update campaign' };
  }
}

/**
 * Delete a campaign
 */
export async function deleteCampaign(id) {
  try {
    await dbConnect();
    const campaign = await Campaign.findByIdAndDelete(id);
    if (!campaign) throw new Error('Campaign not found');
    
    revalidatePath('/dashboard/donations-mgnt');
    revalidatePath('/donations');
    
    return { success: true, message: 'Campaign deleted successfully' };
  } catch (error) {
    console.error('Delete Campaign Error:', error);
    return { success: false, message: 'Failed to delete campaign' };
  }
}
