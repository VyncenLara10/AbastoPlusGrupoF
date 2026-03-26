import { ObjectId } from 'mongodb';
import ValueObject from './value-object';

export default class IdentifierValueObject extends ValueObject<string> {

    constructor(value: string) {
        super(value);
        this.ensureValueIsUUID(value);
    }   

    public ensureValueIsUUID(value: string): void {
        const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
        if (!uuidRegex.test(value)) {
            throw new Error(`Invalid UUID format: ${value}`);
        }
    }

    getValue(): string {
        return super.getValue();
    }

}