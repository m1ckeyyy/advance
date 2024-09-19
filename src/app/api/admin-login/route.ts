import { connectToDatabase } from '@/app/_utils/db';
import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
interface LoginRequestBody {
    email: string;
    password: string;
}

const respondWithError = (message: string, status: number) => {
    return NextResponse.json({ message }, { status });
};

export async function POST(request: NextRequest) {
    try {
        const requestBody: LoginRequestBody = await request.json();
        let { email, password } = requestBody;
        if (typeof email !== 'string' || typeof password !== 'string') {
            throw new Error('Invalid data types for credentials');
        }
        email = email.toLowerCase();

        //Connecting to DB
        const db = await connectToDatabase();
        const adminsCollection = db.collection('admins');

        const admin = await adminsCollection.findOne({ email });

        if (!admin) return respondWithError('Invalid email or password', 401);

        const isMatching = await bcrypt.compare(password, admin.password);

        if (!isMatching) return respondWithError('Invalid email or password', 401);

        const accessToken = jwt.sign({ email }, process.env.ACCESS_TOKEN_SECRET!, {
            expiresIn: '2 days',
        });

        const response = NextResponse.json({ message: 'Admin verified' });

        response.cookies.set('access_token', accessToken, {
            httpOnly: true,
            maxAge: 9999999,
            path: '/',
        });

        return response;
    } catch (e) {
        return respondWithError('Might be invalid JSON, check if you added email and password in the body', 400);
    }
}
