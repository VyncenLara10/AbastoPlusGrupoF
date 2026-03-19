import { EventBus, EventHandler } from '../../../shared/domain/event-bus';
import { DomainEvent } from '../../../shared/domain/event';

export class InMemoryEventBus implements EventBus {
  private queue: DomainEvent[] = [];
  private handlers: Map<string, EventHandler[]> = new Map();

  subscribe<T extends DomainEvent>(eventName: string, handler: EventHandler<T>): void {
    const existing = this.handlers.get(eventName) ?? [];
    this.handlers.set(eventName, [...existing, handler as EventHandler]);
  }

  async publish(events: DomainEvent[]): Promise<void> {
    this.queue.push(...events);
  }

  async dispatch(): Promise<void> {
    while (this.queue.length > 0) {
      const event = this.queue.shift()!;

      const handlers = this.handlers.get(event.eventName) ?? [];
      await Promise.all(handlers.map(h => h.handle(event)));
    }
  }
}