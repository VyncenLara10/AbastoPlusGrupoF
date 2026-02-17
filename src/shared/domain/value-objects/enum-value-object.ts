import ValueObject from "./value-object";

export default class EnumValueObject {
    private readonly value: string;
    private readonly validValues: string[];
    
    constructor(value: string, validValues: string[]) {
        this.value = value;
        this.validValues = validValues;
    }

    ensureValueIsValid(value: string, validValues: String[]): void {
        if (!validValues.includes(value)) {
            throw new Error(`Invalid value: ${value}. Valid values are: ${validValues.join(', ')}`);
        }
    }
}