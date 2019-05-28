import {
  trigger, animateChild, group,
  transition, animate, style, query
} from '@angular/animations';


export const slideInAnimation =
  trigger('routeAnimation', [
    transition('projects <=> project', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          opacity: 0,
        })
      ]),
      query(':enter', [
        style({ opacity: 0, transform: 'translateX(-10%)'})
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('590ms ease-out', style({ opacity: 0, transform: 'translateX(-10%)'}))
        ]),
        query(':enter', [
          animate('590ms ease-out', style({ opacity: 1, transform: 'translateX(0)'}))
        ])
      ]),
      query(':enter', animateChild()),
    ])
  ]);