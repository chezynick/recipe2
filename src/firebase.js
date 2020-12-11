import firebase from 'firebase';
import 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyAk_2-jENzJaj1IHHjX6nI_-S6Mdel-S2s',
	authDomain: 'recipe-a6889.firebaseapp.com',
	databaseURL: 'https://recipe-a6889.firebaseio.com',
	projectId: 'recipe-a6889',
	storageBucket: 'recipe-a6889.appspot.com',
	messagingSenderId: '139072848251',
	appId: '1:139072848251:web:fc412f30c60625c0067dde',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;
