import { connectToDatabase } from '@/app/_utils/db';

export async function GET(request: Request) {
    const database = await connectToDatabase();

    const offers = database.collection('offers');

    // const users = await db.collection('users').find({}).toArray();

    // res.json(users);

    return new Response('helloes');
}
