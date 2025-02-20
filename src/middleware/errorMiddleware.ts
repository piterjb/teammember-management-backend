import { Request, Response, NextFunction } from "express";

export const errorMiddleware = (err: any, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);//to find the code line where error occurred
    res.status(500).json({message: 'Error 500, failed'});
}