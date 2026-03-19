export interface DomainEventPrimitives {
  eventName: string;
  aggregateId: string;
  occurredOn: Date;
  attributes: Record<string, unknown>;
}

export abstract class DomainEvent {
  readonly eventName: string;
  readonly aggregateId: string;
  readonly occurredOn: Date;

  constructor(params: { eventName: string; aggregateId: string }) {
    this.eventName     = params.eventName;
    this.aggregateId   = params.aggregateId;
    this.occurredOn    = new Date();
  }

  abstract toPrimitives(): DomainEventPrimitives;
}