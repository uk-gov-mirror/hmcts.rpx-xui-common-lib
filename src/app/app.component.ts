import { Component, OnInit } from '@angular/core';
import { TCDocument } from 'projects/exui-common-lib/src';
import { GoogleAnalyticsService } from 'projects/exui-common-lib/src/lib/services/google-analytics/google-analytics.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  public title = 'rpx-xui-common-lib';

  public testDocumentPlain: TCDocument = {
    version: 1,
    content: 'Test Document Content',
    mimeType: 'text/plain'
  };

  public testDocumentHtml: TCDocument = {
    version: 2,
    content: `<h1>HTML Test</h1><p>Document to test <b>HTML</b> content</p>`,
    mimeType: 'text/html'
  };

  constructor(
    private readonly googleAnalytics: GoogleAnalyticsService
  ) { }

  public ngOnInit() {
    this.googleAnalytics.init('UA-151027057-1');
  }
}
