import { Component, OnInit } from '@angular/core';
import { fromEventPattern } from 'rxjs';Companion
import { Companion } from 'src/app/shared/models/companion';
import { CompanionService } from 'src/app/core/services/companion.service';
import { RouterLinkRendererComponent } from 'src/app/shared/components/router-link-renderer/router-link-renderer.component';

@Component({
  selector: 'app-companions-summary',
  templateUrl: './companions-summary.page.html',
  styleUrls: ['./companions-summary.page.scss']
})
export class CompanionsSummaryComponent implements OnInit {

  companions: Companion[]; 
  selectedCompanion: Companion;  

  constructor(private companionService: CompanionService) {}

  ngOnInit() {
    this.companionService.getCompanions().subscribe(
      companionArray => {this.companions = companionArray});
  }

  onSelect(companion: Companion): void {
    this.selectedCompanion = companion;
  }  

  columnDefs = [
    {headerName: 'Name', field: 'name', filter: true, sortable: true,
     cellRendererFramework: RouterLinkRendererComponent,
     cellRendererParams: {
        inRouterLink: '/companion'
     }
    },
    {headerName: 'Doctors', field: 'doctorIds', filter: true, sortable: true}
  ];


}
