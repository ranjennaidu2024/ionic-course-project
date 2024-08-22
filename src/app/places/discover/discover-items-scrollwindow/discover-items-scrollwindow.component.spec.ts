import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DiscoverItemsScrollwindowComponent } from './discover-items-scrollwindow.component';

describe('DiscoverItemsScrollwindowComponent', () => {
  let component: DiscoverItemsScrollwindowComponent;
  let fixture: ComponentFixture<DiscoverItemsScrollwindowComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscoverItemsScrollwindowComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DiscoverItemsScrollwindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
