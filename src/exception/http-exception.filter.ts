import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from "@nestjs/common";
import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const request = ctx.getRequest<Request>();
        const status = exception.getStatus();

        const {
            message,
            error,
            statusCode
        } = exception.getResponse() as ExceptionResponse;

        response.status(status).json({
            status,
            error,
            statusCode,
            path: request.url,
            timestamp: new Date().toISOString(),
            message,
        })

    }
}


export class ExceptionResponse {
    message: string | string[];
    error: string;
    statusCode: number;
}
