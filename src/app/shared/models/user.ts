import { Permission } from './permission';

export class User {
    username: string;
    password: string;
    permissions: string[];
    token?: string;   
}