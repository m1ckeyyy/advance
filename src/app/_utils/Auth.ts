import axios from 'axios';

export async function validateAccessToken(): Promise<boolean> {
    try {
        console.log('start validateAccessToken:');

        const response = await axios.post(
            '/api/auth',
            {},
            {
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );
        console.log('Auth response: ', response.status);
        return response.status === 200;
    } catch (error) {
        console.error('Authentication error:', error);
        return false;
    }
}
