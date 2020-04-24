import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileDropUploaderComponent } from './file-drop-uploader.component';

describe('FileDropUploaderComponent', () => {
  let component: FileDropUploaderComponent;
  let fixture: ComponentFixture<FileDropUploaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileDropUploaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileDropUploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
