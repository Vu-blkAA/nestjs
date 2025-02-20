import { CanActivate, ExecutionContext, HttpException, HttpStatus, Injectable, UnauthorizedException } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Roles } from "src/custom-decorator/roles.decorator";

@Injectable()
export class RoleGuard implements CanActivate {
    constructor(private readonly reflector: Reflector) { }

    canActivate(context: ExecutionContext) {
        const roles = this.reflector.get(Roles, context.getClass());

        if (!roles)
            return true;

        const request = context.switchToHttp().getRequest();
        const user = request.user;

        const isMatch = this.matchRoles(roles, user?.roles);

        if (!isMatch)
            throw new UnauthorizedException();

        return true;
    }


    matchRoles(roles: string[], userRoles: string[]): boolean {
        return roles.some(role => userRoles?.includes(role));
    }
}
