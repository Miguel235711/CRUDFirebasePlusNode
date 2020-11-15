import { Request,Response } from 'firebase-functions';

import {Laptop/*,Brand*/} from '../models/laptop.model'

export
const saveOrder = async (req: Request,res: Response)=>{
    const body = req.body
    ///TODO: change FirestoreModel to use the class name as collection name
    const model = new Laptop(
        body.title,
        body.description,
        body.brand,
        body.model,
        'Laptop'
    )
    try{
        const result = await model.save()
        console.log(result)
        res.status(201).json({
            'msg':'Laptop Added Successfully',
        })
    }catch(e){
        console.log(e)
        res.status(500).json({
            'msg':e,
        })
    }
    //console.log(`hello world ${req.method}`)
    //res.status(200).json({'msg':'hello world!'})
}