import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaMenuComponent } from './tabla-menu.component';

describe('TablaMenuComponent', () => {
  let component: TablaMenuComponent;
  let fixture: ComponentFixture<TablaMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TablaMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TablaMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
