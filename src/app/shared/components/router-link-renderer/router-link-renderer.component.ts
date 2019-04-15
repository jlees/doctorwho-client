import { Component, OnInit } from '@angular/core';
import { AgRendererComponent } from 'ag-grid-angular';

@Component({
  template: '<a [routerLink]="[params.inRouterLink, params.data.id]">{{params.value}}</a>'
  })
  export class RouterLinkRendererComponent implements AgRendererComponent {
    params: any;
  
    agInit(params: any): void {
      this.params = params;
    }
  
    refresh(params: any): boolean {
      return false;
    }
  }
