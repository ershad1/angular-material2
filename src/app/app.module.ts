import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatCardModule, MatDialogModule, MatIconModule, MatMenuModule, MatSidenavModule, MatSnackBarModule, MatTableModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';
import {DialogDemoComponent} from './dialog-demo/dialog-demo.component';
import {MyDialogComponent} from './my-dialog/my-dialog.component';
import { TooltipDemoComponent } from './tooltip-demo/tooltip-demo.component';
import { SnackbarDemoComponent } from './snackbar-demo/snackbar-demo.component';
import { UsertableComponent } from './components/usertable/usertable.component';
import {HttpClientModule} from '@angular/common/http';
import {UserService} from './services/user.service';
import { MenudemoComponent } from './menudemo/menudemo.component';
import { SidenavdemoComponent } from './sidenavdemo/sidenavdemo.component';
import { ToolbardemoComponent } from './toolbardemo/toolbardemo.component';


@NgModule({
  declarations: [
    AppComponent,
    DialogDemoComponent,
    MyDialogComponent,
    TooltipDemoComponent,
    SnackbarDemoComponent,
    UsertableComponent,
    MenudemoComponent,
    SidenavdemoComponent,
    ToolbardemoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatCardModule,
    MatButtonModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTableModule,
    HttpClientModule,
    MatMenuModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule
  ],
  providers: [UserService],
  entryComponents: [MyDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
