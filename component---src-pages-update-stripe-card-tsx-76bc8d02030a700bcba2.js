"use strict";(self.webpackChunk_freecodecamp_client=self.webpackChunk_freecodecamp_client||[]).push([[9281],{28569:function(e,t,n){var a=n(72047),r=n(538),l=n(54688);const c=e=>{let{text:t}=e;const{t:n}=(0,r.Bd)();return a.createElement(l.A,{block:!0,"data-test-label":"landing-big-cta","data-playwright-test-label":"landing-big-cta"},t||n("buttons.logged-in-cta-btn"))};c.displayName="BigCallToAction",t.A=c},23217:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var a=n(23848),r=n(72047),l=n(19845),c=n(538),s=n(6731),i=n(68088),d=n(12479),o=n(28569),m=n(43319),u=n(23116),p=n(15333),g=n(7324),E=n.n(g);function f(e){let{reset:t,success:n,redirecting:a,error:l=null}=e;const{t:s}=(0,c.Bd)(),i=a?"info":n?"success":"danger",o=a?""+s("donate.redirecting"):n?""+s("donate.success-card-update"):""+s("donate.error-card-update");return r.createElement(d.Fc,{variant:i,className:"donation-completion"},r.createElement("p",null,o),r.createElement("div",{className:"donation-completion-body"},a&&r.createElement(E(),{className:"user-state-spinner",color:"#0a0a23",fadeIn:"none",name:"line-scale"}),l&&r.createElement("p",null,l)),r.createElement("div",{className:"donation-completion-buttons"},l&&r.createElement("div",null,r.createElement("button",{type:"button",className:"try-again-button",onClick:t},s("buttons.try-again")))))}f.displayName="CardUpdateAlertHandler";var C=f;const b=(0,i.Mz)(u.$k,u.ig,u.mz,((e,t,n)=>({isSignedIn:e,isDonating:t,updateCardState:n}))),h={updateCard:p.w0,updateCardComplete:p.V_};function N(e){let{isSignedIn:t,isDonating:n,handleClick:a,updateCardState:l}=e;const{t:s}=(0,c.Bd)();if(t&&!n)return r.createElement(r.Fragment,null,r.createElement("h1",{className:"text-center"},s("learn.donation-record-not-found")),r.createElement(m.hK,{size:"medium"}),r.createElement("p",{className:"text-center"},s("learn.contact-support-mistake")));if(t&&n){const{success:e,error:t,redirecting:n}=l;return n||t||e?r.createElement(C,{success:e,error:t,redirecting:n,reset:a}):r.createElement(r.Fragment,null,r.createElement(m.hK,{size:"medium"}),r.createElement(d.$n,{block:!0,onClick:a},s("buttons.update-card")))}return r.createElement(r.Fragment,null,r.createElement("h1",{className:"text-center"},s("learn.sign-in-card-update")),r.createElement(m.hK,{size:"medium"}),r.createElement(o.A,{text:s("buttons.sign-in")}))}function k(e){let{isSignedIn:t,isDonating:n,updateCardState:s,updateCard:i,updateCardComplete:o}=e;const{t:u}=(0,c.Bd)(),p=(0,a.useLocation)(),g=null!==new URLSearchParams(p.search).get("session_id");return(0,r.useEffect)((()=>{g&&o()}),[g,o]),r.createElement(r.Fragment,null,r.createElement(l.A,null,r.createElement("title",null,u("misc.update-your-card")," | freeCodeCamp.org")),r.createElement(d.mc,{className:"page-wrapper-80"},r.createElement(d.fI,null,r.createElement(d.fv,{sm:6,smOffset:3},r.createElement(m.hK,{size:"large"}),r.createElement(N,{isSignedIn:t,isDonating:n,handleClick:function(e){i(),e&&e.preventDefault()},updateCardState:s}),r.createElement(m.hK,{size:"large"})))))}k.displayName="Update-Stripe-Card";var v=(0,s.Ng)(b,h)(k)}}]);
//# sourceMappingURL=component---src-pages-update-stripe-card-tsx-76bc8d02030a700bcba2.js.map