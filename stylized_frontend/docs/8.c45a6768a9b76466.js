"use strict";(self.webpackChunkmantis_free_version=self.webpackChunkmantis_free_version||[]).push([[8],{8:(h,p,n)=>{n.r(p),n.d(p,{ManagerTravauxComponent:()=>F});var u=n(5447),l=n(177),o=n(4341),m=n(8939),t=n(4438),v=n(3131);const _=()=>["/manager/creer-travail"],d=i=>["/manager/travail",i];function E(i,c){if(1&i){const a=t.RV6();t.j41(0,"td",10)(1,"form",15),t.bIt("ngSubmit",function(){t.eBV(a);const e=t.XpG().$implicit,s=t.XpG();return t.Njj(s.terminerTravail(e._id))}),t.j41(2,"button",16),t.EFF(3,"Terminer"),t.k0s()()()}}function T(i,c){if(1&i){const a=t.RV6();t.j41(0,"td",10)(1,"form",15),t.bIt("ngSubmit",function(){t.eBV(a);const e=t.XpG().$implicit,s=t.XpG();return t.Njj(s.supprimerTravail(e._id,e.prix-e.totalPayer))}),t.j41(2,"button",17),t.EFF(3,"Retirer"),t.k0s()()()}}function g(i,c){if(1&i&&(t.j41(0,"tr")(1,"td"),t.EFF(2),t.k0s(),t.j41(3,"td",10),t.EFF(4),t.k0s(),t.j41(5,"td",10),t.EFF(6),t.k0s(),t.j41(7,"td",10),t.EFF(8),t.nI1(9,"date"),t.k0s(),t.j41(10,"td",10),t.EFF(11),t.nI1(12,"date"),t.k0s(),t.j41(13,"td",10),t.EFF(14),t.k0s(),t.j41(15,"td",10),t.EFF(16),t.nI1(17,"number"),t.k0s(),t.j41(18,"td",10),t.EFF(19),t.nI1(20,"number"),t.k0s(),t.DNE(21,E,4,0,"td",10)(22,T,4,0,"td",10),t.j41(23,"td",13)(24,"a",14),t.EFF(25,"Voir Details"),t.k0s()()()),2&i){const a=c.$implicit,r=t.XpG();t.R7$(2),t.JRh(a.matricule),t.R7$(2),t.Lme("",a.idClient.nom," ",a.idClient.prenom,""),t.R7$(2),t.JRh(a.idClient.tel),t.R7$(2),t.SpI("",t.i5U(9,11,a.debutTravail,"dd/MM/yyyy \xe0 HH:mm")," "),t.R7$(3),t.SpI("",t.i5U(12,14,a.finEstimation,"dd/MM/yyyy \xe0 HH:mm")," "),t.R7$(3),t.SpI(" ",r.status[a.status],""),t.R7$(2),t.SpI("Ar ",t.bMT(17,17,a.prix),""),t.R7$(3),t.SpI("Ar ",t.bMT(20,19,a.prix-a.totalPayer),""),t.R7$(2),t.vxM(0==a.status?21:22),t.R7$(3),t.Y8G("routerLink",t.eq3(21,d,a._id))}}let F=(()=>{class i{constructor(a,r){this.travailService=a,this.activatedRoute=r,this.page=1,this.pageMax=1,this.travaux=[],this.status=["En cours","Termin\xe9","Supprim\xe9"],this.errorMessage=""}ngOnInit(){const a=JSON.parse(sessionStorage.getItem("currentUser"));a&&(this.currentUser=a),this.activatedRoute.params.subscribe(r=>{this.page=r.page,this.loadTravaux(this.page)})}loadTravaux(a){this.travailService.filterTravail(a,{idGarage:this.currentUser.idGarage,status:{$lt:2}}).subscribe(e=>{this.pageMax=e.pageMax,this.travaux=e.travaux})}terminerTravail(a){this.travailService.updateStatusTravail(a,1).subscribe(r=>{this.loadTravaux(this.page)},r=>{this.errorMessage=r.message})}supprimerTravail(a,r){var e=!1;r>0&&(e=confirm("Le paiement pour ce travail n'a pas encore \xe9t\xe9 compl\xe9t\xe9. Voulez-vous r\xe9ellement le retirer ?")),e&&this.travailService.updateStatusTravail(a,2).subscribe(s=>{this.loadTravaux(this.page)},s=>{this.errorMessage=s.message})}static{this.\u0275fac=function(r){return new(r||i)(t.rXU(v.l),t.rXU(u.nX))}}static{this.\u0275cmp=t.VBU({type:i,selectors:[["app-manager-travaux"]],decls:37,vars:5,consts:[[1,"card","d-flex","justify-content-center"],[1,"card-body","col-x1-12"],[1,"row"],[1,"col"],[1,"mb-4"],[1,"col","d-flex","justify-content-end"],[1,"link","link-primary",3,"routerLink"],[1,"card","tbl-card"],[1,"table-responsive"],[1,"table","table-hover","mb-0"],[1,"text-center"],[1,"d-flex","justify-content-end"],[3,"page","pageMax","url"],[1,"text-end"],[1,"link-primary",3,"routerLink"],[3,"ngSubmit"],["type","submit",1,"btn","btn-primary"],["type","submit",1,"btn","btn-danger"]],template:function(r,e){1&r&&(t.j41(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h5",4),t.EFF(5,"Travaux"),t.k0s()(),t.j41(6,"div",5)(7,"a",6),t.EFF(8,"Nouveau Travail"),t.k0s()()(),t.j41(9,"div",7)(10,"div",8)(11,"table",9)(12,"thead")(13,"tr")(14,"th"),t.EFF(15,"MATRICULE"),t.k0s(),t.j41(16,"th",10),t.EFF(17,"CLIENT"),t.k0s(),t.j41(18,"th",10),t.EFF(19,"TEL. CLIENT"),t.k0s(),t.j41(20,"th",10),t.EFF(21,"DEBUT DE TRAVAIL"),t.k0s(),t.j41(22,"th",10),t.EFF(23,"ESTIMATION DE FIN"),t.k0s(),t.j41(24,"th",10),t.EFF(25,"ETAT"),t.k0s(),t.j41(26,"th",10),t.EFF(27,"PRIX TOTAL"),t.k0s(),t.j41(28,"th",10),t.EFF(29,"RESTE A PAYER"),t.k0s(),t.nrm(30,"th")(31,"th"),t.k0s()(),t.j41(32,"tbody"),t.Z7z(33,g,26,23,"tr",null,t.fX1),t.k0s()()()(),t.j41(35,"div",11),t.nrm(36,"app-pagination",12),t.k0s()()()),2&r&&(t.R7$(7),t.Y8G("routerLink",t.lJ4(4,_)),t.R7$(26),t.Dyx(e.travaux),t.R7$(3),t.Y8G("page",e.page)("pageMax",e.pageMax)("url","/manager/travaux"))},dependencies:[u.iI,u.Wk,l.MD,l.QX,l.vh,o.YN,o.qT,o.cb,o.cV,m.e],encapsulation:2})}}return i})()}}]);