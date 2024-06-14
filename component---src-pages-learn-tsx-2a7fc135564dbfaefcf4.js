"use strict";(self.webpackChunk_freecodecamp_client=self.webpackChunk_freecodecamp_client||[]).push([[6539],{40121:function(e,t,a){a(94814);var n=a(72047),l=a(538),r=a(7572),c=a(43319);const{forumLocation:i}=r;function m(){const{t:e}=(0,l.Bd)();return n.createElement("div",{className:"intro-description","data-playwright-test-label":"learn-read-this-section"},n.createElement(c.hK,{size:"medium"}),n.createElement("p",{className:"text-center","data-playwright-test-label":"learn-read-this-heading"},n.createElement("strong",null,e("learn.read-this.heading"))),n.createElement(c.hK,{size:"medium"}),[...Array(8).keys()].map((t=>n.createElement("p",{key:t,"data-playwright-test-label":"learn-read-this-p"},e("learn.read-this.p"+(t+1))))),n.createElement("p",null,n.createElement(l.x6,{i18nKey:"learn.read-this.p9","data-playwright-test-label":"learn-read-this-p"},n.createElement(c.N_,{className:"inline",to:"https://youtube.com/freecodecamp"}))),n.createElement("p",{"data-playwright-test-label":"learn-read-this-p"},e("learn.read-this.p10")),n.createElement("p",null,n.createElement(l.x6,{i18nKey:"learn.read-this.p11","data-playwright-test-label":"learn-read-this-p"},n.createElement(c.N_,{className:"inline",to:i}))),n.createElement("p",{"data-playwright-test-label":"learn-read-this-p"},e("learn.read-this.p12")),n.createElement("strong",null,e("misc.quincy")))}m.displayName="IntroDescription",t.A=m},7217:function(e,t,a){a.d(t,{z:function(){return l}});var n=a(72047);function l(e){let{now:t}=e;return n.createElement(n.Fragment,null,n.createElement("div",{className:"progress-bar-background"}),n.createElement("div",{className:"progress-bar-percent","data-testid":"fcc-progress-bar-percent",style:{width:t+"%"}}))}},58658:function(e,t,a){var n=a(72047),l=a(19845),r=a(6731),c=a(68088),i=a(43319),m=a(15333),s=a(23116),o=a(58613);const d=(0,c.Mz)(s.SR,(e=>({fetchState:e}))),u={tryToShowDonationModal:m.RE};t.A=(0,r.Ng)(d,u)((function(e){let{fetchState:t,tryToShowDonationModal:a,children:r,hasEditableBoundaries:c}=e;return(0,n.useEffect)((()=>{a()}),[]),(0,n.useEffect)((()=>()=>{const e=document.querySelector('meta[name="robots"]');e&&e.remove()}),[]),t.pending&&!t.complete?n.createElement(i.aH,{fullScreen:!0}):n.createElement(n.Fragment,null,n.createElement(l.m,null,n.createElement("meta",{content:"noindex",name:"robots"})),n.createElement("main",Object.assign({id:"learn-app-wrapper"},c&&{"data-has-editable-boundaries":!0}),r),n.createElement(o.A,null))}))},91763:function(e,t,a){a.r(t),a.d(t,{default:function(){return K}});var n=a(72047),l=a(19845),r=a(538),c=a(6731),i=a(68088),m=a(12479),s=a(64709),o=a(54688),d=a(43319),u=a(40121),E=a(7102),p=a(7217);const h=e=>{let{onLearnDonationAlertClick:t,isDonating:a}=e;const{t:l}=(0,r.Bd)(),c=(0,E.iT)("seasonal-alert"),i=(0,E.iT)("progress-alert-2024"),s=(0,E.iT)("university-alert"),o=n.createElement(m.Fc,{variant:"info",className:"annual-donation-alert"},n.createElement("p",null,n.createElement("b",null,l("learn.season-greetings-fcc"))),n.createElement("p",null,l("learn.if-getting-value")),n.createElement("hr",null),n.createElement("p",{className:"text-center"},n.createElement(d.N_,{className:"btn",key:"donate",sameTab:!1,to:"/donate",onClick:t},l("buttons.donate")))),u=(h=l("donate.help-us-reach-20k"),g=Number(i.value),n.createElement(m.Fc,{variant:"info",className:"annual-donation-alert"},g&&n.createElement(n.Fragment,null,n.createElement("div",{className:"text-center"},n.createElement("h2",null,l("learn.donation-heading")),n.createElement(d.hK,{size:"small"}),n.createElement("b",{className:"m-0 progress-percent-value"},g+"%")),n.createElement("div",{"aria-hidden":"true",className:"progress-wrapper"},n.createElement("div",null,n.createElement(p.z,{now:g})))),n.createElement("p",null,h),n.createElement(d.hK,{size:"medium"}),n.createElement("div",{className:"text-center"},n.createElement(d.N_,{className:"btn",key:"donate",sameTab:!1,to:"/donate",onClick:t},l("buttons.donate")))));var h,g;const f=n.createElement(m.Fc,{variant:"info",className:"university-alert"},n.createElement("p",null,n.createElement("b",null,l("learn.building-a-university"))),n.createElement("p",null,l("learn.if-help-university")),n.createElement(d.hK,{size:"medium"}),n.createElement("p",{className:"text-center"},n.createElement(d.N_,{className:"btn",key:"donate",sameTab:!1,to:"/donate",onClick:t},l("buttons.donate"))));if(!a){if(s.on)return f;if(i.on)return u;if(c.on)return o}return null};h.displayName="LearnAlert";var g=h;const f=e=>{let{isSignedIn:t,name:a,pending:l,complete:c,completedChallengeCount:i,slug:m,onLearnDonationAlertClick:E,isDonating:p}=e;const{t:h}=(0,r.Bd)();if(l&&!c)return n.createElement(n.Fragment,null,n.createElement(d.hK,{size:"medium"}),n.createElement(d.aH,null),n.createElement(d.hK,{size:"medium"}));if(t){const{quote:e,author:t}=(0,s.U)();return n.createElement(n.Fragment,null,n.createElement(d.hK,{size:"medium"}),n.createElement("h1",{id:"content-start",className:"text-center"},a?""+h("learn.welcome-1",{name:a}):""+h("learn.welcome-2")),n.createElement(d.hK,{size:"medium"}),n.createElement("div",{className:"text-center quote-partial"},n.createElement("blockquote",{className:"blockquote","data-testid":"quote-block"},n.createElement("span",null,n.createElement("q",{"data-playwright-test-label":"random-quote"},e),n.createElement("footer",{className:"quote-author blockquote-footer"},n.createElement("cite",{"data-playwright-test-label":"random-author"},t))))),n.createElement(g,{onLearnDonationAlertClick:E,isDonating:p}),i&&m&&i<15?n.createElement("div",{className:"intro-description"},n.createElement(d.hK,{size:"medium"}),n.createElement("p",null,n.createElement(r.x6,{i18nKey:"learn.start-at-beginning"},n.createElement(d.N_,{to:m})))):"")}return n.createElement(n.Fragment,null,n.createElement(d.hK,{size:"medium"}),n.createElement("h1",{id:"content-start",className:"text-center","data-playwright-test-label":"learn-heading"},h("learn.heading")),n.createElement(d.hK,{size:"medium"}),n.createElement(u.A,null),n.createElement(d.hK,{size:"medium"}),n.createElement(o.A,{block:!0},h("buttons.logged-out-cta-btn")),n.createElement(d.hK,{size:"medium"}))};f.displayName="Intro";var b=f,N=a(22992),y=a(58658),v=a(23116),k=a(91061);const w=(0,i.Mz)(v.SR,v.$k,v.dt,((e,t,a)=>({fetchState:e,isSignedIn:t,user:a})));function z(e){let{isSignedIn:t,fetchState:{pending:a,complete:c},user:{name:i="",completedChallengeCount:s=0,isDonating:o=!1},data:{challengeNode:{challenge:{fields:{slug:u}}}}}=e;const{t:E}=(0,r.Bd)();return n.createElement(y.A,null,n.createElement(l.A,{title:E("metaTags:title")}),n.createElement(m.mc,null,n.createElement(m.fI,null,n.createElement(m.fv,{md:8,mdOffset:2,sm:10,smOffset:1,xs:12},n.createElement(b,{complete:c,completedChallengeCount:s,isSignedIn:t,name:i,pending:a,slug:u,onLearnDonationAlertClick:()=>{(0,k.A)({event:"donation_related",action:"Learn Donation Alert Click"})},isDonating:o}),n.createElement(N.A,null),n.createElement(d.hK,{size:"large"})))))}z.displayName="LearnPage";var K=(0,c.Ng)(w)(z)}}]);
//# sourceMappingURL=component---src-pages-learn-tsx-2a7fc135564dbfaefcf4.js.map