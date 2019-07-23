import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
@Injectable()
export class MyInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log(`Processin request: `, req);
    const tReq = req.clone({
      headers: req.headers.set(
        "Authorization",
        "Basic YWRtaW5AZXNzbC5uZXQ6UGFzc3dvcmQyJA=="
      )
    });
    return next.handle(tReq);
  }
}
