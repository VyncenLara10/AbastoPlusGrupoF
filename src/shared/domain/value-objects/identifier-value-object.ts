import ValueObject from './value-object';

export default class IdentifierValueObject extends ValueObject<string> {
    constructor(value: string) {
        super(value);
        this.ensureValueIsUvid(value);
    }

    numberToUUID(num: number): string {
        const hex = num.toString(16).padStart(32, "0");
        return `${hex.substring(0, 8)}-${hex.substring(8, 12)}-${hex.substring(12, 16)}-${hex.substring(16, 20)}-${hex.substring(20)}`;
    }

    ensureValueIsUvid(value: string): void {
        const uvidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
        if (!uvidRegex.test(this.numberToUUID(parseInt(value)))) {
            throw new Error('Value must be a valid UVID');
        }
    }

    getValue(): string {
        return this.getValue();
    }
}