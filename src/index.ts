import "reflect-metadata";
import {createConnection} from "typeorm";
import {Request, Response} from "express";
import * as express from "express";
import * as expressLayout from "express-ejs-layouts";
import * as bodyParser from "body-parser";
import * as path from 'path'
import {AppRoutes, ViewRoutes} from "./routes";


// create connection with database
// note that it's not active database connection
// TypeORM creates connection pools and uses them for your requests
createConnection().then(async connection => {

    // create express app
    const app = express();
    app.use(express.static('public'))
    app.set('views', path.join(__dirname, '/views'))
    app.set('view engine', 'ejs');
    app.use(expressLayout);
    app.use(bodyParser.urlencoded())
    app.use(bodyParser.raw());
    app.use(bodyParser.text());
    app.use(bodyParser.json());

    // register all application routes
    AppRoutes.forEach(route => {
        app[route.method](route.path, (request: Request, response: Response, next: Function) => {
            route.action(request, response)
                .then(() => next)
                .catch(err => next(err));
        });
    });
    ViewRoutes.forEach(route => {
        app[route.method](route.path, (request: Request, response: Response, next: Function) => {
            route.action(request, response)
                .then(() => next)
                .catch(err => next(err));
        });
    });

    // run app
    app.listen(3000);

    console.log("Express application is up and running on port 3000");

}).catch(error => console.log("TypeORM connection error: ", error));
