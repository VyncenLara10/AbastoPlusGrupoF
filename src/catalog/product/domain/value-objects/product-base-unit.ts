import EnumValueObject from '../../../../shared/domain/value-objects/enum-value-object';

export enum BaseUnit {
    KILOGRAM = 'kg',
    POUND = 'lb',
    GRAM = 'g',
    MILILITTER = 'ml',
    LITTER = 'lt',
    UNIDAD = 'u'
}

export default class ProductBaseUnit extends EnumValueObject {
    constructor(value: string) {
        super(value, Object.values(BaseUnit));
    }
}