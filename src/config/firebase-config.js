var admin = require("firebase-admin");

var serviceAccount = require("../../ressources/private-key/carsapi-fe883-firebase-adminsdk-1a1ez-030c7f5d82.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const firestore = admin.firestore();

module.exports = firestore;