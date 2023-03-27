import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class ChildComponent implements OnInit {
  url$ = this.route.url.pipe(map(value => value.join('/')));
  
  constructor(private readonly route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log('attach');
  }

  ngOnDestroy() {
    console.log('dettach');

  }

}
