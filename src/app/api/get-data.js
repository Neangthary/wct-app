import { db } from "../firebaseConfig";
import { getDocs, collection } from "firebase/firestore";

export async function fetchUserData() {
  const querySnapshot = await getDocs(collection(db, "users"));

  const data = [];
  querySnapshot.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() });
  });
  return data;
}
