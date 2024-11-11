import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it("check component name",()=>{
    expect(component.componentName ).toBe('user')
  });
  it("Check component function",()=>{
    expect(component.sum(30,70)).toBe(100)
  });
  it("Check html heading",()=>{
    const collection=fixture.nativeElement;
    expect(collection.querySelector('.usercomponent').textContent).toContain('User')
  })
});
