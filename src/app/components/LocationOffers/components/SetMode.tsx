'use client';
import useStore from '@/app/store';
export const SetMode = () => {
    const isDark = useStore((state) => state.darkMode);
    console.log(isDark);
    return <div>{'current mode:' + isDark}</div>;
};
