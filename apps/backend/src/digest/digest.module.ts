import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DigestController } from './digest.controller';
import { DigestService } from './digest.service';
import { Digest, DigestSchema } from './schemas/digest.schema';
import { DataService } from './services/data.service';
import { UsersModule } from '../users/users.module';
import { WhatsAppModule } from '../channels/whatsapp/whatsapp.module';
import { ConfigModule } from '@nestjs/config';
import { DigestDeliveryProcessor } from './processors/digest-delivery.processor';
import { DigestGeneratorProcessor } from './processors/digest-generator.processor';
import { BullModule } from '@nestjs/bullmq';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Digest.name, schema: DigestSchema }]),
    UsersModule,
    WhatsAppModule,
    ConfigModule,
    BullModule.registerQueue({
      name: 'digest-generator',
    }),
    BullModule.registerQueue({
      name: 'digest-delivery',
    }),
  ],
  controllers: [DigestController],
  providers: [DigestService, DataService, DigestGeneratorProcessor, DigestDeliveryProcessor],
  exports: [DigestService],
})
export class DigestModule {}
