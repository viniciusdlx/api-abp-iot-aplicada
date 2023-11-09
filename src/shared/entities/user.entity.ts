import { randomUUID } from 'crypto';

export class User {
    id: number;
    externalId: string;
    name: string;
    email: string;
    password: string;
    biometry: string;
    rfid: string;

    constructor(data: Partial<User>) {
        this.externalId = randomUUID();
        this.name = data.name;
        this.email = data.email;
        this.password = data.password;
        this.biometry = data.biometry;
        this.rfid = data.rfid;
    }
}
