export default class IdentifierValueObject {
    private readonly value: string;

    constructor(value: string) {
        this.ensureValueIsUvid(value);
        this.value = value;
    }

    ensureValueIsUvid(value: string): void {
        const uvidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
        if (!uvidRegex.test(value)) {
            throw new Error('Value must be a valid UVID');
        }
    }
}