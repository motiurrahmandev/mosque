import mongoose from 'mongoose';

const DonationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide the donor name'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Please provide the donor email'],
      trim: true,
      lowercase: true,
    },
    category: {
      type: String,
      required: [true, 'Please provide a category or campaign name'],
      trim: true,
    },
    amount: {
      type: Number,
      required: [true, 'Please provide the donation amount'],
      min: [1, 'Amount must be at least 1'],
    },
    paymentMethod: {
      type: String,
      required: [true, 'Please provide a payment method'],
      trim: true,
    },
    transactionId: {
      type: String,
      unique: true,
      sparse: true, // Allows null/empty values while still enforcing uniqueness for non-null values
    },
    status: {
      type: String,
      enum: ['pending', 'completed', 'failed'],
      default: 'pending',
    },
    paymentDetails: {
      type: mongoose.Schema.Types.Mixed, // Flexible field for future gateway responses
    }
  },
  { 
    timestamps: true 
  }
);

export default mongoose.models.Donation || mongoose.model('Donation', DonationSchema);
