import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[customLabel]',
})
export class CustomLabelDirective implements OnInit {
  public _color: string = 'red';
  public _errors?: ValidationErrors | null;
  private htmlElement?: ElementRef<HTMLElement>;

  @Input() set color(value: string) {
    this._color = value;
    this.setStyle();
  }

  @Input() set errors(errors: ValidationErrors | null | undefined) {
    console.log({ errors });
    this._errors = errors;
    this.setErrorMessage();
  }
  constructor(private el: ElementRef<HTMLElement>) {
    this.htmlElement = el;
  }
  ngOnInit(): void {
    console.log('Directiva - OnInit');
  }

  setStyle() {
    if (!this.htmlElement) return;
    this.htmlElement!.nativeElement.style.color = this._color;
  }
  setErrorMessage() {
    if (!this.htmlElement) return;
    if (!this._errors) {
      this.htmlElement.nativeElement.innerText = 'No hay errores:D';
      this.htmlElement.nativeElement.style.color = 'green';
      return;
    }
    const errores = Object.keys(this._errors);
    console.log('====>', errores);

    if (errores.includes('required')) {
      this.htmlElement.nativeElement.innerText =
        'El campo no puede estar vacio';
      this.htmlElement.nativeElement.style.color = 'red';
      return;
    }
    if (errores.includes('minlength')) {
      const parametrosMinLength = this._errors['minlength'];
      console.log({ rangoActual: parametrosMinLength });
      this.htmlElement.nativeElement.innerText = `Usted ha escrito ${parametrosMinLength.actualLength} parametros y son ${parametrosMinLength.requiredLength} minimo`;
      this.htmlElement.nativeElement.style.color = 'red';
      return;
    }
    if (errores.includes('email')) {
      this.htmlElement.nativeElement.innerText = 'Tienes que colocar un email';
      this.htmlElement.nativeElement.style.color = 'red';
      return;
    }
  }
}
