import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsvDownloadComponent } from './csvdownload.component';

describe('CsvdownloadComponent', () => {
  let component: CsvDownloadComponent;
  let fixture: ComponentFixture<CsvDownloadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsvDownloadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CsvDownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
