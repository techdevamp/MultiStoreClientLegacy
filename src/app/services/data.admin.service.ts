import { AppConstants } from '../constants/AppConstants';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ApiResponse } from '../models/api.response';


@Injectable({
  providedIn: 'root'
})
export class DataAdminService {
  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = AppConstants.baseURL;
  }

  getSellerList(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl + '/admin/sellerList');
  }

  approveSeller(id: string): Observable<ApiResponse> {
    const params = new HttpParams().set('sellerId', id);
    return this.http.get<ApiResponse>(this.baseUrl + '/admin/approveSeller',  {params});
   }


  /*

  getItemDetailsByDealTypCd(dealTypCd: string): Observable<ApiResponse> {
    const params = new HttpParams().set('dealTypCd', dealTypCd);
    const headers = new HttpHeaders().set(InterceptorSkipHeader, '');

    return this.http.get<ApiResponse>(this.baseUrl + '/readData/getItemsByDealTypCd', { headers,params });
  }*/
}

