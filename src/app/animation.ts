import {
    animate, animation, AnimationAnimateRefMetadata, AnimationReferenceMetadata, AnimationTriggerMetadata,
    group, keyframes, query, state, style, transition, trigger, useAnimation
} from '@angular/animations';
/** Many of the following animations were inspired by: (inspired by: https://daneden.github.io/animate.css/) */

/**
 * shrink and grow are used within most enter/leave animations so surrounding elements will appropriately slide
 */
const shrink = animation(
    animate('{{time}}', style({ height: '0px', paddingTop: '0px', paddingBottom: '0px', marginTop: '0px', marginBottom: '0px' })),
    { params: { time: '200ms' } },
);
const grow = animation(
    [
        style({ height: '0px', paddingTop: '0px', paddingBottom: '0px', marginTop: '0px', marginBottom: '0px' }),
        animate('{{time}}', style({ height: '*', paddingTop: '*', paddingBottom: '*', marginTop: '*', marginBottom: '*' })),
    ],
    { params: { time: '200ms' } },
);

export const slideFadeIn = animation(
    [
        style({ opacity: '0', transform: 'translateX({{startPos}})' }),
        group([
            useAnimation(grow),
            animate('{{time}}', style({ opacity: '1', transform: '*' })),
        ]),
    ],
    { params: { time: '200ms', startPos: '100%' } },
);



export const FlyingIn = animation([
    trigger('flyInOut', [
        state('in', style({
            width: 220,
            transform: 'translateX(0)', opacity: 1
        })),
        transition('void => *', [
            style({ width: 350, transform: 'translateX(50px)', opacity: 0 }),
            group([
                animate('0.7s 0.5s ease', style({
                    transform: 'translateX(0)',
                    width: 120
                })),
                animate('1s ease', style({
                    opacity: 1
                }))
            ])
        ]),
        transition('* => void', [
            group([
                animate('0.7s ease', style({
                    transform: 'translateX(50px)',
                    width: 10
                })),
                animate('0.7s 0.5s ease', style({
                    opacity: 0
                }))
            ])
        ])
    ]),
    trigger('shrinkOut', [
        state('in', style({ height: '*' })),
        transition('* => void', [
            style({ height: '*' }),
            animate(250, style({ height: 0 }))
        ])
    ])
]);
