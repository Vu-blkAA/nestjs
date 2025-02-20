import { NestMiddleware } from "@nestjs/common";
import { NextFunction } from "express";
import { Request, Response } from "express";


export class LoggerMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        console.log('Request...', req.method, req.url);
        next();
    }
}
