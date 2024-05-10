'use client';

import { useState } from 'react';
import styles from './AddOfferForm.module.scss';
import { DM_Sans } from 'next/font/google';

const dmSans = DM_Sans({ subsets: ['latin'], weight: '300' });

type Offer = {
    tytul: string;
    // opis: string;
    numer_kontaktowy: string;
    cena: string;
    metraz: string;
    liczba_pokoi: string;
    pietro: string;
    stan_wykonczenia: string;
    ogrzewanie: string;
    rok_budowy: string;
    balkon: string;
    ogrod: string;
    taras: string;
    forma_wlasnosci: string;
    zabezpieczenia: string;
    wyposazenie: string;
    klimatyzacja: string;
};

export default function AddOfferForm() {
    const [offer, setOffer] = useState<Partial<Offer>>({});

    const inputFields: Offer = {
        tytul: 'Tytuł',
        // opis: 'Opis',
        numer_kontaktowy: 'Numer kontaktowy',
        cena: 'Cena',
        metraz: 'Metraż',
        // zdjecia: 'Zdjęcia',
        liczba_pokoi: 'Liczba pokoi',
        pietro: 'Piętro',
        stan_wykonczenia: 'Stan wykończenia',
        ogrzewanie: 'Ogrzewanie',
        rok_budowy: 'Rok budowy',
        balkon: 'Balkon',
        ogrod: 'Ogród',
        taras: 'Taras',
        forma_wlasnosci: 'Forma własności',
        zabezpieczenia: 'Zabezpieczenia',
        wyposazenie: 'Wyposażenie',
        klimatyzacja: 'Klimatyzacja',
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // Perform form submission here (e.g., send data to backend)

        // Redirect to some page after successful form submission
        //router.push('/');
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setOffer((prevOffer) => ({
            ...prevOffer,
            [name]: value,
        }));
    };

    return (
        <form onSubmit={handleSubmit} className={`${styles.formContainer}`}>
            {Object.entries(inputFields).map(([fieldName, label]) => (
                <label key={fieldName} className={`${styles.inputLabel} ${styles[fieldName]}`}>
                    <span>{label}:</span>
                    <input
                        type="text"
                        name={fieldName}
                        placeholder={label}
                        value={(offer as any)[fieldName] || ''}
                        onChange={handleChange}
                        className={`${styles.inputField} ${dmSans.className} `}
                    />
                </label>
            ))}
            <label className={`${styles.inputLabel} ${styles.opis}`}>
                <span>Opis:</span>
                <textarea
                    rows={10}
                    name="Opis"
                    placeholder="Opis"
                    value={(offer as any)['Opis'] || ''}
                    onChange={handleChange}
                    className={`${styles.inputField} ${dmSans.className}`}
                />
            </label>

            <button type="submit" className={`${styles.submitBtn} `}>
                Submit
            </button>
        </form>
    );
}
