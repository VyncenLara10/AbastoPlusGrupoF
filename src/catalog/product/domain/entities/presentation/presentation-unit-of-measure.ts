import EnumValueObject from "../../../../../shared/domain/value-objects/enum-value-object";

export enum unitOfMesure {
    KILOGRAM = 'kg',
    POUND = 'lb',
    GRAM = 'g',
    MILILITTER = 'ml',
    LITTER = 'lt',
    UNIT = 'u'
}

export default class PresentationUnitOfMesure extends EnumValueObject{
    constructor(value: string){
        super(value, Object.values(unitOfMesure));
    }
}