"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElephantsController = void 0;
const common_1 = require("@nestjs/common");
const create_elephant_dto_1 = require("../dto/create-elephant.dto");
const elephants_service_1 = require("../services/elephants.service");
let ElephantsController = class ElephantsController {
    constructor(_elephantsService) {
        this._elephantsService = _elephantsService;
    }
    findAll() {
        return this._elephantsService.findAll();
    }
    findById(params) {
        return this._elephantsService.findOne(params.id);
    }
    create(createElephantDto) {
        return this._elephantsService.create(createElephantDto);
    }
    update(params, body) {
        return 'This action will update elephant ' + JSON.stringify(body);
    }
    delete(params) {
        const { id } = params;
        return `This action will delete a #${id} cat`;
    }
};
exports.ElephantsController = ElephantsController;
__decorate([
    (0, common_1.Get)(''),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], ElephantsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ElephantsController.prototype, "findById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_elephant_dto_1.CreateElephantDto]),
    __metadata("design:returntype", void 0)
], ElephantsController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_elephant_dto_1.UpdateElephantDTO]),
    __metadata("design:returntype", void 0)
], ElephantsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ElephantsController.prototype, "delete", null);
exports.ElephantsController = ElephantsController = __decorate([
    (0, common_1.Controller)('elephants'),
    __metadata("design:paramtypes", [elephants_service_1.ElephantsService])
], ElephantsController);
//# sourceMappingURL=elephants.controller.js.map