import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CompanionDetailComponent } from './companion-detail.page';


describe('CompanionDetailComponent', () => {
  let component: CompanionDetailComponent;
  let fixture: ComponentFixture<CompanionDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanionDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
