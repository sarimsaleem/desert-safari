import { v4 as uuidv4 } from 'uuid';
import { collection, doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { db } from './../Firebase/FirebaseConfig';

export const saveContactData = async (data) => {
  try {
    const docId = uuidv4();
    const docRef = doc(collection(db, "queries"), docId);
    await setDoc(docRef, {
      ...data,
      timestamp: serverTimestamp(),
    });
    console.log("Document written with custom ID: ", docId);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
