import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CompanionsSummaryComponent } from './companions-summary.page';


describe('CompanionsSummaryComponent', () => {
  let component: CompanionsSummaryComponent;
  let fixture: ComponentFixture<CompanionsSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanionsSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanionsSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
