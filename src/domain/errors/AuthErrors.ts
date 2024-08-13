

export class UnauthorizedError extends Error {
    constructor() {
        super("User not authorized");
    }
}

export class NotPrivilegedError extends Error {
    constructor() {
        super("You have no access here");
    }
}

export class UserNotFoundError extends Error {
    constructor() {
        super("User not found");
    }
}