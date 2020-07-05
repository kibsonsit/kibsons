import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-content-header',
  templateUrl: './content-header.component.html',
  styleUrls: ['./content-header.component.scss']
})
export class ContentHeaderComponent implements OnInit {
// tslint:disable-next-line: no-input-rename
  @Input('icon') icon: any;
// tslint:disable-next-line: no-input-rename
  @Input('title') title: any;
// tslint:disable-next-line: no-input-rename
  @Input('desc') desc: any;
// tslint:disable-next-line: no-input-rename
  @Input('hideBreadcrumb') hideBreadcrumb: boolean;
// tslint:disable-next-line: no-input-rename
  @Input('hasBgImage') hasBgImage: boolean;
// tslint:disable-next-line: no-input-rename
  @Input('class') class: any;
  constructor() { }
  
  ngOnInit() {
  }

}
