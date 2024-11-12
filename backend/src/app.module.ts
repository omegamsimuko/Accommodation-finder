import { Module } from '@nestjs/common';
import { typeOrmConfig } from './typeOrmConfig';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentModule } from './student/student.module';
import { AgentModule } from './agent/agent.module';
import { PropertyOwnerModule } from './property-owner/property-owner.module';
import { AuthModule } from './auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import { AccomodationListingModule } from './accomodation-listing/accomodation-listing.module';
import { BookingModule } from './booking/booking.module';
import { SearchfilteringModule } from './searchfiltering/searchfiltering.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), AccomodationListingModule, BookingModule, 
    SearchfilteringModule, StudentModule, AgentModule, PropertyOwnerModule, AuthModule,

    JwtModule.register({
      secret: 'ifindSecret',
      signOptions: {expiresIn: '1hr'},
      global: true
    })
  ],
  //controllers: [AppController],
  //providers: [AppService],
})

export class AppModule {}
