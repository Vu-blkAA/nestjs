"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const cats_module_1 = require("./domains/cats/cats.module");
const dogs_module_1 = require("./domains/dogs/dogs.module");
const elephants_1 = require("./domains/elephants/elephants");
const logger_middleware_1 = require("./middleware/logger.middleware");
const http_exception_filter_1 = require("./exception/http-exception.filter");
let AppModule = class AppModule {
    configure(consumer) {
        consumer
            .apply(logger_middleware_1.LoggerMiddleware)
            .forRoutes('*');
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [config_1.ConfigModule.forRoot(), dogs_module_1.DogsModule, elephants_1.ElephantsModule, cats_module_1.CatsModules],
        controllers: [app_controller_1.AppController,],
        providers: [app_service_1.AppService, {
                provide: 'APP_FILTER',
                useClass: http_exception_filter_1.HttpExceptionFilter
            }],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map