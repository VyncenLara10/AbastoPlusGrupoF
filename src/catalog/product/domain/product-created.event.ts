import { DomainEvent } from '../../../shared/domain/event';

type ProductCreatedPayload = {
  name: string;
  baseUnit: string;
};

export class ProductCreatedEvent extends DomainEvent<ProductCreatedPayload> {
  static readonly EVENT_NAME = 'catalog.product.created';

  constructor(aggregateId: string, payload: ProductCreatedPayload) {
    super({
      eventName: ProductCreatedEvent.EVENT_NAME,
      aggregateId,
      payload,
    });
  }
}