import IdentifierValueObject from '../../../../../shared/domain/value-objects/identifier-value-object';

export default class PresentationId  extends IdentifierValueObject {
    constructor(value: string) {
        super(value);
        super.ensureValueIsUvid(value);
    }

    public getValue(): string {
        return this.value
    }
}