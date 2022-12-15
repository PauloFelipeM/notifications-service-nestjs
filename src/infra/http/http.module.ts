import { Module } from '@nestjs/common';
import { NotificationController } from './controllers/notification.controller';
import { SendNotification } from '@application/user-cases/send-notification';
import { DatabaseModule } from '../database/database.module';
import { CancelNotification } from '@application/user-cases/cancel-notification';
import { ReadNotification } from '@application/user-cases/read-notification';
import { UnReadNotification } from '@application/user-cases/unread-notification';
import { GetRecipientNotification } from '@application/user-cases/get-recipient-notifications';
import { CountRecipientNotification } from '@application/user-cases/count-recipient-notifications';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationController],
  providers: [
    SendNotification,
    CancelNotification,
    ReadNotification,
    UnReadNotification,
    GetRecipientNotification,
    CountRecipientNotification,
  ],
})
export class HttpModule {}
