import { Injectable } from '@angular/core';
import { iStep } from '../Interface/iStep.interface';



@Injectable({ providedIn: 'root' })
export class StepsService {

  public frases: iStep[] = [
    {
      title: "Dedica moltes hores",
      description: "Un mínim de 30 hores a la setmana. Si no en tens prou, hauràs de dedicar-li més hores. Al principi sembla impossible, però notaràs una millora ràpidament.",
      img: "./assets/img/time_managment.svg",
      bgcolor: "#17888a",
    }, {
      title: "Programa projectes propis",
      description: "Més val 10 hores treballant en projectes propis, que 10 hores mirant tutorials. La motivació i la implicació en el projecte ajudarà a accelerar el teu aprenentatge.",
      img: "./assets/img/programming.svg",
      bgcolor: "#cfd2d4",
    }, {
      title: "Procura descansar",
      description: "Descansar bé i desconnectar són vitals. D'aquesta manera reduiràs estrès i l'ansietat. Milloraràs la teva concentració i consolidaràs el teu aprenentatge.",
      img: "./assets/img/meditation.svg",
      bgcolor: "#f2e377",
    }];
}
