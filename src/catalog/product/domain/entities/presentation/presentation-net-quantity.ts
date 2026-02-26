import IntValueObject from '../../../../../shared/domain/value-objects/int-value-object';

export default class PresentationNetQuantity extends IntValueObject {
    constructor(value: string) {
        super(value);
        this.ensureValueIsValid(value);
    }

    public ensureValueIsValid(value: string): void {
        const numericValue = parseInt(value);
        if (numericValue < 0) {
            throw new Error(`${this.constructor.name} no puede ser una cantidad negativa.`);
        }
        if (numericValue === 0) {
            throw new Error(`${this.constructor.name} debe ser mayor a cero.`);
        }
    }

    getValue(): string {
        return this.getValue();
    }
}