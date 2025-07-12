import { NextFunction, Request, Response } from "express";
import status from "http-status";
import { envData } from "../config";
import mongoose from "mongoose";

type TerrrorSource = { path: string | number, message: string }[]


export const GlobalError = (err: any, req: Request, res: Response, next: NextFunction) => {

  let statusCode = err?.status || 500
  let message = err?.message || 'something went wrong'
  let errorSource: TerrrorSource = [{
    path: '',
    message: ''
  }]




if(err?.name === 'ValidationError'){
 const placeErrorSource =  Object.values(err?.errors).map((value:any) =>{
  return {
    path: value?.path,
    message: value?.message
  }
  })

  statusCode = status.BAD_REQUEST
  errorSource = placeErrorSource
  message= 'validation error'
}



  res.status(statusCode).json({
    success: false,
    code: statusCode,
    message: message,
    errorSource: errorSource,
    // mtEror:err,
    stack: envData.mode === "development" ? err.stack : undefined,
  });


};
