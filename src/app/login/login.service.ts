import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {map} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public username: string = '';
  public password: string = '';
  constructor( private http: HttpClient ) {
  }

  login(username: string, password: string) {
    const credentials = window.btoa(username + ':' + password);
    const headers = {
      'Content-Type': 'application/json',
      Authorization: 'Basic ' + credentials
    };

    return this.http.post(environment.apiUrl + '/api/v1/login?username=' + username + '&password=' + password, {}, { headers }).pipe(
      map((res) => {
        this.username = username;
        this.password = password;
        this.registerSuccessfulLogin(username, password);
      })
    );
  }

  createBasicAuthToken(username: string, password: string){
    return 'Basic' + window.btoa(username + ":" + password);
  }

  registerSuccessfulLogin(username: string, password: string){
    //Save the username to session
  }

}
