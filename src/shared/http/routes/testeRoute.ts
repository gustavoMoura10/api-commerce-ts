import { Request, Response, Router } from "express";

const routes = Router();

routes.get('/',(req:Request,res:Response)=>{
  res.send({message:true});
})
routes.get('/e',(req:Request,res:Response)=>{
  res.send({message:'e'});
})

export const initTesteRoutes = () =>{
  return routes;
};
