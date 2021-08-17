import { Component, OnInit } from "@angular/core";
declare function initJs1();

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.sass"],
})
export class AppComponent implements OnInit {
  title = "morelpropiedades";

  ngOnInit() {
    initJs1();
  }
}
