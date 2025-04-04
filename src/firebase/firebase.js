// Import the functions you need from the Firebase SDKs
import { initializeApp } from "firebase/app";
import { getAuth, RecaptchaVerifier } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { getStorage } from "firebase/storage"; // Add Firebase Storage

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDK_P1zSvkMbLd9ZIi2_IxBEYTU1r88zjk",
  authDomain: "login-auth-60ebb.firebaseapp.com",
  databaseURL: "https://login-auth-60ebb-default-rtdb.firebaseio.com",
  projectId: "login-auth-60ebb",
  storageBucket: "login-auth-60ebb.appspot.com",
  messagingSenderId: "402940395956",
  appId: "1:402940395956:web:cd3102948715779d2772e1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app); // Authentication
export const db = getFirestore(app); // Firestore Database
export const storage = getStorage(app); // Firebase Storage

// Function to initialize reCAPTCHA verifier
export function setupRecaptcha(containerId = "recaptcha-container") {
  try {
    // Initialize reCAPTCHA verifier
    const recaptchaVerifier = new RecaptchaVerifier(
      containerId,
      { size: "invisible" },
      auth
    );

    // Disable app verification for testing on localhost
    if (window.location.hostname === "localhost") {
      recaptchaVerifier.appVerificationDisabledForTesting = true;
      console.warn("Disabling reCAPTCHA verification for testing on localhost.");
    }

    return recaptchaVerifier;
  } catch (error) {
    console.error("Error setting up reCAPTCHA verifier:", error);
    throw error;
  }
}

// Function to fetch user location (latitude, longitude) from Firestore
export async function fetchUserLocation(userId) {
  try {
    const docRef = doc(db, "locations", userId); // Get a reference to the document
    const docSnap = await getDoc(docRef); // Fetch the document

    if (docSnap.exists()) {
      const data = docSnap.data();
      const { latitude, longitude } = data;
      console.log(`Current Location: Lat: ${latitude}, Lng: ${longitude}`);
      return { latitude, longitude };
    } else {
      console.log("No such document!");
      return null;
    }
  } catch (error) {
    console.error("Error fetching location: ", error);
    throw error; // Optionally rethrow the error to handle it later
  }
}

// Example usage of the fetchUserLocation function
fetchUserLocation("USER_ID")
  .then((location) => {
    if (location) {
      console.log("Location fetched:", location);
    }
  })
  .catch((error) => {
    console.error("Error during location fetch:", error);
  });

export default app;
