export default class IntValueObject {
    
    private readonly value: number;

    constructor(value: number) {
        this.ensureValueIsInt(value);
        this.value = value;
    }
    
    ensureValueIsInt(value: number): void {
        if (!Number.isInteger(value)) {
            throw new Error('Value must be an integer');
        }
    }
}