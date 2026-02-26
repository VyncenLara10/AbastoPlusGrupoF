export default class ValueObject<T> {
    private readonly value: T;

    constructor(value: T) {
        this.value = value;
    }

    toString(): string {
        return String(this.value);
    }

    getValue(): T {
        return this.value;
    }
}
