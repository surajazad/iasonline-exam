/*
NgModule is imported from @angular/core. The module decorator is needed to declare routing modules.
Routes and RouterModule are imported from @angular/router. The Routes class type is used to create route configuration. RouterModule is the Angular 2 standard Router module and needs to be imported by every routing module.
Import statements for our components FirstComponent, SecondComponent and ThirdComponent are added as well.
*/

import { NgModule } from '@angular/core';
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {QuestionContainerComponent} from './question-container/question-container.component';
import {SubmissionComponent} from './submission/submission.component';
import {ExamContainerComponent} from './exam-container/exam-container.component';

const routes : Routes = [
    {path:'exam',component:ExamContainerComponent},
    {path:'question',component:QuestionContainerComponent},
    {path:'submit',component:SubmissionComponent}
];

export const routing : ModuleWithProviders = RouterModule.forRoot(routes);

// export class AppRoutingModule{}

// export const routingComponents = [ExamContainerComponent, QuestionContainerComponent, SubmissionComponent];

/*
Next we’re creating a const array of type Routes. This array contains four route configuration element. Each element consists of the following properties:

path: The URL path of the route as a string
component: The component which should be loaded when the path is used.
There is the first route configuration element which does not comply with that pattern. Instead you’ll find the following properties:

path
pathMatch
redirectTo
That’s a route redirect. We’re defining that the root path of the application should be redirected to path ‚first‘. This means that when the users enters http://localhost/ a redirect to http://localhost/first is done automatically.

Now that the routes array is containing the routing configuration we can pass that configuration array to the RouterModule.forRoot(routes) method. This method returns a Router module which is containing our configuration. The forRoot method call is placed inside the imports array. This is needed because we would like to import the resulting module in AppRoutingModule.

Note: the forRoot() method should only be used for creating RouteModules which are used on application level (in AppModule).

Another thing which needs to be noticed is that another const array is defined: routingComponents. This array is containing the three components which are used in the routing configuration. As this array is exported, we’re able to import this array again in AppModule. This makes it easier to add all components for the router in the declarations array of AppModule.
*/