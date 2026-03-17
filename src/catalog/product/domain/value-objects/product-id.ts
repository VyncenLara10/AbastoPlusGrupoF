import IdentifierValueObject from '../../../../shared/domain/value-objects/identifier-value-object';

export default class ProductId extends IdentifierValueObject {
    constructor(value: string) {
        super(value);
    }

    getValue(): string {
        return super.getValue();
    }
}