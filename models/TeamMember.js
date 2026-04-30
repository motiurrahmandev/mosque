import mongoose from 'mongoose';

const TeamMemberSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide a name'],
      trim: true,
    },
    role: {
      type: String,
      required: [true, 'Please provide a role'],
      trim: true,
    },
    image: {
      type: String, // Will store the ImageKit URL
      required: [true, 'Please provide an image URL'],
    },
    contactInfo: {
      type: String, // Can store phone number, email, or a link
      trim: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.TeamMember || mongoose.model('TeamMember', TeamMemberSchema);
