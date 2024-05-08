import axios from 'axios';

export async function authenticate(accessToken: string): Promise<boolean> {
    console.log('run');
    try {
        const response = await axios.post(
            'http://127.0.0.1:4000/auth',
            { accessToken },
            {
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );
        return response.status === 200;
    } catch (error) {
        console.error('Authentication error:', error);
        return false;
    }
}
