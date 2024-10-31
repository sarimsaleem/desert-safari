import { db } from './../Firebase/FirebaseConfig'; 
import { collection, doc, setDoc } from 'firebase/firestore';

export const addOrder = async (orderDetails, orderId) => {
    try {
        const docRef = doc(collection(db, 'bookings'), orderId); 
        await setDoc(docRef, orderDetails);
        console.log('Document written with custom ID: ', orderId);
        return orderId;
    } catch (error) {
        console.error('Error adding document: ', error);
        throw error; 
    }
};
