import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BarCodePage } from './bar-code.page';

describe('BarCodePage', () => {
  let component: BarCodePage;
  let fixture: ComponentFixture<BarCodePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarCodePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BarCodePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
