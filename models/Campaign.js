import mongoose from 'mongoose';

const CampaignSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please provide a campaign title'],
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Please provide a campaign description'],
    },
    image: {
      type: String,
      required: [true, 'Please provide a campaign image URL'],
    },
    goalAmount: {
      type: Number,
      required: [true, 'Please provide a goal amount'],
      min: [0, 'Goal amount cannot be negative'],
    },
    raisedAmount: {
      type: Number,
      default: 0,
      min: [0, 'Raised amount cannot be negative'],
    },
    category: {
      type: String,
      required: [true, 'Please provide a category (e.g., Emergency, Education)'],
      trim: true,
    },
    status: {
      type: String,
      enum: ['active', 'completed', 'paused'],
      default: 'active',
    },
    isUrgent: {
      type: Boolean,
      default: false,
    },
    startDate: {
      type: Date,
      default: Date.now,
    },
    endDate: {
      type: Date,
    },
  },
  { timestamps: true }
);

// Virtual for progress percentage
CampaignSchema.virtual('progress').get(function() {
  if (!this.goalAmount || this.goalAmount === 0) return 0;
  return Math.round((this.raisedAmount / this.goalAmount) * 100);
});

export default mongoose.models.Campaign || mongoose.model('Campaign', CampaignSchema);
