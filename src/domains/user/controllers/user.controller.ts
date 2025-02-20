import { Controller, Get, UseGuards } from "@nestjs/common";
import { UserService } from "../services/user.service";
import { Roles } from "src/custom-decorator/roles.decorator";
import { RoleGuard } from "src/guard/role.guard";


@Controller('users')
@UseGuards(RoleGuard)
@Roles(['admin'])
export class UserController {

    constructor(private readonly _userService: UserService) { }

    @Get()
    getList() {
        return this._userService.getList();
    }
}
