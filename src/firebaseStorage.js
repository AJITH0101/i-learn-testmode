import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";



 const saveLastSeen = async(lastSeenHrs,lastSeenMins)=>{
        const db = getFirestore()
        const createTime = doc(db,'times/lastSeen')

        try {
        await setDoc(createTime,{time_hrs:lastSeenHrs,time_min:lastSeenMins})
        console.log('Time updated in Firestore!');
            
        } catch (error) {
            console.log("Error occured in saving timeSnap");            
            
        }
        
    }

    const fetchLastSeen = async () => {
        const db = getFirestore(); // Use getFirestore for Firestore
        const docRef = doc(db, 'times/lastSeen'); // Reference the document
    
        try {
            const docSnap = await getDoc(docRef); // Fetch the document
            if (docSnap.exists()) {
                console.log("Last seen time:", docSnap.data().time); // Access data from the document
            } else {
                console.log("No such document!");
            }
        } catch (error) {
            console.log("Error fetching document:", error);
        }
    };

export  {saveLastSeen, fetchLastSeen};

// export const saveLastSeen = (lastSeen)=>{
//     console.log(lastSeen);    

// }

