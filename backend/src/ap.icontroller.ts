import { Controller, Get } from '@nestjs/common';

@Controller('api') // This sets the route to /api
export class ApiController {
  @Get()
  getApi() {
    return { message: 'API is working!' }; // Simple response
  }
}
