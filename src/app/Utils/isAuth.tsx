'use client';
import { isAuthenticated } from './Auth';
import { useEffect } from 'react';
import { redirect } from 'next/navigation';
import Cookies from 'js-cookie';

export default function isAuth(Component: React.ComponentType<any>) {
    return function IsAuth(props: any) {
        const auth = true;
        console.log(document.cookie);
        //axios ask server
        //if response != 200 return redirect
        //return component
        useEffect(() => {
            if (!auth) {
                return redirect('/');
            }
        }, []);

        if (!auth) {
            return null;
        }

        return <Component {...props} />;
    };
}
