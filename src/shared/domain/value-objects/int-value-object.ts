import ValueObject from "./value-object";

export default class IntValueObject extends ValueObject<string>{
    constructor(value: string) {
        super(value);
        this.ensureValueIsInt(parseInt(value));
    }
    
    ensureValueIsInt(value: number): void {
        if (!Number.isInteger(value)) {
            throw new Error('Value must be an integer');
        }
    }

    getValue(): string {
        return this.getValue();
    }
}