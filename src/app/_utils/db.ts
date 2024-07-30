import { MongoClient } from 'mongodb';
import { NextRequest, NextResponse } from 'next/server';

let cachedDb: any = null;

export async function connectToDatabase() {
    try {
        console.log('Connecting to DB...');
        const uri = process.env.MONGO_URI;
        console.log('uri', uri);
        if (!uri) throw new Error('Add MongoDB URI to .env');

        const client = new MongoClient(uri);

        console.log('siema: ', cachedDb);
    } catch (e: any) {
        console.log(e.message);
    }
    // if (client.isConnected()) {
    // }
    // if (req.method === 'GET') {
    //     const client = new MongoClient(uri);
    //     try {
    //         await client.connect();

    //         const database = client.db('mikolaj-cluster');
    //         const collection = database.collection('advance');
    //         const allData = await collection.find({}).toArray();

    //         NextResponse.json(allData, { status: 200 });
    //         console.log('Connected to MongoDB!');
    //     } catch (error) {
    //         NextResponse.json({ message: 'Something went wrong!' }, { status: 500 });
    //         console.log('Error connecting to MongoDB');
    //     } finally {
    //         await client.close();
    //         console.log('MongoDB client closed');
    //     }
    // } else {
    //     NextResponse.json({ message: 'Method not allowed!' }, { status: 405 });
    // }
}
