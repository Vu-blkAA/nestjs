"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElephantsService = void 0;
const common_1 = require("@nestjs/common");
let ElephantsService = class ElephantsService {
    constructor() {
        this.elephants = [{ id: '1', name: 'elephant 1', age: 1, breed: 'breed 1' }];
    }
    findAll() {
        return this.elephants;
    }
    findOne(id) {
        return this.elephants.find(elephant => elephant.id === id);
    }
    create(elephant) {
        const newId = this.elephants.length + 1;
        this.elephants.push({ id: newId.toString(), ...elephant });
    }
};
exports.ElephantsService = ElephantsService;
exports.ElephantsService = ElephantsService = __decorate([
    (0, common_1.Injectable)()
], ElephantsService);
//# sourceMappingURL=elephants.service.js.map