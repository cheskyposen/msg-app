export class Message {
    accountSid: string;
    apiVersion: string;
    body: string;
    dateCreated: Date;
    dateUpdated: Date;
    dateSent: Date;
    direction: string;
    errorCode: any;
    errorMessage: any;
    from: string;
    messagingServiceSid: any;
    numMedia: string;
    numSegments: string;
    price: number;
    priceUnit: string;
    sid: string;
    status: string;
    to: string;
    uri: string;

    constructor(args?) {
        this.accountSid = args.accountSid ? args.accountSid : undefined;
        this.apiVersion = args.apiVersion ? args.apiVersion : undefined;
        this.body = args.body ? args.body : undefined;
        this.dateCreated = args.dateCreated ? new Date(args.dateCreated) : undefined;
        this.dateUpdated = args.dateUpdated ? new Date(args.dateUpdated) : undefined;
        this.dateSent = args.dateSent ? new Date(args.dateSent) : undefined;
        this.direction = args.direction ? args.direction : undefined;
        this.errorCode = args.errorCode ? args.errorCode : null;
        this.errorMessage = args.errorMessage ? args.errorMessage : null;
        this.from = args.from ? args.from : null;
        this.messagingServiceSid = args.messagingEnabled ? args.messagingEnabled : null;
        this.numMedia = args.numMedia ? args.numMedia : undefined;
        this.numSegments = args.numSegments ? args.numSegments : undefined;
        this.price = args.price ? args.price : undefined;
        this.priceUnit = args.priceUnit ? args.priceUnit : undefined;
        this.sid = args.sid ? args.sid : undefined;
        this.status = args.status ? args.status : undefined;
        this.to = args.to ? args.to : null;
        this.uri = args.url ? args.url : undefined;
    }
}
