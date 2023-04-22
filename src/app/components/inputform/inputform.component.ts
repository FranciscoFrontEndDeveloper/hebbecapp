import { Component, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-inputform',
  templateUrl: './inputform.component.html',
  styleUrls: ['./inputform.component.sass'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputformComponent,
      multi: true,
    },
  ],
})
export class InputformComponent implements ControlValueAccessor {
  inputValue = '';

  @Input('inputType') inputType: string = 'text';
  private onChangefn!: Function;

  changeText($event: any): void {
    this.onChangefn($event.target.value);
  }

  writeValue(value: string): void {
    //throw new Error('Method not implemented.');
    this.inputValue = value;
  }

  registerOnChange(fn: any): void {
    //throw new Error('Method not implemented.');
    this.onChangefn = fn;
  }
  registerOnTouched(fn: any): void {
    //throw new Error('Method not implemented.');
  }
  setDisabledState?(isDisabled: boolean): void {
    //throw new Error('Method not implemented.');
  }
}
