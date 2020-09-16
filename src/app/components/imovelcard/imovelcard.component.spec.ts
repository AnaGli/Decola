import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImovelcardComponent } from './imovelcard.component';

describe('ImovelcardComponent', () => {
  let component: ImovelcardComponent;
  let fixture: ComponentFixture<ImovelcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImovelcardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImovelcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
