import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DemoAngular';

  transferencias: any[] = [];
  //valor: number;
  //destino: number;


  transferir($event:any){
    console.log("Cheguei");
    console.log($event);

    const transferencia = {...$event, data: new Date()};

    this.transferencias.push(transferencia);
  }

}
