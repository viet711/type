import instance from ".";   
import { IProducts, addForm, updateForm } from "../models";
export const getAll = ()=>{
    
    return instance.get("/products")
}
export const getById = (id:string)=>{
    
    return instance.get("/products/"+id)
}
export const update = (id:string, body :updateForm)=>{

    return instance.put("/products/"+id,body)
}
export const addProduct = (products:addForm)=>{

    return instance.post("/products",products)
}
export const deleteProduct = (id:string)=>{

    return instance.delete("/products/"+id);
}

