import axios from 'axios';
import { Offer } from '@/app/(routes)/offers-dashboard/components/AddOfferForm';

export async function uploadOfferToDatabase(offer: Partial<Offer>): Promise<boolean> {
    try {
        const response = await axios.post(
            '/api/upload-offer',
            { offer },
            {
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );
        return response.status === 201;
    } catch (error) {
        console.error('Offer upload error:', error);
        return false;
    }
}
