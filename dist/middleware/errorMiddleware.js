"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorMiddleware = void 0;
const errorMiddleware = (err, req, res, next) => {
    console.error(err.stack); //to find the code line where error occurred
    res.status(500).json({ message: 'Error 500, failed' });
};
exports.errorMiddleware = errorMiddleware;
