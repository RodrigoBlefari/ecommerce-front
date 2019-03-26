import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrosidebarComponent } from './cadastrosidebar.component';

describe('CadastrosidebarComponent', () => {
  let component: CadastrosidebarComponent;
  let fixture: ComponentFixture<CadastrosidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrosidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrosidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
