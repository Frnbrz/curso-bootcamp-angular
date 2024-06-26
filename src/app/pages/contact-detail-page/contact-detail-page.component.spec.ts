import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactDetailPageComponent } from './contact-detail-page.component';

describe('ContactDetailPageComponent', () => {
  let component: ContactDetailPageComponent;
  let fixture: ComponentFixture<ContactDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactDetailPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
