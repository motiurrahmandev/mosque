import mongoose from 'mongoose';

const PrayerTimeSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: [true, 'Please provide a name for the prayer (e.g. Fajr, Jummah)'] 
  },
  type: {
    type: String,
    enum: ['daily', 'jummah', 'eid'],
    default: 'daily',
    required: true
  },
  adhan: { 
    type: String,
    // Note: Can be empty for some prayers like Eid if they only have an Iqamah/Prayer Time
  },
  iqamah: { 
    type: String, 
    required: [true, 'Please provide the Iqamah / Prayer Time']
  },
  status: { 
    type: String, 
    default: 'Scheduled' 
  },
  color: { 
    type: String, 
    default: 'bg-surface-variant' 
  }
}, { timestamps: true });

export default mongoose.models.PrayerTime || mongoose.model('PrayerTime', PrayerTimeSchema);
