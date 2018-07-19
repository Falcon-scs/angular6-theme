import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-default',
  templateUrl: './dashboard-default.component.html',
  styleUrls: ['./dashboard-default.component.css']
})
export class DashboardDefaultComponent implements OnInit {
  
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
          "assets/vendor/chart.js/dist/Chart.bundle.min.js",
          "assets/vendor/flot/jquery.flot.js",
          "assets/vendor/jquery.flot.tooltip/js/jquery.flot.tooltip.min.js",
          "assets/vendor/flot/jquery.flot.resize.js",
          "assets/vendor/flot/jquery.flot.time.js",
          "assets/vendor/flot.curvedlines/curvedLines.js",
          "assets/vendor/datatables.net/js/jquery.dataTables.js",
          "assets/vendor/datatables.net-bs4/js/dataTables.bootstrap4.js",
          "assets/js/components/countUp-init.js",
          "assets/js/cards/recent-transactions.js",
          "assets/js/cards/counter-group.js",
          "assets/js/cards/monthly-budget.js",
          "assets/js/cards/users-chart.js",
          "assets/js/cards/bounce-rate-chart.js",
          "assets/js/cards/session-duration-chart.js"
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
