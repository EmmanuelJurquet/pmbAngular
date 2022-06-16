import { Component, OnInit } from '@angular/core';
import {UserprofileService} from '../security/userprofile.service';
import { HttpClient } from '@angular/common/http';
import { AuthorizationService } from '../security/authorization.service';
import {Wallet} from '../models/Wallet.model';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.scss']
})
export class UserprofileComponent implements OnInit {

  public userprofile: UserprofileService ;
  public wallet: Wallet;
  

  constructor(public http: HttpClient,
              private authorization: AuthorizationService) {
                this.userprofile = {
            firstname: '',
            lastname: '',
            email: '',
            birthdate:  new Date(),
            address: '',
            phone: '',
            city: '',
            zip: ''
          }
            this.wallet= {
            balance: -1
    }
}

  ngOnInit(): void {
      this.loadUserprofile();
  }
  // Chargement du profil utilisateur
  public loadUserprofile(): void {

    this.http.get('http://localhost:8081/user_profile?idOwner='
    + this.authorization.getUserId(), {} ).subscribe((res: any) => this.userProfileResult(res));
  }
  public userProfileResult(res: any): void  {
    this.userprofile = res;

  }
  // chargement du solde
  public loadWallet(): void {

this.http.get('http://localhost:8081/wallet?walId='
+ this.authorization.getUserId(), {} ).subscribe((res: any) => this.walletResult(res));
  }

  public walletResult(res: any): void{
    this.wallet = res;

  }

}
