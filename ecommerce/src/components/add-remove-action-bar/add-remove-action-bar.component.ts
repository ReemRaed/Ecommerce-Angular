import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-add-remove-action-bar',
  templateUrl: './add-remove-action-bar.component.html',
  styleUrls: ['./add-remove-action-bar.component.scss'],

})
export class AddRemoveActionBarComponent {
  @Input() itemsNumber: number = 1;
  value: number = 1;
  disableBlock: boolean = false;
  img: string = "";
  isVisible:boolean=true;

  constructor(private elementRef: ElementRef)
  {}

  @HostListener('document:click',['$event'])
  onClickOutside(event: MouseEvent): void {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.closeComponent();
    }
  }

  closeComponent(): void {
    this.isVisible = false; // Close or hide the component
  }
  increment() {
    if (this.value < this.itemsNumber) {
      this.value++;
    }
  }
  reset() {
    this.value = 0;
  }
  decrement() {
    if (this.value > 1) {
      this.value--;
    }
  }
  action() {
    switch (this.value) {
      case 0:
        break;
      case 1:
        this.reset();
        break;
      default:
        this.decrement();
        break;
    }
  }
  get rightIcon() {
    if (this.value < this.itemsNumber) {
      this.img = "plus.svg";
    }
    else {
      this.img = "block.svg";
    }
    return this.img;
  }
  get leftIcon() {
    switch (this.value) {
      case 0:
        return 'block.svg';
      case 1:
        return 'bin.svg';
      default:
        return 'minus.svg';
    }
  }


}

