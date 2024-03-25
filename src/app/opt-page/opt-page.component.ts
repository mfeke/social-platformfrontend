import { Component , ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-opt-page',
  templateUrl: './opt-page.component.html',
  styleUrl: './opt-page.component.css'
})
export class OptPageComponent {
  digits: string = '';

  @ViewChild('input1') input1!: ElementRef<HTMLInputElement>;
  @ViewChild('input2') input2!: ElementRef<HTMLInputElement>;
  @ViewChild('input3') input3!: ElementRef<HTMLInputElement>;
  @ViewChild('input4') input4!: ElementRef<HTMLInputElement>;
  
  focusNext(nextInput: HTMLInputElement) {
    // Check if the input value is a number and move focus to the next input
    const value = nextInput.value;
    
    if (!isNaN(Number(value))) {
      nextInput.focus();
    }
  }
  updateDigits() {
    const digit1 = this.input1.nativeElement.value;
    const digit2 = this.input2.nativeElement.value;
    const digit3 = this.input3.nativeElement.value;
    const digit4 = this.input4.nativeElement.value;
    this.digits = digit1 + digit2 + digit3 + digit4;
    console.log('Digits:', this.digits);
  }
  handleBackspace(event: KeyboardEvent, prevInput: HTMLInputElement|null) {
    if (event.key === 'Backspace' && prevInput && prevInput.value === '') {
      prevInput.focus();
    }
    this.updateDigits();
  }
}
