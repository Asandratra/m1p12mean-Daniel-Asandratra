"use strict";(self.webpackChunkmantis_free_version=self.webpackChunkmantis_free_version||[]).push([[76],{2910:(_,o,r)=>{r.d(o,{N:()=>p});var s=r(2525),n=r(4438),e=r(1626);let p=(()=>{class a{constructor(t){this.http=t,this.apiUrl=`${s.c.apiUrl}/rendezvous`}addDemandeRDV(t){return this.http.post(this.apiUrl,t)}get10NextOfAGarage(t){return this.http.post(`${this.apiUrl}/next-rendez-vous/${t}`,{})}updateRendezVous(t,i){return this.http.put(`${this.apiUrl}/${t}`,i)}filterRendezVous(t,i){return this.http.post(`${this.apiUrl}/search/${t}`,i)}static{this.\u0275fac=function(i){return new(i||a)(n.KVO(e.Qq))}}static{this.\u0275prov=n.jDH({token:a,factory:a.\u0275fac,providedIn:"root"})}}return a})()},3131:(_,o,r)=>{r.d(o,{l:()=>p});var s=r(2525),n=r(4438),e=r(1626);let p=(()=>{class a{constructor(t){this.http=t,this.apiURL=`${s.c.apiUrl}/travaux`}createTravail(t){return this.http.post(this.apiURL,t)}filterTravail(t,i){return this.http.post(`${this.apiURL}/search/${t}`,i)}getTravailById(t){return this.http.get(`${this.apiURL}/${t}`)}addServicesToTravail(t,i){return this.http.put(`${this.apiURL}/addServices/${t}`,i)}addMecanoToTravail(t,i){return this.http.put(`${this.apiURL}/addMecano/${t}`,i)}updateStatusTravail(t,i){return this.http.put(`${this.apiURL}/${t}`,{status:i})}static{this.\u0275fac=function(i){return new(i||a)(n.KVO(e.Qq))}}static{this.\u0275prov=n.jDH({token:a,factory:a.\u0275fac,providedIn:"root"})}}return a})()},6183:(_,o,r)=>{r.d(o,{h:()=>p});var s=r(2525),n=r(4438),e=r(1626);let p=(()=>{class a{constructor(t){this.httpClient=t,this.apiUrl=`${s.c.apiUrl}/garages`}getAllGarages(){return this.httpClient.get(`${this.apiUrl}`)}getListGarages(t,i){return this.httpClient.post(`${this.apiUrl}/search/${t}`,i)}getGarageByIdAsClient(t){return this.httpClient.get(`${this.apiUrl}/asClient/${t}`)}getGarageByIdAsManager(t){return this.httpClient.get(`${this.apiUrl}/asManager/${t}`)}static{this.\u0275fac=function(i){return new(i||a)(n.KVO(e.Qq))}}static{this.\u0275prov=n.jDH({token:a,factory:a.\u0275fac,providedIn:"root"})}}return a})()},6961:(_,o,r)=>{r.d(o,{y:()=>p});var s=r(2525),n=r(4438),e=r(1626);let p=(()=>{class a{constructor(t){this.http=t,this.apiUrl=`${s.c.apiUrl}/demandesrdv`}addDemandeRDV(t){return this.http.post(this.apiUrl,t)}updateDemandeRDV(t,i){return this.http.put(`${this.apiUrl}/${t}`,i)}getDemandesRDVByid(t){return this.http.get(`${this.apiUrl}/${t}`)}filterDemandesRDV(t,i){return this.http.post(`${this.apiUrl}/search/${t}`,i)}static{this.\u0275fac=function(i){return new(i||a)(n.KVO(e.Qq))}}static{this.\u0275prov=n.jDH({token:a,factory:a.\u0275fac,providedIn:"root"})}}return a})()},8281:(_,o,r)=>{r.d(o,{X:()=>p});var s=r(2525),n=r(4438),e=r(1626);let p=(()=>{class a{constructor(t){this.http=t,this.apiURL=`${s.c.apiUrl}/clients`}signupClient(t){return this.http.post(`${this.apiURL}/signup`,t)}signinClient(t){return this.http.post(`${this.apiURL}/signin`,t)}getAllClient(){return this.http.get(this.apiURL)}static{this.\u0275fac=function(i){return new(i||a)(n.KVO(e.Qq))}}static{this.\u0275prov=n.jDH({token:a,factory:a.\u0275fac,providedIn:"root"})}}return a})()},8737:(_,o,r)=>{r.d(o,{N:()=>p});var s=r(2525),n=r(4438),e=r(1626);let p=(()=>{class a{constructor(t){this.httpClient=t,this.apiURL=`${s.c.apiUrl}/services`}getAllServices(){return this.httpClient.get(`${this.apiURL}`)}static{this.\u0275fac=function(i){return new(i||a)(n.KVO(e.Qq))}}static{this.\u0275prov=n.jDH({token:a,factory:a.\u0275fac,providedIn:"root"})}}return a})()},8939:(_,o,r)=>{r.d(o,{e:()=>u});var s=r(5447),n=r(4438);const e=(t,i)=>[t,i],p=()=>[];function a(t,i){if(1&t&&(n.j41(0,"li",2)(1,"a",4),n.EFF(2),n.k0s()()),2&t){const h=i.$index,c=n.XpG();n.R7$(),n.Y8G("routerLink",n.l_i(2,e,c.url,h+1)),n.R7$(),n.JRh(h+1)}}let u=(()=>{class t{ngOnInit(){}static{this.\u0275fac=function(c){return new(c||t)}}static{this.\u0275cmp=n.VBU({type:t,selectors:[["app-pagination"]],inputs:{page:"page",nombreElement:"nombreElement",nombreMaxElement:"nombreMaxElement",pageMax:"pageMax",url:"url"},decls:10,vars:11,consts:[["aria-label","Page navigation"],[1,"pagination"],[1,"page-item"],[1,"page-link",3,"routerLink","ariaDisabled"],[1,"page-link",3,"routerLink"]],template:function(c,l){1&c&&(n.j41(0,"nav",0)(1,"ul",1)(2,"li",2)(3,"a",3),n.EFF(4,"<"),n.k0s()(),n.Z7z(5,a,3,5,"li",2,n.fX1),n.j41(7,"li",2)(8,"a",3),n.EFF(9,">"),n.k0s()()()()),2&c&&(n.R7$(3),n.Y8G("routerLink",n.l_i(4,e,l.url,l.page-1))("ariaDisabled",l.page<=1),n.R7$(2),n.Dyx(n.lJ4(7,p).constructor(l.pageMax)),n.R7$(3),n.Y8G("routerLink",n.l_i(8,e,l.url,l.page- -1))("ariaDisabled",l.page==l.pageMax))},dependencies:[s.iI,s.Wk],encapsulation:2})}}return t})()}}]);