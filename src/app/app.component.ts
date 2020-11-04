import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  temparray = [{id: 1 ,metaStatus: false} ,{id: 2 ,metaStatus: false} ,{id: 3 ,metaStatus: true}]


  tempe() {
   let u= this.temparray.every((element) => element.metaStatus === false)
   console.log(u);
  }
}
