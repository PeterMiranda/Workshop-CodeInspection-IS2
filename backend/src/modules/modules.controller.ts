import { Controller, Get } from '@nestjs/common';
import { ModulesService } from './modules.service';

@Controller('modules')
export class ModulesController {
    //readonly provisional
    constructor(private readonly modulesService: ModulesService) {}

    @Get()
    async getModules() {
        return this.modulesService.findAll();
    }
}
