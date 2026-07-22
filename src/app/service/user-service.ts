import { Injectable, Service, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UserService {
    mainUser = signal({
        firstname: "Hans",
        lastname: "Rudolfus"
    })

    updateUser() {
        this.mainUser.set({
            firstname: "Gulli",
            lastname: "Rudolfus"
        })
    }
}
