import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuResComponent } from './menu-res.component';

describe('MenuResComponent', () => {
  let component: MenuResComponent;
  let fixture: ComponentFixture<MenuResComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuResComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuResComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
