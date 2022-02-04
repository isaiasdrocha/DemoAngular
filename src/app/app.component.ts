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

  // transferir($event:any){
  //   console.log("Cheguei");
  //   console.log($event);
  //   this.service.adicionar($event)

  // }

}
/*

https://github.com/typicode/json-server
http://localhost:3000/transferencias/

http://json2ts.com/ - Converter json em classe - Rodar no cmd "json-server --watch db.json"
*/
