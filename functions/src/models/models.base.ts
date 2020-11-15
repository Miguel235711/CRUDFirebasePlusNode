import * as admin from 'firebase-admin'

export
abstract class FirestoreModel{
    protected firestoreCollection: admin.firestore.CollectionReference
    constructor(collection: string){
        this.firestoreCollection = FirestoreModel.getColecctionRef(collection)
    }
    protected static getColecctionRef(className: string): admin.firestore.CollectionReference{
        return admin.firestore().collection(className)
    } 
    abstract async save(): Promise<string>
    abstract async edit(): Promise<FirebaseFirestore.WriteResult>
    //abstract async get(): Promise<FirestoreModel[]>
}
export
abstract class DatabaseModel{
    protected databaseCollection: admin.database.Reference
    constructor(collection: string){
        this.databaseCollection = DatabaseModel.getColecctionRef(collection)
    }
    protected static getColecctionRef(className: string): admin.database.Reference{
        return admin.database().ref(className)
    } 
    abstract async save(): Promise<string>
    abstract async edit(): Promise<any>
    //abstract async get(): Promise<FirestoreModel[]>
}