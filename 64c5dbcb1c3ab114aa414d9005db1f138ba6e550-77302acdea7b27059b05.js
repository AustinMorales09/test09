(self.webpackChunk_freecodecamp_client=self.webpackChunk_freecodecamp_client||[]).push([[2504],{63599:function(e){var t=.1,n="function"==typeof Float32Array;function a(e,t){return 1-3*t+3*e}function l(e,t){return 3*t-6*e}function r(e){return 3*e}function o(e,t,n){return((a(t,n)*e+l(t,n))*e+r(t))*e}function s(e,t,n){return 3*a(t,n)*e*e+2*l(t,n)*e+r(t)}function c(e){return e}e.exports=function(e,a,l,r){if(!(0<=e&&e<=1&&0<=l&&l<=1))throw new Error("bezier x values must be in [0, 1] range");if(e===a&&l===r)return c;for(var i=n?new Float32Array(11):new Array(11),u=0;u<11;++u)i[u]=o(u*t,e,l);function m(n){for(var a=0,r=1;10!==r&&i[r]<=n;++r)a+=t;--r;var c=a+(n-i[r])/(i[r+1]-i[r])*t,u=s(c,e,l);return u>=.001?function(e,t,n,a){for(var l=0;l<4;++l){var r=s(t,n,a);if(0===r)return t;t-=(o(t,n,a)-e)/r}return t}(n,c,e,l):0===u?c:function(e,t,n,a,l){var r,s,c=0;do{(r=o(s=t+(n-t)/2,a,l)-e)>0?n=s:t=s}while(Math.abs(r)>1e-7&&++c<10);return s}(n,a,a+t,e,l)}return function(e){return 0===e?0:1===e?1:o(m(e),a,r)}}},30282:function(e,t,n){"use strict";n.d(t,{A:function(){return b}});var a=n(72047),l=n(6731),r=n(68088),o=n(538),s=n(37371),c=n(3640),i=(n(94814),n(63599)),u=n.n(i),m=n(7217);const d=u()(.2,.5,.4,1);let p=0;function h(e){let{completedPercent:t,title:n,meta:l}=e;const[r,o]=(0,a.useState)(0),[s,c]=(0,a.useState)(0),i=(0,a.useRef)(null),u=function(e){const[t,n]=(0,a.useState)(!1),l=(0,a.useMemo)((()=>new IntersectionObserver((e=>{let[t]=e;return n(t.isIntersecting)}))),[]);return(0,a.useEffect)((()=>(e.current&&l.observe(e.current),()=>{l.disconnect()})),[e,l]),t}(i);return(0,a.useEffect)((()=>{s!==t&&u&&(c(t),(e=>{e>100&&(e=100),e<0&&(e=0);const t=e/((10*e+750)/10),n=window.setInterval((()=>{p+=t,p>e&&(p=e),o(Math.round(e*d(p/e))),p>=e&&(p=0,clearInterval(n))}),10)})(t))}),[u]),a.createElement(a.Fragment,null,a.createElement("div",{className:"completion-block-name"},n),a.createElement("div",{className:"progress-bar-wrap","aria-hidden":"true",ref:i},a.createElement(m.z,{now:r})),a.createElement("div",{className:"completion-block-meta"},l))}h.displayName="ProgressInner";var g=h;const f=(0,r.Mz)(s.U8,s.UK,s.jH,s.fO,((e,t,n,a)=>{let{id:l,block:r,superBlock:o}=t;return{currentBlockIds:e,id:l,block:r,superBlock:o,completedChallengesInBlock:n,completedPercent:a}}));function E(e){var t;let{currentBlockIds:n,block:l,id:r,superBlock:o,completedChallengesInBlock:s,completedPercent:i,t:u}=e;const m=u("intro:"+o+".blocks."+l+".title"),d=c.Gb.some((e=>{var t;return null===(t=e.projects)||void 0===t?void 0:t.some((e=>e.id===r))})),p=null!==(t=null==n?void 0:n.length)&&void 0!==t?t:0,h=d&&p>0?u("learn.project-complete",{completedChallengesInBlock:s,totalChallengesInBlock:p}):u("learn.percent-complete",{percent:i});return a.createElement("div",{className:"progress-bar-container","data-playwright-test-label":"progress-bar-container"},a.createElement(g,{title:m,meta:h,completedPercent:i}))}E.displayName="Progress";var b=(0,l.Ng)(f)((0,o.CI)()(E))},7217:function(e,t,n){"use strict";n.d(t,{z:function(){return l}});var a=n(72047);function l(e){let{now:t}=e;return a.createElement(a.Fragment,null,a.createElement("div",{className:"progress-bar-background"}),a.createElement("div",{className:"progress-bar-percent","data-testid":"fcc-progress-bar-percent",style:{width:t+"%"}}))}},58658:function(e,t,n){"use strict";var a=n(72047),l=n(19845),r=n(6731),o=n(68088),s=n(43319),c=n(15333),i=n(23116),u=n(58613);const m=(0,o.Mz)(i.SR,(e=>({fetchState:e}))),d={tryToShowDonationModal:c.RE};t.A=(0,r.Ng)(m,d)((function(e){let{fetchState:t,tryToShowDonationModal:n,children:r,hasEditableBoundaries:o}=e;return(0,a.useEffect)((()=>{n()}),[]),(0,a.useEffect)((()=>()=>{const e=document.querySelector('meta[name="robots"]');e&&e.remove()}),[]),t.pending&&!t.complete?a.createElement(s.aH,{fullScreen:!0}):a.createElement(a.Fragment,null,a.createElement(l.m,null,a.createElement("meta",{content:"noindex",name:"robots"})),a.createElement("main",Object.assign({id:"learn-app-wrapper"},o&&{"data-has-editable-boundaries":!0}),r),a.createElement(u.A,null))}))},60144:function(e,t,n){"use strict";var a=n(37472),l=n(72047),r=n(21587),o=n(43319);function s(e){let{children:t,isCompleted:n,translationPending:s}=e;return l.createElement("div",{className:"challenge-title-wrap"},s&&l.createElement(l.Fragment,null,l.createElement(o.N_,{className:"title-translation-cta",to:a.Ay.t("links:help-translate-link-url")},a.Ay.t("misc.translation-pending"))),l.createElement("div",{className:"challenge-title"},l.createElement("h1",{id:"content-start","data-playwright-test-label":"challenge-title"},t),n&&l.createElement(r.A,null)))}s.displayName="ChallengeTitle",t.A=s},24519:function(e,t,n){"use strict";var a=n(72047),l=n(538),r=n(6731),o=n(68088),s=n(12479),c=n(54688),i=n(23116),u=n(22148),m=n(37371),d=n(30282),p=n(21587),h=n(43319),g=n(82305),f=n(91061);const E=(0,o.Mz)(m.eY,m.UK,m.p1,m.zv,i.$k,i.n,m.Y0,m.IJ,((e,t,n,a,l,r,o,s)=>{let{dashedName:c,id:i}=t;return{challengeFiles:e,id:i,dashedName:c,completedChallengesIds:n,isOpen:a,isSignedIn:l,allChallengesInfo:r,message:o,isSubmitting:s}})),b={close:()=>(0,u.Oo)("completion"),submitChallenge:u.EI};class v extends a.Component{constructor(e){super(e),this.handleKeypress=this.handleKeypress.bind(this),this.state={downloadURL:null}}static getDerivedStateFromProps(e,t){const{challengeFiles:n,isOpen:a}=e;if(!a)return{downloadURL:null};const{downloadURL:l}=t;l&&URL.revokeObjectURL(l);let r=null;if(null!=n&&n.length){const e=n.reduce(((e,t)=>{const a="** start of "+t.path+" **\n\n",l="\n\n** end of "+t.path+" **\n\n";return e+=n.length>1?""+a+t.contents+l:t.contents}),""),t=new Blob([e],{type:"text/json"});r=URL.createObjectURL(t)}return{downloadURL:r}}handleKeypress(e){"Enter"===e.key&&(e.ctrlKey||e.metaKey)&&(e.preventDefault(),e.stopPropagation(),this.props.submitChallenge())}componentWillUnmount(){this.state.downloadURL&&URL.revokeObjectURL(this.state.downloadURL),this.props.close()}componentDidUpdate(e){const{isOpen:t}=e,{isOpen:n}=this.props;!t&&n&&(0,f.A)({event:"pageview",pagePath:"/completion-modal"})}render(){const{close:e,isOpen:t,isSignedIn:n,isSubmitting:l,message:r,t:o,dashedName:i,submitChallenge:u}=this.props,m=navigator.userAgent.includes("Mac OS");let f;return f=o(window.innerWidth>g.b?m?n?"buttons.submit-and-go-3":"buttons.go-to-next-3":n?"buttons.submit-and-go-2":"buttons.go-to-next-2":n?"buttons.submit-and-go":"buttons.go-to-next"),a.createElement(s.aF,{onClose:e,open:!!t,size:"large",onKeyDown:t?this.handleKeypress:void 0},a.createElement(s.aF.Header,{closeButtonClassNames:"close"},r),a.createElement(s.aF.Body,null,a.createElement(p.A,{className:"completion-success-icon","data-testid":"fcc-completion-success-icon","data-playwright-test-label":"completion-success-icon"}),a.createElement("div",{className:"completion-block-details"},a.createElement(d.A,null))),a.createElement(s.aF.Footer,null,n?null:a.createElement("div",{className:"completion-modal-login-btn"},a.createElement(c.A,{block:!0},o("learn.sign-in-save")),a.createElement(h.hK,{size:"xxSmall"})),a.createElement(s.$n,{block:!0,size:"large",variant:"primary",disabled:l,"data-cy":"submit-challenge",onClick:()=>u()},f),a.createElement(h.hK,{size:"xxSmall"}),this.state.downloadURL?a.createElement(s.$n,{block:!0,size:"large",variant:"primary",download:i+".txt",href:this.state.downloadURL},o("learn.download-solution")):null))}}v.displayName="CompletionModal",t.A=(0,r.Ng)(E,b)((0,l.CI)()(v))},4204:function(e,t,n){"use strict";n(94814);var a=n(72047),l=n(538),r=n(6731),o=n(86900),s=n(12479),c=n(7572),i=n(43319),u=n(22148),m=n(37371),d=n(91061);const{forumLocation:p}=c,h=p+"/t/19514",g=(e,t)=>{const n=t.replace(/-/g," "),a=/^(step|task)\s*\d*$/i.test(e)?encodeURIComponent(n+" - "+e):encodeURIComponent(e);return p+"/search?q="+a};function f(e){let{name:t,i18nKey:n,onChange:r,value:o,href:s,label:c}=e;const{t:i}=(0,l.Bd)();return a.createElement("div",{className:"checkbox-container"},a.createElement("input",{id:t,name:t,type:"checkbox",onChange:r,checked:o,required:!0,"aria-label":i(c)}),a.createElement("span",null,a.createElement(l.x6,{i18nKey:n},a.createElement("a",{href:s,rel:"noopener noreferrer",target:"_blank"},"placeholder",a.createElement("span",{className:"sr-only"},i("aria.opens-new-window"))))))}function E(e){let{closeHelpModal:t,createQuestion:n,isOpen:r,challengeBlock:o,challengeTitle:c}=e;const{t:u}=(0,l.Bd)(),[m,p]=(0,a.useState)(!1),[E,b]=(0,a.useState)(""),[v,y]=(0,a.useState)(!1),[k,w]=(0,a.useState)(!1),C=(0,a.useRef)(null);(0,a.useEffect)((()=>{var e,t;m&&(null===(e=C.current)||void 0===e||null===(t=e.querySelector("input"))||void 0===t||t.focus())}),[m]);const x=(0,a.useMemo)((()=>E.length>=50&&v&&k),[E,v,k]),S=()=>{b(""),y(!1),w(!1)},N=()=>{t(),p(!1),S()};return r&&(0,d.A)({event:"pageview",pagePath:"/help-modal"}),a.createElement(s.aF,{onClose:N,open:!!r},a.createElement(s.aF.Header,{closeButtonClassNames:"close"},u("buttons.ask-for-help")),a.createElement(s.aF.Body,null,m?a.createElement("form",{onSubmit:e=>{e.preventDefault(),x&&(p(!1),S(),n(E),t())},ref:C},a.createElement("fieldset",null,a.createElement("legend",{className:"help-form-legend"},u("learn.must-confirm-statements")),a.createElement(f,{name:"read-search-ask-checkbox",i18nKey:"learn.read-search-ask-checkbox",label:"aria.rsa-checkbox",onChange:e=>y(e.target.checked),value:v,href:h}),a.createElement(i.hK,{size:"small"}),a.createElement(f,{name:"similar-questions-checkbox",i18nKey:"learn.similar-questions-checkbox",label:"aria.similar-questions-checkbox",onChange:e=>w(e.target.checked),value:k,href:g(c,o)})),a.createElement(i.hK,{size:"xSmall"}),a.createElement("label",{htmlFor:"help-modal-form-description"},u("forum-help.whats-happening"),a.createElement("span",{className:"sr-only"},u("learn.min-50-max-500"))),a.createElement(s.MJ,{id:"help-modal-form-description",name:"description",onChange:e=>{b(e.target.value)},componentClass:"textarea",rows:5,value:E,placeholder:u("forum-help.describe"),minLength:50,maxLength:500,required:!0}),a.createElement(i.hK,{size:"xSmall"}),E.length<50?a.createElement("p",null,u("learn.minimum-characters",{characters:50-E.length})):a.createElement("p",null,u("learn.characters-left",{characters:500-E.length})),a.createElement(i.hK,{size:"xxSmall"}),a.createElement(s.$n,{block:!0,size:"large",variant:"primary",type:"submit",disabled:!x},u("buttons.submit")),a.createElement(i.hK,{size:"xxSmall"}),a.createElement(s.$n,{block:!0,size:"large",variant:"primary",onClick:N},u("buttons.cancel"))):a.createElement(a.Fragment,null,a.createElement("div",{className:"alert"},a.createElement("div",{className:"help-text-warning"},a.createElement("p",null,a.createElement(l.x6,{i18nKey:"learn.tried-rsa"},a.createElement("a",{href:h,rel:"noopener noreferrer",target:"_blank"},"placeholder"))),a.createElement("p",null,a.createElement(l.x6,{i18nKey:"learn.rsa-forum"},a.createElement("a",{href:g(c,o),rel:"noopener noreferrer",target:"_blank"},"placeholder"),"placeholder")))),a.createElement(s.$n,{block:!0,size:"large",variant:"primary",onClick:()=>p(!0)},u("buttons.create-post")),a.createElement(i.hK,{size:"xxSmall"}),a.createElement(s.$n,{block:!0,size:"large",variant:"primary",onClick:t},u("buttons.cancel")))))}E.displayName="HelpModal",t.A=(0,r.Ng)((e=>({isOpen:(0,m.si)(e)})),(e=>(0,o.zH)({createQuestion:u.hG,closeHelpModal:()=>(0,u.Oo)("help")},e)))(E)},9496:function(e,t,n){"use strict";var a=n(27943),l=n(72047),r=n(35964),o=n(6731),s=n(68088),c=n(23116),i=n(22148),u=n(37371),m=n(7781);const d=(0,s.Mz)(u.si,u.CC,u.A$,u.wU,u.BD,u.eY,u.CP,c.dt,((e,t,n,a,l,r,o,s)=>({isHelpModalOpen:e,isResetModalOpen:t,isShortcutsModalOpen:n,isProjectPreviewModalOpen:a,canFocusEditor:l,challengeFiles:r,tests:o,user:s}))),p={setEditorFocusability:i.yK,submitChallenge:i.EI,openShortcutsModal:()=>(0,i.qf)("shortcuts"),setIsAdvancing:i.Ar};function h(e){let{canFocusEditor:t,challengeType:n,children:o,instructionsPanelRef:s,editorRef:c,executeChallenge:i,containerRef:u,nextChallengePath:d,prevChallengePath:p,setEditorFocusability:h,setIsAdvancing:g,submitChallenge:f,tests:E,usesMultifileEditor:b,openShortcutsModal:v,playScene:y,user:{keyboardShortcuts:k},isHelpModalOpen:w,isResetModalOpen:C,isShortcutsModalOpen:x,isProjectPreviewModalOpen:S}=e;const N={navigationMode:[w,C,x,S].some(Boolean)?"":"escape",executeChallenge:["ctrl+enter","command+enter"],focusEditor:"e",focusInstructionsPanel:"r",navigatePrev:["p"],navigateNext:["n"],showShortcuts:"shift+/",playScene:["ctrl+space"]},M={executeChallenge:e=>{if(null==e||e.preventDefault(),!i)return;const t=E.every((e=>e.pass&&!e.err));b&&"number"==typeof n&&!(0,m.x)(n)?t?f():i():i({showCompletionModal:!0})},...k?{showShortcuts:e=>{"?"===(null==e?void 0:e.key)&&v()},focusEditor:e=>{null==e||e.preventDefault(),c&&c.current&&c.current.focus()},focusInstructionsPanel:()=>{s&&s.current&&s.current.focus()},navigationMode:()=>h(!1),navigatePrev:()=>{t||(p?(g(!0),(0,a.navigate)(p)):(0,a.navigate)("/learn"))},navigateNext:()=>{t||(d?(g(!0),(0,a.navigate)(d)):(0,a.navigate)("/learn"))},playScene:()=>{y&&y()}}:{}};return l.createElement(l.Fragment,null,l.createElement(r.HotKeys,{id:"editor-layout",allowChanges:!0,handlers:M,innerRef:u,keyMap:N},o,l.createElement(r.GlobalHotKeys,null)))}h.displayName="Hotkeys",t.A=(0,o.Ng)(d,p)(h)},65665:function(e,t,n){"use strict";var a=n(54150),l=n.n(a),r=(n(9767),n(45097),n(6026),n(48306),n(19285),n(73475),n(99561),n(59354),n(7520),n(72047)),o=n(63044);function s(e){let{className:t,text:n,useSpan:a,noAria:s}=e;const c=(0,r.useRef)(null),i=a?"span":"div";return s&&(n=n.replace(/<pre( [^>]+)?>/,'<pre$1 data-no-aria="true">')),(0,r.useEffect)((()=>{c.current&&(l().hooks.add("complete",o.GF),l().highlightAllUnder(c.current))}),[]),r.createElement(i,{className:t,dangerouslySetInnerHTML:{__html:n},ref:c})}s.displayName="PrismFormatted",t.A=s}}]);
//# sourceMappingURL=64c5dbcb1c3ab114aa414d9005db1f138ba6e550-77302acdea7b27059b05.js.map