"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatsModules = void 0;
const common_1 = require("@nestjs/common");
const cats_controller_1 = require("./controller/cats.controller");
const cats_service_1 = require("./services/cats.service");
const http_exception_filter_1 = require("../../exception/http-exception.filter");
let CatsModules = class CatsModules {
};
exports.CatsModules = CatsModules;
exports.CatsModules = CatsModules = __decorate([
    (0, common_1.UseFilters)(http_exception_filter_1.HttpExceptionFilter),
    (0, common_1.Module)({
        imports: [],
        controllers: [cats_controller_1.CatsController],
        providers: [cats_service_1.CatsService]
    })
], CatsModules);
//# sourceMappingURL=cats.module.js.map