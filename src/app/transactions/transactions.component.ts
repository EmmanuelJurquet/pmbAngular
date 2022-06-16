import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transactions } from '../models/transactions.model';
import { AuthorizationService } from '../security/authorization.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {

  public transactions: Transactions [];
  public lFriend: any[];
  public friendSelected: number;
  public amount: number;

  constructor(public http: HttpClient,
              private authorization: AuthorizationService) {
    this.transactions   = [];
    this.lFriend        = [];
    this.friendSelected = -1;
    this.amount = 0;
  }

  ngOnInit(): void {
    this.loadFriend();
    this.loadTransaction();
  }

  // Chargement de la liste des amis
  public loadFriend(): void {

   this.http.get( 'http://localhost:8081/friendlist?idOwner='
   + this.authorization.getUserId()).subscribe((res: any) => this.friendResult(res));
  }

  private friendResult(res: any): void {
    this.lFriend = res;
  }

  // Chargement de l'historique des transactions
  public loadTransaction(): void {


    this.http.get( 'http://localhost:8081/transactions1?idOwner='
    + this.authorization.getUserId()).subscribe((res: any) => this.transacResult(res));
  }

  private transacResult(res: any): void {
    this.transactions = res;
  }

  // Transmission du paiement
  public payment(): void {
    // TODO Requete transaction
    this.http.post('http://localhost:8081/payment?idOwner=' + this.authorization.getUserId() + '&idReceiver=' + this.friendSelected + '&amount='
   + this.amount, {} ).subscribe((res: any) => this.paymentResult(res));

  }

  private paymentResult(res: any): void {
    this.loadTransaction();
  }

}
