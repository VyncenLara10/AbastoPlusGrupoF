import EnumValueObject from '../../../../shared/domain/value-objects/enum-value-object';

export enum BaseUnit {
    OUNCE = 'ounce',
    KILOGRAM = 'kilogram',
    POUND = 'pound',
}

export default class ProductBaseUnit extends EnumValueObject {
    constructor(value: string) {
        super(value, Object.values(BaseUnit));
    }
}