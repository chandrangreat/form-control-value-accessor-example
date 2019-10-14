import { Component, forwardRef, HostListener, HostBinding } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
@Component({
  selector: 'toggle',
  template: `
    {{ value }}
  `,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => ToggleComponent),
    multi: true
  }]
})
export class ToggleComponent implements ControlValueAccessor {
  value: boolean;
  disabled: boolean;
  onChange = (value: boolean) => {console.log(`OnChange ${value}`);};
  onTouched = () => {};


  registerOnChange(fn) {
    console.log(`Register on Change ${fn}`);
    this.onChange = fn;
  }

  registerOnTouched(fn) {
    console.log(`Register on Touch ${fn}`);
    this.onTouched = fn;
  }

  @HostBinding('class.disabled')
  get isDisabled() {
    console.log('Host Binding isDisabled()');
    return this.disabled;
  }

  @HostListener('click')
  click() {
    console.log('HostListener click()');
    this.writeValue(!this.value);
  }

  writeValue(value: boolean) {
    console.log('Write Value');
    this.value = value;
    this.onChange(this.value);
  }

  setDisabledState(disabled: boolean) {
    console.log(`setDisabledState ${disabled}`);
    this.disabled = disabled;
  }

}
