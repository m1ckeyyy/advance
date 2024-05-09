'use client';

import { useState } from 'react';
import styles from './AddOfferForm.module.scss';

type Offer = {
    numer_kontaktowy: string;
    tytul: string;
    opis: string;
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
        numer_kontaktowy: 'Numer kontaktowy',
        tytul: 'Tytuł',
        opis: 'Opis',
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
        <form onSubmit={handleSubmit} className={styles.formContainer}>
            {Object.entries(inputFields).map(([fieldName, label]) => (
                <label key={fieldName}>
                    {label}:
                    <input type="text" name={fieldName} placeholder={label} value={(offer as any)[fieldName] || ''} onChange={handleChange} />
                </label>
            ))}

            {/*
            <label>
                Numer kontaktowy:
                <input type="text" name="numer_kontaktowy" value={offer.numer_kontaktowy || ''} onChange={handleChange} />
            </label>
             <label>
                Tytuł:
                <input type="text" name="tytul" value={offer.tytul || ''} onChange={handleChange} />
            </label>
            <label>
                Opis:
                <textarea name="opis" value={offer.opis || ''} onChange={handleChange} />
            </label>
            <label>
                Cena:
                <input type="number" name="cena" value={offer.cena || 0} onChange={handleChange} />
            </label>
            <label>
                Metraż:
                <input type="number" name="metraz" value={offer.metraz || 0} onChange={handleChange} />
            </label>
            <label>
                Liczba pokoi:
                <input type="text" name="liczba_pokoi" value={offer.liczba_pokoi || ''} onChange={handleChange} />
            </label>
            <label>
                Piętro:
                <input type="text" name="pietro" value={offer.pietro || ''} onChange={handleChange} />
            </label>
            <label>
                Stan wykończenia:
                <input type="text" name="stan_wykonczenia" value={offer.stan_wykonczenia || ''} onChange={handleChange} />
            </label>
            <label>
                Ogrzewanie:
                <input type="text" name="ogrzewanie" value={offer.ogrzewanie || ''} onChange={handleChange} />
            </label>
            <label>
                Rok budowy:
                <input type="text" name="rok_budowy" value={offer.rok_budowy || ''} onChange={handleChange} />
            </label>
            <label>
                Balkon:
                <input type="text" name="balkon" value={offer.balkon || ''} onChange={handleChange} />
            </label>
            <label>
                Ogród:
                <input type="text" name="ogrod" value={offer.ogrod || ''} onChange={handleChange} />
            </label>
            <label>
                Taras:
                <input type="text" name="taras" value={offer.taras || ''} onChange={handleChange} />
            </label>
            <label>
                Forma własności:
                <input type="text" name="forma_wlasnosci" value={offer.forma_wlasnosci || ''} onChange={handleChange} />
            </label>
            <label>
                Zabezpieczenia:
                <input type="text" name="zabezpieczenia" value={offer.zabezpieczenia || ''} onChange={handleChange} />
            </label>
            <label>
                Wyposażenie:
                <input type="text" name="wyposazenie" value={offer.wyposazenie || ''} onChange={handleChange} />
            </label>
            <label>
                Klimatyzacja:
                <input type="text" name="klimatyzacja" value={offer.klimatyzacja || ''} onChange={handleChange} />
            </label> */}

            <button type="submit" className={styles.submitBtn}>
                Submit
            </button>
        </form>
    );
}
