import { CommonModule } from "@angular/common";
import { Component, NgModule, OnInit } from "@angular/core";
import { PixoworCore } from "pixowor-core";
import pkg from "../package.json";
import { TranslocoService } from "@ngneat/transloco";
import { TreeModule } from "primeng/tree";
import { TreeNode } from "primeng/api";

@Component({
  selector: "hierarchy-tree",
  templateUrl: "./hierarchy-tree.component.html",
  styleUrls: ["./hierarchy-tree.component.scss"],
})
export class HierarchyTreeComponent implements OnInit {
  files: TreeNode[] = [
    {
      label: "Lazy Node 0",
      data: "Node 0",
      expandedIcon: "pi pi-folder",
      collapsedIcon: "pi pi-folder",
      leaf: false,
    },
    {
      label: "Lazy Node 1",
      data: "Node 1",
      expandedIcon: "pi pi-folder-open",
      collapsedIcon: "pi pi-folder",
      leaf: false,
    },
    {
      label: "Lazy Node 1",
      data: "Node 2",
      expandedIcon: "pi pi-folder-open",
      collapsedIcon: "pi pi-folder",
      leaf: false,
    },
  ];
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
  imports: [CommonModule, TreeModule],
  declarations: [HierarchyTreeComponent],
})
export class HierarchyTreeModule {}