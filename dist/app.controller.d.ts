import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(params: {
        id: string;
    }): string;
    findAll(): string;
    create(): string;
}
