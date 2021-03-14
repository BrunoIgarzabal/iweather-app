import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  darkMode: boolean = false;

  constructor() {
    this.changeDarkMode();
  }

  changeDarkMode() {
    this.darkMode = document.body.getAttribute('color-theme') == 'dark' ? true : false;
  }

}
