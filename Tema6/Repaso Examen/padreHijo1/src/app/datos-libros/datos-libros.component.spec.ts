import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosLibrosComponent } from './datos-libros.component';

describe('DatosLibrosComponent', () => {
  let component: DatosLibrosComponent;
  let fixture: ComponentFixture<DatosLibrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatosLibrosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DatosLibrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
