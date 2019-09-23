export class ALERT {
    type: ALERTTYPE;
    message: string;
    alertId: string;
    keepAfterRouterChange: boolean;

    constructor(init?:Partial<ALERT>) {
        Object.assign(this, init);
    }
}

export enum ALERTTYPE {
    Success,
    Error,
    Warning,
}