import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-vertical-wizard',
  templateUrl: './form-vertical-wizard.component.html',
  styleUrls: ['./form-vertical-wizard.component.css']
})
export class FormVerticalWizardComponent implements OnInit {

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
            "assets/vendor/jquery-validation/jquery.validate.min.js",
            "assets/vendor/jquery-validation/additional-methods.min.js",
            "assets/vendor/jquery-steps/jquery.steps.min.js",
            "assets/vendor/sweetalert2/dist/sweetalert2.min.js",
            "assets/js/components/vertical-wizard-init.js"
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
