import { FacebookAuthProvider, signInWithPopup} from "firebase/auth";
import { auth } from './firebase'; 

export const handleFacebookSignIn = async(verification)=>{
    const provider = new FacebookAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("User signed in with Facebook:", user);
      verification(true)
      // You can now store user info or redirect
    } catch (error) {
      console.error("Facebook sign-in error", error);
      verification(false)
    }
   }