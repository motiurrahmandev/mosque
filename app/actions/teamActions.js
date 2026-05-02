"use server";

import dbConnect from "@/lib/mongodb";
import TeamMember from "@/models/TeamMember";
import imagekit from "@/lib/imagekit";

export async function getMembers() {
  try {
    await dbConnect();
    const members = await TeamMember.find({}).sort({ createdAt: -1 });
    return { success: true, data: JSON.parse(JSON.stringify(members)) };
  } catch (error) {
    console.error("Error fetching team members:", error);
    return { success: false, error: "Failed to fetch members" };
  }
}

export async function createMember(formData) {
  try {
    await dbConnect();
    
    const name = formData.get("name");
    const role = formData.get("role");
    const contactInfo = formData.get("contactInfo");
    const imageFile = formData.get("image");

    if (!name || !role || !imageFile || imageFile.size === 0) {
      return { success: false, error: "Name, role, and image are required" };
    }

    // Upload image to ImageKit
    const uploadResponse = await imagekit.files.upload({
      file: imageFile,
      fileName: imageFile.name || `team-member-${Date.now()}`,
      folder: "/mosque/team",
    });

    const newMember = await TeamMember.create({
      name,
      role,
      contactInfo,
      image: uploadResponse.url,
    });

    return { success: true, data: JSON.parse(JSON.stringify(newMember)) };
  } catch (error) {
    console.error("Error creating team member:", error);
    return { success: false, error: "Failed to create member" };
  }
}

export async function updateMember(id, formData) {
  try {
    await dbConnect();
    
    const name = formData.get("name");
    const role = formData.get("role");
    const contactInfo = formData.get("contactInfo");
    const imageFile = formData.get("image");

    const updateData = { name, role, contactInfo };

    if (imageFile && imageFile.size > 0) {
      const uploadResponse = await imagekit.files.upload({
        file: imageFile,
        fileName: imageFile.name || `team-member-${Date.now()}`,
        folder: "/mosque/team",
      });
      
      updateData.image = uploadResponse.url;
    }

    const updatedMember = await TeamMember.findByIdAndUpdate(id, updateData, { new: true });
    
    if (!updatedMember) {
      return { success: false, error: "Member not found" };
    }

    return { success: true, data: JSON.parse(JSON.stringify(updatedMember)) };
  } catch (error) {
    console.error("Error updating team member:", error);
    return { success: false, error: "Failed to update member" };
  }
}

export async function deleteMember(id) {
  try {
    await dbConnect();
    const deletedMember = await TeamMember.findByIdAndDelete(id);
    
    if (!deletedMember) {
      return { success: false, error: "Member not found" };
    }
    
    return { success: true };
  } catch (error) {
    console.error("Error deleting team member:", error);
    return { success: false, error: "Failed to delete member" };
  }
}
