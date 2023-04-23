import { db } from "./config";
import {
  ref,
  push,
  onValue,
  remove,
  get,
  set,
} from "firebase/database";

const collectionName = "Reservaciones";

export const saveReservacion = (newReser) => {
  const websitesRef = ref(db, collectionName);
  push(websitesRef, newReser);
};

export const updateReservacion = (id, updatedReser) => {
  const websiteRef = ref(db, `${collectionName}/${id}`);
  set(websiteRef, updatedReser);
};

export const onGetReservacion = (callback) => {
  const websitesRef = ref(db, collectionName);
  onValue(websitesRef, (snapshot) => {
    const data = snapshot.val();
    callback(data);
  });
};

export const getReservacion = async () => {
  const websitesRef = ref(db, collectionName);
  const snapshot = await get(websitesRef);
  return snapshot.val();
};

export const deleteReservacion = (id) => {
  const websiteRef = ref(db, `${collectionName}/${id}`);
  remove(websiteRef);
};

export const getIdReservacion = async (id) => {
  const request = ref(db, `${collectionName}/${id}`);
  const snapshot = await get(request);
  return snapshot.val();
};