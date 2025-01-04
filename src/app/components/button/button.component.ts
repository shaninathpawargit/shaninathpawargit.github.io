import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  template: `
    <button class=" text-black w-full px-5 py-2 rounded-xl shadow-md hover:bg-slate-200" (click)="btnClicked.emit()">
      {{ lable() }}
    </button>
  `,
  styles: ``
})
export class ButtonComponent {
  lable = input('');
  btnClicked = output();
}
