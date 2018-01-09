import { Directive, Input, HostBinding, HostListener } from '@angular/core'

@Directive({
    selector: '[mwFavorite]'
})

export class FavoriteDirective {

    @HostBinding('class.is-favorite') isFavorite = true;
    @HostBinding('class.is-favorite-hovering') hovering = false;
    @HostListener('mouseenter') onMouseEnter() {
        this.hovering = true;
    }

    @HostListener('mouseleave') onMouseLeave() {
        
        this.hovering = false;
    }

    @Input() set mwFavorite(value) {
        console.log('mwfavourite value is ' + value)
        this.isFavorite = value;
    } 

}