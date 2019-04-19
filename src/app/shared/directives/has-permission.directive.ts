import { Directive, OnInit, ElementRef, TemplateRef, ViewContainerRef, Input } from '@angular/core';
import { AuthService } from 'src/app/core/auth/auth.service';

@Directive({
  selector: '[hasPermission]'
})
export class HasPermissionDirective implements OnInit {
  private permissions = [];
  private logicalOp: string;

  constructor(
    private element: ElementRef,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private authService: AuthService
  ) {
  }

  ngOnInit() {
    this.updateView();
  }

  @Input()
  set hasPermission(val) {
    this.permissions = val;
  }

  @Input()
  set hasPermissionOperation(op) {
    this.logicalOp = op;
  }

  private updateView() {
    if (this.checkPermission()) {
        this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }

  private checkPermission() {
    if (this.logicalOp === 'OR') {
        return this.permissions.some( (permission) => this.authService.hasPermission(permission) );
    } else {
        return this.permissions.every( (permission) => this.authService.hasPermission(permission) );
    }
  }
}