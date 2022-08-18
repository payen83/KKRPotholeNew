import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { GeneralService } from 'src/app/shared/services/general.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public user: any;
  constructor(
    private authService: AuthService,
    private generalService: GeneralService,
    private router: Router
    ) { 
    this.user = { email: null, password: null };
  }

  async ionViewDidEnter(){
    let data = await this.generalService.get('USER');
    // console.log(data)
    if(data){
      this.router.navigate(['/aduan'], {replaceUrl: true});
    }
  
  }

  async ngOnInit() {
  
  }

  async doLogin(){
    console.log(this.user);
    try {
      let res: any = await this.authService.login(this.user);
      // console.log('response ==> ' + JSON.stringify(res));
      let user_string: any = JSON.stringify(res);
      let user: any = JSON.parse(user_string);
      if(user.access_token){
        //1. Access granted. Save token to Ionic Storage
        await this.generalService.set('USER', user);
        //2. Route to Aduan Page
        this.router.navigate(['/aduan'], {replaceUrl: true});
      }
    console.log(user);
    } catch(err) {
      console.log(err.error.message);
      //show alert controller with error message
    }
  }

}
