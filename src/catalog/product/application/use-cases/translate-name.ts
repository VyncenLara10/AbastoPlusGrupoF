import { EventHandler } from '../../../../shared/domain/event-bus';
import { ProductCreatedEvent } from '../../domain/product-created.event';
import TranslationEnglishService from '../ports/translateService/translate-english-service';

export default class TranslateName implements EventHandler<ProductCreatedEvent> {
    constructor(
        private readonly translationService: TranslationEnglishService,
    ) {}

    async handle(event: ProductCreatedEvent): Promise<void> {
        const translatedName = await this.translationService.translateToEnglish(event.payload.name);
        console.log(`[TranslateName] Product "${event.payload.name}" translated to: "${translatedName}"`);
    }
}
