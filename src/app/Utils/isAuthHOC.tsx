'use client';
import { validateAccessToken } from './Auth';
import { useEffect, useState } from 'react';
import { redirect } from 'next/navigation';
import Cookies from 'js-cookie';

export default function isAuthHOC(Component: React.ComponentType<any>, uponValidationRedirectTo: 'admin' | 'edit-offers') {
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
                    const isAuthenticated = await validateAccessToken(accessToken);
                    setAuth(isAuthenticated);
                } catch (error) {
                    console.error('Error during authentication:', error);
                    setAuth(false);
                }
            })();
        }, []);

        //jezeli uponValidationRedirectTo ==  'admin' i auth == true
        //redirect to /edit-offers

        //first run before useEffect dont render nothing (wait for useEffect)
        if (auth === null) {
            return null;
        }
        //if authorization failed && uponValidationRedirectTo ==  'edit-offers' (redirect to admin)
        if (!auth) {
            return redirect('/admin');
        }

        return <Component {...props} />;
    };
}
