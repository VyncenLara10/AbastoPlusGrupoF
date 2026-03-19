import { DomainEvent, DomainEventPrimitives } from '../../../shared/domain/event';

export class ProductCreatedEvent extends DomainEvent {
  static readonly EVENT_NAME = 'catalog.product.created';

  constructor(
    aggregateId: string,
    public readonly name: string,
    public readonly baseUnit: string,
  ) {
    super({ eventName: ProductCreatedEvent.EVENT_NAME, aggregateId });
  }

  toPrimitives(): DomainEventPrimitives {
    return {
      eventName:   this.eventName,
      aggregateId: this.aggregateId,
      occurredOn:  this.occurredOn,
      attributes: {
        name:  this.name,
        baseUnit: this.baseUnit,
      },
    };
  }
}