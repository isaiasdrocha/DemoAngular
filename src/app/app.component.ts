import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DemoAngular';

  transferencia: any;
  //valor: number;
  //destino: number;


  transferir($event:any){
    console.log("Cheguei");
    console.log($event);
    //this.valor = $event.valor;
    //this.destino = $event.destino;
    this.transferencia = $event;
  }

}
