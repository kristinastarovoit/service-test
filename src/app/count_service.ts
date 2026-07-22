import { Injectable } from "@angular/core";

// mit providedIn: 'root' gilt der Service global für alle components, in welchen er injected wurde
// und bleibt synchronisiert
// @Injectable({providedIn: 'root'})
// export class CountService {
//     count = 0;

//     increment() {
//         this.count++;
//     }
// }

@Injectable()
export class CountService {
    count = 0;

    increment() {
        this.count++;
    }
}