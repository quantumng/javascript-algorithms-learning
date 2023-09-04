
class Stack {
    private items: any[];

    constructor() {
        this.items = [];
    }

    push(element: any) {
        this.items.push(element);
    }

    pop() {
        return this.items.pop();
    }

    size() {
        return this.items.length;
    }

    isEmpty() {
        return this.items.length === 0;
    }

    peek() {
        if (this.isEmpty()) {
            return undefined;
        }

        return this.items[this.items.length - 1];
    }

    clear() {
        this.items = [];
    }

    toString() {
        if (this.isEmpty()) {
            return '';
        }

        let objString = `${this.items[0]}`;
        for (let i = 1; i < this.items.length; i++) {
            objString = `${objString},${this.items[i]}`;
        }

        return objString;
    }
}