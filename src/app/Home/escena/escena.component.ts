import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { iStep } from '../../Interface/iStep.interface';



@Component({
  selector: 'app-escena',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './escena.component.html',
  styleUrl: './escena.component.scss'
})
export class EscenaComponent {

  @Input()
  public steps: iStep[] = [];

  public currentStep = 0;

  last() {
    if (this.currentStep > 0) {
      this.currentStep--;
    } else {
      this.currentStep = this.steps.length - 1;
    }
  }

  next() {
    if (this.currentStep < this.steps.length - 1) {
      this.currentStep++;
    } else {
      this.currentStep = 0
    }
  }
  goToStep(index: number): void {
    this.currentStep = index;
  }
}
