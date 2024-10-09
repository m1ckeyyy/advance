import { connectToDatabase } from '@/app/_utils/db';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
    const tokenCookie = request.cookies.get('access_token');
    const token = tokenCookie ? tokenCookie.value : null;

    if (!token) return NextResponse.json({ message: 'Token is missing' }, { status: 401 });

    try {
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET!) as JwtPayload;
        console.log('decoded: ', decoded);
        const email = decoded.email;
        console.log(`${email} successfully verified with JWT`);

        const database = await connectToDatabase();

        return NextResponse.json({ message: 'Hello, authorized user!', email }, { status: 200 });
    } catch (err: any) {
        console.error('JWT verification error:', err);
        return NextResponse.json({ message: 'Invalid token', error: err.message }, { status: 403 });
    }
}
