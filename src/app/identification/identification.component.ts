    import { Component } from '@angular/core';
    import { AuthorizationService } from '../security/authorization.service';
    import { ActivatedRoute, Router } from '@angular/router';
    import { HttpClient } from '@angular/common/http';
    @Component({
      selector: 'app-identification',
      templateUrl: './identification.component.html',
      styleUrls: ['./identification.component.scss']
    })
    export class IdentificationComponent {

      public email: string;
      public password: string;

      constructor(  private route: ActivatedRoute,
                    private router: Router,
                    private authorization: AuthorizationService,
                    public http: HttpClient) {
        this.email    = '';
        this.password = '';
      }

      public sendAuth(): void {
        this.http.get( 'http://localhost:8081/identification1?email='
        + this.email + '&password=' + this.password).subscribe((res: any) => this.authResult(res))
        // consulter le back requete , avoir id
      }

    private authResult(res: any): void {

      this.authorization.setUserId(res.id);
      this.authorization.setEmail(this.email);
      this.router.navigate(['../transaction'], { relativeTo: this.route });

    }

  }