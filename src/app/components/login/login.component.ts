import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { GraphqlUsersService} from '../../graphql.users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;

  username: string = ""
  password: string = ""
  token: string = ""

  constructor(private graphqlUsersService : GraphqlUsersService) { }

  ngOnInit(): void {
  }

  loginUser() {

    alert(this.username + " - " + this.password);
    this.token="";
    this.graphqlUsersService.tokenAuth(this.username, this.password)
    .subscribe(({ data }) => {
       console.log('logged: ', JSON.stringify(data));
      // this.storageService.setSession("token", JSON.parse(JSON.stringify(data)).tokenAuth.token);
      //this.storageService.setLocal("token", JSON.parse(JSON.stringify(data)).tokenAuth.token);
      this.token =  JSON.parse(JSON.stringify(data)).tokenAuth.token;
      

      //this.loginService.showData(mydata);
      // this.router.navigate(['/']);

    }, (error) => {
       console.log('there was an error sending the query', error);
    });
  
  }  

}
