import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthorizationService } from '../security/authorization.service';
import { Friends } from '../models/friends';

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.css']
})
export class FriendComponent implements OnInit {
  public friends: Friends [];
  public lfriends: any [];
  public newFriend: string;


  constructor(public http: HttpClient,
              private authorization: AuthorizationService) {
                this.friends = [];
                this.newFriend = '';
               }

  ngOnInit(): void {
    this.loadFriend();
  }


  public loadFriend(): void {
     this.http.get( 'http://localhost:8081/friendlist?idOwner='
   + this.authorization.getUserId()).subscribe((res: any) => this.friendResult(res));

  }
  public friendResult(res: any): void {
      this.friends = res;

  }
  public addFriends(): void {

    this.http.post('http://localhost:8081/addfriend?idOwner=' + this.authorization.getUserId() +
    '&email='  + this.newFriend, {} ) .subscribe((res: any) => this.newFriendResult(res));

  }
  public newFriendResult(newfriend: any): void {
    this.newFriend = newfriend;

  }

}

