"use strict";(self.webpackChunk_freecodecamp_client=self.webpackChunk_freecodecamp_client||[]).push([[5536],{74699:function(e,t,n){n.r(t);var l=n(72047),i=n(19845),a=n(538),s=n(6731),o=n(68088),c=n(12479),r=n(65176),d=n(58658),h=n(23116),u=n(96411),m=n(9496),p=n(60144),g=n(24519),C=n(4204),f=n(18338),E=n(70932),b=n(22148),w=n(37371),A=n(63044),k=n(47799),M=n(52952);const S=(0,o.Mz)(w.II,w.CP,w.m3,h.$k,((e,t,n,l)=>({tests:t,output:e,isChallengeCompleted:n,isSignedIn:l}))),T={challengeMounted:b.Kj,executeChallenge:b.xs,initConsole:b.aC,initTests:b.gT,updateChallengeMeta:b.a0,updateSolutionFormValues:b.Fr};class v extends l.Component{constructor(e){super(e),this.container=l.createRef(),this.state={},this.updateDimensions=this.updateDimensions.bind(this),this.handleSubmit=this.handleSubmit.bind(this)}componentDidMount(){var e;this.initializeComponent(),window.addEventListener("resize",(()=>this.updateDimensions())),null===(e=this.container.current)||void 0===e||e.focus()}updateDimensions(){this.setState({width:window.innerWidth,height:window.innerHeight})}componentWillUnmount(){window.removeEventListener("resize",(()=>this.updateDimensions()))}componentDidUpdate(e){const{data:{challengeNode:{challenge:{title:t,fields:{tests:n}}}}}=e,{data:{challengeNode:{challenge:{title:l,fields:{tests:i}}}}}=this.props;t===l&&n===i||this.initializeComponent()}initializeComponent(){const{challengeMounted:e,initConsole:t,initTests:n,updateChallengeMeta:l,data:{challengeNode:{challenge:{fields:{tests:i},title:a,challengeType:s,helpCategory:o}}},pageContext:{challengeMeta:c}}=this.props;t(),n(i),l({...c,title:a,challengeType:s,helpCategory:o}),e(c.id)}handleSubmit(e){let{showCompletionModal:t}=e;this.props.executeChallenge({showCompletionModal:t})}render(){const{data:{challengeNode:{challenge:{fields:{blockName:e},challengeType:t,forumTopicId:n,title:a,description:s,instructions:o,translationPending:h,superBlock:b,block:w}}},isChallengeCompleted:S,output:T,pageContext:{challengeMeta:{nextChallengePath:v,prevChallengePath:x}},t:z,tests:I,updateSolutionFormValues:y}=this.props,D=z("intro:"+b+".blocks."+w+".title")+" - "+a;return l.createElement(m.A,{containerRef:this.container,nextChallengePath:v,prevChallengePath:x},l.createElement(d.A,null,l.createElement(i.A,{title:D+" | "+z("learn.learn")+" | freeCodeCamp.org"}),l.createElement(c.mc,null,l.createElement(c.fI,null,l.createElement(c.fv,{md:8,mdOffset:2,sm:10,smOffset:1,xs:12},l.createElement(r.A,{size:"medium"}),l.createElement(p.A,{isCompleted:S,translationPending:h},a),l.createElement(u.A,{description:s,instructions:o}),l.createElement(k.A,{challengeType:t,onSubmit:this.handleSubmit,updateSolutionForm:y}),l.createElement(M.A,{guideUrl:(0,A.oI)({forumTopicId:n,title:a})}),l.createElement("br",null),l.createElement(f.A,{defaultOutput:"/**\n*\n* "+z("learn.test-output")+"\n*\n*\n*/",output:T}),l.createElement(E.A,{tests:I}),l.createElement(r.A,{size:"medium"})),l.createElement(g.A,null),l.createElement(C.A,{challengeTitle:a,challengeBlock:e})))))}}v.displayName="BackEnd",t.default=(0,s.Ng)(S,T)((0,a.CI)()(v))}}]);
//# sourceMappingURL=component---src-templates-challenges-projects-backend-show-tsx-2c66c716d56a31cd9200.js.map