import { Component, resolveForwardRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public showEscena:boolean = false;

  startEscena(){
    this.showEscena = true;
  }
}
