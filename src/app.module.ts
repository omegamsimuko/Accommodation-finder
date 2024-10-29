import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccomodationListingModule } from './accomodation-listing/accomodation-listing.module';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
//import { TypedConfigModule } from 'nest-typed-config';
import { typeOrmConfig } from 'src/typeOrmConfig';
import { PropertyownerModule } from './propertyowner/propertyowner.module';
import { EstateAgentModule } from './estate-agent/estate-agent.module';


@Module({
  imports: [AccomodationListingModule,TypeOrmModule.forRoot(typeOrmConfig), UserModule, PropertyownerModule, EstateAgentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
