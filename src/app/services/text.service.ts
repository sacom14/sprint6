import { Injectable } from '@angular/core';
import { Text } from '../interface/textArray.interface';

@Injectable({
  providedIn: 'root'
})
export class TextArrayService {
  public storyArrayText: Text[] =[
    {
      "txt": "El nostre heroi estava surant per l'espai sideral quan a la llunyania va albirar una nau espacial.",
      "img": "../assets/images/1.jpg"

    },
    {
      "txt": "Sentia curiositat per l'interior de la nau i es va posar a inspeccionar-la. Va arribar a una sala amb dues portes.",
      "img": "../assets/images/2.jpg"
    },
    {
      "txt": "L'heroi va decidir travessar la porta que el portava a casa.",
      "img": "../assets/images/3.jpg"
    },
    {
      "txt": "Mentrestant, altres heroes no van tenir tanta sort en la seva elecció ...",
      "img": "../assets/images/4.jpg"
    }
  ]

  constructor() { }
}
