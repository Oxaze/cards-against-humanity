import firebase from "firebase/app";
import "firebase/firestore";

const config = {
	apiKey: "AIzaSyDB-nJjEAJz-vMU-APxliYcrfeftf3wlEY",
	authDomain: "cards-against-humanity-4b4f4.firebaseapp.com",
	databaseURL: "https://cards-against-humanity-4b4f4.firebaseio.com",
	projectId: "cards-against-humanity-4b4f4",
	storageBucket: "cards-against-humanity-4b4f4.appspot.com",
	messagingSenderId: "167154479802",
};
firebase.initializeApp(config);

export const db = firebase.firestore();

// export const db = firebase
// 	.firestore()
// 	.enablePersistence()
// 	.then(() => {
// 		console.log("Initialized Cloud Firestore through Firebase.");
// 	})
// 	.catch(err => {
// 		if (err.code === "failed-precondition") {
// 			console.log("Multiple tabs open, persistence can only be enabled in one tab at a a time.");
// 		} else if (err.code === "unimplemented") {
// 			console.log(
// 				"The current browser does not support all of the features required to enable persistence"
// 			);
// 		}
// 	});
