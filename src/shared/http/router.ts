import { Router } from "express";
import {initTesteRoutes} from "./routes/testeRoute";

const routes = Router();

export const initRouter = () =>{
  routes.use('/teste',initTesteRoutes());
  return routes;
}
