import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  template: `
    <app-server></app-server>
    <app-server></app-server>
    <p>
      Inline templates should have only a few lines of code<br />
      and the key for inline template is template and not templateUrl
    </p>
  `,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
