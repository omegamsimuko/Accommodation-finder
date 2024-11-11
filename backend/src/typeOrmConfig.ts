import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'dennis',
    database: 'ifind',
    autoLoadEntities: true,     // Automatically loads all entities
    synchronize: false,          // Use true only in development
  };
