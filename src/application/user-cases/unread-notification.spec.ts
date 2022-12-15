import { UnReadNotification } from './unread-notification';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { NotificationNotFound } from '@application/user-cases/errors/notification-not-found';
import { makeNotification } from '@test/factories/notification-factory';

describe('Unread notification', () => {
  it('should be able to unread a notification', async () => {
    const notificationRepository = new InMemoryNotificationsRepository();

    const notification = makeNotification({ readAt: new Date() });
    await notificationRepository.create(notification);

    const unReadNotification = new UnReadNotification(notificationRepository);
    await unReadNotification.execute({ notificationId: notification.id });

    expect(notificationRepository.notifications[0].readAt).toBeNull();
  });

  it('should not be able to unread a non existing notification', async () => {
    const notificationRepository = new InMemoryNotificationsRepository();
    const unReadNotification = new UnReadNotification(notificationRepository);

    await expect(() => {
      return unReadNotification.execute({
        notificationId: 'fake-notification-id',
      });
    }).rejects.toThrow(NotificationNotFound);
  });
});
