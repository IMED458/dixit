import { initializeApp } from 'firebase/app';
import { initializeFirestore } from 'firebase/firestore';
import { getAuth, signInAnonymously, onAuthStateChanged, User } from 'firebase/auth';

// Public by design — security is enforced by Firestore rules (firestore.rules).
const firebaseConfig = {
  apiKey: 'AIzaSyBbtyxT_MpsMTvh1yFF_aLtriWkQ0SASWw',
  authDomain: 'dixit-4a8cc.firebaseapp.com',
  projectId: 'dixit-4a8cc',
  storageBucket: 'dixit-4a8cc.firebasestorage.app',
  messagingSenderId: '446095008501',
  appId: '1:446095008501:web:fa03cc8f16a953fa055bbc',
  measurementId: 'G-0C8NYR1BND',
};

const app = initializeApp(firebaseConfig);

// Auto-detect long polling: on some mobile networks / proxies the Firestore
// streaming (WebChannel) transport gets blocked, so onSnapshot stops receiving
// live updates (host never sees new players, "ready" never syncs) and the
// console logs 404s from the channel endpoint. Auto-detect falls back to long
// polling on those networks while keeping streaming where it works.
export const db = initializeFirestore(app, {
  experimentalAutoDetectLongPolling: true,
});
export const auth = getAuth(app);

let signInPromise: Promise<User> | null = null;

/** Ensure the browser is signed in anonymously; resolves with the stable uid. */
export function ensureSignedIn(): Promise<User> {
  if (auth.currentUser) return Promise.resolve(auth.currentUser);
  if (signInPromise) return signInPromise;
  signInPromise = new Promise<User>((resolve, reject) => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) { unsub(); resolve(user); }
    });
    signInAnonymously(auth).catch((err) => { unsub(); signInPromise = null; reject(err); });
  });
  return signInPromise;
}
