import { db } from "./config";
import {
  ref,  
  get, 
} from "firebase/database";

const collectionName = "Menu";


export const getMenu = async () => {
  const websitesMen = ref(db, collectionName);
  const snapshot = await get(websitesMen);
  return snapshot.val();
};
