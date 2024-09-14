export  default class  ErrorClass extends Error {
    
    constructor(message, status, error) {
        super(message)
        this.status = status
        this.error = error
    }
}
