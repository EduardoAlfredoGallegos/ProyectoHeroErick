import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HeroDetallesPage } from './hero-detalles.page';

describe('HeroDetallesPage', () => {
  let component: HeroDetallesPage;
  let fixture: ComponentFixture<HeroDetallesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroDetallesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HeroDetallesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
