const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();
const db = admin.firestore();

exports.chooseFirstCZar = functions.firestore
	.document("rooms/{roomID}")
	.onUpdate((snapshot, context) => {
		const before = snapshot.before.data();
		const after = snapshot.after.data();

		console.log(before.started, after);

		if (before.started == after.started) return null;

		const { id } = snapshot.after.ref;
		db.collection(`rooms/${id}/players`)
			.get()
			.then(sn => {
				console.log(sn.docs.length);
			});
		// console.log(playersRef);

		return snapshot.after.ref.set(
			{
				test: 1,
			},
			{ merge: true }
		);
	});

// exports.deleteRoom = functions.firestore
// 	.document("rooms/{roomID}")
// 	.onUpdate((snapshot, context) => {
// 		const before = snapshot.before.data();
// 		const after = snapshot.after.data();

// 		console.log(after);

// 		return after.players.length <= 0 ? snapshot.after.ref.delete() : null;
// 	});
