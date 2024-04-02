import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkCustomComponent } from './link-custom.component';

describe('LinkCustomComponent', () => {
  let component: LinkCustomComponent;
  let fixture: ComponentFixture<LinkCustomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinkCustomComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LinkCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
