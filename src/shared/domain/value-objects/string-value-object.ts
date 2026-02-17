export default class StringValueObject {
    private readonly value: string;
    constructor(value: string) {
        this.ensureValueIsValid(value);
        this.value = value;
    }

    ensureValueIsValid(value: string): void {
        if (typeof value !== 'string' || value.trim().length === 0) {
            throw new Error(`${this.constructor.name} debe ser una cadena de texto valida y no estar vacia.`);
        }
    }
}