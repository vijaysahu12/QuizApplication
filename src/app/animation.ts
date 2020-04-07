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
