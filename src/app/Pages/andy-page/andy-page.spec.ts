import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AndyPage } from './andy-page';

describe('AndyPage', () => {
  let component: AndyPage;
  let fixture: ComponentFixture<AndyPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AndyPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AndyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
