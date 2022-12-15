import { Notification } from './notification';
import { Content } from './content';
import { randomUUID } from 'node:crypto';

describe('Notification', () => {
  it('should be able to create a notification', () => {
    const notification = new Notification({
      content: new Content('Nova solicitação'),
      category: 'social',
      recipientId: randomUUID(),
    });

    expect(notification).toBeTruthy();
  });
});
