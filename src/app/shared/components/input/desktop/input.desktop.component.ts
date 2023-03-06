/* eslint-disable @typescript-eslint/no-explicit-any */
import { CommonModule } from '@angular/common';
import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule, ValidationErrors } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-input-desktop',
  templateUrl: './input.desktop.component.html',
  styleUrls: ['./input.desktop.component.scss'],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputDesktopComponent),
      multi: true
    }
  ]
})
export class InputDesktopComponent implements OnInit, ControlValueAccessor {

  input!: string
  @Input() placeholder = 'input'
  @Input() label = 'input'
  @Input() type = 'text'
  @Input() error? = ''
  @Input() valid: ValidationErrors | null | undefined

  onChange: any = () => { /* Do something */ }
	onTouched: any = () => { /* Do something */ }

	ngOnInit(): void {
    // Do something
  }

	writeValue(obj: any): void {
    this.input = obj
	}

	registerOnChange(fn: any): void {
		this.onChange = fn
  }

	registerOnTouched(fn: any): void {
		this.onTouched = fn
	}
}
