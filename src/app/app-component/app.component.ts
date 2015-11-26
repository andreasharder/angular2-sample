import {Component, View, bootstrap} from 'angular2/angular2';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {SpeakersComponent} from '../speakers-component/speakers.component';
import {DashboardComponent} from '../dashboard-component/dashboard.component';
import {AddComponent} from '../add-component/add.component';
import {DetailsComponent} from '../details-component/details.component';
import {HeroService} from '../hero.service';

@RouteConfig([
    {path: '/', as: 'Dashboard', component: DashboardComponent },
    {path: '/list', as: 'Speakers', component: SpeakersComponent},
    {path: '/add', as: 'Add', component: AddComponent }
])
@Component({
	selector: 'my-app',
})
@View({
	templateUrl: 'app/app-component/app.component.html',
	directives: [ROUTER_DIRECTIVES]
})
class AppComponent {
	public title = 'Board of Speakers';
}

bootstrap(AppComponent, [ROUTER_PROVIDERS, HeroService]);
