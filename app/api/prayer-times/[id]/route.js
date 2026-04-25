import dbConnect from '@/lib/mongodb';
import { NextResponse } from 'next/server';
// import PrayerTime from '../../../../../models/PrayerTime';
import PrayerTime from '@/models/PrayerTime';

export async function PUT(request, { params }) {
  try {
    await dbConnect();
    const { id } = await params;
    const data = await request.json();

    const updatedPrayerTime = await PrayerTime.findByIdAndUpdate(
      id,
      data,
      { new: true, runValidators: true }
    );

    if (!updatedPrayerTime) {
      return NextResponse.json({ error: 'Prayer time not found' }, { status: 404 });
    }

    const item = updatedPrayerTime.toObject();
    item.id = item._id.toString();

    return NextResponse.json(item);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  try {
    await dbConnect();
    const { id } = await params;

    const deletedPrayerTime = await PrayerTime.findByIdAndDelete(id);

    if (!deletedPrayerTime) {
      return NextResponse.json({ error: 'Prayer time not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Prayer time deleted successfully' });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
