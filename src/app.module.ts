import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccomodationListingModule } from './accomodation-listing/accomodation-listing.module';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
//import { TypedConfigModule } from 'nest-typed-config';
import { typeOrmConfig } from 'src/typeOrmConfig';


@Module({
  imports: [AccomodationListingModule,TypeOrmModule.forRoot(typeOrmConfig), UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
