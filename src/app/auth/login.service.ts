import { inject } from '@angular/core';
import { Auth, signInWithPopup, GoogleAuthProvider } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private afAuth: AngularFireAuth) {}

    login() {
        return this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }

    logout() {
        return this.afAuth.signOut();
    }

    isLoggedIn() {
        return this.afAuth.authState.pipe(map(user => !!user));
    }
}
