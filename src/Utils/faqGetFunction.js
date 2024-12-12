import { collection, getDocs } from "firebase/firestore"; 
import { db } from '../Firebase/FirebaseConfig'; 
const faqCollectionRef = collection(db, 'faqs');

export const getFAQs = async () => {
    try {
        const querySnapshot = await getDocs(faqCollectionRef); 
        const faqs = querySnapshot.docs.map((doc) => ({
            id: doc.id, 
            ...doc.data(), 
        }));
        return faqs;
    } catch (error) {
        console.error("Error fetching FAQs:", error);
        throw error;
    }
};
