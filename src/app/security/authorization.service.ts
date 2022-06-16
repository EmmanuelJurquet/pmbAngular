import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthorizationService {

    private userId: number;
    private fullName: string;
    private email: string;

    constructor() {
        this.userId     = -1;
        this.fullName   = '';
        this.email      = '';
    }

    public setUserId(uId: number): void {
        this.userId = uId;
    }

    public getUserId(): number {
        return this.userId;
    }

    public setFullName(fullName: string): void {
        this.fullName = fullName;
    }

    public getFullName(): string {
        return this.fullName;
    }

    public setEmail(email: string): void {
        this.email = email;
    }

    public getEmail(): string {
        return this.email;
    }
}
