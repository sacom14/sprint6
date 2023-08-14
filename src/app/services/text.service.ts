import { Injectable } from '@angular/core';
import { Text } from '../interface/textArray.interface';

@Injectable({
  providedIn: 'root'
})
export class TextArrayService {
  public storyArrayText: Text[] =[
    {
      "sentence": "El nostre heroi estava surant per l'espai sideral quan a la llunyania va albirar una nau espacial."
    },
    {
      "sentence": "Sentia curiositat per l'interior de la nau i es va posar a inspeccionar-la. Va arribar a una sala amb dues portes."
    },
    {
      "sentence": "L'heroi va decidir travessar la porta que el portava a casa."
    },
    {
      "sentence": "Mentrestant, altres heroes no van tenir tanta sort en la seva elecció ..."
    }
  ]

  constructor() { }
}
