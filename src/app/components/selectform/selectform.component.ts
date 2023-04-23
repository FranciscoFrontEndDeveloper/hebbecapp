import { Component, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
@Component({
  selector: 'app-selectform',
  templateUrl: './selectform.component.html',
  styleUrls: ['./selectform.component.sass'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: SelectformComponent,
      multi: true,
    },
  ],
})
export class SelectformComponent {
  // selectOptions: any = [];
  selectValue = '';

  @Input('selectOptions') selectOptions: any;
  private onChangefn!: Function;

  changeText($event: any): void {
    this.onChangefn($event.target.value);
  }

  writeValue(value: string): void {
    //throw new Error('Method not implemented.');
    this.selectValue = value;
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
