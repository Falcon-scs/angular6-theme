import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-analytics',
  templateUrl: './dashboard-analytics.component.html',
  styleUrls: ['./dashboard-analytics.component.css']
})
export class DashboardAnalyticsComponent implements OnInit {

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
            "assets/vendor/countup.js/dist/countUp.min.js",
            "assets/vendor/jvectormap-next/jquery-jvectormap.min.js",
            "assets/vendor/jvectormap-next/jquery-jvectormap-world-mill.js",
            "assets/vendor/chartist/dist/chartist.js",
            "assets/vendor/flot/jquery.flot.js",
            "assets/vendor/jquery.flot.tooltip/js/jquery.flot.tooltip.min.js",
            "assets/vendor/flot/jquery.flot.resize.js",
            "assets/vendor/flot/jquery.flot.time.js",
            "assets/vendor/flot.curvedlines/curvedLines.js",
            "assets/js/cards/sessions-by-location.js",
            "assets/js/components/countUp-init.js",
            "assets/js/cards/total-visits-chart.js",
            "assets/js/cards/total-unique-visits-chart.js",
            "assets/js/cards/bar-chart-line-three.js",
            "assets/js/cards/traffic-sources.js"
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
