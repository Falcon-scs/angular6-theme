import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-date-pickers',
  templateUrl: './form-date-pickers.component.html',
  styleUrls: ['./form-date-pickers.component.css']
})
export class FormDatePickersComponent implements OnInit {

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
            "assets/vendor/bootstrap-datepicker/bootstrap-datepicker.min.js",
            "assets/vendor/bootstrap-daterangepicker/daterangepicker.js",
            "assets/vendor/sweetalert2/dist/sweetalert2.min.js",
            "assets/js/components/bootstrap-datepicker-init.js",
            "assets/js/components/bootstrap-date-range-picker-init.js"
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
