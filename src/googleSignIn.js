import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from './firebase'; 

export const handleGoogleSignIn = async(verification)=>{
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      //console.log("User signed in:", user);
    
      verification(true)
      // You can now store user info or redirect
    } catch (error) {
      //console.error("Google sign-in error", error);
      verification(false)
     
    }
   }