import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutogridComponent } from './produtogrid.component';

describe('ProdutogridComponent', () => {
  let component: ProdutogridComponent;
  let fixture: ComponentFixture<ProdutogridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutogridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutogridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
