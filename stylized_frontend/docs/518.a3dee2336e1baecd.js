"use strict";(self.webpackChunkmantis_free_version=self.webpackChunkmantis_free_version||[]).push([[518],{4518:(h,n,e)=>{e.r(n),e.d(n,{DetailsTravailComponent:()=>m});var o=e(5447),l=e(177),v=e(4341),i=e(4438),u=e(3131);function c(r,d){return this.diagnostics}function E(r,d){if(1&r&&(i.j41(0,"tr")(1,"td"),i.EFF(2),i.k0s(),i.j41(3,"td",9),i.EFF(4),i.k0s(),i.j41(5,"td",9),i.EFF(6),i.nI1(7,"number"),i.k0s()()),2&r){const a=d.$implicit;i.R7$(2),i.JRh(a.label),i.R7$(2),i.SpI("",a.duree," mn"),i.R7$(2),i.SpI("Ar ",i.bMT(7,3,a.prix),"")}}let m=(()=>{class r{constructor(a,t){this.activateRoute=a,this.travailService=t,this.idTravail="",this.travail={},this.diagnostics=[]}ngOnInit(){this.activateRoute.params.subscribe(a=>{this.idTravail=a.id,this.loadTravail(this.idTravail)})}loadTravail(a){this.travailService.getTravailById(a).subscribe(t=>{this.travail=t,this.diagnostics=t.selectedService})}static{this.\u0275fac=function(t){return new(t||r)(i.rXU(o.nX),i.rXU(u.l))}}static{this.\u0275cmp=i.VBU({type:r,selectors:[["app-details-travail"]],decls:32,vars:16,consts:[[1,"card","d-flex","justify-content-center"],[1,"card-body","col-x1-12"],[1,"mb-4"],[1,"card"],[1,"list-group","list-group-flush"],[1,"list-group-item"],[1,"card","tbl-card"],[1,"table-responsive"],[1,"table","table-hover","mb-0",2,"font-size","larger"],[1,"text-center"]],template:function(t,s){1&t&&(i.j41(0,"div",0)(1,"div",1)(2,"h5",2),i.EFF(3),i.k0s(),i.j41(4,"div",3)(5,"ul",4)(6,"li",5),i.EFF(7),i.k0s(),i.j41(8,"li",5),i.EFF(9),i.nI1(10,"date"),i.nI1(11,"date"),i.k0s(),i.j41(12,"li",5),i.EFF(13),i.nI1(14,"number"),i.k0s(),i.j41(15,"li",5),i.EFF(16),i.nI1(17,"number"),i.k0s()()(),i.j41(18,"div",6)(19,"div",7)(20,"table",8)(21,"thead")(22,"tr")(23,"th"),i.EFF(24,"SERVICE"),i.k0s(),i.j41(25,"th",9),i.EFF(26,"DUREE"),i.k0s(),i.j41(27,"th",9),i.EFF(28,"PRIX"),i.k0s()()(),i.j41(29,"tbody"),i.Z7z(30,E,8,5,"tr",null,c,!0),i.k0s()()()()()()),2&t&&(i.R7$(3),i.SpI("Diagnostic sur le vehicule ",s.travail.matricule,""),i.R7$(4),i.SpI("Garage ",s.travail.idGarage.localisation,""),i.R7$(2),i.Lme("Estimation de dur\xe9e : du ",i.i5U(10,6,s.travail.debutTravail,"dd/MM/yyyy \xe0 HH:mm")," jusq'au ",i.i5U(11,9,s.travail.finEstimation,"dd/MM/yyyy \xe0 HH:mm"),""),i.R7$(4),i.SpI("Prix total : Ar ",i.bMT(14,12,s.travail.prix),""),i.R7$(3),i.SpI("Reste \xe0 payer : Ar ",i.bMT(17,14,s.travail.prix-s.travail.totalPayer),""),i.R7$(14),i.Dyx(s.diagnostics))},dependencies:[o.iI,l.MD,l.QX,l.vh,v.YN],encapsulation:2})}}return r})()}}]);