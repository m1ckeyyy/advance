//admin-login
import { NextRequest, NextResponse } from 'next/server';
import mongoose, { Mongoose } from 'mongoose';

interface LoginRequestBody {
    email: string;
    password: string;
}

export async function POST(request: NextRequest) {
    try {
        const requestBody: LoginRequestBody = await request.json();
        let { email, password } = requestBody;

        if (typeof email !== 'string' || typeof password !== 'string') {
            throw new Error('Invalid data types for credentials');
        }
        email = email.toLowerCase();
        // Logika uwierzytelniania
        mongoose.set();

        console.log('This come from api: ', email, password);
        return NextResponse.json({ message: 'Logged in successfully' }, { status: 200 });
    } catch (e) {
        if (e) return NextResponse.json({ message: 'Invalid JSON' }, { status: 400 });
    }
}
