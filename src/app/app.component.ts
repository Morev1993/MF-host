import { Location } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'mf-host';

  constructor(private readonly location: Location) {

  }

  ngOnInit() {
    // console.log(this.location.path());
    // this.location.onUrlChange(url => {
    //   console.log(url);
    // })
  }

  silentRedirect() {
    // this.location.go('/plan-foo');

  }
}
