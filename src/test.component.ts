import { CommonModule } from "@angular/common";
import { Component, NgModule, OnInit } from "@angular/core";
import { PixoworCore } from "pixowor-core";
import pkg from "../package.json";
import { TranslocoService } from "@ngneat/transloco";


@Component({
  selector: "test",
  templateUrl: "./test.component.html",
  styleUrls: ["./test.component.scss"],
})
export class TestComponent implements OnInit {
  public version = pkg.version;
  test: string;
  translocoService: TranslocoService;

  constructor(private pixoworCore: PixoworCore) {
    this.translocoService =
      pixoworCore.serviceManager.getService<TranslocoService>(TranslocoService);
  }

  ngOnInit() {
    this.test = this.translocoService.translate("testPlugin.test");
  }
}


@NgModule({
  imports: [CommonModule],
  declarations: [TestComponent]
})
export class TestModule {}