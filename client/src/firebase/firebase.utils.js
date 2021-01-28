import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
};

// We'll get a collectionSnapshot and convert it to an object
export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map((doc) => {
        const { title, items } = doc.data();

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items,
        };
    });

    return transformedCollection.reduce((acc, collection) => {
        acc[collection.title.toLowerCase()] = collection;
        return acc;
    }, {});
};

/* THIS FUNCTION ONLY CREATES A NEW USER IF THE USER LOGGED IN DOESN'T EXIST IN THE FIRESTORE */
// userAuth obj is the one that's returned by the Google Sign In
export const createUserProfileDocument = async (userAuth, aditionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...aditionalData,
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};

// We're 'mimicking' the functionality that we may encounter
// when we don't have Firebase as the backend in our app
export const getCurrentUser = () => {
    // We want to return a Promise oriented solution
    // that our sagas can yield for
    return new Promise((resolve, reject) => {
        const unsuscribe = auth.onAuthStateChanged((userAuth) => {
            // This is just a 'trick', because we're unsuscribing to
            // the observable stream every time we get a userAuth change
            // that could be logged in (a user obj) or logged out (null).
            unsuscribe();

            resolve(userAuth);
        }, reject);
    });
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export const firestore = firebase.firestore();

export default firebase;
