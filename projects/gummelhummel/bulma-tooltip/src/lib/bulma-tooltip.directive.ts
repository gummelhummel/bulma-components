import { Directive, ElementRef, Renderer2, OnInit, Input } from '@angular/core';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[bulma-tooltip]'
})
export class BulmaTooltipDirective implements OnInit {

  @Input('bulma-tooltip') tooltipText: string;

  // tslint:disable-next-line: no-input-rename
  @Input('bulma-tooltip-color') color: string;

  // tslint:disable-next-line: no-input-rename
  @Input('bulma-tooltip-position') position: string;

  // tslint:disable-next-line: no-input-rename
  @Input('bulma-tooltip-arrow') withArrow = true;

  // tslint:disable-next-line: no-input-rename
  @Input('bulma-tooltip-hidden-mobile') hiddenMobile = false;
  // tslint:disable-next-line: no-input-rename
  @Input('bulma-tooltip-hidden-tablet-only') hiddenTabletOnly = false;
  // tslint:disable-next-line: no-input-rename
  @Input('bulma-tooltip-hidden-desktop-only') hiddenDesktopOnly = false;
  // tslint:disable-next-line: no-input-rename
  @Input('bulma-tooltip-hidden-widescreen-only') hiddenWidescreenOnly = false;
  // tslint:disable-next-line: no-input-rename
  @Input('bulma-tooltip-hidden-touch') hiddenTouch = false;
  // tslint:disable-next-line: no-input-rename
  @Input('bulma-tooltip-hidden-tablet') hiddenTablet = false;
  // tslint:disable-next-line: no-input-rename
  @Input('bulma-tooltip-hidden-desktop') hiddenDesktop = false;
  // tslint:disable-next-line: no-input-rename
  @Input('bulma-tooltip-hidden-widescreen') hiddenWidescreen = false;
  // tslint:disable-next-line: no-input-rename
  @Input('bulma-tooltip-hidden-fullhd') hiddenFullhd = false;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    this.setPosition();
    this.setHiddenClasses();
    this.setArrow();
    this.setColor();
    this.renderer.setAttribute(this.elementRef.nativeElement, 'data-tooltip', this.tooltipText);
  }

  private setArrow(): void {
    if (this.withArrow) {
      this.renderer.addClass(this.elementRef.nativeElement, 'has-tooltip-arrow');
    }
  }

  private setColor(): void {
    let colorClass;
    switch (this.color) {
      case 'primary':
        colorClass = 'has-tooltip-primary';
        break;
      case 'link':
        colorClass = 'has-tooltip-link';
        break;
      case 'info':
        colorClass = 'has-tooltip-info';
        break;
      case 'success':
        colorClass = 'has-tooltip-success';
        break;
      case 'warning':
        colorClass = 'has-tooltip-warning';
        break;
      case 'danger':
        colorClass = 'has-tooltip-danger';
        break;
    }
    if (colorClass) {
      this.renderer.addClass(this.elementRef.nativeElement, colorClass);
    }
  }



  private setHiddenClasses(): void {
    const classes: string[] = [];
    if (this.hiddenMobile) {
      classes.push('has-tooltip-hidden-mobile');
    }
    if (this.hiddenTabletOnly) {
      classes.push('has-tooltip-hidden-tablet-only');
    }
    if (this.hiddenDesktopOnly) {
      classes.push('has-tooltip-hidden-desktop-only');
    }
    if (this.hiddenWidescreenOnly) {
      classes.push('has-tooltip-hidden-widescreen-only');
    }
    if (this.hiddenTouch) {
      classes.push('has-tooltip-hidden-touch');
    }
    if (this.hiddenTablet) {
      classes.push('has-tooltip-hidden-tablet');
    }
    if (this.hiddenDesktop) {
      classes.push('has-tooltip-hidden-desktop');
    }
    if (this.hiddenWidescreen) {
      classes.push('has-tooltip-hidden-widescreen');
    }
    if (this.hiddenFullhd) {
      classes.push('has-tooltip-hidden-fullhd');
    }
    classes.forEach(hiddenClass => this.renderer.addClass(this.elementRef.nativeElement, hiddenClass));
  }

  private setPosition(): void {
    let positionClass = 'has-tooltip';
    switch (this.position) {
      case 'right':
        positionClass = 'has-tooltip-right';
        break;
      case 'bottom':
        positionClass = 'has-tooltip-bottom';
        break;
      case 'left':
        positionClass = 'has-tooltip-left';
        break;
    }
    this.renderer.addClass(this.elementRef.nativeElement, positionClass);
  }



}
