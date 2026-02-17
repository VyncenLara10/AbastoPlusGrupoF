import StringValueObject from '../../../../shared/domain/value-objects/string-value-object';

export default class ProductName extends StringValueObject {
    constructor(value: string) {
        super(value);
    }

    ensureValueIsValid(value: string): void {
        super.ensureValueIsValid(value);
        if (value.length > 4) {
            throw new Error(`${this.constructor.name} no puede tener más de 4 caracteres.`);
        }
    }
}