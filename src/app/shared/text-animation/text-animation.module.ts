import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextAnimationComponent } from './text-animation.component';



@NgModule({
    declarations: [TextAnimationComponent],
    exports: [
        TextAnimationComponent
    ],
    imports: [
        CommonModule
    ]
})
export class TextAnimationModule { }
