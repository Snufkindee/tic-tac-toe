import { Component, Input, OnInit } from "@angular/core";
import { Cell } from "./cell";

@Component({
  selector: "app-cell",
  templateUrl: "./cell.component.html",
  styleUrls: ["./cell.component.scss"],
})
export class CellComponent implements OnInit {
  @Input() cell: Cell;
  @Input() disabled: boolean = false;

  constructor() {}

  ngOnInit() {}
}
