import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ReactiveFormsModule } from '@angular/forms'
import { HttpModule, XHRBackend } from '@angular/http';

import { AppComponent } from './app.component'
import { MoodItemComponent } from './mood-item.component'
import { FavoriteDirective } from './significantMood.directive';
import { MoodItemFormComponent } from './mood-item-form.component';
import { MoodItemService } from './mood-item.service';
import { MoodItemListComponent } from './mood-item-list.component';
import { lookupListToken, lookupLists } from './providers';
import { MockXHRBackend } from './mock-xhr-backend'
import { routing } from './app.routing'

//import { CategoryListPipe } from './category-list.pipe'

@NgModule({
    imports:[
        BrowserModule,
        ReactiveFormsModule,
        HttpModule,
        routing
    ],
    declarations:[
        AppComponent,
        MoodItemListComponent, 
        MoodItemComponent,
        MoodItemFormComponent
       // CategoryListPipe
    ],
    providers:[
        MoodItemService,
        { provide: lookupListToken, useValue: lookupLists},
        { provide: XHRBackend, useValue: MockXHRBackend},

    ],//make components, directives and pipes
    bootstrap:[
        AppComponent,
        
    ]    //lets angular know the entry point for the bootstrap process    
})

export class AppModule {

    





}