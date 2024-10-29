import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UniversityService {

  private apiUrl = 'http://localhost:8080/v1/university/university-infos';

  constructor(private http: HttpClient) { }

  // Method to post university data to the Spring Boot API
  postUniversityInfo(universityData: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post<any>(this.apiUrl, universityData, { headers });
  }
}
