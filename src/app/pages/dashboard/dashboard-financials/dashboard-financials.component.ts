import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-financials',
  templateUrl: './dashboard-financials.component.html',
  styleUrls: ['./dashboard-financials.component.css']
})
export class DashboardFinancialsComponent implements OnInit {

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
           "assets/vendor/echarts/echarts-all-3.js",
           "assets/vendor/chartist/dist/chartist.js",
           "assets/vendor/flot/jquery.flot.js",
           "assets/vendor/jquery.flot.tooltip/js/jquery.flot.tooltip.min.js",
           "assets/vendor/flot/jquery.flot.resize.js",
           "assets/vendor/flot/jquery.flot.time.js",
           "assets/vendor/flot.curvedlines/curvedLines.js",
           "assets/vendor/d3/dist/d3.min.js",
           "assets/vendor/c3/c3.min.js",
           "assets/js/global/app.js",
           "assets/js/cards/sales-chartist.js",
           "assets/js/cards/payout-chartist.js",
           "assets/js/cards/total-revenue.js",
           "assets/js/cards/monthly-budget-2.js"
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
