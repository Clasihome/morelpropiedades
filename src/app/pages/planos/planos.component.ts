import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-planos",
  templateUrl: "./planos.component.html",
  styleUrls: ["./planos.component.sass"],
})
export class PlanosComponent {
  selected = "CACHAGUA";

  changeDiv(event) {
    this.selected = event.target.value;
  }
}
