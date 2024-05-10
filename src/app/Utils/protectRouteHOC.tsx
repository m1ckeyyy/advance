'use client';
import { validateAccessToken } from './Auth';
import { useEffect, useState } from 'react';
import { redirect } from 'next/navigation';
import Cookies from 'js-cookie';

export default function protectRouteHOC(Component: React.ComponentType<any>, route: 'offers-dashboard' | 'admin') {
    return function IsAuth(props: any) {
        const [auth, setAuth] = useState<boolean | null>(null);

        useEffect(() => {
            console.log('HOC run');
            (async function () {
                const accessToken = Cookies.get('access_token');

                if (!accessToken) {
                    setAuth(false);
                    return;
                }
                try {
                    const isAuthenticated = await validateAccessToken();
                    setAuth(isAuthenticated);
                } catch (error) {
                    console.error('Error during authentication:', error);
                    setAuth(false);
                }
            })();
        }, []);

        if (auth === null) {
            return null;
        }
        if (route == 'offers-dashboard' && !auth) return redirect('/admin');
        if (route == 'admin' && auth) return redirect('/offers-dashboard');

        return <Component {...props} />;
    };
}
