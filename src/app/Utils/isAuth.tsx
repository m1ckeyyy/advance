'use client';
import { authenticate } from './Auth';
import { useEffect, useState } from 'react';
import { redirect } from 'next/navigation';
//import Cookies from 'js-cookie';

export default function isAuth(Component: React.ComponentType<any>) {
    return function IsAuth(props: any) {
        const [auth, setAuth] = useState<boolean | undefined>(false);

        useEffect(() => {
            authenticate()
                .then((authorizationResponse) => {
                    setAuth(authorizationResponse);
                })
                .catch((e) => null);
        }, []);

        if (!auth) {
            return redirect('/');
        }

        return <Component {...props} />;

        //return auth ? <Component {...props} /> : redirect('/');
    };
}
