import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class CountService {
    count = 0;

    increment() {
        this.count++;
    }
}