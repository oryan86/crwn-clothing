import React from "react";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const Signin = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    console.log(user);
  };
  return (
    <div>
      <p className="font-bold text-xl p-2">Sign In Page</p>
      <button
        className="border p-2 bg-blue-500 rounded-lg text-white ml-1"
        onClick={logGoogleUser}
      >
        Sign in with Google Popup
      </button>
    </div>
  );
};

export default Signin;
