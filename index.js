import express from "express";
import { config } from "dotenv";
import { initiateApp } from "./src/initiate-app.js";

config({path:'./config/config.env'})

const app = express();



initiateApp(app,express)