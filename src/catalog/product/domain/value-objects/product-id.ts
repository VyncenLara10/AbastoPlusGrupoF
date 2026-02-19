import IdentifierValueObject from '../../../../shared/domain/value-objects/identifier-value-object';

export default class ProductId extends IdentifierValueObject {
    constructor(value: string) {
        super(value);
    }

    ensureValueIsUvid(value: string): void {
        const uvidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
        if (!uvidRegex.test(value)) {
            throw new Error('Value must be a valid UVID');
        }
    }
}