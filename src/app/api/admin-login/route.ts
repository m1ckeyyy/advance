//admin-login
import { connectToDatabase } from '@/app/_utils/db';
import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
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

        console.log('ismatching: ', isMatching);
        console.log('This come from api: ', email, password);
        return NextResponse.json({ message: 'Logged in successfully' }, { status: 200 });
    } catch (e) {
        console.log(e);
        if (e) return NextResponse.json({ message: 'Invalid JSON, Add email and password in request body' }, { status: 400 });
    }
}
