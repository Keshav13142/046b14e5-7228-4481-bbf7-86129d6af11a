import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest,HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import baseUrl from './url';
@Injectable({
  providedIn: 'root'
})
export class UploadFileService {
  constructor(private http: HttpClient) { }
  upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    const req = new HttpRequest('POST', `${baseUrl}/upload`, formData, {
      reportProgress: true,
      responseType: 'json'
    });
    return this.http.request(req);
  }
  getFiles(): Observable<any> {
    return this.http.get(`${baseUrl}/files`);
  }
}