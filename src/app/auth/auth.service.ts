import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import firebase from 'firebase/compat/app';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private loggedInStatus = new BehaviorSubject<boolean>(false);

    constructor(private afAuth: AngularFireAuth) {
        this.setPersistence();
    }

    async setPersistence() {
        try {
            if (typeof window !== 'undefined') {
                await this.afAuth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);
            }
        } catch (error) {
            console.error('Error setting persistence:', error);
        }
    }

    isLoggedIn(): Observable<boolean> {
        return this.afAuth.authState.pipe(
            map(user => {
                console.log('user logged in status:', !!user)
                return !!user
            })
        );
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


}
