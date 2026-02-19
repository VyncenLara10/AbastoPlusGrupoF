import StringValueObject from '../../../../shared/domain/value-objects/string-value-object';

export default class ProductName extends StringValueObject {
    constructor(value: string) {
        super(value);
        this.ensureValueIsValid(value);
    }

    ensureValueIsValid(value: string): void {
        super.ensureValueIsValid(value);
        if (value.length < 10) {
            throw new Error(`${this.constructor.name} no puede tener mmenos de 10 caracteres.`);
        }
    }
    public getValue(): string {
        return this.value;
    }
}