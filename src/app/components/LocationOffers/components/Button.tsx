'use client';
import useStore from '@/app/store';

export const Button = () => {
    const toggleDark = () => {
        console.log(useStore.getState().darkMode);
        useStore.setState({ darkMode: !useStore.getState().darkMode });
    };

    return (
        <button onClick={toggleDark}>
            {'BBB ' + useStore.getState().darkMode}
        </button>
    );
};
