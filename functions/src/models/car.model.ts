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
import { DatabaseModel } from './models.base';
export
class Car extends DatabaseModel{
    constructor(
        private brand : string,
        private model: string,
        private year: number,
        private id: string = ''
    ){
        super(Car.name)
        //console.log(`brand type: typeof(brand)`)
    }
    async save(): Promise<string>{
        const result = this.databaseCollection.push({
            brand: this.brand,
            model: this.model,
            year: this.year
        })
        this.id = result.key as string
        return this.id
    }
    async edit() : Promise<void>{
        //const {['dateAdded']:_,...rest} = value[1]
        return await this.databaseCollection.child(this.id).update({
            brand: this.brand,
            model: this.model,
            year: this.year
        })
    }
    static async get(): Promise<any[]>{
        const carMap = ((await this.getColecctionRef(Car.name).once('value')).val() as Object)
        const cars: any[] = []
        console.log(`entries: ${Object.entries(carMap)}`)
        for (const keyValueCar of Object.entries(carMap)){
            const rawCar = keyValueCar[1]
            const car = new Car(rawCar.brand,rawCar.model,rawCar.year,keyValueCar[0].toString())
            const {databaseCollection,...simpleCar} = car
            cars.push(simpleCar)
        }
        return cars
    }
    static async delete(id: string): Promise<void>{
        return await this.getColecctionRef(Car.name).child(id).remove()
    } 
}