import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildComponentsComponent } from './child-components.component';

describe('ChildComponentsComponent', () => {
  let component: ChildComponentsComponent;
  let fixture: ComponentFixture<ChildComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildComponentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChildComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
