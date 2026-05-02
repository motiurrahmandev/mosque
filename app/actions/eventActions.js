"use server";

import dbConnect from "@/lib/mongodb";
import Event from "@/models/Event";
import imagekit from "@/lib/imagekit";

export async function getEvents() {
  try {
    await dbConnect();
    const events = await Event.find({}).sort({ createdAt: -1 });
    return { success: true, data: JSON.parse(JSON.stringify(events)) };
  } catch (error) {
    console.error("Error fetching events:", error);
    return { success: false, error: "Failed to fetch events" };
  }
}

export async function createEvent(formData) {
  try {
    await dbConnect();
    
    const title = formData.get("title");
    const category = formData.get("category");
    const description = formData.get("description");
    const author = formData.get("author");
    const eventTime = formData.get("eventTime");
    const imageFile = formData.get("image");

    if (!title || !category || !description || !author || !eventTime) {
      return { success: false, error: "All fields except image are required" };
    }

    let imageUrl = null;
    if (imageFile && imageFile.size > 0) {
      const uploadResponse = await imagekit.files.upload({
        file: imageFile,
        fileName: imageFile.name || `event-${Date.now()}`,
        folder: "/mosque/events",
      });
      imageUrl = uploadResponse.url;
    }

    const newEvent = await Event.create({
      title,
      category,
      description,
      author,
      eventTime,
      image: imageUrl,
    });

    return { success: true, data: JSON.parse(JSON.stringify(newEvent)) };
  } catch (error) {
    console.error("Error creating event:", error);
    return { success: false, error: "Failed to create event" };
  }
}

export async function updateEvent(id, formData) {
  try {
    await dbConnect();
    
    const title = formData.get("title");
    const category = formData.get("category");
    const description = formData.get("description");
    const author = formData.get("author");
    const eventTime = formData.get("eventTime");
    const imageFile = formData.get("image");

    const updateData = { title, category, description, author, eventTime };

    if (imageFile && imageFile.size > 0) {
      const uploadResponse = await imagekit.files.upload({
        file: imageFile,
        fileName: imageFile.name || `event-${Date.now()}`,
        folder: "/mosque/events",
      });
      updateData.image = uploadResponse.url;
    }

    const updatedEvent = await Event.findByIdAndUpdate(id, updateData, { new: true });
    
    if (!updatedEvent) {
      return { success: false, error: "Event not found" };
    }

    return { success: true, data: JSON.parse(JSON.stringify(updatedEvent)) };
  } catch (error) {
    console.error("Error updating event:", error);
    return { success: false, error: "Failed to update event" };
  }
}

export async function deleteEvent(id) {
  try {
    await dbConnect();
    const deletedEvent = await Event.findByIdAndDelete(id);
    
    if (!deletedEvent) {
      return { success: false, error: "Event not found" };
    }
    
    return { success: true };
  } catch (error) {
    console.error("Error deleting event:", error);
    return { success: false, error: "Failed to delete event" };
  }
}
