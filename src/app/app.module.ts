import { RecherchePipe } from './recherche.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NoopAnimationsModule} from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatToolbarModule,} from '@angular/material';
import { MatSelectModule} from '@angular/material/select';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatCardModule} from '@angular/material/card';
import { MatDividerModule} from '@angular/material/divider';
import { RouterModule} from '@angular/router';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ImmobilierComponent } from './immobilier/immobilier.component';
import { FormBienComponent } from './immobilier/form-bien/form-bien.component';
import { HeaderComponent } from './immobilier/header/header.component';
import { FooterComponent } from './immobilier/footer/footer.component';
import { CatalogueComponent } from './immobilier/catalogue/catalogue.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BienService, TypeBiens, LocaliteService } from './immobilier/service/bien.service';
import { MatGridListModule} from '@angular/material/grid-list';
import { ReservationComponent } from './immobilier/reservation/reservation.component';
import { ReservComponent } from './immobilier/reserv/reserv.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatExpansionModule } from '@angular/material/expansion';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormClientComponent } from './immobilier/form-client/form-client.component';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTabsModule} from '@angular/material/tabs';
import { FormConnexionComponent } from './immobilier/form-connexion/form-connexion.component';
import { BackComponent } from './back/back.component';
import { ListeReservationComponent } from './back/liste-reservation/liste-reservation.component';
import { HttpErrorsComponent } from './immobilier/http-errors/http-errors.component';
import {MatTableModule} from '@angular/material/table';
import { DetailComponent } from './immobilier/detail/detail.component';
import { DetailReserveComponent } from './back/detail-reserve/detail-reserve.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SaveComponent } from './back/save/save.component';



@NgModule({
  declarations: [
    AppComponent,
    ImmobilierComponent,
    FormBienComponent,
    HeaderComponent,
    FooterComponent,
    CatalogueComponent,
    ReservationComponent,
    ReservComponent,
    FormClientComponent,
    FormConnexionComponent,
    RecherchePipe,
    ListeReservationComponent,
    BackComponent,
    ListeReservationComponent,
    HttpErrorsComponent,
    DetailComponent,
    DetailReserveComponent,
    SaveComponent

   
   
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatButtonModule,
     MatCheckboxModule,
    MatToolbarModule,
    MatCardModule,
    MatSelectModule,
    MatFormFieldModule,
    MatCardModule,
    MatGridListModule,
    HttpClientModule,
    MatDividerModule,
    MatAutocompleteModule,
    MatExpansionModule,
    NgxPaginationModule,
    FormsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatTableModule,
    MatSidenavModule,
    RouterModule.forRoot([
      { path:"",component:ImmobilierComponent},
      {
       
         path: 'reserve-cmp/:id',
         component: ReservationComponent,
        

      },
      {
        path: 're-cmp',
        component:  ReservComponent
      },
      
      {
        path: 'login',
        component:  FormConnexionComponent
      },
      {
        path: 'reservation-cmp',
        component:  BackComponent
      },
      {
        path: 'detail-cmp/:id',
        component:   DetailReserveComponent
      },
      {
        path: 'save-cmp/:id',
        component:   SaveComponent
      },
      
   ])
   
  ],
  exports: [MatButtonModule, MatCheckboxModule,MatToolbarModule,MatCardModule,
    MatSelectModule,MatFormFieldModule,MatGridListModule,MatDividerModule,
    MatAutocompleteModule,
    MatExpansionModule,MatIconModule,MatProgressSpinnerModule,MatTabsModule,MatSidenavModule
  ],
  providers: [
    BienService,TypeBiens,LocaliteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
