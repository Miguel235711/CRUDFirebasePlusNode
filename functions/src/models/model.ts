import * as admin from 'firebase-admin'

export
abstract class FirestoreModel{
    protected firestoreCollection: admin.firestore.CollectionReference
    constructor(protected collection: string){
        this.firestoreCollection = admin.firestore().collection(collection)
    }
    abstract async save(): Promise<FirebaseFirestore.DocumentReference<FirebaseFirestore.DocumentData>>
     
}