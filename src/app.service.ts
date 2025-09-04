import { Injectable } from '@nestjs/common';
import {HttpService} from "@nestjs/axios";
import {Observable} from "rxjs";
import {AxiosResponse} from "axios";

@Injectable()
export class AppService {
    constructor(private readonly httpService: HttpService) {}
  
    NotFoundForm(): Observable<AxiosResponse<any>> {
    return this.httpService.get('http://localhost:3001/NotFoundForm');
  }
}
