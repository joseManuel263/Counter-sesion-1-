import { Component } from "@angular/core";
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
    template: `

    <app-navbar></app-navbar>

    <h1>{{counter}}</h1>
    <h2>Counter Component</h2>
    <button (click)="sumar()">sumar</button>
    <button (click)="restar()" [disabled]="counter === 0">restar</button>
    `,
    imports: [NavbarComponent],
})

//generar un boton + un boton menos
//para cambiar el valor del counter
//bloquear botones cuando el valor es 0

export class CounterPageComponent {

    counter = 10;

    sumar() {
        this.counter++;
    }
    restar() {
        this.counter--;
    }
}
