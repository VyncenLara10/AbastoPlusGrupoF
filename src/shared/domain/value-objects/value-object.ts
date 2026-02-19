export default class ValueObject<T> {
    protected value: T;

    constructor(value: T) {
        this.value = value;
    }

    toString(): string {
        return String(this.value);
    }
}
