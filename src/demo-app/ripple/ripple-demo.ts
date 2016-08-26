import {Component, ViewChild} from '@angular/core';
import {MdRipple} from '@angular2-material/core/core';

@Component({
  moduleId: module.id,
  selector: 'ripple-demo',
  templateUrl: 'ripple-demo.html',
  styleUrls: ['ripple-demo.css'],
})
export class RippleDemo {
  @ViewChild(MdRipple) manualRipple: MdRipple;

  centered = false;
  disabled = false;
  unbounded = false;
  rounded = false;
  maxRadius: number = null;
  rippleSpeed = 1;
  rippleColor = '';
  rippleBackgroundColor = '';

  doManualRipple() {
    if (this.manualRipple) {
      this.manualRipple.ripple(0, 0);
      window.setTimeout(() => this.manualRipple.end(), 400);
    }
  }
}
