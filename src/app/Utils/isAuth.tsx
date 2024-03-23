'use client';
import { isAuthenticated } from './Auth';
import { useEffect } from 'react';
import { redirect } from 'next/navigation';

export default function isAuth(Component: React.ComponentType<any>) {
    return function IsAuth(props: any) {
        const auth = isAuthenticated;

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
