import { CanActivate, ExecutionContext, HttpException, HttpStatus, Injectable } from "@nestjs/common";

@Injectable()
export class AuthGuard implements CanActivate {
    canActivate(context: ExecutionContext) {
        const request = context.switchToHttp().getRequest();
        return this.validateRequest(request);
    }

    validateRequest(request: Request) {
        const token = request.headers['authorization'];

        if (!token) {
            throw new HttpException('Unauthorized!!', HttpStatus.FORBIDDEN)
        }

        return true;
    }
}
