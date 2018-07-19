import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  loadAPI: Promise<any>;
  
    constructor() { 
      this.loadAPI = new Promise((resolve) => {
        this.loadScript();
        resolve(true);
    });
    }
  
    ngOnInit() {
    }
    public loadScript() {        
      var isFound = false;
      var scripts = document.getElementsByTagName("script")
      for (var i = 0; i < scripts.length; ++i) {
          if (scripts[i].getAttribute('src') != null && scripts[i].getAttribute('src').includes("loader")) {
              isFound = true;
          }
      }
  
      if (!isFound) {
          var dynamicScripts = [
            "assets/vendor/moment/min/moment.min.js",
            "assets/vendor/fullcalendar/dist/fullcalendar.min.js",
            "https://cdnjs.cloudflare.com/ajax/libs/pikaday/1.6.1/pikaday.min.js",
            "https://cdnjs.cloudflare.com/ajax/libs/jquery-timepicker/1.10.0/jquery.timepicker.min.js",
            "assets/js/components/fullcalendar-init.js"
          ];
  
          for (var i = 0; i < dynamicScripts .length; i++) {
              let node = document.createElement('script');
              node.src = dynamicScripts [i];
              node.type = 'text/javascript';
              node.async = false;
              node.charset = 'utf-8';
              document.getElementsByTagName('head')[0].appendChild(node);
          }
  
      }
    }

}
