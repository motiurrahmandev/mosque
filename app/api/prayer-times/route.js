import { NextResponse } from 'next/server';

import dbConnect from '../../../lib/mongodb.js';
import PrayerTime from '@/models/PrayerTime.js';

export async function GET() {
  try {
    await dbConnect();
    // Sort logic: we might want custom sorting or just order of creation.
    // For now, returning chronologically by creation is fine, frontend handles sorting/ordering if necessary, 
    // but ideally we return in order they were created.
    const prayerTimes = await PrayerTime.find({}).sort({ createdAt: 1 });

    // Send "id" as string for frontend compatibility (matches MongoDB's _id)
    const mapped = prayerTimes.map(p => {
      const item = p.toObject();
      item.id = item._id.toString();
      return item;
    });

    return NextResponse.json(mapped);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    await dbConnect();
    const data = await request.json();

    const newPrayerTime = await PrayerTime.create(data);

    const item = newPrayerTime.toObject();
    item.id = item._id.toString();

    return NextResponse.json(item, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
