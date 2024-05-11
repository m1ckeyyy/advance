'use client';

import styles from './AddOfferForm.module.scss';
import { useState } from 'react';
import { DM_Sans, Island_Moments } from 'next/font/google';
import { uploadOfferToDatabase } from '@/app/Utils/uploadOfferToDatabase';
import { offerAddingSuccessToast, offerAddingFailToast } from '@/app/Utils/Notifications';
import { ToastContainer } from 'react-toastify';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { nanoid } from 'nanoid';
import { redirect } from 'next/navigation';
import Cookies from 'js-cookie';

const dmSans = DM_Sans({ subsets: ['latin'], weight: '300' });

export type Offer = {
    id: string;
    tytul: string;
    opis: string;
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
    const [offer, setOffer] = useState<Partial<Offer>>({ id: '' });
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const inputFields: Offer = {
        id: 'Id',
        tytul: 'Tytuł',
        opis: 'Opis',
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
        setIsLoading(true);

        const accessToken = Cookies.get('access_token');

        if (!accessToken) return redirect('/admin');
        offer.id = nanoid();
        // console.log(offer);
        const offerHasBeenAdded = await uploadOfferToDatabase(offer);
        console.log(offerHasBeenAdded);
        offerHasBeenAdded ? offerAddingSuccessToast() : offerAddingFailToast();
        setIsLoading(false);
    };
    // console.log(offer);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setOffer((prevOffer) => ({
            ...prevOffer,
            [name]: value,
        }));
    };

    return (
        <form onSubmit={handleSubmit} className={`${styles.formContainer}`}>
            {Object.entries(inputFields).map(([fieldName, label]) => {
                if (fieldName == 'opis' || fieldName == 'id') return;
                return (
                    <label key={fieldName} className={`${styles.inputLabel} ${styles[fieldName]}`}>
                        <span>{label}:</span>
                        <input
                            required
                            type="text"
                            name={fieldName}
                            placeholder={label}
                            value={(offer as any)[fieldName] || ''}
                            onChange={handleChange}
                            className={`${styles.inputField} ${dmSans.className} `}
                        />
                    </label>
                );
            })}
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

            <button type="submit" className={styles.submitBtn}>
                {isLoading ? (
                    <>
                        <AiOutlineLoading3Quarters size="1.5rem" />
                    </>
                ) : (
                    'Submit'
                )}
            </button>
            <ToastContainer />
        </form>
    );
}
