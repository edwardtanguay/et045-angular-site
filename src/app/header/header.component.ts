import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
	@Input() appTitle = '(no title)';
	@Input() status = 'normal';
	@Input() userGroup = 'sales';

	backgroundStyle = 'text-slate-500';
	showMessage = false;
	highlightProductMessage = false;
	infoAvailable = true;

	ngOnInit() {
		if (this.status === 'error') {
			this.backgroundStyle = 'text-red-500';
		}
	}
}
