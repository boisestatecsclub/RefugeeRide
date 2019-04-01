import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-pending-b-check',
  templateUrl: './admin-pending-b-check.component.html',
  styleUrls: ['./admin-pending-b-check.component.css']
})
export class AdminPendingBCheckComponent implements OnInit {
@Injectable()
constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://httpbin.org/ip').subscribe( (response) => console.log(response) )
    string testingData = `{'firstName': 'Dave', 'lastName': 'Brown', 'firstName': 'Sarah', 'lastName': 'Bogden', 'firstName': 'Daniel', 'lastName': 'Smith',}`;
  }



}
