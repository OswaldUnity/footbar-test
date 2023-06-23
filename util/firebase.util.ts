import { initializeApp } from "firebase/app";
import {addDoc, collection, getFirestore} from "@firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.APIKEY,
  authDomain: process.env.AUTHDOMAIN,
  projectId: process.env.PROJECTID,
  storageBucket: process.env.STORAGEBUCKET,
  messagingSenderId: process.env.MESSAGINGSENDERID,
  appId: process.env.APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function InsertDB(info: string) {
  const date = new Date();
  
  await addDoc(collection(db, "code"), {
    data: info,
    time: date.getTime(),
    date: date.toISOString()
  });
}