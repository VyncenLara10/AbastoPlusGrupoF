import ValueObject from './value-object'

export default class StringValueObject extends ValueObject<string>{
    constructor(value: string) {
        super(value);
        this.ensureValueIsValid(value);
    }

    ensureValueIsValid(value: string): void {
        if (typeof value !== 'string' || value.trim().length === 0) {
            throw new Error(`${this.constructor.name} debe ser una cadena de texto valida y no estar vacia.`);
        }
    }

    getValue(): string {
        return this.getValue();
    }
}