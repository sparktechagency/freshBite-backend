import { Router } from "express";
import { SignIncontroller } from "./sign.controller";

export const signInRoute = Router()

signInRoute.post('/sign-in',SignIncontroller)