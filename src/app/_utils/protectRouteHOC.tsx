'use client';
import { validateAccessToken } from './Auth';
import { useEffect, useState } from 'react';
import { redirect } from 'next/navigation';
import Cookies from 'js-cookie';

export default function protectRouteHOC(Component: React.ComponentType<any>, route: 'offers-dashboard' | 'admin') {
    return function IsAuth(props: any) {
        const [auth, setAuth] = useState<boolean | null>(null);
        useEffect(() => {
            console.log('dc', document.cookie);
            console.log('HOC run');
            (async function () {
                const accessToken = Cookies.get('access_token');
                console.log('czy jest AT?: ', accessToken);
                if (!accessToken) {
                    setAuth(false);
                    return;
                }
                try {
                    console.log('HALO protectRoute');
                    const isAuthenticated = await validateAccessToken();
                    setAuth(isAuthenticated);
                } catch (error) {
                    console.error('Error during authentication:', error);
                    setAuth(false);
                }
            })();
            console.log('wtf: ', auth);
        }, []);

        if (auth === null) {
            return <div>Loading...</div>;
        }
        console.log(auth, route, 'chuj');
        if (route == 'offers-dashboard' && !auth) {
            console.log('1');
            return redirect('/admin');
        }
        if (route == 'admin' && auth) {
            console.log('2');
            return redirect('/offers-dashboard');
        }

        console.log('rendering...', auth, route);
        return <Component {...props} />;
    };
}
