webpackJsonp([2],{Esen:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o("WT6e"),d=o("bfOx"),a=[{name:"config",content:"<article><p>\u6709\u4e00\u4e9b\u6a21\u5757\uff08\u6bd4\u5982\uff1aactionsheet\u3001button\u7b49\uff09\uff0c\u867d\u7136\u5df2\u7ecf\u6709\u4e00\u4e9b\u9ed8\u8ba4\u7684\u914d\u7f6e\uff0c\u4f46\u4f60\u53ef\u4ee5\u901a\u8fc7\u5168\u5c40\u6ce8\u518c\u6765\u6539\u53d8\u5b83\u3002</p><p>\u6bd4\u5982\uff0c\u9ed8\u8ba4\u6309\u94ae\u7684\u7c7b\u578b\u662f <code>primary</code>\uff08\u6210\u529f\u6837\u5f0f\uff09\u3002</p><pre class=\"hljs language-$1\"><code>&lt;weui-button&gt;\u6210\u529f\u6837\u5f0f\u6309\u94ae&lt;/weui-button&gt;\n&lt;weui-button weui-type=\"warn\"&gt;\u8b66\u544a\u6837\u5f0f\u6309\u94ae&lt;/weui-button&gt;</code></pre><p>\u53ef\u4ee5\u5728NgModule\u6539\u53d8\u9ed8\u8ba4\u914d\u7f6e\u9879\uff0c\u9ed8\u8ba4\u6240\u6709\u6309\u94ae\u4e3a\u8b66\u544a\u6837\u5f0f\u3002</p><pre class=\"hljs language-$1\"><code>import { NgModule } from '@angular/core';\nimport { WeUiModule, ButtonConfig } from 'ngx-weui';\n\nexport function buttonConfig() {\n    return Object.assign(new ButtonConfig(), { type: 'warn' });\n}\n\n@NgModule({\n    imports: [\n        WeUiModule.forRoot()\n    ],\n    providers: [\n        // \u91cd\u7f6e\u9ed8\u8ba4\u6309\u94ae\u6837\u5f0f\u4e3a\uff1awarn\n        { provide: ButtonConfig, useFactory: buttonConfig }\n    ]\n})</code></pre><p>\u8fd9\u79cd\u65b9\u5f0f\uff0c\u53ef\u4ee5\u7b80\u5316\u901a\u7528\u64cd\u4f5c\u3002</p><p><strong>\u662f\u5426\u5141\u8bb8\u5168\u5c40\u914d\u7f6e\u7684\u6a21\u5757\uff0c\u53ef\u4ee5\u5728API\u6587\u6863\u4e2d\u89c1\u3010\u53ef\u7528\u4e8e<span>\u5168\u5c40\u914d\u7f6e</span>\u3011\u5b57\u6837\u7684\u7c7b\uff0c\u90fd\u5c5e\u6027\u53ef\u7528\u4e8e\u5168\u5c40\u914d\u7f6e\u7c7b\u3002</strong></p></article>",meta:{title:"\u5168\u5c40\u9ed8\u8ba4\u914d\u7f6e\u9879\u8bf4\u660e"},path:"/docs/config.md"},{name:"how",content:'<article><h2 id="\u5b89\u88c5"><span>\u5b89\u88c5</span></h2><pre class="hljs language-bash"><code>npm install ngx-weui --save</code></pre><p><code>ngx-weui</code> \u662f<strong>\u4e0d\u5e26\u4efb\u4f55weui\u6837\u5f0f</strong>\uff0c\u6709\u5173\u6837\u5f0f\u8bf4\u660e\uff0c\u8bf7\u9605\u8bfb<a href="https://cipchk.github.io/ngx-weui/#/docs/style">ngx-weui \u6837\u5f0f</a>\u3002</p><h2 id="\u6a21\u5757\u6ce8\u518c"><span>\u6a21\u5757\u6ce8\u518c</span></h2><p><code>ngx-weui</code> \u9ed8\u8ba4\u60c5\u51b5\u4e0b\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\uff1a</p><pre class="hljs language-$1"><code>import { WeUiModule } from \'ngx-weui\';\n\n@NgModule({\n    imports: [ WeUiModule.forRoot() ]\n})\nexport class AppModule { }</code></pre><p>\u6ce8\u518c\u6240\u6709\u7684\u6a21\u5757\u3002</p><p>\u5f53\u7136\uff0c\u5982\u679c\u4f60\u660e\u786e\u77e5\u9053\u53ea\u4f7f\u7528\u5176\u4e2d\u51e0\u4e2a\u6a21\u5757\u7684\u8bdd\uff0c\u53ef\u4ee5\u9488\u5bf9\u6a21\u5757\u8fdb\u884c\u5bfc\u5165\uff0c\u6bd4\u5982\u5bfc\u5165\u4e00\u4e2a\u5f39\u51fa\u5f0f\u83dc\u5355\u6a21\u5757\uff1a</p><pre class="hljs language-$1"><code>import { ActionSheetModule } from \'ngx-weui/actionsheet\';\n\n@NgModule({\n    imports: [ ActionSheetModule.forRoot() ]\n})\nexport class AppModule { }</code></pre><h2 id="\u5168\u5c40\u6a21\u5757\u914d\u7f6e\u6ce8\u518c"><span>\u5168\u5c40\u6a21\u5757\u914d\u7f6e\u6ce8\u518c</span></h2><p><a href="/docs/config">\u7ec6\u8282\u89c1</a></p><h2 id="HTML\u6a21\u677f\u4f7f\u7528"><span>HTML\u6a21\u677f\u4f7f\u7528</span></h2><p>\u51e0\u4e2a\u5199\u6cd5\uff1a</p><pre class="hljs language-$1"><code>&lt;!--\u6309\u94ae--&gt;\n&lt;button weui-button&gt;\u9875\u9762\u4e3b\u64cd\u4f5c Normal&lt;/button&gt;\n&lt;weui-button weui-loading (click)="loading=!loading"&gt;\u9875\u9762\u4e3b\u64cd\u4f5c Loading&lt;/weui-button&gt;\n&lt;!--\u5f39\u51fa\u5f0f\u83dc\u5355--&gt;\n&lt;weui-actionsheet #ios [menus]="menus" [config]="config"&gt;&lt;/weui-actionsheet&gt;</code></pre><h2 id="\u547d\u540d\u8bf4\u660e"><span>\u547d\u540d\u8bf4\u660e</span></h2><p>\u770b\u7740HTML\u6a21\u677f\u4e2d\u7ec4\u4ef6\u540d\u3001\u5c5e\u6027\u540d\u7684\u547d\u540d\u6709\u7684\u662f\u4ee5 <code>weui-</code> \u5f00\u5934\uff0c\u800c\u6709\u7684\u5e76\u6ca1\u6709\u3002\u5176\u5b9e\uff0c\u5f88\u5bb9\u6613\u7406\u89e3\u8fd9\u4e9b\u533a\u522b\u3002</p><ol><li><p>\u6240\u6709\u7ec4\u4ef6\u3001\u6307\u4ee4\u90fd<strong>\u9700\u8981</strong> <code>weui-</code> \u5f00\u5934\u3002</p></li><li><p>\u6307\u4ee4\u6240\u9700\u8981\u7684\u5c5e\u6027\u90fd<strong>\u9700\u8981</strong> <code>weui-</code> \u5f00\u5934\u3002</p></li><li><p>\u7ec4\u4ef6\u53ea\u5141\u8bb8\u6807\u7b7e\uff08\u6307\uff1a<code>&lt;weui-actionsheet></weui-actionsheet></code>\uff09\u5199\u6cd5\u90fd<strong>\u4e0d\u9700\u8981</strong> <code>weui-</code> \u5f00\u5934\u3002</p></li></ol></article>',meta:{title:"\u5982\u4f55\u4f7f\u7528\uff1f"},path:"/docs/how.md"},{name:"style",content:'<article><h2 id="\u5199\u5728\u524d\u9762"><span>\u5199\u5728\u524d\u9762</span></h2><p><code>ngx-weui</code> \u63d0\u4f9b\u4e00\u79cd\u9ad8\u5ea6\u5b9a\u5236\u5316\u7684\u65b9\u6848\uff0c\u8fd9\u4e9b\u5b9a\u5236\u5305\u62ec <code>weui</code> \u7684\u4e3b\u4f53\u5b57\u4f53\u3001\u989c\u8272\u3001\u5404\u90e8\u4ef6\u7b49\u3002</p><blockquote><p><strong>\u6ce8\uff1a</strong> <code>weui</code> \u662f\u7531 Less \u7f16\u5199\u7684\uff0c\u56e0\u6b64\u5e94\u7528\u4e5f\u5fc5\u987b Less \u624d\u80fd\u8986\u76d6\u3002</p></blockquote><p>\u9ed8\u8ba4 <code>ngx-weui</code> \u5e76\u6ca1\u6709\u5f3a\u5236\u4f9d\u8d56 <code>weui</code>\uff0c\u8fd9\u662f\u56e0\u4e3a\u5728\u67d0\u4e9b\u7279\u6b8a\u573a\u666f\u4e0b\u53ef\u80fd\u4f1a\u7531\u4e8e <code>package.json</code> \u7684\u5165\u53e3\u5173\u7cfb\u5bfc\u81f4\u5931\u8d25\u3002\u56e0\u6b64\u5728\u4f7f\u7528\u6837\u5f0f\u4e4b\u524d\u5fc5\u987b\u5148\u5b89\u88c5 <code>weui</code> \u4f9d\u8d56\u5305\uff1a</p><pre class="hljs language-bash"><code>npm i --save weui</code></pre><p>\u6700\u540e\uff0c\u5728\u9879\u76ee <code>styles.less</code> \u91cc\u52a0\u5165 <code>weui</code> \u548c <code>ngx-weui</code> \u6837\u5f0f\uff1a</p><pre class="hljs language-$1"><code>@import \'~weui/src/style/weui.less\';\n@import \'~ngx-weui/index\';</code></pre><h2 id="\u81ea\u5b9a\u4e49\u4e3b\u9898"><span>\u81ea\u5b9a\u4e49\u4e3b\u9898</span></h2><p>\u53ea\u9700\u8981\u5728 <code>styles.less</code> \u52a0\u5165\u76f8\u5e94\u7684\u8981\u8986\u76d6\u7684\u53c2\u6570\u5373\u53ef\uff0c\u4f8b\u5982\uff1a\u4f60\u60f3\u6539\u53d8\u5b57\u4f53\u548c\u4e3b\u6309\u94ae\u7684\u80cc\u666f\u8272\u4e3a\u7ea2\u8272\uff1a</p><pre class="hljs language-$1"><code>@weuiFontDefault: "Helvetica Neue";\n@weuiBtnPrimaryBg: #f50;</code></pre><p><code>weui</code> \u5305\u542b\u7740\u51e0\u5341\u79cd\u53c2\u6570\u8fd9\u4e9b\u53c2\u6570\u4f60\u53ef\u4ee5\u901a\u8fc7 <a target="_blank" href="https://github.com/Tencent/weui/tree/master/src/style/base/variable">variable</a> \u76ee\u5f55\u4e0b\u83b7\u5f97\uff0c\u6bcf\u4e00\u4e2a\u6587\u4ef6\u5206\u5e03\u90fd\u975e\u5e38\u7b80\u5355\u660e\u4e86\u3002</p><p><code>ngx-weui</code> \u4e5f\u5305\u542b\u5341\u51e0\u79cd\u53c2\u6570\uff0c\u8fd9\u4e9b\u5305\u62ec\uff1a</p><table><thead><tr><th>\u540d\u79f0</th><th>\u9ed8\u8ba4\u503c</th><th>\u63cf\u8ff0</th></tr></thead><tbody><tr><td>$dialog-error-font-size</td><td><code>14px</code></td><td>\u5bf9\u8bdd\u6846\u9519\u8bef\u5b57\u53f7</td></tr><tr><td>$dialog-error-color</td><td><code>#f50</code></td><td>\u5bf9\u8bdd\u6846\u9519\u8bef\u989c\u8272</td></tr><tr><td>$pagination-dot-wh</td><td><code>8px</code></td><td>\u5c0f\u70b9\u6837\u5f0f\u5206\u9875\u5668\u5927\u5c0f</td></tr><tr><td>$pagination-dot-bg</td><td><code>#ccc</code></td><td>\u5c0f\u70b9\u6837\u5f0f\u5206\u9875\u5668\u80cc\u666f\u8272</td></tr><tr><td>$pagination-dot-active-bg</td><td><code>#888</code></td><td>\u5c0f\u70b9\u6837\u5f0f\u5206\u9875\u5668\u5f53\u524d\u80cc\u666f\u8272</td></tr><tr><td>$popup-bg</td><td><code>#efeff4</code></td><td>\u5f39\u51fa\u89c6\u56fe\u80cc\u666f\u8272</td></tr><tr><td>$popup-head-bg</td><td><code>#fbf9fe</code></td><td>\u5f39\u51fa\u89c6\u56fe\u6807\u9898\u80cc\u666f\u8272</td></tr><tr><td>$popup-head-padding</td><td><code>10px 15px</code></td><td>\u5f39\u51fa\u89c6\u56fe\u6807\u9898\u5185\u8fb9\u8ddd</td></tr><tr><td>$popup-head-border-bottom-color</td><td><code>#e5e5e5</code></td><td>\u5f39\u51fa\u89c6\u56fe\u6807\u9898\u5e95\u90e8\u7ebf\u6761\u8272</td></tr><tr><td>$popup-head-color</td><td><code>#e5e5e5</code></td><td>\u5f39\u51fa\u89c6\u56fe\u6807\u9898\u8272</td></tr><tr><td>$popup-head-action-color</td><td><code>#586c94</code></td><td>\u5f39\u51fa\u89c6\u56fe\u6807\u9898\u6309\u94ae\u8272</td></tr><tr><td>$stepper-wh</td><td><code>30px</code></td><td>\u6b65\u8fdb\u5668\u6309\u94ae\u5bbd\u9ad8</td></tr><tr><td>$stepper-input-width</td><td><code>60px</code></td><td>\u6b65\u8fdb\u5668\u8f93\u5165\u6846\u5bbd\u5ea6</td></tr><tr><td>$stepper-color</td><td><code>rgb(134, 134, 134)</code></td><td>\u6b65\u8fdb\u5668\u6309\u94ae\u989c\u8272</td></tr><tr><td>$stepper-font-size</td><td><code>20px</code></td><td>\u6b65\u8fdb\u5668\u6587\u5b57\u5927\u5c0f</td></tr><tr><td>$toptips-bg-default</td><td><code>#B2B2B2</code></td><td>\u5f39\u51fa\u5f0f\u63d0\u793a <code>default</code> \u80cc\u666f\u8272</td></tr><tr><td>$toptips-bg-info</td><td><code>#586C94</code></td><td>\u5f39\u51fa\u5f0f\u63d0\u793a <code>info</code> \u80cc\u666f\u8272</td></tr><tr><td>$toptips-bg-primary</td><td><code>#1AAD19</code></td><td>\u5f39\u51fa\u5f0f\u63d0\u793a <code>primary</code> \u80cc\u666f\u8272</td></tr></tbody></table></article>',meta:{title:"ngx-weui \u6837\u5f0f"},path:"/docs/style.md"}],l=function(){function t(t,e){var o=this;this.router=t,e.params.subscribe(function(t){return o.genData(""+t.id)})}return t.prototype.genData=function(t){var e=a.find(function(e){return e.name===t});e?(this.item=Object.assign({},e),this.initHLJS()):this.router.navigateByUrl("/")},t.prototype.ngOnInit=function(){this.initHLJS()},t.prototype.initHLJS=function(){setTimeout(function(){for(var t=document.querySelectorAll('code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'),e=0,o=void 0;o=t[e++];)hljs.highlightBlock(o)},250)},t}(),p=function(){},c=o("zRte"),i=o("HLxZ"),r=o("4nAk"),u=o("5EGS"),s=o("N8zv"),m=o("2Ii2"),g=o("k3g3"),f=o("3pCT"),h=o("c8+x"),w=o("HHg/"),b=o("1fry"),v=o("liB5"),y=o("XyN0"),x=o("RcBv"),R=o("JtMk"),M=o("gHyN"),j=o("XnYQ"),C=o("q7dN"),$=o("esrN"),L=o("Xjw4"),A=o("EaZh"),B=o("nSO5"),N=n["\u0275crt"]({encapsulation:0,styles:["[_nghost-%COMP%] {\n            display: block;\n            overflow-y: auto;\n            height: 100%;\n        }"],data:{}});function I(t){return n["\u0275vid"](0,[(t()(),n["\u0275eld"](0,0,null,null,1,"span",[["class","subtitle"]],null,null,null,null,null)),(t()(),n["\u0275ted"](1,null,["",""]))],null,function(t,e){t(e,1,0,e.component.item.meta.subtitle)})}function k(t){return n["\u0275vid"](0,[(t()(),n["\u0275eld"](0,0,null,null,0,"div",[],[[8,"innerHTML",1]],null,null,null,null))],null,function(t,e){t(e,0,0,e.component.item.content)})}function F(t){return n["\u0275vid"](0,[(t()(),n["\u0275eld"](0,0,null,null,13,"section",[["class","weui-article markdown"]],null,null,null,null,null)),(t()(),n["\u0275ted"](-1,null,["\n    "])),(t()(),n["\u0275eld"](2,0,null,null,7,"h1",[],null,null,null,null,null)),(t()(),n["\u0275ted"](3,null,["\n        ","\n        "])),(t()(),n["\u0275and"](16777216,null,null,1,null,I)),n["\u0275did"](5,16384,null,0,L.NgIf,[n.ViewContainerRef,n.TemplateRef],{ngIf:[0,"ngIf"]},null),(t()(),n["\u0275ted"](-1,null,["\n        "])),(t()(),n["\u0275eld"](7,0,null,null,1,"edit-button",[],null,null,null,A.b,A.a)),n["\u0275did"](8,49152,null,0,B.a,[],{item:[0,"item"]},null),(t()(),n["\u0275ted"](-1,null,["\n    "])),(t()(),n["\u0275ted"](-1,null,["\n    "])),(t()(),n["\u0275and"](16777216,null,null,1,null,k)),n["\u0275did"](12,16384,null,0,L.NgIf,[n.ViewContainerRef,n.TemplateRef],{ngIf:[0,"ngIf"]},null),(t()(),n["\u0275ted"](-1,null,["\n"])),(t()(),n["\u0275ted"](-1,null,["\n"]))],function(t,e){var o=e.component;t(e,5,0,o.item.meta.subtitle),t(e,8,0,o.item),t(e,12,0,o.item.content)},function(t,e){t(e,3,0,e.component.item.meta.title)})}var H=n["\u0275ccf"]("app-docs-article",l,function(t){return n["\u0275vid"](0,[(t()(),n["\u0275eld"](0,0,null,null,1,"app-docs-article",[],null,null,null,F,N)),n["\u0275did"](1,114688,null,0,l,[d.m,d.a],null,null)],function(t,e){t(e,1,0)},null)},{},{},[]),T=o("7DMc"),q=o("xyZK"),D=o("qC7z"),E=o("d8Ej"),z=o("h6Rc"),J=o("m2JH"),O=o("XgZR"),S=o("HHj+"),Z=o("0QD/"),U=o("OE0E"),W=o("2rMK"),P=o("21kB"),V=o("qTGq"),X=o("aFsv"),_=o("UZLZ"),K=o("lkh+"),G=o("lc/v"),Q=o("EBMy"),Y=o("0ZqF"),tt=o("F8WR"),et=o("ezcZ"),ot=o("rIFS"),nt=o("400F"),dt=o("8LA8"),at=o("btaA"),lt=o("IdTk"),pt=o("K/46"),ct=o("YacR"),it=o("edgN"),rt=o("25dH"),ut=o("HilQ"),st=o("kdoh"),mt=o("jB/K"),gt=o("gjV/"),ft=o("eP9+"),ht=o("Bz7m"),wt=o("Jvmt"),bt=o("++5p"),vt=o("07TD"),yt=o("4EnL"),xt=o("2vjx"),Rt=o("ruLn"),Mt=o("Xis0"),jt=o("VVDC"),Ct=o("4BBW"),$t=o("lJU6"),Lt=o("TMRJ"),At=o("Ba9t"),Bt=o("+w1G"),Nt=o("dgiC"),It=o("fAE3");o.d(e,"DocsModuleNgFactory",function(){return kt});var kt=n["\u0275cmf"](p,[],function(t){return n["\u0275mod"]([n["\u0275mpd"](512,n.ComponentFactoryResolver,n["\u0275CodegenComponentFactoryResolver"],[[8,[c.a,i.a,r.a,u.a,s.a,m.a,g.a,f.a,h.a,w.a,b.b,v.b,y.b,x.a,R.a,M.a,j.a,C.a,$.a,H]],[3,n.ComponentFactoryResolver],n.NgModuleRef]),n["\u0275mpd"](4608,L.NgLocalization,L.NgLocaleLocalization,[n.LOCALE_ID,[2,L["\u0275a"]]]),n["\u0275mpd"](4608,T.v,T.v,[]),n["\u0275mpd"](4608,T.e,T.e,[]),n["\u0275mpd"](4608,q.a,q.a,[n.ComponentFactoryResolver,n.ApplicationRef,n.Injector]),n["\u0275mpd"](4608,D.a,D.a,[n.ComponentFactoryResolver,n.ApplicationRef,n.Injector]),n["\u0275mpd"](4608,E.a,E.a,[n.ComponentFactoryResolver,n.ApplicationRef,n.Injector]),n["\u0275mpd"](4608,z.a,z.a,[n.ComponentFactoryResolver,n.ApplicationRef,n.Injector]),n["\u0275mpd"](4608,J.a,J.a,[n.ComponentFactoryResolver,n.ApplicationRef,n.Injector]),n["\u0275mpd"](4608,O.a,O.a,[]),n["\u0275mpd"](4608,S.a,S.a,[]),n["\u0275mpd"](4608,Z.a,Z.a,[U.b]),n["\u0275mpd"](4608,W.a,W.a,[Z.a]),n["\u0275mpd"](4608,P.a,P.a,[]),n["\u0275mpd"](4608,V.a,V.a,[]),n["\u0275mpd"](4608,X.a,X.a,[n.ComponentFactoryResolver,n.ApplicationRef,n.Injector,[2,_.a]]),n["\u0275mpd"](4608,K.a,K.a,[]),n["\u0275mpd"](4608,G.a,G.a,[Q.a]),n["\u0275mpd"](512,L.CommonModule,L.CommonModule,[]),n["\u0275mpd"](512,T.t,T.t,[]),n["\u0275mpd"](512,T.f,T.f,[]),n["\u0275mpd"](512,d.q,d.q,[[2,d.v],[2,d.m]]),n["\u0275mpd"](512,T.q,T.q,[]),n["\u0275mpd"](512,Y.a,Y.a,[]),n["\u0275mpd"](512,tt.a,tt.a,[]),n["\u0275mpd"](512,et.a,et.a,[]),n["\u0275mpd"](512,ot.a,ot.a,[]),n["\u0275mpd"](512,nt.a,nt.a,[]),n["\u0275mpd"](512,dt.a,dt.a,[]),n["\u0275mpd"](512,at.a,at.a,[]),n["\u0275mpd"](512,lt.a,lt.a,[]),n["\u0275mpd"](512,pt.a,pt.a,[]),n["\u0275mpd"](512,ct.a,ct.a,[]),n["\u0275mpd"](512,it.a,it.a,[]),n["\u0275mpd"](512,rt.a,rt.a,[]),n["\u0275mpd"](512,ut.a,ut.a,[]),n["\u0275mpd"](512,st.a,st.a,[]),n["\u0275mpd"](512,mt.a,mt.a,[]),n["\u0275mpd"](512,gt.a,gt.a,[]),n["\u0275mpd"](512,ft.a,ft.a,[]),n["\u0275mpd"](512,ht.a,ht.a,[]),n["\u0275mpd"](512,wt.a,wt.a,[]),n["\u0275mpd"](512,bt.a,bt.a,[]),n["\u0275mpd"](512,vt.a,vt.a,[]),n["\u0275mpd"](512,yt.a,yt.a,[]),n["\u0275mpd"](512,xt.a,xt.a,[]),n["\u0275mpd"](512,Rt.a,Rt.a,[]),n["\u0275mpd"](512,Mt.a,Mt.a,[]),n["\u0275mpd"](512,jt.a,jt.a,[]),n["\u0275mpd"](512,Ct.a,Ct.a,[]),n["\u0275mpd"](512,$t.b,$t.b,[]),n["\u0275mpd"](512,Lt.a,Lt.a,[]),n["\u0275mpd"](512,At.a,At.a,[]),n["\u0275mpd"](512,Bt.b,Bt.b,[]),n["\u0275mpd"](512,Nt.a,Nt.a,[]),n["\u0275mpd"](512,It.a,It.a,[]),n["\u0275mpd"](512,p,p,[]),n["\u0275mpd"](1024,d.j,function(){return[[{path:"",redirectTo:"how"},{path:":id",component:l}]]},[])])})}});