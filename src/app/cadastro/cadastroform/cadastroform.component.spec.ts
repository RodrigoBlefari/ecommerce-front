import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroformComponent } from './cadastroform.component';

describe('CadastroformComponent', () => {
  let component: CadastroformComponent;
  let fixture: ComponentFixture<CadastroformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
