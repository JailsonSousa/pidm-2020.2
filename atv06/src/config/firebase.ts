/* eslint-disable import/no-duplicates */
import * as firebase from 'firebase';

import 'firebase/auth';
import 'firebase/firestore';

// preencher com os dados do projeto do firebase

const firebaseConfig = {
  apiKey: '',
  authDomain: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: '',
};

firebase.default.initializeApp(firebaseConfig);

export const auth = firebase.default.auth();
export const firestore = firebase.default.firestore();
