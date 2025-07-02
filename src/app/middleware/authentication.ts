import { NextFunction, Request, Response } from "express";

export const authentication = (req: Request, res: Response, next: NextFunction) => {
    console.log('hello world')
}