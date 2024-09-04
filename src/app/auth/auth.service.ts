// import { inject } from '@angular/core';
// import { Auth, signInWithPopup, GoogleAuthProvider } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private afAuth: AngularFireAuth) {}

    signup(email: string, password: string) {
        return this.afAuth.createUserWithEmailAndPassword(email, password);
    }

    login(email: string, password: string): Promise<any> {
        return this.afAuth.signInWithEmailAndPassword('email', 'password');
    }

    logout() {
        return this.afAuth.signOut();
    }

    isLoggedIn(): Observable<boolean> {
        return this.afAuth.authState.pipe(map(user => !!user));
    }
}
