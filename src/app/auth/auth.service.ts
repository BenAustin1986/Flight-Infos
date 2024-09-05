// import { inject } from '@angular/core';
import { signInWithEmailAndPassword } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import firebase from '@firebase/app';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private afAuth: AngularFireAuth) {
        this.setPersistence();
    }

    async setPersistence() {
        try {
            await this.afAuth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);
        } catch (error) {
            console.error('Error setting persistence:', error);
        }
    }

    signup(email: string, password: string): Promise<any> {
        return this.afAuth.createUserWithEmailAndPassword(email, password);
    }

    login(email: string, password: string): Promise<any> {
        return this.afAuth.signInWithEmailAndPassword(email, password);
    }

    logout() {
        return this.afAuth.signOut();
    }

    isLoggedIn(): Observable<boolean> {
        return this.afAuth.authState.pipe(map(user => !!user));
    }
}
