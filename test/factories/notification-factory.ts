import { randomUUID } from 'node:crypto';
import {
  Notification,
  NotificationProps,
} from '@application/entities/notification';
import { Content } from '@application/entities/content';

type Override = Partial<NotificationProps>;

export function makeNotification(override: Override = {}) {
  return new Notification({
    content: new Content('Nova solicitação'),
    category: 'social',
    recipientId: randomUUID(),
    ...override,
  });
}
