import IdentifierValueObject from '../../../../shared/domain/value-objects/identifier-value-object';

export default class ProductId extends IdentifierValueObject {
    constructor(value: string) {
        super(value);
        super.ensureValueIsUvid(value);
    }

    getValue(): string {
        return this.getValue();
    }
}