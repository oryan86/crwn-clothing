import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQwRVgXLS_eiXWU1rntrS-PHyLc6qzVCI",
  authDomain: "crwn-clothing-db-cc9a8.firebaseapp.com",
  projectId: "crwn-clothing-db-cc9a8",
  storageBucket: "crwn-clothing-db-cc9a8.appspot.com",
  messagingSenderId: "640911975488",
  appId: "1:640911975488:web:57f555e9187110a2b66ba5",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore(firebaseApp);

// using a async function to create a user Document
export const createUserDocumentFromAuth = async (userAuth) => {
  // first one is Database, collection, uID
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  //   if don't exists do this
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }
  return userDocRef;
};
