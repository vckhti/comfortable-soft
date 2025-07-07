import {Injectable} from '@angular/core';
import { map, Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable()
export class DashboardService {

  constructor(
    private http: HttpClient,
  ) {}

  fetchLibrariesFromBackend(inputString: any): Observable<any> { //TODO типизировать
      let params = new HttpParams();
      params = params.set('api_key', environment.apiKey);
    return this.http.get(environment.getLibrariesUrl,{ params: params }).pipe(
      map((items: any) => { //TODO типизировать
        return (items).filter((item:any) => item.Cells.FullName.includes(inputString as string))
      }),
      catchError(() => of(null))
    );
  }

}
