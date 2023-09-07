import { Params } from '@/app/schedule/[day]/page';
import connectMongoDb from '@/app/utils/mongodb';
import { NextResponse } from 'next/server';

export async function GET({ params: { day } }: Params) {
  const client = await connectMongoDb;
  const db = client.db('colosseum-combat');
  const schedulesCollection = db.collection('schedule');

  try {
    const schedule = await schedulesCollection.find({ day }).toArray();
    return NextResponse.json(schedule);
  } catch (error) {
    return console.log('Error fetching schedules', 500);
  }
}
