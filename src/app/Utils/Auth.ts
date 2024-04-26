'use client';
import axios from 'axios';
import Cookies from 'js-cookie';
export async function isAuthenticated() {
    const access_token = Cookies.get('name');
    const response = await axios.post(
        'http://127.0.0.1:4000/auth',
        { access_token },
        {
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json',
            },
        }
    );
    console.log(response.data);
}
