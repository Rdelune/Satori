import { Routes, RouterModule } from '@angular/router'
import { MoodItemFormComponent } from './mood-item-form.component'
import {MoodItemListComponent} from './mood-item-list.component'

const appRoute: Routes = [
    { path: 'add', component : MoodItemFormComponent},
    { path: 'Make Entry', component : MoodItemFormComponent},
    { path: 'Log', component : MoodItemListComponent},
    { path: ':timeOfDay'},
    { path: '', pathMatch:'', redirectTo:'all'}
]

 export const routing = RouterModule.forRoot(appRoute)