import { Component } from '@angular/core';
import { TextArrayService } from '../services/text.service';

@Component({
  selector: 'app-home-escena',
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.css']
})
export class EscenaComponent {
  // public frase="El nostre heroi estava surant per l'espai sideral quan a la llunyania va albirar una nau espacial";
  constructor(public stories: TextArrayService) { }

  public currentSentence: number = 0;
  public currentImage:string = this.stories.storyArrayText[0].img;

  prev(): void {
    if (this.currentSentence > 0) {
      this.currentSentence--;
      this.currentImage = this.stories.storyArrayText[this.currentSentence].img;
    }
  }

  next(): void {
    if (this.currentSentence < this.stories.storyArrayText.length - 1) {
      this.currentSentence++;
      this.currentImage = this.stories.storyArrayText[this.currentSentence].img
    }
  }
}
