'use client';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useState } from 'react';

export async function authenticate() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const accessToken = Cookies.get('access_token');

    //console.log('accesstoken siema; ', accessToken);

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
        setIsAuthenticated(true);

        if (response.status === 200) {
            // setIsAuthenticated(true);
        }
        return true;
    } catch (e) {}
}
