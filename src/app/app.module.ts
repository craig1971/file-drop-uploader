import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FileDropUploaderComponent } from './file-drop-uploader/file-drop-uploader.component';
import { DndDirective } from './dnd.directive';
import { ProgressComponent } from './progress/progress.component';

@NgModule({
  declarations: [
    AppComponent,
    FileDropUploaderComponent,
    DndDirective,
    ProgressComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
