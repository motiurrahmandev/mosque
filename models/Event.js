import mongoose from 'mongoose';

const EventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please provide an event title'],
      trim: true,
    },
    category: {
      type: String,
      required: [true, 'Please provide an event category'],
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Please provide an event description'],
    },
    author: {
      type: String,
      required: [true, 'Please provide an author or organizer'],
      trim: true,
    },
    eventTime: {
      type: String,
      required: [true, 'Please provide the event time and location'],
      trim: true,
    },
    image: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Event || mongoose.model('Event', EventSchema);
