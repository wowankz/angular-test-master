import { Component, Inject, OnInit } from '@angular/core';
import { COLLEGE_ABOUT$ } from '../about.providers';
import { Observable } from 'rxjs';
import { AboutInterface } from '../about.interface';

import { TranslateService } from '@ngx-translate/core';

@Component({
	selector: 'app-college',
	templateUrl: './college.component.html',
	styleUrls: ['./college.component.scss'],
})
export class CollegeComponent implements OnInit {
	college?: AboutInterface;
	isLoading = true;
	imgPath = '/assets/img/';
	routs = ['about', 'courses', 'teachers', 'contacts'];

	constructor(@Inject(COLLEGE_ABOUT$) readonly college$: Observable<AboutInterface>, private translate: TranslateService) {
		this.initTraslator();
	}

	ngOnInit() {
		this.getCollege();
	}

	getCollege(): void {
		this.college$.subscribe((college) => {
			this.college = college;
			setTimeout(() => {
				this.isLoading = false;
			}, 100);
		});
	}

	initTraslator(): void {
		let lang: string = this.translate.getBrowserLang() || 'en';
		this.translate.addLangs(['en', 'he', 'ru']);
		this.translate.setDefaultLang(lang);
		this.translate.use(lang);
	}

	changeLang(event, langBox): void {
		let lang = event.target.innerText;
		console.log('Selected lang : ', lang);
		for (let el of langBox.children) {
			el.classList.remove('active');
		}
		event.target.classList.add('active');
		this.translate.use(lang);
	}
}
