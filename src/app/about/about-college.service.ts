import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AboutInterface } from './about.interface';

@Injectable()
export class AboutCollegeService {
	constructor() {
		return new Observable<AboutInterface>((subscriber) => {
			subscriber.next({
				id: 0,
				name: 'College name',
				photo: 'College1.jpg',
				about: 'Some text about  college Some text about  college Some text about college Some text about  college',
				media_type: 1,
				vimeo_video_id: 2,
			});
		});
	}
}
