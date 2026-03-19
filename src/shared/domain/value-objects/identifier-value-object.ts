import { ObjectId } from 'mongodb';
import ValueObject from './value-object';

export default class IdentifierValueObject extends ValueObject<string> {

    constructor(value: string) {
        super(value);
        this.ensureValueIsUUID(value);
    }   

    public ensureValueIsUUID(value: string): void {
        ObjectId.createFromHexString(value);
        if (!ObjectId.isValid(value)) {
            throw new Error(`Invalid identifier: ${value}`);
        }
    }

    getValue(): string {
        return super.getValue();
    }

}