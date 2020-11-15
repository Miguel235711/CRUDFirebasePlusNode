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
import { FirestoreModel } from './models.base';
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
        private id: string = ''
    ){
        super(Laptop.name)
        //console.log(`brand type: typeof(brand)`)
    }
    async save(): Promise<string>{
        const result = await this.firestoreCollection.add({
            title : this.title,
            description: this.description,
            brand: this.brand,
            model: this.model,
        })
        this.id = result.id
        return this.id
    }
    async edit() : Promise<FirebaseFirestore.WriteResult>{
        //const {['dateAdded']:_,...rest} = value[1]
        return await this.firestoreCollection.doc(this.id).update({
            title: this.title,
            description: this.description,
            brand: this.brand,
            model: this.model
        })
    }
    static async get(): Promise<Laptop[]>{
        return (await this.getColecctionRef(Laptop.name).get()).docs.map((value)=>{
            return {
                ...value.data(),
                id: value.id
            } as unknown as Laptop
        })
    }
    static async delete(id: string): Promise<FirebaseFirestore.WriteResult>{
        return  this.getColecctionRef(Laptop.name).doc(id).delete()
    } 
}