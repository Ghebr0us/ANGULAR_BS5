import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
 selector: 'app-foo',
 templateUrl: './foo.component.html',
 styleUrls: ['./foo.component.css']
})
export class FooComponent implements OnInit {
  data: Object;
  loading: boolean;
  o :Observable<Object>;
  http: HttpClient;
   constructor(public http: HttpClient) {
    this.http = http;

   }
  
   //Nota bene, questo è un metodo alternativo e compatto per fare la stessa cosa di 
   //makeRequest senza dichiarare la variabile Observable e creando l’arrow function   
   //direttamente dentro il metodo subscribe
   makeCompactRequest(): void {
    this.loading = true;
    this.http
      .get('https://jsonplaceholder.typicode.com/posts/1')
      .subscribe(newData => {
      this.data = newData;
      this.loading = false;
      });
     }

  //  makeRequest(): void {
  //   //Notifichiamo che stiamo attendendo dei dati
  //   this.loading = true; 
  //   //Facciamo una get e otteniamo l'oggetto Observable che attende la risposta
  //   this.o = this.http.get('https://jsonplaceholder.typicode.com/posts/1');
  //   //Attacchiamo all'Observable o un metodo "observer" che verrà lanciato quando arriva la 
  //   //risposta
  //   this.o.subscribe(this.getData);
  // }
  // //Il metodo che notifica la risposta (nota che usiamo una "arrow function")
  // getData = (d : Object) =>
  // {
  //   this.data = d; //Notifico l’oggetto ricevuto dal server
  //   this.loading = false;  // Notifico che ho ricevuto i dati
  // }


}
