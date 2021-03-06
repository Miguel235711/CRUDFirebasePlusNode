import { Request,Response } from 'firebase-functions';

import {Laptop} from '../models/laptop.model'

export
const saveLaptop = async (req: Request,res: Response)=>{
    const body = req.body
    ///TODO: change FirestoreModel to use the class name as collection name
    const model = new Laptop(
        body.title,
        body.description,
        body.brand,
        body.model,
    )
    try{
        const id = await model.save()
        console.log(id)
        res.status(201).json({
            'data':id,
            'msg':'Laptop Added Successfully',
        })
    }catch(e){
        console.log(e)
        res.status(500).json({
            'msg':e,
        })
    }
}
export
const getLaptops = async (req: Request,res: Response)=>{
    ///TODO: change FirestoreModel to use the class name as collection name

    try{
        const laptops = await Laptop.get()
        res.status(200).json({
            'msg':'OK',
            'data':laptops
        })
    }catch(e){
        console.log(e)
        res.status(500).json({
            'msg':e,
        })
    }
}
export
const editLaptop = async (req: Request,res: Response)=>{
    ///TODO: change FirestoreModel to use the class name as collection name
    /// url/{id}
    const body = req.body
    const model = new Laptop(
        body.title,
        body.description,
        body.brand,
        body.model,
        req.params[0].substr(1)
    )
    try{
        const writeResult = await model.edit()
        console.log(writeResult)
        res.status(200).json({
            'msg':'Laptop Edited Successfully',
        })
    }catch(e){
        console.log(e)
        res.status(500).json({
            'msg':e,
        })
    }
}
export
const deleteLaptop = async (req: Request,res: Response)=>{
    ///TODO: change FirestoreModel to use the class name as collection name
    /// url/{id}
    try{
        const writeResult = await Laptop.delete(req.params[0].substr(1))
        console.log(writeResult)
        res.status(200).json({
            'msg':'Laptop Deleted Successfully',
        })
    }catch(e){
        console.log(e)
        res.status(500).json({
            'msg':e,
        })
    }
}