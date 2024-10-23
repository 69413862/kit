export declare enum ErrorCode {
    UNKNOWN_ERROR = "UNKNOWN_ERROR",
    KIT__UNKNOWN_ERROR = "KIT.UNKNOWN_ERROR",
    WALLET__UNKNOWN_ERROR = "WALLET.UNKNOWN_ERROR",
    USER__REJECTION = "USER.REJECTION"
}
export declare class BaseError extends Error {
    private code;
    private details;
    constructor(message: string, details?: Record<string, any>, code?: ErrorCode);
}
export declare class KitError extends BaseError {
    constructor(message?: string, details?: Record<string, any>);
}
export declare class WalletError extends BaseError {
    constructor(message?: string, details?: Record<string, any>);
}
export declare class WalletNotImplementError extends WalletError {
    constructor(method: string);
}
export declare class UserRejectionError extends BaseError {
    constructor(message?: string, details?: Record<string, any>);
}
