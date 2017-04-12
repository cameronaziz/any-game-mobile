import * as firebase from 'firebase';
import firebaseConfig from '../lib/firebaseConfig'


export const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.database();
export const auth = firebaseApp.auth();