import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'accomodationfinder',
    autoLoadEntities: true,     // Automatically loads all entities
    synchronize: true,          // Use true only in development
  };