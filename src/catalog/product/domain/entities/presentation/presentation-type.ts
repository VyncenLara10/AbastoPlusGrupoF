import EnumValueObject from "../../../../../shared/domain/value-objects/enum-value-object";

export enum types {
    BAG = 'bag',
    SACK = 'sack',
    BOX = 'box',
    CAN = 'can',
    JAR = 'jar',
    BOTTLE = 'bottle'
}

export default class PresentationType extends EnumValueObject{
    constructor(value: string){
        super(value, Object.values(types));
    }
}