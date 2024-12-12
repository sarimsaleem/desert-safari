
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../Firebase/FirebaseConfig';

const blogCollectionRef = collection(db, 'blogs');

export const fetchBlogs = async () => {
    try {
      const data = await getDocs(blogCollectionRef);
      const blogsList = data.docs.map((doc) => ({ ...doc.data(), _id: doc.id }));
      return blogsList;
    } catch (error) {
      console.error('Error fetching blogs:', error);
      return [];
    }
  };