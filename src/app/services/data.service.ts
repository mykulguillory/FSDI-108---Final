import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //create an empty user arry
  users : User[] = [];



  constructor() {
    //create a default/admin user
    var user = new User();
    user.userName = "Admin";
    user.password = "qwerty";
    user.firstName = "Admin";
    user.lastName = "User";

    this.users.push(user);
    
   }

  public sayHello(){
    console.log("Hello from a Service");
  }

  public saveUser(theNewUser){
    this.users.push(theNewUser);

  }

  public getAllUsers(){
    // return all the users
    return this.users;

  }
}
