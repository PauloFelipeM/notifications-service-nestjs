import { randomUUID } from 'node:crypto';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { CountRecipientNotification } from '@application/user-cases/count-recipient-notifications';
import { makeNotification } from '@test/factories/notification-factory';

describe('Count recipient notification', () => {
  it('should be able to count recipient notifications', async () => {
    const notificationRepository = new InMemoryNotificationsRepository();
    const recipientId = randomUUID();

    await notificationRepository.create(makeNotification({ recipientId }));
    await notificationRepository.create(makeNotification({ recipientId }));
    await notificationRepository.create(makeNotification());

    const countRecipientNotification = new CountRecipientNotification(
      notificationRepository,
    );
    const { count } = await countRecipientNotification.execute({
      recipientId: recipientId,
    });

    expect(count).toEqual(2);
  });
});
