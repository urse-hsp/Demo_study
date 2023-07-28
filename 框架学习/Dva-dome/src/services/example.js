import request from '../utils/request';
import http from '../utils/http'

export function query() {
  return request('/api/user','post');
}

export function getProduct(){
  return request("/api/product");
}

export function getData(data){
  return http("https://www.fastmock.site/mock/bf8472e01c568d7c136e7ba95a7dd945/shop1/ap","post",data);
}