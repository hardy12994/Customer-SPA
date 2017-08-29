import { Component } from '@angular/core';
import { Router ,ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isCustomersPage=true;
  constructor(private activatedRoute: ActivatedRoute){
    // console.log(this.activatedRoute.pathFromRoot[0]["_routerState.url"]);
    // console.log(this.activatedRoute.params);
  }
}
