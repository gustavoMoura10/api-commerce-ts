import dotenv from 'dotenv';
dotenv.config();
import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import { initRouter } from './shared/http/router';
import AppError from './shared/errors/AppError';
const app = express();
app.use(cors());
app.use(express.json());

(async()=>{
  try {
    app.use(initRouter());
  } catch (error) {
    console.log(error)
    app.use((req:Request,res:Response,next:NextFunction)=>{
      if(error instanceof AppError){
        res.status(error.statusCode).json({
          status:'error',
          message:error.message
        })
      }
      res.status(500).json({
        status:'error',
        message:'Internal server error'
      })
    })
  }
  app.listen(process.env.DEFAULT_PORT,()=>{
    console.log(`Running on PORT:${process.env.DEFAULT_PORT}`)
  })
})()
