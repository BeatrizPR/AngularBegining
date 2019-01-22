import { NgModule} from '@angular/core';
import { RouterModule} from '@angular/router';

import { WelcomeComponent} from './home/welcome.component';

@NgModule({
    imports:[
        RouterModule.forRoot([
            { path:'welcome', component: WelcomeComponent},
            { path: '', redirectTo: 'welcome', pathMatch: 'full'},
            // path ** is usually used for not found page, error 404, 
            // but now in this example, we redirect to welcome page
            { path: '**', redirectTo: 'welcome', pathMatch: 'full'}
        ])
    ],
    exports: [RouterModule ]
})

export class AppRoutingModule { };
