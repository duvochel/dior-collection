import { decodeAuthHeader, AuthTokenPayload } from "./utils/auth";   
import { Request } from "express";  


export interface Context {
    userId?: string;
}

export const context = ({ req }: { req: Request }): Context => {
    const token =
        req && req.headers.authorization
            ? decodeAuthHeader(req.headers.authorization)
            : null;

    return {
        userId: token?.userId, 
    };
};

