import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaAvanzadaComponent } from './vista-avanzada.component';

describe('VistaAvanzadaComponent', () => {
  let component: VistaAvanzadaComponent;
  let fixture: ComponentFixture<VistaAvanzadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VistaAvanzadaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VistaAvanzadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
