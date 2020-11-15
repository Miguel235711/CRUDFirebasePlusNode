import * as admin from 'firebase-admin'
import {api} from './laptop';


// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
/*
    ///laptops
    <id>:{
        title: string,
        description: string,
        brand: enum,
        model: enum
        price: number,
    }
*/
admin.initializeApp()

exports.laptop = api

