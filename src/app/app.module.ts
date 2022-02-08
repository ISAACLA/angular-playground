import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { UsersModule } from './users/users.module';
import { TempMainComponent } from './temp-main/temp-main.component';
import { UsersState } from './users/state/users.state';
import { NgxsModule } from '@ngxs/store';
import { AlbumsModule } from './albums/albums.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { TodosModule } from './todos/todos.module';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [AppComponent, TempMainComponent, HeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxsModule.forRoot([], { developmentMode: true }),
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    UsersModule,
    AlbumsModule,
    TodosModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
