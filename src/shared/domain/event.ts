export abstract class DomainEvent<T extends Record<string, unknown> = Record<string, unknown>> {
  readonly eventName: string;
  readonly aggregateId: string;
  readonly occurredOn: Date;
  readonly payload: T;

  constructor(params: {
    eventName: string;
    aggregateId: string;
    payload: T;
  }) {
    this.eventName   = params.eventName;
    this.aggregateId = params.aggregateId;
    this.occurredOn  = new Date();
    this.payload     = params.payload;
  }
}