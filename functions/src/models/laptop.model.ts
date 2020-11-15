/*
    ///laptops
    <id>:{
        title: string,
        description: string,
        brand: enum,
        model: string
        price: number,
    }
*/
import { FirestoreModel } from './model';
export
enum Brand{
    Lenovo,
    Apple,
    HP,
    Dell,
    Razer,
}
export
class Laptop extends FirestoreModel{
    constructor(
        private title: string,
        private description: string,
        private brand : Brand,
        private model: string,
        protected collection: string,
    ){
        super(collection)
    }
    async save(): Promise<FirebaseFirestore.DocumentReference<FirebaseFirestore.DocumentData>>{
        return await this.firestoreCollection.add({
            title :this.title,
            description: this.description,
            brand: this.brand,
            model: this.model,
        })
    }
}