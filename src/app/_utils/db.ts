import { MongoClient } from 'mongodb';
import { NextRequest, NextResponse } from 'next/server';

let database: any = null; //cached

export async function connectToDatabase() {
    if (database) return database;
    try {
        console.log('Connecting to DB...');

        const uri = process.env.MONGO_URI;
        if (!uri) throw new Error('Add MongoDB URI to .env');

        const client = new MongoClient(uri);
        await client.connect();

        database = client.db('advance');
        console.log('Successfully connected to DB');

        return database;
    } catch (e: any) {
        console.log(e.message);
        throw new Error('Failed to connect to DB');
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
