import { TransferenciaService } from './services/transferencia.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DemoAngular';



  constructor(private service: TransferenciaService){ }

  transferencias: any[] = [];
  //valor: number;
  //destino: number;


  transferir($event:any){
    console.log("Cheguei");
    console.log($event);
    this.service.adicionar($event)

  }

}
