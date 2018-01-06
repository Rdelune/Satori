import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppComponent } from './app.component'
import { PlaylistComponent } from './playlist.component'
import { inputForm } from './inputForm.component'
import { MoodItemComponent } from './mood-item.component'

@NgModule({
    imports:[
        BrowserModule
    ],
    declarations:[AppComponent, PlaylistComponent, inputForm, MoodItemComponent], //make components, directives and pipes
    bootstrap:[
        AppComponent, PlaylistComponent, inputForm, MoodItemComponent
    ]    //lets angular know the entry point for the bootstrap process

})

export class AppModule {



}