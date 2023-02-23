import { CommonModule } from '@angular/common';
import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-input-desktop',
  templateUrl: './input.desktop.component.html',
  styleUrls: ['./input.desktop.component.scss'],
  imports: [CommonModule, FormsModule],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => InputDesktopComponent),
			multi: true
		}
	]
})
export class InputDesktopComponent implements ControlValueAccessor {

  input!: string
	@Input() placeholder = 'input'
	@Input() label = 'input'
	@Input() type = 'text'

  writeValue(obj: any): void {
    throw new Error('Method not implemented.');
  }
  registerOnChange(fn: any): void {
    throw new Error('Method not implemented.');
  }
  registerOnTouched(fn: any): void {
    throw new Error('Method not implemented.');
  }
  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }
}
