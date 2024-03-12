import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFirstInlineComponentComponent } from './my-first-inline-component.component';

describe('MyFirstInlineComponentComponent', () => {
  let component: MyFirstInlineComponentComponent;
  let fixture: ComponentFixture<MyFirstInlineComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyFirstInlineComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyFirstInlineComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
