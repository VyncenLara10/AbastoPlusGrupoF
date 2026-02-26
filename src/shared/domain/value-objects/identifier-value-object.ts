import ValueObject from './value-object';

export default class IdentifierValueObject extends ValueObject<string> {
    constructor(value: string) {
        super(value);
        this.ensureValueIsUvid(value);
    }

    ensureValueIsUvid(value: string): void {
        const uvidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
        if (!uvidRegex.test(value)) {
            throw new Error('Value must be a valid UVID');
        }
    }

    getValue(): string {
        return this.getValue();
    }
}