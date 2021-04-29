import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AboutRoutingModule} from './about-routing.module';
import {CollegeComponent} from './college/college.component';
import { COLLEGE_ABOUT$ } from './about.providers';
import { AboutCollegeService } from './about-college.service';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
	declarations: [CollegeComponent],
	imports: [CommonModule, AboutRoutingModule, TranslateModule],
	providers: [{ provide: COLLEGE_ABOUT$, useClass: AboutCollegeService }],
})
export class AboutModule {}
