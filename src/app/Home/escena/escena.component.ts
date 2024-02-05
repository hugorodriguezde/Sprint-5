import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { iStep } from '../../Interface/iStep.interface';

@Component({
  selector: 'app-escena',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './escena.component.html',
  styleUrl: './escena.component.scss',
  })

  export class EscenaComponent {

  @Input()
  public steps: iStep[] = [];

  public actualStep = 0;

  last() {
    if (this.actualStep > 0) {
      this.actualStep--;
    } else {
      this.actualStep = this.steps.length - 1;
    }
  }

  next():void {
    if (this.actualStep < this.steps.length - 1) {
      this.actualStep++;
    } else {
      this.actualStep = 0
    }
  }

  goToStep(index: number): void {
    this.actualStep = index;
  }

}
