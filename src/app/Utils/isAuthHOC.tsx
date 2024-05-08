'use client';
import { authenticate } from './Auth';
import { useEffect, useState } from 'react';
import { redirect } from 'next/navigation';
import Cookies from 'js-cookie';

export default function isAuthHOC(Component: React.ComponentType<any>) {
    return function IsAuth(props: any) {
        const [auth, setAuth] = useState<boolean | null>(null);

        useEffect(() => {
            async function checkAuth() {
                const accessToken = Cookies.get('access_token');

                if (!accessToken) {
                    setAuth(false);
                    return;
                }
                try {
                    const isAuthenticated = await authenticate(accessToken);
                    setAuth(isAuthenticated);
                } catch (error) {
                    console.error('Error during authentication:', error);
                    setAuth(false);
                }
            }

            checkAuth();
        }, []);

        if (auth === null) {
            return null;
        }

        if (!auth) {
            return redirect('/admin');
        }

        return <Component {...props} />;
    };
}
