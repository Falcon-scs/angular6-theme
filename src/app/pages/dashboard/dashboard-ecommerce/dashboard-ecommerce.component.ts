import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-ecommerce',
  templateUrl: './dashboard-ecommerce.component.html',
  styleUrls: ['./dashboard-ecommerce.component.css']
})
export class DashboardEcommerceComponent implements OnInit {

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
            "assets/vendor/wNumb/wNumb.js",
            "assets/vendor/noUiSlider/nouislider.min.js",
            "assets/vendor/rateYo/jquery.rateyo.min.js",
            "assets/js/components/ecom-dashboard-slider-init.js",
            "assets/js/components/rateYo-init.js"
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
