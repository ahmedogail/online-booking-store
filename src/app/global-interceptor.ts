import { HttpInterceptorFn } from '@angular/common/http';

const baseUrl ='https://upskilling-egypt.com:3007/api/';

export const globalInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};
