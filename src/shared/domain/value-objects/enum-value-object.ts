import ValueObject from "./value-object";

export default class EnumValueObject extends ValueObject<string>{
    private readonly validValues: string[];

    constructor(value: string, validValues: string[]){
        super(value);
        this.ensureValueIsValid(value, validValues);
        this.validValues = validValues;
    }

    ensureValueIsValid(value: string, validValues: String[]): void {
        if (!validValues.includes(value)) {
            throw new Error(`Invalid value: ${value}. Valid values are: ${validValues.join(', ')}`);
        }
    }

    getValue(): string {
        return this.getValue();
    }
}