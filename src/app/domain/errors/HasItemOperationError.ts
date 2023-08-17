export class HasItemOperationError extends Error {
    constructor(message:string) {
        super(message);
        this.name = 'HasItemOperationError';
    }
}