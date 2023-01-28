import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {

  allowNewServer = false;
  serverCreation = "No server was created!";
  serverName = "Testserver";

  constructor(){
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }



  onCreateServer(){
    return this.serverCreation = "Server was created! Name is " + this.serverName;
  }

  onUpdateServerName(event: any){
    this.serverName = event.target.value;
  }
}
