import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//cambiar credenciales 
const firebaseConfig = {
  apiKey: "AIzaSyBR75bEhh0JWjZ7dJlnuOGRVs3R5UXBXbw",
  authDomain: "parcial3dps-cf7cc.firebaseapp.com",
  databaseURL: "https://parcial3dps-cf7cc.firebaseio.com",
  projectId: "parcial3dps-cf7cc",
  storageBucket: "parcial3dps-cf7cc.appspot.com",
  messagingSenderId: "767797577047",
  appId: "1:767797577047:web:ea66270e815c10f5496a12",
  measurementId: "G-9YPYR0Y0XS"
};

// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Representa el proveedor de autenticación de inicio de sesión de Google.
// Utilice esta clase para obtener
const provider = new firebase.auth.GoogleAuthProvider();

//Para acceder con una ventana emergente, llama a signInWithPopup
export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};

export const generateUserDocument = async (user, additionalData) => {
  if (!user) return;
  //En algunos casos, puede ser útil crear una referencia de documento con un ID 
  //generado automáticamente y, luego, usar la referencia más adelante. 
  //Para este caso práctico, puedes llamar a doc():
  const userRef = firestore.doc(`users/${user.uid}`);

  // Para obetner el registro creado
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { email, displayName, photoURL } = user;
    try {
      // Para crear o reemplazar un solo documento, usa el método set()
      await userRef.set({
        displayName,
        email,
        photoURL,
        ...additionalData
      });
    } catch (error) {
      console.error("Error crear el usuario", error);
    }
  }
  return getUserDocument(user.uid);
};

// getUserDocument , consulta un registro por medio del id
const getUserDocument = async uid => {
  if (!uid) return null;
  try {
    const userDocument = await firestore.doc(`users/${uid}`).get();
    return {
      uid,
      ...userDocument.data()
    };
  } catch (error) {
    console.error("Error extraer usuario", error);
  }
};
