import { collection, getDocs, where, query } from 'firebase/firestore';
import { db } from '../Firebase/FirebaseConfig';

const productCollectionRef = collection(db, 'products');
const PARENT_COLLECTION_NAME = "categories";

export const fetchProducts = async (payload) => {
  try {
    // console.log(payload,"payload")
    let customQuery;
    if(payload?.categoryId) {
      customQuery = query(collection(db, "products"), where("category", "==", payload?.categoryId));
    } else {
      customQuery = productCollectionRef
    }
    const data = await getDocs(customQuery);
    const productsList = data.docs.map((doc) => ({ ...doc.data(), _id: doc.id }));
    return productsList;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};
export const fetchProduct = async (id) => {

  const customQuery = query(collection(db, "products"), where("_id", "==", id));
  const data = await getDocs(customQuery);
  
  const product = await data.docs.map(doc => ({
    ...doc.data(),
    _id: doc.id
  }));

  console.log(product, id)

  return product?.length ? product[0] : null;

};

export const fetchCategories = async () => {
  const categoriesCollectionRef = collection(db, PARENT_COLLECTION_NAME);
  const categorySnapshot = await getDocs(categoriesCollectionRef);

  const categoryList = await categorySnapshot.docs.map(doc => ({
    ...doc.data(),
    _id: doc.id
  }));

  return categoryList;
};

export const fetchCategory = async (id) => {
  const categoriesCollectionRef = query(collection(db, PARENT_COLLECTION_NAME), where("_id", "==", id));
  const categorySnapshot = await getDocs(categoriesCollectionRef);

  const category = await categorySnapshot.docs.map(doc => ({
    ...doc.data(),
    _id: doc.id
  }));

  return category?.length ? category[0] : null;
};