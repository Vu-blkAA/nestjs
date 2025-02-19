import { ArgumentsHost, ExceptionFilter, HttpException } from "@nestjs/common";
export declare class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost): void;
}
export declare class ExceptionResponse {
    message: string | string[];
    error: string;
    statusCode: number;
}
