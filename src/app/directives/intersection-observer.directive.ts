import {
  Directive,
  ElementRef,
  OnInit,
  OnDestroy,
  output,
} from '@angular/core';

@Directive({
  selector: '[appIntersectionObserver]',
  standalone: true,
})
export class IntersectionObserverDirective implements OnInit, OnDestroy {
  visible = output<boolean>();

  private observer!: IntersectionObserver;

  constructor(private element: ElementRef) {}

  ngOnInit() {
    this.observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.visible.emit(true);
            this.observer.disconnect();
          }
        });
      },
      {
        threshold: [0.3], // Trigger when 30% of the element is visible
      }
    );

    this.observer.observe(this.element.nativeElement);
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
