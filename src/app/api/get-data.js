import { db } from "../firebase";
import { getDocs, collection } from "firebase/firestore";

export async function fetchUserData() {
  const querySnapshot = await getDocs(collection(db, "event_detail"));

  const data = [];
  querySnapshot.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() });
  });
  return data;
}
