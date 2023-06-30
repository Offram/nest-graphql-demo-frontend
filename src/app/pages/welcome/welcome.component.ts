import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { GET_OWNERS } from 'src/app/graphql.operations';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  owners: any[] = [];
  errors: any;

  constructor(private readonly apollo: Apollo) {

   }

  ngOnInit() {
    this.apollo.watchQuery({
      query: GET_OWNERS
    }).valueChanges.subscribe(({ data, error} : any) => {
      this.owners = data.owners;
      this.errors = error;

      console.log('data: ', data);
    })
  }

}
