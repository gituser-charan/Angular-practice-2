import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicsLstComponent } from './topics-lst.component';

describe('TopicsLstComponent', () => {
  let component: TopicsLstComponent;
  let fixture: ComponentFixture<TopicsLstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopicsLstComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopicsLstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
