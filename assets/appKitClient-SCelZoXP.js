const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./index-DkkgsBGE.js","./index-BU9jRfPY.js","./index-Bg5sVrul.css","./browser-CeceZ__e.js","./index-Cg8OeAZX.js","./w3m-modal-ByG1BSkC.js"])))=>i.map(i=>d[i]);
var qu=Object.defineProperty;var Yu=(i,e,t)=>e in i?qu(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var un=(i,e,t)=>Yu(i,typeof e!="symbol"?e+"":e,t);import{a3 as $e,a4 as Ye,f as Ha,k as Fa,a5 as ea,a6 as Lc,a7 as fn,d as Ku,_ as nr}from"./index-BU9jRfPY.js";import{b as Xu}from"./browser-CeceZ__e.js";function at(i,e,t,r){let o=i[e];return Ye(i,()=>{const n=i[e];Object.is(o,n)||t(o=n)})}function Qu(i){const e=$e({data:Array.from([]),has(t){return this.data.some(r=>r[0]===t)},set(t,r){const o=this.data.find(n=>n[0]===t);return o?o[1]=r:this.data.push([t,r]),this},get(t){var r;return(r=this.data.find(o=>o[0]===t))==null?void 0:r[1]},delete(t){const r=this.data.findIndex(o=>o[0]===t);return r===-1?!1:(this.data.splice(r,1),!0)},clear(){this.data.splice(0)},get size(){return this.data.length},toJSON(){return new Map(this.data)},forEach(t){this.data.forEach(r=>{t(r[1],r[0],this)})},keys(){return this.data.map(t=>t[0]).values()},values(){return this.data.map(t=>t[1]).values()},entries(){return new Map(this.data).entries()},get[Symbol.toStringTag](){return"Map"},[Symbol.iterator](){return this.entries()}});return Object.defineProperties(e,{data:{enumerable:!1},size:{enumerable:!1},toJSON:{enumerable:!1}}),Object.seal(e),e}var Bc={exports:{}};(function(i,e){(function(t,r){i.exports=r()})(Ha,function(){var t=1e3,r=6e4,o=36e5,n="millisecond",a="second",s="minute",p="hour",h="day",x="week",_="month",D="quarter",B="year",ne="date",se="Invalid Date",J=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,ve=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,le={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(K){var M=["th","st","nd","rd"],I=K%100;return"["+K+(M[(I-20)%10]||M[I]||M[0])+"]"}},ge=function(K,M,I){var F=String(K);return!F||F.length>=M?K:""+Array(M+1-F.length).join(I)+K},be={s:ge,z:function(K){var M=-K.utcOffset(),I=Math.abs(M),F=Math.floor(I/60),W=I%60;return(M<=0?"+":"-")+ge(F,2,"0")+":"+ge(W,2,"0")},m:function K(M,I){if(M.date()<I.date())return-K(I,M);var F=12*(I.year()-M.year())+(I.month()-M.month()),W=M.clone().add(F,_),te=I-W<0,ie=M.clone().add(F+(te?-1:1),_);return+(-(F+(I-W)/(te?W-ie:ie-W))||0)},a:function(K){return K<0?Math.ceil(K)||0:Math.floor(K)},p:function(K){return{M:_,y:B,w:x,d:h,D:ne,h:p,m:s,s:a,ms:n,Q:D}[K]||String(K||"").toLowerCase().replace(/s$/,"")},u:function(K){return K===void 0}},Ce="en",et={};et[Ce]=le;var Xn="$isDayjsObject",sn=function(K){return K instanceof Qo||!(!K||!K[Xn])},Xo=function K(M,I,F){var W;if(!M)return Ce;if(typeof M=="string"){var te=M.toLowerCase();et[te]&&(W=te),I&&(et[te]=I,W=te);var ie=M.split("-");if(!W&&ie.length>1)return K(ie[0])}else{var xe=M.name;et[xe]=M,W=xe}return!F&&W&&(Ce=W),W||!F&&Ce},Be=function(K,M){if(sn(K))return K.clone();var I=typeof M=="object"?M:{};return I.date=K,I.args=arguments,new Qo(I)},me=be;me.l=Xo,me.i=sn,me.w=function(K,M){return Be(K,{locale:M.$L,utc:M.$u,x:M.$x,$offset:M.$offset})};var Qo=function(){function K(I){this.$L=Xo(I.locale,null,!0),this.parse(I),this.$x=this.$x||I.x||{},this[Xn]=!0}var M=K.prototype;return M.parse=function(I){this.$d=function(F){var W=F.date,te=F.utc;if(W===null)return new Date(NaN);if(me.u(W))return new Date;if(W instanceof Date)return new Date(W);if(typeof W=="string"&&!/Z$/i.test(W)){var ie=W.match(J);if(ie){var xe=ie[2]-1||0,Re=(ie[7]||"0").substring(0,3);return te?new Date(Date.UTC(ie[1],xe,ie[3]||1,ie[4]||0,ie[5]||0,ie[6]||0,Re)):new Date(ie[1],xe,ie[3]||1,ie[4]||0,ie[5]||0,ie[6]||0,Re)}}return new Date(W)}(I),this.init()},M.init=function(){var I=this.$d;this.$y=I.getFullYear(),this.$M=I.getMonth(),this.$D=I.getDate(),this.$W=I.getDay(),this.$H=I.getHours(),this.$m=I.getMinutes(),this.$s=I.getSeconds(),this.$ms=I.getMilliseconds()},M.$utils=function(){return me},M.isValid=function(){return this.$d.toString()!==se},M.isSame=function(I,F){var W=Be(I);return this.startOf(F)<=W&&W<=this.endOf(F)},M.isAfter=function(I,F){return Be(I)<this.startOf(F)},M.isBefore=function(I,F){return this.endOf(F)<Be(I)},M.$g=function(I,F,W){return me.u(I)?this[F]:this.set(W,I)},M.unix=function(){return Math.floor(this.valueOf()/1e3)},M.valueOf=function(){return this.$d.getTime()},M.startOf=function(I,F){var W=this,te=!!me.u(F)||F,ie=me.p(I),xe=function(cn,tt){var Ii=me.w(W.$u?Date.UTC(W.$y,tt,cn):new Date(W.$y,tt,cn),W);return te?Ii:Ii.endOf(h)},Re=function(cn,tt){return me.w(W.toDate()[cn].apply(W.toDate("s"),(te?[0,0,0,0]:[23,59,59,999]).slice(tt)),W)},ze=this.$W,Ze=this.$M,mt=this.$D,Qn="set"+(this.$u?"UTC":"");switch(ie){case B:return te?xe(1,0):xe(31,11);case _:return te?xe(1,Ze):xe(0,Ze+1);case x:var ln=this.$locale().weekStart||0,Pr=(ze<ln?ze+7:ze)-ln;return xe(te?mt-Pr:mt+(6-Pr),Ze);case h:case ne:return Re(Qn+"Hours",0);case p:return Re(Qn+"Minutes",1);case s:return Re(Qn+"Seconds",2);case a:return Re(Qn+"Milliseconds",3);default:return this.clone()}},M.endOf=function(I){return this.startOf(I,!1)},M.$set=function(I,F){var W,te=me.p(I),ie="set"+(this.$u?"UTC":""),xe=(W={},W[h]=ie+"Date",W[ne]=ie+"Date",W[_]=ie+"Month",W[B]=ie+"FullYear",W[p]=ie+"Hours",W[s]=ie+"Minutes",W[a]=ie+"Seconds",W[n]=ie+"Milliseconds",W)[te],Re=te===h?this.$D+(F-this.$W):F;if(te===_||te===B){var ze=this.clone().set(ne,1);ze.$d[xe](Re),ze.init(),this.$d=ze.set(ne,Math.min(this.$D,ze.daysInMonth())).$d}else xe&&this.$d[xe](Re);return this.init(),this},M.set=function(I,F){return this.clone().$set(I,F)},M.get=function(I){return this[me.p(I)]()},M.add=function(I,F){var W,te=this;I=Number(I);var ie=me.p(F),xe=function(Ze){var mt=Be(te);return me.w(mt.date(mt.date()+Math.round(Ze*I)),te)};if(ie===_)return this.set(_,this.$M+I);if(ie===B)return this.set(B,this.$y+I);if(ie===h)return xe(1);if(ie===x)return xe(7);var Re=(W={},W[s]=r,W[p]=o,W[a]=t,W)[ie]||1,ze=this.$d.getTime()+I*Re;return me.w(ze,this)},M.subtract=function(I,F){return this.add(-1*I,F)},M.format=function(I){var F=this,W=this.$locale();if(!this.isValid())return W.invalidDate||se;var te=I||"YYYY-MM-DDTHH:mm:ssZ",ie=me.z(this),xe=this.$H,Re=this.$m,ze=this.$M,Ze=W.weekdays,mt=W.months,Qn=W.meridiem,ln=function(tt,Ii,Dr,Jo){return tt&&(tt[Ii]||tt(F,te))||Dr[Ii].slice(0,Jo)},Pr=function(tt){return me.s(xe%12||12,tt,"0")},cn=Qn||function(tt,Ii,Dr){var Jo=tt<12?"AM":"PM";return Dr?Jo.toLowerCase():Jo};return te.replace(ve,function(tt,Ii){return Ii||function(Dr){switch(Dr){case"YY":return String(F.$y).slice(-2);case"YYYY":return me.s(F.$y,4,"0");case"M":return ze+1;case"MM":return me.s(ze+1,2,"0");case"MMM":return ln(W.monthsShort,ze,mt,3);case"MMMM":return ln(mt,ze);case"D":return F.$D;case"DD":return me.s(F.$D,2,"0");case"d":return String(F.$W);case"dd":return ln(W.weekdaysMin,F.$W,Ze,2);case"ddd":return ln(W.weekdaysShort,F.$W,Ze,3);case"dddd":return Ze[F.$W];case"H":return String(xe);case"HH":return me.s(xe,2,"0");case"h":return Pr(1);case"hh":return Pr(2);case"a":return cn(xe,Re,!0);case"A":return cn(xe,Re,!1);case"m":return String(Re);case"mm":return me.s(Re,2,"0");case"s":return String(F.$s);case"ss":return me.s(F.$s,2,"0");case"SSS":return me.s(F.$ms,3,"0");case"Z":return ie}return null}(tt)||ie.replace(":","")})},M.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},M.diff=function(I,F,W){var te,ie=this,xe=me.p(F),Re=Be(I),ze=(Re.utcOffset()-this.utcOffset())*r,Ze=this-Re,mt=function(){return me.m(ie,Re)};switch(xe){case B:te=mt()/12;break;case _:te=mt();break;case D:te=mt()/3;break;case x:te=(Ze-ze)/6048e5;break;case h:te=(Ze-ze)/864e5;break;case p:te=Ze/o;break;case s:te=Ze/r;break;case a:te=Ze/t;break;default:te=Ze}return W?te:me.a(te)},M.daysInMonth=function(){return this.endOf(_).$D},M.$locale=function(){return et[this.$L]},M.locale=function(I,F){if(!I)return this.$L;var W=this.clone(),te=Xo(I,F,!0);return te&&(W.$L=te),W},M.clone=function(){return me.w(this.$d,this)},M.toDate=function(){return new Date(this.valueOf())},M.toJSON=function(){return this.isValid()?this.toISOString():null},M.toISOString=function(){return this.$d.toISOString()},M.toString=function(){return this.$d.toUTCString()},K}(),Ml=Qo.prototype;return Be.prototype=Ml,[["$ms",n],["$s",a],["$m",s],["$H",p],["$W",h],["$M",_],["$y",B],["$D",ne]].forEach(function(K){Ml[K[1]]=function(M){return this.$g(M,K[0],K[1])}}),Be.extend=function(K,M){return K.$i||(K(M,Qo,Be),K.$i=!0),Be},Be.locale=Xo,Be.isDayjs=sn,Be.unix=function(K){return Be(1e3*K)},Be.en=et[Ce],Be.Ls=et,Be.p={},Be})})(Bc);var Ju=Bc.exports;const rr=Fa(Ju);var zc={exports:{}};(function(i,e){(function(t,r){i.exports=r()})(Ha,function(){return{name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var r=["th","st","nd","rd"],o=t%100;return"["+t+(r[(o-20)%10]||r[o]||r[0])+"]"}}})})(zc);var ed=zc.exports;const td=Fa(ed);var Vc={exports:{}};(function(i,e){(function(t,r){i.exports=r()})(Ha,function(){return function(t,r,o){t=t||{};var n=r.prototype,a={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function s(h,x,_,D){return n.fromToBase(h,x,_,D)}o.en.relativeTime=a,n.fromToBase=function(h,x,_,D,B){for(var ne,se,J,ve=_.$locale().relativeTime||a,le=t.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],ge=le.length,be=0;be<ge;be+=1){var Ce=le[be];Ce.d&&(ne=D?o(h).diff(_,Ce.d,!0):_.diff(h,Ce.d,!0));var et=(t.rounding||Math.round)(Math.abs(ne));if(J=ne>0,et<=Ce.r||!Ce.r){et<=1&&be>0&&(Ce=le[be-1]);var Xn=ve[Ce.l];B&&(et=B(""+et)),se=typeof Xn=="string"?Xn.replace("%d",et):Xn(et,x,Ce.l,J);break}}if(x)return se;var sn=J?ve.future:ve.past;return typeof sn=="function"?sn(se):sn.replace("%s",se)},n.to=function(h,x){return s(h,x,this,!0)},n.from=function(h,x){return s(h,x,this)};var p=function(h){return h.$u?o.utc():o()};n.toNow=function(h){return this.to(p(this),h)},n.fromNow=function(h){return this.from(p(this),h)}}})})(Vc);var id=Vc.exports;const nd=Fa(id);var Hc={exports:{}};(function(i,e){(function(t,r){i.exports=r()})(Ha,function(){return function(t,r,o){o.updateLocale=function(n,a){var s=o.Ls[n];if(s)return(a?Object.keys(a):[]).forEach(function(p){s[p]=a[p]}),s}}})})(Hc);var rd=Hc.exports;const od=Fa(rd);rr.extend(nd);rr.extend(od);const ad={...td,name:"en-web3-modal",relativeTime:{future:"in %s",past:"%s ago",s:"%d sec",m:"1 min",mm:"%d min",h:"1 hr",hh:"%d hrs",d:"1 d",dd:"%d d",M:"1 mo",MM:"%d mo",y:"1 yr",yy:"%d yr"}};rr.locale("en-web3-modal",ad);const ol={getYear(i=new Date().toISOString()){return rr(i).year()},getRelativeDateFromNow(i){return rr(i).locale("en-web3-modal").fromNow(!0)},formatDate(i,e="DD MMM"){return rr(i).format(e)}},Fc={caipNetworkIdToNumber(i){return i?Number(i.split(":")[1]):void 0},parseEvmChainId(i){return typeof i=="string"?this.caipNetworkIdToNumber(i):i}},ue={bigNumber(i){return new ea(i)},multiply(i,e){if(i===void 0||e===void 0)return ea(0);const t=new ea(i),r=new ea(e);return t.multipliedBy(r)},formatNumberToLocalString(i,e=2){return i===void 0?"0.00":typeof i=="number"?i.toLocaleString("en-US",{maximumFractionDigits:e,minimumFractionDigits:e}):parseFloat(i).toLocaleString("en-US",{maximumFractionDigits:e,minimumFractionDigits:e})}},sd={numericInputKeyDown(i,e,t){const r=["Backspace","Meta","Ctrl","a","A","c","C","x","X","v","V","ArrowLeft","ArrowRight","Tab"],o=i.metaKey||i.ctrlKey,n=i.key,a=n.toLocaleLowerCase(),s=a==="a",p=a==="c",h=a==="v",x=a==="x",_=n===",",D=n===".",B=n>="0"&&n<="9";!o&&(s||p||h||x)&&i.preventDefault(),e==="0"&&!_&&!D&&n==="0"&&i.preventDefault(),e==="0"&&B&&(t(n),i.preventDefault()),(_||D)&&(e||(t("0."),i.preventDefault()),(e!=null&&e.includes(".")||e!=null&&e.includes(","))&&i.preventDefault()),!B&&!r.includes(n)&&!D&&!_&&i.preventDefault()}},ld=[{constant:!0,inputs:[],name:"name",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_spender",type:"address"},{name:"_value",type:"uint256"}],name:"approve",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"totalSupply",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_from",type:"address"},{name:"_to",type:"address"},{name:"_value",type:"uint256"}],name:"transferFrom",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"decimals",outputs:[{name:"",type:"uint8"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"_owner",type:"address"}],name:"balanceOf",outputs:[{name:"balance",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"symbol",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_to",type:"address"},{name:"_value",type:"uint256"}],name:"transfer",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"_owner",type:"address"},{name:"_spender",type:"address"}],name:"allowance",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{payable:!0,stateMutability:"payable",type:"fallback"},{anonymous:!1,inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"spender",type:"address"},{indexed:!1,name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"value",type:"uint256"}],name:"Transfer",type:"event"}],al={URLS:{FAQ:"https://walletconnect.com/faq"}},Ee={WC_NAME_SUFFIX:".wcn.id",BLOCKCHAIN_API_RPC_URL:"https://rpc.walletconnect.org",PULSE_API_URL:"https://pulse.walletconnect.org",W3M_API_URL:"https://api.web3modal.org",CHAIN:{EVM:"evm",SOLANA:"solana"},CHAIN_NAME:{EVM:"Ethereum",SOLANA:"Solana"}};function Pi(i,e){return e==="light"?{"--w3m-accent":(i==null?void 0:i["--w3m-accent"])||"hsla(231, 100%, 70%, 1)","--w3m-background":"#fff"}:{"--w3m-accent":(i==null?void 0:i["--w3m-accent"])||"hsla(230, 100%, 67%, 1)","--w3m-background":"#121313"}}const fs="https://secure.walletconnect.org",Zc=[{label:"Coinbase",name:"coinbase",feeRange:"1-2%",url:""}],Ue={FOUR_MINUTES_MS:24e4,TEN_SEC_MS:1e4,ONE_SEC_MS:1e3,SECURE_SITE:fs,SECURE_SITE_DASHBOARD:`${fs}/dashboard`,SECURE_SITE_FAVICON:`${fs}/images/favicon.png`,RESTRICTED_TIMEZONES:["ASIA/SHANGHAI","ASIA/URUMQI","ASIA/CHONGQING","ASIA/HARBIN","ASIA/KASHGAR","ASIA/MACAU","ASIA/HONG_KONG","ASIA/MACAO","ASIA/BEIJING","ASIA/HARBIN"],WC_COINBASE_PAY_SDK_CHAINS:["ethereum","arbitrum","polygon","avalanche-c-chain","optimism","celo","base"],WC_COINBASE_PAY_SDK_FALLBACK_CHAIN:"ethereum",WC_COINBASE_PAY_SDK_CHAIN_NAME_MAP:{Ethereum:"ethereum","Arbitrum One":"arbitrum",Polygon:"polygon",Avalanche:"avalanche-c-chain","OP Mainnet":"optimism",Celo:"celo",Base:"base"},WC_COINBASE_ONRAMP_APP_ID:"bf18c88d-495a-463b-b249-0b9d3656cf5e",SWAP_SUGGESTED_TOKENS:["ETH","UNI","1INCH","AAVE","SOL","ADA","AVAX","DOT","LINK","NITRO","GAIA","MILK","TRX","NEAR","GNO","WBTC","DAI","WETH","USDC","USDT","ARB","BAL","BICO","CRV","ENS","MATIC","OP"],SWAP_POPULAR_TOKENS:["ETH","UNI","1INCH","AAVE","SOL","ADA","AVAX","DOT","LINK","NITRO","GAIA","MILK","TRX","NEAR","GNO","WBTC","DAI","WETH","USDC","USDT","ARB","BAL","BICO","CRV","ENS","MATIC","OP","METAL","DAI","CHAMP","WOLF","SALE","BAL","BUSD","MUST","BTCpx","ROUTE","HEX","WELT","amDAI","VSQ","VISION","AURUM","pSP","SNX","VC","LINK","CHP","amUSDT","SPHERE","FOX","GIDDY","GFC","OMEN","OX_OLD","DE","WNT"],SWAP_SUPPORTED_NETWORKS:["eip155:1","eip155:42161","eip155:10","eip155:324","eip155:8453","eip155:56","eip155:137","eip155:100","eip155:43114","eip155:250","eip155:8217","eip155:1313161554"],NATIVE_TOKEN_ADDRESS:"0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",CONVERT_SLIPPAGE_TOLERANCE:1},k={isMobile(){return typeof window<"u"?!!(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)):!1},checkCaipNetwork(i,e=""){return i==null?void 0:i.id.toLocaleLowerCase().includes(e.toLowerCase())},isAndroid(){const i=window.navigator.userAgent.toLowerCase();return k.isMobile()&&i.includes("android")},isIos(){const i=window.navigator.userAgent.toLowerCase();return k.isMobile()&&(i.includes("iphone")||i.includes("ipad"))},isClient(){return typeof window<"u"},isPairingExpired(i){return i?i-Date.now()<=Ue.TEN_SEC_MS:!0},isAllowedRetry(i){return Date.now()-i>=Ue.ONE_SEC_MS},copyToClopboard(i){navigator.clipboard.writeText(i)},getPairingExpiry(){return Date.now()+Ue.FOUR_MINUTES_MS},getNetworkId(i){return i==null?void 0:i.split(":")[1]},getPlainAddress(i){return i==null?void 0:i.split(":")[2]},async wait(i){return new Promise(e=>{setTimeout(e,i)})},debounce(i,e=500){let t;return(...r)=>{function o(){i(...r)}t&&clearTimeout(t),t=setTimeout(o,e)}},isHttpUrl(i){return i.startsWith("http://")||i.startsWith("https://")},formatNativeUrl(i,e){if(k.isHttpUrl(i))return this.formatUniversalUrl(i,e);let t=i;t.includes("://")||(t=i.replaceAll("/","").replaceAll(":",""),t=`${t}://`),t.endsWith("/")||(t=`${t}/`);const r=encodeURIComponent(e);return{redirect:`${t}wc?uri=${r}`,href:t}},formatUniversalUrl(i,e){if(!k.isHttpUrl(i))return this.formatNativeUrl(i,e);let t=i;t.endsWith("/")||(t=`${t}/`);const r=encodeURIComponent(e);return{redirect:`${t}wc?uri=${r}`,href:t}},openHref(i,e,t){window.open(i,e,t||"noreferrer noopener")},returnOpenHref(i,e,t){return window.open(i,e,t||"noreferrer noopener")},async preloadImage(i){const e=new Promise((t,r)=>{const o=new Image;o.onload=t,o.onerror=r,o.crossOrigin="anonymous",o.src=i});return Promise.race([e,k.wait(2e3)])},formatBalance(i,e){let t="0.000";if(typeof i=="string"){const r=Number(i);if(r){const o=Math.floor(r*1e3)/1e3;o&&(t=o.toString())}}return`${t}${e?` ${e}`:""}`},formatBalance2(i,e){var r;let t;if(i==="0")t="0";else if(typeof i=="string"){const o=Number(i);o&&(t=(r=o.toString().match(/^-?\d+(?:\.\d{0,3})?/u))==null?void 0:r[0])}return{value:t??"0",rest:t==="0"?"000":"",symbol:e}},getApiUrl(){return Ee.W3M_API_URL},getBlockchainApiUrl(){return Ee.BLOCKCHAIN_API_RPC_URL},getAnalyticsUrl(){return Ee.PULSE_API_URL},getUUID(){return crypto!=null&&crypto.randomUUID?crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu,i=>{const e=Math.random()*16|0;return(i==="x"?e:e&3|8).toString(16)})},parseError(i){var e,t;return typeof i=="string"?i:typeof((t=(e=i==null?void 0:i.issues)==null?void 0:e[0])==null?void 0:t.message)=="string"?i.issues[0].message:i instanceof Error?i.message:"Unknown error"},sortRequestedNetworks(i,e=[]){const t={};return e&&i&&(i.forEach((r,o)=>{t[r]=o}),e.sort((r,o)=>{const n=t[r.id],a=t[o.id];return n!==void 0&&a!==void 0?n-a:n!==void 0?-1:a!==void 0?1:0})),e},calculateBalance(i){let e=0;for(const t of i)e+=t.value??0;return e},formatTokenBalance(i){const e=i.toFixed(2),[t,r]=e.split(".");return{dollars:t,pennies:r}},isAddress(i){if(/^(?:0x)?[0-9a-f]{40}$/iu.test(i)){if(/^(?:0x)?[0-9a-f]{40}$/iu.test(i)||/^(?:0x)?[0-9A-F]{40}$/iu.test(i))return!0}else return!1;return!1},uniqueBy(i,e){const t=new Set;return i.filter(r=>{const o=r[e];return t.has(o)?!1:(t.add(o),!0)})}};async function Ur(...i){const e=await fetch(...i);if(!e.ok)throw new Error(`HTTP status code: ${e.status}`,{cause:e});return e}class Za{constructor({baseUrl:e,clientId:t}){this.baseUrl=e,this.clientId=t}async get({headers:e,signal:t,cache:r,...o}){const n=this.createUrl(o);return(await Ur(n,{method:"GET",headers:e,signal:t,cache:r})).json()}async getBlob({headers:e,signal:t,...r}){const o=this.createUrl(r);return(await Ur(o,{method:"GET",headers:e,signal:t})).blob()}async post({body:e,headers:t,signal:r,...o}){const n=this.createUrl(o);return(await Ur(n,{method:"POST",headers:t,body:e?JSON.stringify(e):void 0,signal:r})).json()}async put({body:e,headers:t,signal:r,...o}){const n=this.createUrl(o);return(await Ur(n,{method:"PUT",headers:t,body:e?JSON.stringify(e):void 0,signal:r})).json()}async delete({body:e,headers:t,signal:r,...o}){const n=this.createUrl(o);return(await Ur(n,{method:"DELETE",headers:t,body:e?JSON.stringify(e):void 0,signal:r})).json()}createUrl({path:e,params:t}){const r=new URL(e,this.baseUrl);return t&&Object.entries(t).forEach(([o,n])=>{n&&r.searchParams.append(o,n)}),this.clientId&&r.searchParams.append("clientId",this.clientId),r}}const ws="WALLETCONNECT_DEEPLINK_CHOICE",jl="@w3m/recent",gs="@w3m/connected_wallet_image_url",Ll="@w3m/connected_connector",Bl="@w3m/connected_social",cd="@w3m-storage/SOCIAL_USERNAME",oe={setWalletConnectDeepLink({href:i,name:e}){try{localStorage.setItem(ws,JSON.stringify({href:i,name:e}))}catch{console.info("Unable to set WalletConnect deep link")}},getWalletConnectDeepLink(){try{const i=localStorage.getItem(ws);if(i)return JSON.parse(i)}catch{console.info("Unable to get WalletConnect deep link")}},deleteWalletConnectDeepLink(){try{localStorage.removeItem(ws)}catch{console.info("Unable to delete WalletConnect deep link")}},setWeb3ModalRecent(i){try{const e=oe.getRecentWallets();e.find(r=>r.id===i.id)||(e.unshift(i),e.length>2&&e.pop(),localStorage.setItem(jl,JSON.stringify(e)))}catch{console.info("Unable to set Web3Modal recent")}},getRecentWallets(){try{const i=localStorage.getItem(jl);return i?JSON.parse(i):[]}catch{console.info("Unable to get Web3Modal recent")}return[]},setConnectedWalletImageUrl(i){try{localStorage.setItem(gs,i)}catch{console.info("Unable to set Connected Wallet Image Url")}},removeConnectedWalletImageUrl(){try{localStorage.removeItem(gs)}catch{console.info("Unable to remove Connected Wallet Image Url")}},getConnectedWalletImageUrl(){try{return localStorage.getItem(gs)}catch{console.info("Unable to set Connected Wallet Image Url")}},setConnectedConnector(i){try{localStorage.setItem(Ll,i)}catch{console.info("Unable to set Connected Connector")}},getConnectedConnector(){try{return localStorage.getItem(Ll)}catch{console.info("Unable to get Connected Connector")}},setConnectedSocialProvider(i){try{localStorage.setItem(Bl,i)}catch{console.info("Unable to set Connected Social Provider")}},getConnectedSocialProvider(){try{return localStorage.getItem(Bl)}catch{console.info("Unable to get Connected Social Provider")}},getConnectedSocialUsername(){try{return localStorage.getItem(cd)}catch{console.info("Unable to get Connected Social Username")}}},vt=$e({walletImages:{},networkImages:{},chainImages:{},connectorImages:{},tokenImages:{},currencyImages:{}}),Me={state:vt,subscribeNetworkImages(i){return Ye(vt.networkImages,()=>i(vt.networkImages))},subscribeKey(i,e){return at(vt,i,e)},subscribe(i){return Ye(vt,()=>i(vt))},setWalletImage(i,e){vt.walletImages[i]=e},setNetworkImage(i,e){vt.networkImages[i]=e},setChainImage(i,e){vt.chainImages[i]=e},setConnectorImage(i,e){vt.connectorImages[i]=e},setTokenImage(i,e){vt.tokenImages[i]=e},setCurrencyImage(i,e){vt.currencyImages[i]=e}},ui=$e({themeMode:"dark",themeVariables:{},w3mThemeVariables:void 0}),Ae={state:ui,subscribe(i){return Ye(ui,()=>i(ui))},setThemeMode(i){ui.themeMode=i;try{const e=P.getAuthConnector();if(e){const t=Ae.getSnapshot().themeVariables;e.provider.syncTheme({themeMode:i,themeVariables:t,w3mThemeVariables:Pi(t,i)})}}catch{console.info("Unable to sync theme to auth connector")}},setThemeVariables(i){ui.themeVariables={...ui.themeVariables,...i};try{const e=P.getAuthConnector();if(e){const t=Ae.getSnapshot().themeVariables;e.provider.syncTheme({themeVariables:t,w3mThemeVariables:Pi(ui.themeVariables,ui.themeMode)})}}catch{console.info("Unable to sync theme to auth connector")}},getSnapshot(){return Lc(ui)}},bt=$e({connectors:[]}),P={state:bt,subscribeKey(i,e){return at(bt,i,e)},setConnectors(i,e){e?(bt.connectors=[...bt.connectors,...i.map(t=>fn(t))],bt.connectors=this.mergeMultiChainConnectors(bt.connectors)):bt.connectors=i.map(t=>fn(t))},mergeMultiChainConnectors(i){const e=[];return i.forEach(t=>{const{name:r,chain:o,type:n}=t,a=e.findIndex(s=>s.name===r);if(a===-1)e.push({...t});else{const s=e[a];s&&((s==null?void 0:s.chain)===o||s.type===n?e.push({...t}):s.type==="MULTI_CHAIN"?e.push({...t}):e[a]={...s,type:"MULTI_CHAIN",providers:[s,t]})}}),e},addConnector(i){var e,t;if(bt.connectors.push(fn(i)),i.id==="w3mAuth"){const r=i,o=Lc(A.state),n=Ae.getSnapshot().themeMode,a=Ae.getSnapshot().themeVariables;(t=(e=r==null?void 0:r.provider)==null?void 0:e.syncDappData)==null||t.call(e,{metadata:o.metadata,sdkVersion:o.sdkVersion,projectId:o.projectId}),r.provider.syncTheme({themeMode:n,themeVariables:a,w3mThemeVariables:Pi(a,n)})}},getAuthConnector(){return bt.connectors.find(i=>i.type==="AUTH")},getAnnouncedConnectorRdns(){return bt.connectors.filter(i=>i.type==="ANNOUNCED").map(i=>{var e;return(e=i.info)==null?void 0:e.rdns})},getConnectors(){return bt.connectors},getConnector(i,e){return bt.connectors.find(t=>{var r;return t.explorerId===i||((r=t.info)==null?void 0:r.rdns)===e})}},Wr=$e({loading:!1,open:!1,selectedNetworkId:void 0,activeChain:void 0}),fi={state:Wr,subscribe(i){return Ye(Wr,()=>i(Wr))},set(i){Object.assign(Wr,{...Wr,...i})}},ud=k.getAnalyticsUrl(),dd=new Za({baseUrl:ud,clientId:null}),pd=["MODAL_CREATED"],Jn=$e({timestamp:Date.now(),data:{type:"track",event:"MODAL_CREATED"}}),R={state:Jn,subscribe(i){return Ye(Jn,()=>i(Jn))},_getApiHeaders(){const{projectId:i,sdkType:e,sdkVersion:t}=A.state;return{"x-project-id":i,"x-sdk-type":e,"x-sdk-version":t}},async _sendAnalyticsEvent(i){try{if(pd.includes(i.data.event)||typeof window>"u")return;await dd.post({path:"/e",headers:R._getApiHeaders(),body:{eventId:k.getUUID(),url:window.location.href,domain:window.location.hostname,timestamp:i.timestamp,props:i.data}})}catch{}},sendEvent(i){Jn.timestamp=Date.now(),Jn.data=i,A.state.enableAnalytics&&R._sendAnalyticsEvent(Jn)}},hd={isConnected:!1,currentTab:0,tokenBalance:[],smartAccountDeployed:!1,addressLabels:new Map,allAccounts:[]},fd={supportsAllNetworks:!0,isDefaultCaipNetwork:!1,smartAccountEnabledNetworks:[]},ce=$e({multiChainEnabled:!1,chains:Qu(),activeChain:void 0,activeCaipNetwork:void 0}),y={state:ce,subscribeKey(i,e){return at(ce,i,e)},subscribeChain(i){let e;const t=ce.activeChain;return t?Ye(ce.chains,()=>{const r=ce.chains.get(t);(!e||e!==r)&&(e=r,i(r))}):()=>{}},subscribeChainProp(i,e){let t;const r=ce.activeChain;return r?Ye(ce.chains,()=>{var n;const o=(n=ce.chains.get(r))==null?void 0:n[i];t!==o&&(t=o,e(o))}):()=>{}},initialize(i){var t;const e=(t=i==null?void 0:i[0])==null?void 0:t.chain;if(!e)throw new Error("Chain is required to initialize ChainController");ce.activeChain=e,i.forEach(r=>{ce.chains.set(r.chain,{chain:r.chain,connectionControllerClient:r.connectionControllerClient,networkControllerClient:r.networkControllerClient,accountState:hd,networkState:fd})})},setMultiChainEnabled(i){ce.multiChainEnabled=i},setChainNetworkData(i,e){if(!i)throw new Error("Chain is required to update chain network data");const t=ce.chains.get(i);t&&(t.networkState={...t.networkState,...e},ce.chains.set(i,t),T.replaceState(t.networkState))},setChainAccountData(i,e){if(!i)throw new Error("Chain is required to update chain account data");const t=ce.chains.get(i);t&&(t.accountState={...t.accountState,...e},ce.chains.set(i,t),m.replaceState(t.accountState))},setAccountProp(i,e,t){this.setChainAccountData(ce.multiChainEnabled?t:ce.activeChain,{[i]:e})},setActiveChain(i){var t,r,o;const e=i?ce.chains.get(i):void 0;e&&(ce.activeChain=e.chain,ce.activeCaipNetwork=(o=(r=(t=ce.chains.get(e.chain))==null?void 0:t.networkState)==null?void 0:r.requestedCaipNetworks)==null?void 0:o[0],fi.set({activeChain:i}))},setActiveConnector(i){i&&(ce.activeConnector=fn(i))},getNetworkControllerClient(){const i=ce.activeChain;if(!i)throw new Error("Chain is required to get network controller client");const e=ce.chains.get(i);if(!e)throw new Error("Chain adapter not found");if(!e.networkControllerClient)throw new Error("NetworkController client not set");return e.networkControllerClient},getConnectionControllerClient(){const i=ce.activeChain;if(!i)throw new Error("Chain is required to get connection controller client");const e=ce.chains.get(i);if(!e)throw new Error("Chain adapter not found");if(!e.connectionControllerClient)throw new Error("ConnectionController client not set");return e.connectionControllerClient},getAccountProp(i){var r;const e=(ce.multiChainEnabled,ce.activeChain);if(!e)return;const t=(r=ce.chains.get(e))==null?void 0:r.accountState;if(t)return t[i]},getNetworkProp(i){var r;const e=(ce.multiChainEnabled,ce.activeChain);if(!e)return;const t=(r=ce.chains.get(e))==null?void 0:r.networkState;if(t)return t[i]},resetAccount(i){const e=ce.multiChainEnabled?i:ce.activeChain;if(!e)throw new Error("Chain is required to set account prop");this.setChainAccountData(e,{isConnected:!1,smartAccountDeployed:!1,currentTab:0,caipAddress:void 0,address:void 0,balance:void 0,balanceSymbol:void 0,profileName:void 0,profileImage:void 0,addressExplorerUrl:void 0,tokenBalance:[],connectedWalletInfo:void 0,preferredAccountType:void 0,socialProvider:void 0,socialWindow:void 0,farcasterUrl:void 0})}},zl=$e({supportsAllNetworks:!0,isDefaultCaipNetwork:!1,smartAccountEnabledNetworks:[]}),T={state:zl,replaceState(i){Object.assign(zl,i)},subscribeKey(i,e){let t;return y.subscribeChainProp("networkState",r=>{if(r){const o=r[i];t!==o&&(t=o,e(o))}})},_getClient(){return y.getNetworkControllerClient()},initializeDefaultNetwork(){const i=this.getRequestedCaipNetworks();i.length>0&&this.setCaipNetwork(i[0])},setCaipNetwork(i){var t,r;const e=y.state.multiChainEnabled?i==null?void 0:i.chain:y.state.activeChain;if(!e)throw new Error("chain is required to set active network");if(!i)throw new Error("caipNetwork is required to set active network");y.state.activeCaipNetwork=i,y.state.activeChain=e,y.setChainNetworkData(e,{caipNetwork:i}),fi.set({activeChain:e,selectedNetworkId:i==null?void 0:i.id}),(r=(t=y.state.chains.get(e))==null?void 0:t.networkState)!=null&&r.allowUnsupportedChain||this.checkIfSupportedNetwork()||this.showUnsupportedChainUI()},setDefaultCaipNetwork(i,e){const t=y.state.multiChainEnabled?e:y.state.activeChain;if(!t)throw new Error("chain is required to set default network");y.state.activeCaipNetwork=i,y.state.activeChain=t,y.setChainNetworkData(t,{caipNetwork:i,isDefaultCaipNetwork:!0}),fi.set({selectedNetworkId:i==null?void 0:i.id,activeChain:e})},setRequestedCaipNetworks(i,e){y.setChainNetworkData(y.state.multiChainEnabled?e:y.state.activeChain,{requestedCaipNetworks:i})},setAllowUnsupportedChain(i,e){y.setChainNetworkData(e||y.state.activeChain,{allowUnsupportedChain:i})},setSmartAccountEnabledNetworks(i,e){y.setChainNetworkData(y.state.multiChainEnabled?e:y.state.activeChain,{smartAccountEnabledNetworks:i})},getRequestedCaipNetworks(i){let e;if(!y.state.activeChain)throw new Error("activeChain is required to get requested networks");if(i){const n=y.state.multiChainEnabled?i:y.state.activeChain;if(!n)throw new Error("chain is required to get requested networks");e=[n]}else e=y.state.multiChainEnabled?[...y.state.chains.keys()]:[y.state.activeChain];const t=[],r=[];return e.forEach(n=>{var a,s,p,h,x,_,D,B;(s=(a=y.state.chains.get(n))==null?void 0:a.networkState)!=null&&s.approvedCaipNetworkIds&&t.push(...((h=(p=y.state.chains.get(n))==null?void 0:p.networkState)==null?void 0:h.approvedCaipNetworkIds)||[]),(_=(x=y.state.chains.get(n))==null?void 0:x.networkState)!=null&&_.requestedCaipNetworks&&r.push(...((B=(D=y.state.chains.get(n))==null?void 0:D.networkState)==null?void 0:B.requestedCaipNetworks)||[])}),k.sortRequestedNetworks(t,r)},async switchActiveNetwork(i){await y.getNetworkControllerClient().switchCaipNetwork(i);const t=y.state.multiChainEnabled?i==null?void 0:i.chain:y.state.activeChain;if(!t)throw new Error("chain is required to switch active network");if(!i)throw new Error("network is required to switch active network");y.state.activeCaipNetwork=i,y.state.activeChain=t,y.setChainNetworkData(t,{caipNetwork:i}),fi.set({activeChain:t,selectedNetworkId:i.id}),i&&R.sendEvent({type:"track",event:"SWITCH_NETWORK",properties:{network:i.id}})},getApprovedCaipNetworkIds(i){var t,r;if(i){const o=y.state.multiChainEnabled?i:y.state.activeChain;if(!o)throw new Error("chain is required to get approved network IDs");return(r=(t=y.state.chains.get(o))==null?void 0:t.networkState)==null?void 0:r.approvedCaipNetworkIds}const e=[];return Object.values(y.state.chains).forEach(o=>{var n;o.networkState.approvedCaipNetworkIds&&e.push(...((n=o.networkState)==null?void 0:n.approvedCaipNetworkIds)||[])}),e},async setApprovedCaipNetworksData(i){const t=await y.getNetworkControllerClient().getApprovedCaipNetworksData(),r=y.state.multiChainEnabled?i:y.state.activeChain;if(!r)throw new Error("chain is required to set approved network data");y.setChainNetworkData(r,{approvedCaipNetworkIds:t==null?void 0:t.approvedCaipNetworkIds,supportsAllNetworks:(t==null?void 0:t.supportsAllNetworks)||!1})},checkIfSupportedNetwork(){var r,o;const i=y.state.activeChain;if(!i)return!1;const e=(o=(r=y.state.chains.get(i))==null?void 0:r.networkState)==null?void 0:o.caipNetwork,t=this.getRequestedCaipNetworks();return t==null?void 0:t.some(n=>n.id===(e==null?void 0:e.id))},checkIfSmartAccountEnabled(){var r,o,n;const i=Fc.caipNetworkIdToNumber((r=y.state.activeCaipNetwork)==null?void 0:r.id),e=y.state.activeChain;if(!e)throw new Error("activeChain is required to check if smart account is enabled");if(!i)return!1;const t=((n=(o=y.state.chains.get(e))==null?void 0:o.networkState)==null?void 0:n.smartAccountEnabledNetworks)||[];return!!(t!=null&&t.includes(i))},resetNetwork(){var e,t;const i=y.state.activeChain;if(!i)throw new Error("chain is required to reset network");(t=(e=y.state.chains.get(i))==null?void 0:e.networkState)!=null&&t.isDefaultCaipNetwork||y.setChainNetworkData(i,{caipNetwork:void 0}),y.setChainNetworkData(i,{approvedCaipNetworkIds:void 0,supportsAllNetworks:!0,smartAccountEnabledNetworks:[]})},getSupportsAllNetworks(){var e,t;const i=(y.state.multiChainEnabled,y.state.activeChain);if(!i)throw new Error("chain is required to check if network supports all networks");return(t=(e=y.state.chains.get(i))==null?void 0:e.networkState)==null?void 0:t.supportsAllNetworks},showUnsupportedChainUI(){setTimeout(()=>{q.open({view:"UnsupportedChain"})},300)}},wd=k.getApiUrl(),Ge=new Za({baseUrl:wd,clientId:null}),gd="40",Vl="4",md=20,Ve=$e({page:1,count:0,featured:[],recommended:[],wallets:[],search:[],isAnalyticsEnabled:!1,excludedRDNS:[]}),V={state:Ve,subscribeKey(i,e){return at(Ve,i,e)},_getApiHeaders(){const{projectId:i,sdkType:e,sdkVersion:t}=A.state;return{"x-project-id":i,"x-sdk-type":e,"x-sdk-version":t}},_filterOutExtensions(i){return A.state.isUniversalProvider?i.filter(e=>!!(e.mobile_link||e.desktop_link||e.webapp_link)):i},async _fetchWalletImage(i){const e=`${Ge.baseUrl}/getWalletImage/${i}`,t=await Ge.getBlob({path:e,headers:V._getApiHeaders()});Me.setWalletImage(i,URL.createObjectURL(t))},async _fetchNetworkImage(i){const e=`${Ge.baseUrl}/public/getAssetImage/${i}`,t=await Ge.getBlob({path:e,headers:V._getApiHeaders()});Me.setNetworkImage(i,URL.createObjectURL(t))},async _fetchConnectorImage(i){const e=`${Ge.baseUrl}/public/getAssetImage/${i}`,t=await Ge.getBlob({path:e,headers:V._getApiHeaders()});Me.setConnectorImage(i,URL.createObjectURL(t))},async _fetchCurrencyImage(i){const e=`${Ge.baseUrl}/public/getCurrencyImage/${i}`,t=await Ge.getBlob({path:e,headers:V._getApiHeaders()});Me.setCurrencyImage(i,URL.createObjectURL(t))},async _fetchTokenImage(i){const e=`${Ge.baseUrl}/public/getTokenImage/${i}`,t=await Ge.getBlob({path:e,headers:V._getApiHeaders()});Me.setTokenImage(i,URL.createObjectURL(t))},async fetchNetworkImages(){const i=T.getRequestedCaipNetworks(),e=i==null?void 0:i.map(({imageId:t})=>t).filter(Boolean);e&&await Promise.allSettled(e.map(t=>V._fetchNetworkImage(t)))},async fetchConnectorImages(){const{connectors:i}=P.state,e=i.map(({imageId:t})=>t).filter(Boolean);await Promise.allSettled(e.map(t=>V._fetchConnectorImage(t)))},async fetchCurrencyImages(i=[]){await Promise.allSettled(i.map(e=>V._fetchCurrencyImage(e)))},async fetchTokenImages(i=[]){await Promise.allSettled(i.map(e=>V._fetchTokenImage(e)))},async fetchFeaturedWallets(){const{featuredWalletIds:i}=A.state;if(i!=null&&i.length){const{data:e}=await Ge.get({path:"/getWallets",headers:V._getApiHeaders(),params:{page:"1",entries:i!=null&&i.length?String(i.length):Vl,include:i==null?void 0:i.join(",")}});e.sort((r,o)=>i.indexOf(r.id)-i.indexOf(o.id));const t=e.map(r=>r.image_id).filter(Boolean);await Promise.allSettled(t.map(r=>V._fetchWalletImage(r))),Ve.featured=e}},async fetchRecommendedWallets(){var h;const{includeWalletIds:i,excludeWalletIds:e,featuredWalletIds:t}=A.state,r=[...e??[],...t??[]].filter(Boolean),{data:o,count:n}=await Ge.get({path:"/getWallets",headers:V._getApiHeaders(),params:{page:"1",chains:(h=T.state.caipNetwork)==null?void 0:h.id,entries:Vl,include:i==null?void 0:i.join(","),exclude:r==null?void 0:r.join(",")}}),a=oe.getRecentWallets(),s=o.map(x=>x.image_id).filter(Boolean),p=a.map(x=>x.image_id).filter(Boolean);await Promise.allSettled([...s,...p].map(x=>V._fetchWalletImage(x))),Ve.recommended=o,Ve.count=n??0},async fetchWallets({page:i}){var p;const{includeWalletIds:e,excludeWalletIds:t,featuredWalletIds:r}=A.state,o=[...Ve.recommended.map(({id:h})=>h),...t??[],...r??[]].filter(Boolean),{data:n,count:a}=await Ge.get({path:"/getWallets",headers:V._getApiHeaders(),params:{page:String(i),entries:gd,chains:(p=T.state.caipNetwork)==null?void 0:p.id,include:e==null?void 0:e.join(","),exclude:o.join(",")}}),s=n.slice(0,md).map(h=>h.image_id).filter(Boolean);await Promise.allSettled(s.map(h=>V._fetchWalletImage(h))),Ve.wallets=k.uniqueBy([...Ve.wallets,...V._filterOutExtensions(n)],"id"),Ve.count=a>Ve.count?a:Ve.count,Ve.page=i},async searchWalletByIds({ids:i}){var t;const{data:e}=await Ge.get({path:"/getWallets",headers:V._getApiHeaders(),params:{page:"1",entries:String(i.length),chains:(t=T.state.caipNetwork)==null?void 0:t.id,include:i==null?void 0:i.join(",")}});e&&e.forEach(r=>{r!=null&&r.rdns&&Ve.excludedRDNS.push(r.rdns)})},async searchWallet({search:i}){var n;const{includeWalletIds:e,excludeWalletIds:t}=A.state;Ve.search=[];const{data:r}=await Ge.get({path:"/getWallets",headers:V._getApiHeaders(),params:{page:"1",entries:"100",search:i==null?void 0:i.trim(),chains:(n=T.state.caipNetwork)==null?void 0:n.id,include:e==null?void 0:e.join(","),exclude:t==null?void 0:t.join(",")}}),o=r.map(a=>a.image_id).filter(Boolean);await Promise.allSettled([...o.map(a=>V._fetchWalletImage(a)),k.wait(300)]),Ve.search=V._filterOutExtensions(r)},async reFetchWallets(){Ve.page=1,Ve.wallets=[],await V.fetchFeaturedWallets(),await V.fetchRecommendedWallets()},prefetch(){const i=[V.fetchFeaturedWallets(),V.fetchRecommendedWallets(),V.fetchNetworkImages(),V.fetchConnectorImages()];A.state.enableAnalytics===void 0&&i.push(V.fetchAnalyticsConfig()),Ve.prefetchPromise=Promise.race([Promise.allSettled(i),k.wait(3e3)])},async fetchAnalyticsConfig(){const{isAnalyticsEnabled:i}=await Ge.get({path:"/getAnalyticsConfig",headers:V._getApiHeaders()});A.setEnableAnalytics(i)}},Ie=$e({projectId:"",sdkType:"w3m",sdkVersion:"html-wagmi-undefined"}),A={state:Ie,subscribeKey(i,e){return at(Ie,i,e)},setProjectId(i){Ie.projectId=i},setAllWallets(i){Ie.allWallets=i},setIncludeWalletIds(i){Ie.includeWalletIds=i},setExcludeWalletIds(i){Ie.excludeWalletIds=i,i&&V.searchWalletByIds({ids:i})},setFeaturedWalletIds(i){Ie.featuredWalletIds=i},setTokens(i){Ie.tokens=i},setTermsConditionsUrl(i){Ie.termsConditionsUrl=i},setPrivacyPolicyUrl(i){Ie.privacyPolicyUrl=i},setCustomWallets(i){Ie.customWallets=i},setIsSiweEnabled(i){Ie.isSiweEnabled=i},setIsUniversalProvider(i){Ie.isUniversalProvider=i},setEnableAnalytics(i){Ie.enableAnalytics=i},setSdkVersion(i){Ie.sdkVersion=i},setMetadata(i){Ie.metadata=i},setOnrampEnabled(i){Ie.enableOnramp=i},setDisableAppend(i){Ie.disableAppend=i},setEIP6963Enabled(i){Ie.enableEIP6963=i},setHasMultipleAddresses(i){Ie.hasMultipleAddresses=i},setEnableSwaps(i){Ie.enableSwaps=i}},vd={purchaseCurrencies:[{id:"2b92315d-eab7-5bef-84fa-089a131333f5",name:"USD Coin",symbol:"USDC",networks:[{name:"ethereum-mainnet",display_name:"Ethereum",chain_id:"1",contract_address:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"},{name:"polygon-mainnet",display_name:"Polygon",chain_id:"137",contract_address:"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"}]},{id:"2b92315d-eab7-5bef-84fa-089a131333f5",name:"Ether",symbol:"ETH",networks:[{name:"ethereum-mainnet",display_name:"Ethereum",chain_id:"1",contract_address:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"},{name:"polygon-mainnet",display_name:"Polygon",chain_id:"137",contract_address:"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"}]}],paymentCurrencies:[{id:"USD",payment_method_limits:[{id:"card",min:"10.00",max:"7500.00"},{id:"ach_bank_account",min:"10.00",max:"25000.00"}]},{id:"EUR",payment_method_limits:[{id:"card",min:"10.00",max:"7500.00"},{id:"ach_bank_account",min:"10.00",max:"25000.00"}]}]},Gc=k.getBlockchainApiUrl(),De=$e({clientId:null,api:new Za({baseUrl:Gc,clientId:null})}),ke={state:De,fetchIdentity({address:i}){return De.api.get({path:`/v1/identity/${i}`,params:{projectId:A.state.projectId,sender:m.state.address}})},fetchTransactions({account:i,projectId:e,cursor:t,onramp:r,signal:o,cache:n}){return De.api.get({path:`/v1/account/${i}/history`,params:{projectId:e,cursor:t,onramp:r},signal:o,cache:n})},fetchSwapQuote({projectId:i,amount:e,userAddress:t,from:r,to:o,gasPrice:n}){return De.api.get({path:"/v1/convert/quotes",headers:{"Content-Type":"application/json"},params:{projectId:i,amount:e,userAddress:t,from:r,to:o,gasPrice:n}})},fetchSwapTokens({projectId:i,chainId:e}){return De.api.get({path:"/v1/convert/tokens",params:{projectId:i,chainId:e}})},fetchTokenPrice({projectId:i,addresses:e}){return De.api.post({path:"/v1/fungible/price",body:{projectId:i,currency:"usd",addresses:e},headers:{"Content-Type":"application/json"}})},fetchSwapAllowance({projectId:i,tokenAddress:e,userAddress:t}){const{sdkType:r,sdkVersion:o}=A.state;return De.api.get({path:"/v1/convert/allowance",params:{projectId:i,tokenAddress:e,userAddress:t},headers:{"Content-Type":"application/json","x-sdk-type":r,"x-sdk-version":o}})},fetchGasPrice({projectId:i,chainId:e}){const{sdkType:t,sdkVersion:r}=A.state;return De.api.get({path:"/v1/convert/gas-price",headers:{"Content-Type":"application/json","x-sdk-type":t,"x-sdk-version":r},params:{projectId:i,chainId:e}})},generateSwapCalldata({amount:i,from:e,projectId:t,to:r,userAddress:o}){return De.api.post({path:"/v1/convert/build-transaction",headers:{"Content-Type":"application/json"},body:{amount:i,eip155:{slippage:Ue.CONVERT_SLIPPAGE_TOLERANCE},from:e,projectId:t,to:r,userAddress:o}})},generateApproveCalldata({from:i,projectId:e,to:t,userAddress:r}){const{sdkType:o,sdkVersion:n}=A.state;return De.api.get({path:"/v1/convert/build-approve",headers:{"Content-Type":"application/json","x-sdk-type":o,"x-sdk-version":n},params:{projectId:e,userAddress:r,from:i,to:t}})},async getBalance(i,e,t){const{sdkType:r,sdkVersion:o}=A.state;return De.api.get({path:`/v1/account/${i}/balance`,headers:{"x-sdk-type":r,"x-sdk-version":o},params:{currency:"usd",projectId:A.state.projectId,chainId:e,forceUpdate:t}})},async lookupEnsName(i){return De.api.get({path:`/v1/profile/account/${i}${Ee.WC_NAME_SUFFIX}`,params:{projectId:A.state.projectId}})},async reverseLookupEnsName({address:i}){return De.api.get({path:`/v1/profile/reverse/${i}`,params:{sender:m.state.address,projectId:A.state.projectId}})},async getEnsNameSuggestions(i){return De.api.get({path:`/v1/profile/suggestions/${i}`,params:{projectId:A.state.projectId}})},async registerEnsName({coinType:i,address:e,message:t,signature:r}){return De.api.post({path:"/v1/profile/account",body:{coin_type:i,address:e,message:t,signature:r},headers:{"Content-Type":"application/json"}})},async generateOnRampURL({destinationWallets:i,partnerUserId:e,defaultNetwork:t,purchaseAmount:r,paymentAmount:o}){return(await De.api.post({path:"/v1/generators/onrampurl",params:{projectId:A.state.projectId},body:{destinationWallets:i,defaultNetwork:t,partnerUserId:e,defaultExperience:"buy",presetCryptoAmount:r,presetFiatAmount:o}})).url},async getOnrampOptions(){try{return await De.api.get({path:"/v1/onramp/options",params:{projectId:A.state.projectId}})}catch{return vd}},async getOnrampQuote({purchaseCurrency:i,paymentCurrency:e,amount:t,network:r}){try{return await De.api.post({path:"/v1/onramp/quote",params:{projectId:A.state.projectId},body:{purchaseCurrency:i,paymentCurrency:e,amount:t,network:r}})}catch{return{coinbaseFee:{amount:t,currency:e.id},networkFee:{amount:t,currency:e.id},paymentSubtotal:{amount:t,currency:e.id},paymentTotal:{amount:t,currency:e.id},purchaseAmount:{amount:t,currency:e.id},quoteId:"mocked-quote-id"}}},setClientId(i){De.clientId=i,De.api=new Za({baseUrl:Gc,clientId:i})}},xt=$e({message:"",variant:"success",open:!1}),z={state:xt,subscribeKey(i,e){return at(xt,i,e)},showLoading(i){xt.message=i,xt.variant="loading",xt.open=!0},showSuccess(i){xt.message=i,xt.variant="success",xt.open=!0},showError(i){const e=k.parseError(i);xt.message=e,xt.variant="error",xt.open=!0},hide(){xt.open=!1}};var Mc;typeof window<"u"&&(window.Buffer||(window.Buffer=Ku.Buffer),window.global||(window.global=window),window.process||(window.process={}),(Mc=window.process)!=null&&Mc.env||(window.process={env:{}}));const Di={APP_EVENT_KEY:"@w3m-app/",FRAME_EVENT_KEY:"@w3m-frame/",RPC_METHOD_KEY:"RPC_",STORAGE_KEY:"@w3m-storage/",SESSION_TOKEN_KEY:"SESSION_TOKEN_KEY",EMAIL_LOGIN_USED_KEY:"EMAIL_LOGIN_USED_KEY",LAST_USED_CHAIN_KEY:"LAST_USED_CHAIN_KEY",LAST_EMAIL_LOGIN_TIME:"LAST_EMAIL_LOGIN_TIME",EMAIL:"EMAIL",PREFERRED_ACCOUNT_TYPE:"PREFERRED_ACCOUNT_TYPE",SMART_ACCOUNT_ENABLED:"SMART_ACCOUNT_ENABLED",SMART_ACCOUNT_ENABLED_NETWORKS:"SMART_ACCOUNT_ENABLED_NETWORKS",SOCIAL_USERNAME:"SOCIAL_USERNAME",SOCIAL:"@w3m/connected_social",APP_SWITCH_NETWORK:"@w3m-app/SWITCH_NETWORK",APP_CONNECT_EMAIL:"@w3m-app/CONNECT_EMAIL",APP_CONNECT_DEVICE:"@w3m-app/CONNECT_DEVICE",APP_CONNECT_OTP:"@w3m-app/CONNECT_OTP",APP_CONNECT_SOCIAL:"@w3m-app/CONNECT_SOCIAL",APP_GET_SOCIAL_REDIRECT_URI:"@w3m-app/GET_SOCIAL_REDIRECT_URI",APP_GET_USER:"@w3m-app/GET_USER",APP_SIGN_OUT:"@w3m-app/SIGN_OUT",APP_IS_CONNECTED:"@w3m-app/IS_CONNECTED",APP_GET_CHAIN_ID:"@w3m-app/GET_CHAIN_ID",APP_RPC_REQUEST:"@w3m-app/RPC_REQUEST",APP_UPDATE_EMAIL:"@w3m-app/UPDATE_EMAIL",APP_UPDATE_EMAIL_PRIMARY_OTP:"@w3m-app/UPDATE_EMAIL_PRIMARY_OTP",APP_UPDATE_EMAIL_SECONDARY_OTP:"@w3m-app/UPDATE_EMAIL_SECONDARY_OTP",APP_AWAIT_UPDATE_EMAIL:"@w3m-app/AWAIT_UPDATE_EMAIL",APP_SYNC_THEME:"@w3m-app/SYNC_THEME",APP_SYNC_DAPP_DATA:"@w3m-app/SYNC_DAPP_DATA",APP_GET_SMART_ACCOUNT_ENABLED_NETWORKS:"@w3m-app/GET_SMART_ACCOUNT_ENABLED_NETWORKS",APP_INIT_SMART_ACCOUNT:"@w3m-app/INIT_SMART_ACCOUNT",APP_SET_PREFERRED_ACCOUNT:"@w3m-app/SET_PREFERRED_ACCOUNT",APP_CONNECT_FARCASTER:"@w3m-app/CONNECT_FARCASTER",APP_GET_FARCASTER_URI:"@w3m-app/GET_FARCASTER_URI",FRAME_SWITCH_NETWORK_ERROR:"@w3m-frame/SWITCH_NETWORK_ERROR",FRAME_SWITCH_NETWORK_SUCCESS:"@w3m-frame/SWITCH_NETWORK_SUCCESS",FRAME_CONNECT_EMAIL_ERROR:"@w3m-frame/CONNECT_EMAIL_ERROR",FRAME_CONNECT_EMAIL_SUCCESS:"@w3m-frame/CONNECT_EMAIL_SUCCESS",FRAME_CONNECT_DEVICE_ERROR:"@w3m-frame/CONNECT_DEVICE_ERROR",FRAME_CONNECT_DEVICE_SUCCESS:"@w3m-frame/CONNECT_DEVICE_SUCCESS",FRAME_CONNECT_OTP_SUCCESS:"@w3m-frame/CONNECT_OTP_SUCCESS",FRAME_CONNECT_OTP_ERROR:"@w3m-frame/CONNECT_OTP_ERROR",FRAME_CONNECT_SOCIAL_SUCCESS:"@w3m-frame/CONNECT_SOCIAL_SUCCESS",FRAME_CONNECT_SOCIAL_ERROR:"@w3m-frame/CONNECT_SOCIAL_ERROR",FRAME_CONNECT_FARCASTER_SUCCESS:"@w3m-frame/CONNECT_FARCASTER_SUCCESS",FRAME_CONNECT_FARCASTER_ERROR:"@w3m-frame/CONNECT_FARCASTER_ERROR",FRAME_GET_FARCASTER_URI_SUCCESS:"@w3m-frame/GET_FARCASTER_URI_SUCCESS",FRAME_GET_FARCASTER_URI_ERROR:"@w3m-frame/GET_FARCASTER_URI_ERROR",FRAME_GET_SOCIAL_REDIRECT_URI_SUCCESS:"@w3m-frame/GET_SOCIAL_REDIRECT_URI_SUCCESS",FRAME_GET_SOCIAL_REDIRECT_URI_ERROR:"@w3m-frame/GET_SOCIAL_REDIRECT_URI_ERROR",FRAME_GET_USER_SUCCESS:"@w3m-frame/GET_USER_SUCCESS",FRAME_GET_USER_ERROR:"@w3m-frame/GET_USER_ERROR",FRAME_SIGN_OUT_SUCCESS:"@w3m-frame/SIGN_OUT_SUCCESS",FRAME_SIGN_OUT_ERROR:"@w3m-frame/SIGN_OUT_ERROR",FRAME_IS_CONNECTED_SUCCESS:"@w3m-frame/IS_CONNECTED_SUCCESS",FRAME_IS_CONNECTED_ERROR:"@w3m-frame/IS_CONNECTED_ERROR",FRAME_GET_CHAIN_ID_SUCCESS:"@w3m-frame/GET_CHAIN_ID_SUCCESS",FRAME_GET_CHAIN_ID_ERROR:"@w3m-frame/GET_CHAIN_ID_ERROR",FRAME_RPC_REQUEST_SUCCESS:"@w3m-frame/RPC_REQUEST_SUCCESS",FRAME_RPC_REQUEST_ERROR:"@w3m-frame/RPC_REQUEST_ERROR",FRAME_SESSION_UPDATE:"@w3m-frame/SESSION_UPDATE",FRAME_UPDATE_EMAIL_SUCCESS:"@w3m-frame/UPDATE_EMAIL_SUCCESS",FRAME_UPDATE_EMAIL_ERROR:"@w3m-frame/UPDATE_EMAIL_ERROR",FRAME_UPDATE_EMAIL_PRIMARY_OTP_SUCCESS:"@w3m-frame/UPDATE_EMAIL_PRIMARY_OTP_SUCCESS",FRAME_UPDATE_EMAIL_PRIMARY_OTP_ERROR:"@w3m-frame/UPDATE_EMAIL_PRIMARY_OTP_ERROR",FRAME_UPDATE_EMAIL_SECONDARY_OTP_SUCCESS:"@w3m-frame/UPDATE_EMAIL_SECONDARY_OTP_SUCCESS",FRAME_UPDATE_EMAIL_SECONDARY_OTP_ERROR:"@w3m-frame/UPDATE_EMAIL_SECONDARY_OTP_ERROR",FRAME_SYNC_THEME_SUCCESS:"@w3m-frame/SYNC_THEME_SUCCESS",FRAME_SYNC_THEME_ERROR:"@w3m-frame/SYNC_THEME_ERROR",FRAME_SYNC_DAPP_DATA_SUCCESS:"@w3m-frame/SYNC_DAPP_DATA_SUCCESS",FRAME_SYNC_DAPP_DATA_ERROR:"@w3m-frame/SYNC_DAPP_DATA_ERROR",FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS:"@w3m-frame/GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS",FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR:"@w3m-frame/GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR",FRAME_INIT_SMART_ACCOUNT_SUCCESS:"@w3m-frame/INIT_SMART_ACCOUNT_SUCCESS",FRAME_INIT_SMART_ACCOUNT_ERROR:"@w3m-frame/INIT_SMART_ACCOUNT_ERROR",FRAME_SET_PREFERRED_ACCOUNT_SUCCESS:"@w3m-frame/SET_PREFERRED_ACCOUNT_SUCCESS",FRAME_SET_PREFERRED_ACCOUNT_ERROR:"@w3m-frame/SET_PREFERRED_ACCOUNT_ERROR",RPC_RESPONSE_TYPE_ERROR:"RPC_RESPONSE_ERROR",RPC_RESPONSE_TYPE_TX:"RPC_RESPONSE_TRANSACTION_HASH",RPC_RESPONSE_TYPE_OBJECT:"RPC_RESPONSE_OBJECT"},ae={SAFE_RPC_METHODS:["eth_accounts","eth_blockNumber","eth_call","eth_chainId","eth_estimateGas","eth_feeHistory","eth_gasPrice","eth_getAccount","eth_getBalance","eth_getBlockByHash","eth_getBlockByNumber","eth_getBlockReceipts","eth_getBlockTransactionCountByHash","eth_getBlockTransactionCountByNumber","eth_getCode","eth_getFilterChanges","eth_getFilterLogs","eth_getLogs","eth_getProof","eth_getStorageAt","eth_getTransactionByBlockHashAndIndex","eth_getTransactionByBlockNumberAndIndex","eth_getTransactionByHash","eth_getTransactionCount","eth_getTransactionReceipt","eth_getUncleCountByBlockHash","eth_getUncleCountByBlockNumber","eth_maxPriorityFeePerGas","eth_newBlockFilter","eth_newFilter","eth_newPendingTransactionFilter","eth_sendRawTransaction","eth_syncing","eth_uninstallFilter","wallet_getCapabilities","wallet_getCallsStatus"],NOT_SAFE_RPC_METHODS:["personal_sign","eth_signTypedData_v4","eth_sendTransaction","wallet_sendCalls","wallet_grantPermissions"],GET_CHAIN_ID:"eth_chainId",RPC_METHOD_NOT_ALLOWED_MESSAGE:"Requested RPC call is not allowed",RPC_METHOD_NOT_ALLOWED_UI_MESSAGE:"Action not allowed",ACCOUNT_TYPES:{EOA:"eoa",SMART_ACCOUNT:"smartAccount"}};var de;(function(i){i.assertEqual=o=>o;function e(o){}i.assertIs=e;function t(o){throw new Error}i.assertNever=t,i.arrayToEnum=o=>{const n={};for(const a of o)n[a]=a;return n},i.getValidEnumValues=o=>{const n=i.objectKeys(o).filter(s=>typeof o[o[s]]!="number"),a={};for(const s of n)a[s]=o[s];return i.objectValues(a)},i.objectValues=o=>i.objectKeys(o).map(function(n){return o[n]}),i.objectKeys=typeof Object.keys=="function"?o=>Object.keys(o):o=>{const n=[];for(const a in o)Object.prototype.hasOwnProperty.call(o,a)&&n.push(a);return n},i.find=(o,n)=>{for(const a of o)if(n(a))return a},i.isInteger=typeof Number.isInteger=="function"?o=>Number.isInteger(o):o=>typeof o=="number"&&isFinite(o)&&Math.floor(o)===o;function r(o,n=" | "){return o.map(a=>typeof a=="string"?`'${a}'`:a).join(n)}i.joinValues=r,i.jsonStringifyReplacer=(o,n)=>typeof n=="bigint"?n.toString():n})(de||(de={}));var As;(function(i){i.mergeShapes=(e,t)=>({...e,...t})})(As||(As={}));const N=de.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),Oi=i=>{switch(typeof i){case"undefined":return N.undefined;case"string":return N.string;case"number":return isNaN(i)?N.nan:N.number;case"boolean":return N.boolean;case"function":return N.function;case"bigint":return N.bigint;case"symbol":return N.symbol;case"object":return Array.isArray(i)?N.array:i===null?N.null:i.then&&typeof i.then=="function"&&i.catch&&typeof i.catch=="function"?N.promise:typeof Map<"u"&&i instanceof Map?N.map:typeof Set<"u"&&i instanceof Set?N.set:typeof Date<"u"&&i instanceof Date?N.date:N.object;default:return N.unknown}},S=de.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]),bd=i=>JSON.stringify(i,null,2).replace(/"([^"]+)":/g,"$1:");class Ot extends Error{constructor(e){super(),this.issues=[],this.addIssue=r=>{this.issues=[...this.issues,r]},this.addIssues=(r=[])=>{this.issues=[...this.issues,...r]};const t=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,t):this.__proto__=t,this.name="ZodError",this.issues=e}get errors(){return this.issues}format(e){const t=e||function(n){return n.message},r={_errors:[]},o=n=>{for(const a of n.issues)if(a.code==="invalid_union")a.unionErrors.map(o);else if(a.code==="invalid_return_type")o(a.returnTypeError);else if(a.code==="invalid_arguments")o(a.argumentsError);else if(a.path.length===0)r._errors.push(t(a));else{let s=r,p=0;for(;p<a.path.length;){const h=a.path[p];p===a.path.length-1?(s[h]=s[h]||{_errors:[]},s[h]._errors.push(t(a))):s[h]=s[h]||{_errors:[]},s=s[h],p++}}};return o(this),r}toString(){return this.message}get message(){return JSON.stringify(this.issues,de.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(e=t=>t.message){const t={},r=[];for(const o of this.issues)o.path.length>0?(t[o.path[0]]=t[o.path[0]]||[],t[o.path[0]].push(e(o))):r.push(e(o));return{formErrors:r,fieldErrors:t}}get formErrors(){return this.flatten()}}Ot.create=i=>new Ot(i);const Fr=(i,e)=>{let t;switch(i.code){case S.invalid_type:i.received===N.undefined?t="Required":t=`Expected ${i.expected}, received ${i.received}`;break;case S.invalid_literal:t=`Invalid literal value, expected ${JSON.stringify(i.expected,de.jsonStringifyReplacer)}`;break;case S.unrecognized_keys:t=`Unrecognized key(s) in object: ${de.joinValues(i.keys,", ")}`;break;case S.invalid_union:t="Invalid input";break;case S.invalid_union_discriminator:t=`Invalid discriminator value. Expected ${de.joinValues(i.options)}`;break;case S.invalid_enum_value:t=`Invalid enum value. Expected ${de.joinValues(i.options)}, received '${i.received}'`;break;case S.invalid_arguments:t="Invalid function arguments";break;case S.invalid_return_type:t="Invalid function return type";break;case S.invalid_date:t="Invalid date";break;case S.invalid_string:typeof i.validation=="object"?"includes"in i.validation?(t=`Invalid input: must include "${i.validation.includes}"`,typeof i.validation.position=="number"&&(t=`${t} at one or more positions greater than or equal to ${i.validation.position}`)):"startsWith"in i.validation?t=`Invalid input: must start with "${i.validation.startsWith}"`:"endsWith"in i.validation?t=`Invalid input: must end with "${i.validation.endsWith}"`:de.assertNever(i.validation):i.validation!=="regex"?t=`Invalid ${i.validation}`:t="Invalid";break;case S.too_small:i.type==="array"?t=`Array must contain ${i.exact?"exactly":i.inclusive?"at least":"more than"} ${i.minimum} element(s)`:i.type==="string"?t=`String must contain ${i.exact?"exactly":i.inclusive?"at least":"over"} ${i.minimum} character(s)`:i.type==="number"?t=`Number must be ${i.exact?"exactly equal to ":i.inclusive?"greater than or equal to ":"greater than "}${i.minimum}`:i.type==="date"?t=`Date must be ${i.exact?"exactly equal to ":i.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(i.minimum))}`:t="Invalid input";break;case S.too_big:i.type==="array"?t=`Array must contain ${i.exact?"exactly":i.inclusive?"at most":"less than"} ${i.maximum} element(s)`:i.type==="string"?t=`String must contain ${i.exact?"exactly":i.inclusive?"at most":"under"} ${i.maximum} character(s)`:i.type==="number"?t=`Number must be ${i.exact?"exactly":i.inclusive?"less than or equal to":"less than"} ${i.maximum}`:i.type==="bigint"?t=`BigInt must be ${i.exact?"exactly":i.inclusive?"less than or equal to":"less than"} ${i.maximum}`:i.type==="date"?t=`Date must be ${i.exact?"exactly":i.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(i.maximum))}`:t="Invalid input";break;case S.custom:t="Invalid input";break;case S.invalid_intersection_types:t="Intersection results could not be merged";break;case S.not_multiple_of:t=`Number must be a multiple of ${i.multipleOf}`;break;case S.not_finite:t="Number must be finite";break;default:t=e.defaultError,de.assertNever(i)}return{message:t}};let qc=Fr;function xd(i){qc=i}function aa(){return qc}const sa=i=>{const{data:e,path:t,errorMaps:r,issueData:o}=i,n=[...t,...o.path||[]],a={...o,path:n};let s="";const p=r.filter(h=>!!h).slice().reverse();for(const h of p)s=h(a,{data:e,defaultError:s}).message;return{...o,path:n,message:o.message||s}},yd=[];function U(i,e){const t=sa({issueData:e,data:i.data,path:i.path,errorMaps:[i.common.contextualErrorMap,i.schemaErrorMap,aa(),Fr].filter(r=>!!r)});i.common.issues.push(t)}class qe{constructor(){this.value="valid"}dirty(){this.value==="valid"&&(this.value="dirty")}abort(){this.value!=="aborted"&&(this.value="aborted")}static mergeArray(e,t){const r=[];for(const o of t){if(o.status==="aborted")return X;o.status==="dirty"&&e.dirty(),r.push(o.value)}return{status:e.value,value:r}}static async mergeObjectAsync(e,t){const r=[];for(const o of t)r.push({key:await o.key,value:await o.value});return qe.mergeObjectSync(e,r)}static mergeObjectSync(e,t){const r={};for(const o of t){const{key:n,value:a}=o;if(n.status==="aborted"||a.status==="aborted")return X;n.status==="dirty"&&e.dirty(),a.status==="dirty"&&e.dirty(),n.value!=="__proto__"&&(typeof a.value<"u"||o.alwaysSet)&&(r[n.value]=a.value)}return{status:e.value,value:r}}}const X=Object.freeze({status:"aborted"}),Yc=i=>({status:"dirty",value:i}),Ke=i=>({status:"valid",value:i}),Es=i=>i.status==="aborted",$s=i=>i.status==="dirty",Zr=i=>i.status==="valid",la=i=>typeof Promise<"u"&&i instanceof Promise;var Z;(function(i){i.errToObj=e=>typeof e=="string"?{message:e}:e||{},i.toString=e=>typeof e=="string"?e:e==null?void 0:e.message})(Z||(Z={}));class Zt{constructor(e,t,r,o){this._cachedPath=[],this.parent=e,this.data=t,this._path=r,this._key=o}get path(){return this._cachedPath.length||(this._key instanceof Array?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}}const Hl=(i,e)=>{if(Zr(e))return{success:!0,data:e.value};if(!i.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;const t=new Ot(i.common.issues);return this._error=t,this._error}}};function ee(i){if(!i)return{};const{errorMap:e,invalid_type_error:t,required_error:r,description:o}=i;if(e&&(t||r))throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return e?{errorMap:e,description:o}:{errorMap:(a,s)=>a.code!=="invalid_type"?{message:s.defaultError}:typeof s.data>"u"?{message:r??s.defaultError}:{message:t??s.defaultError},description:o}}class re{constructor(e){this.spa=this.safeParseAsync,this._def=e,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.readonly=this.readonly.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this)}get description(){return this._def.description}_getType(e){return Oi(e.data)}_getOrReturnCtx(e,t){return t||{common:e.parent.common,data:e.data,parsedType:Oi(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}_processInputParams(e){return{status:new qe,ctx:{common:e.parent.common,data:e.data,parsedType:Oi(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}}_parseSync(e){const t=this._parse(e);if(la(t))throw new Error("Synchronous parse encountered promise.");return t}_parseAsync(e){const t=this._parse(e);return Promise.resolve(t)}parse(e,t){const r=this.safeParse(e,t);if(r.success)return r.data;throw r.error}safeParse(e,t){var r;const o={common:{issues:[],async:(r=t==null?void 0:t.async)!==null&&r!==void 0?r:!1,contextualErrorMap:t==null?void 0:t.errorMap},path:(t==null?void 0:t.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:Oi(e)},n=this._parseSync({data:e,path:o.path,parent:o});return Hl(o,n)}async parseAsync(e,t){const r=await this.safeParseAsync(e,t);if(r.success)return r.data;throw r.error}async safeParseAsync(e,t){const r={common:{issues:[],contextualErrorMap:t==null?void 0:t.errorMap,async:!0},path:(t==null?void 0:t.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:Oi(e)},o=this._parse({data:e,path:r.path,parent:r}),n=await(la(o)?o:Promise.resolve(o));return Hl(r,n)}refine(e,t){const r=o=>typeof t=="string"||typeof t>"u"?{message:t}:typeof t=="function"?t(o):t;return this._refinement((o,n)=>{const a=e(o),s=()=>n.addIssue({code:S.custom,...r(o)});return typeof Promise<"u"&&a instanceof Promise?a.then(p=>p?!0:(s(),!1)):a?!0:(s(),!1)})}refinement(e,t){return this._refinement((r,o)=>e(r)?!0:(o.addIssue(typeof t=="function"?t(r,o):t),!1))}_refinement(e){return new Pt({schema:this,typeName:Y.ZodEffects,effect:{type:"refinement",refinement:e}})}superRefine(e){return this._refinement(e)}optional(){return wi.create(this,this._def)}nullable(){return vn.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return Nt.create(this,this._def)}promise(){return cr.create(this,this._def)}or(e){return Kr.create([this,e],this._def)}and(e){return Xr.create(this,e,this._def)}transform(e){return new Pt({...ee(this._def),schema:this,typeName:Y.ZodEffects,effect:{type:"transform",transform:e}})}default(e){const t=typeof e=="function"?e:()=>e;return new io({...ee(this._def),innerType:this,defaultValue:t,typeName:Y.ZodDefault})}brand(){return new Xc({typeName:Y.ZodBranded,type:this,...ee(this._def)})}catch(e){const t=typeof e=="function"?e:()=>e;return new pa({...ee(this._def),innerType:this,catchValue:t,typeName:Y.ZodCatch})}describe(e){const t=this.constructor;return new t({...this._def,description:e})}pipe(e){return Ro.create(this,e)}readonly(){return fa.create(this)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}}const Cd=/^c[^\s-]{8,}$/i,_d=/^[a-z][a-z0-9]*$/,Td=/^[0-9A-HJKMNP-TV-Z]{26}$/,kd=/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,Sd=/^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,Ad="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";let ms;const Ed=/^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,$d=/^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,Rd=i=>i.precision?i.offset?new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${i.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`):new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${i.precision}}Z$`):i.precision===0?i.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$"):i.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");function Id(i,e){return!!((e==="v4"||!e)&&Ed.test(i)||(e==="v6"||!e)&&$d.test(i))}class It extends re{_parse(e){if(this._def.coerce&&(e.data=String(e.data)),this._getType(e)!==N.string){const n=this._getOrReturnCtx(e);return U(n,{code:S.invalid_type,expected:N.string,received:n.parsedType}),X}const r=new qe;let o;for(const n of this._def.checks)if(n.kind==="min")e.data.length<n.value&&(o=this._getOrReturnCtx(e,o),U(o,{code:S.too_small,minimum:n.value,type:"string",inclusive:!0,exact:!1,message:n.message}),r.dirty());else if(n.kind==="max")e.data.length>n.value&&(o=this._getOrReturnCtx(e,o),U(o,{code:S.too_big,maximum:n.value,type:"string",inclusive:!0,exact:!1,message:n.message}),r.dirty());else if(n.kind==="length"){const a=e.data.length>n.value,s=e.data.length<n.value;(a||s)&&(o=this._getOrReturnCtx(e,o),a?U(o,{code:S.too_big,maximum:n.value,type:"string",inclusive:!0,exact:!0,message:n.message}):s&&U(o,{code:S.too_small,minimum:n.value,type:"string",inclusive:!0,exact:!0,message:n.message}),r.dirty())}else if(n.kind==="email")Sd.test(e.data)||(o=this._getOrReturnCtx(e,o),U(o,{validation:"email",code:S.invalid_string,message:n.message}),r.dirty());else if(n.kind==="emoji")ms||(ms=new RegExp(Ad,"u")),ms.test(e.data)||(o=this._getOrReturnCtx(e,o),U(o,{validation:"emoji",code:S.invalid_string,message:n.message}),r.dirty());else if(n.kind==="uuid")kd.test(e.data)||(o=this._getOrReturnCtx(e,o),U(o,{validation:"uuid",code:S.invalid_string,message:n.message}),r.dirty());else if(n.kind==="cuid")Cd.test(e.data)||(o=this._getOrReturnCtx(e,o),U(o,{validation:"cuid",code:S.invalid_string,message:n.message}),r.dirty());else if(n.kind==="cuid2")_d.test(e.data)||(o=this._getOrReturnCtx(e,o),U(o,{validation:"cuid2",code:S.invalid_string,message:n.message}),r.dirty());else if(n.kind==="ulid")Td.test(e.data)||(o=this._getOrReturnCtx(e,o),U(o,{validation:"ulid",code:S.invalid_string,message:n.message}),r.dirty());else if(n.kind==="url")try{new URL(e.data)}catch{o=this._getOrReturnCtx(e,o),U(o,{validation:"url",code:S.invalid_string,message:n.message}),r.dirty()}else n.kind==="regex"?(n.regex.lastIndex=0,n.regex.test(e.data)||(o=this._getOrReturnCtx(e,o),U(o,{validation:"regex",code:S.invalid_string,message:n.message}),r.dirty())):n.kind==="trim"?e.data=e.data.trim():n.kind==="includes"?e.data.includes(n.value,n.position)||(o=this._getOrReturnCtx(e,o),U(o,{code:S.invalid_string,validation:{includes:n.value,position:n.position},message:n.message}),r.dirty()):n.kind==="toLowerCase"?e.data=e.data.toLowerCase():n.kind==="toUpperCase"?e.data=e.data.toUpperCase():n.kind==="startsWith"?e.data.startsWith(n.value)||(o=this._getOrReturnCtx(e,o),U(o,{code:S.invalid_string,validation:{startsWith:n.value},message:n.message}),r.dirty()):n.kind==="endsWith"?e.data.endsWith(n.value)||(o=this._getOrReturnCtx(e,o),U(o,{code:S.invalid_string,validation:{endsWith:n.value},message:n.message}),r.dirty()):n.kind==="datetime"?Rd(n).test(e.data)||(o=this._getOrReturnCtx(e,o),U(o,{code:S.invalid_string,validation:"datetime",message:n.message}),r.dirty()):n.kind==="ip"?Id(e.data,n.version)||(o=this._getOrReturnCtx(e,o),U(o,{validation:"ip",code:S.invalid_string,message:n.message}),r.dirty()):de.assertNever(n);return{status:r.value,value:e.data}}_regex(e,t,r){return this.refinement(o=>e.test(o),{validation:t,code:S.invalid_string,...Z.errToObj(r)})}_addCheck(e){return new It({...this._def,checks:[...this._def.checks,e]})}email(e){return this._addCheck({kind:"email",...Z.errToObj(e)})}url(e){return this._addCheck({kind:"url",...Z.errToObj(e)})}emoji(e){return this._addCheck({kind:"emoji",...Z.errToObj(e)})}uuid(e){return this._addCheck({kind:"uuid",...Z.errToObj(e)})}cuid(e){return this._addCheck({kind:"cuid",...Z.errToObj(e)})}cuid2(e){return this._addCheck({kind:"cuid2",...Z.errToObj(e)})}ulid(e){return this._addCheck({kind:"ulid",...Z.errToObj(e)})}ip(e){return this._addCheck({kind:"ip",...Z.errToObj(e)})}datetime(e){var t;return typeof e=="string"?this._addCheck({kind:"datetime",precision:null,offset:!1,message:e}):this._addCheck({kind:"datetime",precision:typeof(e==null?void 0:e.precision)>"u"?null:e==null?void 0:e.precision,offset:(t=e==null?void 0:e.offset)!==null&&t!==void 0?t:!1,...Z.errToObj(e==null?void 0:e.message)})}regex(e,t){return this._addCheck({kind:"regex",regex:e,...Z.errToObj(t)})}includes(e,t){return this._addCheck({kind:"includes",value:e,position:t==null?void 0:t.position,...Z.errToObj(t==null?void 0:t.message)})}startsWith(e,t){return this._addCheck({kind:"startsWith",value:e,...Z.errToObj(t)})}endsWith(e,t){return this._addCheck({kind:"endsWith",value:e,...Z.errToObj(t)})}min(e,t){return this._addCheck({kind:"min",value:e,...Z.errToObj(t)})}max(e,t){return this._addCheck({kind:"max",value:e,...Z.errToObj(t)})}length(e,t){return this._addCheck({kind:"length",value:e,...Z.errToObj(t)})}nonempty(e){return this.min(1,Z.errToObj(e))}trim(){return new It({...this._def,checks:[...this._def.checks,{kind:"trim"}]})}toLowerCase(){return new It({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]})}toUpperCase(){return new It({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}get isDatetime(){return!!this._def.checks.find(e=>e.kind==="datetime")}get isEmail(){return!!this._def.checks.find(e=>e.kind==="email")}get isURL(){return!!this._def.checks.find(e=>e.kind==="url")}get isEmoji(){return!!this._def.checks.find(e=>e.kind==="emoji")}get isUUID(){return!!this._def.checks.find(e=>e.kind==="uuid")}get isCUID(){return!!this._def.checks.find(e=>e.kind==="cuid")}get isCUID2(){return!!this._def.checks.find(e=>e.kind==="cuid2")}get isULID(){return!!this._def.checks.find(e=>e.kind==="ulid")}get isIP(){return!!this._def.checks.find(e=>e.kind==="ip")}get minLength(){let e=null;for(const t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e}get maxLength(){let e=null;for(const t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e}}It.create=i=>{var e;return new It({checks:[],typeName:Y.ZodString,coerce:(e=i==null?void 0:i.coerce)!==null&&e!==void 0?e:!1,...ee(i)})};function Od(i,e){const t=(i.toString().split(".")[1]||"").length,r=(e.toString().split(".")[1]||"").length,o=t>r?t:r,n=parseInt(i.toFixed(o).replace(".","")),a=parseInt(e.toFixed(o).replace(".",""));return n%a/Math.pow(10,o)}class ji extends re{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(e){if(this._def.coerce&&(e.data=Number(e.data)),this._getType(e)!==N.number){const n=this._getOrReturnCtx(e);return U(n,{code:S.invalid_type,expected:N.number,received:n.parsedType}),X}let r;const o=new qe;for(const n of this._def.checks)n.kind==="int"?de.isInteger(e.data)||(r=this._getOrReturnCtx(e,r),U(r,{code:S.invalid_type,expected:"integer",received:"float",message:n.message}),o.dirty()):n.kind==="min"?(n.inclusive?e.data<n.value:e.data<=n.value)&&(r=this._getOrReturnCtx(e,r),U(r,{code:S.too_small,minimum:n.value,type:"number",inclusive:n.inclusive,exact:!1,message:n.message}),o.dirty()):n.kind==="max"?(n.inclusive?e.data>n.value:e.data>=n.value)&&(r=this._getOrReturnCtx(e,r),U(r,{code:S.too_big,maximum:n.value,type:"number",inclusive:n.inclusive,exact:!1,message:n.message}),o.dirty()):n.kind==="multipleOf"?Od(e.data,n.value)!==0&&(r=this._getOrReturnCtx(e,r),U(r,{code:S.not_multiple_of,multipleOf:n.value,message:n.message}),o.dirty()):n.kind==="finite"?Number.isFinite(e.data)||(r=this._getOrReturnCtx(e,r),U(r,{code:S.not_finite,message:n.message}),o.dirty()):de.assertNever(n);return{status:o.value,value:e.data}}gte(e,t){return this.setLimit("min",e,!0,Z.toString(t))}gt(e,t){return this.setLimit("min",e,!1,Z.toString(t))}lte(e,t){return this.setLimit("max",e,!0,Z.toString(t))}lt(e,t){return this.setLimit("max",e,!1,Z.toString(t))}setLimit(e,t,r,o){return new ji({...this._def,checks:[...this._def.checks,{kind:e,value:t,inclusive:r,message:Z.toString(o)}]})}_addCheck(e){return new ji({...this._def,checks:[...this._def.checks,e]})}int(e){return this._addCheck({kind:"int",message:Z.toString(e)})}positive(e){return this._addCheck({kind:"min",value:0,inclusive:!1,message:Z.toString(e)})}negative(e){return this._addCheck({kind:"max",value:0,inclusive:!1,message:Z.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:0,inclusive:!0,message:Z.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:0,inclusive:!0,message:Z.toString(e)})}multipleOf(e,t){return this._addCheck({kind:"multipleOf",value:e,message:Z.toString(t)})}finite(e){return this._addCheck({kind:"finite",message:Z.toString(e)})}safe(e){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:Z.toString(e)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:Z.toString(e)})}get minValue(){let e=null;for(const t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e}get maxValue(){let e=null;for(const t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e}get isInt(){return!!this._def.checks.find(e=>e.kind==="int"||e.kind==="multipleOf"&&de.isInteger(e.value))}get isFinite(){let e=null,t=null;for(const r of this._def.checks){if(r.kind==="finite"||r.kind==="int"||r.kind==="multipleOf")return!0;r.kind==="min"?(t===null||r.value>t)&&(t=r.value):r.kind==="max"&&(e===null||r.value<e)&&(e=r.value)}return Number.isFinite(t)&&Number.isFinite(e)}}ji.create=i=>new ji({checks:[],typeName:Y.ZodNumber,coerce:(i==null?void 0:i.coerce)||!1,...ee(i)});class Li extends re{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(e){if(this._def.coerce&&(e.data=BigInt(e.data)),this._getType(e)!==N.bigint){const n=this._getOrReturnCtx(e);return U(n,{code:S.invalid_type,expected:N.bigint,received:n.parsedType}),X}let r;const o=new qe;for(const n of this._def.checks)n.kind==="min"?(n.inclusive?e.data<n.value:e.data<=n.value)&&(r=this._getOrReturnCtx(e,r),U(r,{code:S.too_small,type:"bigint",minimum:n.value,inclusive:n.inclusive,message:n.message}),o.dirty()):n.kind==="max"?(n.inclusive?e.data>n.value:e.data>=n.value)&&(r=this._getOrReturnCtx(e,r),U(r,{code:S.too_big,type:"bigint",maximum:n.value,inclusive:n.inclusive,message:n.message}),o.dirty()):n.kind==="multipleOf"?e.data%n.value!==BigInt(0)&&(r=this._getOrReturnCtx(e,r),U(r,{code:S.not_multiple_of,multipleOf:n.value,message:n.message}),o.dirty()):de.assertNever(n);return{status:o.value,value:e.data}}gte(e,t){return this.setLimit("min",e,!0,Z.toString(t))}gt(e,t){return this.setLimit("min",e,!1,Z.toString(t))}lte(e,t){return this.setLimit("max",e,!0,Z.toString(t))}lt(e,t){return this.setLimit("max",e,!1,Z.toString(t))}setLimit(e,t,r,o){return new Li({...this._def,checks:[...this._def.checks,{kind:e,value:t,inclusive:r,message:Z.toString(o)}]})}_addCheck(e){return new Li({...this._def,checks:[...this._def.checks,e]})}positive(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:Z.toString(e)})}negative(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:Z.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:Z.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:Z.toString(e)})}multipleOf(e,t){return this._addCheck({kind:"multipleOf",value:e,message:Z.toString(t)})}get minValue(){let e=null;for(const t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e}get maxValue(){let e=null;for(const t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e}}Li.create=i=>{var e;return new Li({checks:[],typeName:Y.ZodBigInt,coerce:(e=i==null?void 0:i.coerce)!==null&&e!==void 0?e:!1,...ee(i)})};class Gr extends re{_parse(e){if(this._def.coerce&&(e.data=!!e.data),this._getType(e)!==N.boolean){const r=this._getOrReturnCtx(e);return U(r,{code:S.invalid_type,expected:N.boolean,received:r.parsedType}),X}return Ke(e.data)}}Gr.create=i=>new Gr({typeName:Y.ZodBoolean,coerce:(i==null?void 0:i.coerce)||!1,...ee(i)});class gn extends re{_parse(e){if(this._def.coerce&&(e.data=new Date(e.data)),this._getType(e)!==N.date){const n=this._getOrReturnCtx(e);return U(n,{code:S.invalid_type,expected:N.date,received:n.parsedType}),X}if(isNaN(e.data.getTime())){const n=this._getOrReturnCtx(e);return U(n,{code:S.invalid_date}),X}const r=new qe;let o;for(const n of this._def.checks)n.kind==="min"?e.data.getTime()<n.value&&(o=this._getOrReturnCtx(e,o),U(o,{code:S.too_small,message:n.message,inclusive:!0,exact:!1,minimum:n.value,type:"date"}),r.dirty()):n.kind==="max"?e.data.getTime()>n.value&&(o=this._getOrReturnCtx(e,o),U(o,{code:S.too_big,message:n.message,inclusive:!0,exact:!1,maximum:n.value,type:"date"}),r.dirty()):de.assertNever(n);return{status:r.value,value:new Date(e.data.getTime())}}_addCheck(e){return new gn({...this._def,checks:[...this._def.checks,e]})}min(e,t){return this._addCheck({kind:"min",value:e.getTime(),message:Z.toString(t)})}max(e,t){return this._addCheck({kind:"max",value:e.getTime(),message:Z.toString(t)})}get minDate(){let e=null;for(const t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e!=null?new Date(e):null}get maxDate(){let e=null;for(const t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e!=null?new Date(e):null}}gn.create=i=>new gn({checks:[],coerce:(i==null?void 0:i.coerce)||!1,typeName:Y.ZodDate,...ee(i)});class ca extends re{_parse(e){if(this._getType(e)!==N.symbol){const r=this._getOrReturnCtx(e);return U(r,{code:S.invalid_type,expected:N.symbol,received:r.parsedType}),X}return Ke(e.data)}}ca.create=i=>new ca({typeName:Y.ZodSymbol,...ee(i)});class qr extends re{_parse(e){if(this._getType(e)!==N.undefined){const r=this._getOrReturnCtx(e);return U(r,{code:S.invalid_type,expected:N.undefined,received:r.parsedType}),X}return Ke(e.data)}}qr.create=i=>new qr({typeName:Y.ZodUndefined,...ee(i)});class Yr extends re{_parse(e){if(this._getType(e)!==N.null){const r=this._getOrReturnCtx(e);return U(r,{code:S.invalid_type,expected:N.null,received:r.parsedType}),X}return Ke(e.data)}}Yr.create=i=>new Yr({typeName:Y.ZodNull,...ee(i)});class lr extends re{constructor(){super(...arguments),this._any=!0}_parse(e){return Ke(e.data)}}lr.create=i=>new lr({typeName:Y.ZodAny,...ee(i)});class wn extends re{constructor(){super(...arguments),this._unknown=!0}_parse(e){return Ke(e.data)}}wn.create=i=>new wn({typeName:Y.ZodUnknown,...ee(i)});class gi extends re{_parse(e){const t=this._getOrReturnCtx(e);return U(t,{code:S.invalid_type,expected:N.never,received:t.parsedType}),X}}gi.create=i=>new gi({typeName:Y.ZodNever,...ee(i)});class ua extends re{_parse(e){if(this._getType(e)!==N.undefined){const r=this._getOrReturnCtx(e);return U(r,{code:S.invalid_type,expected:N.void,received:r.parsedType}),X}return Ke(e.data)}}ua.create=i=>new ua({typeName:Y.ZodVoid,...ee(i)});class Nt extends re{_parse(e){const{ctx:t,status:r}=this._processInputParams(e),o=this._def;if(t.parsedType!==N.array)return U(t,{code:S.invalid_type,expected:N.array,received:t.parsedType}),X;if(o.exactLength!==null){const a=t.data.length>o.exactLength.value,s=t.data.length<o.exactLength.value;(a||s)&&(U(t,{code:a?S.too_big:S.too_small,minimum:s?o.exactLength.value:void 0,maximum:a?o.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:o.exactLength.message}),r.dirty())}if(o.minLength!==null&&t.data.length<o.minLength.value&&(U(t,{code:S.too_small,minimum:o.minLength.value,type:"array",inclusive:!0,exact:!1,message:o.minLength.message}),r.dirty()),o.maxLength!==null&&t.data.length>o.maxLength.value&&(U(t,{code:S.too_big,maximum:o.maxLength.value,type:"array",inclusive:!0,exact:!1,message:o.maxLength.message}),r.dirty()),t.common.async)return Promise.all([...t.data].map((a,s)=>o.type._parseAsync(new Zt(t,a,t.path,s)))).then(a=>qe.mergeArray(r,a));const n=[...t.data].map((a,s)=>o.type._parseSync(new Zt(t,a,t.path,s)));return qe.mergeArray(r,n)}get element(){return this._def.type}min(e,t){return new Nt({...this._def,minLength:{value:e,message:Z.toString(t)}})}max(e,t){return new Nt({...this._def,maxLength:{value:e,message:Z.toString(t)}})}length(e,t){return new Nt({...this._def,exactLength:{value:e,message:Z.toString(t)}})}nonempty(e){return this.min(1,e)}}Nt.create=(i,e)=>new Nt({type:i,minLength:null,maxLength:null,exactLength:null,typeName:Y.ZodArray,...ee(e)});function tr(i){if(i instanceof Se){const e={};for(const t in i.shape){const r=i.shape[t];e[t]=wi.create(tr(r))}return new Se({...i._def,shape:()=>e})}else return i instanceof Nt?new Nt({...i._def,type:tr(i.element)}):i instanceof wi?wi.create(tr(i.unwrap())):i instanceof vn?vn.create(tr(i.unwrap())):i instanceof Gt?Gt.create(i.items.map(e=>tr(e))):i}class Se extends re{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;const e=this._def.shape(),t=de.objectKeys(e);return this._cached={shape:e,keys:t}}_parse(e){if(this._getType(e)!==N.object){const h=this._getOrReturnCtx(e);return U(h,{code:S.invalid_type,expected:N.object,received:h.parsedType}),X}const{status:r,ctx:o}=this._processInputParams(e),{shape:n,keys:a}=this._getCached(),s=[];if(!(this._def.catchall instanceof gi&&this._def.unknownKeys==="strip"))for(const h in o.data)a.includes(h)||s.push(h);const p=[];for(const h of a){const x=n[h],_=o.data[h];p.push({key:{status:"valid",value:h},value:x._parse(new Zt(o,_,o.path,h)),alwaysSet:h in o.data})}if(this._def.catchall instanceof gi){const h=this._def.unknownKeys;if(h==="passthrough")for(const x of s)p.push({key:{status:"valid",value:x},value:{status:"valid",value:o.data[x]}});else if(h==="strict")s.length>0&&(U(o,{code:S.unrecognized_keys,keys:s}),r.dirty());else if(h!=="strip")throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{const h=this._def.catchall;for(const x of s){const _=o.data[x];p.push({key:{status:"valid",value:x},value:h._parse(new Zt(o,_,o.path,x)),alwaysSet:x in o.data})}}return o.common.async?Promise.resolve().then(async()=>{const h=[];for(const x of p){const _=await x.key;h.push({key:_,value:await x.value,alwaysSet:x.alwaysSet})}return h}).then(h=>qe.mergeObjectSync(r,h)):qe.mergeObjectSync(r,p)}get shape(){return this._def.shape()}strict(e){return Z.errToObj,new Se({...this._def,unknownKeys:"strict",...e!==void 0?{errorMap:(t,r)=>{var o,n,a,s;const p=(a=(n=(o=this._def).errorMap)===null||n===void 0?void 0:n.call(o,t,r).message)!==null&&a!==void 0?a:r.defaultError;return t.code==="unrecognized_keys"?{message:(s=Z.errToObj(e).message)!==null&&s!==void 0?s:p}:{message:p}}}:{}})}strip(){return new Se({...this._def,unknownKeys:"strip"})}passthrough(){return new Se({...this._def,unknownKeys:"passthrough"})}extend(e){return new Se({...this._def,shape:()=>({...this._def.shape(),...e})})}merge(e){return new Se({unknownKeys:e._def.unknownKeys,catchall:e._def.catchall,shape:()=>({...this._def.shape(),...e._def.shape()}),typeName:Y.ZodObject})}setKey(e,t){return this.augment({[e]:t})}catchall(e){return new Se({...this._def,catchall:e})}pick(e){const t={};return de.objectKeys(e).forEach(r=>{e[r]&&this.shape[r]&&(t[r]=this.shape[r])}),new Se({...this._def,shape:()=>t})}omit(e){const t={};return de.objectKeys(this.shape).forEach(r=>{e[r]||(t[r]=this.shape[r])}),new Se({...this._def,shape:()=>t})}deepPartial(){return tr(this)}partial(e){const t={};return de.objectKeys(this.shape).forEach(r=>{const o=this.shape[r];e&&!e[r]?t[r]=o:t[r]=o.optional()}),new Se({...this._def,shape:()=>t})}required(e){const t={};return de.objectKeys(this.shape).forEach(r=>{if(e&&!e[r])t[r]=this.shape[r];else{let n=this.shape[r];for(;n instanceof wi;)n=n._def.innerType;t[r]=n}}),new Se({...this._def,shape:()=>t})}keyof(){return Kc(de.objectKeys(this.shape))}}Se.create=(i,e)=>new Se({shape:()=>i,unknownKeys:"strip",catchall:gi.create(),typeName:Y.ZodObject,...ee(e)});Se.strictCreate=(i,e)=>new Se({shape:()=>i,unknownKeys:"strict",catchall:gi.create(),typeName:Y.ZodObject,...ee(e)});Se.lazycreate=(i,e)=>new Se({shape:i,unknownKeys:"strip",catchall:gi.create(),typeName:Y.ZodObject,...ee(e)});class Kr extends re{_parse(e){const{ctx:t}=this._processInputParams(e),r=this._def.options;function o(n){for(const s of n)if(s.result.status==="valid")return s.result;for(const s of n)if(s.result.status==="dirty")return t.common.issues.push(...s.ctx.common.issues),s.result;const a=n.map(s=>new Ot(s.ctx.common.issues));return U(t,{code:S.invalid_union,unionErrors:a}),X}if(t.common.async)return Promise.all(r.map(async n=>{const a={...t,common:{...t.common,issues:[]},parent:null};return{result:await n._parseAsync({data:t.data,path:t.path,parent:a}),ctx:a}})).then(o);{let n;const a=[];for(const p of r){const h={...t,common:{...t.common,issues:[]},parent:null},x=p._parseSync({data:t.data,path:t.path,parent:h});if(x.status==="valid")return x;x.status==="dirty"&&!n&&(n={result:x,ctx:h}),h.common.issues.length&&a.push(h.common.issues)}if(n)return t.common.issues.push(...n.ctx.common.issues),n.result;const s=a.map(p=>new Ot(p));return U(t,{code:S.invalid_union,unionErrors:s}),X}}get options(){return this._def.options}}Kr.create=(i,e)=>new Kr({options:i,typeName:Y.ZodUnion,...ee(e)});const ra=i=>i instanceof Jr?ra(i.schema):i instanceof Pt?ra(i.innerType()):i instanceof eo?[i.value]:i instanceof Bi?i.options:i instanceof to?Object.keys(i.enum):i instanceof io?ra(i._def.innerType):i instanceof qr?[void 0]:i instanceof Yr?[null]:null;class Ga extends re{_parse(e){const{ctx:t}=this._processInputParams(e);if(t.parsedType!==N.object)return U(t,{code:S.invalid_type,expected:N.object,received:t.parsedType}),X;const r=this.discriminator,o=t.data[r],n=this.optionsMap.get(o);return n?t.common.async?n._parseAsync({data:t.data,path:t.path,parent:t}):n._parseSync({data:t.data,path:t.path,parent:t}):(U(t,{code:S.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[r]}),X)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(e,t,r){const o=new Map;for(const n of t){const a=ra(n.shape[e]);if(!a)throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);for(const s of a){if(o.has(s))throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(s)}`);o.set(s,n)}}return new Ga({typeName:Y.ZodDiscriminatedUnion,discriminator:e,options:t,optionsMap:o,...ee(r)})}}function Rs(i,e){const t=Oi(i),r=Oi(e);if(i===e)return{valid:!0,data:i};if(t===N.object&&r===N.object){const o=de.objectKeys(e),n=de.objectKeys(i).filter(s=>o.indexOf(s)!==-1),a={...i,...e};for(const s of n){const p=Rs(i[s],e[s]);if(!p.valid)return{valid:!1};a[s]=p.data}return{valid:!0,data:a}}else if(t===N.array&&r===N.array){if(i.length!==e.length)return{valid:!1};const o=[];for(let n=0;n<i.length;n++){const a=i[n],s=e[n],p=Rs(a,s);if(!p.valid)return{valid:!1};o.push(p.data)}return{valid:!0,data:o}}else return t===N.date&&r===N.date&&+i==+e?{valid:!0,data:i}:{valid:!1}}class Xr extends re{_parse(e){const{status:t,ctx:r}=this._processInputParams(e),o=(n,a)=>{if(Es(n)||Es(a))return X;const s=Rs(n.value,a.value);return s.valid?(($s(n)||$s(a))&&t.dirty(),{status:t.value,value:s.data}):(U(r,{code:S.invalid_intersection_types}),X)};return r.common.async?Promise.all([this._def.left._parseAsync({data:r.data,path:r.path,parent:r}),this._def.right._parseAsync({data:r.data,path:r.path,parent:r})]).then(([n,a])=>o(n,a)):o(this._def.left._parseSync({data:r.data,path:r.path,parent:r}),this._def.right._parseSync({data:r.data,path:r.path,parent:r}))}}Xr.create=(i,e,t)=>new Xr({left:i,right:e,typeName:Y.ZodIntersection,...ee(t)});class Gt extends re{_parse(e){const{status:t,ctx:r}=this._processInputParams(e);if(r.parsedType!==N.array)return U(r,{code:S.invalid_type,expected:N.array,received:r.parsedType}),X;if(r.data.length<this._def.items.length)return U(r,{code:S.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),X;!this._def.rest&&r.data.length>this._def.items.length&&(U(r,{code:S.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),t.dirty());const n=[...r.data].map((a,s)=>{const p=this._def.items[s]||this._def.rest;return p?p._parse(new Zt(r,a,r.path,s)):null}).filter(a=>!!a);return r.common.async?Promise.all(n).then(a=>qe.mergeArray(t,a)):qe.mergeArray(t,n)}get items(){return this._def.items}rest(e){return new Gt({...this._def,rest:e})}}Gt.create=(i,e)=>{if(!Array.isArray(i))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new Gt({items:i,typeName:Y.ZodTuple,rest:null,...ee(e)})};class Qr extends re{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){const{status:t,ctx:r}=this._processInputParams(e);if(r.parsedType!==N.object)return U(r,{code:S.invalid_type,expected:N.object,received:r.parsedType}),X;const o=[],n=this._def.keyType,a=this._def.valueType;for(const s in r.data)o.push({key:n._parse(new Zt(r,s,r.path,s)),value:a._parse(new Zt(r,r.data[s],r.path,s))});return r.common.async?qe.mergeObjectAsync(t,o):qe.mergeObjectSync(t,o)}get element(){return this._def.valueType}static create(e,t,r){return t instanceof re?new Qr({keyType:e,valueType:t,typeName:Y.ZodRecord,...ee(r)}):new Qr({keyType:It.create(),valueType:e,typeName:Y.ZodRecord,...ee(t)})}}class da extends re{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){const{status:t,ctx:r}=this._processInputParams(e);if(r.parsedType!==N.map)return U(r,{code:S.invalid_type,expected:N.map,received:r.parsedType}),X;const o=this._def.keyType,n=this._def.valueType,a=[...r.data.entries()].map(([s,p],h)=>({key:o._parse(new Zt(r,s,r.path,[h,"key"])),value:n._parse(new Zt(r,p,r.path,[h,"value"]))}));if(r.common.async){const s=new Map;return Promise.resolve().then(async()=>{for(const p of a){const h=await p.key,x=await p.value;if(h.status==="aborted"||x.status==="aborted")return X;(h.status==="dirty"||x.status==="dirty")&&t.dirty(),s.set(h.value,x.value)}return{status:t.value,value:s}})}else{const s=new Map;for(const p of a){const h=p.key,x=p.value;if(h.status==="aborted"||x.status==="aborted")return X;(h.status==="dirty"||x.status==="dirty")&&t.dirty(),s.set(h.value,x.value)}return{status:t.value,value:s}}}}da.create=(i,e,t)=>new da({valueType:e,keyType:i,typeName:Y.ZodMap,...ee(t)});class mn extends re{_parse(e){const{status:t,ctx:r}=this._processInputParams(e);if(r.parsedType!==N.set)return U(r,{code:S.invalid_type,expected:N.set,received:r.parsedType}),X;const o=this._def;o.minSize!==null&&r.data.size<o.minSize.value&&(U(r,{code:S.too_small,minimum:o.minSize.value,type:"set",inclusive:!0,exact:!1,message:o.minSize.message}),t.dirty()),o.maxSize!==null&&r.data.size>o.maxSize.value&&(U(r,{code:S.too_big,maximum:o.maxSize.value,type:"set",inclusive:!0,exact:!1,message:o.maxSize.message}),t.dirty());const n=this._def.valueType;function a(p){const h=new Set;for(const x of p){if(x.status==="aborted")return X;x.status==="dirty"&&t.dirty(),h.add(x.value)}return{status:t.value,value:h}}const s=[...r.data.values()].map((p,h)=>n._parse(new Zt(r,p,r.path,h)));return r.common.async?Promise.all(s).then(p=>a(p)):a(s)}min(e,t){return new mn({...this._def,minSize:{value:e,message:Z.toString(t)}})}max(e,t){return new mn({...this._def,maxSize:{value:e,message:Z.toString(t)}})}size(e,t){return this.min(e,t).max(e,t)}nonempty(e){return this.min(1,e)}}mn.create=(i,e)=>new mn({valueType:i,minSize:null,maxSize:null,typeName:Y.ZodSet,...ee(e)});class or extends re{constructor(){super(...arguments),this.validate=this.implement}_parse(e){const{ctx:t}=this._processInputParams(e);if(t.parsedType!==N.function)return U(t,{code:S.invalid_type,expected:N.function,received:t.parsedType}),X;function r(s,p){return sa({data:s,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,aa(),Fr].filter(h=>!!h),issueData:{code:S.invalid_arguments,argumentsError:p}})}function o(s,p){return sa({data:s,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,aa(),Fr].filter(h=>!!h),issueData:{code:S.invalid_return_type,returnTypeError:p}})}const n={errorMap:t.common.contextualErrorMap},a=t.data;if(this._def.returns instanceof cr){const s=this;return Ke(async function(...p){const h=new Ot([]),x=await s._def.args.parseAsync(p,n).catch(B=>{throw h.addIssue(r(p,B)),h}),_=await Reflect.apply(a,this,x);return await s._def.returns._def.type.parseAsync(_,n).catch(B=>{throw h.addIssue(o(_,B)),h})})}else{const s=this;return Ke(function(...p){const h=s._def.args.safeParse(p,n);if(!h.success)throw new Ot([r(p,h.error)]);const x=Reflect.apply(a,this,h.data),_=s._def.returns.safeParse(x,n);if(!_.success)throw new Ot([o(x,_.error)]);return _.data})}}parameters(){return this._def.args}returnType(){return this._def.returns}args(...e){return new or({...this._def,args:Gt.create(e).rest(wn.create())})}returns(e){return new or({...this._def,returns:e})}implement(e){return this.parse(e)}strictImplement(e){return this.parse(e)}static create(e,t,r){return new or({args:e||Gt.create([]).rest(wn.create()),returns:t||wn.create(),typeName:Y.ZodFunction,...ee(r)})}}class Jr extends re{get schema(){return this._def.getter()}_parse(e){const{ctx:t}=this._processInputParams(e);return this._def.getter()._parse({data:t.data,path:t.path,parent:t})}}Jr.create=(i,e)=>new Jr({getter:i,typeName:Y.ZodLazy,...ee(e)});class eo extends re{_parse(e){if(e.data!==this._def.value){const t=this._getOrReturnCtx(e);return U(t,{received:t.data,code:S.invalid_literal,expected:this._def.value}),X}return{status:"valid",value:e.data}}get value(){return this._def.value}}eo.create=(i,e)=>new eo({value:i,typeName:Y.ZodLiteral,...ee(e)});function Kc(i,e){return new Bi({values:i,typeName:Y.ZodEnum,...ee(e)})}class Bi extends re{_parse(e){if(typeof e.data!="string"){const t=this._getOrReturnCtx(e),r=this._def.values;return U(t,{expected:de.joinValues(r),received:t.parsedType,code:S.invalid_type}),X}if(this._def.values.indexOf(e.data)===-1){const t=this._getOrReturnCtx(e),r=this._def.values;return U(t,{received:t.data,code:S.invalid_enum_value,options:r}),X}return Ke(e.data)}get options(){return this._def.values}get enum(){const e={};for(const t of this._def.values)e[t]=t;return e}get Values(){const e={};for(const t of this._def.values)e[t]=t;return e}get Enum(){const e={};for(const t of this._def.values)e[t]=t;return e}extract(e){return Bi.create(e)}exclude(e){return Bi.create(this.options.filter(t=>!e.includes(t)))}}Bi.create=Kc;class to extends re{_parse(e){const t=de.getValidEnumValues(this._def.values),r=this._getOrReturnCtx(e);if(r.parsedType!==N.string&&r.parsedType!==N.number){const o=de.objectValues(t);return U(r,{expected:de.joinValues(o),received:r.parsedType,code:S.invalid_type}),X}if(t.indexOf(e.data)===-1){const o=de.objectValues(t);return U(r,{received:r.data,code:S.invalid_enum_value,options:o}),X}return Ke(e.data)}get enum(){return this._def.values}}to.create=(i,e)=>new to({values:i,typeName:Y.ZodNativeEnum,...ee(e)});class cr extends re{unwrap(){return this._def.type}_parse(e){const{ctx:t}=this._processInputParams(e);if(t.parsedType!==N.promise&&t.common.async===!1)return U(t,{code:S.invalid_type,expected:N.promise,received:t.parsedType}),X;const r=t.parsedType===N.promise?t.data:Promise.resolve(t.data);return Ke(r.then(o=>this._def.type.parseAsync(o,{path:t.path,errorMap:t.common.contextualErrorMap})))}}cr.create=(i,e)=>new cr({type:i,typeName:Y.ZodPromise,...ee(e)});class Pt extends re{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===Y.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(e){const{status:t,ctx:r}=this._processInputParams(e),o=this._def.effect||null,n={addIssue:a=>{U(r,a),a.fatal?t.abort():t.dirty()},get path(){return r.path}};if(n.addIssue=n.addIssue.bind(n),o.type==="preprocess"){const a=o.transform(r.data,n);return r.common.issues.length?{status:"dirty",value:r.data}:r.common.async?Promise.resolve(a).then(s=>this._def.schema._parseAsync({data:s,path:r.path,parent:r})):this._def.schema._parseSync({data:a,path:r.path,parent:r})}if(o.type==="refinement"){const a=s=>{const p=o.refinement(s,n);if(r.common.async)return Promise.resolve(p);if(p instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return s};if(r.common.async===!1){const s=this._def.schema._parseSync({data:r.data,path:r.path,parent:r});return s.status==="aborted"?X:(s.status==="dirty"&&t.dirty(),a(s.value),{status:t.value,value:s.value})}else return this._def.schema._parseAsync({data:r.data,path:r.path,parent:r}).then(s=>s.status==="aborted"?X:(s.status==="dirty"&&t.dirty(),a(s.value).then(()=>({status:t.value,value:s.value}))))}if(o.type==="transform")if(r.common.async===!1){const a=this._def.schema._parseSync({data:r.data,path:r.path,parent:r});if(!Zr(a))return a;const s=o.transform(a.value,n);if(s instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:t.value,value:s}}else return this._def.schema._parseAsync({data:r.data,path:r.path,parent:r}).then(a=>Zr(a)?Promise.resolve(o.transform(a.value,n)).then(s=>({status:t.value,value:s})):a);de.assertNever(o)}}Pt.create=(i,e,t)=>new Pt({schema:i,typeName:Y.ZodEffects,effect:e,...ee(t)});Pt.createWithPreprocess=(i,e,t)=>new Pt({schema:e,effect:{type:"preprocess",transform:i},typeName:Y.ZodEffects,...ee(t)});class wi extends re{_parse(e){return this._getType(e)===N.undefined?Ke(void 0):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}wi.create=(i,e)=>new wi({innerType:i,typeName:Y.ZodOptional,...ee(e)});class vn extends re{_parse(e){return this._getType(e)===N.null?Ke(null):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}vn.create=(i,e)=>new vn({innerType:i,typeName:Y.ZodNullable,...ee(e)});class io extends re{_parse(e){const{ctx:t}=this._processInputParams(e);let r=t.data;return t.parsedType===N.undefined&&(r=this._def.defaultValue()),this._def.innerType._parse({data:r,path:t.path,parent:t})}removeDefault(){return this._def.innerType}}io.create=(i,e)=>new io({innerType:i,typeName:Y.ZodDefault,defaultValue:typeof e.default=="function"?e.default:()=>e.default,...ee(e)});class pa extends re{_parse(e){const{ctx:t}=this._processInputParams(e),r={...t,common:{...t.common,issues:[]}},o=this._def.innerType._parse({data:r.data,path:r.path,parent:{...r}});return la(o)?o.then(n=>({status:"valid",value:n.status==="valid"?n.value:this._def.catchValue({get error(){return new Ot(r.common.issues)},input:r.data})})):{status:"valid",value:o.status==="valid"?o.value:this._def.catchValue({get error(){return new Ot(r.common.issues)},input:r.data})}}removeCatch(){return this._def.innerType}}pa.create=(i,e)=>new pa({innerType:i,typeName:Y.ZodCatch,catchValue:typeof e.catch=="function"?e.catch:()=>e.catch,...ee(e)});class ha extends re{_parse(e){if(this._getType(e)!==N.nan){const r=this._getOrReturnCtx(e);return U(r,{code:S.invalid_type,expected:N.nan,received:r.parsedType}),X}return{status:"valid",value:e.data}}}ha.create=i=>new ha({typeName:Y.ZodNaN,...ee(i)});const Nd=Symbol("zod_brand");class Xc extends re{_parse(e){const{ctx:t}=this._processInputParams(e),r=t.data;return this._def.type._parse({data:r,path:t.path,parent:t})}unwrap(){return this._def.type}}class Ro extends re{_parse(e){const{status:t,ctx:r}=this._processInputParams(e);if(r.common.async)return(async()=>{const n=await this._def.in._parseAsync({data:r.data,path:r.path,parent:r});return n.status==="aborted"?X:n.status==="dirty"?(t.dirty(),Yc(n.value)):this._def.out._parseAsync({data:n.value,path:r.path,parent:r})})();{const o=this._def.in._parseSync({data:r.data,path:r.path,parent:r});return o.status==="aborted"?X:o.status==="dirty"?(t.dirty(),{status:"dirty",value:o.value}):this._def.out._parseSync({data:o.value,path:r.path,parent:r})}}static create(e,t){return new Ro({in:e,out:t,typeName:Y.ZodPipeline})}}class fa extends re{_parse(e){const t=this._def.innerType._parse(e);return Zr(t)&&(t.value=Object.freeze(t.value)),t}}fa.create=(i,e)=>new fa({innerType:i,typeName:Y.ZodReadonly,...ee(e)});const Qc=(i,e={},t)=>i?lr.create().superRefine((r,o)=>{var n,a;if(!i(r)){const s=typeof e=="function"?e(r):typeof e=="string"?{message:e}:e,p=(a=(n=s.fatal)!==null&&n!==void 0?n:t)!==null&&a!==void 0?a:!0,h=typeof s=="string"?{message:s}:s;o.addIssue({code:"custom",...h,fatal:p})}}):lr.create(),Pd={object:Se.lazycreate};var Y;(function(i){i.ZodString="ZodString",i.ZodNumber="ZodNumber",i.ZodNaN="ZodNaN",i.ZodBigInt="ZodBigInt",i.ZodBoolean="ZodBoolean",i.ZodDate="ZodDate",i.ZodSymbol="ZodSymbol",i.ZodUndefined="ZodUndefined",i.ZodNull="ZodNull",i.ZodAny="ZodAny",i.ZodUnknown="ZodUnknown",i.ZodNever="ZodNever",i.ZodVoid="ZodVoid",i.ZodArray="ZodArray",i.ZodObject="ZodObject",i.ZodUnion="ZodUnion",i.ZodDiscriminatedUnion="ZodDiscriminatedUnion",i.ZodIntersection="ZodIntersection",i.ZodTuple="ZodTuple",i.ZodRecord="ZodRecord",i.ZodMap="ZodMap",i.ZodSet="ZodSet",i.ZodFunction="ZodFunction",i.ZodLazy="ZodLazy",i.ZodLiteral="ZodLiteral",i.ZodEnum="ZodEnum",i.ZodEffects="ZodEffects",i.ZodNativeEnum="ZodNativeEnum",i.ZodOptional="ZodOptional",i.ZodNullable="ZodNullable",i.ZodDefault="ZodDefault",i.ZodCatch="ZodCatch",i.ZodPromise="ZodPromise",i.ZodBranded="ZodBranded",i.ZodPipeline="ZodPipeline",i.ZodReadonly="ZodReadonly"})(Y||(Y={}));const Dd=(i,e={message:`Input not instance of ${i.name}`})=>Qc(t=>t instanceof i,e),Jc=It.create,eu=ji.create,Ud=ha.create,Wd=Li.create,tu=Gr.create,Md=gn.create,jd=ca.create,Ld=qr.create,Bd=Yr.create,zd=lr.create,Vd=wn.create,Hd=gi.create,Fd=ua.create,Zd=Nt.create,Gd=Se.create,qd=Se.strictCreate,Yd=Kr.create,Kd=Ga.create,Xd=Xr.create,Qd=Gt.create,Jd=Qr.create,e0=da.create,t0=mn.create,i0=or.create,n0=Jr.create,r0=eo.create,o0=Bi.create,a0=to.create,s0=cr.create,Fl=Pt.create,l0=wi.create,c0=vn.create,u0=Pt.createWithPreprocess,d0=Ro.create,p0=()=>Jc().optional(),h0=()=>eu().optional(),f0=()=>tu().optional(),w0={string:i=>It.create({...i,coerce:!0}),number:i=>ji.create({...i,coerce:!0}),boolean:i=>Gr.create({...i,coerce:!0}),bigint:i=>Li.create({...i,coerce:!0}),date:i=>gn.create({...i,coerce:!0})},g0=X;var u=Object.freeze({__proto__:null,defaultErrorMap:Fr,setErrorMap:xd,getErrorMap:aa,makeIssue:sa,EMPTY_PATH:yd,addIssueToContext:U,ParseStatus:qe,INVALID:X,DIRTY:Yc,OK:Ke,isAborted:Es,isDirty:$s,isValid:Zr,isAsync:la,get util(){return de},get objectUtil(){return As},ZodParsedType:N,getParsedType:Oi,ZodType:re,ZodString:It,ZodNumber:ji,ZodBigInt:Li,ZodBoolean:Gr,ZodDate:gn,ZodSymbol:ca,ZodUndefined:qr,ZodNull:Yr,ZodAny:lr,ZodUnknown:wn,ZodNever:gi,ZodVoid:ua,ZodArray:Nt,ZodObject:Se,ZodUnion:Kr,ZodDiscriminatedUnion:Ga,ZodIntersection:Xr,ZodTuple:Gt,ZodRecord:Qr,ZodMap:da,ZodSet:mn,ZodFunction:or,ZodLazy:Jr,ZodLiteral:eo,ZodEnum:Bi,ZodNativeEnum:to,ZodPromise:cr,ZodEffects:Pt,ZodTransformer:Pt,ZodOptional:wi,ZodNullable:vn,ZodDefault:io,ZodCatch:pa,ZodNaN:ha,BRAND:Nd,ZodBranded:Xc,ZodPipeline:Ro,ZodReadonly:fa,custom:Qc,Schema:re,ZodSchema:re,late:Pd,get ZodFirstPartyTypeKind(){return Y},coerce:w0,any:zd,array:Zd,bigint:Wd,boolean:tu,date:Md,discriminatedUnion:Kd,effect:Fl,enum:o0,function:i0,instanceof:Dd,intersection:Xd,lazy:n0,literal:r0,map:e0,nan:Ud,nativeEnum:a0,never:Hd,null:Bd,nullable:c0,number:eu,object:Gd,oboolean:f0,onumber:h0,optional:l0,ostring:p0,pipeline:d0,preprocess:u0,promise:s0,record:Jd,set:t0,strictObject:qd,string:Jc,symbol:jd,transformer:Fl,tuple:Qd,undefined:Ld,union:Yd,unknown:Vd,void:Fd,NEVER:g0,ZodIssueCode:S,quotelessJson:bd,ZodError:Ot});const Oe=u.object({message:u.string()});function j(i){return u.literal(Di[i])}u.object({accessList:u.array(u.string()),blockHash:u.string().nullable(),blockNumber:u.string().nullable(),chainId:u.string().or(u.number()),from:u.string(),gas:u.string(),hash:u.string(),input:u.string().nullable(),maxFeePerGas:u.string(),maxPriorityFeePerGas:u.string(),nonce:u.string(),r:u.string(),s:u.string(),to:u.string(),transactionIndex:u.string().nullable(),type:u.string(),v:u.string(),value:u.string()});const m0=u.object({chainId:u.string().or(u.number())}),v0=u.object({email:u.string().email()}),b0=u.object({otp:u.string()}),x0=u.object({uri:u.string()}),y0=u.object({chainId:u.optional(u.string().or(u.number())),preferredAccountType:u.optional(u.string())}),C0=u.object({provider:u.enum(["google","github","apple","facebook","x","discord"])}),_0=u.object({email:u.string().email()}),T0=u.object({otp:u.string()}),k0=u.object({otp:u.string()}),S0=u.object({themeMode:u.optional(u.enum(["light","dark"])),themeVariables:u.optional(u.record(u.string(),u.string().or(u.number()))),w3mThemeVariables:u.optional(u.record(u.string(),u.string()))}),A0=u.object({metadata:u.object({name:u.string(),description:u.string(),url:u.string(),icons:u.array(u.string())}).optional(),sdkVersion:u.string(),projectId:u.string()}),E0=u.object({type:u.string()}),$0=u.object({action:u.enum(["VERIFY_DEVICE","VERIFY_OTP"])}),R0=u.object({url:u.string()}),I0=u.object({userName:u.string()}),O0=u.object({email:u.string(),address:u.string(),chainId:u.string().or(u.number()),accounts:u.array(u.object({address:u.string(),type:u.enum([ae.ACCOUNT_TYPES.EOA,ae.ACCOUNT_TYPES.SMART_ACCOUNT])})).optional(),userName:u.string().optional()}),N0=u.object({action:u.enum(["VERIFY_PRIMARY_OTP","VERIFY_SECONDARY_OTP"])}),P0=u.object({email:u.string().email().optional().nullable(),address:u.string(),chainId:u.string().or(u.number()),smartAccountDeployed:u.optional(u.boolean()),accounts:u.array(u.object({address:u.string(),type:u.enum([ae.ACCOUNT_TYPES.EOA,ae.ACCOUNT_TYPES.SMART_ACCOUNT])})).optional(),preferredAccountType:u.optional(u.string())}),D0=u.object({uri:u.string()}),U0=u.object({isConnected:u.boolean()}),W0=u.object({chainId:u.string().or(u.number())}),M0=u.object({chainId:u.string().or(u.number())}),j0=u.object({newEmail:u.string().email()}),L0=u.object({smartAccountEnabledNetworks:u.array(u.number())});u.object({address:u.string(),isDeployed:u.boolean()});const B0=u.object({type:u.string(),address:u.string()}),z0=u.any(),V0=u.object({method:u.literal("eth_accounts")}),H0=u.object({method:u.literal("eth_blockNumber")}),F0=u.object({method:u.literal("eth_call"),params:u.array(u.any())}),Z0=u.object({method:u.literal("eth_chainId")}),G0=u.object({method:u.literal("eth_estimateGas"),params:u.array(u.any())}),q0=u.object({method:u.literal("eth_feeHistory"),params:u.array(u.any())}),Y0=u.object({method:u.literal("eth_gasPrice")}),K0=u.object({method:u.literal("eth_getAccount"),params:u.array(u.any())}),X0=u.object({method:u.literal("eth_getBalance"),params:u.array(u.any())}),Q0=u.object({method:u.literal("eth_getBlockByHash"),params:u.array(u.any())}),J0=u.object({method:u.literal("eth_getBlockByNumber"),params:u.array(u.any())}),ep=u.object({method:u.literal("eth_getBlockReceipts"),params:u.array(u.any())}),tp=u.object({method:u.literal("eth_getBlockTransactionCountByHash"),params:u.array(u.any())}),ip=u.object({method:u.literal("eth_getBlockTransactionCountByNumber"),params:u.array(u.any())}),np=u.object({method:u.literal("eth_getCode"),params:u.array(u.any())}),rp=u.object({method:u.literal("eth_getFilterChanges"),params:u.array(u.any())}),op=u.object({method:u.literal("eth_getFilterLogs"),params:u.array(u.any())}),ap=u.object({method:u.literal("eth_getLogs"),params:u.array(u.any())}),sp=u.object({method:u.literal("eth_getProof"),params:u.array(u.any())}),lp=u.object({method:u.literal("eth_getStorageAt"),params:u.array(u.any())}),cp=u.object({method:u.literal("eth_getTransactionByBlockHashAndIndex"),params:u.array(u.any())}),up=u.object({method:u.literal("eth_getTransactionByBlockNumberAndIndex"),params:u.array(u.any())}),dp=u.object({method:u.literal("eth_getTransactionByHash"),params:u.array(u.any())}),pp=u.object({method:u.literal("eth_getTransactionCount"),params:u.array(u.any())}),hp=u.object({method:u.literal("eth_getTransactionReceipt"),params:u.array(u.any())}),fp=u.object({method:u.literal("eth_getUncleCountByBlockHash"),params:u.array(u.any())}),wp=u.object({method:u.literal("eth_getUncleCountByBlockNumber"),params:u.array(u.any())}),gp=u.object({method:u.literal("eth_maxPriorityFeePerGas")}),mp=u.object({method:u.literal("eth_newBlockFilter")}),vp=u.object({method:u.literal("eth_newFilter"),params:u.array(u.any())}),bp=u.object({method:u.literal("eth_newPendingTransactionFilter")}),xp=u.object({method:u.literal("eth_sendRawTransaction"),params:u.array(u.any())}),yp=u.object({method:u.literal("eth_syncing"),params:u.array(u.any())}),Cp=u.object({method:u.literal("eth_uninstallFilter"),params:u.array(u.any())}),Zl=u.object({method:u.literal("personal_sign"),params:u.array(u.any())}),_p=u.object({method:u.literal("eth_signTypedData_v4"),params:u.array(u.any())}),Gl=u.object({method:u.literal("eth_sendTransaction"),params:u.array(u.any())}),Tp=u.object({method:u.literal("wallet_sendCalls"),params:u.array(u.object({chainId:u.string().or(u.number()).optional(),from:u.string().optional(),version:u.string().optional(),capabilities:u.any().optional(),calls:u.array(u.object({to:u.string().startsWith("0x"),data:u.string().startsWith("0x").optional(),value:u.string().optional()}))}))}),kp=u.object({method:u.literal("wallet_getCallsStatus"),params:u.array(u.string())}),Sp=u.object({method:u.literal("wallet_getCapabilities")}),Ap=u.object({method:u.literal("wallet_grantPermissions"),params:u.array(u.any())}),ql=u.object({token:u.string()}),L=u.object({id:u.string().optional()});L.extend({type:j("APP_SWITCH_NETWORK"),payload:m0}).or(L.extend({type:j("APP_CONNECT_EMAIL"),payload:v0})).or(L.extend({type:j("APP_CONNECT_DEVICE")})).or(L.extend({type:j("APP_CONNECT_OTP"),payload:b0})).or(L.extend({type:j("APP_CONNECT_SOCIAL"),payload:x0})).or(L.extend({type:j("APP_GET_FARCASTER_URI")})).or(L.extend({type:j("APP_CONNECT_FARCASTER")})).or(L.extend({type:j("APP_GET_USER"),payload:u.optional(y0)})).or(L.extend({type:j("APP_GET_SOCIAL_REDIRECT_URI"),payload:C0})).or(L.extend({type:j("APP_SIGN_OUT")})).or(L.extend({type:j("APP_IS_CONNECTED"),payload:u.optional(ql)})).or(L.extend({type:j("APP_GET_CHAIN_ID")})).or(L.extend({type:j("APP_GET_SMART_ACCOUNT_ENABLED_NETWORKS")})).or(L.extend({type:j("APP_INIT_SMART_ACCOUNT")})).or(L.extend({type:j("APP_SET_PREFERRED_ACCOUNT"),payload:E0})).or(L.extend({type:j("APP_RPC_REQUEST"),payload:Zl.or(Gl).or(V0).or(H0).or(F0).or(Z0).or(G0).or(q0).or(Y0).or(K0).or(X0).or(Q0).or(J0).or(ep).or(tp).or(ip).or(np).or(rp).or(op).or(ap).or(sp).or(lp).or(cp).or(up).or(dp).or(pp).or(hp).or(fp).or(wp).or(gp).or(mp).or(vp).or(bp).or(xp).or(yp).or(Cp).or(Zl).or(_p).or(Gl).or(kp).or(Tp).or(Sp).or(Ap)})).or(L.extend({type:j("APP_UPDATE_EMAIL"),payload:_0})).or(L.extend({type:j("APP_UPDATE_EMAIL_PRIMARY_OTP"),payload:T0})).or(L.extend({type:j("APP_UPDATE_EMAIL_SECONDARY_OTP"),payload:k0})).or(L.extend({type:j("APP_SYNC_THEME"),payload:S0})).or(L.extend({type:j("APP_SYNC_DAPP_DATA"),payload:A0})),L.extend({type:j("FRAME_SWITCH_NETWORK_ERROR"),payload:Oe}).or(L.extend({type:j("FRAME_SWITCH_NETWORK_SUCCESS"),payload:M0})).or(L.extend({type:j("FRAME_CONNECT_EMAIL_SUCCESS"),payload:$0})).or(L.extend({type:j("FRAME_CONNECT_EMAIL_ERROR"),payload:Oe})).or(L.extend({type:j("FRAME_GET_FARCASTER_URI_SUCCESS"),payload:R0})).or(L.extend({type:j("FRAME_GET_FARCASTER_URI_ERROR"),payload:Oe})).or(L.extend({type:j("FRAME_CONNECT_FARCASTER_SUCCESS"),payload:I0})).or(L.extend({type:j("FRAME_CONNECT_FARCASTER_ERROR"),payload:Oe})).or(L.extend({type:j("FRAME_CONNECT_OTP_ERROR"),payload:Oe})).or(L.extend({type:j("FRAME_CONNECT_OTP_SUCCESS")})).or(L.extend({type:j("FRAME_CONNECT_DEVICE_ERROR"),payload:Oe})).or(L.extend({type:j("FRAME_CONNECT_DEVICE_SUCCESS")})).or(L.extend({type:j("FRAME_CONNECT_SOCIAL_SUCCESS"),payload:O0})).or(L.extend({type:j("FRAME_CONNECT_SOCIAL_ERROR"),payload:Oe})).or(L.extend({type:j("FRAME_GET_USER_ERROR"),payload:Oe})).or(L.extend({type:j("FRAME_GET_USER_SUCCESS"),payload:P0})).or(L.extend({type:j("FRAME_GET_SOCIAL_REDIRECT_URI_ERROR"),payload:Oe})).or(L.extend({type:j("FRAME_GET_SOCIAL_REDIRECT_URI_SUCCESS"),payload:D0})).or(L.extend({type:j("FRAME_SIGN_OUT_ERROR"),payload:Oe})).or(L.extend({type:j("FRAME_SIGN_OUT_SUCCESS")})).or(L.extend({type:j("FRAME_IS_CONNECTED_ERROR"),payload:Oe})).or(L.extend({type:j("FRAME_IS_CONNECTED_SUCCESS"),payload:U0})).or(L.extend({type:j("FRAME_GET_CHAIN_ID_ERROR"),payload:Oe})).or(L.extend({type:j("FRAME_GET_CHAIN_ID_SUCCESS"),payload:W0})).or(L.extend({type:j("FRAME_RPC_REQUEST_ERROR"),payload:Oe})).or(L.extend({type:j("FRAME_RPC_REQUEST_SUCCESS"),payload:z0})).or(L.extend({type:j("FRAME_SESSION_UPDATE"),payload:ql})).or(L.extend({type:j("FRAME_UPDATE_EMAIL_ERROR"),payload:Oe})).or(L.extend({type:j("FRAME_UPDATE_EMAIL_SUCCESS"),payload:N0})).or(L.extend({type:j("FRAME_UPDATE_EMAIL_PRIMARY_OTP_ERROR"),payload:Oe})).or(L.extend({type:j("FRAME_UPDATE_EMAIL_PRIMARY_OTP_SUCCESS")})).or(L.extend({type:j("FRAME_UPDATE_EMAIL_SECONDARY_OTP_ERROR"),payload:Oe})).or(L.extend({type:j("FRAME_UPDATE_EMAIL_SECONDARY_OTP_SUCCESS"),payload:j0})).or(L.extend({type:j("FRAME_SYNC_THEME_ERROR"),payload:Oe})).or(L.extend({type:j("FRAME_SYNC_THEME_SUCCESS")})).or(L.extend({type:j("FRAME_SYNC_DAPP_DATA_ERROR"),payload:Oe})).or(L.extend({type:j("FRAME_SYNC_DAPP_DATA_SUCCESS")})).or(L.extend({type:j("FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS"),payload:L0})).or(L.extend({type:j("FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR"),payload:Oe})).or(L.extend({type:j("FRAME_INIT_SMART_ACCOUNT_ERROR"),payload:Oe})).or(L.extend({type:j("FRAME_SET_PREFERRED_ACCOUNT_SUCCESS"),payload:B0})).or(L.extend({type:j("FRAME_SET_PREFERRED_ACCOUNT_ERROR"),payload:Oe}));const Yl={set(i,e){ar.isClient&&localStorage.setItem(`${Di.STORAGE_KEY}${i}`,e)},get(i){return ar.isClient?localStorage.getItem(`${Di.STORAGE_KEY}${i}`):null},delete(i,e){ar.isClient&&(e?localStorage.removeItem(i):localStorage.removeItem(`${Di.STORAGE_KEY}${i}`))}},Kl={address:/^0x(?:[A-Fa-f0-9]{40})$/u,transactionHash:/^0x(?:[A-Fa-f0-9]{64})$/u,signedMessage:/^0x(?:[a-fA-F0-9]{62,})$/u},ta=30*1e3,ar={checkIfAllowedToTriggerEmail(){const i=Yl.get(Di.LAST_EMAIL_LOGIN_TIME);if(i){const e=Date.now()-Number(i);if(e<ta){const t=Math.ceil((ta-e)/1e3);throw new Error(`Please try again after ${t} seconds`)}}},getTimeToNextEmailLogin(){const i=Yl.get(Di.LAST_EMAIL_LOGIN_TIME);if(i){const e=Date.now()-Number(i);if(e<ta)return Math.ceil((ta-e)/1e3)}return 0},checkIfRequestExists(i){return ae.NOT_SAFE_RPC_METHODS.includes(i.method)||ae.SAFE_RPC_METHODS.includes(i.method)},getResponseType(i){return typeof i=="string"&&((i==null?void 0:i.match(Kl.transactionHash))||(i==null?void 0:i.match(Kl.signedMessage)))?Di.RPC_RESPONSE_TYPE_TX:Di.RPC_RESPONSE_TYPE_OBJECT},checkIfRequestIsAllowed(i){return ae.SAFE_RPC_METHODS.includes(i.method)},isClient:typeof window<"u"},ye=$e({transactions:[],coinbaseTransactions:{},transactionsByYear:{},lastNetworkInView:void 0,loading:!1,empty:!1,next:void 0}),We={state:ye,subscribe(i){return Ye(ye,()=>i(ye))},setLastNetworkInView(i){ye.lastNetworkInView=i},async fetchTransactions(i,e){const{projectId:t}=A.state;if(!t||!i)throw new Error("Transactions can't be fetched without a projectId and an accountAddress");ye.loading=!0;try{const r=await ke.fetchTransactions({account:i,projectId:t,cursor:ye.next,onramp:e,cache:e==="coinbase"?"no-cache":void 0}),o=this.filterSpamTransactions(r.data),n=this.filterByConnectedChain(o),a=[...ye.transactions,...n];ye.loading=!1,e==="coinbase"?ye.coinbaseTransactions=this.groupTransactionsByYearAndMonth(ye.coinbaseTransactions,r.data):(ye.transactions=a,ye.transactionsByYear=this.groupTransactionsByYearAndMonth(ye.transactionsByYear,n)),ye.empty=a.length===0,ye.next=r.next?r.next:void 0}catch{R.sendEvent({type:"track",event:"ERROR_FETCH_TRANSACTIONS",properties:{address:i,projectId:t,cursor:ye.next,isSmartAccount:m.state.preferredAccountType===ae.ACCOUNT_TYPES.SMART_ACCOUNT}}),z.showError("Failed to fetch transactions"),ye.loading=!1,ye.empty=!0,ye.next=void 0}},groupTransactionsByYearAndMonth(i={},e=[]){const t=i;return e.forEach(r=>{const o=new Date(r.metadata.minedAt).getFullYear(),n=new Date(r.metadata.minedAt).getMonth(),a=t[o]??{},p=(a[n]??[]).filter(h=>h.id!==r.id);t[o]={...a,[n]:[...p,r].sort((h,x)=>new Date(x.metadata.minedAt).getTime()-new Date(h.metadata.minedAt).getTime())}}),t},filterSpamTransactions(i){return i.filter(e=>!e.transfers.every(r=>{var o;return((o=r.nft_info)==null?void 0:o.flags.is_spam)===!0}))},filterByConnectedChain(i){var r;const e=(r=T.state.caipNetwork)==null?void 0:r.id;return i.filter(o=>o.metadata.chain===e)},clearCursor(){ye.next=void 0},resetTransactions(){ye.transactions=[],ye.transactionsByYear={},ye.lastNetworkInView=void 0,ye.loading=!1,ye.empty=!1,ye.next=void 0}},it=$e({wcError:!1,buffering:!1}),G={state:it,subscribeKey(i,e){return at(it,i,e)},_getClient(){return y.getConnectionControllerClient()},setClient(i){it._client=fn(i)},async connectWalletConnect(){oe.setConnectedConnector("WALLET_CONNECT"),await this._getClient().connectWalletConnect(i=>{it.wcUri=i,it.wcPairingExpiry=k.getPairingExpiry()})},async connectExternal(i,e){var t,r;await((r=(t=this._getClient()).connectExternal)==null?void 0:r.call(t,i)),y.setActiveChain(e),oe.setConnectedConnector(i.type)},async reconnectExternal(i){var e,t;await((t=(e=this._getClient()).reconnectExternal)==null?void 0:t.call(e,i)),oe.setConnectedConnector(i.type)},async setPreferredAccountType(i){var t;q.setLoading(!0);const e=P.getAuthConnector();e&&(await(e==null?void 0:e.provider.setPreferredAccount(i)),await this.reconnectExternal(e),q.setLoading(!1),R.sendEvent({type:"track",event:"SET_PREFERRED_ACCOUNT_TYPE",properties:{accountType:i,network:((t=T.state.caipNetwork)==null?void 0:t.id)||""}}))},async signMessage(i){return this._getClient().signMessage(i)},parseUnits(i,e){return this._getClient().parseUnits(i,e)},formatUnits(i,e){return this._getClient().formatUnits(i,e)},async sendTransaction(i){return this._getClient().sendTransaction(i)},async estimateGas(i){return this._getClient().estimateGas(i)},async writeContract(i){return this._getClient().writeContract(i)},async getEnsAddress(i){return this._getClient().getEnsAddress(i)},async getEnsAvatar(i){return this._getClient().getEnsAvatar(i)},checkInstalled(i){var e,t;return(t=(e=this._getClient()).checkInstalled)==null?void 0:t.call(e,i)},resetWcConnection(){it.wcUri=void 0,it.wcPairingExpiry=void 0,it.wcLinking=void 0,it.recentWallet=void 0,We.resetTransactions(),oe.deleteWalletConnectDeepLink()},setWcLinking(i){it.wcLinking=i},setWcError(i){it.wcError=i,it.buffering=!1},setRecentWallet(i){it.recentWallet=i},setBuffering(i){it.buffering=i},async disconnect(){const i=this._getClient();try{await i.disconnect(),oe.removeConnectedWalletImageUrl(),this.resetWcConnection()}catch{throw new Error("Failed to disconnect")}}},jr={async getTokenList(){var r;const i=T.state.caipNetwork,e=await ke.fetchSwapTokens({chainId:i==null?void 0:i.id,projectId:A.state.projectId});return((r=e==null?void 0:e.tokens)==null?void 0:r.map(o=>({...o,eip2612:!1,quantity:{decimals:"0",numeric:"0"},price:0,value:0})))||[]},async fetchGasPrice(){const i=A.state.projectId,e=T.state.caipNetwork;return e?await ke.fetchGasPrice({projectId:i,chainId:e.id}):null},async fetchSwapAllowance({tokenAddress:i,userAddress:e,sourceTokenAmount:t,sourceTokenDecimals:r}){const o=A.state.projectId,n=await ke.fetchSwapAllowance({projectId:o,tokenAddress:i,userAddress:e});if(n!=null&&n.allowance&&t&&r){const a=G.parseUnits(t,r);return BigInt(n.allowance)>=a}return!1},async getMyTokensWithBalance(i){const e=m.state.address,t=T.state.caipNetwork;if(!e||!t)return[];const o=(await ke.getBalance(e,t.id,i)).balances.filter(n=>n.quantity.decimals!=="0");return m.setTokenBalance(o),this.mapBalancesToSwapTokens(o)},mapBalancesToSwapTokens(i){return(i==null?void 0:i.map(e=>({...e,address:e!=null&&e.address?e.address:`${e.chainId}:${Ue.NATIVE_TOKEN_ADDRESS}`,decimals:parseInt(e.quantity.decimals,10),logoUri:e.iconUrl,eip2612:!1})))||[]}},_e=$e({view:"Connect",history:["Connect"],transactionStack:[]}),g={state:_e,subscribeKey(i,e){return at(_e,i,e)},pushTransactionStack(i){_e.transactionStack.push(i)},popTransactionStack(i){var t,r;const e=_e.transactionStack.pop();e&&(i?(this.goBack(),(t=e==null?void 0:e.onCancel)==null||t.call(e)):(e.goBack?this.goBack():e.view&&this.reset(e.view),(r=e==null?void 0:e.onSuccess)==null||r.call(e)))},push(i,e){i!==_e.view&&(_e.view=i,_e.history.push(i),_e.data=e)},reset(i){_e.view=i,_e.history=[i]},replace(i,e){_e.history.length>=1&&_e.history.at(-1)!==i&&(_e.view=i,_e.history[_e.history.length-1]=i,_e.data=e)},goBack(){if(_e.history.length>1){_e.history.pop();const[i]=_e.history.slice(-1);i&&(_e.view=i)}},goBackToIndex(i){if(_e.history.length>1){_e.history=_e.history.slice(0,i+1);const[e]=_e.history.slice(-1);e&&(_e.view=e)}}},pi={getGasPriceInEther(i,e){const t=e*i;return Number(t)/1e18},getGasPriceInUSD(i,e,t){const r=pi.getGasPriceInEther(e,t);return ue.bigNumber(i).multipliedBy(r).toNumber()},getPriceImpact({sourceTokenAmount:i,sourceTokenPriceInUSD:e,toTokenPriceInUSD:t,toTokenAmount:r}){const o=ue.bigNumber(i).multipliedBy(e),n=ue.bigNumber(r).multipliedBy(t);return o.minus(n).dividedBy(o).multipliedBy(100).toNumber()},getMaxSlippage(i,e){const t=ue.bigNumber(i).dividedBy(100);return ue.multiply(e,t).toNumber()},getProviderFee(i,e=.0085){return ue.bigNumber(i).multipliedBy(e).toString()},isInsufficientNetworkTokenForGas(i,e){const t=e||"0";return ue.bigNumber(i).isZero()?!0:ue.bigNumber(ue.bigNumber(t)).isGreaterThan(i)},isInsufficientSourceTokenForSwap(i,e,t){var n,a;const r=(a=(n=t==null?void 0:t.find(s=>s.address===e))==null?void 0:n.quantity)==null?void 0:a.numeric;return ue.bigNumber(r||"0").isLessThan(i)},getToTokenAmount({sourceToken:i,toToken:e,sourceTokenPrice:t,toTokenPrice:r,sourceTokenAmount:o}){if(o==="0"||!i||!e)return"0";const n=i.decimals,a=t,s=e.decimals,p=r;if(p<=0)return"0";const h=ue.bigNumber(o).multipliedBy(.0085),_=ue.bigNumber(o).minus(h).multipliedBy(ue.bigNumber(10).pow(n)),D=ue.bigNumber(a).dividedBy(p),B=n-s;return _.multipliedBy(D).dividedBy(ue.bigNumber(10).pow(B)).dividedBy(ue.bigNumber(10).pow(s)).toFixed(s).toString()}},Xl=15e4,Ep=6,nt={initializing:!1,initialized:!1,loadingPrices:!1,loadingQuote:!1,loadingApprovalTransaction:!1,loadingBuildTransaction:!1,loadingTransaction:!1,fetchError:!1,approvalTransaction:void 0,swapTransaction:void 0,transactionError:void 0,sourceToken:void 0,sourceTokenAmount:"",sourceTokenPriceInUSD:0,toToken:void 0,toTokenAmount:"",toTokenPriceInUSD:0,networkPrice:"0",networkBalanceInUSD:"0",networkTokenSymbol:"",inputError:void 0,slippage:Ue.CONVERT_SLIPPAGE_TOLERANCE,tokens:void 0,popularTokens:void 0,suggestedTokens:void 0,foundTokens:void 0,myTokensWithBalance:void 0,tokensPriceMap:{},gasFee:"0",gasPriceInUSD:0,priceImpact:void 0,maxSlippage:void 0,providerFee:void 0},v=$e(nt),E={state:v,subscribe(i){return Ye(v,()=>i(v))},subscribeKey(i,e){return at(v,i,e)},getParams(){var h,x,_,D,B,ne,se,J;const i=T.state.caipNetwork,e=m.state.address,t=`${i==null?void 0:i.id}:${Ue.NATIVE_TOKEN_ADDRESS}`,r=oe.getConnectedConnector(),o=P.getAuthConnector();if(!e)throw new Error("No address found to swap the tokens from.");const n=m.state.caipAddress,a=!((h=v.toToken)!=null&&h.address)||!((x=v.toToken)!=null&&x.decimals),s=!((_=v.sourceToken)!=null&&_.address)||!((D=v.sourceToken)!=null&&D.decimals)||!ue.bigNumber(v.sourceTokenAmount).isGreaterThan(0),p=!v.sourceTokenAmount;return{networkAddress:t,fromAddress:e,fromCaipAddress:m.state.caipAddress,sourceTokenAddress:(B=v.sourceToken)==null?void 0:B.address,toTokenAddress:(ne=v.toToken)==null?void 0:ne.address,toTokenAmount:v.toTokenAmount,toTokenDecimals:(se=v.toToken)==null?void 0:se.decimals,sourceTokenAmount:v.sourceTokenAmount,sourceTokenDecimals:(J=v.sourceToken)==null?void 0:J.decimals,invalidToToken:a,invalidSourceToken:s,invalidSourceTokenAmount:p,availableToSwap:n&&!a&&!s&&!p,isAuthConnector:(o==null?void 0:o.walletFeatures)&&r==="AUTH"}},setSourceToken(i){if(!i){v.sourceToken=i,v.sourceTokenAmount="",v.sourceTokenPriceInUSD=0;return}v.sourceToken=i,this.setTokenPrice(i.address,"sourceToken")},setSourceTokenAmount(i){v.sourceTokenAmount=i},setToToken(i){if(!i){v.toToken=i,v.toTokenAmount="",v.toTokenPriceInUSD=0;return}v.toToken=i,this.setTokenPrice(i.address,"toToken")},setToTokenAmount(i){v.toTokenAmount=i?ue.formatNumberToLocalString(i,Ep):""},async setTokenPrice(i,e){const{availableToSwap:t}=this.getParams();let r=v.tokensPriceMap[i]||0;r||(v.loadingPrices=!0,r=await this.getAddressPrice(i)),e==="sourceToken"?v.sourceTokenPriceInUSD=r:e==="toToken"&&(v.toTokenPriceInUSD=r),v.loadingPrices&&(v.loadingPrices=!1,t&&this.swapTokens())},switchTokens(){if(v.initializing||!v.initialized)return;const i=v.toToken?{...v.toToken}:void 0,e=v.sourceToken?{...v.sourceToken}:void 0,t=i&&v.toTokenAmount===""?"1":v.toTokenAmount;this.setSourceToken(i),this.setToToken(e),this.setSourceTokenAmount(t),this.setToTokenAmount(""),this.swapTokens()},resetState(){v.myTokensWithBalance=nt.myTokensWithBalance,v.tokensPriceMap=nt.tokensPriceMap,v.initialized=nt.initialized,v.sourceToken=nt.sourceToken,v.sourceTokenAmount=nt.sourceTokenAmount,v.sourceTokenPriceInUSD=nt.sourceTokenPriceInUSD,v.toToken=nt.toToken,v.toTokenAmount=nt.toTokenAmount,v.toTokenPriceInUSD=nt.toTokenPriceInUSD,v.networkPrice=nt.networkPrice,v.networkTokenSymbol=nt.networkTokenSymbol,v.networkBalanceInUSD=nt.networkBalanceInUSD,v.inputError=nt.inputError},resetValues(){var t;const{networkAddress:i}=this.getParams(),e=(t=v.tokens)==null?void 0:t.find(r=>r.address===i);this.setSourceToken(e),this.setToToken(void 0)},getApprovalLoadingState(){return v.loadingApprovalTransaction},clearError(){v.transactionError=void 0},async initializeState(){if(!v.initializing){if(v.initializing=!0,!v.initialized)try{await this.fetchTokens(),v.initialized=!0}catch{v.initialized=!1,z.showError("Failed to initialize swap"),g.goBack()}v.initializing=!1}},async fetchTokens(){var t;const{networkAddress:i}=this.getParams();await this.getTokenList(),await this.getNetworkTokenPrice(),await this.getMyTokensWithBalance();const e=(t=v.tokens)==null?void 0:t.find(r=>r.address===i);e&&(v.networkTokenSymbol=e.symbol,this.setSourceToken(e),this.setSourceTokenAmount("1"))},async getTokenList(){const i=await jr.getTokenList();v.tokens=i,v.popularTokens=i.sort((e,t)=>e.symbol<t.symbol?-1:e.symbol>t.symbol?1:0),v.suggestedTokens=i.filter(e=>!!Ue.SWAP_SUGGESTED_TOKENS.includes(e.symbol),{})},async getAddressPrice(i){var p,h;const e=v.tokensPriceMap[i];if(e)return e;const r=(await ke.fetchTokenPrice({projectId:A.state.projectId,addresses:[i]})).fungibles||[],o=[...v.tokens||[],...v.myTokensWithBalance||[]],n=(p=o==null?void 0:o.find(x=>x.address===i))==null?void 0:p.symbol,a=((h=r.find(x=>x.symbol.toLowerCase()===(n==null?void 0:n.toLowerCase())))==null?void 0:h.price)||0,s=parseFloat(a.toString());return v.tokensPriceMap[i]=s,s},async getNetworkTokenPrice(){var o;const{networkAddress:i}=this.getParams(),t=(o=(await ke.fetchTokenPrice({projectId:A.state.projectId,addresses:[i]})).fungibles)==null?void 0:o[0],r=(t==null?void 0:t.price.toString())||"0";v.tokensPriceMap[i]=parseFloat(r),v.networkTokenSymbol=(t==null?void 0:t.symbol)||"",v.networkPrice=r},async getMyTokensWithBalance(i){const e=await jr.getMyTokensWithBalance(i);e&&(await this.getInitialGasPrice(),this.setBalances(e))},setBalances(i){const{networkAddress:e}=this.getParams(),t=T.state.caipNetwork;if(!t)return;const r=i.find(o=>o.address===e);i.forEach(o=>{v.tokensPriceMap[o.address]=o.price||0}),v.myTokensWithBalance=i.filter(o=>o.address.startsWith(t.id)),v.networkBalanceInUSD=r?ue.multiply(r.quantity.numeric,r.price).toString():"0"},async getInitialGasPrice(){const i=await jr.fetchGasPrice();if(!i)return{gasPrice:null,gasPriceInUsd:null};const e=i.standard,t=BigInt(e),r=BigInt(Xl),o=pi.getGasPriceInUSD(v.networkPrice,r,t);return v.gasFee=e,v.gasPriceInUSD=o,{gasPrice:t,gasPriceInUSD:v.gasPriceInUSD}},async swapTokens(){var h,x;const i=m.state.address,e=v.sourceToken,t=v.toToken,r=ue.bigNumber(v.sourceTokenAmount).isGreaterThan(0);if(!t||!e||v.loadingPrices||!r)return;v.loadingQuote=!0;const o=ue.bigNumber(v.sourceTokenAmount).multipliedBy(10**e.decimals),n=await ke.fetchSwapQuote({userAddress:i,projectId:A.state.projectId,from:e.address,to:t.address,gasPrice:v.gasFee,amount:o.toString()});v.loadingQuote=!1;const a=(x=(h=n==null?void 0:n.quotes)==null?void 0:h[0])==null?void 0:x.toAmount;if(!a)return;const s=ue.bigNumber(a).dividedBy(10**t.decimals).toString();this.setToTokenAmount(s),this.hasInsufficientToken(v.sourceTokenAmount,e.address)?v.inputError="Insufficient balance":(v.inputError=void 0,this.setTransactionDetails())},async getTransaction(){const{fromCaipAddress:i,availableToSwap:e}=this.getParams(),t=v.sourceToken,r=v.toToken;if(!(!i||!e||!t||!r||v.loadingQuote))try{v.loadingBuildTransaction=!0;const o=await jr.fetchSwapAllowance({userAddress:i,tokenAddress:t.address,sourceTokenAmount:v.sourceTokenAmount,sourceTokenDecimals:t.decimals});let n;return o?n=await this.createSwapTransaction():n=await this.createAllowanceTransaction(),v.loadingBuildTransaction=!1,v.fetchError=!1,n}catch{g.goBack(),z.showError("Failed to check allowance"),v.loadingBuildTransaction=!1,v.approvalTransaction=void 0,v.swapTransaction=void 0,v.fetchError=!0;return}},async createAllowanceTransaction(){const{fromCaipAddress:i,fromAddress:e,sourceTokenAddress:t,toTokenAddress:r}=this.getParams();if(!(!i||!r)){if(!t)throw new Error("createAllowanceTransaction - No source token address found.");try{const o=await ke.generateApproveCalldata({projectId:A.state.projectId,from:t,to:r,userAddress:i}),n=await G.estimateGas({address:e,to:k.getPlainAddress(o.tx.to),data:o.tx.data}),a={data:o.tx.data,to:k.getPlainAddress(o.tx.from),gas:n,gasPrice:BigInt(o.tx.eip155.gasPrice),value:BigInt(o.tx.value),toAmount:v.toTokenAmount};return v.swapTransaction=void 0,v.approvalTransaction=a,a}catch{g.goBack(),z.showError("Failed to create approval transaction"),v.approvalTransaction=void 0,v.swapTransaction=void 0,v.fetchError=!0;return}}},async createSwapTransaction(){const{networkAddress:i,fromCaipAddress:e,sourceTokenAmount:t}=this.getParams(),r=v.sourceToken,o=v.toToken;if(!e||!t||!r||!o)return;const n=G.parseUnits(t,r.decimals).toString();try{const a=await ke.generateSwapCalldata({projectId:A.state.projectId,userAddress:e,from:r.address,to:o.address,amount:n}),s=r.address===i,p=BigInt(a.tx.eip155.gas),h=BigInt(a.tx.eip155.gasPrice),x={data:a.tx.data,to:k.getPlainAddress(a.tx.to),gas:p,gasPrice:h,value:BigInt(s?n:"0"),toAmount:v.toTokenAmount};return v.gasPriceInUSD=pi.getGasPriceInUSD(v.networkPrice,p,h),v.approvalTransaction=void 0,v.swapTransaction=x,x}catch{g.goBack(),z.showError("Failed to create transaction"),v.approvalTransaction=void 0,v.swapTransaction=void 0,v.fetchError=!0;return}},async sendTransactionForApproval(i){const{fromAddress:e,isAuthConnector:t}=this.getParams();v.loadingApprovalTransaction=!0;const r="Approve limit increase in your wallet";t?g.pushTransactionStack({view:null,goBack:!0,onSuccess(){z.showLoading(r)}}):z.showLoading(r);try{await G.sendTransaction({address:e,to:i.to,data:i.data,value:BigInt(i.value),gasPrice:BigInt(i.gasPrice)}),await this.swapTokens(),await this.getTransaction(),v.approvalTransaction=void 0,v.loadingApprovalTransaction=!1}catch(o){const n=o;v.transactionError=n==null?void 0:n.shortMessage,v.loadingApprovalTransaction=!1,z.showError((n==null?void 0:n.shortMessage)||"Transaction error")}},async sendTransactionForSwap(i){var a,s,p,h,x,_,D,B,ne,se,J,ve;if(!i)return;const{fromAddress:e,toTokenAmount:t,isAuthConnector:r}=this.getParams();v.loadingTransaction=!0;const o=`Swapping ${(a=v.sourceToken)==null?void 0:a.symbol} to ${ue.formatNumberToLocalString(t,3)} ${(s=v.toToken)==null?void 0:s.symbol}`,n=`Swapped ${(p=v.sourceToken)==null?void 0:p.symbol} to ${ue.formatNumberToLocalString(t,3)} ${(h=v.toToken)==null?void 0:h.symbol}`;r?g.pushTransactionStack({view:"Account",goBack:!1,onSuccess(){z.showLoading(o),E.resetState()}}):z.showLoading("Confirm transaction in your wallet");try{const le=[(x=v.sourceToken)==null?void 0:x.address,(_=v.toToken)==null?void 0:_.address].join(","),ge=await G.sendTransaction({address:e,to:i.to,data:i.data,gas:i.gas,gasPrice:BigInt(i.gasPrice),value:i.value});return v.loadingTransaction=!1,z.showSuccess(n),R.sendEvent({type:"track",event:"SWAP_SUCCESS",properties:{network:((D=T.state.caipNetwork)==null?void 0:D.id)||"",swapFromToken:((B=this.state.sourceToken)==null?void 0:B.symbol)||"",swapToToken:((ne=this.state.toToken)==null?void 0:ne.symbol)||"",swapFromAmount:this.state.sourceTokenAmount||"",swapToAmount:this.state.toTokenAmount||"",isSmartAccount:m.state.preferredAccountType===ae.ACCOUNT_TYPES.SMART_ACCOUNT}}),E.resetState(),r||g.replace("Account"),E.getMyTokensWithBalance(le),ge}catch(le){const ge=le;v.transactionError=ge==null?void 0:ge.shortMessage,v.loadingTransaction=!1,z.showError((ge==null?void 0:ge.shortMessage)||"Transaction error"),R.sendEvent({type:"track",event:"SWAP_ERROR",properties:{network:((se=T.state.caipNetwork)==null?void 0:se.id)||"",swapFromToken:((J=this.state.sourceToken)==null?void 0:J.symbol)||"",swapToToken:((ve=this.state.toToken)==null?void 0:ve.symbol)||"",swapFromAmount:this.state.sourceTokenAmount||"",swapToAmount:this.state.toTokenAmount||"",isSmartAccount:m.state.preferredAccountType===ae.ACCOUNT_TYPES.SMART_ACCOUNT}});return}},hasInsufficientToken(i,e){const t=pi.isInsufficientSourceTokenForSwap(i,e,v.myTokensWithBalance);return pi.isInsufficientNetworkTokenForGas(v.networkBalanceInUSD,v.gasPriceInUSD)||t},setTransactionDetails(){const{toTokenAddress:i,toTokenDecimals:e}=this.getParams();!i||!e||(v.gasPriceInUSD=pi.getGasPriceInUSD(v.networkPrice,BigInt(v.gasFee),BigInt(Xl)),v.priceImpact=pi.getPriceImpact({sourceTokenAmount:v.sourceTokenAmount,sourceTokenPriceInUSD:v.sourceTokenPriceInUSD,toTokenPriceInUSD:v.toTokenPriceInUSD,toTokenAmount:v.toTokenAmount}),v.maxSlippage=pi.getMaxSlippage(v.slippage,v.toTokenAmount),v.providerFee=pi.getProviderFee(v.sourceTokenAmount))}},Ql=$e({isConnected:!1,currentTab:0,tokenBalance:[],smartAccountDeployed:!1,addressLabels:new Map,allAccounts:[]}),m={state:Ql,replaceState(i){Object.assign(Ql,i)},subscribe(i){return y.subscribeChainProp("accountState",e=>{if(e)return i(e)})},subscribeKey(i,e){let t;return y.subscribeChainProp("accountState",r=>{if(r){const o=r[i];t!==o&&(t=o,e(o))}})},setIsConnected(i,e){y.setAccountProp("isConnected",i,e)},setCaipAddress(i,e){const t=i?k.getPlainAddress(i):void 0;y.setAccountProp("caipAddress",i,e),y.setAccountProp("address",t,e)},setBalance(i,e,t){y.setAccountProp("balance",i,t),y.setAccountProp("balanceSymbol",e,t)},setProfileName(i,e){y.setAccountProp("profileName",i,e)},setProfileImage(i,e){y.setAccountProp("profileImage",i,e)},setAddressExplorerUrl(i,e){y.setAccountProp("addressExplorerUrl",i,e)},setSmartAccountDeployed(i,e){y.setAccountProp("smartAccountDeployed",i,e)},setCurrentTab(i,e){y.setAccountProp("currentTab",i,e)},setTokenBalance(i,e){i&&y.setAccountProp("tokenBalance",i,e)},setShouldUpdateToAddress(i,e){y.setAccountProp("shouldUpdateToAddress",i,e)},setAllAccounts(i,e){y.setAccountProp("allAccounts",i,e)},addAddressLabel(i,e){const t=y.getAccountProp("addressLabels")||new Map;t.set(i,e),y.setAccountProp("addressLabels",t,y.state.activeChain)},removeAddressLabel(i){const e=y.getAccountProp("addressLabels")||new Map;e.delete(i),y.setAccountProp("addressLabels",e,y.state.activeChain)},setConnectedWalletInfo(i,e){y.setAccountProp("connectedWalletInfo",i,e)},setPreferredAccountType(i,e){y.setAccountProp("preferredAccountType",i,e)},setSocialProvider(i,e){i&&y.setAccountProp("socialProvider",i,e)},setSocialWindow(i,e){i&&y.setAccountProp("socialWindow",fn(i),e)},setFarcasterUrl(i,e){i&&y.setAccountProp("farcasterUrl",i,e)},async fetchTokenBalance(){var r,o;const i=(r=T.state.caipNetwork)==null?void 0:r.id,e=(o=T.state.caipNetwork)==null?void 0:o.chain,t=m.state.address;try{if(t&&i){const n=await ke.getBalance(t,i),a=n.balances.filter(s=>s.quantity.decimals!=="0");this.setTokenBalance(a,e),E.setBalances(jr.mapBalancesToSwapTokens(n.balances))}}catch{z.showError("Failed to fetch token balance")}},resetAccount(i){y.resetAccount(i)}},Ht=$e({loading:!1,open:!1,shake:!1}),q={state:Ht,subscribe(i){return Ye(Ht,()=>i(Ht))},subscribeKey(i,e){return at(Ht,i,e)},async open(i){await V.state.prefetchPromise;const e=m.state.isConnected;i!=null&&i.view?g.reset(i.view):e?g.reset("Account"):g.reset("Connect"),Ht.open=!0,fi.set({open:!0}),R.sendEvent({type:"track",event:"MODAL_OPEN",properties:{connected:e}})},close(){const i=m.state.isConnected;Ht.open=!1,fi.set({open:!1}),R.sendEvent({type:"track",event:"MODAL_CLOSE",properties:{connected:i}})},setLoading(i){Ht.loading=i,fi.set({loading:i})},shake(){Ht.shake||(Ht.shake=!0,setTimeout(()=>{Ht.shake=!1},500))}},Lr={id:"2b92315d-eab7-5bef-84fa-089a131333f5",name:"USD Coin",symbol:"USDC",networks:[{name:"ethereum-mainnet",display_name:"Ethereum",chain_id:"1",contract_address:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"},{name:"polygon-mainnet",display_name:"Polygon",chain_id:"137",contract_address:"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"}]},Is={id:"USD",payment_method_limits:[{id:"card",min:"10.00",max:"7500.00"},{id:"ach_bank_account",min:"10.00",max:"25000.00"}]},$p={providers:Zc,selectedProvider:null,error:null,purchaseCurrency:Lr,paymentCurrency:Is,purchaseCurrencies:[Lr],paymentCurrencies:[],quotesLoading:!1},pe=$e($p),he={state:pe,subscribe(i){return Ye(pe,()=>i(pe))},subscribeKey(i,e){return at(pe,i,e)},setSelectedProvider(i){pe.selectedProvider=i},setPurchaseCurrency(i){pe.purchaseCurrency=i},setPaymentCurrency(i){pe.paymentCurrency=i},setPurchaseAmount(i){this.state.purchaseAmount=i},setPaymentAmount(i){this.state.paymentAmount=i},async getAvailableCurrencies(){const i=await ke.getOnrampOptions();pe.purchaseCurrencies=i.purchaseCurrencies,pe.paymentCurrencies=i.paymentCurrencies,pe.paymentCurrency=i.paymentCurrencies[0]||Is,pe.purchaseCurrency=i.purchaseCurrencies[0]||Lr,await V.fetchCurrencyImages(i.paymentCurrencies.map(e=>e.id)),await V.fetchTokenImages(i.purchaseCurrencies.map(e=>e.symbol))},async getQuote(){var i,e;pe.quotesLoading=!0;try{const t=await ke.getOnrampQuote({purchaseCurrency:pe.purchaseCurrency,paymentCurrency:pe.paymentCurrency,amount:((i=pe.paymentAmount)==null?void 0:i.toString())||"0",network:(e=pe.purchaseCurrency)==null?void 0:e.symbol});return pe.quotesLoading=!1,pe.purchaseAmount=Number(t.purchaseAmount.amount),t}catch(t){return pe.error=t.message,pe.quotesLoading=!1,null}finally{pe.quotesLoading=!1}},resetState(){pe.providers=Zc,pe.selectedProvider=null,pe.error=null,pe.purchaseCurrency=Lr,pe.paymentCurrency=Is,pe.purchaseCurrencies=[Lr],pe.paymentCurrencies=[],pe.paymentAmount=void 0,pe.purchaseAmount=void 0,pe.quotesLoading=!1}},He=$e({loading:!1}),fe={state:He,subscribe(i){return Ye(He,()=>i(He))},subscribeKey(i,e){return at(He,i,e)},setToken(i){i&&(He.token=fn(i))},setTokenAmount(i){He.sendTokenAmount=i},setReceiverAddress(i){He.receiverAddress=i},setReceiverProfileImageUrl(i){He.receiverProfileImageUrl=i},setReceiverProfileName(i){He.receiverProfileName=i},setGasPrice(i){He.gasPrice=i},setGasPriceInUsd(i){He.gasPriceInUSD=i},setLoading(i){He.loading=i},sendToken(){var i,e,t,r,o;(i=this.state.token)!=null&&i.address&&this.state.sendTokenAmount&&this.state.receiverAddress?(R.sendEvent({type:"track",event:"SEND_INITIATED",properties:{isSmartAccount:m.state.preferredAccountType===ae.ACCOUNT_TYPES.SMART_ACCOUNT,token:this.state.token.address,amount:this.state.sendTokenAmount,network:((e=T.state.caipNetwork)==null?void 0:e.id)||""}}),this.sendERC20Token({receiverAddress:this.state.receiverAddress,tokenAddress:this.state.token.address,sendTokenAmount:this.state.sendTokenAmount,decimals:this.state.token.quantity.decimals})):this.state.receiverAddress&&this.state.sendTokenAmount&&this.state.gasPrice&&((t=this.state.token)!=null&&t.quantity.decimals)&&(R.sendEvent({type:"track",event:"SEND_INITIATED",properties:{isSmartAccount:m.state.preferredAccountType===ae.ACCOUNT_TYPES.SMART_ACCOUNT,token:(r=this.state.token)==null?void 0:r.symbol,amount:this.state.sendTokenAmount,network:((o=T.state.caipNetwork)==null?void 0:o.id)||""}}),this.sendNativeToken({receiverAddress:this.state.receiverAddress,sendTokenAmount:this.state.sendTokenAmount,gasPrice:this.state.gasPrice,decimals:this.state.token.quantity.decimals}))},async sendNativeToken(i){var n,a,s,p;g.pushTransactionStack({view:"Account",goBack:!1});const e=i.receiverAddress,t=m.state.address,r=G.parseUnits(i.sendTokenAmount.toString(),Number(i.decimals)),o="0x";try{await G.sendTransaction({to:e,address:t,data:o,value:r,gasPrice:i.gasPrice}),z.showSuccess("Transaction started"),R.sendEvent({type:"track",event:"SEND_SUCCESS",properties:{isSmartAccount:m.state.preferredAccountType===ae.ACCOUNT_TYPES.SMART_ACCOUNT,token:((n=this.state.token)==null?void 0:n.symbol)||"",amount:i.sendTokenAmount,network:((a=T.state.caipNetwork)==null?void 0:a.id)||""}}),this.resetSend()}catch{R.sendEvent({type:"track",event:"SEND_ERROR",properties:{isSmartAccount:m.state.preferredAccountType===ae.ACCOUNT_TYPES.SMART_ACCOUNT,token:((s=this.state.token)==null?void 0:s.symbol)||"",amount:i.sendTokenAmount,network:((p=T.state.caipNetwork)==null?void 0:p.id)||""}}),z.showError("Something went wrong")}},async sendERC20Token(i){g.pushTransactionStack({view:"Account",goBack:!1});const e=G.parseUnits(i.sendTokenAmount.toString(),Number(i.decimals));try{m.state.address&&i.sendTokenAmount&&i.receiverAddress&&i.tokenAddress&&(await G.writeContract({fromAddress:m.state.address,tokenAddress:k.getPlainAddress(i.tokenAddress),receiverAddress:i.receiverAddress,tokenAmount:e,method:"transfer",abi:ld}),z.showSuccess("Transaction started"),this.resetSend())}catch{z.showError("Something went wrong")}},resetSend(){He.token=void 0,He.sendTokenAmount=void 0,He.receiverAddress=void 0,He.receiverProfileImageUrl=void 0,He.receiverProfileName=void 0,He.loading=!1}},Rt=$e({message:"",open:!1,triggerRect:{width:0,height:0,top:0,left:0},variant:"shade"}),lt={state:Rt,subscribe(i){return Ye(Rt,()=>i(Rt))},subscribeKey(i,e){return at(Rt,i,e)},showTooltip({message:i,triggerRect:e,variant:t}){Rt.open=!0,Rt.message=i,Rt.triggerRect=e,Rt.variant=t},hide(){Rt.open=!1,Rt.message="",Rt.triggerRect={width:0,height:0,top:0,left:0}}},Jl=2147483648,Rp={convertEVMChainIdToCoinType(i){if(i>=Jl)throw new Error("Invalid chainId");return(Jl|i)>>>0}},yt=$e({suggestions:[],loading:!1}),Ft={state:yt,subscribe(i){return Ye(yt,()=>i(yt))},subscribeKey(i,e){return at(yt,i,e)},async resolveName(i){var e,t;try{return await ke.lookupEnsName(i)}catch(r){const o=r;throw new Error(((t=(e=o==null?void 0:o.reasons)==null?void 0:e[0])==null?void 0:t.description)||"Error resolving name")}},async isNameRegistered(i){try{return await ke.lookupEnsName(i),!0}catch{return!1}},async getSuggestions(i){try{yt.loading=!0,yt.suggestions=[];const e=await ke.getEnsNameSuggestions(i);return yt.suggestions=e.suggestions.map(t=>({...t,name:t.name.replace(Ee.WC_NAME_SUFFIX,"")}))||[],yt.suggestions}catch(e){const t=this.parseEnsApiError(e,"Error fetching name suggestions");throw new Error(t)}finally{yt.loading=!1}},async getNamesForAddress(i){try{return T.state.caipNetwork?await ke.reverseLookupEnsName({address:i}):[]}catch(e){const t=this.parseEnsApiError(e,"Error fetching names for address");throw new Error(t)}},async registerName(i){const e=T.state.caipNetwork;if(!e)throw new Error("Network not found");const t=m.state.address,r=P.getAuthConnector();if(!t||!r)throw new Error("Address or auth connector not found");yt.loading=!0;try{const o=JSON.stringify({name:`${i}${Ee.WC_NAME_SUFFIX}`,attributes:{},timestamp:Math.floor(Date.now()/1e3)});g.pushTransactionStack({view:"RegisterAccountNameSuccess",goBack:!1,replace:!0,onCancel(){yt.loading=!1}});const n=await G.signMessage(o),a=Fc.caipNetworkIdToNumber(e.id);if(!a)throw new Error("Network not found");const s=Rp.convertEVMChainIdToCoinType(a);await ke.registerEnsName({coinType:s,address:t,signature:n,message:o}),m.setProfileName(`${i}${Ee.WC_NAME_SUFFIX}`),g.replace("RegisterAccountNameSuccess")}catch(o){const n=this.parseEnsApiError(o,`Error registering name ${i}`);throw g.replace("RegisterAccountName"),new Error(n)}finally{yt.loading=!1}},validateName(i){return/^[a-zA-Z0-9-]{4,}$/u.test(i)},parseEnsApiError(i,e){var r,o;const t=i;return((o=(r=t==null?void 0:t.reasons)==null?void 0:r[0])==null?void 0:o.description)||e}},we={async fetchWalletImage(i){if(i)return await V._fetchWalletImage(i),this.getWalletImageById(i)},getWalletImageById(i){if(i)return Me.state.walletImages[i]},getWalletImage(i){if(i!=null&&i.image_url)return i==null?void 0:i.image_url;if(i!=null&&i.image_id)return Me.state.walletImages[i.image_id]},getNetworkImage(i){if(i!=null&&i.imageUrl)return i==null?void 0:i.imageUrl;if(i!=null&&i.imageId)return Me.state.networkImages[i.imageId]},getConnectorImage(i){if(i!=null&&i.imageUrl)return i.imageUrl;if(i!=null&&i.imageId)return Me.state.connectorImages[i.imageId]}},Os={goBackOrCloseModal(){g.state.history.length>1?g.goBack():q.close()},navigateAfterNetworkSwitch(){const{history:i}=g.state,e=i.findIndex(t=>t==="Networks");e>=1?g.goBackToIndex(e-1):q.close()},navigateAfterPreferredAccountTypeSelect(){const{isSiweEnabled:i}=A.state;i&&y.state.activeChain===Ee.CHAIN.EVM?g.push("ConnectingSiwe"):g.push("Account")}};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const oa=globalThis,sl=oa.ShadowRoot&&(oa.ShadyCSS===void 0||oa.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ll=Symbol(),ec=new WeakMap;let iu=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==ll)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(sl&&e===void 0){const r=t!==void 0&&t.length===1;r&&(e=ec.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&ec.set(t,e))}return e}toString(){return this.cssText}};const Ct=i=>new iu(typeof i=="string"?i:i+"",void 0,ll),b=(i,...e)=>{const t=i.length===1?i[0]:e.reduce((r,o,n)=>r+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+i[n+1],i[0]);return new iu(t,i,ll)},Ip=(i,e)=>{if(sl)i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const r=document.createElement("style"),o=oa.litNonce;o!==void 0&&r.setAttribute("nonce",o),r.textContent=t.cssText,i.appendChild(r)}},tc=sl?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(const r of e.cssRules)t+=r.cssText;return Ct(t)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Op,defineProperty:Np,getOwnPropertyDescriptor:Pp,getOwnPropertyNames:Dp,getOwnPropertySymbols:Up,getPrototypeOf:Wp}=Object,Ui=globalThis,ic=Ui.trustedTypes,Mp=ic?ic.emptyScript:"",vs=Ui.reactiveElementPolyfillSupport,Br=(i,e)=>i,wa={toAttribute(i,e){switch(e){case Boolean:i=i?Mp:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}}return t}},cl=(i,e)=>!Op(i,e),nc={attribute:!0,type:String,converter:wa,reflect:!1,hasChanged:cl};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Ui.litPropertyMetadata??(Ui.litPropertyMetadata=new WeakMap);let ir=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=nc){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const r=Symbol(),o=this.getPropertyDescriptor(e,r,t);o!==void 0&&Np(this.prototype,e,o)}}static getPropertyDescriptor(e,t,r){const{get:o,set:n}=Pp(this.prototype,e)??{get(){return this[t]},set(a){this[t]=a}};return{get(){return o==null?void 0:o.call(this)},set(a){const s=o==null?void 0:o.call(this);n.call(this,a),this.requestUpdate(e,s,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??nc}static _$Ei(){if(this.hasOwnProperty(Br("elementProperties")))return;const e=Wp(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Br("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Br("properties"))){const t=this.properties,r=[...Dp(t),...Up(t)];for(const o of r)this.createProperty(o,t[o])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[r,o]of t)this.elementProperties.set(r,o)}this._$Eh=new Map;for(const[t,r]of this.elementProperties){const o=this._$Eu(t,r);o!==void 0&&this._$Eh.set(o,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const o of r)t.unshift(tc(o))}else e!==void 0&&t.push(tc(e));return t}static _$Eu(e,t){const r=t.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const r of t.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ip(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var r;return(r=t.hostConnected)==null?void 0:r.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var r;return(r=t.hostDisconnected)==null?void 0:r.call(t)})}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$EC(e,t){var n;const r=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,r);if(o!==void 0&&r.reflect===!0){const a=(((n=r.converter)==null?void 0:n.toAttribute)!==void 0?r.converter:wa).toAttribute(t,r.type);this._$Em=e,a==null?this.removeAttribute(o):this.setAttribute(o,a),this._$Em=null}}_$AK(e,t){var n;const r=this.constructor,o=r._$Eh.get(e);if(o!==void 0&&this._$Em!==o){const a=r.getPropertyOptions(o),s=typeof a.converter=="function"?{fromAttribute:a.converter}:((n=a.converter)==null?void 0:n.fromAttribute)!==void 0?a.converter:wa;this._$Em=o,this[o]=s.fromAttribute(t,a.type),this._$Em=null}}requestUpdate(e,t,r){if(e!==void 0){if(r??(r=this.constructor.getPropertyOptions(e)),!(r.hasChanged??cl)(this[e],t))return;this.P(e,t,r)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,t,r){this._$AL.has(e)||this._$AL.set(e,t),r.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,a]of this._$Ep)this[n]=a;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[n,a]of o)a.wrapped!==!0||this._$AL.has(n)||this[n]===void 0||this.P(n,this[n],a)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(r=this._$EO)==null||r.forEach(o=>{var n;return(n=o.hostUpdate)==null?void 0:n.call(o)}),this.update(t)):this._$EU()}catch(o){throw e=!1,this._$EU(),o}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(r=>{var o;return(o=r.hostUpdated)==null?void 0:o.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(t=>this._$EC(t,this[t]))),this._$EU()}updated(e){}firstUpdated(e){}};ir.elementStyles=[],ir.shadowRootOptions={mode:"open"},ir[Br("elementProperties")]=new Map,ir[Br("finalized")]=new Map,vs==null||vs({ReactiveElement:ir}),(Ui.reactiveElementVersions??(Ui.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const zr=globalThis,ga=zr.trustedTypes,rc=ga?ga.createPolicy("lit-html",{createHTML:i=>i}):void 0,nu="$lit$",Ni=`lit$${Math.random().toFixed(9).slice(2)}$`,ru="?"+Ni,jp=`<${ru}>`,bn=document,no=()=>bn.createComment(""),ro=i=>i===null||typeof i!="object"&&typeof i!="function",ul=Array.isArray,Lp=i=>ul(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",bs=`[ 	
\f\r]`,Mr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,oc=/-->/g,ac=/>/g,dn=RegExp(`>|${bs}(?:([^\\s"'>=/]+)(${bs}*=${bs}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),sc=/'/g,lc=/"/g,ou=/^(?:script|style|textarea|title)$/i,au=i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),l=au(1),C=au(2),xn=Symbol.for("lit-noChange"),Ne=Symbol.for("lit-nothing"),cc=new WeakMap,pn=bn.createTreeWalker(bn,129);function su(i,e){if(!ul(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return rc!==void 0?rc.createHTML(e):e}const Bp=(i,e)=>{const t=i.length-1,r=[];let o,n=e===2?"<svg>":e===3?"<math>":"",a=Mr;for(let s=0;s<t;s++){const p=i[s];let h,x,_=-1,D=0;for(;D<p.length&&(a.lastIndex=D,x=a.exec(p),x!==null);)D=a.lastIndex,a===Mr?x[1]==="!--"?a=oc:x[1]!==void 0?a=ac:x[2]!==void 0?(ou.test(x[2])&&(o=RegExp("</"+x[2],"g")),a=dn):x[3]!==void 0&&(a=dn):a===dn?x[0]===">"?(a=o??Mr,_=-1):x[1]===void 0?_=-2:(_=a.lastIndex-x[2].length,h=x[1],a=x[3]===void 0?dn:x[3]==='"'?lc:sc):a===lc||a===sc?a=dn:a===oc||a===ac?a=Mr:(a=dn,o=void 0);const B=a===dn&&i[s+1].startsWith("/>")?" ":"";n+=a===Mr?p+jp:_>=0?(r.push(h),p.slice(0,_)+nu+p.slice(_)+Ni+B):p+Ni+(_===-2?s:B)}return[su(i,n+(i[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),r]};class oo{constructor({strings:e,_$litType$:t},r){let o;this.parts=[];let n=0,a=0;const s=e.length-1,p=this.parts,[h,x]=Bp(e,t);if(this.el=oo.createElement(h,r),pn.currentNode=this.el.content,t===2||t===3){const _=this.el.content.firstChild;_.replaceWith(..._.childNodes)}for(;(o=pn.nextNode())!==null&&p.length<s;){if(o.nodeType===1){if(o.hasAttributes())for(const _ of o.getAttributeNames())if(_.endsWith(nu)){const D=x[a++],B=o.getAttribute(_).split(Ni),ne=/([.?@])?(.*)/.exec(D);p.push({type:1,index:n,name:ne[2],strings:B,ctor:ne[1]==="."?Vp:ne[1]==="?"?Hp:ne[1]==="@"?Fp:qa}),o.removeAttribute(_)}else _.startsWith(Ni)&&(p.push({type:6,index:n}),o.removeAttribute(_));if(ou.test(o.tagName)){const _=o.textContent.split(Ni),D=_.length-1;if(D>0){o.textContent=ga?ga.emptyScript:"";for(let B=0;B<D;B++)o.append(_[B],no()),pn.nextNode(),p.push({type:2,index:++n});o.append(_[D],no())}}}else if(o.nodeType===8)if(o.data===ru)p.push({type:2,index:n});else{let _=-1;for(;(_=o.data.indexOf(Ni,_+1))!==-1;)p.push({type:7,index:n}),_+=Ni.length-1}n++}}static createElement(e,t){const r=bn.createElement("template");return r.innerHTML=e,r}}function ur(i,e,t=i,r){var a,s;if(e===xn)return e;let o=r!==void 0?(a=t._$Co)==null?void 0:a[r]:t._$Cl;const n=ro(e)?void 0:e._$litDirective$;return(o==null?void 0:o.constructor)!==n&&((s=o==null?void 0:o._$AO)==null||s.call(o,!1),n===void 0?o=void 0:(o=new n(i),o._$AT(i,t,r)),r!==void 0?(t._$Co??(t._$Co=[]))[r]=o:t._$Cl=o),o!==void 0&&(e=ur(i,o._$AS(i,e.values),o,r)),e}class zp{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:r}=this._$AD,o=((e==null?void 0:e.creationScope)??bn).importNode(t,!0);pn.currentNode=o;let n=pn.nextNode(),a=0,s=0,p=r[0];for(;p!==void 0;){if(a===p.index){let h;p.type===2?h=new Io(n,n.nextSibling,this,e):p.type===1?h=new p.ctor(n,p.name,p.strings,this,e):p.type===6&&(h=new Zp(n,this,e)),this._$AV.push(h),p=r[++s]}a!==(p==null?void 0:p.index)&&(n=pn.nextNode(),a++)}return pn.currentNode=bn,o}p(e){let t=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}}class Io{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,r,o){this.type=2,this._$AH=Ne,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=o,this._$Cv=(o==null?void 0:o.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=ur(this,e,t),ro(e)?e===Ne||e==null||e===""?(this._$AH!==Ne&&this._$AR(),this._$AH=Ne):e!==this._$AH&&e!==xn&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Lp(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==Ne&&ro(this._$AH)?this._$AA.nextSibling.data=e:this.T(bn.createTextNode(e)),this._$AH=e}$(e){var n;const{values:t,_$litType$:r}=e,o=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=oo.createElement(su(r.h,r.h[0]),this.options)),r);if(((n=this._$AH)==null?void 0:n._$AD)===o)this._$AH.p(t);else{const a=new zp(o,this),s=a.u(this.options);a.p(t),this.T(s),this._$AH=a}}_$AC(e){let t=cc.get(e.strings);return t===void 0&&cc.set(e.strings,t=new oo(e)),t}k(e){ul(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let r,o=0;for(const n of e)o===t.length?t.push(r=new Io(this.O(no()),this.O(no()),this,this.options)):r=t[o],r._$AI(n),o++;o<t.length&&(this._$AR(r&&r._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,t);e&&e!==this._$AB;){const o=e.nextSibling;e.remove(),e=o}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class qa{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,o,n){this.type=1,this._$AH=Ne,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=n,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=Ne}_$AI(e,t=this,r,o){const n=this.strings;let a=!1;if(n===void 0)e=ur(this,e,t,0),a=!ro(e)||e!==this._$AH&&e!==xn,a&&(this._$AH=e);else{const s=e;let p,h;for(e=n[0],p=0;p<n.length-1;p++)h=ur(this,s[r+p],t,p),h===xn&&(h=this._$AH[p]),a||(a=!ro(h)||h!==this._$AH[p]),h===Ne?e=Ne:e!==Ne&&(e+=(h??"")+n[p+1]),this._$AH[p]=h}a&&!o&&this.j(e)}j(e){e===Ne?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Vp extends qa{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Ne?void 0:e}}class Hp extends qa{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==Ne)}}class Fp extends qa{constructor(e,t,r,o,n){super(e,t,r,o,n),this.type=5}_$AI(e,t=this){if((e=ur(this,e,t,0)??Ne)===xn)return;const r=this._$AH,o=e===Ne&&r!==Ne||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,n=e!==Ne&&(r===Ne||o);o&&this.element.removeEventListener(this.name,this,r),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class Zp{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){ur(this,e)}}const xs=zr.litHtmlPolyfillSupport;xs==null||xs(oo,Io),(zr.litHtmlVersions??(zr.litHtmlVersions=[])).push("3.2.1");const Gp=(i,e,t)=>{const r=(t==null?void 0:t.renderBefore)??e;let o=r._$litPart$;if(o===void 0){const n=(t==null?void 0:t.renderBefore)??null;r._$litPart$=o=new Io(e.insertBefore(no(),n),n,void 0,t??{})}return o._$AI(i),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let w=class extends ir{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Gp(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return xn}};var jc;w._$litElement$=!0,w.finalized=!0,(jc=globalThis.litElementHydrateSupport)==null||jc.call(globalThis,{LitElement:w});const ys=globalThis.litElementPolyfillSupport;ys==null||ys({LitElement:w});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.1");let Vr,Wi,Mi;function Mm(i,e){Vr=document.createElement("style"),Wi=document.createElement("style"),Mi=document.createElement("style"),Vr.textContent=sr(i).core.cssText,Wi.textContent=sr(i).dark.cssText,Mi.textContent=sr(i).light.cssText,document.head.appendChild(Vr),document.head.appendChild(Wi),document.head.appendChild(Mi),lu(e)}function lu(i){Wi&&Mi&&(i==="light"?(Wi.removeAttribute("media"),Mi.media="enabled"):(Mi.removeAttribute("media"),Wi.media="enabled"))}function qp(i){Vr&&Wi&&Mi&&(Vr.textContent=sr(i).core.cssText,Wi.textContent=sr(i).dark.cssText,Mi.textContent=sr(i).light.cssText)}function sr(i){return{core:b`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
      @keyframes w3m-shake {
        0% {
          transform: scale(1) rotate(0deg);
        }
        20% {
          transform: scale(1) rotate(-1deg);
        }
        40% {
          transform: scale(1) rotate(1.5deg);
        }
        60% {
          transform: scale(1) rotate(-1.5deg);
        }
        80% {
          transform: scale(1) rotate(1deg);
        }
        100% {
          transform: scale(1) rotate(0deg);
        }
      }
      @keyframes w3m-iframe-fade-out {
        0% {
          opacity: 1;
        }
        100% {
          opacity: 0;
        }
      }
      @keyframes w3m-iframe-zoom-in {
        0% {
          transform: translateY(50px);
          opacity: 0;
        }
        100% {
          transform: translateY(0px);
          opacity: 1;
        }
      }
      @keyframes w3m-iframe-zoom-in-mobile {
        0% {
          transform: scale(0.95);
          opacity: 0;
        }
        100% {
          transform: scale(1);
          opacity: 1;
        }
      }
      :root {
        --w3m-modal-width: 360px;
        --w3m-color-mix-strength: ${Ct(i!=null&&i["--w3m-color-mix-strength"]?`${i["--w3m-color-mix-strength"]}%`:"0%")};
        --w3m-font-family: ${Ct((i==null?void 0:i["--w3m-font-family"])||"Inter, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;")};
        --w3m-font-size-master: ${Ct((i==null?void 0:i["--w3m-font-size-master"])||"10px")};
        --w3m-border-radius-master: ${Ct((i==null?void 0:i["--w3m-border-radius-master"])||"4px")};
        --w3m-z-index: ${Ct((i==null?void 0:i["--w3m-z-index"])||999)};

        --wui-font-family: var(--w3m-font-family);

        --wui-font-size-mini: calc(var(--w3m-font-size-master) * 0.8);
        --wui-font-size-micro: var(--w3m-font-size-master);
        --wui-font-size-tiny: calc(var(--w3m-font-size-master) * 1.2);
        --wui-font-size-small: calc(var(--w3m-font-size-master) * 1.4);
        --wui-font-size-paragraph: calc(var(--w3m-font-size-master) * 1.6);
        --wui-font-size-medium: calc(var(--w3m-font-size-master) * 1.8);
        --wui-font-size-large: calc(var(--w3m-font-size-master) * 2);
        --wui-font-size-title-6: calc(var(--w3m-font-size-master) * 2.2);
        --wui-font-size-medium-title: calc(var(--w3m-font-size-master) * 2.4);
        --wui-font-size-2xl: calc(var(--w3m-font-size-master) * 4);

        --wui-border-radius-5xs: var(--w3m-border-radius-master);
        --wui-border-radius-4xs: calc(var(--w3m-border-radius-master) * 1.5);
        --wui-border-radius-3xs: calc(var(--w3m-border-radius-master) * 2);
        --wui-border-radius-xxs: calc(var(--w3m-border-radius-master) * 3);
        --wui-border-radius-xs: calc(var(--w3m-border-radius-master) * 4);
        --wui-border-radius-s: calc(var(--w3m-border-radius-master) * 5);
        --wui-border-radius-m: calc(var(--w3m-border-radius-master) * 7);
        --wui-border-radius-l: calc(var(--w3m-border-radius-master) * 9);
        --wui-border-radius-3xl: calc(var(--w3m-border-radius-master) * 20);

        --wui-font-weight-light: 400;
        --wui-font-weight-regular: 500;
        --wui-font-weight-medium: 600;
        --wui-font-weight-bold: 700;

        --wui-letter-spacing-2xl: -1.6px;
        --wui-letter-spacing-medium-title: -0.96px;
        --wui-letter-spacing-title-6: -0.88px;
        --wui-letter-spacing-large: -0.8px;
        --wui-letter-spacing-medium: -0.72px;
        --wui-letter-spacing-paragraph: -0.64px;
        --wui-letter-spacing-small: -0.56px;
        --wui-letter-spacing-tiny: -0.48px;
        --wui-letter-spacing-micro: -0.2px;
        --wui-letter-spacing-mini: -0.16px;

        --wui-spacing-0: 0px;
        --wui-spacing-4xs: 2px;
        --wui-spacing-3xs: 4px;
        --wui-spacing-xxs: 6px;
        --wui-spacing-2xs: 7px;
        --wui-spacing-xs: 8px;
        --wui-spacing-1xs: 10px;
        --wui-spacing-s: 12px;
        --wui-spacing-m: 14px;
        --wui-spacing-l: 16px;
        --wui-spacing-2l: 18px;
        --wui-spacing-xl: 20px;
        --wui-spacing-xxl: 24px;
        --wui-spacing-2xl: 32px;
        --wui-spacing-3xl: 40px;
        --wui-spacing-4xl: 90px;
        --wui-spacing-5xl: 95px;

        --wui-icon-box-size-xxs: 14px;
        --wui-icon-box-size-xs: 20px;
        --wui-icon-box-size-sm: 24px;
        --wui-icon-box-size-md: 32px;
        --wui-icon-box-size-lg: 40px;
        --wui-icon-box-size-2lg: 48px;
        --wui-icon-box-size-xl: 64px;

        --wui-icon-size-inherit: inherit;
        --wui-icon-size-xxs: 10px;
        --wui-icon-size-xs: 12px;
        --wui-icon-size-sm: 14px;
        --wui-icon-size-md: 16px;
        --wui-icon-size-mdl: 18px;
        --wui-icon-size-lg: 20px;
        --wui-icon-size-xl: 24px;
        --wui-icon-size-xxl: 28px;

        --wui-wallet-image-size-inherit: inherit;
        --wui-wallet-image-size-sm: 40px;
        --wui-wallet-image-size-md: 56px;
        --wui-wallet-image-size-lg: 80px;

        --wui-visual-size-size-inherit: inherit;
        --wui-visual-size-sm: 40px;
        --wui-visual-size-md: 55px;
        --wui-visual-size-lg: 80px;

        --wui-box-size-md: 100px;
        --wui-box-size-lg: 120px;

        --wui-ease-out-power-2: cubic-bezier(0, 0, 0.22, 1);
        --wui-ease-out-power-1: cubic-bezier(0, 0, 0.55, 1);

        --wui-ease-in-power-3: cubic-bezier(0.66, 0, 1, 1);
        --wui-ease-in-power-2: cubic-bezier(0.45, 0, 1, 1);
        --wui-ease-in-power-1: cubic-bezier(0.3, 0, 1, 1);

        --wui-ease-inout-power-1: cubic-bezier(0.45, 0, 0.55, 1);

        --wui-duration-lg: 200ms;
        --wui-duration-md: 125ms;
        --wui-duration-sm: 75ms;

        --wui-path-network-sm: path(
          'M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z'
        );

        --wui-path-network-md: path(
          'M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z'
        );

        --wui-path-network-lg: path(
          'M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z'
        );

        --wui-width-network-sm: 36px;
        --wui-width-network-md: 48px;
        --wui-width-network-lg: 86px;

        --wui-height-network-sm: 40px;
        --wui-height-network-md: 54px;
        --wui-height-network-lg: 96px;

        --wui-icon-size-network-xs: 12px;
        --wui-icon-size-network-sm: 16px;
        --wui-icon-size-network-md: 24px;
        --wui-icon-size-network-lg: 42px;

        --wui-color-inherit: inherit;

        --wui-color-inverse-100: #fff;
        --wui-color-inverse-000: #000;

        --wui-cover: rgba(20, 20, 20, 0.8);

        --wui-color-modal-bg: var(--wui-color-modal-bg-base);

        --wui-color-accent-100: var(--wui-color-accent-base-100);
        --wui-color-accent-090: var(--wui-color-accent-base-090);
        --wui-color-accent-080: var(--wui-color-accent-base-080);

        --wui-color-success-100: var(--wui-color-success-base-100);

        --wui-color-error-100: var(--wui-color-error-base-100);

        --wui-icon-box-bg-error-100: var(--wui-icon-box-bg-error-base-100);
        --wui-icon-box-bg-blue-100: var(--wui-icon-box-bg-blue-base-100);
        --wui-icon-box-bg-success-100: var(--wui-icon-box-bg-success-base-100);
        --wui-icon-box-bg-inverse-100: var(--wui-icon-box-bg-inverse-base-100);

        --wui-all-wallets-bg-100: var(--wui-all-wallets-bg-100);

        --wui-avatar-border: var(--wui-avatar-border-base);

        --wui-thumbnail-border: var(--wui-thumbnail-border-base);

        --wui-box-shadow-blue: var(--wui-color-accent-glass-020);
      }

      @supports (background: color-mix(in srgb, white 50%, black)) {
        :root {
          --wui-color-modal-bg: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-modal-bg-base)
          );

          --wui-box-shadow-blue: color-mix(in srgb, var(--wui-color-accent-100) 20%, transparent);

          --wui-color-accent-100: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 100%,
            transparent
          );
          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );
          --wui-color-accent-glass-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-color-accent-glass-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );
          --wui-color-accent-glass-020: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 20%,
            transparent
          );
          --wui-color-accent-glass-015: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 15%,
            transparent
          );
          --wui-color-accent-glass-010: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 10%,
            transparent
          );
          --wui-color-accent-glass-005: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 5%,
            transparent
          );
          --wui-color-accent-002: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 2%,
            transparent
          );

          --wui-color-fg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-100)
          );
          --wui-color-fg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-125)
          );
          --wui-color-fg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-150)
          );
          --wui-color-fg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-175)
          );
          --wui-color-fg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-200)
          );
          --wui-color-fg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-225)
          );
          --wui-color-fg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-250)
          );
          --wui-color-fg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-275)
          );
          --wui-color-fg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-300)
          );

          --wui-color-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-100)
          );
          --wui-color-bg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-125)
          );
          --wui-color-bg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-150)
          );
          --wui-color-bg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-175)
          );
          --wui-color-bg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-200)
          );
          --wui-color-bg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-225)
          );
          --wui-color-bg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-250)
          );
          --wui-color-bg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-275)
          );
          --wui-color-bg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-300)
          );

          --wui-color-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-success-base-100)
          );
          --wui-color-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-error-base-100)
          );

          --wui-icon-box-bg-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-error-base-100)
          );
          --wui-icon-box-bg-accent-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-blue-base-100)
          );
          --wui-icon-box-bg-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-success-base-100)
          );
          --wui-icon-box-bg-inverse-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-inverse-base-100)
          );

          --wui-all-wallets-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-all-wallets-bg-100)
          );

          --wui-avatar-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-avatar-border-base)
          );

          --wui-thumbnail-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-thumbnail-border-base)
          );
        }
      }
    `,light:b`
      :root {
        --w3m-color-mix: ${Ct((i==null?void 0:i["--w3m-color-mix"])||"#fff")};
        --w3m-accent: ${Ct(Pi(i,"dark")["--w3m-accent"])};
        --w3m-default: #fff;

        --wui-color-modal-bg-base: ${Ct(Pi(i,"dark")["--w3m-background"])};
        --wui-color-accent-base-100: var(--w3m-accent);

        --wui-color-blueberry-100: hsla(230, 100%, 67%, 1);
        --wui-color-blueberry-090: hsla(231, 76%, 61%, 1);
        --wui-color-blueberry-080: hsla(230, 59%, 55%, 1);
        --wui-color-blueberry-050: hsla(231, 100%, 70%, 0.1);

        --wui-color-fg-100: #e4e7e7;
        --wui-color-fg-125: #d0d5d5;
        --wui-color-fg-150: #a8b1b1;
        --wui-color-fg-175: #a8b0b0;
        --wui-color-fg-200: #949e9e;
        --wui-color-fg-225: #868f8f;
        --wui-color-fg-250: #788080;
        --wui-color-fg-275: #788181;
        --wui-color-fg-300: #6e7777;

        --wui-color-bg-100: #141414;
        --wui-color-bg-125: #191a1a;
        --wui-color-bg-150: #1e1f1f;
        --wui-color-bg-175: #222525;
        --wui-color-bg-200: #272a2a;
        --wui-color-bg-225: #2c3030;
        --wui-color-bg-250: #313535;
        --wui-color-bg-275: #363b3b;
        --wui-color-bg-300: #3b4040;

        --wui-color-success-base-100: #26d962;
        --wui-color-error-base-100: #f25a67;

        --wui-color-success-glass-001: rgba(38, 217, 98, 0.01);
        --wui-color-success-glass-002: rgba(38, 217, 98, 0.02);
        --wui-color-success-glass-005: rgba(38, 217, 98, 0.05);
        --wui-color-success-glass-010: rgba(38, 217, 98, 0.1);
        --wui-color-success-glass-015: rgba(38, 217, 98, 0.15);
        --wui-color-success-glass-020: rgba(38, 217, 98, 0.2);
        --wui-color-success-glass-025: rgba(38, 217, 98, 0.25);
        --wui-color-success-glass-030: rgba(38, 217, 98, 0.3);
        --wui-color-success-glass-060: rgba(38, 217, 98, 0.6);
        --wui-color-success-glass-080: rgba(38, 217, 98, 0.8);

        --wui-color-error-glass-001: rgba(242, 90, 103, 0.01);
        --wui-color-error-glass-002: rgba(242, 90, 103, 0.02);
        --wui-color-error-glass-005: rgba(242, 90, 103, 0.05);
        --wui-color-error-glass-010: rgba(242, 90, 103, 0.1);
        --wui-color-error-glass-015: rgba(242, 90, 103, 0.15);
        --wui-color-error-glass-020: rgba(242, 90, 103, 0.2);
        --wui-color-error-glass-025: rgba(242, 90, 103, 0.25);
        --wui-color-error-glass-030: rgba(242, 90, 103, 0.3);
        --wui-color-error-glass-060: rgba(242, 90, 103, 0.6);
        --wui-color-error-glass-080: rgba(242, 90, 103, 0.8);

        --wui-color-gray-glass-001: rgba(255, 255, 255, 0.01);
        --wui-color-gray-glass-002: rgba(255, 255, 255, 0.02);
        --wui-color-gray-glass-005: rgba(255, 255, 255, 0.05);
        --wui-color-gray-glass-010: rgba(255, 255, 255, 0.1);
        --wui-color-gray-glass-015: rgba(255, 255, 255, 0.15);
        --wui-color-gray-glass-020: rgba(255, 255, 255, 0.2);
        --wui-color-gray-glass-025: rgba(255, 255, 255, 0.25);
        --wui-color-gray-glass-030: rgba(255, 255, 255, 0.3);
        --wui-color-gray-glass-060: rgba(255, 255, 255, 0.6);
        --wui-color-gray-glass-080: rgba(255, 255, 255, 0.8);
        --wui-color-gray-glass-090: rgba(255, 255, 255, 0.9);

        --wui-icon-box-bg-error-base-100: #3c2426;
        --wui-icon-box-bg-blue-base-100: #20303f;
        --wui-icon-box-bg-success-base-100: #1f3a28;
        --wui-icon-box-bg-inverse-base-100: #243240;

        --wui-all-wallets-bg-100: #222b35;

        --wui-avatar-border-base: #252525;

        --wui-thumbnail-border-base: #252525;
      }
    `,dark:b`
      :root {
        --w3m-color-mix: ${Ct((i==null?void 0:i["--w3m-color-mix"])||"#000")};
        --w3m-accent: ${Ct(Pi(i,"light")["--w3m-accent"])};
        --w3m-default: #000;

        --wui-color-modal-bg-base: ${Ct(Pi(i,"light")["--w3m-background"])};
        --wui-color-accent-base-100: var(--w3m-accent);

        --wui-color-blueberry-100: hsla(231, 100%, 70%, 1);
        --wui-color-blueberry-090: hsla(231, 97%, 72%, 1);
        --wui-color-blueberry-080: hsla(231, 92%, 74%, 1);

        --wui-color-fg-100: #141414;
        --wui-color-fg-125: #2d3131;
        --wui-color-fg-150: #474d4d;
        --wui-color-fg-175: #636d6d;
        --wui-color-fg-200: #798686;
        --wui-color-fg-225: #828f8f;
        --wui-color-fg-250: #8b9797;
        --wui-color-fg-275: #95a0a0;
        --wui-color-fg-300: #9ea9a9;

        --wui-color-bg-100: #ffffff;
        --wui-color-bg-125: #f5fafa;
        --wui-color-bg-150: #f3f8f8;
        --wui-color-bg-175: #eef4f4;
        --wui-color-bg-200: #eaf1f1;
        --wui-color-bg-225: #e5eded;
        --wui-color-bg-250: #e1e9e9;
        --wui-color-bg-275: #dce7e7;
        --wui-color-bg-300: #d8e3e3;

        --wui-color-success-base-100: #26b562;
        --wui-color-error-base-100: #f05142;

        --wui-color-success-glass-001: rgba(38, 181, 98, 0.01);
        --wui-color-success-glass-002: rgba(38, 181, 98, 0.02);
        --wui-color-success-glass-005: rgba(38, 181, 98, 0.05);
        --wui-color-success-glass-010: rgba(38, 181, 98, 0.1);
        --wui-color-success-glass-015: rgba(38, 181, 98, 0.15);
        --wui-color-success-glass-020: rgba(38, 181, 98, 0.2);
        --wui-color-success-glass-025: rgba(38, 181, 98, 0.25);
        --wui-color-success-glass-030: rgba(38, 181, 98, 0.3);
        --wui-color-success-glass-060: rgba(38, 181, 98, 0.6);
        --wui-color-success-glass-080: rgba(38, 181, 98, 0.8);

        --wui-color-error-glass-001: rgba(240, 81, 66, 0.01);
        --wui-color-error-glass-002: rgba(240, 81, 66, 0.02);
        --wui-color-error-glass-005: rgba(240, 81, 66, 0.05);
        --wui-color-error-glass-010: rgba(240, 81, 66, 0.1);
        --wui-color-error-glass-015: rgba(240, 81, 66, 0.15);
        --wui-color-error-glass-020: rgba(240, 81, 66, 0.2);
        --wui-color-error-glass-025: rgba(240, 81, 66, 0.25);
        --wui-color-error-glass-030: rgba(240, 81, 66, 0.3);
        --wui-color-error-glass-060: rgba(240, 81, 66, 0.6);
        --wui-color-error-glass-080: rgba(240, 81, 66, 0.8);

        --wui-icon-box-bg-error-base-100: #f4dfdd;
        --wui-icon-box-bg-blue-base-100: #d9ecfb;
        --wui-icon-box-bg-success-base-100: #daf0e4;
        --wui-icon-box-bg-inverse-base-100: #dcecfc;

        --wui-all-wallets-bg-100: #e8f1fa;

        --wui-avatar-border-base: #f3f4f4;

        --wui-thumbnail-border-base: #eaefef;

        --wui-color-gray-glass-001: rgba(0, 0, 0, 0.01);
        --wui-color-gray-glass-002: rgba(0, 0, 0, 0.02);
        --wui-color-gray-glass-005: rgba(0, 0, 0, 0.05);
        --wui-color-gray-glass-010: rgba(0, 0, 0, 0.1);
        --wui-color-gray-glass-015: rgba(0, 0, 0, 0.15);
        --wui-color-gray-glass-020: rgba(0, 0, 0, 0.2);
        --wui-color-gray-glass-025: rgba(0, 0, 0, 0.25);
        --wui-color-gray-glass-030: rgba(0, 0, 0, 0.3);
        --wui-color-gray-glass-060: rgba(0, 0, 0, 0.6);
        --wui-color-gray-glass-080: rgba(0, 0, 0, 0.8);
        --wui-color-gray-glass-090: rgba(0, 0, 0, 0.9);
      }
    `}}const O=b`
  *,
  *::after,
  *::before,
  :host {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-style: normal;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    font-family: var(--wui-font-family);
    backface-visibility: hidden;
  }
`,Q=b`
  button,
  a {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition:
      color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      border var(--wui-duration-lg) var(--wui-ease-out-power-1),
      box-shadow var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: background-color, color, border, box-shadow;
    outline: none;
    border: none;
    column-gap: var(--wui-spacing-3xs);
    background-color: transparent;
    text-decoration: none;
  }

  button:disabled > wui-wallet-image,
  button:disabled > wui-all-wallets-image,
  button:disabled > wui-network-image,
  button:disabled > wui-image,
  button:disabled > wui-transaction-visual,
  button:disabled > wui-logo {
    filter: grayscale(1);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-gray-glass-005);
    }

    button:active:enabled {
      background-color: var(--wui-color-gray-glass-010);
    }
  }

  button:disabled > wui-icon-box {
    opacity: 0.5;
  }

  input {
    border: none;
    outline: none;
    appearance: none;
  }
`,dl=b`
  .wui-color-inherit {
    color: var(--wui-color-inherit);
  }

  .wui-color-accent-100 {
    color: var(--wui-color-accent-100);
  }

  .wui-color-error-100 {
    color: var(--wui-color-error-100);
  }

  .wui-color-success-100 {
    color: var(--wui-color-success-100);
  }

  .wui-color-inverse-100 {
    color: var(--wui-color-inverse-100);
  }

  .wui-color-inverse-000 {
    color: var(--wui-color-inverse-000);
  }

  .wui-color-fg-100 {
    color: var(--wui-color-fg-100);
  }

  .wui-color-fg-200 {
    color: var(--wui-color-fg-200);
  }

  .wui-color-fg-300 {
    color: var(--wui-color-fg-300);
  }

  .wui-bg-color-inherit {
    background-color: var(--wui-color-inherit);
  }

  .wui-bg-color-blue-100 {
    background-color: var(--wui-color-accent-100);
  }

  .wui-bg-color-error-100 {
    background-color: var(--wui-color-error-100);
  }

  .wui-bg-color-success-100 {
    background-color: var(--wui-color-success-100);
  }

  .wui-bg-color-inverse-100 {
    background-color: var(--wui-color-inverse-100);
  }

  .wui-bg-color-inverse-000 {
    background-color: var(--wui-color-inverse-000);
  }

  .wui-bg-color-fg-100 {
    background-color: var(--wui-color-fg-100);
  }

  .wui-bg-color-fg-200 {
    background-color: var(--wui-color-fg-200);
  }

  .wui-bg-color-fg-300 {
    background-color: var(--wui-color-fg-300);
  }
`;function Yp(i,e){const{kind:t,elements:r}=e;return{kind:t,elements:r,finisher(o){customElements.get(i)||customElements.define(i,o)}}}function Kp(i,e){return customElements.get(i)||customElements.define(i,e),e}function f(i){return function(t){return typeof t=="function"?Kp(i,t):Yp(i,t)}}const Xp=b`
  :host {
    display: block;
    border-radius: clamp(0px, var(--wui-border-radius-l), 44px);
    box-shadow: 0 0 0 1px var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-modal-bg);
    overflow: hidden;
  }
`;var Qp=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Ns=class extends w{render(){return l`<slot></slot>`}};Ns.styles=[O,Xp];Ns=Qp([f("wui-card")],Ns);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Jp={attribute:!0,type:String,converter:wa,reflect:!1,hasChanged:cl},e1=(i=Jp,e,t)=>{const{kind:r,metadata:o}=t;let n=globalThis.litPropertyMetadata.get(o);if(n===void 0&&globalThis.litPropertyMetadata.set(o,n=new Map),n.set(t.name,i),r==="accessor"){const{name:a}=t;return{set(s){const p=e.get.call(this);e.set.call(this,s),this.requestUpdate(a,p,i)},init(s){return s!==void 0&&this.P(a,void 0,i),s}}}if(r==="setter"){const{name:a}=t;return function(s){const p=this[a];e.call(this,s),this.requestUpdate(a,p,i)}}throw Error("Unsupported decorator location: "+r)};function c(i){return(e,t)=>typeof t=="object"?e1(i,e,t):((r,o,n)=>{const a=o.hasOwnProperty(n);return o.constructor.createProperty(n,a?{...r,wrapped:!0}:r),a?Object.getOwnPropertyDescriptor(o,n):void 0})(i,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function d(i){return c({...i,state:!0,attribute:!1})}const t1=b`
  :host {
    display: flex;
    aspect-ratio: 1 / 1;
    color: var(--local-color);
    width: var(--local-width);
  }

  svg {
    width: inherit;
    height: inherit;
    object-fit: contain;
    object-position: center;
  }
`,i1=C`<svg
  width="14"
  height="14"
  viewBox="0 0 14 14"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M7.0023 0.875C7.48571 0.875 7.8776 1.26675 7.8776 1.75V6.125H12.2541C12.7375 6.125 13.1294 6.51675 13.1294 7C13.1294 7.48325 12.7375 7.875 12.2541 7.875H7.8776V12.25C7.8776 12.7332 7.48571 13.125 7.0023 13.125C6.51889 13.125 6.12701 12.7332 6.12701 12.25V7.875H1.75054C1.26713 7.875 0.875244 7.48325 0.875244 7C0.875244 6.51675 1.26713 6.125 1.75054 6.125H6.12701V1.75C6.12701 1.26675 6.51889 0.875 7.0023 0.875Z"
    fill="#667dff"
  /></svg
>`,n1=C`<svg fill="none" viewBox="0 0 24 24">
  <path
    style="fill: var(--wui-color-accent-100);"
    d="M10.2 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM10.2 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0Z"
  />
</svg>`,r1=C`<svg
  fill="none"
  viewBox="0 0 21 20"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10.5 2.42908C6.31875 2.42908 2.92859 5.81989 2.92859 10.0034C2.92859 14.1869 6.31875 17.5777 10.5 17.5777C14.6813 17.5777 18.0714 14.1869 18.0714 10.0034C18.0714 5.81989 14.6813 2.42908 10.5 2.42908ZM0.928589 10.0034C0.928589 4.71596 5.21355 0.429077 10.5 0.429077C15.7865 0.429077 20.0714 4.71596 20.0714 10.0034C20.0714 15.2908 15.7865 19.5777 10.5 19.5777C5.21355 19.5777 0.928589 15.2908 0.928589 10.0034ZM10.5 5.75003C11.0523 5.75003 11.5 6.19774 11.5 6.75003L11.5 10.8343L12.7929 9.54137C13.1834 9.15085 13.8166 9.15085 14.2071 9.54137C14.5976 9.9319 14.5976 10.5651 14.2071 10.9556L11.2071 13.9556C10.8166 14.3461 10.1834 14.3461 9.79291 13.9556L6.79291 10.9556C6.40239 10.5651 6.40239 9.9319 6.79291 9.54137C7.18343 9.15085 7.8166 9.15085 8.20712 9.54137L9.50002 10.8343L9.50002 6.75003C9.50002 6.19774 9.94773 5.75003 10.5 5.75003Z"
    clip-rule="evenodd"
  /></svg
>`,o1=C`
<svg width="36" height="36">
  <path
    d="M28.724 0H7.271A7.269 7.269 0 0 0 0 7.272v21.46A7.268 7.268 0 0 0 7.271 36H28.73A7.272 7.272 0 0 0 36 28.728V7.272A7.275 7.275 0 0 0 28.724 0Z"
    fill="url(#a)"
  />
  <path
    d="m17.845 8.271.729-1.26a1.64 1.64 0 1 1 2.843 1.638l-7.023 12.159h5.08c1.646 0 2.569 1.935 1.853 3.276H6.434a1.632 1.632 0 0 1-1.638-1.638c0-.909.73-1.638 1.638-1.638h4.176l5.345-9.265-1.67-2.898a1.642 1.642 0 0 1 2.844-1.638l.716 1.264Zm-6.317 17.5-1.575 2.732a1.64 1.64 0 1 1-2.844-1.638l1.17-2.025c1.323-.41 2.398-.095 3.249.931Zm13.56-4.954h4.262c.909 0 1.638.729 1.638 1.638 0 .909-.73 1.638-1.638 1.638h-2.367l1.597 2.772c.45.788.185 1.782-.602 2.241a1.642 1.642 0 0 1-2.241-.603c-2.69-4.666-4.711-8.159-6.052-10.485-1.372-2.367-.391-4.743.576-5.549 1.075 1.846 2.682 4.631 4.828 8.348Z"
    fill="#fff"
  />
  <defs>
    <linearGradient id="a" x1="18" y1="0" x2="18" y2="36" gradientUnits="userSpaceOnUse">
      <stop stop-color="#18BFFB" />
      <stop offset="1" stop-color="#2072F3" />
    </linearGradient>
  </defs>
</svg>`,a1=C`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#000" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M28.77 23.3c-.69 1.99-2.75 5.52-4.87 5.56-1.4.03-1.86-.84-3.46-.84-1.61 0-2.12.81-3.45.86-2.25.1-5.72-5.1-5.72-9.62 0-4.15 2.9-6.2 5.42-6.25 1.36-.02 2.64.92 3.47.92.83 0 2.38-1.13 4.02-.97.68.03 2.6.28 3.84 2.08-3.27 2.14-2.76 6.61.75 8.25ZM24.2 7.88c-2.47.1-4.49 2.69-4.2 4.84 2.28.17 4.47-2.39 4.2-4.84Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,s1=C`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 1.99a1 1 0 0 1 1 1v7.58l2.46-2.46a1 1 0 0 1 1.41 1.42L7.7 13.69a1 1 0 0 1-1.41 0L2.12 9.53A1 1 0 0 1 3.54 8.1L6 10.57V3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,l1=C`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13 7.99a1 1 0 0 1-1 1H4.4l2.46 2.46a1 1 0 1 1-1.41 1.41L1.29 8.7a1 1 0 0 1 0-1.41L5.46 3.1a1 1 0 0 1 1.41 1.42L4.41 6.99H12a1 1 0 0 1 1 1Z"
    clip-rule="evenodd"
  />
</svg>`,c1=C`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1 7.99a1 1 0 0 1 1-1h7.58L7.12 4.53A1 1 0 1 1 8.54 3.1l4.16 4.17a1 1 0 0 1 0 1.41l-4.16 4.17a1 1 0 1 1-1.42-1.41l2.46-2.46H2a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,u1=C`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 13.99a1 1 0 0 1-1-1V5.4L3.54 7.86a1 1 0 0 1-1.42-1.41L6.3 2.28a1 1 0 0 1 1.41 0l4.17 4.17a1 1 0 1 1-1.41 1.41L8 5.4v7.59a1 1 0 0 1-1 1Z"
    clip-rule="evenodd"
  />
</svg>`,d1=C`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="12"
  height="13"
  viewBox="0 0 12 13"
  fill="none"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M5.61391 1.57124C5.85142 1.42873 6.14813 1.42873 6.38564 1.57124L11.0793 4.38749C11.9179 4.89067 11.5612 6.17864 10.5832 6.17864H9.96398V10.0358H10.2854C10.6996 10.0358 11.0354 10.3716 11.0354 10.7858C11.0354 11.2 10.6996 11.5358 10.2854 11.5358H1.71416C1.29995 11.5358 0.964172 11.2 0.964172 10.7858C0.964172 10.3716 1.29995 10.0358 1.71416 10.0358H2.03558L2.03558 6.17864H1.41637C0.438389 6.17864 0.0816547 4.89066 0.920263 4.38749L5.61391 1.57124ZM3.53554 6.17864V10.0358H5.24979V6.17864H3.53554ZM6.74976 6.17864V10.0358H8.46401V6.17864H6.74976ZM8.64913 4.67864H3.35043L5.99978 3.089L8.64913 4.67864Z"
    fill="currentColor"
  /></svg
>`,p1=C`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4 6.4a1 1 0 0 1-.46.89 6.98 6.98 0 0 0 .38 6.18A7 7 0 0 0 16.46 7.3a1 1 0 0 1-.47-.92 7 7 0 0 0-12 .03Zm-2.02-.5a9 9 0 1 1 16.03 8.2A9 9 0 0 1 1.98 5.9Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.03 8.63c-1.46-.3-2.72-.75-3.6-1.35l-.02-.01-.14-.11a1 1 0 0 1 1.2-1.6l.1.08c.6.4 1.52.74 2.69 1 .16-.99.39-1.88.67-2.65.3-.79.68-1.5 1.15-2.02A2.58 2.58 0 0 1 9.99 1c.8 0 1.45.44 1.92.97.47.52.84 1.23 1.14 2.02.29.77.52 1.66.68 2.64a8 8 0 0 0 2.7-1l.26-.18h.48a1 1 0 0 1 .12 2c-.86.51-2.01.91-3.34 1.18a22.24 22.24 0 0 1-.03 3.19c1.45.29 2.7.73 3.58 1.31a1 1 0 0 1-1.1 1.68c-.6-.4-1.56-.76-2.75-1-.15.8-.36 1.55-.6 2.2-.3.79-.67 1.5-1.14 2.02-.47.53-1.12.97-1.92.97-.8 0-1.45-.44-1.91-.97a6.51 6.51 0 0 1-1.15-2.02c-.24-.65-.44-1.4-.6-2.2-1.18.24-2.13.6-2.73.99a1 1 0 1 1-1.1-1.67c.88-.58 2.12-1.03 3.57-1.31a22.03 22.03 0 0 1-.04-3.2Zm2.2-1.7c.15-.86.34-1.61.58-2.24.24-.65.51-1.12.76-1.4.25-.28.4-.29.42-.29.03 0 .17.01.42.3.25.27.52.74.77 1.4.23.62.43 1.37.57 2.22a19.96 19.96 0 0 1-3.52 0Zm-.18 4.6a20.1 20.1 0 0 1-.03-2.62 21.95 21.95 0 0 0 3.94 0 20.4 20.4 0 0 1-.03 2.63 21.97 21.97 0 0 0-3.88 0Zm.27 2c.13.66.3 1.26.49 1.78.24.65.51 1.12.76 1.4.25.28.4.29.42.29.03 0 .17-.01.42-.3.25-.27.52-.74.77-1.4.19-.5.36-1.1.49-1.78a20.03 20.03 0 0 0-3.35 0Z"
    clip-rule="evenodd"
  />
</svg>`,h1=C`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="12"
  height="13"
  viewBox="0 0 12 13"
  fill="none"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M4.16072 2C4.17367 2 4.18665 2 4.19968 2L7.83857 2C8.36772 1.99998 8.82398 1.99996 9.19518 2.04018C9.5895 2.0829 9.97577 2.17811 10.3221 2.42971C10.5131 2.56849 10.6811 2.73647 10.8198 2.92749C11.0714 3.27379 11.1666 3.66007 11.2094 4.0544C11.2496 4.42561 11.2496 4.88188 11.2495 5.41105V7.58896C11.2496 8.11812 11.2496 8.57439 11.2094 8.94561C11.1666 9.33994 11.0714 9.72621 10.8198 10.0725C10.6811 10.2635 10.5131 10.4315 10.3221 10.5703C9.97577 10.8219 9.5895 10.9171 9.19518 10.9598C8.82398 11 8.36772 11 7.83856 11H4.16073C3.63157 11 3.17531 11 2.80411 10.9598C2.40979 10.9171 2.02352 10.8219 1.67722 10.5703C1.48621 10.4315 1.31824 10.2635 1.17946 10.0725C0.927858 9.72621 0.832652 9.33994 0.78993 8.94561C0.749713 8.5744 0.749733 8.11813 0.749757 7.58896L0.749758 5.45C0.749758 5.43697 0.749758 5.42399 0.749757 5.41104C0.749733 4.88188 0.749713 4.42561 0.78993 4.0544C0.832652 3.66007 0.927858 3.27379 1.17946 2.92749C1.31824 2.73647 1.48621 2.56849 1.67722 2.42971C2.02352 2.17811 2.40979 2.0829 2.80411 2.04018C3.17531 1.99996 3.63157 1.99998 4.16072 2ZM2.96567 3.53145C2.69897 3.56034 2.60687 3.60837 2.55888 3.64324C2.49521 3.6895 2.43922 3.74549 2.39296 3.80916C2.35809 3.85715 2.31007 3.94926 2.28117 4.21597C2.26629 4.35335 2.25844 4.51311 2.25431 4.70832H9.74498C9.74085 4.51311 9.733 4.35335 9.71812 4.21597C9.68922 3.94926 9.6412 3.85715 9.60633 3.80916C9.56007 3.74549 9.50408 3.6895 9.44041 3.64324C9.39242 3.60837 9.30031 3.56034 9.03362 3.53145C8.75288 3.50103 8.37876 3.5 7.79961 3.5H4.19968C3.62053 3.5 3.24641 3.50103 2.96567 3.53145ZM9.74956 6.20832H2.24973V7.55C2.24973 8.12917 2.25076 8.5033 2.28117 8.78404C2.31007 9.05074 2.35809 9.14285 2.39296 9.19084C2.43922 9.25451 2.49521 9.31051 2.55888 9.35677C2.60687 9.39163 2.69897 9.43966 2.96567 9.46856C3.24641 9.49897 3.62053 9.5 4.19968 9.5H7.79961C8.37876 9.5 8.75288 9.49897 9.03362 9.46856C9.30032 9.43966 9.39242 9.39163 9.44041 9.35677C9.50408 9.31051 9.56007 9.25451 9.60633 9.19084C9.6412 9.14285 9.68922 9.05075 9.71812 8.78404C9.74854 8.5033 9.74956 8.12917 9.74956 7.55V6.20832ZM6.74963 8C6.74963 7.58579 7.08541 7.25 7.49961 7.25H8.2496C8.6638 7.25 8.99958 7.58579 8.99958 8C8.99958 8.41422 8.6638 8.75 8.2496 8.75H7.49961C7.08541 8.75 6.74963 8.41422 6.74963 8Z"
    fill="currentColor"
  /></svg
>`,f1=C`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M12.9576 2.23383C13.3807 2.58873 13.4361 3.21947 13.0812 3.64263L6.37159 11.6426C6.19161 11.8572 5.92989 11.9865 5.65009 11.999C5.3703 12.0115 5.09808 11.9062 4.89965 11.7085L0.979321 7.80331C0.588042 7.41354 0.586817 6.78038 0.976585 6.3891C1.36635 5.99782 1.99952 5.99659 2.3908 6.38636L5.53928 9.52268L11.5488 2.35742C11.9037 1.93426 12.5344 1.87893 12.9576 2.23383Z"
    clip-rule="evenodd"
  />
</svg>`,w1=C`<svg
  width="28"
  height="28"
  viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M25.5297 4.92733C26.1221 5.4242 26.1996 6.30724 25.7027 6.89966L12.2836 22.8997C12.0316 23.2001 11.6652 23.3811 11.2735 23.3986C10.8817 23.4161 10.5006 23.2686 10.2228 22.9919L2.38218 15.1815C1.83439 14.6358 1.83268 13.7494 2.37835 13.2016C2.92403 12.6538 3.81046 12.6521 4.35825 13.1978L11.1183 19.9317L23.5573 5.10036C24.0542 4.50794 24.9372 4.43047 25.5297 4.92733Z"
    fill="#26D962"/>
</svg>
`,g1=C`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1.46 4.96a1 1 0 0 1 1.41 0L8 10.09l5.13-5.13a1 1 0 1 1 1.41 1.41l-5.83 5.84a1 1 0 0 1-1.42 0L1.46 6.37a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,m1=C`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M11.04 1.46a1 1 0 0 1 0 1.41L5.91 8l5.13 5.13a1 1 0 1 1-1.41 1.41L3.79 8.71a1 1 0 0 1 0-1.42l5.84-5.83a1 1 0 0 1 1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,v1=C`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.96 14.54a1 1 0 0 1 0-1.41L10.09 8 4.96 2.87a1 1 0 0 1 1.41-1.41l5.84 5.83a1 1 0 0 1 0 1.42l-5.84 5.83a1 1 0 0 1-1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,b1=C`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M14.54 11.04a1 1 0 0 1-1.41 0L8 5.92l-5.13 5.12a1 1 0 1 1-1.41-1.41l5.83-5.84a1 1 0 0 1 1.42 0l5.83 5.84a1 1 0 0 1 0 1.41Z"
    clip-rule="evenodd"
  />
</svg>`,x1=C`<svg width="36" height="36" fill="none">
  <path
    fill="#fff"
    fill-opacity=".05"
    d="M0 14.94c0-5.55 0-8.326 1.182-10.4a9 9 0 0 1 3.359-3.358C6.614 0 9.389 0 14.94 0h6.12c5.55 0 8.326 0 10.4 1.182a9 9 0 0 1 3.358 3.359C36 6.614 36 9.389 36 14.94v6.12c0 5.55 0 8.326-1.182 10.4a9 9 0 0 1-3.359 3.358C29.386 36 26.611 36 21.06 36h-6.12c-5.55 0-8.326 0-10.4-1.182a9 9 0 0 1-3.358-3.359C0 29.386 0 26.611 0 21.06v-6.12Z"
  />
  <path
    stroke="#fff"
    stroke-opacity=".05"
    d="M14.94.5h6.12c2.785 0 4.84 0 6.46.146 1.612.144 2.743.43 3.691.97a8.5 8.5 0 0 1 3.172 3.173c.541.948.826 2.08.971 3.692.145 1.62.146 3.675.146 6.459v6.12c0 2.785 0 4.84-.146 6.46-.145 1.612-.43 2.743-.97 3.691a8.5 8.5 0 0 1-3.173 3.172c-.948.541-2.08.826-3.692.971-1.62.145-3.674.146-6.459.146h-6.12c-2.784 0-4.84 0-6.46-.146-1.612-.145-2.743-.43-3.691-.97a8.5 8.5 0 0 1-3.172-3.173c-.541-.948-.827-2.08-.971-3.692C.5 25.9.5 23.845.5 21.06v-6.12c0-2.784 0-4.84.146-6.46.144-1.612.43-2.743.97-3.691A8.5 8.5 0 0 1 4.79 1.617C5.737 1.076 6.869.79 8.48.646 10.1.5 12.156.5 14.94.5Z"
  />
  <path
    fill="url(#a)"
    d="M17.998 10.8h12.469a14.397 14.397 0 0 0-24.938.001l6.234 10.798.006-.001a7.19 7.19 0 0 1 6.23-10.799Z"
  />
  <path
    fill="url(#b)"
    d="m24.237 21.598-6.234 10.798A14.397 14.397 0 0 0 30.47 10.798H18.002l-.002.006a7.191 7.191 0 0 1 6.237 10.794Z"
  />
  <path
    fill="url(#c)"
    d="M11.765 21.601 5.531 10.803A14.396 14.396 0 0 0 18.001 32.4l6.235-10.798-.004-.004a7.19 7.19 0 0 1-12.466.004Z"
  />
  <path fill="#fff" d="M18 25.2a7.2 7.2 0 1 0 0-14.4 7.2 7.2 0 0 0 0 14.4Z" />
  <path fill="#1A73E8" d="M18 23.7a5.7 5.7 0 1 0 0-11.4 5.7 5.7 0 0 0 0 11.4Z" />
  <defs>
    <linearGradient
      id="a"
      x1="6.294"
      x2="41.1"
      y1="5.995"
      y2="5.995"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#D93025" />
      <stop offset="1" stop-color="#EA4335" />
    </linearGradient>
    <linearGradient
      id="b"
      x1="20.953"
      x2="37.194"
      y1="32.143"
      y2="2.701"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#FCC934" />
      <stop offset="1" stop-color="#FBBC04" />
    </linearGradient>
    <linearGradient
      id="c"
      x1="25.873"
      x2="9.632"
      y1="31.2"
      y2="1.759"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#1E8E3E" />
      <stop offset="1" stop-color="#34A853" />
    </linearGradient>
  </defs>
</svg>`,y1=C`<svg width="14" height="14" viewBox="0 0 14 14" fill="none">
  <path 
    fill-rule="evenodd" 
    clip-rule="evenodd" 
    d="M7.00235 2C4.24 2 2.00067 4.23858 2.00067 7C2.00067 9.76142 4.24 12 7.00235 12C9.7647 12 12.004 9.76142 12.004 7C12.004 4.23858 9.7647 2 7.00235 2ZM0 7C0 3.13401 3.13506 0 7.00235 0C10.8696 0 14.0047 3.13401 14.0047 7C14.0047 10.866 10.8696 14 7.00235 14C3.13506 14 0 10.866 0 7ZM7.00235 3C7.55482 3 8.00269 3.44771 8.00269 4V6.58579L9.85327 8.43575C10.2439 8.82627 10.2439 9.45944 9.85327 9.84996C9.46262 10.2405 8.82924 10.2405 8.43858 9.84996L6.29501 7.70711C6.10741 7.51957 6.00201 7.26522 6.00201 7V4C6.00201 3.44771 6.44988 3 7.00235 3Z" 
    fill="currentColor"
  />
</svg>`,C1=C`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M2.54 2.54a1 1 0 0 1 1.42 0L8 6.6l4.04-4.05a1 1 0 1 1 1.42 1.42L9.4 8l4.05 4.04a1 1 0 0 1-1.42 1.42L8 9.4l-4.04 4.05a1 1 0 0 1-1.42-1.42L6.6 8 2.54 3.96a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,_1=C`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 3a7 7 0 0 0-6.85 8.44l8.29-8.3C10.97 3.06 10.49 3 10 3Zm3.49.93-9.56 9.56c.32.55.71 1.06 1.16 1.5L15 5.1a7.03 7.03 0 0 0-1.5-1.16Zm2.7 2.8-9.46 9.46a7 7 0 0 0 9.46-9.46ZM1.99 5.9A9 9 0 1 1 18 14.09 9 9 0 0 1 1.98 5.91Z"
    clip-rule="evenodd"
  />
</svg>`,T1=C`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm10.66-2.65a1 1 0 0 1 .23 1.06L9.83 9.24a1 1 0 0 1-.59.58l-2.83 1.06A1 1 0 0 1 5.13 9.6l1.06-2.82a1 1 0 0 1 .58-.59L9.6 5.12a1 1 0 0 1 1.06.23ZM7.9 7.89l-.13.35.35-.13.12-.35-.34.13Z"
    clip-rule="evenodd"
  />
</svg>`,k1=C`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="16"
  height="16"
  viewBox="0 0 16 16"
  fill="none"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M9.21498 1.28565H10.5944C11.1458 1.28562 11.6246 1.2856 12.0182 1.32093C12.4353 1.35836 12.853 1.44155 13.2486 1.66724C13.7005 1.92498 14.0749 2.29935 14.3326 2.75122C14.5583 3.14689 14.6415 3.56456 14.6789 3.9817C14.7143 4.37531 14.7142 4.85403 14.7142 5.40545V6.78489C14.7142 7.33631 14.7143 7.81503 14.6789 8.20865C14.6415 8.62578 14.5583 9.04345 14.3326 9.43912C14.0749 9.89099 13.7005 10.2654 13.2486 10.5231C12.853 10.7488 12.4353 10.832 12.0182 10.8694C11.7003 10.8979 11.3269 10.9034 10.9045 10.9045C10.9034 11.3269 10.8979 11.7003 10.8694 12.0182C10.832 12.4353 10.7488 12.853 10.5231 13.2486C10.2654 13.7005 9.89099 14.0749 9.43912 14.3326C9.04345 14.5583 8.62578 14.6415 8.20865 14.6789C7.81503 14.7143 7.33631 14.7142 6.78489 14.7142H5.40545C4.85403 14.7142 4.37531 14.7143 3.9817 14.6789C3.56456 14.6415 3.14689 14.5583 2.75122 14.3326C2.29935 14.0749 1.92498 13.7005 1.66724 13.2486C1.44155 12.853 1.35836 12.4353 1.32093 12.0182C1.2856 11.6246 1.28562 11.1458 1.28565 10.5944V9.21498C1.28562 8.66356 1.2856 8.18484 1.32093 7.79122C1.35836 7.37409 1.44155 6.95642 1.66724 6.56074C1.92498 6.10887 2.29935 5.73451 2.75122 5.47677C3.14689 5.25108 3.56456 5.16789 3.9817 5.13045C4.2996 5.10192 4.67301 5.09645 5.09541 5.09541C5.09645 4.67302 5.10192 4.2996 5.13045 3.9817C5.16789 3.56456 5.25108 3.14689 5.47676 2.75122C5.73451 2.29935 6.10887 1.92498 6.56074 1.66724C6.95642 1.44155 7.37409 1.35836 7.79122 1.32093C8.18484 1.2856 8.66356 1.28562 9.21498 1.28565ZM5.09541 7.09552C4.68397 7.09667 4.39263 7.10161 4.16046 7.12245C3.88053 7.14757 3.78516 7.18949 3.74214 7.21403C3.60139 7.29431 3.48478 7.41091 3.4045 7.55166C3.37997 7.59468 3.33804 7.69005 3.31292 7.96999C3.28659 8.26345 3.28565 8.65147 3.28565 9.25708V10.5523C3.28565 11.1579 3.28659 11.5459 3.31292 11.8394C3.33804 12.1193 3.37997 12.2147 3.4045 12.2577C3.48478 12.3985 3.60139 12.5151 3.74214 12.5954C3.78516 12.6199 3.88053 12.6618 4.16046 12.6869C4.45393 12.7133 4.84195 12.7142 5.44755 12.7142H6.74279C7.3484 12.7142 7.73641 12.7133 8.02988 12.6869C8.30981 12.6618 8.40518 12.6199 8.44821 12.5954C8.58895 12.5151 8.70556 12.3985 8.78584 12.2577C8.81038 12.2147 8.8523 12.1193 8.87742 11.8394C8.89825 11.6072 8.90319 11.3159 8.90435 10.9045C8.48219 10.9034 8.10898 10.8979 7.79122 10.8694C7.37409 10.832 6.95641 10.7488 6.56074 10.5231C6.10887 10.2654 5.73451 9.89099 5.47676 9.43912C5.25108 9.04345 5.16789 8.62578 5.13045 8.20865C5.10194 7.89089 5.09645 7.51767 5.09541 7.09552ZM7.96999 3.31292C7.69005 3.33804 7.59468 3.37997 7.55166 3.4045C7.41091 3.48478 7.29431 3.60139 7.21403 3.74214C7.18949 3.78516 7.14757 3.88053 7.12245 4.16046C7.09611 4.45393 7.09517 4.84195 7.09517 5.44755V6.74279C7.09517 7.3484 7.09611 7.73641 7.12245 8.02988C7.14757 8.30981 7.18949 8.40518 7.21403 8.4482C7.29431 8.58895 7.41091 8.70556 7.55166 8.78584C7.59468 8.81038 7.69005 8.8523 7.96999 8.87742C8.26345 8.90376 8.65147 8.9047 9.25708 8.9047H10.5523C11.1579 8.9047 11.5459 8.90376 11.8394 8.87742C12.1193 8.8523 12.2147 8.81038 12.2577 8.78584C12.3985 8.70556 12.5151 8.58895 12.5954 8.4482C12.6199 8.40518 12.6618 8.30981 12.6869 8.02988C12.7133 7.73641 12.7142 7.3484 12.7142 6.74279V5.44755C12.7142 4.84195 12.7133 4.45393 12.6869 4.16046C12.6618 3.88053 12.6199 3.78516 12.5954 3.74214C12.5151 3.60139 12.3985 3.48478 12.2577 3.4045C12.2147 3.37997 12.1193 3.33804 11.8394 3.31292C11.5459 3.28659 11.1579 3.28565 10.5523 3.28565H9.25708C8.65147 3.28565 8.26345 3.28659 7.96999 3.31292Z"
    fill="#788181"
  /></svg
>`,S1=C` <svg fill="none" viewBox="0 0 13 4">
  <path fill="currentColor" d="M.5 0h12L8.9 3.13a3.76 3.76 0 0 1-4.8 0L.5 0Z" />
</svg>`,A1=C`<svg fill="none" viewBox="0 0 14 6">
  <path style="fill: var(--wui-color-bg-150);" d="M0 1h14L9.21 5.12a3.31 3.31 0 0 1-4.49 0L0 1Z" />
  <path
    style="stroke: var(--wui-color-inverse-100);"
    stroke-opacity=".05"
    d="M1.33 1.5h11.32L8.88 4.75l-.01.01a2.81 2.81 0 0 1-3.8 0l-.02-.01L1.33 1.5Z"
  />
  <path
    style="fill: var(--wui-color-bg-150);"
    d="M1.25.71h11.5L9.21 3.88a3.31 3.31 0 0 1-4.49 0L1.25.71Z"
  />
</svg> `,E1=C`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13.66 2H6.34c-1.07 0-1.96 0-2.68.08-.74.08-1.42.25-2.01.68a4 4 0 0 0-.89.89c-.43.6-.6 1.27-.68 2.01C0 6.38 0 7.26 0 8.34v.89c0 1.07 0 1.96.08 2.68.08.74.25 1.42.68 2.01a4 4 0 0 0 .89.89c.6.43 1.27.6 2.01.68a27 27 0 0 0 2.68.08h7.32a27 27 0 0 0 2.68-.08 4.03 4.03 0 0 0 2.01-.68 4 4 0 0 0 .89-.89c.43-.6.6-1.27.68-2.01.08-.72.08-1.6.08-2.68v-.89c0-1.07 0-1.96-.08-2.68a4.04 4.04 0 0 0-.68-2.01 4 4 0 0 0-.89-.89c-.6-.43-1.27-.6-2.01-.68C15.62 2 14.74 2 13.66 2ZM2.82 4.38c.2-.14.48-.25 1.06-.31C4.48 4 5.25 4 6.4 4h7.2c1.15 0 1.93 0 2.52.07.58.06.86.17 1.06.31a2 2 0 0 1 .44.44c.14.2.25.48.31 1.06.07.6.07 1.37.07 2.52v.77c0 1.15 0 1.93-.07 2.52-.06.58-.17.86-.31 1.06a2 2 0 0 1-.44.44c-.2.14-.48.25-1.06.32-.6.06-1.37.06-2.52.06H6.4c-1.15 0-1.93 0-2.52-.06-.58-.07-.86-.18-1.06-.32a2 2 0 0 1-.44-.44c-.14-.2-.25-.48-.31-1.06C2 11.1 2 10.32 2 9.17V8.4c0-1.15 0-1.93.07-2.52.06-.58.17-.86.31-1.06a2 2 0 0 1 .44-.44Z"
    clip-rule="evenodd"
  />
  <path fill="currentColor" d="M6.14 17.57a1 1 0 1 0 0 2h7.72a1 1 0 1 0 0-2H6.14Z" />
</svg>`,$1=C`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.07 1h.57a1 1 0 0 1 0 2h-.52c-.98 0-1.64 0-2.14.06-.48.05-.7.14-.84.24-.13.1-.25.22-.34.35-.1.14-.2.35-.25.83-.05.5-.05 1.16-.05 2.15v2.74c0 .99 0 1.65.05 2.15.05.48.14.7.25.83.1.14.2.25.34.35.14.1.36.2.84.25.5.05 1.16.05 2.14.05h.52a1 1 0 0 1 0 2h-.57c-.92 0-1.69 0-2.3-.07a3.6 3.6 0 0 1-1.8-.61c-.3-.22-.57-.49-.8-.8a3.6 3.6 0 0 1-.6-1.79C.5 11.11.5 10.35.5 9.43V6.58c0-.92 0-1.7.06-2.31a3.6 3.6 0 0 1 .62-1.8c.22-.3.48-.57.79-.79a3.6 3.6 0 0 1 1.8-.61C4.37 1 5.14 1 6.06 1ZM9.5 3a1 1 0 0 1 1.42 0l4.28 4.3a1 1 0 0 1 0 1.4L10.93 13a1 1 0 0 1-1.42-1.42L12.1 9H6.8a1 1 0 1 1 0-2h5.3L9.51 4.42a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,R1=C`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`,I1=C`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M4.25 7a.63.63 0 0 0-.63.63v3.97c0 .28-.2.51-.47.54l-.75.07a.93.93 0 0 1-.9-.47A7.51 7.51 0 0 1 5.54.92a7.5 7.5 0 0 1 9.54 4.62c.12.35.06.72-.16 1-.74.97-1.68 1.78-2.6 2.44V4.44a.64.64 0 0 0-.63-.64h-1.06c-.35 0-.63.3-.63.64v5.5c0 .23-.12.42-.32.5l-.52.23V6.05c0-.36-.3-.64-.64-.64H7.45c-.35 0-.64.3-.64.64v4.97c0 .25-.17.46-.4.52a5.8 5.8 0 0 0-.45.11v-4c0-.36-.3-.65-.64-.65H4.25ZM14.07 12.4A7.49 7.49 0 0 1 3.6 14.08c4.09-.58 9.14-2.5 11.87-6.6v.03a7.56 7.56 0 0 1-1.41 4.91Z"
  />
</svg>`,O1=C`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.71 2.99a.57.57 0 0 0-.57.57 1 1 0 0 1-1 1c-.58 0-.96 0-1.24.03-.27.03-.37.07-.42.1a.97.97 0 0 0-.36.35c-.04.08-.09.21-.11.67a2.57 2.57 0 0 1 0 5.13c.02.45.07.6.11.66.09.15.21.28.36.36.07.04.21.1.67.12a2.57 2.57 0 0 1 5.12 0c.46-.03.6-.08.67-.12a.97.97 0 0 0 .36-.36c.03-.04.07-.14.1-.41.02-.29.03-.66.03-1.24a1 1 0 0 1 1-1 .57.57 0 0 0 0-1.15 1 1 0 0 1-1-1c0-.58 0-.95-.03-1.24a1.04 1.04 0 0 0-.1-.42.97.97 0 0 0-.36-.36 1.04 1.04 0 0 0-.42-.1c-.28-.02-.65-.02-1.24-.02a1 1 0 0 1-1-1 .57.57 0 0 0-.57-.57ZM5.15 13.98a1 1 0 0 0 .99-1v-.78a.57.57 0 0 1 1.14 0v.78a1 1 0 0 0 .99 1H8.36a66.26 66.26 0 0 0 .73 0 3.78 3.78 0 0 0 1.84-.38c.46-.26.85-.64 1.1-1.1.23-.4.32-.8.36-1.22.02-.2.03-.4.03-.63a2.57 2.57 0 0 0 0-4.75c0-.23-.01-.44-.03-.63a2.96 2.96 0 0 0-.35-1.22 2.97 2.97 0 0 0-1.1-1.1c-.4-.22-.8-.31-1.22-.35a8.7 8.7 0 0 0-.64-.04 2.57 2.57 0 0 0-4.74 0c-.23 0-.44.02-.63.04-.42.04-.83.13-1.22.35-.46.26-.84.64-1.1 1.1-.33.57-.37 1.2-.39 1.84a21.39 21.39 0 0 0 0 .72v.1a1 1 0 0 0 1 .99h.78a.57.57 0 0 1 0 1.15h-.77a1 1 0 0 0-1 .98v.1a63.87 63.87 0 0 0 0 .73c0 .64.05 1.27.38 1.83.26.47.64.85 1.1 1.11.56.32 1.2.37 1.84.38a20.93 20.93 0 0 0 .72 0h.1Z"
    clip-rule="evenodd"
  />
</svg>`,N1=C`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.74 3.99a1 1 0 0 1 1-1H11a1 1 0 0 1 1 1v6.26a1 1 0 0 1-2 0V6.4l-6.3 6.3a1 1 0 0 1-1.4-1.42l6.29-6.3H4.74a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,P1=C`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1877F2" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M26 12.38h-2.89c-.92 0-1.61.38-1.61 1.34v1.66H26l-.36 4.5H21.5v12H17v-12h-3v-4.5h3V12.5c0-3.03 1.6-4.62 5.2-4.62H26v4.5Z"
        />
      </g>
    </g>
    <path
      fill="#1877F2"
      d="M40 20a20 20 0 1 0-23.13 19.76V25.78H11.8V20h5.07v-4.4c0-5.02 3-7.79 7.56-7.79 2.19 0 4.48.4 4.48.4v4.91h-2.53c-2.48 0-3.25 1.55-3.25 3.13V20h5.54l-.88 5.78h-4.66v13.98A20 20 0 0 0 40 20Z"
    />
    <path
      fill="#fff"
      d="m27.79 25.78.88-5.78h-5.55v-3.75c0-1.58.78-3.13 3.26-3.13h2.53V8.2s-2.3-.39-4.48-.39c-4.57 0-7.55 2.77-7.55 7.78V20H11.8v5.78h5.07v13.98a20.15 20.15 0 0 0 6.25 0V25.78h4.67Z"
    />
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,D1=C`<svg style="border-radius: 9999px; overflow: hidden;"  fill="none" viewBox="0 0 1000 1000">
  <rect width="1000" height="1000" rx="9999" ry="9999" fill="#855DCD"/>
  <path fill="#855DCD" d="M0 0h1000v1000H0V0Z" />
  <path
    fill="#fff"
    d="M320 248h354v504h-51.96V521.13h-.5c-5.76-63.8-59.31-113.81-124.54-113.81s-118.78 50-124.53 113.81h-.5V752H320V248Z"
  />
  <path
    fill="#fff"
    d="m225 320 21.16 71.46h17.9v289.09a16.29 16.29 0 0 0-16.28 16.24v19.49h-3.25a16.3 16.3 0 0 0-16.28 16.24V752h182.26v-19.48a16.22 16.22 0 0 0-16.28-16.24h-3.25v-19.5a16.22 16.22 0 0 0-16.28-16.23h-19.52V320H225Zm400.3 360.55a16.3 16.3 0 0 0-15.04 10.02 16.2 16.2 0 0 0-1.24 6.22v19.49h-3.25a16.29 16.29 0 0 0-16.27 16.24V752h182.24v-19.48a16.23 16.23 0 0 0-16.27-16.24h-3.25v-19.5a16.2 16.2 0 0 0-10.04-15 16.3 16.3 0 0 0-6.23-1.23v-289.1h17.9L775 320H644.82v360.55H625.3Z"
  />
</svg>`,U1=C`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 3a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1Zm2.63 5.25a1 1 0 0 1 1-1h8.75a1 1 0 1 1 0 2H3.63a1 1 0 0 1-1-1Zm2.62 5.25a1 1 0 0 1 1-1h3.5a1 1 0 0 1 0 2h-3.5a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,W1=C`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1B1F23" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M8 19.89a12 12 0 1 1 15.8 11.38c-.6.12-.8-.26-.8-.57v-3.3c0-1.12-.4-1.85-.82-2.22 2.67-.3 5.48-1.31 5.48-5.92 0-1.31-.47-2.38-1.24-3.22.13-.3.54-1.52-.12-3.18 0 0-1-.32-3.3 1.23a11.54 11.54 0 0 0-6 0c-2.3-1.55-3.3-1.23-3.3-1.23a4.32 4.32 0 0 0-.12 3.18 4.64 4.64 0 0 0-1.24 3.22c0 4.6 2.8 5.63 5.47 5.93-.34.3-.65.83-.76 1.6-.69.31-2.42.84-3.5-1 0 0-.63-1.15-1.83-1.23 0 0-1.18-.02-.09.73 0 0 .8.37 1.34 1.76 0 0 .7 2.14 4.03 1.41v2.24c0 .31-.2.68-.8.57A12 12 0 0 1 8 19.9Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,M1=C`<svg fill="none" viewBox="0 0 40 40">
  <path
    fill="#4285F4"
    d="M32.74 20.3c0-.93-.08-1.81-.24-2.66H20.26v5.03h7a6 6 0 0 1-2.62 3.91v3.28h4.22c2.46-2.27 3.88-5.6 3.88-9.56Z"
  />
  <path
    fill="#34A853"
    d="M20.26 33a12.4 12.4 0 0 0 8.6-3.14l-4.22-3.28a7.74 7.74 0 0 1-4.38 1.26 7.76 7.76 0 0 1-7.28-5.36H8.65v3.36A12.99 12.99 0 0 0 20.26 33Z"
  />
  <path
    fill="#FBBC05"
    d="M12.98 22.47a7.79 7.79 0 0 1 0-4.94v-3.36H8.65a12.84 12.84 0 0 0 0 11.66l3.37-2.63.96-.73Z"
  />
  <path
    fill="#EA4335"
    d="M20.26 12.18a7.1 7.1 0 0 1 4.98 1.93l3.72-3.72A12.47 12.47 0 0 0 20.26 7c-5.08 0-9.47 2.92-11.6 7.17l4.32 3.36a7.76 7.76 0 0 1 7.28-5.35Z"
  />
</svg>`,j1=C`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M8.51 5.66a.83.83 0 0 0-.57-.2.83.83 0 0 0-.52.28.8.8 0 0 0-.25.52 1 1 0 0 1-2 0c0-.75.34-1.43.81-1.91a2.75 2.75 0 0 1 4.78 1.92c0 1.24-.8 1.86-1.25 2.2l-.04.03c-.47.36-.5.43-.5.65a1 1 0 1 1-2 0c0-1.25.8-1.86 1.24-2.2l.04-.04c.47-.36.5-.43.5-.65 0-.3-.1-.49-.24-.6ZM9.12 11.87a1.13 1.13 0 1 1-2.25 0 1.13 1.13 0 0 1 2.25 0Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6a6 6 0 1 0 0 12A6 6 0 0 0 8 2Z"
    clip-rule="evenodd"
  />
</svg>`,L1=C`<svg width="14" height="14" viewBox="0 0 14 14" fill="none">
  <path d="M4.98926 3.73932C4.2989 3.73932 3.73926 4.29896 3.73926 4.98932C3.73926 5.67968 4.2989 6.23932 4.98926 6.23932C5.67962 6.23932 6.23926 5.67968 6.23926 4.98932C6.23926 4.29896 5.67962 3.73932 4.98926 3.73932Z" fill="currentColor"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M7.60497 0.500001H6.39504C5.41068 0.499977 4.59185 0.499958 3.93178 0.571471C3.24075 0.64634 2.60613 0.809093 2.04581 1.21619C1.72745 1.44749 1.44749 1.72745 1.21619 2.04581C0.809093 2.60613 0.64634 3.24075 0.571471 3.93178C0.499958 4.59185 0.499977 5.41065 0.500001 6.39501V7.57815C0.499998 8.37476 0.499995 9.05726 0.534869 9.62725C0.570123 10.2034 0.644114 10.7419 0.828442 11.2302C0.925651 11.4877 1.05235 11.7287 1.21619 11.9542C1.44749 12.2726 1.72745 12.5525 2.04581 12.7838C2.60613 13.1909 3.24075 13.3537 3.93178 13.4285C4.59185 13.5001 5.41066 13.5 6.39503 13.5H7.60496C8.58933 13.5 9.40815 13.5001 10.0682 13.4285C10.7593 13.3537 11.3939 13.1909 11.9542 12.7838C12.2726 12.5525 12.5525 12.2726 12.7838 11.9542C13.1909 11.3939 13.3537 10.7593 13.4285 10.0682C13.5 9.40816 13.5 8.58935 13.5 7.60497V6.39505C13.5 5.41068 13.5 4.59185 13.4285 3.93178C13.3537 3.24075 13.1909 2.60613 12.7838 2.04581C12.5525 1.72745 12.2726 1.44749 11.9542 1.21619C11.3939 0.809093 10.7593 0.64634 10.0682 0.571471C9.40816 0.499958 8.58933 0.499977 7.60497 0.500001ZM3.22138 2.83422C3.38394 2.71612 3.62634 2.61627 4.14721 2.55984C4.68679 2.50138 5.39655 2.5 6.45 2.5H7.55C8.60345 2.5 9.31322 2.50138 9.8528 2.55984C10.3737 2.61627 10.6161 2.71612 10.7786 2.83422C10.9272 2.94216 11.0578 3.07281 11.1658 3.22138C11.2839 3.38394 11.3837 3.62634 11.4402 4.14721C11.4986 4.68679 11.5 5.39655 11.5 6.45V6.49703C10.9674 6.11617 10.386 5.84936 9.74213 5.81948C8.40536 5.75745 7.3556 6.73051 6.40509 7.84229C6.33236 7.92737 6.27406 7.98735 6.22971 8.02911L6.1919 8.00514L6.17483 7.99427C6.09523 7.94353 5.98115 7.87083 5.85596 7.80302C5.56887 7.64752 5.18012 7.4921 4.68105 7.4921C4.66697 7.4921 4.6529 7.49239 4.63884 7.49299C3.79163 7.52878 3.09922 8.1106 2.62901 8.55472C2.58751 8.59392 2.54594 8.6339 2.50435 8.6745C2.50011 8.34653 2.5 7.97569 2.5 7.55V6.45C2.5 5.39655 2.50138 4.68679 2.55984 4.14721C2.61627 3.62634 2.71612 3.38394 2.83422 3.22138C2.94216 3.07281 3.07281 2.94216 3.22138 2.83422ZM10.3703 8.14825C10.6798 8.37526 11.043 8.71839 11.4832 9.20889C11.4744 9.44992 11.4608 9.662 11.4402 9.8528C11.3837 10.3737 11.2839 10.6161 11.1658 10.7786C11.0578 10.9272 10.9272 11.0578 10.7786 11.1658C10.6161 11.2839 10.3737 11.3837 9.8528 11.4402C9.31322 11.4986 8.60345 11.5 7.55 11.5H6.45C5.39655 11.5 4.68679 11.4986 4.14721 11.4402C3.62634 11.3837 3.38394 11.2839 3.22138 11.1658C3.15484 11.1174 3.0919 11.0645 3.03298 11.0075C3.10126 10.9356 3.16806 10.8649 3.23317 10.7959L3.29772 10.7276C3.55763 10.4525 3.78639 10.2126 4.00232 10.0087C4.22016 9.80294 4.39412 9.66364 4.53524 9.57742C4.63352 9.51738 4.69022 9.49897 4.71275 9.49345C4.76387 9.49804 4.81803 9.51537 4.90343 9.56162C4.96409 9.59447 5.02355 9.63225 5.11802 9.69238L5.12363 9.69595C5.20522 9.74789 5.32771 9.82587 5.46078 9.89278C5.76529 10.0459 6.21427 10.186 6.74977 10.0158C7.21485 9.86796 7.59367 9.52979 7.92525 9.14195C8.91377 7.98571 9.38267 7.80495 9.64941 7.81733C9.7858 7.82366 10.0101 7.884 10.3703 8.14825Z" fill="currentColor"/>
</svg>`,B1=C`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    d="M6 10.49a1 1 0 1 0 2 0v-2a1 1 0 0 0-2 0v2ZM7 4.49a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 14.99a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm5-7a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
    clip-rule="evenodd"
  />
</svg>`,z1=C`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.83 1.34h6.34c.68 0 1.26 0 1.73.04.5.05.97.15 1.42.4.52.3.95.72 1.24 1.24.26.45.35.92.4 1.42.04.47.04 1.05.04 1.73v3.71c0 .69 0 1.26-.04 1.74-.05.5-.14.97-.4 1.41-.3.52-.72.95-1.24 1.25-.45.25-.92.35-1.42.4-.47.03-1.05.03-1.73.03H4.83c-.68 0-1.26 0-1.73-.04-.5-.04-.97-.14-1.42-.4-.52-.29-.95-.72-1.24-1.24a3.39 3.39 0 0 1-.4-1.41A20.9 20.9 0 0 1 0 9.88v-3.7c0-.7 0-1.27.04-1.74.05-.5.14-.97.4-1.42.3-.52.72-.95 1.24-1.24.45-.25.92-.35 1.42-.4.47-.04 1.05-.04 1.73-.04ZM3.28 3.38c-.36.03-.51.08-.6.14-.21.11-.39.29-.5.5a.8.8 0 0 0-.08.19l5.16 3.44c.45.3 1.03.3 1.48 0L13.9 4.2a.79.79 0 0 0-.08-.2c-.11-.2-.29-.38-.5-.5-.09-.05-.24-.1-.6-.13-.37-.04-.86-.04-1.6-.04H4.88c-.73 0-1.22 0-1.6.04ZM14 6.54 9.85 9.31a3.33 3.33 0 0 1-3.7 0L2 6.54v3.3c0 .74 0 1.22.03 1.6.04.36.1.5.15.6.11.2.29.38.5.5.09.05.24.1.6.14.37.03.86.03 1.6.03h6.25c.73 0 1.22 0 1.6-.03.35-.03.5-.09.6-.14.2-.12.38-.3.5-.5.05-.1.1-.24.14-.6.03-.38.03-.86.03-1.6v-3.3Z"
    clip-rule="evenodd"
  />
</svg>`,V1=C`<svg fill="none" viewBox="0 0 20 20">
  <path fill="currentColor" d="M10.81 5.81a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3 4.75A4.75 4.75 0 0 1 7.75 0h4.5A4.75 4.75 0 0 1 17 4.75v10.5A4.75 4.75 0 0 1 12.25 20h-4.5A4.75 4.75 0 0 1 3 15.25V4.75ZM7.75 2A2.75 2.75 0 0 0 5 4.75v10.5A2.75 2.75 0 0 0 7.75 18h4.5A2.75 2.75 0 0 0 15 15.25V4.75A2.75 2.75 0 0 0 12.25 2h-4.5Z"
    clip-rule="evenodd"
  />
</svg>`,H1=C`<svg fill="none" viewBox="0 0 41 40">
  <path
    style="fill: var(--wui-color-fg-100);"
    fill-opacity=".05"
    d="M.6 20a20 20 0 1 1 40 0 20 20 0 0 1-40 0Z"
  />
  <path
    fill="#949E9E"
    d="M15.6 20.31a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM23.1 20.31a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM28.1 22.81a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
  />
</svg>`,F1=C`<svg fill="none" viewBox="0 0 22 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M16.32 13.62a3.14 3.14 0 1 1-.99 1.72l-1.6-.93a3.83 3.83 0 0 1-3.71 1 3.66 3.66 0 0 1-1.74-1l-1.6.94a3.14 3.14 0 1 1-1-1.73l1.6-.94a3.7 3.7 0 0 1 0-2 3.81 3.81 0 0 1 1.8-2.33c.29-.17.6-.3.92-.38V6.1a3.14 3.14 0 1 1 2 0l-.01.02v1.85H12a3.82 3.82 0 0 1 2.33 1.8 3.7 3.7 0 0 1 .39 2.91l1.6.93ZM2.6 16.54a1.14 1.14 0 0 0 1.98-1.14 1.14 1.14 0 0 0-1.98 1.14ZM11 2.01a1.14 1.14 0 1 0 0 2.28 1.14 1.14 0 0 0 0-2.28Zm1.68 10.45c.08-.19.14-.38.16-.58v-.05l.02-.13v-.13a1.92 1.92 0 0 0-.24-.8l-.11-.15a1.89 1.89 0 0 0-.74-.6 1.86 1.86 0 0 0-.77-.17h-.19a1.97 1.97 0 0 0-.89.34 1.98 1.98 0 0 0-.61.74 1.99 1.99 0 0 0-.16.9v.05a1.87 1.87 0 0 0 .24.74l.1.15c.12.16.26.3.42.42l.16.1.13.07.04.02a1.84 1.84 0 0 0 .76.17h.17a2 2 0 0 0 .91-.35 1.78 1.78 0 0 0 .52-.58l.03-.05a.84.84 0 0 0 .05-.11Zm5.15 4.5a1.14 1.14 0 0 0 1.14-1.97 1.13 1.13 0 0 0-1.55.41c-.32.55-.13 1.25.41 1.56Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.63 9.43a1.5 1.5 0 1 0 1.5-2.6 1.5 1.5 0 0 0-1.5 2.6Zm.32-1.55a.5.5 0 0 1 .68-.19.5.5 0 0 1 .18.68.5.5 0 0 1-.68.19.5.5 0 0 1-.18-.68ZM17.94 8.88a1.5 1.5 0 1 1-2.6-1.5 1.5 1.5 0 1 1 2.6 1.5ZM16.9 7.69a.5.5 0 0 0-.68.19.5.5 0 0 0 .18.68.5.5 0 0 0 .68-.19.5.5 0 0 0-.18-.68ZM9.75 17.75a1.5 1.5 0 1 1 2.6 1.5 1.5 1.5 0 1 1-2.6-1.5Zm1.05 1.18a.5.5 0 0 0 .68-.18.5.5 0 0 0-.18-.68.5.5 0 0 0-.68.18.5.5 0 0 0 .18.68Z"
    clip-rule="evenodd"
  />
</svg>`,Z1=C`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.13 1h1.71c1.46 0 2.63 0 3.56.1.97.1 1.8.33 2.53.85a5 5 0 0 1 1.1 1.11c.53.73.75 1.56.86 2.53.1.93.1 2.1.1 3.55v1.72c0 1.45 0 2.62-.1 3.55-.1.97-.33 1.8-.86 2.53a5 5 0 0 1-1.1 1.1c-.73.53-1.56.75-2.53.86-.93.1-2.1.1-3.55.1H9.13c-1.45 0-2.62 0-3.56-.1-.96-.1-1.8-.33-2.52-.85a5 5 0 0 1-1.1-1.11 5.05 5.05 0 0 1-.86-2.53c-.1-.93-.1-2.1-.1-3.55V9.14c0-1.45 0-2.62.1-3.55.1-.97.33-1.8.85-2.53a5 5 0 0 1 1.1-1.1 5.05 5.05 0 0 1 2.53-.86C6.51 1 7.67 1 9.13 1ZM5.79 3.09a3.1 3.1 0 0 0-1.57.48 3 3 0 0 0-.66.67c-.24.32-.4.77-.48 1.56-.1.82-.1 1.88-.1 3.4v1.6c0 1.15 0 2.04.05 2.76l.41-.42c.5-.5.93-.92 1.32-1.24.41-.33.86-.6 1.43-.7a3 3 0 0 1 .94 0c.35.06.66.2.95.37a17.11 17.11 0 0 0 .8.45c.1-.08.2-.2.41-.4l.04-.03a27 27 0 0 1 1.95-1.84 4.03 4.03 0 0 1 1.91-.94 4 4 0 0 1 1.25 0c.73.11 1.33.46 1.91.94l.64.55V9.2c0-1.52 0-2.58-.1-3.4a3.1 3.1 0 0 0-.48-1.56 3 3 0 0 0-.66-.67 3.1 3.1 0 0 0-1.56-.48C13.37 3 12.3 3 10.79 3h-1.6c-1.52 0-2.59 0-3.4.09Zm11.18 10-.04-.05a26.24 26.24 0 0 0-1.83-1.74c-.45-.36-.73-.48-.97-.52a2 2 0 0 0-.63 0c-.24.04-.51.16-.97.52-.46.38-1.01.93-1.83 1.74l-.02.02c-.17.18-.34.34-.49.47a2.04 2.04 0 0 1-1.08.5 1.97 1.97 0 0 1-1.25-.27l-.79-.46-.02-.02a.65.65 0 0 0-.24-.1 1 1 0 0 0-.31 0c-.08.02-.21.06-.49.28-.3.24-.65.59-1.2 1.14l-.56.56-.65.66a3 3 0 0 0 .62.6c.33.24.77.4 1.57.49.81.09 1.88.09 3.4.09h1.6c1.52 0 2.58 0 3.4-.09a3.1 3.1 0 0 0 1.56-.48 3 3 0 0 0 .66-.67c.24-.32.4-.77.49-1.56l.07-1.12Zm-8.02-1.03ZM4.99 7a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
    clip-rule="evenodd"
  />
</svg>`,G1=C`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 0a1 1 0 0 1 1 1v5.38a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1ZM5.26 2.6a1 1 0 0 1-.28 1.39 5.46 5.46 0 1 0 6.04 0 1 1 0 1 1 1.1-1.67 7.46 7.46 0 1 1-8.25 0 1 1 0 0 1 1.4.28Z"
    clip-rule="evenodd"
  />
</svg>`,q1=C` <svg
  width="36"
  height="36"
  fill="none"
>
  <path
    d="M0 8a8 8 0 0 1 8-8h20a8 8 0 0 1 8 8v20a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8V8Z"
    fill="#fff"
    fill-opacity=".05"
  />
  <path
    d="m18.262 17.513-8.944 9.49v.01a2.417 2.417 0 0 0 3.56 1.452l.026-.017 10.061-5.803-4.703-5.132Z"
    fill="#EA4335"
  />
  <path
    d="m27.307 15.9-.008-.008-4.342-2.52-4.896 4.36 4.913 4.912 4.325-2.494a2.42 2.42 0 0 0 .008-4.25Z"
    fill="#FBBC04"
  />
  <path
    d="M9.318 8.997c-.05.202-.084.403-.084.622V26.39c0 .218.025.42.084.621l9.246-9.247-9.246-8.768Z"
    fill="#4285F4"
  />
  <path
    d="m18.33 18 4.627-4.628-10.053-5.828a2.427 2.427 0 0 0-3.586 1.444L18.329 18Z"
    fill="#34A853"
  />
  <path
    d="M8 .5h20A7.5 7.5 0 0 1 35.5 8v20a7.5 7.5 0 0 1-7.5 7.5H8A7.5 7.5 0 0 1 .5 28V8A7.5 7.5 0 0 1 8 .5Z"
    stroke="#fff"
    stroke-opacity=".05"
  />
</svg>`,Y1=C`<svg
  width="13"
  height="12"
  viewBox="0 0 13 12"
  fill="none"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M0.794373 5.99982C0.794373 5.52643 1.17812 5.14268 1.6515 5.14268H5.643V1.15109C5.643 0.677701 6.02675 0.293946 6.50012 0.293945C6.9735 0.293946 7.35725 0.677701 7.35725 1.15109V5.14268H11.3488C11.8221 5.14268 12.2059 5.52643 12.2059 5.99982C12.2059 6.47321 11.8221 6.85696 11.3488 6.85696H7.35725V10.8486C7.35725 11.3219 6.9735 11.7057 6.50012 11.7057C6.02675 11.7057 5.643 11.3219 5.643 10.8486V6.85696H1.6515C1.17812 6.85696 0.794373 6.47321 0.794373 5.99982Z"
  /></svg
>`,K1=C`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M3 6a3 3 0 0 1 3-3h1a1 1 0 1 0 0-2H6a5 5 0 0 0-5 5v1a1 1 0 0 0 2 0V6ZM13 1a1 1 0 1 0 0 2h1a3 3 0 0 1 3 3v1a1 1 0 1 0 2 0V6a5 5 0 0 0-5-5h-1ZM3 13a1 1 0 1 0-2 0v1a5 5 0 0 0 5 5h1a1 1 0 1 0 0-2H6a3 3 0 0 1-3-3v-1ZM19 13a1 1 0 1 0-2 0v1a3 3 0 0 1-3 3h-1a1 1 0 1 0 0 2h1.01a5 5 0 0 0 5-5v-1ZM5.3 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05A1.5 1.5 0 0 0 9.2 8.14c.06-.2.06-.43.06-.89s0-.7-.06-.89A1.5 1.5 0 0 0 8.14 5.3c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM10.8 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM5.26 12.75c0-.46 0-.7.05-.89a1.5 1.5 0 0 1 1.06-1.06c.19-.05.42-.05.89-.05.46 0 .7 0 .88.05.52.14.93.54 1.06 1.06.06.2.06.43.06.89s0 .7-.06.89a1.5 1.5 0 0 1-1.06 1.06c-.19.05-.42.05-.88.05-.47 0-.7 0-.9-.05a1.5 1.5 0 0 1-1.05-1.06c-.05-.2-.05-.43-.05-.89ZM10.8 11.86c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06Z"
  />
</svg>`,X1=C`<svg
  fill="none"
  viewBox="0 0 21 20"
>
  <path
    fill="currentColor"
    d="M8.8071 0.292893C9.19763 0.683417 9.19763 1.31658 8.8071 1.70711L6.91421 3.6H11.8404C14.3368 3.6 16.5533 5.1975 17.3427 7.56588L17.4487 7.88377C17.6233 8.40772 17.3402 8.97404 16.8162 9.14868C16.2923 9.32333 15.726 9.04017 15.5513 8.51623L15.4453 8.19834C14.9281 6.64664 13.476 5.6 11.8404 5.6H6.91421L8.8071 7.49289C9.19763 7.88342 9.19763 8.51658 8.8071 8.90711C8.41658 9.29763 7.78341 9.29763 7.39289 8.90711L3.79289 5.30711C3.40236 4.91658 3.40236 4.28342 3.79289 3.89289L7.39289 0.292893C7.78341 -0.0976311 8.41658 -0.0976311 8.8071 0.292893ZM4.18377 10.8513C4.70771 10.6767 5.27403 10.9598 5.44868 11.4838L5.55464 11.8017C6.07188 13.3534 7.52401 14.4 9.15964 14.4L14.0858 14.4L12.1929 12.5071C11.8024 12.1166 11.8024 11.4834 12.1929 11.0929C12.5834 10.7024 13.2166 10.7024 13.6071 11.0929L17.2071 14.6929C17.5976 15.0834 17.5976 15.7166 17.2071 16.1071L13.6071 19.7071C13.2166 20.0976 12.5834 20.0976 12.1929 19.7071C11.8024 19.3166 11.8024 18.6834 12.1929 18.2929L14.0858 16.4L9.15964 16.4C6.66314 16.4 4.44674 14.8025 3.65728 12.4341L3.55131 12.1162C3.37667 11.5923 3.65983 11.026 4.18377 10.8513Z"
  /></svg
>`,Q1=C`<svg fill="none" viewBox="0 0 14 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.94 1.04a1 1 0 0 1 .7 1.23l-.48 1.68a5.85 5.85 0 0 1 8.53 4.32 5.86 5.86 0 0 1-11.4 2.56 1 1 0 0 1 1.9-.57 3.86 3.86 0 1 0 1.83-4.5l1.87.53a1 1 0 0 1-.55 1.92l-4.1-1.15a1 1 0 0 1-.69-1.23l1.16-4.1a1 1 0 0 1 1.23-.7Z"
    clip-rule="evenodd"
  />
</svg>`,J1=C`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.36 4.21a5.14 5.14 0 1 0 0 10.29 5.14 5.14 0 0 0 0-10.29ZM1.64 9.36a7.71 7.71 0 1 1 14 4.47l2.52 2.5a1.29 1.29 0 1 1-1.82 1.83l-2.51-2.51A7.71 7.71 0 0 1 1.65 9.36Z"
    clip-rule="evenodd"
  />
</svg>`,eh=C`<svg fill="none" viewBox="0 0 21 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M14.3808 4.34812C13.72 4.47798 12.8501 4.7587 11.5748 5.17296L9.00869 6.00646C6.90631 6.68935 5.40679 7.17779 4.38121 7.63178C3.87166 7.85734 3.5351 8.05091 3.32022 8.22035C3.11183 8.38466 3.07011 8.48486 3.05969 8.51817C2.98058 8.77103 2.98009 9.04195 3.05831 9.29509C3.06861 9.32844 3.10998 9.42878 3.31777 9.59384C3.53205 9.76404 3.86792 9.95881 4.37667 10.1862C5.29287 10.5957 6.58844 11.0341 8.35529 11.6164L10.8876 8.59854C11.2426 8.17547 11.8733 8.12028 12.2964 8.47528C12.7195 8.83029 12.7746 9.46104 12.4196 9.88412L9.88738 12.9019C10.7676 14.5408 11.4244 15.7406 11.9867 16.5718C12.299 17.0333 12.5491 17.3303 12.7539 17.5117C12.9526 17.6877 13.0586 17.711 13.0932 17.7154C13.3561 17.7484 13.6228 17.7009 13.8581 17.5791C13.8891 17.563 13.9805 17.5046 14.1061 17.2708C14.2357 17.0298 14.3679 16.6647 14.5015 16.1237C14.7705 15.0349 14.9912 13.4733 15.2986 11.2843L15.6738 8.61249C15.8603 7.28456 15.9857 6.37917 15.9989 5.7059C16.012 5.03702 15.9047 4.8056 15.8145 4.69183C15.7044 4.55297 15.5673 4.43792 15.4114 4.35365C15.2837 4.28459 15.0372 4.2191 14.3808 4.34812ZM7.99373 13.603C6.11919 12.9864 4.6304 12.4902 3.5606 12.0121C2.98683 11.7557 2.4778 11.4808 2.07383 11.1599C1.66337 10.8339 1.31312 10.4217 1.14744 9.88551C0.949667 9.24541 0.950886 8.56035 1.15094 7.92096C1.31852 7.38534 1.67024 6.97442 2.08185 6.64985C2.48697 6.33041 2.99697 6.05734 3.57166 5.80295C4.70309 5.3021 6.30179 4.78283 8.32903 4.12437L11.0196 3.25042C12.2166 2.86159 13.2017 2.54158 13.9951 2.38566C14.8065 2.22618 15.6202 2.19289 16.3627 2.59437C16.7568 2.80747 17.1035 3.09839 17.3818 3.4495C17.9062 4.111 18.0147 4.91815 17.9985 5.74496C17.9827 6.55332 17.8386 7.57903 17.6636 8.82534L17.2701 11.6268C16.9737 13.7376 16.7399 15.4022 16.4432 16.6034C16.2924 17.2135 16.1121 17.7632 15.8678 18.2176C15.6197 18.6794 15.2761 19.0971 14.7777 19.3551C14.1827 19.6632 13.5083 19.7833 12.8436 19.6997C12.2867 19.6297 11.82 19.3563 11.4277 19.0087C11.0415 18.6666 10.6824 18.213 10.3302 17.6925C9.67361 16.722 8.92648 15.342 7.99373 13.603Z"
    clip-rule="evenodd"
  />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="21"
    height="20"
    viewBox="0 0 21 20"
    fill="none"
  ></svg></svg
>`,th=C`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.76.3a1 1 0 0 1 0 1.4L4.07 4.4h9a1 1 0 1 1 0 2h-9l2.69 2.68a1 1 0 1 1-1.42 1.42L.95 6.09a1 1 0 0 1 0-1.4l4.4-4.4a1 1 0 0 1 1.4 0Zm6.49 9.21a1 1 0 0 1 1.41 0l4.39 4.4a1 1 0 0 1 0 1.4l-4.39 4.4a1 1 0 0 1-1.41-1.42l2.68-2.68h-9a1 1 0 0 1 0-2h9l-2.68-2.68a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,ih=C`<svg width="10" height="10" viewBox="0 0 10 10">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.77986 0.566631C4.0589 0.845577 4.0589 1.29784 3.77986 1.57678L3.08261 2.2738H6.34184C6.73647 2.2738 7.05637 2.5936 7.05637 2.98808C7.05637 3.38257 6.73647 3.70237 6.34184 3.70237H3.08261L3.77986 4.39938C4.0589 4.67833 4.0589 5.13059 3.77986 5.40954C3.50082 5.68848 3.04841 5.68848 2.76937 5.40954L0.852346 3.49316C0.573306 3.21421 0.573306 2.76195 0.852346 2.48301L2.76937 0.566631C3.04841 0.287685 3.50082 0.287685 3.77986 0.566631ZM6.22 4.59102C6.49904 4.31208 6.95145 4.31208 7.23049 4.59102L9.14751 6.5074C9.42655 6.78634 9.42655 7.23861 9.14751 7.51755L7.23049 9.43393C6.95145 9.71287 6.49904 9.71287 6.22 9.43393C5.94096 9.15498 5.94096 8.70272 6.22 8.42377L6.91725 7.72676L3.65802 7.72676C3.26339 7.72676 2.94349 7.40696 2.94349 7.01247C2.94349 6.61798 3.26339 6.29819 3.65802 6.29819L6.91725 6.29819L6.22 5.60117C5.94096 5.32223 5.94096 4.86997 6.22 4.59102Z"
    clip-rule="evenodd"
  />
</svg>`,nh=C`<svg
  width="14"
  height="14"
  viewBox="0 0 14 14"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M13.7306 3.24213C14.0725 3.58384 14.0725 4.13786 13.7306 4.47957L10.7418 7.46737C10.4 7.80908 9.84581 7.80908 9.50399 7.46737C9.16216 7.12567 9.16216 6.57165 9.50399 6.22994L10.9986 4.73585H5.34082C4.85741 4.73585 4.46553 4.3441 4.46553 3.86085C4.46553 3.3776 4.85741 2.98585 5.34082 2.98585L10.9986 2.98585L9.50399 1.49177C9.16216 1.15006 9.16216 0.596037 9.50399 0.254328C9.84581 -0.0873803 10.4 -0.0873803 10.7418 0.254328L13.7306 3.24213ZM9.52515 10.1352C9.52515 10.6185 9.13327 11.0102 8.64986 11.0102L2.9921 11.0102L4.48669 12.5043C4.82852 12.846 4.82852 13.4001 4.48669 13.7418C4.14487 14.0835 3.59066 14.0835 3.24884 13.7418L0.26003 10.754C0.0958806 10.5899 0.0036621 10.3673 0.00366211 10.1352C0.00366212 9.90318 0.0958806 9.68062 0.26003 9.51652L3.24884 6.52872C3.59066 6.18701 4.14487 6.18701 4.48669 6.52872C4.82851 6.87043 4.82851 7.42445 4.48669 7.76616L2.9921 9.26024L8.64986 9.26024C9.13327 9.26024 9.52515 9.65199 9.52515 10.1352Z"
    fill="currentColor"
  />
</svg>

`,rh=C`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path 
    fill="currentColor"
    fill-rule="evenodd" 
    clip-rule="evenodd" 
    d="M8.3071 0.292893C8.69763 0.683417 8.69763 1.31658 8.3071 1.70711L6.41421 3.6H11.3404C13.8368 3.6 16.0533 5.1975 16.8427 7.56588L16.9487 7.88377C17.1233 8.40772 16.8402 8.97404 16.3162 9.14868C15.7923 9.32333 15.226 9.04017 15.0513 8.51623L14.9453 8.19834C14.4281 6.64664 12.976 5.6 11.3404 5.6H6.41421L8.3071 7.49289C8.69763 7.88342 8.69763 8.51658 8.3071 8.90711C7.91658 9.29763 7.28341 9.29763 6.89289 8.90711L3.29289 5.30711C2.90236 4.91658 2.90236 4.28342 3.29289 3.89289L6.89289 0.292893C7.28341 -0.0976311 7.91658 -0.0976311 8.3071 0.292893ZM3.68377 10.8513C4.20771 10.6767 4.77403 10.9598 4.94868 11.4838L5.05464 11.8017C5.57188 13.3534 7.024 14.4 8.65964 14.4L13.5858 14.4L11.6929 12.5071C11.3024 12.1166 11.3024 11.4834 11.6929 11.0929C12.0834 10.7024 12.7166 10.7024 13.1071 11.0929L16.7071 14.6929C17.0976 15.0834 17.0976 15.7166 16.7071 16.1071L13.1071 19.7071C12.7166 20.0976 12.0834 20.0976 11.6929 19.7071C11.3024 19.3166 11.3024 18.6834 11.6929 18.2929L13.5858 16.4L8.65964 16.4C6.16314 16.4 3.94674 14.8025 3.15728 12.4341L3.05131 12.1162C2.87667 11.5923 3.15983 11.026 3.68377 10.8513Z" 
  />
</svg>`,oh=C`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.48 2.18a1 1 0 0 1 1.41 0l2.68 2.68a1 1 0 1 1-1.41 1.42l-.98-.98v4.56a1 1 0 0 1-2 0V5.3l-.97.98A1 1 0 0 1 .79 4.86l2.69-2.68Zm6.34 2.93a1 1 0 0 1 1 1v4.56l.97-.98a1 1 0 1 1 1.42 1.42l-2.69 2.68a1 1 0 0 1-1.41 0l-2.68-2.68a1 1 0 0 1 1.41-1.42l.98.98V6.1a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,ah=C`<svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <g clip-path="url(#a)">
    <path fill="url(#b)" d="M0 0h32v32H0z"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.034 15.252c4.975-2.167 8.293-3.596 9.953-4.287 4.74-1.971 5.725-2.314 6.366-2.325.142-.002.457.033.662.198.172.14.22.33.243.463.022.132.05.435.028.671-.257 2.7-1.368 9.248-1.933 12.27-.24 1.28-.71 1.708-1.167 1.75-.99.091-1.743-.655-2.703-1.284-1.502-.985-2.351-1.598-3.81-2.558-1.684-1.11-.592-1.721.368-2.718.252-.261 4.619-4.233 4.703-4.594.01-.045.02-.213-.08-.301-.1-.09-.246-.059-.353-.035-.15.034-2.55 1.62-7.198 4.758-.682.468-1.298.696-1.851.684-.61-.013-1.782-.344-2.653-.628-1.069-.347-1.918-.53-1.845-1.12.039-.308.462-.623 1.27-.944Z" fill="#fff"/>
  </g>
  <path d="M.5 16C.5 7.44 7.44.5 16 .5 24.56.5 31.5 7.44 31.5 16c0 8.56-6.94 15.5-15.5 15.5C7.44 31.5.5 24.56.5 16Z" stroke="#141414" stroke-opacity=".05"/>
  <defs>
    <linearGradient id="b" x1="1600" y1="0" x2="1600" y2="3176.27" gradientUnits="userSpaceOnUse">
      <stop stop-color="#2AABEE"/>
      <stop offset="1" stop-color="#229ED9"/>
    </linearGradient>
    <clipPath id="a">
      <path d="M0 16C0 7.163 7.163 0 16 0s16 7.163 16 16-7.163 16-16 16S0 24.837 0 16Z" fill="#fff"/>
    </clipPath>
  </defs>
</svg>`,sh=C`<svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M7 3.71875C6.0335 3.71875 5.25 2.93525 5.25 1.96875C5.25 1.00225 6.0335 0.21875 7 0.21875C7.9665 0.21875 8.75 1.00225 8.75 1.96875C8.75 2.93525 7.9665 3.71875 7 3.71875Z" fill="#949E9E"/>
  <path d="M7 8.96875C6.0335 8.96875 5.25 8.18525 5.25 7.21875C5.25 6.25225 6.0335 5.46875 7 5.46875C7.9665 5.46875 8.75 6.25225 8.75 7.21875C8.75 8.18525 7.9665 8.96875 7 8.96875Z" fill="#949E9E"/>
  <path d="M5.25 12.4688C5.25 13.4352 6.0335 14.2187 7 14.2187C7.9665 14.2187 8.75 13.4352 8.75 12.4688C8.75 11.5023 7.9665 10.7188 7 10.7188C6.0335 10.7188 5.25 11.5023 5.25 12.4688Z" fill="#949E9E"/>
</svg>`,lh=C`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5A3E85" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M18.22 25.7 20 23.91h3.34l2.1-2.1v-6.68H15.4v8.78h2.82v1.77Zm3.87-8.16h1.25v3.66H22.1v-3.66Zm-3.34 0H20v3.66h-1.25v-3.66ZM20 7.9a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm6.69 14.56-3.66 3.66h-2.72l-1.77 1.78h-1.88V26.1H13.3v-9.82l.94-2.4H26.7v8.56Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,ch=C`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="m14.36 4.74.01.42c0 4.34-3.3 9.34-9.34 9.34A9.3 9.3 0 0 1 0 13.03a6.6 6.6 0 0 0 4.86-1.36 3.29 3.29 0 0 1-3.07-2.28c.5.1 1 .07 1.48-.06A3.28 3.28 0 0 1 .64 6.11v-.04c.46.26.97.4 1.49.41A3.29 3.29 0 0 1 1.11 2.1a9.32 9.32 0 0 0 6.77 3.43 3.28 3.28 0 0 1 5.6-3 6.59 6.59 0 0 0 2.08-.8 3.3 3.3 0 0 1-1.45 1.82A6.53 6.53 0 0 0 16 3.04c-.44.66-1 1.23-1.64 1.7Z"
  />
</svg>`,uh=C`<svg fill="none" viewBox="0 0 28 28">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M18.1 4.76c-.42-.73-1.33-1.01-2.09-.66l-1.42.66c-.37.18-.8.18-1.18 0l-1.4-.65a1.63 1.63 0 0 0-2.1.66l-.84 1.45c-.2.34-.53.59-.92.67l-1.7.35c-.83.17-1.39.94-1.3 1.78l.19 1.56c.04.39-.08.78-.33 1.07l-1.12 1.3c-.52.6-.52 1.5 0 2.11L5 16.38c.25.3.37.68.33 1.06l-.18 1.57c-.1.83.46 1.6 1.28 1.78l1.7.35c.4.08.73.32.93.66l.84 1.43a1.63 1.63 0 0 0 2.09.66l1.41-.66c.37-.17.8-.17 1.18 0l1.43.67c.76.35 1.66.07 2.08-.65l.86-1.45c.2-.34.54-.58.92-.66l1.68-.35A1.63 1.63 0 0 0 22.84 19l-.18-1.57a1.4 1.4 0 0 1 .33-1.06l1.12-1.32c.52-.6.52-1.5 0-2.11l-1.12-1.3a1.4 1.4 0 0 1-.33-1.07l.18-1.57c.1-.83-.46-1.6-1.28-1.77l-1.68-.35a1.4 1.4 0 0 1-.92-.66l-.86-1.47Zm-3.27-3.2a4.43 4.43 0 0 1 5.69 1.78l.54.93 1.07.22a4.43 4.43 0 0 1 3.5 4.84l-.11.96.7.83a4.43 4.43 0 0 1 .02 5.76l-.72.85.1.96a4.43 4.43 0 0 1-3.5 4.84l-1.06.22-.54.92a4.43 4.43 0 0 1-5.68 1.77l-.84-.4-.82.39a4.43 4.43 0 0 1-5.7-1.79l-.51-.89-1.09-.22a4.43 4.43 0 0 1-3.5-4.84l.1-.96-.72-.85a4.43 4.43 0 0 1 .01-5.76l.71-.83-.1-.95a4.43 4.43 0 0 1 3.5-4.84l1.08-.23.53-.9a4.43 4.43 0 0 1 5.7-1.8l.81.38.83-.39ZM18.2 9.4c.65.42.84 1.28.42 1.93l-4.4 6.87a1.4 1.4 0 0 1-2.26.14L9.5 15.39a1.4 1.4 0 0 1 2.15-1.8l1.23 1.48 3.38-5.26a1.4 1.4 0 0 1 1.93-.42Z"
    clip-rule="evenodd"
  />
</svg>`,dh=C`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="m4.1 12.43-.45-.78-.93-.2a1.65 1.65 0 0 1-1.31-1.8l.1-.86-.61-.71a1.65 1.65 0 0 1 0-2.16l.6-.7-.09-.85c-.1-.86.47-1.64 1.3-1.81l.94-.2.45-.78A1.65 1.65 0 0 1 6.23.9l.77.36.78-.36c.77-.36 1.69-.07 2.12.66l.47.8.91.2c.84.17 1.4.95 1.31 1.8l-.1.86.6.7c.54.62.54 1.54.01 2.16l-.6.71.09.86c.1.85-.47 1.63-1.3 1.8l-.92.2-.47.79a1.65 1.65 0 0 1-2.12.66L7 12.74l-.77.36c-.78.35-1.7.07-2.13-.67Zm5.74-6.9a1 1 0 1 0-1.68-1.07L6.32 7.3l-.55-.66a1 1 0 0 0-1.54 1.28l1.43 1.71a1 1 0 0 0 1.61-.1l2.57-4Z"
    clip-rule="evenodd"
  />
</svg>`,ph=C`
  <svg fill="none" viewBox="0 0 48 44">
    <path
      style="fill: var(--wui-color-bg-300);"
      d="M4.56 8.64c-1.23 1.68-1.23 4.08-1.23 8.88v8.96c0 4.8 0 7.2 1.23 8.88.39.55.87 1.02 1.41 1.42C7.65 38 10.05 38 14.85 38h14.3c4.8 0 7.2 0 8.88-1.22a6.4 6.4 0 0 0 1.41-1.42c.83-1.14 1.1-2.6 1.19-4.92a6.4 6.4 0 0 0 5.16-4.65c.21-.81.21-1.8.21-3.79 0-1.98 0-2.98-.22-3.79a6.4 6.4 0 0 0-5.15-4.65c-.1-2.32-.36-3.78-1.19-4.92a6.4 6.4 0 0 0-1.41-1.42C36.35 6 33.95 6 29.15 6h-14.3c-4.8 0-7.2 0-8.88 1.22a6.4 6.4 0 0 0-1.41 1.42Z"
    />
    <path
      style="fill: var(--wui-color-fg-200);"
      fill-rule="evenodd"
      d="M2.27 11.33a6.4 6.4 0 0 1 6.4-6.4h26.66a6.4 6.4 0 0 1 6.4 6.4v1.7a6.4 6.4 0 0 1 5.34 6.3v5.34a6.4 6.4 0 0 1-5.34 6.3v1.7a6.4 6.4 0 0 1-6.4 6.4H8.67a6.4 6.4 0 0 1-6.4-6.4V11.33ZM39.6 31.07h-6.93a9.07 9.07 0 1 1 0-18.14h6.93v-1.6a4.27 4.27 0 0 0-4.27-4.26H8.67a4.27 4.27 0 0 0-4.27 4.26v21.34a4.27 4.27 0 0 0 4.27 4.26h26.66a4.27 4.27 0 0 0 4.27-4.26v-1.6Zm-6.93-16a6.93 6.93 0 0 0 0 13.86h8a4.27 4.27 0 0 0 4.26-4.26v-5.34a4.27 4.27 0 0 0-4.26-4.26h-8Z"
      clip-rule="evenodd"
    />
  </svg>
`,hh=C`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 5.5c0-1.8 1.46-3.25 3.25-3.25H14.5c1.8 0 3.25 1.46 3.25 3.25v.28A3.25 3.25 0 0 1 20 8.88v2.24c0 1.45-.94 2.68-2.25 3.1v.28c0 1.8-1.46 3.25-3.25 3.25H3.25A3.25 3.25 0 0 1 0 14.5v-9Zm15.75 8.88h-2.38a4.38 4.38 0 0 1 0-8.76h2.38V5.5c0-.69-.56-1.25-1.25-1.25H3.25C2.56 4.25 2 4.81 2 5.5v9c0 .69.56 1.25 1.25 1.25H14.5c.69 0 1.25-.56 1.25-1.25v-.13Zm-2.38-6.76a2.37 2.37 0 1 0 0 4.75h3.38c.69 0 1.25-.55 1.25-1.24V8.87c0-.69-.56-1.24-1.25-1.24h-3.38Z"
    clip-rule="evenodd"
  />
</svg>`,fh=C`<svg fill="none" viewBox="0 0 96 67">
  <path
    fill="currentColor"
    d="M25.32 18.8a32.56 32.56 0 0 1 45.36 0l1.5 1.47c.63.62.63 1.61 0 2.22l-5.15 5.05c-.31.3-.82.3-1.14 0l-2.07-2.03a22.71 22.71 0 0 0-31.64 0l-2.22 2.18c-.31.3-.82.3-1.14 0l-5.15-5.05a1.55 1.55 0 0 1 0-2.22l1.65-1.62Zm56.02 10.44 4.59 4.5c.63.6.63 1.6 0 2.21l-20.7 20.26c-.62.61-1.63.61-2.26 0L48.28 41.83a.4.4 0 0 0-.56 0L33.03 56.21c-.63.61-1.64.61-2.27 0L10.07 35.95a1.55 1.55 0 0 1 0-2.22l4.59-4.5a1.63 1.63 0 0 1 2.27 0L31.6 43.63a.4.4 0 0 0 .57 0l14.69-14.38a1.63 1.63 0 0 1 2.26 0l14.69 14.38a.4.4 0 0 0 .57 0l14.68-14.38a1.63 1.63 0 0 1 2.27 0Z"
  />
  <path
    stroke="#000"
    stroke-opacity=".1"
    d="M25.67 19.15a32.06 32.06 0 0 1 44.66 0l1.5 1.48c.43.42.43 1.09 0 1.5l-5.15 5.05a.31.31 0 0 1-.44 0l-2.07-2.03a23.21 23.21 0 0 0-32.34 0l-2.22 2.18a.31.31 0 0 1-.44 0l-5.15-5.05a1.05 1.05 0 0 1 0-1.5l1.65-1.63ZM81 29.6l4.6 4.5c.42.41.42 1.09 0 1.5l-20.7 20.26c-.43.43-1.14.43-1.57 0L48.63 41.47a.9.9 0 0 0-1.26 0L32.68 55.85c-.43.43-1.14.43-1.57 0L10.42 35.6a1.05 1.05 0 0 1 0-1.5l4.59-4.5a1.13 1.13 0 0 1 1.57 0l14.68 14.38a.9.9 0 0 0 1.27 0l-.35-.35.35.35L47.22 29.6a1.13 1.13 0 0 1 1.56 0l14.7 14.38a.9.9 0 0 0 1.26 0L79.42 29.6a1.13 1.13 0 0 1 1.57 0Z"
  />
</svg>`,wh=C`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M11 6.67a1 1 0 1 0-2 0v2.66a1 1 0 0 0 2 0V6.67ZM10 14.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 1a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-7 9a7 7 0 1 1 14 0 7 7 0 0 1-14 0Z"
    clip-rule="evenodd"
  />
</svg>`,gh=C`<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.00177 1.78569C3.8179 1.78569 2.85819 2.74508 2.85819 3.92855C2.85819 4.52287 3.09928 5.05956 3.49077 5.4485L3.5005 5.45817C3.64381 5.60054 3.76515 5.72108 3.85631 5.81845C3.93747 5.90512 4.05255 6.03218 4.12889 6.1805C4.16999 6.26034 4.19 6.30843 4.21768 6.39385C4.22145 6.40546 4.22499 6.41703 4.22833 6.42855H5.77521C5.77854 6.41703 5.78208 6.40547 5.78585 6.39385C5.81353 6.30843 5.83354 6.26034 5.87464 6.1805C5.95098 6.03218 6.06606 5.90512 6.14722 5.81845C6.23839 5.72108 6.35973 5.60053 6.50304 5.45816L6.51276 5.4485C6.90425 5.05956 7.14534 4.52287 7.14534 3.92855C7.14534 2.74508 6.18563 1.78569 5.00177 1.78569ZM5.71629 7.85712H4.28724C4.28724 8.21403 4.28876 8.40985 4.30703 8.54571C4.30727 8.54748 4.30751 8.54921 4.30774 8.55091C4.30944 8.55115 4.31118 8.55138 4.31295 8.55162C4.44884 8.56989 4.64474 8.5714 5.00177 8.5714C5.3588 8.5714 5.55469 8.56989 5.69059 8.55162C5.69236 8.55138 5.69409 8.55115 5.69579 8.55091C5.69603 8.54921 5.69627 8.54748 5.6965 8.54571C5.71477 8.40985 5.71629 8.21403 5.71629 7.85712ZM2.85819 7.14283C2.85819 6.9948 2.85796 6.91114 2.8548 6.85032C2.85461 6.84656 2.85441 6.84309 2.85421 6.83988C2.84393 6.8282 2.83047 6.81334 2.81301 6.79469C2.74172 6.71856 2.63908 6.61643 2.48342 6.46178C1.83307 5.81566 1.42914 4.91859 1.42914 3.92855C1.42914 1.9561 3.02866 0.357117 5.00177 0.357117C6.97487 0.357117 8.57439 1.9561 8.57439 3.92855C8.57439 4.91859 8.17047 5.81566 7.52012 6.46178C7.36445 6.61643 7.26182 6.71856 7.19053 6.79469C7.17306 6.81334 7.1596 6.8282 7.14932 6.83988C7.14912 6.84309 7.14892 6.84656 7.14873 6.85032C7.14557 6.91114 7.14534 6.9948 7.14534 7.14283V7.85712C7.14534 7.87009 7.14535 7.88304 7.14535 7.89598C7.14541 8.19889 7.14547 8.49326 7.11281 8.73606C7.076 9.00978 6.98631 9.32212 6.72678 9.58156C6.46726 9.841 6.15481 9.93065 5.881 9.96745C5.63813 10.0001 5.34365 10 5.04064 9.99998C5.0277 9.99998 5.01474 9.99998 5.00177 9.99998C4.98879 9.99998 4.97583 9.99998 4.96289 9.99998C4.65988 10 4.36541 10.0001 4.12253 9.96745C3.84872 9.93065 3.53628 9.841 3.27675 9.58156C3.01722 9.32212 2.92753 9.00978 2.89072 8.73606C2.85807 8.49326 2.85812 8.19889 2.85818 7.89598C2.85819 7.88304 2.85819 7.87008 2.85819 7.85712V7.14283ZM7.1243 6.86977C7.12366 6.87069 7.1233 6.87116 7.12327 6.87119C7.12323 6.87123 7.12356 6.87076 7.1243 6.86977ZM2.88027 6.8712C2.88025 6.87119 2.87988 6.8707 2.87921 6.86975C2.87995 6.87072 2.88028 6.8712 2.88027 6.8712Z" fill="#949E9E"/>
</svg>`,mh=C`<svg
 xmlns="http://www.w3.org/2000/svg"
 width="28"
 height="28"
 viewBox="0 0 28 28"
 fill="none">
  <path
    fill="#949E9E"
    fill-rule="evenodd"
    d="M7.974 2.975h12.052c1.248 0 2.296 0 3.143.092.89.096 1.723.307 2.461.844a4.9 4.9 0 0 1 1.084 1.084c.537.738.748 1.57.844 2.461.092.847.092 1.895.092 3.143v6.802c0 1.248 0 2.296-.092 3.143-.096.89-.307 1.723-.844 2.461a4.9 4.9 0 0 1-1.084 1.084c-.738.537-1.57.748-2.461.844-.847.092-1.895.092-3.143.092H7.974c-1.247 0-2.296 0-3.143-.092-.89-.096-1.723-.307-2.461-.844a4.901 4.901 0 0 1-1.084-1.084c-.537-.738-.748-1.571-.844-2.461C.35 19.697.35 18.649.35 17.4v-6.802c0-1.248 0-2.296.092-3.143.096-.89.307-1.723.844-2.461A4.9 4.9 0 0 1 2.37 3.91c.738-.537 1.571-.748 2.461-.844.847-.092 1.895-.092 3.143-.092ZM5.133 5.85c-.652.071-.936.194-1.117.326a2.1 2.1 0 0 0-.465.465c-.132.181-.255.465-.325 1.117-.074.678-.076 1.573-.076 2.917v6.65c0 1.344.002 2.239.076 2.917.07.652.193.936.325 1.117a2.1 2.1 0 0 0 .465.465c.181.132.465.255 1.117.326.678.073 1.574.075 2.917.075h11.9c1.344 0 2.239-.002 2.917-.075.652-.071.936-.194 1.117-.326.179-.13.335-.286.465-.465.132-.181.255-.465.326-1.117.073-.678.075-1.573.075-2.917v-6.65c0-1.344-.002-2.239-.075-2.917-.071-.652-.194-.936-.326-1.117a2.1 2.1 0 0 0-.465-.465c-.181-.132-.465-.255-1.117-.326-.678-.073-1.573-.075-2.917-.075H8.05c-1.343 0-2.239.002-2.917.075Zm.467 7.275a3.15 3.15 0 1 1 6.3 0 3.15 3.15 0 0 1-6.3 0Zm8.75-1.75a1.4 1.4 0 0 1 1.4-1.4h3.5a1.4 1.4 0 0 1 0 2.8h-3.5a1.4 1.4 0 0 1-1.4-1.4Zm0 5.25a1.4 1.4 0 0 1 1.4-1.4H21a1.4 1.4 0 1 1 0 2.8h-5.25a1.4 1.4 0 0 1-1.4-1.4Z"
    clip-rule="evenodd"/>
</svg>`,uc=C`<svg fill="none" viewBox="0 0 41 40">
  <g clip-path="url(#a)">
    <path fill="#000" d="M.8 0h40v40H.8z" />
    <path
      fill="#fff"
      d="m22.63 18.46 7.14-8.3h-1.69l-6.2 7.2-4.96-7.2H11.2l7.5 10.9-7.5 8.71h1.7l6.55-7.61 5.23 7.61h5.72l-7.77-11.31Zm-9.13-7.03h2.6l11.98 17.13h-2.6L13.5 11.43Z"
    />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M.8 20a20 20 0 1 1 40 0 20 20 0 0 1-40 0Z" /></clipPath>
  </defs>
</svg>`;var Ya=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};const vh={add:i1,allWallets:n1,arrowBottomCircle:r1,appStore:o1,apple:a1,arrowBottom:s1,arrowLeft:l1,arrowRight:c1,arrowTop:u1,bank:d1,browser:p1,card:h1,checkmark:w1,checkmarkBold:f1,chevronBottom:g1,chevronLeft:m1,chevronRight:v1,chevronTop:b1,chromeStore:x1,clock:y1,close:C1,compass:T1,coinPlaceholder:_1,copy:k1,cursor:S1,cursorTransparent:A1,desktop:E1,disconnect:$1,discord:R1,etherscan:I1,extension:O1,externalLink:N1,facebook:P1,farcaster:D1,filters:U1,github:W1,google:M1,helpCircle:j1,image:L1,id:mh,infoCircle:B1,lightbulb:gh,mail:z1,mobile:V1,more:H1,networkPlaceholder:F1,nftPlaceholder:Z1,off:G1,playStore:q1,plus:Y1,qrCode:K1,recycleHorizontal:X1,refresh:Q1,search:J1,send:eh,swapHorizontal:th,swapHorizontalMedium:nh,swapHorizontalBold:ih,swapHorizontalRoundedBold:rh,swapVertical:oh,telegram:ah,threeDots:sh,twitch:lh,twitter:uc,twitterIcon:ch,verify:uh,verifyFilled:dh,wallet:hh,walletConnect:fh,walletPlaceholder:ph,warningCircle:wh,x:uc};let dr=class extends w{constructor(){super(...arguments),this.size="md",this.name="copy",this.color="fg-300"}render(){return this.style.cssText=`
      --local-color: ${`var(--wui-color-${this.color});`}
      --local-width: ${`var(--wui-icon-size-${this.size});`}
    `,l`${vh[this.name]}`}};dr.styles=[O,dl,t1];Ya([c()],dr.prototype,"size",void 0);Ya([c()],dr.prototype,"name",void 0);Ya([c()],dr.prototype,"color",void 0);dr=Ya([f("wui-icon")],dr);const bh=b`
  :host {
    display: block;
    width: var(--local-width);
    height: var(--local-height);
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: inherit;
  }
`;var Ka=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let pr=class extends w{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image",this.size=void 0}render(){return this.style.cssText=`
      --local-width: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};
      --local-height: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};
      `,l`<img src=${this.src} alt=${this.alt} @error=${this.handleImageError} />`}handleImageError(){this.dispatchEvent(new CustomEvent("onLoadError",{bubbles:!0,composed:!0}))}};pr.styles=[O,dl,bh];Ka([c()],pr.prototype,"src",void 0);Ka([c()],pr.prototype,"alt",void 0);Ka([c()],pr.prototype,"size",void 0);pr=Ka([f("wui-image")],pr);const xh=b`
  :host {
    display: block;
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
  }

  svg {
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
    fill: none;
    stroke: transparent;
    stroke-linecap: round;
  }

  use {
    stroke: var(--wui-color-accent-100);
    stroke-width: 2px;
    stroke-dasharray: 54, 118;
    stroke-dashoffset: 172;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var yh=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Ps=class extends w{render(){return l`
      <svg viewBox="0 0 54 59">
        <path
          id="wui-loader-path"
          d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z"
        />
        <use xlink:href="#wui-loader-path"></use>
      </svg>
    `}};Ps.styles=[O,xh];Ps=yh([f("wui-loading-hexagon")],Ps);const Ch=b`
  :host {
    display: flex;
  }

  :host([data-size='sm']) > svg {
    width: 12px;
    height: 12px;
  }

  :host([data-size='md']) > svg {
    width: 16px;
    height: 16px;
  }

  :host([data-size='lg']) > svg {
    width: 24px;
    height: 24px;
  }

  :host([data-size='xl']) > svg {
    width: 32px;
    height: 32px;
  }

  svg {
    animation: rotate 2s linear infinite;
  }

  circle {
    fill: none;
    stroke: var(--local-color);
    stroke-width: 4px;
    stroke-dasharray: 1, 124;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  :host([data-size='md']) > svg > circle {
    stroke-width: 6px;
  }

  :host([data-size='sm']) > svg > circle {
    stroke-width: 8px;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 124;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 90, 124;
      stroke-dashoffset: -35;
    }

    100% {
      stroke-dashoffset: -125;
    }
  }
`;var pl=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let ao=class extends w{constructor(){super(...arguments),this.color="accent-100",this.size="lg"}render(){return this.style.cssText=`--local-color: ${this.color==="inherit"?"inherit":`var(--wui-color-${this.color})`}`,this.dataset.size=this.size,l`<svg viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>`}};ao.styles=[O,Ch];pl([c()],ao.prototype,"color",void 0);pl([c()],ao.prototype,"size",void 0);ao=pl([f("wui-loading-spinner")],ao);const _h=b`
  :host {
    display: block;
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  svg {
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  rect {
    fill: none;
    stroke: var(--wui-color-accent-100);
    stroke-width: 4px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var cu=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let ma=class extends w{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){const e=this.radius>50?50:this.radius,r=36-e,o=116+r,n=245+r,a=360+r*1.75;return l`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${e}
          stroke-dasharray="${o} ${n}"
          stroke-dashoffset=${a}
        />
      </svg>
    `}};ma.styles=[O,_h];cu([c({type:Number})],ma.prototype,"radius",void 0);ma=cu([f("wui-loading-thumbnail")],ma);const Th=b`
  :host {
    display: block;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-200) 5%,
      var(--wui-color-bg-200) 48%,
      var(--wui-color-bg-300) 55%,
      var(--wui-color-bg-300) 60%,
      var(--wui-color-bg-300) calc(60% + 10px),
      var(--wui-color-bg-200) calc(60% + 12px),
      var(--wui-color-bg-200) 100%
    );
    background-size: 250%;
    animation: shimmer 3s linear infinite reverse;
  }

  :host([variant='light']) {
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-150) 5%,
      var(--wui-color-bg-150) 48%,
      var(--wui-color-bg-200) 55%,
      var(--wui-color-bg-200) 60%,
      var(--wui-color-bg-200) calc(60% + 10px),
      var(--wui-color-bg-150) calc(60% + 12px),
      var(--wui-color-bg-150) 100%
    );
    background-size: 250%;
  }

  @keyframes shimmer {
    from {
      background-position: -250% 0;
    }
    to {
      background-position: 250% 0;
    }
  }
`;var Oo=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let yn=class extends w{constructor(){super(...arguments),this.width="",this.height="",this.borderRadius="m",this.variant="default"}render(){return this.style.cssText=`
      width: ${this.width};
      height: ${this.height};
      border-radius: ${`clamp(0px,var(--wui-border-radius-${this.borderRadius}), 40px)`};
    `,l`<slot></slot>`}};yn.styles=[Th];Oo([c()],yn.prototype,"width",void 0);Oo([c()],yn.prototype,"height",void 0);Oo([c()],yn.prototype,"borderRadius",void 0);Oo([c()],yn.prototype,"variant",void 0);yn=Oo([f("wui-shimmer")],yn);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const uu={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},du=i=>(...e)=>({_$litDirective$:i,values:e});class pu{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const hu=du(class extends pu{constructor(i){var e;if(super(i),i.type!==uu.ATTRIBUTE||i.name!=="class"||((e=i.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(i){return" "+Object.keys(i).filter(e=>i[e]).join(" ")+" "}update(i,[e]){var r,o;if(this.st===void 0){this.st=new Set,i.strings!==void 0&&(this.nt=new Set(i.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in e)e[n]&&!((r=this.nt)!=null&&r.has(n))&&this.st.add(n);return this.render(e)}const t=i.element.classList;for(const n of this.st)n in e||(t.remove(n),this.st.delete(n));for(const n in e){const a=!!e[n];a===this.st.has(n)||(o=this.nt)!=null&&o.has(n)||(a?(t.add(n),this.st.add(n)):(t.remove(n),this.st.delete(n)))}return xn}}),kh=b`
  :host {
    display: inline-flex !important;
  }

  slot {
    width: 100%;
    display: inline-block;
    font-style: normal;
    font-family: var(--wui-font-family);
    font-feature-settings:
      'tnum' on,
      'lnum' on,
      'case' on;
    line-height: 130%;
    font-weight: var(--wui-font-weight-regular);
    overflow: inherit;
    text-overflow: inherit;
    text-align: var(--local-align);
    color: var(--local-color);
  }

  .wui-line-clamp-1 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }

  .wui-line-clamp-2 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  .wui-font-medium-400 {
    font-size: var(--wui-font-size-medium);
    font-weight: var(--wui-font-weight-light);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-medium-600 {
    font-size: var(--wui-font-size-medium);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-title-600 {
    font-size: var(--wui-font-size-title);
    letter-spacing: var(--wui-letter-spacing-title);
  }

  .wui-font-title-6-600 {
    font-size: var(--wui-font-size-title-6);
    letter-spacing: var(--wui-letter-spacing-title-6);
  }

  .wui-font-mini-700 {
    font-size: var(--wui-font-size-mini);
    letter-spacing: var(--wui-letter-spacing-mini);
    text-transform: uppercase;
  }

  .wui-font-large-500,
  .wui-font-large-600,
  .wui-font-large-700 {
    font-size: var(--wui-font-size-large);
    letter-spacing: var(--wui-letter-spacing-large);
  }

  .wui-font-2xl-500,
  .wui-font-2xl-600,
  .wui-font-2xl-700 {
    font-size: var(--wui-font-size-2xl);
    letter-spacing: var(--wui-letter-spacing-2xl);
  }

  .wui-font-paragraph-400,
  .wui-font-paragraph-500,
  .wui-font-paragraph-600,
  .wui-font-paragraph-700 {
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
  }

  .wui-font-small-400,
  .wui-font-small-500,
  .wui-font-small-600 {
    font-size: var(--wui-font-size-small);
    letter-spacing: var(--wui-letter-spacing-small);
  }

  .wui-font-tiny-400,
  .wui-font-tiny-500,
  .wui-font-tiny-600 {
    font-size: var(--wui-font-size-tiny);
    letter-spacing: var(--wui-letter-spacing-tiny);
  }

  .wui-font-micro-700,
  .wui-font-micro-600 {
    font-size: var(--wui-font-size-micro);
    letter-spacing: var(--wui-letter-spacing-micro);
    text-transform: uppercase;
  }

  .wui-font-tiny-400,
  .wui-font-small-400,
  .wui-font-medium-400,
  .wui-font-paragraph-400 {
    font-weight: var(--wui-font-weight-light);
  }

  .wui-font-large-700,
  .wui-font-paragraph-700,
  .wui-font-micro-700,
  .wui-font-mini-700 {
    font-weight: var(--wui-font-weight-bold);
  }

  .wui-font-medium-600,
  .wui-font-medium-title-600,
  .wui-font-title-6-600,
  .wui-font-large-600,
  .wui-font-paragraph-600,
  .wui-font-small-600,
  .wui-font-tiny-600,
  .wui-font-micro-600 {
    font-weight: var(--wui-font-weight-medium);
  }

  :host([disabled]) {
    opacity: 0.4;
  }
`;var No=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Cn=class extends w{constructor(){super(...arguments),this.variant="paragraph-500",this.color="fg-300",this.align="left",this.lineClamp=void 0}render(){const e={[`wui-font-${this.variant}`]:!0,[`wui-color-${this.color}`]:!0,[`wui-line-clamp-${this.lineClamp}`]:!!this.lineClamp};return this.style.cssText=`
      --local-align: ${this.align};
      --local-color: var(--wui-color-${this.color});
    `,l`<slot class=${hu(e)}></slot>`}};Cn.styles=[O,kh];No([c()],Cn.prototype,"variant",void 0);No([c()],Cn.prototype,"color",void 0);No([c()],Cn.prototype,"align",void 0);No([c()],Cn.prototype,"lineClamp",void 0);Cn=No([f("wui-text")],Cn);const Sh=C`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="30" />
  <circle cx="30" cy="30" r="3" fill="#fff" />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m45.32 17.9-.88-.42.88.42.02-.05c.1-.2.21-.44.26-.7l-.82-.15.82.16a2 2 0 0 0-.24-1.4c-.13-.23-.32-.42-.47-.57a8.42 8.42 0 0 1-.04-.04l-.04-.04a2.9 2.9 0 0 0-.56-.47l-.51.86.5-.86a2 2 0 0 0-1.4-.24c-.26.05-.5.16-.69.26l-.05.02-15.05 7.25-.1.05c-1.14.55-1.85.89-2.46 1.37a7 7 0 0 0-1.13 1.14c-.5.6-.83 1.32-1.38 2.45l-.05.11-7.25 15.05-.02.05c-.1.2-.21.43-.26.69a2 2 0 0 0 .24 1.4l.85-.5-.85.5c.13.23.32.42.47.57l.04.04.04.04c.15.15.34.34.56.47a2 2 0 0 0 1.41.24l-.2-.98.2.98c.25-.05.5-.17.69-.26l.05-.02-.42-.87.42.87 15.05-7.25.1-.05c1.14-.55 1.85-.89 2.46-1.38a7 7 0 0 0 1.13-1.13 12.87 12.87 0 0 0 1.43-2.56l7.25-15.05Z"
  />
  <path
    fill="#1DC956"
    d="M33.38 32.72 30.7 29.3 15.86 44.14l.2.2a1 1 0 0 0 1.14.2l15.1-7.27a3 3 0 0 0 1.08-4.55Z"
  />
  <path
    fill="#86F999"
    d="m26.62 27.28 2.67 3.43 14.85-14.85-.2-.2a1 1 0 0 0-1.14-.2l-15.1 7.27a3 3 0 0 0-1.08 4.55Z"
  />
  <circle cx="30" cy="30" r="3" fill="#fff" transform="rotate(45 30 30)" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
</svg> `,Ah=C`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#clip0_7734_50402)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#EB8B47"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M19 52C24.5228 52 29 47.5228 29 42C29 36.4772 24.5228 32 19 32C13.4772 32 9 36.4772 9 42C9 47.5228 13.4772 52 19 52Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.8437 8.3264C42.4507 7.70891 41.5493 7.70891 41.1564 8.32641L28.978 27.4638C28.5544 28.1295 29.0326 29.0007 29.8217 29.0007H54.1783C54.9674 29.0007 55.4456 28.1295 55.022 27.4638L42.8437 8.3264Z"
      fill="white"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.3348 11.6456C42.659 11.7608 42.9061 12.1492 43.4005 12.926L50.7332 24.4488C51.2952 25.332 51.5763 25.7737 51.5254 26.1382C51.4915 26.3808 51.3698 26.6026 51.1833 26.7614C50.9031 27 50.3796 27 49.3327 27H34.6673C33.6204 27 33.0969 27 32.8167 26.7614C32.6302 26.6026 32.5085 26.3808 32.4746 26.1382C32.4237 25.7737 32.7048 25.332 33.2669 24.4488L40.5995 12.926C41.0939 12.1492 41.341 11.7608 41.6652 11.6456C41.8818 11.5687 42.1182 11.5687 42.3348 11.6456ZM35.0001 26.999C38.8661 26.999 42.0001 23.865 42.0001 19.999C42.0001 23.865 45.1341 26.999 49.0001 26.999H35.0001Z"
      fill="#FF974C"
    />
    <path
      d="M10.1061 9.35712C9.9973 9.67775 9.99867 10.0388 9.99978 10.3323C9.99989 10.3611 10 10.3893 10 10.4167V25.5833C10 25.6107 9.99989 25.6389 9.99978 25.6677C9.99867 25.9612 9.9973 26.3222 10.1061 26.6429C10.306 27.2317 10.7683 27.694 11.3571 27.8939C11.6777 28.0027 12.0388 28.0013 12.3323 28.0002C12.3611 28.0001 12.3893 28 12.4167 28H19C24.5228 28 29 23.5228 29 18C29 12.4772 24.5228 8 19 8H12.4167C12.3893 8 12.3611 7.99989 12.3323 7.99978C12.0388 7.99867 11.6778 7.9973 11.3571 8.10614C10.7683 8.306 10.306 8.76834 10.1061 9.35712Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="19" cy="18" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
    <circle cx="19" cy="42" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="clip0_7734_50402">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `,Eh=C`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#1DC956"
      d="M0 25.01c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02.11 15.65.11 24.9.11h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.13 60 15.76 60 25v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-3.45 1.97-8.08 1.97-17.33 1.97H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 49.1 0 44.46 0 35.21v-10.2Z"
    />
    <path
      fill="#2BEE6C"
      d="M16.1 60c-3.82-.18-6.4-.64-8.53-1.86a15 15 0 0 1-5.6-5.6C.55 50.06.16 46.97.04 41.98L4.2 40.6a4 4 0 0 0 2.48-2.39l4.65-12.4a2 2 0 0 1 2.5-1.2l2.53.84a2 2 0 0 0 2.43-1l2.96-5.94a2 2 0 0 1 3.7.32l3.78 12.58a2 2 0 0 0 3.03 1.09l3.34-2.23a2 2 0 0 0 .65-.7l5.3-9.72a2 2 0 0 1 1.42-1.01l4.14-.69a2 2 0 0 1 1.6.44l3.9 3.24a2 2 0 0 0 2.7-.12l4.62-4.63c.08 2.2.08 4.8.08 7.93v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-2.13 1.22-4.7 1.68-8.54 1.86H16.11Z"
    />
    <path
      fill="#fff"
      d="m.07 43.03-.05-2.1 3.85-1.28a3 3 0 0 0 1.86-1.79l4.66-12.4a3 3 0 0 1 3.75-1.8l2.53.84a1 1 0 0 0 1.21-.5l2.97-5.94a3 3 0 0 1 5.56.48l3.77 12.58a1 1 0 0 0 1.51.55l3.34-2.23a1 1 0 0 0 .33-.35l5.3-9.71a3 3 0 0 1 2.14-1.53l4.13-.69a3 3 0 0 1 2.41.66l3.9 3.24a1 1 0 0 0 1.34-.06l5.28-5.28c.05.85.08 1.75.1 2.73L56 22.41a3 3 0 0 1-4.04.19l-3.9-3.25a1 1 0 0 0-.8-.21l-4.13.69a1 1 0 0 0-.72.5l-5.3 9.72a3 3 0 0 1-.97 1.05l-3.34 2.23a3 3 0 0 1-4.53-1.63l-3.78-12.58a1 1 0 0 0-1.85-.16l-2.97 5.94a3 3 0 0 1-3.63 1.5l-2.53-.84a1 1 0 0 0-1.25.6l-4.65 12.4a5 5 0 0 1-3.1 3L.07 43.02Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M49.5 19a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M45 .28v59.66l-2 .1V.19c.7.02 1.37.05 2 .1Z" />
    <path fill="#2BEE6C" d="M47.5 19a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
    <path
      stroke="#fff"
      stroke-opacity=".1"
      d="M.5 25.01c0-4.63 0-8.08.24-10.8.25-2.7.73-4.64 1.66-6.28a14.5 14.5 0 0 1 5.42-5.41C9.46 1.58 11.39 1.1 14.1.85A133 133 0 0 1 24.9.61h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.67a14.5 14.5 0 0 1 5.42 5.4c.93 1.65 1.41 3.58 1.66 6.3.24 2.71.24 6.16.24 10.79v10.2c0 4.64 0 8.08-.24 10.8-.25 2.7-.73 4.65-1.66 6.28a14.5 14.5 0 0 1-5.42 5.42c-1.63.93-3.57 1.41-6.28 1.66-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.66a14.5 14.5 0 0 1-5.42-5.42C1.47 50.66 1 48.72.74 46.01A133 133 0 0 1 .5 35.2v-10.2Z"
    />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg>`,$h=C`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="30" />
    <path
      fill="#E87DE8"
      d="M57.98.01v19.5a4.09 4.09 0 0 0-2.63 2.29L50.7 34.2a2 2 0 0 1-2.5 1.2l-2.53-.84a2 2 0 0 0-2.42 1l-2.97 5.94a2 2 0 0 1-3.7-.32L32.8 28.6a2 2 0 0 0-3.02-1.09l-3.35 2.23a2 2 0 0 0-.64.7l-5.3 9.72a2 2 0 0 1-1.43 1.01l-4.13.69a2 2 0 0 1-1.61-.44l-3.9-3.24a2 2 0 0 0-2.69.12L2.1 42.93.02 43V.01h57.96Z"
    />
    <path
      fill="#fff"
      d="m61.95 16.94.05 2.1-3.85 1.28a3 3 0 0 0-1.86 1.79l-4.65 12.4a3 3 0 0 1-3.76 1.8l-2.53-.84a1 1 0 0 0-1.2.5l-2.98 5.94a3 3 0 0 1-5.55-.48l-3.78-12.58a1 1 0 0 0-1.5-.55l-3.35 2.23a1 1 0 0 0-.32.35l-5.3 9.72a3 3 0 0 1-2.14 1.52l-4.14.69a3 3 0 0 1-2.41-.66l-3.9-3.24a1 1 0 0 0-1.34.06l-5.28 5.28c-.05-.84-.08-1.75-.1-2.73l3.97-3.96a3 3 0 0 1 4.04-.19l3.89 3.25a1 1 0 0 0 .8.21l4.14-.68a1 1 0 0 0 .71-.51l5.3-9.71a3 3 0 0 1 .97-1.06l3.34-2.23a3 3 0 0 1 4.54 1.63l3.77 12.58a1 1 0 0 0 1.86.16l2.96-5.93a3 3 0 0 1 3.64-1.5l2.52.83a1 1 0 0 0 1.25-.6l4.66-12.4a5 5 0 0 1 3.1-2.99l4.43-1.48Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M35.5 27a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M31 0v60h-2V0h2Z" />
    <path fill="#E87DE8" d="M33.5 27a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,Rh=C`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#987DE8" rx="30" />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="m15.48 28.37 11.97-19.3a3 3 0 0 1 5.1 0l11.97 19.3a6 6 0 0 1 .9 3.14v.03a6 6 0 0 1-1.16 3.56L33.23 50.2a4 4 0 0 1-6.46 0L15.73 35.1a6 6 0 0 1-1.15-3.54v-.03a6 6 0 0 1 .9-3.16Z"
      clip-rule="evenodd"
    />
    <path
      fill="#643CDD"
      d="M30.84 10.11a1 1 0 0 0-.84-.46V24.5l12.6 5.53a2 2 0 0 0-.28-1.4L30.84 10.11Z"
    />
    <path
      fill="#BDADEB"
      d="M30 9.65a1 1 0 0 0-.85.46L17.66 28.64a2 2 0 0 0-.26 1.39L30 24.5V9.65Z"
    />
    <path
      fill="#643CDD"
      d="M30 50.54a1 1 0 0 0 .8-.4l11.24-15.38c.3-.44-.2-1-.66-.73l-9.89 5.68a3 3 0 0 1-1.5.4v10.43Z"
    />
    <path
      fill="#BDADEB"
      d="m17.97 34.76 11.22 15.37c.2.28.5.41.8.41V40.11a3 3 0 0 1-1.49-.4l-9.88-5.68c-.47-.27-.97.3-.65.73Z"
    />
    <path
      fill="#401AB3"
      d="M42.6 30.03 30 24.5v13.14a3 3 0 0 0 1.5-.4l10.14-5.83a2 2 0 0 0 .95-1.38Z"
    />
    <path
      fill="#7C5AE2"
      d="M30 37.64V24.46l-12.6 5.57a2 2 0 0 0 .97 1.39l10.13 5.82a3 3 0 0 0 1.5.4Z"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,Ih=C`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="3" />
  <path
    fill="#1FAD7E"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 29.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 19.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#86F999"
    stroke="#fff"
    stroke-width="2"
    d="m46.69 21.06-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-6.32-3.51-.18-.1c-2.33-1.3-3.72-2.06-5.22-2.33a9 9 0 0 0-3.08 0c-1.5.27-2.9 1.04-5.22 2.33l-.17.1-6.33 3.51-.05.03c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45Z"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,Oh=C`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#C653C6" rx="3" />
  <path
    fill="#fff"
    d="M20.03 15.22C20 15.6 20 16.07 20 17v2.8c0 1.14 0 1.7-.2 2.12-.15.31-.3.5-.58.71-.37.28-1.06.42-2.43.7-.59.12-1.11.29-1.6.51a9 9 0 0 0-4.35 4.36C10 30 10 32.34 10 37c0 4.66 0 7 .84 8.8a9 9 0 0 0 4.36 4.36C17 51 19.34 51 24 51h12c4.66 0 7 0 8.8-.84a9 9 0 0 0 4.36-4.36C50 44 50 41.66 50 37c0-4.66 0-7-.84-8.8a9 9 0 0 0-4.36-4.36c-.48-.22-1-.39-1.6-.5-1.36-.29-2.05-.43-2.42-.7-.27-.22-.43-.4-.58-.72-.2-.42-.2-.98-.2-2.11V17c0-.93 0-1.4-.03-1.78a9 9 0 0 0-8.19-8.19C31.4 7 30.93 7 30 7s-1.4 0-1.78.03a9 9 0 0 0-8.19 8.19Z"
  />
  <path
    fill="#E87DE8"
    d="M22 17c0-.93 0-1.4.04-1.78a7 7 0 0 1 6.18-6.18C28.6 9 29.07 9 30 9s1.4 0 1.78.04a7 7 0 0 1 6.18 6.18c.04.39.04.85.04 1.78v4.5a1.5 1.5 0 0 1-3 0V17c0-.93 0-1.4-.08-1.78a4 4 0 0 0-3.14-3.14C31.39 12 30.93 12 30 12s-1.4 0-1.78.08a4 4 0 0 0-3.14 3.14c-.08.39-.08.85-.08 1.78v4.5a1.5 1.5 0 0 1-3 0V17Z"
  />
  <path
    fill="#E87DE8"
    fill-rule="evenodd"
    d="M12 36.62c0-4.32 0-6.48.92-8.09a7 7 0 0 1 2.61-2.61C17.14 25 19.3 25 23.62 25h6.86c.46 0 .7 0 .9.02 2.73.22 4.37 2.43 4.62 4.98.27-2.7 2.11-5 5.02-5A6.98 6.98 0 0 1 48 31.98v5.4c0 4.32 0 6.48-.92 8.09a7 7 0 0 1-2.61 2.61c-1.61.92-3.77.92-8.09.92h-5.86c-.46 0-.7 0-.9-.02-2.73-.22-4.37-2.43-4.62-4.98-.26 2.58-1.94 4.82-4.71 4.99l-.7.01c-.55 0-.82 0-1.05-.02a7 7 0 0 1-6.52-6.52c-.02-.23-.02-.5-.02-1.05v-4.79Zm21.24-.27a4 4 0 1 0-6.48 0 31.28 31.28 0 0 1 1.57 2.23c.17.4.17.81.17 1.24V42.5a1.5 1.5 0 0 0 3 0V39.82c0-.43 0-.85.17-1.24.09-.2.58-.87 1.57-2.23Z"
    clip-rule="evenodd"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,Nh=C`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#EB8B47"
      d="M0 24.9c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02 0 15.65 0 24.9 0h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.02 60 15.65 60 24.9v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6C48.98 60 44.35 60 35.1 60H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 48.98 0 44.35 0 35.1V24.9Z"
    />
    <path
      stroke="#062B2B"
      stroke-opacity=".1"
      d="M.5 24.9c0-4.64 0-8.08.24-10.8.25-2.7.73-4.65 1.66-6.28A14.5 14.5 0 0 1 7.82 2.4C9.46 1.47 11.39 1 14.1.74A133 133 0 0 1 24.9.5h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.66a14.5 14.5 0 0 1 5.42 5.42c.93 1.63 1.41 3.57 1.66 6.28.24 2.72.24 6.16.24 10.8v10.2c0 4.63 0 8.08-.24 10.8-.25 2.7-.73 4.64-1.66 6.28a14.5 14.5 0 0 1-5.42 5.41c-1.63.94-3.57 1.42-6.28 1.67-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.67a14.5 14.5 0 0 1-5.42-5.4C1.47 50.53 1 48.6.74 45.88A133 133 0 0 1 .5 35.1V24.9Z"
    />
    <path
      fill="#FF974C"
      stroke="#fff"
      stroke-width="2"
      d="M39.2 29.2a13 13 0 1 0-18.4 0l1.3 1.28a12.82 12.82 0 0 1 2.1 2.39 6 6 0 0 1 .6 1.47c.2.76.2 1.56.2 3.17v11.24c0 1.08 0 1.61.13 2.12a4 4 0 0 0 .41.98c.26.45.64.83 1.4 1.6l.3.29c.65.65.98.98 1.36 1.09.26.07.54.07.8 0 .38-.11.7-.44 1.36-1.1l3.48-3.47c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.47-.48c-.65-.65-.98-.98-1.09-1.36a1.5 1.5 0 0 1 0-.8c.1-.38.44-.7 1.1-1.36l.47-.48c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.48-.5c-.65-.64-.98-.97-1.08-1.35a1.5 1.5 0 0 1 0-.79c.1-.38.42-.7 1.06-1.36l5.46-5.55Z"
    />
    <circle cx="30" cy="17" r="4" fill="#EB8B47" stroke="#fff" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg> `,Ph=C`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#00ACE6" rx="30" />
    <circle cx="64" cy="39" r="50" fill="#1AC6FF" stroke="#fff" stroke-width="2" />
    <circle cx="78" cy="30" r="50" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="72" cy="15" r="35" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-17" r="45" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-5" r="50" stroke="#fff" stroke-width="2" />
    <circle cx="30" cy="45" r="4" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="39.5" cy="27.5" r="4" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="16" cy="24" r="4" fill="#19C6FF" stroke="#fff" stroke-width="2" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg>`,Dh=C`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="3" />
    <path
      fill="#E87DE8"
      stroke="#fff"
      stroke-width="2"
      d="M52.1 47.34c0-4.24-1.44-9.55-5.9-12.4a2.86 2.86 0 0 0-1.6-3.89v-.82c0-1.19-.52-2.26-1.35-3a4.74 4.74 0 0 0-2.4-6.26v-5.5a11.31 11.31 0 1 0-22.63 0v2.15a3.34 3.34 0 0 0-1.18 5.05 4.74 4.74 0 0 0-.68 6.44A5.22 5.22 0 0 0 14 35.92c-3.06 4.13-6.1 8.3-6.1 15.64 0 2.67.37 4.86.74 6.39a20.3 20.3 0 0 0 .73 2.39l.02.04v.01l.92-.39-.92.4.26.6h38.26l.3-.49-.87-.51.86.5.02-.01.03-.07a16.32 16.32 0 0 0 .57-1.05c.36-.72.85-1.74 1.33-2.96a25.51 25.51 0 0 0 1.94-9.07Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M26.5 29.5c-3-.5-5.5-3-5.5-7v-7c0-.47 0-.7.03-.9a3 3 0 0 1 2.58-2.57c.2-.03.42-.03.89-.03 2 0 2.5-2.5 2.5-2.5s0 2.5 2.5 2.5c1.4 0 2.1 0 2.65.23a3 3 0 0 1 1.62 1.62c.23.55.23 1.25.23 2.65v6c0 4-3 7-6.5 7 1.35.23 4 0 6.5-2v9.53C34 38.5 31.5 40 28 40s-6-1.5-6-2.97L24 34l2.5 1.5v-6ZM26 47h4.5c2.5 0 3 4 3 5.5h-3l-1-1.5H26v-4Zm-6.25 5.5H24V57h-8c0-1 1-4.5 3.75-4.5Z"
      clip-rule="evenodd"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="3" /></clipPath>
  </defs>
</svg> `,Uh=C`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#794CFF" rx="3" />
  <path
    fill="#987DE8"
    stroke="#fff"
    stroke-width="2"
    d="M33 22.5v-1H16v5H8.5V36H13v-5h3v7.5h17V31h1v7.5h17v-17H34v5h-1v-4Z"
  />
  <path fill="#fff" d="M37.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M42.5 25h5v10h-5z" />
  <path fill="#fff" d="M19.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M24.5 25h5v10h-5z" />
  <path fill="#fff" d="M12 30.5h4V37h-4v-6.5Z" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,Wh=C`<svg
  viewBox="0 0 60 60"
  fill="none"
>
  <g clip-path="url(#1)">
    <rect width="60" height="60" rx="30" fill="#00ACE6" />
    <path
      d="M59 73C59 89.0163 46.0163 102 30 102C13.9837 102 1 89.0163 1 73C1 56.9837 12 44 30 44C48 44 59 56.9837 59 73Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M18.6904 19.9015C19.6264 15.3286 23.3466 11.8445 27.9708 11.2096C29.3231 11.024 30.6751 11.0238 32.0289 11.2096C36.6532 11.8445 40.3733 15.3286 41.3094 19.9015C41.4868 20.7681 41.6309 21.6509 41.7492 22.5271C41.8811 23.5041 41.8811 24.4944 41.7492 25.4715C41.6309 26.3476 41.4868 27.2304 41.3094 28.097C40.3733 32.6699 36.6532 36.154 32.0289 36.7889C30.6772 36.9744 29.3216 36.9743 27.9708 36.7889C23.3466 36.154 19.6264 32.6699 18.6904 28.097C18.513 27.2304 18.3689 26.3476 18.2506 25.4715C18.1186 24.4944 18.1186 23.5041 18.2506 22.5271C18.3689 21.6509 18.513 20.7681 18.6904 19.9015Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="24.5" cy="23.5" r="1.5" fill="white" />
    <circle cx="35.5" cy="23.5" r="1.5" fill="white" />
    <path
      d="M31 20L28 28H32"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </g>
  <rect x="0.5" y="0.5" width="59" height="59" rx="29.5" stroke="white" stroke-opacity="0.1" />
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" rx="30" fill="white" />
    </clipPath>
  </defs>
</svg> `,Mh=C`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#1)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#794CFF"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M35.1403 31.5016C35.1193 30.9637 35.388 30.4558 35.8446 30.1707C36.1207 29.9982 36.4761 29.8473 36.7921 29.7685C37.3143 29.6382 37.8664 29.7977 38.2386 30.1864C38.8507 30.8257 39.3004 31.6836 39.8033 32.408C40.2796 33.0942 41.4695 33.2512 41.9687 32.5047C42.4839 31.7341 42.9405 30.8229 43.572 30.1399C43.9375 29.7447 44.4866 29.5756 45.0111 29.6967C45.3283 29.7701 45.6863 29.9147 45.9655 30.0823C46.4269 30.3595 46.7045 30.8626 46.6928 31.4008C46.6731 32.3083 46.3764 33.2571 46.2158 34.1473C46.061 35.0048 46.9045 35.8337 47.7592 35.664C48.6464 35.4878 49.5899 35.1747 50.497 35.1391C51.0348 35.1181 51.5427 35.3868 51.8279 35.8433C52.0004 36.1195 52.1513 36.4749 52.2301 36.7908C52.3604 37.3131 52.2009 37.8651 51.8121 38.2374C51.1729 38.8495 50.3151 39.2991 49.5908 39.8019C48.9046 40.2782 48.7473 41.4683 49.4939 41.9675C50.2644 42.4827 51.1757 42.9393 51.8587 43.5708C52.2539 43.9362 52.423 44.4854 52.3018 45.0099C52.2285 45.3271 52.0839 45.6851 51.9162 45.9642C51.6391 46.4257 51.1359 46.7032 50.5978 46.6916C49.6903 46.6719 48.7417 46.3753 47.8516 46.2146C46.9939 46.0598 46.1648 46.9035 46.3346 47.7583C46.5108 48.6454 46.8239 49.5888 46.8594 50.4958C46.8805 51.0336 46.6117 51.5415 46.1552 51.8267C45.879 51.9992 45.5236 52.15 45.2077 52.2289C44.6854 52.3592 44.1334 52.1997 43.7611 51.8109C43.1491 51.1718 42.6996 50.314 42.1968 49.5897C41.7203 48.9034 40.5301 48.7463 40.0309 49.493C39.5157 50.2634 39.0592 51.1746 38.4278 51.8574C38.0623 52.2527 37.5132 52.4218 36.9887 52.3006C36.6715 52.2273 36.3135 52.0826 36.0343 51.915C35.5729 51.6379 35.2953 51.1347 35.307 50.5966C35.3267 49.6891 35.6233 48.7405 35.7839 47.8505C35.9388 46.9928 35.0951 46.1636 34.2402 46.3334C33.3531 46.5096 32.4098 46.8227 31.5028 46.8582C30.9649 46.8793 30.457 46.6105 30.1719 46.154C29.9994 45.8778 29.8485 45.5224 29.7697 45.2065C29.6394 44.6842 29.7989 44.1322 30.1877 43.7599C30.8269 43.1479 31.6847 42.6982 32.4091 42.1954C33.0954 41.7189 33.2522 40.5289 32.5056 40.0297C31.7351 39.5145 30.824 39.058 30.1411 38.4265C29.7459 38.0611 29.5768 37.5119 29.698 36.9875C29.7713 36.6702 29.9159 36.3122 30.0836 36.0331C30.3607 35.5717 30.8638 35.2941 31.402 35.3058C32.3095 35.3255 33.2583 35.6221 34.1485 35.7828C35.006 35.9376 35.8349 35.094 35.6652 34.2393C35.489 33.3521 35.1759 32.4087 35.1403 31.5016Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M20.7706 8.22357C20.9036 7.51411 21.5231 7 22.2449 7H23.7551C24.4769 7 25.0964 7.51411 25.2294 8.22357C25.5051 9.69403 25.4829 11.6321 27.1202 12.2606C27.3092 12.3331 27.4958 12.4105 27.6798 12.4926C29.2818 13.2072 30.6374 11.8199 31.8721 10.9752C32.4678 10.5676 33.2694 10.6421 33.7798 11.1525L34.8477 12.2204C35.3581 12.7308 35.4326 13.5323 35.025 14.128C34.1802 15.3627 32.7931 16.7183 33.5077 18.3202C33.5898 18.5043 33.6672 18.6909 33.7398 18.88C34.3683 20.5171 36.3061 20.4949 37.7764 20.7706C38.4859 20.9036 39 21.5231 39 22.2449V23.7551C39 24.4769 38.4859 25.0964 37.7764 25.2294C36.3061 25.5051 34.3685 25.483 33.7401 27.1201C33.6675 27.3093 33.59 27.4961 33.5079 27.6803C32.7934 29.282 34.1803 30.6374 35.025 31.8719C35.4326 32.4677 35.3581 33.2692 34.8477 33.7796L33.7798 34.8475C33.2694 35.3579 32.4678 35.4324 31.8721 35.0248C30.6376 34.1801 29.2823 32.7934 27.6806 33.508C27.4962 33.5903 27.3093 33.6678 27.12 33.7405C25.483 34.3688 25.5051 36.3062 25.2294 37.7764C25.0964 38.4859 24.4769 39 23.7551 39H22.2449C21.5231 39 20.9036 38.4859 20.7706 37.7764C20.4949 36.3062 20.517 34.3688 18.88 33.7405C18.6908 33.6678 18.5039 33.5903 18.3196 33.5081C16.7179 32.7936 15.3625 34.1804 14.1279 35.0251C13.5322 35.4327 12.7307 35.3582 12.2203 34.8478L11.1524 33.7799C10.642 33.2695 10.5675 32.4679 10.9751 31.8722C11.8198 30.6376 13.2067 29.2822 12.4922 27.6804C12.41 27.4962 12.3325 27.3093 12.2599 27.1201C11.6315 25.483 9.69392 25.5051 8.22357 25.2294C7.51411 25.0964 7 24.4769 7 23.7551V22.2449C7 21.5231 7.51411 20.9036 8.22357 20.7706C9.69394 20.4949 11.6317 20.5171 12.2602 18.88C12.3328 18.6909 12.4103 18.5042 12.4924 18.3201C13.207 16.7181 11.8198 15.3625 10.975 14.1278C10.5674 13.5321 10.6419 12.7305 11.1523 12.2201L12.2202 11.1522C12.7306 10.6418 13.5322 10.5673 14.1279 10.9749C15.3626 11.8197 16.7184 13.2071 18.3204 12.4925C18.5044 12.4105 18.6909 12.3331 18.8799 12.2606C20.5171 11.6321 20.4949 9.69403 20.7706 8.22357Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="23" cy="23" r="6" fill="#794CFF" stroke="white" stroke-width="2" />
    <circle cx="41" cy="41" r="4" fill="#794CFF" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `,jh=C`<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <g clip-path="url(#clip0_187_29)">
    <path d="M1.18187e-05 15.8055C1.18187e-05 9.8015 -5.19442e-07 6.91338 1.69991e-08 0C4.5 3.72236e-05 9.62249 0 16.5 0L23.5 4.31399e-05C29.9349 4.31399e-05 35.5 0.000206332 40 3.73468e-05C40 2.77754 40 9.36708 40 15.8055V22.8364C40 29.2647 40 33.7962 40 40C31.5 40 29.8337 40 23.4 40H16.6C10.5092 40 6.50004 40 4.04289e-05 40C3.05176e-05 32.2453 1.18187e-05 29.6382 1.18187e-05 22.8364V15.8055Z" fill="#0052FF"/>
    <path d="M20.0236 26.5C16.4342 26.5 13.5236 23.5931 13.5236 20C13.5236 16.4069 16.4342 13.5 20.0236 13.5C23.2411 13.5 25.9134 15.8472 26.4261 18.9167H32.9731C32.4206 12.2433 26.8342 7 20.02 7C12.8411 7 7.02002 12.8211 7.02002 20C7.02002 27.1789 12.8411 33 20.02 33C26.8342 33 32.4206 27.7567 32.9731 21.0833H26.4225C25.9061 24.1528 23.2411 26.5 20.0236 26.5Z" fill="white"/>
  </g>
  <defs>
    <clipPath id="clip0_187_29">
      <rect width="40" height="40" fill="white"/>
    </clipPath>
  </defs>
</svg>`,Lh=C`
  <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#a)">
      <path
        d="M0 16.6c0-6.168 0-9.251 1.314-11.555a10 10 0 0 1 3.731-3.731C7.35 0 10.432 0 16.6 0h6.8c6.168 0 9.252 0 11.555 1.314a10 10 0 0 1 3.731 3.731C40 7.35 40 10.432 40 16.6v6.8c0 6.168 0 9.252-1.314 11.555a10 10 0 0 1-3.731 3.731C32.652 40 29.568 40 23.4 40h-6.8c-6.168 0-9.251 0-11.555-1.314a10 10 0 0 1-3.731-3.731C0 32.652 0 29.568 0 23.4v-6.8Z"
        fill="#7D00FF"
      />
      <path
        d="M.5 16.6c0-3.093 0-5.38.162-7.182.161-1.795.48-3.061 1.086-4.125a9.5 9.5 0 0 1 3.545-3.545C6.357 1.141 7.623.823 9.418.662 11.221.5 13.508.5 16.6.5h6.8c3.093 0 5.38 0 7.182.162 1.795.161 3.062.48 4.125 1.086a9.5 9.5 0 0 1 3.545 3.545c.607 1.064.925 2.33 1.086 4.125.161 1.803.162 4.09.162 7.182v6.8c0 3.093 0 5.38-.162 7.182-.161 1.795-.48 3.062-1.086 4.125a9.5 9.5 0 0 1-3.545 3.545c-1.063.607-2.33.925-4.125 1.086-1.803.161-4.09.162-7.182.162h-6.8c-3.093 0-5.38 0-7.182-.162-1.795-.161-3.061-.48-4.125-1.086a9.5 9.5 0 0 1-3.545-3.545c-.607-1.063-.925-2.33-1.086-4.125C.5 28.779.5 26.492.5 23.4v-6.8Z"
        stroke="#fff"
        stroke-opacity=".05"
      />
      <path
        d="M28.306 15.381a3.69 3.69 0 1 0 0-7.381 3.69 3.69 0 0 0 0 7.381ZM16.987 32a8.991 8.991 0 1 1 .016-17.983A8.991 8.991 0 0 1 16.988 32Z"
        fill="#fff"
      />
    </g>
    <defs>
      <clipPath id="a"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    </defs>
  </svg>
`,Bh=C`
  <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#a)">
      <path
        d="M0 16.6c0-6.168 0-9.251 1.314-11.555a10 10 0 0 1 3.731-3.731C7.35 0 10.432 0 16.6 0h6.8c6.168 0 9.252 0 11.555 1.314a10 10 0 0 1 3.731 3.731C40 7.35 40 10.432 40 16.6v6.8c0 6.168 0 9.252-1.314 11.555a10 10 0 0 1-3.731 3.731C32.652 40 29.568 40 23.4 40h-6.8c-6.168 0-9.251 0-11.555-1.314a10 10 0 0 1-3.731-3.731C0 32.652 0 29.568 0 23.4v-6.8Z"
        fill="#635BFF"
      />
      <path
        d="M.5 16.6c0-3.093 0-5.38.162-7.182.161-1.795.48-3.061 1.086-4.125a9.5 9.5 0 0 1 3.545-3.545C6.357 1.141 7.623.823 9.418.662 11.221.5 13.508.5 16.6.5h6.8c3.093 0 5.38 0 7.182.162 1.795.161 3.062.48 4.125 1.086a9.5 9.5 0 0 1 3.545 3.545c.607 1.064.925 2.33 1.086 4.125.161 1.803.162 4.09.162 7.182v6.8c0 3.093 0 5.38-.162 7.182-.161 1.795-.48 3.062-1.086 4.125a9.5 9.5 0 0 1-3.545 3.545c-1.063.607-2.33.925-4.125 1.086-1.803.161-4.09.162-7.182.162h-6.8c-3.093 0-5.38 0-7.182-.162-1.795-.161-3.061-.48-4.125-1.086a9.5 9.5 0 0 1-3.545-3.545c-.607-1.063-.925-2.33-1.086-4.125C.5 28.779.5 26.492.5 23.4v-6.8Z"
        stroke="#fff"
        stroke-opacity=".05"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M18.299 15.147c0-1.028.844-1.424 2.242-1.424 2.004 0 4.536.607 6.54 1.688V9.213C24.892 8.343 22.73 8 20.541 8c-5.354 0-8.915 2.796-8.915 7.464 0 7.279 10.022 6.118 10.022 9.257 0 1.213-1.055 1.609-2.531 1.609-2.19 0-4.985-.897-7.2-2.11v6.277a18.283 18.283 0 0 0 7.2 1.503c5.485 0 9.257-2.716 9.257-7.437-.027-7.86-10.075-6.462-10.075-9.416Z"
        fill="#fff"
      />
    </g>
    <defs>
      <clipPath id="a"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    </defs>
  </svg>
`,zh=C`
  <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#a)">
      <path
        d="M0 16.6c0-6.168 0-9.251 1.314-11.555a10 10 0 0 1 3.731-3.731C7.35 0 10.432 0 16.6 0h6.8c6.168 0 9.252 0 11.555 1.314a10 10 0 0 1 3.731 3.731C40 7.35 40 10.432 40 16.6v6.8c0 6.168 0 9.252-1.314 11.555a10 10 0 0 1-3.731 3.731C32.652 40 29.568 40 23.4 40h-6.8c-6.168 0-9.251 0-11.555-1.314a10 10 0 0 1-3.731-3.731C0 32.652 0 29.568 0 23.4v-6.8Z"
        fill="#fff"
      />
      <path
        d="M.5 16.6c0-3.093 0-5.38.162-7.182.161-1.795.48-3.061 1.086-4.125a9.5 9.5 0 0 1 3.545-3.545C6.357 1.141 7.623.823 9.418.662 11.221.5 13.508.5 16.6.5h6.8c3.093 0 5.38 0 7.182.162 1.795.161 3.062.48 4.125 1.086a9.5 9.5 0 0 1 3.545 3.545c.607 1.064.925 2.33 1.086 4.125.161 1.803.162 4.09.162 7.182v6.8c0 3.093 0 5.38-.162 7.182-.161 1.795-.48 3.062-1.086 4.125a9.5 9.5 0 0 1-3.545 3.545c-1.063.607-2.33.925-4.125 1.086-1.803.161-4.09.162-7.182.162h-6.8c-3.093 0-5.38 0-7.182-.162-1.795-.161-3.061-.48-4.125-1.086a9.5 9.5 0 0 1-3.545-3.545c-.607-1.063-.925-2.33-1.086-4.125C.5 28.779.5 26.492.5 23.4v-6.8Z"
        stroke="#fff"
        stroke-opacity=".05"
      />
      <path
        d="M18.606 12.642a.781.781 0 0 0-.771.66l-1.281 8.125a.78.78 0 0 1 .77-.66h3.755a7.668 7.668 0 0 0 7.57-6.49 6.26 6.26 0 0 0 .075-.843c-.96-.504-2.089-.792-3.325-.792h-6.793Z"
        fill="#001C64"
      />
      <path
        d="M28.724 13.434c-.006.282-.03.564-.075.843a7.668 7.668 0 0 1-7.57 6.491h-3.754a.78.78 0 0 0-.771.66l-1.916 12.15a.634.634 0 0 0 .626.734h4.075a.781.781 0 0 0 .77-.66l1.074-6.807a.781.781 0 0 1 .772-.66h2.4a7.668 7.668 0 0 0 7.57-6.491c.415-2.651-.92-5.064-3.201-6.26Z"
        fill="#0070E0"
      />
      <path
        d="M13.977 7.226a.78.78 0 0 0-.771.658l-3.198 20.277a.634.634 0 0 0 .626.733h4.742l1.178-7.467 1.281-8.125a.782.782 0 0 1 .771-.66H25.4c1.237 0 2.364.289 3.325.792.065-3.4-2.74-6.208-6.599-6.208h-8.148Z"
        fill="#003087"
      />
    </g>
    <defs>
      <clipPath id="a"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    </defs>
  </svg>
`,Vh=C`<svg width="60" height="60" viewBox="0 0 60 60" fill="none">
<g clip-path="url(#clip0_13859_31161)">
  <path d="M0 24.8995C0 15.6481 0 11.0223 1.97053 7.56763C3.3015 5.2342 5.23468 3.30101 7.56812 1.97004C11.0228 -0.000488281 15.6485 -0.000488281 24.9 -0.000488281H35.1C44.3514 -0.000488281 48.9772 -0.000488281 52.4319 1.97004C54.7653 3.30101 56.6985 5.2342 58.0295 7.56763C60 11.0223 60 15.6481 60 24.8995V35.0995C60 44.351 60 48.9767 58.0295 52.4314C56.6985 54.7648 54.7653 56.698 52.4319 58.029C48.9772 59.9995 44.3514 59.9995 35.1 59.9995H24.9C15.6485 59.9995 11.0228 59.9995 7.56812 58.029C5.23468 56.698 3.3015 54.7648 1.97053 52.4314C0 48.9767 0 44.351 0 35.0995V24.8995Z" fill="#EB8B47"/>
  <path d="M0.5 24.8995C0.5 20.2647 0.50047 16.8216 0.744315 14.1045C0.987552 11.3941 1.46987 9.45455 2.40484 7.81536C3.69145 5.55971 5.56019 3.69096 7.81585 2.40435C9.45504 1.46938 11.3946 0.987064 14.105 0.743826C16.8221 0.499981 20.2652 0.499512 24.9 0.499512H35.1C39.7348 0.499512 43.1779 0.499981 45.895 0.743826C48.6054 0.987064 50.545 1.46938 52.1841 2.40435C54.4398 3.69096 56.3086 5.55971 57.5952 7.81536C58.5301 9.45455 59.0124 11.3941 59.2557 14.1045C59.4995 16.8216 59.5 20.2647 59.5 24.8995V35.0995C59.5 39.7343 59.4995 43.1774 59.2557 45.8945C59.0124 48.6049 58.5301 50.5445 57.5952 52.1837C56.3086 54.4393 54.4398 56.3081 52.1841 57.5947C50.545 58.5296 48.6054 59.012 45.895 59.2552C43.1779 59.499 39.7348 59.4995 35.1 59.4995H24.9C20.2652 59.4995 16.8221 59.499 14.105 59.2552C11.3946 59.012 9.45504 58.5296 7.81585 57.5947C5.56019 56.3081 3.69145 54.4393 2.40484 52.1837C1.46987 50.5445 0.987552 48.6049 0.744315 45.8945C0.50047 43.1774 0.5 39.7343 0.5 35.0995V24.8995Z" stroke="#141414" stroke-opacity="0.1"/>
  <path d="M13 26.0335C13 21.7838 13 19.659 14.0822 18.1694C14.4318 17.6883 14.8548 17.2653 15.3359 16.9157C16.8255 15.8335 18.9503 15.8335 23.2 15.8335H36.8C41.0497 15.8335 43.1745 15.8335 44.6641 16.9157C45.1452 17.2653 45.5682 17.6883 45.9178 18.1694C47 19.659 47 21.7838 47 26.0335V33.9668C47 38.2165 47 40.3414 45.9178 41.831C45.5682 42.312 45.1452 42.7351 44.6641 43.0846C43.1745 44.1668 41.0497 44.1668 36.8 44.1668H23.2C18.9503 44.1668 16.8255 44.1668 15.3359 43.0846C14.8548 42.7351 14.4318 42.312 14.0822 41.831C13 40.3414 13 38.2165 13 33.9668V26.0335Z" fill="#FF974C" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M39.5 36.667H36.6666" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M45.2 23.0645H14.8C14.0501 23.0645 13.6751 23.0645 13.4122 23.2554C13.3273 23.3171 13.2527 23.3918 13.191 23.4767C13 23.7395 13 24.1145 13 24.8645V27.2645C13 28.0144 13 28.3894 13.191 28.6522C13.2527 28.7371 13.3273 28.8118 13.4122 28.8735C13.6751 29.0645 14.0501 29.0645 14.8 29.0645H45.2C45.9499 29.0645 46.3249 29.0645 46.5878 28.8735C46.6727 28.8118 46.7473 28.7371 46.809 28.6522C47 28.3894 47 28.0144 47 27.2645V24.8645C47 24.1145 47 23.7395 46.809 23.4767C46.7473 23.3918 46.6727 23.3171 46.5878 23.2554C46.3249 23.0645 45.9499 23.0645 45.2 23.0645Z" fill="white" fill-opacity="0.4" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
  <clipPath id="clip0_13859_31161">
    <rect width="60" height="60" fill="white"/>
  </clipPath>
</defs>
</svg>`,Hh=C`<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="64" height="64" rx="30" fill="#1DC956"/>
  <rect x="0.5" y="0.5" width="63" height="63" rx="29.5" stroke="#141414" stroke-opacity="0.1"/>
  <path d="M32.4053 19.8031C35.3901 19.8031 38.0431 20.8349 40.1619 22.8247L45.9656 17.0211C42.4465 13.7416 37.8773 11.7333 32.4053 11.7333C24.4829 11.7333 17.6475 16.2841 14.3127 22.9168L21.056 28.1493C22.6589 23.359 27.136 19.8031 32.4053 19.8031Z" fill="#1DC956" stroke="white" stroke-width="2" stroke-linejoin="round"/>
  <path d="M32.4053 52.2667C37.8773 52.2667 42.465 50.4611 45.8182 47.3658L39.2407 42.2623C37.4351 43.4783 35.1321 44.2153 32.4053 44.2153C27.136 44.2153 22.6589 40.6594 21.056 35.8691L14.3127 41.1016C17.6475 47.7159 24.4829 52.2667 32.4053 52.2667Z" fill="#2BEE6C"/>
  <path d="M21.056 35.8507L19.5636 36.993L14.3127 41.0832M39.2407 42.2623L45.8182 47.3658C42.465 50.4611 37.8773 52.2667 32.4053 52.2667C24.4829 52.2667 17.6475 47.7159 14.3127 41.1016L21.056 35.8691C22.6589 40.6594 27.136 44.2153 32.4053 44.2153C35.1321 44.2153 37.4351 43.4783 39.2407 42.2623Z" stroke="white" stroke-width="2" stroke-linejoin="round"/>
  <path d="M51.8613 32.4606C51.8613 31.0235 51.7323 29.6417 51.4928 28.3151H32.4053V36.1638H43.3124C42.8334 38.688 41.3963 40.8252 39.2407 42.2623L45.8181 47.3658C49.6503 43.8283 51.8613 38.6327 51.8613 32.4606Z" fill="#1FAD7E" stroke="white" stroke-width="2" stroke-linejoin="round"/>
  <path d="M21.056 35.8507C20.6507 34.6347 20.4111 33.345 20.4111 32C20.4111 30.655 20.6507 29.3653 21.056 28.1493L14.3127 22.9169C12.9309 25.6437 12.1387 28.7205 12.1387 32C12.1387 35.2795 12.9309 38.3564 14.3127 41.0831L19.5636 36.993L21.056 35.8507Z" fill="#86F999"/>
  <path d="M21.056 35.8691L14.3127 41.1016M21.056 35.8507C20.6507 34.6347 20.4111 33.345 20.4111 32C20.4111 30.655 20.6507 29.3653 21.056 28.1493L14.3127 22.9169C12.9309 25.6437 12.1387 28.7205 12.1387 32C12.1387 35.2795 12.9309 38.3564 14.3127 41.0831L19.5636 36.993L21.056 35.8507Z" stroke="white" stroke-width="2" stroke-linejoin="round"/>
</svg>
`,Fh=C`<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_241_31635)">
    <path d="M0 26.5595C0 16.6913 0 11.7572 2.1019 8.07217C3.5216 5.58317 5.58366 3.52111 8.07266 2.10141C11.7577 -0.000488281 16.6918 -0.000488281 26.56 -0.000488281H37.44C47.3082 -0.000488281 52.2423 -0.000488281 55.9273 2.10141C58.4163 3.52111 60.4784 5.58317 61.8981 8.07217C64 11.7572 64 16.6913 64 26.5595V37.4395C64 47.3077 64 52.2418 61.8981 55.9268C60.4784 58.4158 58.4163 60.4779 55.9273 61.8976C52.2423 63.9995 47.3082 63.9995 37.44 63.9995H26.56C16.6918 63.9995 11.7577 63.9995 8.07266 61.8976C5.58366 60.4779 3.5216 58.4158 2.1019 55.9268C0 52.2418 0 47.3077 0 37.4395V26.5595Z" fill="#EB8B47"/>
    <path d="M0.5 26.5595C0.5 21.6163 0.50047 17.942 0.760736 15.0418C1.02039 12.1485 1.53555 10.0742 2.53621 8.3199C3.91155 5.90869 5.90917 3.91106 8.32039 2.53572C10.0747 1.53506 12.1489 1.01991 15.0423 0.760247C17.9425 0.499981 21.6168 0.499512 26.56 0.499512H37.44C42.3832 0.499512 46.0575 0.499981 48.9577 0.760247C51.8511 1.01991 53.9253 1.53506 55.6796 2.53572C58.0908 3.91106 60.0885 5.90869 61.4638 8.3199C62.4645 10.0742 62.9796 12.1485 63.2393 15.0418C63.4995 17.942 63.5 21.6163 63.5 26.5595V37.4395C63.5 42.3827 63.4995 46.057 63.2393 48.9572C62.9796 51.8506 62.4645 53.9248 61.4638 55.6791C60.0885 58.0903 58.0908 60.088 55.6796 61.4633C53.9253 62.464 51.8511 62.9791 48.9577 63.2388C46.0575 63.499 42.3832 63.4995 37.44 63.4995H26.56C21.6168 63.4995 17.9425 63.499 15.0423 63.2388C12.1489 62.9791 10.0747 62.464 8.32039 61.4633C5.90917 60.088 3.91155 58.0903 2.53621 55.6791C1.53555 53.9248 1.02039 51.8506 0.760736 48.9572C0.50047 46.057 0.5 42.3827 0.5 37.4395V26.5595Z" stroke="#141414" stroke-opacity="0.1"/>
    <path d="M28.1042 49.2329L13.1024 51.2077L15.0772 36.2059L37.1015 14.1815C39.2441 12.039 40.3154 10.9677 41.5718 10.624C42.4205 10.3918 43.3159 10.3918 44.1645 10.624C45.421 10.9677 46.4922 12.039 48.6348 14.1815L50.1286 15.6753C52.2711 17.8179 53.3424 18.8891 53.6861 20.1456C53.9183 20.9942 53.9183 21.8896 53.6861 22.7383C53.3424 23.9947 52.2711 25.066 50.1286 27.2086L28.1042 49.2329Z" fill="#FF974C" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M38.5962 20.5376L22.4199 36.7139" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M43.7727 25.714L27.5964 41.8903" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M22.3703 36.7635C19.3258 39.808 16.0198 36.6395 16.2616 35.0324" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M27.5466 41.9399C24.5034 44.9831 28.155 48.7098 29.2738 48.0475" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M27.5468 41.9398C23.428 46.0586 18.2516 40.8822 22.3704 36.7634" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M15.8191 50.5214C15.4711 49.5823 14.728 48.8392 13.7889 48.4912" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M49.2862 29.5805L34.7275 15.0219" stroke="#E4E7E7" stroke-width="2" stroke-linejoin="round"/>
  </g>
  <defs>
    <clipPath id="clip0_241_31635">
      <rect width="64" height="64" fill="white"/>
    </clipPath>
  </defs>
</svg>
`,Zh=C`<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_241_31636)">
    <path d="M0 26.5595C0 16.6913 0 11.7572 2.1019 8.07217C3.5216 5.58318 5.58366 3.52111 8.07266 2.10141C11.7577 -0.000488281 16.6918 -0.000488281 26.56 -0.000488281H37.44C47.3082 -0.000488281 52.2423 -0.000488281 55.9273 2.10141C58.4163 3.52111 60.4784 5.58318 61.8981 8.07217C64 11.7572 64 16.6913 64 26.5595V37.4395C64 47.3077 64 52.2418 61.8981 55.9269C60.4784 58.4159 58.4163 60.4779 55.9273 61.8976C52.2423 63.9995 47.3082 63.9995 37.44 63.9995H26.56C16.6918 63.9995 11.7577 63.9995 8.07266 61.8976C5.58366 60.4779 3.5216 58.4159 2.1019 55.9269C0 52.2418 0 47.3077 0 37.4395V26.5595Z" fill="#794CFF"/>
    <path d="M0.5 26.5595C0.5 21.6163 0.50047 17.942 0.760736 15.0418C1.02039 12.1485 1.53555 10.0742 2.53621 8.3199C3.91155 5.90869 5.90917 3.91106 8.32039 2.53572C10.0747 1.53506 12.1489 1.01991 15.0423 0.760247C17.9425 0.499981 21.6168 0.499512 26.56 0.499512H37.44C42.3832 0.499512 46.0575 0.499981 48.9577 0.760247C51.8511 1.01991 53.9253 1.53506 55.6796 2.53572C58.0908 3.91106 60.0885 5.90869 61.4638 8.3199C62.4645 10.0742 62.9796 12.1485 63.2393 15.0418C63.4995 17.942 63.5 21.6163 63.5 26.5595V37.4395C63.5 42.3827 63.4995 46.057 63.2393 48.9572C62.9796 51.8506 62.4645 53.9248 61.4638 55.6791C60.0885 58.0903 58.0908 60.088 55.6796 61.4633C53.9253 62.464 51.8511 62.9791 48.9577 63.2388C46.0575 63.499 42.3832 63.4995 37.44 63.4995H26.56C21.6168 63.4995 17.9425 63.499 15.0423 63.2388C12.1489 62.9791 10.0747 62.464 8.32039 61.4633C5.90917 60.088 3.91155 58.0903 2.53621 55.6791C1.53555 53.9248 1.02039 51.8506 0.760736 48.9572C0.50047 46.057 0.5 42.3827 0.5 37.4395V26.5595Z" stroke="#141414" stroke-opacity="0.1"/>
    <path d="M40 39.4595C44.7824 36.693 48 31.5222 48 25.6C48 16.7634 40.8366 9.59998 32 9.59998C23.1634 9.59998 16 16.7634 16 25.6C16 31.5222 19.2176 36.693 24 39.4595V45.8144H40V39.4595Z" fill="#906EF7"/>
    <path d="M24 49.9689C24 51.8192 24 52.7444 24.3941 53.4353C24.6603 53.902 25.0469 54.2886 25.5136 54.5548C26.2046 54.9489 27.1297 54.9489 28.98 54.9489H35.02C36.8703 54.9489 37.7954 54.9489 38.4864 54.5548C38.9531 54.2886 39.3397 53.902 39.6059 53.4353C40 52.7444 40 51.8192 40 49.9689V45.8144H24V49.9689Z" fill="#906EF7"/>
    <path d="M24 45.8144V39.4595C19.2176 36.693 16 31.5222 16 25.6C16 16.7634 23.1634 9.59998 32 9.59998C40.8366 9.59998 48 16.7634 48 25.6C48 31.5222 44.7824 36.693 40 39.4595V45.8144M24 45.8144H40M24 45.8144V49.9689C24 51.8192 24 52.7444 24.3941 53.4353C24.6603 53.902 25.0469 54.2886 25.5136 54.5548C26.2046 54.9489 27.1297 54.9489 28.98 54.9489H35.02C36.8703 54.9489 37.7954 54.9489 38.4864 54.5548C38.9531 54.2886 39.3397 53.902 39.6059 53.4353C40 52.7444 40 51.8192 40 49.9689V45.8144" stroke="white" stroke-width="2" stroke-linejoin="round"/>
    <path d="M24 49.9689C24 51.8192 24 52.7444 24.3941 53.4353C24.6603 53.902 25.0469 54.2886 25.5136 54.5548C26.2046 54.9489 27.1297 54.9489 28.98 54.9489H35.02C36.8703 54.9489 37.7954 54.9489 38.4864 54.5548C38.9531 54.2886 39.3397 53.902 39.6059 53.4353C40 52.7444 40 51.8192 40 49.9689V45.8144H24V49.9689Z" fill="#643CDD" stroke="white" stroke-width="2" stroke-linejoin="round"/>
    <path d="M29.6735 26.9101V29.1109H34.0753V26.9101C34.0753 25.6945 35.0607 24.7092 36.2762 24.7092C37.4917 24.7092 38.4771 25.6945 38.4771 26.9101C38.4771 28.1256 37.4917 29.1109 36.2762 29.1109H34.0753H29.6735H27.4726C26.2571 29.1109 25.2717 28.1256 25.2717 26.9101C25.2717 25.6945 26.2571 24.7092 27.4726 24.7092C28.6881 24.7092 29.6735 25.6945 29.6735 26.9101Z" fill="#906EF7"/>
    <path d="M29.6735 45.3183V26.9101C29.6735 25.6945 28.6881 24.7092 27.4726 24.7092V24.7092C26.2571 24.7092 25.2717 25.6945 25.2717 26.9101V26.9101C25.2717 28.1256 26.2571 29.1109 27.4726 29.1109H36.2762C37.4917 29.1109 38.4771 28.1256 38.4771 26.9101V26.9101C38.4771 25.6945 37.4917 24.7092 36.2762 24.7092V24.7092C35.0607 24.7092 34.0753 25.6945 34.0753 26.9101V45.3183" stroke="white" stroke-width="2" stroke-linejoin="round"/>
  </g>
  <defs>
    <clipPath id="clip0_241_31636">
      <rect width="64" height="64" fill="white"/>
    </clipPath>
  </defs>
</svg>
`,Gh=b`
  :host {
    display: block;
    width: var(--local-size);
    height: var(--local-size);
  }

  :host svg {
    width: 100%;
    height: 100%;
  }
`;var hl=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};const qh={browser:Sh,dao:Ah,defi:Eh,defiAlt:$h,eth:Rh,layers:Ih,lock:Oh,login:Nh,network:Ph,nft:Dh,noun:Uh,profile:Wh,system:Mh,coinbase:jh,onrampCard:Vh,moonpay:Lh,stripe:Bh,paypal:zh,google:Hh,pencil:Fh,lightbulb:Zh};let so=class extends w{constructor(){super(...arguments),this.name="browser",this.size="md"}render(){return this.style.cssText=`
       --local-size: var(--wui-visual-size-${this.size});
   `,l`${qh[this.name]}`}};so.styles=[O,Gh];hl([c()],so.prototype,"name",void 0);hl([c()],so.prototype,"size",void 0);so=hl([f("wui-visual")],so);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $=i=>i??Ne,H={getSpacingStyles(i,e){if(Array.isArray(i))return i[e]?`var(--wui-spacing-${i[e]})`:void 0;if(typeof i=="string")return`var(--wui-spacing-${i})`},getFormattedDate(i){return new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"}).format(i)},getHostName(i){try{return new URL(i).hostname}catch{return""}},getTruncateString({string:i,charsStart:e,charsEnd:t,truncate:r}){return i.length<=e+t?i:r==="end"?`${i.substring(0,e)}...`:r==="start"?`...${i.substring(i.length-t)}`:`${i.substring(0,Math.floor(e))}...${i.substring(i.length-Math.floor(t))}`},generateAvatarColors(i){const t=i.toLowerCase().replace(/^0x/iu,"").substring(0,6),r=this.hexToRgb(t),o=getComputedStyle(document.documentElement).getPropertyValue("--w3m-border-radius-master"),a=100-3*Number(o==null?void 0:o.replace("px","")),s=`${a}% ${a}% at 65% 40%`,p=[];for(let h=0;h<5;h+=1){const x=this.tintColor(r,.15*h);p.push(`rgb(${x[0]}, ${x[1]}, ${x[2]})`)}return`
    --local-color-1: ${p[0]};
    --local-color-2: ${p[1]};
    --local-color-3: ${p[2]};
    --local-color-4: ${p[3]};
    --local-color-5: ${p[4]};
    --local-radial-circle: ${s}
   `},hexToRgb(i){const e=parseInt(i,16),t=e>>16&255,r=e>>8&255,o=e&255;return[t,r,o]},tintColor(i,e){const[t,r,o]=i,n=Math.round(t+(255-t)*e),a=Math.round(r+(255-r)*e),s=Math.round(o+(255-o)*e);return[n,a,s]},isNumber(i){return{number:/^[0-9]+$/u}.number.test(i)},getColorTheme(i){return i||(typeof window<"u"&&window.matchMedia?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":"dark")},splitBalance(i){const e=i.split(".");return e.length===2?[e[0],e[1]]:["0","00"]},roundNumber(i,e,t){return i.toString().length>=e?Number(i).toFixed(t):i},formatNumberToLocalString(i,e=2){return i===void 0?"0.00":typeof i=="number"?i.toLocaleString("en-US",{maximumFractionDigits:e,minimumFractionDigits:e}):parseFloat(i).toLocaleString("en-US",{maximumFractionDigits:e,minimumFractionDigits:e})}},Yh=b`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`;var ft=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Xe=class extends w{render(){return this.style.cssText=`
      flex-direction: ${this.flexDirection};
      flex-wrap: ${this.flexWrap};
      flex-basis: ${this.flexBasis};
      flex-grow: ${this.flexGrow};
      flex-shrink: ${this.flexShrink};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&H.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&H.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&H.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&H.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&H.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&H.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&H.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&H.getSpacingStyles(this.margin,3)};
    `,l`<slot></slot>`}};Xe.styles=[O,Yh];ft([c()],Xe.prototype,"flexDirection",void 0);ft([c()],Xe.prototype,"flexWrap",void 0);ft([c()],Xe.prototype,"flexBasis",void 0);ft([c()],Xe.prototype,"flexGrow",void 0);ft([c()],Xe.prototype,"flexShrink",void 0);ft([c()],Xe.prototype,"alignItems",void 0);ft([c()],Xe.prototype,"justifyContent",void 0);ft([c()],Xe.prototype,"columnGap",void 0);ft([c()],Xe.prototype,"rowGap",void 0);ft([c()],Xe.prototype,"gap",void 0);ft([c()],Xe.prototype,"padding",void 0);ft([c()],Xe.prototype,"margin",void 0);Xe=ft([f("wui-flex")],Xe);const Kh=b`
  :host {
    display: block;
    width: var(--local-width);
    height: var(--local-height);
    border-radius: var(--wui-border-radius-3xl);
    box-shadow: 0 0 0 8px var(--wui-color-gray-glass-005);
    overflow: hidden;
    position: relative;
  }

  :host([data-variant='generated']) {
    --mixed-local-color-1: var(--local-color-1);
    --mixed-local-color-2: var(--local-color-2);
    --mixed-local-color-3: var(--local-color-3);
    --mixed-local-color-4: var(--local-color-4);
    --mixed-local-color-5: var(--local-color-5);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host([data-variant='generated']) {
      --mixed-local-color-1: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-1)
      );
      --mixed-local-color-2: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-2)
      );
      --mixed-local-color-3: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-3)
      );
      --mixed-local-color-4: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-4)
      );
      --mixed-local-color-5: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-5)
      );
    }
  }

  :host([data-variant='generated']) {
    box-shadow: 0 0 0 8px var(--wui-color-gray-glass-005);
    background: radial-gradient(
      var(--local-radial-circle),
      #fff 0.52%,
      var(--mixed-local-color-5) 31.25%,
      var(--mixed-local-color-3) 51.56%,
      var(--mixed-local-color-2) 65.63%,
      var(--mixed-local-color-1) 82.29%,
      var(--mixed-local-color-4) 100%
    );
  }

  :host([data-variant='default']) {
    box-shadow: 0 0 0 8px var(--wui-color-gray-glass-005);
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      #f5ccfc 31.25%,
      #dba4f5 51.56%,
      #9a8ee8 65.63%,
      #6493da 82.29%,
      #6ebdea 100%
    );
  }
`;var Po=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let _n=class extends w{constructor(){super(...arguments),this.imageSrc=void 0,this.alt=void 0,this.address=void 0,this.size="xl"}render(){return this.style.cssText=`
    --local-width: var(--wui-icon-box-size-${this.size});
    --local-height: var(--wui-icon-box-size-${this.size});
    `,l`${this.visualTemplate()}`}visualTemplate(){if(this.imageSrc)return this.dataset.variant="image",l`<wui-image src=${this.imageSrc} alt=${this.alt??"avatar"}></wui-image>`;if(this.address){this.dataset.variant="generated";const e=H.generateAvatarColors(this.address);return this.style.cssText+=`
 ${e}`,null}return this.dataset.variant="default",null}};_n.styles=[O,Kh];Po([c()],_n.prototype,"imageSrc",void 0);Po([c()],_n.prototype,"alt",void 0);Po([c()],_n.prototype,"address",void 0);Po([c()],_n.prototype,"size",void 0);_n=Po([f("wui-avatar")],_n);const Xh=b`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background-color: var(--wui-color-gray-glass-020);
    border-radius: var(--local-border-radius);
    border: var(--local-border);
    box-sizing: content-box;
    width: var(--local-size);
    height: var(--local-size);
    min-height: var(--local-size);
    min-width: var(--local-size);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host {
      background-color: color-mix(in srgb, var(--local-bg-value) var(--local-bg-mix), transparent);
    }
  }
`;var Ai=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Dt=class extends w{constructor(){super(...arguments),this.size="md",this.backgroundColor="accent-100",this.iconColor="accent-100",this.background="transparent",this.border=!1,this.borderColor="wui-color-bg-125",this.icon="copy"}render(){const e=this.iconSize||this.size,t=this.size==="lg",r=this.size==="xl",o=t?"12%":"16%",n=t?"xxs":r?"s":"3xl",a=this.background==="gray",s=this.background==="opaque",p=this.backgroundColor==="accent-100"&&s||this.backgroundColor==="success-100"&&s||this.backgroundColor==="error-100"&&s||this.backgroundColor==="inverse-100"&&s;let h=`var(--wui-color-${this.backgroundColor})`;return p?h=`var(--wui-icon-box-bg-${this.backgroundColor})`:a&&(h=`var(--wui-color-gray-${this.backgroundColor})`),this.style.cssText=`
       --local-bg-value: ${h};
       --local-bg-mix: ${p||a?"100%":o};
       --local-border-radius: var(--wui-border-radius-${n});
       --local-size: var(--wui-icon-box-size-${this.size});
       --local-border: ${this.borderColor==="wui-color-bg-125"?"2px":"1px"} solid ${this.border?`var(--${this.borderColor})`:"transparent"}
   `,l` <wui-icon color=${this.iconColor} size=${e} name=${this.icon}></wui-icon> `}};Dt.styles=[O,Q,Xh];Ai([c()],Dt.prototype,"size",void 0);Ai([c()],Dt.prototype,"backgroundColor",void 0);Ai([c()],Dt.prototype,"iconColor",void 0);Ai([c()],Dt.prototype,"iconSize",void 0);Ai([c()],Dt.prototype,"background",void 0);Ai([c({type:Boolean})],Dt.prototype,"border",void 0);Ai([c()],Dt.prototype,"borderColor",void 0);Ai([c()],Dt.prototype,"icon",void 0);Dt=Ai([f("wui-icon-box")],Dt);const Qh=b`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    background: var(--wui-color-gray-glass-002);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-color-gray-glass-005);
  }

  button:disabled {
    background: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-flex > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-image,
  button:disabled > wui-flex > wui-avatar {
    filter: grayscale(1);
  }

  button:has(wui-image) {
    padding: var(--wui-spacing-3xs) var(--wui-spacing-3xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
  }

  wui-text {
    color: var(--wui-color-fg-100);
  }

  wui-flex > wui-text {
    color: var(--wui-color-fg-200);
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  wui-flex {
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-005);
    background: var(--wui-color-gray-glass-005);
    padding: 4px var(--wui-spacing-m) 4px var(--wui-spacing-xxs);
  }

  button.local-no-balance {
    border-radius: 0px;
    border: none;
    background: transparent;
  }

  wui-avatar {
    width: 20px;
    height: 20px;
    box-shadow: 0 0 0 2px var(--wui-color-accent-glass-010);
  }

  @media (max-width: 500px) {
    button {
      gap: 0px;
      padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) !important;
      height: 32px;
    }
    wui-image,
    wui-icon-box,
    button > wui-text {
      visibility: hidden;
      width: 0px;
      height: 0px;
    }
    button {
      border-radius: 0px;
      border: none;
      background: transparent;
      padding: 0px;
    }
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }

    button:active:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }
  }
`;var oi=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let _t=class extends w{constructor(){super(...arguments),this.networkSrc=void 0,this.avatarSrc=void 0,this.balance=void 0,this.isUnsupportedChain=void 0,this.disabled=!1,this.address="",this.profileName="",this.charsStart=4,this.charsEnd=6}render(){return l`
      <button
        ?disabled=${this.disabled}
        class=${$(this.balance?void 0:"local-no-balance")}
      >
        ${this.balanceTemplate()}
        <wui-flex gap="xxs" alignItems="center">
          <wui-avatar
            .imageSrc=${this.avatarSrc}
            alt=${this.address}
            address=${this.address}
          ></wui-avatar>
          <wui-text variant="paragraph-600" color="inherit">
            ${this.address?H.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?18:this.charsStart,charsEnd:this.profileName?0:this.charsEnd,truncate:this.profileName?"end":"middle"}):null}
          </wui-text>
        </wui-flex>
      </button>
    `}balanceTemplate(){if(this.isUnsupportedChain)return l` <wui-icon-box
          size="sm"
          iconColor="error-100"
          backgroundColor="error-100"
          icon="warningCircle"
        ></wui-icon-box>
        <wui-text variant="paragraph-600" color="inherit"> Switch Network</wui-text>`;if(this.balance){const e=this.networkSrc?l`<wui-image src=${this.networkSrc}></wui-image>`:l`
            <wui-icon-box
              size="sm"
              iconColor="fg-200"
              backgroundColor="fg-300"
              icon="networkPlaceholder"
            ></wui-icon-box>
          `;return l`
        ${e}
        <wui-text variant="paragraph-600" color="inherit"> ${this.balance}</wui-text>
      `}return null}};_t.styles=[O,Q,Qh];oi([c()],_t.prototype,"networkSrc",void 0);oi([c()],_t.prototype,"avatarSrc",void 0);oi([c()],_t.prototype,"balance",void 0);oi([c({type:Boolean})],_t.prototype,"isUnsupportedChain",void 0);oi([c({type:Boolean})],_t.prototype,"disabled",void 0);oi([c()],_t.prototype,"address",void 0);oi([c()],_t.prototype,"profileName",void 0);oi([c()],_t.prototype,"charsStart",void 0);oi([c()],_t.prototype,"charsEnd",void 0);_t=oi([f("wui-account-button")],_t);const Jh=b`
  :host {
    position: relative;
    background-color: var(--wui-color-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-size);
    height: var(--local-size);
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host > wui-flex {
    overflow: hidden;
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  :host([name='Extension'])::after {
    border: 1px solid var(--wui-color-accent-glass-010);
  }

  :host([data-wallet-icon='allWallets']) {
    background-color: var(--wui-all-wallets-bg-100);
  }

  :host([data-wallet-icon='allWallets'])::after {
    border: 1px solid var(--wui-color-accent-glass-010);
  }

  wui-icon[data-parent-size='inherit'] {
    width: 75%;
    height: 75%;
    align-items: center;
  }

  wui-icon[data-parent-size='sm'] {
    width: 18px;
    height: 18px;
  }

  wui-icon[data-parent-size='md'] {
    width: 24px;
    height: 24px;
  }

  wui-icon[data-parent-size='lg'] {
    width: 42px;
    height: 42px;
  }

  wui-icon[data-parent-size='full'] {
    width: 100%;
    height: 100%;
  }

  :host > wui-icon-box {
    position: absolute;
    overflow: hidden;
    right: -1px;
    bottom: -2px;
    z-index: 1;
    border: 2px solid var(--wui-color-bg-150, #1e1f1f);
    padding: 1px;
  }
`;var Bn=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let mi=class extends w{constructor(){super(...arguments),this.size="md",this.name="",this.installed=!1,this.badgeSize="xs"}render(){let e="xxs";return this.size==="lg"?e="m":this.size==="md"?e="xs":e="xxs",this.style.cssText=`
       --local-border-radius: var(--wui-border-radius-${e});
       --local-size: var(--wui-wallet-image-size-${this.size});
   `,this.walletIcon&&(this.dataset.walletIcon=this.walletIcon),l`
      <wui-flex justifyContent="center" alignItems="center"> ${this.templateVisual()} </wui-flex>
    `}templateVisual(){return this.imageSrc?l`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:this.walletIcon?l`<wui-icon
        data-parent-size="md"
        size="md"
        color="inherit"
        name=${this.walletIcon}
      ></wui-icon>`:l`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};mi.styles=[O,Jh];Bn([c()],mi.prototype,"size",void 0);Bn([c()],mi.prototype,"name",void 0);Bn([c()],mi.prototype,"imageSrc",void 0);Bn([c()],mi.prototype,"walletIcon",void 0);Bn([c({type:Boolean})],mi.prototype,"installed",void 0);Bn([c()],mi.prototype,"badgeSize",void 0);mi=Bn([f("wui-wallet-image")],mi);const ef=b`
  :host {
    position: relative;
    border-radius: var(--wui-border-radius-xxs);
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: var(--wui-color-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--wui-spacing-4xs);
    padding: 3.75px !important;
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  :host > wui-wallet-image {
    width: 14px;
    height: 14px;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host > wui-flex {
    padding: 2px;
    position: fixed;
    overflow: hidden;
    left: 34px;
    bottom: 8px;
    background: var(--dark-background-150, #1e1f1f);
    border-radius: 50%;
    z-index: 2;
    display: flex;
  }
`;var fu=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};const Cs=4;let va=class extends w{constructor(){super(...arguments),this.walletImages=[]}render(){const e=this.walletImages.length<Cs;return l`${this.walletImages.slice(0,Cs).map(({src:t,walletName:r})=>l`
            <wui-wallet-image
              size="inherit"
              imageSrc=${t}
              name=${$(r)}
            ></wui-wallet-image>
          `)}
      ${e?[...Array(Cs-this.walletImages.length)].map(()=>l` <wui-wallet-image size="inherit" name=""></wui-wallet-image>`):null}
      <wui-flex>
        <wui-icon-box
          size="xxs"
          iconSize="xxs"
          iconcolor="success-100"
          backgroundcolor="success-100"
          icon="checkmark"
          background="opaque"
        ></wui-icon-box>
      </wui-flex>`}};va.styles=[O,ef];fu([c({type:Array})],va.prototype,"walletImages",void 0);va=fu([f("wui-all-wallets-image")],va);const tf=b`
  :host {
    width: var(--local-width);
    position: relative;
  }

  button {
    border: none;
    border-radius: var(--local-border-radius);
    width: var(--local-width);
    white-space: nowrap;
  }

  /* -- Sizes --------------------------------------------------- */
  button[data-size='md'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-l);
    height: 36px;
  }

  button[data-size='md'][data-icon-left='true'][data-icon-right='false'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-s);
  }

  button[data-size='md'][data-icon-right='true'][data-icon-left='false'] {
    padding: 8.2px var(--wui-spacing-s) 9px var(--wui-spacing-l);
  }

  button[data-size='lg'] {
    padding: var(--wui-spacing-m) var(--wui-spacing-2l);
    height: 48px;
  }

  /* -- Variants --------------------------------------------------------- */
  button[data-variant='main'] {
    background-color: var(--wui-color-accent-100);
    color: var(--wui-color-inverse-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='inverse'] {
    background-color: var(--wui-color-inverse-100);
    color: var(--wui-color-inverse-000);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='accent'] {
    background-color: var(--wui-color-accent-glass-010);
    color: var(--wui-color-accent-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  button[data-variant='accent-error'] {
    background: var(--wui-color-error-glass-015);
    color: var(--wui-color-error-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-error-glass-010);
  }

  button[data-variant='accent-success'] {
    background: var(--wui-color-success-glass-015);
    color: var(--wui-color-success-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-success-glass-010);
  }

  button[data-variant='neutral'] {
    background: transparent;
    color: var(--wui-color-fg-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  /* -- Focus states --------------------------------------------------- */
  button[data-variant='main']:focus-visible:enabled {
    background-color: var(--wui-color-accent-090);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='inverse']:focus-visible:enabled {
    background-color: var(--wui-color-inverse-100);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-gray-glass-010),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='accent']:focus-visible:enabled {
    background-color: var(--wui-color-accent-glass-010);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='accent-error']:focus-visible:enabled {
    background: var(--wui-color-error-glass-015);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-error-100),
      0 0 0 4px var(--wui-color-error-glass-020);
  }
  button[data-variant='accent-success']:focus-visible:enabled {
    background: var(--wui-color-success-glass-015);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-success-100),
      0 0 0 4px var(--wui-color-success-glass-020);
  }
  button[data-variant='neutral']:focus-visible:enabled {
    background: var(--wui-color-gray-glass-005);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-gray-glass-010),
      0 0 0 4px var(--wui-color-gray-glass-002);
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  @media (hover: hover) and (pointer: fine) {
    button[data-variant='main']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='main']:active:enabled {
      background-color: var(--wui-color-accent-080);
    }

    button[data-variant='accent']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }

    button[data-variant='accent']:active:enabled {
      background-color: var(--wui-color-accent-glass-020);
    }

    button[data-variant='accent-error']:hover:enabled {
      background: var(--wui-color-error-glass-020);
      color: var(--wui-color-error-100);
    }

    button[data-variant='accent-error']:active:enabled {
      background: var(--wui-color-error-glass-030);
      color: var(--wui-color-error-100);
    }

    button[data-variant='accent-success']:hover:enabled {
      background: var(--wui-color-success-glass-020);
      color: var(--wui-color-success-100);
    }

    button[data-variant='accent-success']:active:enabled {
      background: var(--wui-color-success-glass-030);
      color: var(--wui-color-success-100);
    }

    button[data-variant='neutral']:hover:enabled {
      background: var(--wui-color-gray-glass-002);
    }

    button[data-variant='neutral']:active:enabled {
      background: var(--wui-color-gray-glass-005);
    }

    button[data-size='lg'][data-icon-left='true'][data-icon-right='false'] {
      padding-left: var(--wui-spacing-m);
    }

    button[data-size='lg'][data-icon-right='true'][data-icon-left='false'] {
      padding-right: var(--wui-spacing-m);
    }
  }

  /* -- Disabled state --------------------------------------------------- */
  button:disabled {
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    color: var(--wui-color-gray-glass-020);
    cursor: not-allowed;
  }

  button > wui-text {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  ::slotted(*) {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  wui-loading-spinner {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    opacity: var(--local-opacity-000);
  }
`;var ai=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};const dc={main:"inverse-100",inverse:"inverse-000",accent:"accent-100","accent-error":"error-100","accent-success":"success-100",neutral:"fg-100",disabled:"gray-glass-020"},nf={lg:"paragraph-600",md:"small-600"},rf={lg:"md",md:"md"};let Tt=class extends w{constructor(){super(...arguments),this.size="lg",this.disabled=!1,this.fullWidth=!1,this.loading=!1,this.variant="main",this.hasIconLeft=!1,this.hasIconRight=!1,this.borderRadius="m"}render(){this.style.cssText=`
    --local-width: ${this.fullWidth?"100%":"auto"};
    --local-opacity-100: ${this.loading?0:1};
    --local-opacity-000: ${this.loading?1:0};
    --local-border-radius: var(--wui-border-radius-${this.borderRadius});
    `;const e=this.textVariant??nf[this.size];return l`
      <button
        data-variant=${this.variant}
        data-icon-left=${this.hasIconLeft}
        data-icon-right=${this.hasIconRight}
        data-size=${this.size}
        ?disabled=${this.disabled}
        ontouchstart
      >
        ${this.loadingTemplate()}
        <slot name="iconLeft" @slotchange=${()=>this.handleSlotLeftChange()}></slot>
        <wui-text variant=${e} color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight" @slotchange=${()=>this.handleSlotRightChange()}></slot>
      </button>
    `}handleSlotLeftChange(){this.hasIconLeft=!0}handleSlotRightChange(){this.hasIconRight=!0}loadingTemplate(){if(this.loading){const e=rf[this.size],t=this.disabled?dc.disabled:dc[this.variant];return l`<wui-loading-spinner color=${t} size=${e}></wui-loading-spinner>`}return l``}};Tt.styles=[O,Q,tf];ai([c()],Tt.prototype,"size",void 0);ai([c({type:Boolean})],Tt.prototype,"disabled",void 0);ai([c({type:Boolean})],Tt.prototype,"fullWidth",void 0);ai([c({type:Boolean})],Tt.prototype,"loading",void 0);ai([c()],Tt.prototype,"variant",void 0);ai([c({type:Boolean})],Tt.prototype,"hasIconLeft",void 0);ai([c({type:Boolean})],Tt.prototype,"hasIconRight",void 0);ai([c()],Tt.prototype,"borderRadius",void 0);ai([c()],Tt.prototype,"textVariant",void 0);Tt=ai([f("wui-button")],Tt);const wu=C`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`,of=b`
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) 10px;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--wui-path-network);
    clip-path: var(--wui-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: var(--wui-color-gray-glass-010);
    stroke-width: 1px;
  }
`;var gu=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let ba=class extends w{constructor(){super(...arguments),this.type="wallet"}render(){return l`
      ${this.shimmerTemplate()}
      <wui-shimmer width="56px" height="20px" borderRadius="xs"></wui-shimmer>
    `}shimmerTemplate(){return this.type==="network"?l` <wui-shimmer
          data-type=${this.type}
          width="48px"
          height="54px"
          borderRadius="xs"
        ></wui-shimmer>
        ${wu}`:l`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}};ba.styles=[O,Q,of];gu([c()],ba.prototype,"type",void 0);ba=gu([f("wui-card-select-loader")],ba);const af=C`
  <svg fill="none" viewBox="0 0 36 40">
    <path
      d="M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z"
    />
  </svg>
`,sf=C`<svg width="86" height="96" fill="none">
  <path
    d="M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z"
  />
</svg>`,lf=b`
  :host {
    position: relative;
    border-radius: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-width);
    height: var(--local-height);
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    fill: var(--wui-color-gray-glass-002);
  }

  svg > path {
    stroke: var(--local-stroke);
  }

  wui-image {
    width: 100%;
    height: 100%;
    -webkit-clip-path: var(--local-path);
    clip-path: var(--local-path);
    background: var(--wui-color-gray-glass-002);
  }

  wui-icon {
    transform: translateY(-5%);
    width: var(--local-icon-size);
    height: var(--local-icon-size);
  }
`;var Do=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Tn=class extends w{constructor(){super(...arguments),this.size="md",this.name="uknown",this.selected=!1}render(){const e={sm:af,md:wu,lg:sf};return this.style.cssText=`
      --local-stroke: ${this.selected?"var(--wui-color-accent-100)":"var(--wui-color-gray-glass-010)"};
      --local-path: var(--wui-path-network-${this.size});
      --local-width:  var(--wui-width-network-${this.size});
      --local-height:  var(--wui-height-network-${this.size});
      --local-icon-size:  var(--wui-icon-size-network-${this.size});
    `,l`${this.templateVisual()} ${e[this.size]}`}templateVisual(){return this.imageSrc?l`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:l`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};Tn.styles=[O,lf];Do([c()],Tn.prototype,"size",void 0);Do([c()],Tn.prototype,"name",void 0);Do([c()],Tn.prototype,"imageSrc",void 0);Do([c({type:Boolean})],Tn.prototype,"selected",void 0);Tn=Do([f("wui-network-image")],Tn);const cf=b`
  button {
    flex-direction: column;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) var(--wui-spacing-0);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
  }

  button > wui-text {
    color: var(--wui-color-fg-100);
    max-width: var(--wui-icon-box-size-xl);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button:disabled > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  [data-selected='true'] {
    background-color: var(--wui-color-accent-glass-020);
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }
  }

  [data-selected='true']:active:enabled {
    background-color: var(--wui-color-accent-glass-010);
  }
`;var zn=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let vi=class extends w{constructor(){super(...arguments),this.name="Unknown",this.type="wallet",this.imageSrc=void 0,this.disabled=!1,this.selected=!1,this.installed=!1}render(){return l`
      <button data-selected=${$(this.selected)} ?disabled=${this.disabled} ontouchstart>
        ${this.imageTemplate()}
        <wui-text variant="tiny-500" color=${this.selected?"accent-100":"inherit"}>
          ${this.name}
        </wui-text>
      </button>
    `}imageTemplate(){return this.type==="network"?l`
        <wui-network-image
          .selected=${this.selected}
          imageSrc=${$(this.imageSrc)}
          name=${this.name}
        >
        </wui-network-image>
      `:l`
      <wui-wallet-image
        size="md"
        imageSrc=${$(this.imageSrc)}
        name=${this.name}
        .installed=${this.installed}
        badgeSize="sm"
      >
      </wui-wallet-image>
    `}};vi.styles=[O,Q,cf];zn([c()],vi.prototype,"name",void 0);zn([c()],vi.prototype,"type",void 0);zn([c()],vi.prototype,"imageSrc",void 0);zn([c({type:Boolean})],vi.prototype,"disabled",void 0);zn([c({type:Boolean})],vi.prototype,"selected",void 0);zn([c({type:Boolean})],vi.prototype,"installed",void 0);vi=zn([f("wui-card-select")],vi);const uf=b`
  a {
    border: 1px solid var(--wui-color-gray-glass-010);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  a.disabled > wui-icon,
  a.disabled > wui-image {
    filter: grayscale(1);
  }

  a[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  a[data-variant='shade'],
  a[data-variant='shadeSmall'] {
    background-color: transparent;
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  a[data-variant='success'] {
    column-gap: var(--wui-spacing-xxs);
    border: 1px solid var(--wui-color-success-glass-010);
    background-color: var(--wui-color-success-glass-010);
    color: var(--wui-color-success-100);
  }

  a[data-variant='error'] {
    column-gap: var(--wui-spacing-xxs);
    border: 1px solid var(--wui-color-error-glass-010);
    background-color: var(--wui-color-error-glass-010);
    color: var(--wui-color-error-100);
  }

  a[data-variant='transparent'] {
    column-gap: var(--wui-spacing-xxs);
    background-color: transparent;
    color: var(--wui-color-fg-150);
  }

  a[data-variant='transparent'],
  a[data-variant='success'],
  a[data-variant='shadeSmall'],
  a[data-variant='error'] {
    padding: 7px var(--wui-spacing-s) 7px 10px;
  }

  a[data-variant='transparent']:has(wui-text:first-child),
  a[data-variant='success']:has(wui-text:first-child),
  a[data-variant='shadeSmall']:has(wui-text:first-child),
  a[data-variant='error']:has(wui-text:first-child) {
    padding: 7px var(--wui-spacing-s);
  }

  a[data-variant='fill'],
  a[data-variant='shade'] {
    column-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-xxs)
      var(--wui-spacing-xs);
  }

  a[data-variant='fill']:has(wui-text:first-child),
  a[data-variant='shade']:has(wui-text:first-child) {
    padding: 9px var(--wui-spacing-m) 9px var(--wui-spacing-m);
  }

  a[data-variant='fill'] > wui-image,
  a[data-variant='shade'] > wui-image {
    width: 24px;
    height: 24px;
  }

  a[data-variant='fill'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-accent-090);
  }

  a[data-variant='shade'] > wui-image,
  a[data-variant='shadeSmall'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  a[data-variant='fill'] > wui-icon,
  a[data-variant='shade'] > wui-icon {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-image,
  a[data-variant='success'] > wui-image,
  a[data-variant='shadeSmall'] > wui-image,
  a[data-variant='error'] > wui-image {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-icon,
  a[data-variant='success'] > wui-icon,
  a[data-variant='shadeSmall'] > wui-icon,
  a[data-variant='error'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  a[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  a[data-variant='shade']:focus-visible,
  a[data-variant='shadeSmall']:focus-visible {
    background-color: var(--wui-color-gray-glass-015);
  }

  a[data-variant='transparent']:focus-visible {
    background-color: var(--wui-color-gray-glass-005);
  }

  a[data-variant='success']:focus-visible {
    background-color: var(--wui-color-success-glass-015);
  }

  a[data-variant='error']:focus-visible {
    background-color: var(--wui-color-error-glass-015);
  }

  a.disabled {
    color: var(--wui-color-gray-glass-015);
    background-color: var(--wui-color-gray-glass-015);
    pointer-events: none;
  }

  @media (hover: hover) and (pointer: fine) {
    a[data-variant='fill']:hover {
      background-color: var(--wui-color-accent-090);
    }

    a[data-variant='shade']:hover,
    a[data-variant='shadeSmall']:hover {
      background-color: var(--wui-color-gray-glass-015);
    }

    a[data-variant='transparent']:hover {
      background-color: var(--wui-color-gray-glass-005);
    }

    a[data-variant='success']:hover {
      background-color: var(--wui-color-success-glass-015);
    }

    a[data-variant='error']:hover {
      background-color: var(--wui-color-error-glass-015);
    }
  }

  a[data-variant='fill']:active {
    background-color: var(--wui-color-accent-080);
  }

  a[data-variant='shade']:active,
  a[data-variant='shadeSmall']:active {
    background-color: var(--wui-color-gray-glass-020);
  }

  a[data-variant='transparent']:active {
    background-color: var(--wui-color-gray-glass-010);
  }

  a[data-variant='success']:active {
    background-color: var(--wui-color-success-glass-020);
  }

  a[data-variant='error']:active {
    background-color: var(--wui-color-error-glass-020);
  }
`;var Vn=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let bi=class extends w{constructor(){super(...arguments),this.variant="fill",this.imageSrc=void 0,this.disabled=!1,this.icon="externalLink",this.href="",this.text=void 0}render(){const t=this.variant==="success"||this.variant==="transparent"||this.variant==="shadeSmall"?"small-600":"paragraph-600";return l`
      <a
        rel="noreferrer"
        target="_blank"
        href=${this.href}
        class=${this.disabled?"disabled":""}
        data-variant=${this.variant}
      >
        ${this.imageTemplate()}
        <wui-text variant=${t} color="inherit">
          ${this.title?this.title:H.getHostName(this.href)}
        </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </a>
    `}imageTemplate(){return this.imageSrc?l`<wui-image src=${this.imageSrc}></wui-image>`:null}};bi.styles=[O,Q,uf];Vn([c()],bi.prototype,"variant",void 0);Vn([c()],bi.prototype,"imageSrc",void 0);Vn([c({type:Boolean})],bi.prototype,"disabled",void 0);Vn([c()],bi.prototype,"icon",void 0);Vn([c()],bi.prototype,"href",void 0);Vn([c()],bi.prototype,"text",void 0);bi=Vn([f("wui-chip")],bi);const df=b`
  :host {
    position: relative;
    display: block;
  }

  button {
    background: var(--wui-color-accent-100);
    border: 1px solid var(--wui-color-gray-glass-010);
    border-radius: var(--wui-border-radius-m);
    gap: var(--wui-spacing-xs);
  }

  button.loading {
    background: var(--wui-color-gray-glass-010);
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    border: 1px solid var(--wui-color-gray-glass-010);
  }

  button:disabled > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button:active:enabled {
      background-color: var(--wui-color-accent-080);
    }
  }

  button:focus-visible {
    border: 1px solid var(--wui-color-gray-glass-010);
    background-color: var(--wui-color-accent-090);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-size='sm'] {
    padding: 6.75px 10px 7.25px;
  }

  ::slotted(*) {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  button > wui-text {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
    color: var(--wui-color-inverse-100);
  }

  button[data-size='md'] {
    padding: 9px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  button[data-size='md'] + wui-text {
    padding-left: var(--wui-spacing-3xs);
  }

  @media (max-width: 500px) {
    button[data-size='md'] {
      height: 32px;
      padding: 5px 12px;
    }

    button[data-size='md'] > wui-text > slot {
      font-size: 14px !important;
    }
  }

  wui-loading-spinner {
    width: 14px;
    height: 14px;
  }

  wui-loading-spinner::slotted(svg) {
    width: 10px !important;
    height: 10px !important;
  }

  button[data-size='sm'] > wui-loading-spinner {
    width: 12px;
    height: 12px;
  }
`;var fl=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let lo=class extends w{constructor(){super(...arguments),this.size="md",this.loading=!1}render(){const e=this.size==="md"?"paragraph-600":"small-600";return l`
      <button data-size=${this.size} ?disabled=${this.loading} ontouchstart>
        ${this.loadingTemplate()}
        <wui-text variant=${e} color=${this.loading?"accent-100":"inherit"}>
          <slot></slot>
        </wui-text>
      </button>
    `}loadingTemplate(){return this.loading?l`<wui-loading-spinner size=${this.size} color="accent-100"></wui-loading-spinner>`:null}};lo.styles=[O,Q,df];fl([c()],lo.prototype,"size",void 0);fl([c({type:Boolean})],lo.prototype,"loading",void 0);lo=fl([f("wui-connect-button")],lo);const pf=b`
  wui-flex {
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;var Xa=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let hr=class extends w{constructor(){super(...arguments),this.disabled=!1,this.label="",this.buttonLabel=""}render(){return l`
      <wui-flex
        justifyContent="space-between"
        alignItems="center"
        .padding=${["1xs","2l","1xs","2l"]}
      >
        <wui-text variant="paragraph-500" color="fg-200">${this.label}</wui-text>
        <wui-chip-button size="sm" variant="shade" text=${this.buttonLabel} icon="chevronRight">
        </wui-chip-button>
      </wui-flex>
    `}};hr.styles=[O,Q,pf];Xa([c({type:Boolean})],hr.prototype,"disabled",void 0);Xa([c()],hr.prototype,"label",void 0);Xa([c()],hr.prototype,"buttonLabel",void 0);hr=Xa([f("wui-cta-button")],hr);const hf=b`
  :host {
    display: block;
    padding: var(--wui-spacing-l) var(--wui-spacing-m);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    width: 100%;
  }
`;var ff=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Ds=class extends w{render(){return l`
      <wui-flex gap="xl" flexDirection="column" justifyContent="space-between" alignItems="center">
        <slot></slot>
      </wui-flex>
    `}};Ds.styles=[O,Q,hf];Ds=ff([f("wui-details-group")],Ds);const wf=b`
  :host {
    display: flex;
    flex-direction: row;
    gap: var(--wui-spacing-l);
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
  }
`;var mu=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let xa=class extends w{constructor(){super(...arguments),this.name=""}render(){return l`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color="fg-200">${this.name}</wui-text>
        <wui-flex gap="xs" alignItems="center">
          <slot></slot>
        </wui-flex>
      </wui-flex>
    `}};xa.styles=[O,Q,wf];mu([c()],xa.prototype,"name",void 0);xa=mu([f("wui-details-group-item")],xa);const gf=b`
  :host {
    z-index: calc(var(--w3m-z-index) + 1);
    width: 200px;
    padding: var(--wui-spacing-3xs);
    align-items: center;
    display: inherit;
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-color-gray-glass-002);
    background: var(--wui-color-fg-base-125);
    /* Dark/Elevation/L */
    box-shadow:
      0px 8px 22px -6px rgba(0, 0, 0, 0.12),
      0px 14px 64px -4px rgba(0, 0, 0, 0.12);
  }
`;var wl=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let co=class extends w{constructor(){super(...arguments),this.actions=[],this.isOpen=!1}render(){return this.isOpen?l`
      <wui-flex flexDirection="column" gap="4xs">
        ${this.actions.map(e=>l`
            <wui-list-item
              icon=${e.icon}
              iconSize="sm"
              variant="icon"
              @click=${e.onClick}
            >
              <wui-text variant="small-400" color="fg-100">${e.label}</wui-text>
            </wui-list-item>
          `)}
      </wui-flex>
    `:null}};co.styles=[O,Q,gf];wl([c({type:Array})],co.prototype,"actions",void 0);wl([c({type:Boolean})],co.prototype,"isOpen",void 0);co=wl([f("wui-dropdown-menu")],co);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const mf=i=>i.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Hr=(i,e)=>{var r;const t=i._$AN;if(t===void 0)return!1;for(const o of t)(r=o._$AO)==null||r.call(o,e,!1),Hr(o,e);return!0},ya=i=>{let e,t;do{if((e=i._$AM)===void 0)break;t=e._$AN,t.delete(i),i=e}while((t==null?void 0:t.size)===0)},vu=i=>{for(let e;e=i._$AM;i=e){let t=e._$AN;if(t===void 0)e._$AN=t=new Set;else if(t.has(i))break;t.add(i),xf(e)}};function vf(i){this._$AN!==void 0?(ya(this),this._$AM=i,vu(this)):this._$AM=i}function bf(i,e=!1,t=0){const r=this._$AH,o=this._$AN;if(o!==void 0&&o.size!==0)if(e)if(Array.isArray(r))for(let n=t;n<r.length;n++)Hr(r[n],!1),ya(r[n]);else r!=null&&(Hr(r,!1),ya(r));else Hr(this,i)}const xf=i=>{i.type==uu.CHILD&&(i._$AP??(i._$AP=bf),i._$AQ??(i._$AQ=vf))};class yf extends pu{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,r){super._$AT(e,t,r),vu(this),this.isConnected=e._$AU}_$AO(e,t=!0){var r,o;e!==this.isConnected&&(this.isConnected=e,e?(r=this.reconnected)==null||r.call(this):(o=this.disconnected)==null||o.call(this)),t&&(Hr(this,e),ya(this))}setValue(e){if(mf(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const zi=()=>new Cf;class Cf{}const _s=new WeakMap,Vi=du(class extends yf{render(i){return Ne}update(i,[e]){var r;const t=e!==this.Y;return t&&this.Y!==void 0&&this.rt(void 0),(t||this.lt!==this.ct)&&(this.Y=e,this.ht=(r=i.options)==null?void 0:r.host,this.rt(this.ct=i.element)),Ne}rt(i){if(this.isConnected||(i=void 0),typeof this.Y=="function"){const e=this.ht??globalThis;let t=_s.get(e);t===void 0&&(t=new WeakMap,_s.set(e,t)),t.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),t.set(this.Y,i),i!==void 0&&this.Y.call(this.ht,i)}else this.Y.value=i}get lt(){var i,e;return typeof this.Y=="function"?(i=_s.get(this.ht??globalThis))==null?void 0:i.get(this.Y):(e=this.Y)==null?void 0:e.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),_f=b`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
    color: var(--wui-color-fg-275);
  }

  input {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    background: var(--wui-color-gray-glass-002);
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
    color: var(--wui-color-fg-100);
    transition:
      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      border-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      box-shadow var(--wui-ease-inout-power-1) var(--wui-duration-md);
    will-change: background-color, border-color, box-shadow;
    caret-color: var(--wui-color-accent-100);
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-color-gray-glass-010);
  }

  input:disabled::placeholder,
  input:disabled + wui-icon {
    color: var(--wui-color-fg-300);
  }

  input::placeholder {
    color: var(--wui-color-fg-275);
  }

  input:focus:enabled {
    background-color: var(--wui-color-gray-glass-005);
    -webkit-box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  input:hover:enabled {
    background-color: var(--wui-color-gray-glass-005);
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }

  .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px var(--wui-spacing-s);
  }

  wui-icon + .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px 36px;
  }

  wui-icon[data-input='sm'] {
    left: var(--wui-spacing-s);
  }

  .wui-size-md {
    padding: 15px var(--wui-spacing-m) var(--wui-spacing-l) var(--wui-spacing-m);
  }

  wui-icon + .wui-size-md,
  wui-loading-spinner + .wui-size-md {
    padding: 10.5px var(--wui-spacing-3xl) 10.5px var(--wui-spacing-3xl);
  }

  wui-icon[data-input='md'] {
    left: var(--wui-spacing-l);
  }

  .wui-size-lg {
    padding: var(--wui-spacing-s) var(--wui-spacing-s) var(--wui-spacing-s) var(--wui-spacing-l);
    letter-spacing: var(--wui-letter-spacing-medium-title);
    font-size: var(--wui-font-size-medium-title);
    font-weight: var(--wui-font-weight-light);
    line-height: 130%;
    color: var(--wui-color-fg-100);
    height: 64px;
  }

  .wui-padding-right-xs {
    padding-right: var(--wui-spacing-xs);
  }

  .wui-padding-right-s {
    padding-right: var(--wui-spacing-s);
  }

  .wui-padding-right-m {
    padding-right: var(--wui-spacing-m);
  }

  .wui-padding-right-l {
    padding-right: var(--wui-spacing-l);
  }

  .wui-padding-right-xl {
    padding-right: var(--wui-spacing-xl);
  }

  .wui-padding-right-2xl {
    padding-right: var(--wui-spacing-2xl);
  }

  .wui-padding-right-3xl {
    padding-right: var(--wui-spacing-3xl);
  }

  .wui-padding-right-4xl {
    padding-right: var(--wui-spacing-4xl);
  }

  .wui-padding-right-5xl {
    padding-right: var(--wui-spacing-5xl);
  }

  wui-icon + .wui-size-lg,
  wui-loading-spinner + .wui-size-lg {
    padding-left: 50px;
  }

  wui-icon[data-input='lg'] {
    left: var(--wui-spacing-l);
  }

  .wui-size-mdl {
    padding: 17.25px var(--wui-spacing-m) 17.25px var(--wui-spacing-m);
  }
  wui-icon + .wui-size-mdl,
  wui-loading-spinner + .wui-size-mdl {
    padding: 17.25px var(--wui-spacing-3xl) 17.25px 40px;
  }
  wui-icon[data-input='mdl'] {
    left: var(--wui-spacing-m);
  }

  input:placeholder-shown ~ ::slotted(wui-input-element),
  input:placeholder-shown ~ ::slotted(wui-icon) {
    opacity: 0;
    pointer-events: none;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  ::slotted(wui-input-element),
  ::slotted(wui-icon) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  ::slotted(wui-input-element) {
    right: var(--wui-spacing-m);
  }

  ::slotted(wui-icon) {
    right: 0px;
  }
`;var Ei=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Ut=class extends w{constructor(){super(...arguments),this.inputElementRef=zi(),this.size="md",this.disabled=!1,this.placeholder="",this.type="text",this.value=""}render(){const e=`wui-padding-right-${this.inputRightPadding}`,r={[`wui-size-${this.size}`]:!0,[e]:!!this.inputRightPadding};return l`${this.templateIcon()}
      <input
        data-testid="wui-input-text"
        ${Vi(this.inputElementRef)}
        class=${hu(r)}
        type=${this.type}
        enterkeyhint=${$(this.enterKeyHint)}
        ?disabled=${this.disabled}
        placeholder=${this.placeholder}
        @input=${this.dispatchInputChangeEvent.bind(this)}
        .value=${this.value||""}
      />
      <slot></slot>`}templateIcon(){return this.icon?l`<wui-icon
        data-input=${this.size}
        size=${this.size}
        color="inherit"
        name=${this.icon}
      ></wui-icon>`:null}dispatchInputChangeEvent(){var e;this.dispatchEvent(new CustomEvent("inputChange",{detail:(e=this.inputElementRef.value)==null?void 0:e.value,bubbles:!0,composed:!0}))}};Ut.styles=[O,Q,_f];Ei([c()],Ut.prototype,"size",void 0);Ei([c()],Ut.prototype,"icon",void 0);Ei([c({type:Boolean})],Ut.prototype,"disabled",void 0);Ei([c()],Ut.prototype,"placeholder",void 0);Ei([c()],Ut.prototype,"type",void 0);Ei([c()],Ut.prototype,"keyHint",void 0);Ei([c()],Ut.prototype,"value",void 0);Ei([c()],Ut.prototype,"inputRightPadding",void 0);Ut=Ei([f("wui-input-text")],Ut);const Tf=b`
  :host {
    position: relative;
    display: inline-block;
  }

  wui-text {
    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);
  }
`;var Qa=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let fr=class extends w{constructor(){super(...arguments),this.disabled=!1}render(){return l`
      <wui-input-text
        placeholder="Email"
        icon="mail"
        size="mdl"
        .disabled=${this.disabled}
        .value=${this.value}
        data-testid="wui-email-input"
      ></wui-input-text>
      ${this.templateError()}
    `}templateError(){return this.errorMessage?l`<wui-text variant="tiny-500" color="error-100">${this.errorMessage}</wui-text>`:null}};fr.styles=[O,Tf];Qa([c()],fr.prototype,"errorMessage",void 0);Qa([c({type:Boolean})],fr.prototype,"disabled",void 0);Qa([c()],fr.prototype,"value",void 0);fr=Qa([f("wui-email-input")],fr);const kf=b`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
    color: var(--wui-color-fg-275);
  }

  .error {
    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);
  }

  .base-name {
    position: absolute;
    right: 45px;
    top: 15px;
    text-align: right;
  }
`;var Uo=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let kn=class extends w{constructor(){super(...arguments),this.disabled=!1,this.loading=!1}render(){return l`
      <wui-input-text
        value=${$(this.value)}
        ?disabled=${this.disabled}
        .value=${this.value||""}
        data-testId="wui-ens-input"
        inputRightPadding="5xl"
      >
        ${this.baseNameTemplate()} ${this.errorTemplate()}${this.loadingTemplate()}
      </wui-input-text>
    `}baseNameTemplate(){return l`<wui-text variant="paragraph-400" color="fg-200" class="base-name">
      ${Ee.WC_NAME_SUFFIX}
    </wui-text>`}loadingTemplate(){return this.loading?l`<wui-loading-spinner size="md" color="accent-100"></wui-loading-spinner>`:null}errorTemplate(){return this.errorMessage?l`<wui-text variant="tiny-500" color="error-100" class="error"
        >${this.errorMessage}</wui-text
      >`:null}};kn.styles=[O,kf];Uo([c()],kn.prototype,"errorMessage",void 0);Uo([c({type:Boolean})],kn.prototype,"disabled",void 0);Uo([c()],kn.prototype,"value",void 0);Uo([c({type:Boolean})],kn.prototype,"loading",void 0);kn=Uo([f("wui-ens-input")],kn);const Sf=b`
  button {
    border-radius: var(--local-border-radius);
    color: var(--wui-color-fg-100);
    padding: var(--local-padding);
  }

  @media (max-width: 700px) {
    button {
      padding: var(--wui-spacing-s);
    }
  }

  button > wui-icon {
    pointer-events: none;
  }

  button:disabled > wui-icon {
    color: var(--wui-color-bg-300) !important;
  }

  button:disabled {
    background-color: transparent;
  }
`;var Wo=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Sn=class extends w{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="inherit"}render(){const e=this.size==="lg"?"--wui-border-radius-xs":"--wui-border-radius-xxs",t=this.size==="lg"?"--wui-spacing-1xs":"--wui-spacing-2xs";return this.style.cssText=`
    --local-border-radius: var(${e});
    --local-padding: var(${t});
`,l`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-icon color=${this.iconColor} size=${this.size} name=${this.icon}></wui-icon>
      </button>
    `}};Sn.styles=[O,Q,dl,Sf];Wo([c()],Sn.prototype,"size",void 0);Wo([c({type:Boolean})],Sn.prototype,"disabled",void 0);Wo([c()],Sn.prototype,"icon",void 0);Wo([c()],Sn.prototype,"iconColor",void 0);Sn=Wo([f("wui-icon-link")],Sn);const Af=b`
  button {
    background-color: var(--wui-color-fg-300);
    border-radius: var(--wui-border-radius-4xs);
    width: 16px;
    height: 16px;
  }

  button:disabled {
    background-color: var(--wui-color-bg-300);
  }

  wui-icon {
    color: var(--wui-color-bg-200) !important;
  }

  button:focus-visible {
    background-color: var(--wui-color-fg-250);
    border: 1px solid var(--wui-color-accent-100);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-fg-250);
    }

    button:active:enabled {
      background-color: var(--wui-color-fg-225);
    }
  }
`;var bu=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Ca=class extends w{constructor(){super(...arguments),this.icon="copy"}render(){return l`
      <button>
        <wui-icon color="inherit" size="xxs" name=${this.icon}></wui-icon>
      </button>
    `}};Ca.styles=[O,Q,Af];bu([c()],Ca.prototype,"icon",void 0);Ca=bu([f("wui-input-element")],Ca);const Ef=b`
  :host {
    position: relative;
    display: inline-block;
  }

  input {
    width: 50px;
    height: 50px;
    background: var(--wui-color-gray-glass-010);
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-color-gray-glass-005);
    font-family: var(--wui-font-family);
    font-size: var(--wui-font-size-large);
    font-weight: var(--wui-font-weight-regular);
    letter-spacing: var(--wui-letter-spacing-large);
    text-align: center;
    color: var(--wui-color-fg-100);
    caret-color: var(--wui-color-accent-100);
    transition:
      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      border-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      box-shadow var(--wui-ease-inout-power-1) var(--wui-duration-md);
    will-change: background-color, border-color, box-shadow;
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-color-gray-glass-010);
    background: var(--wui-color-gray-glass-005);
  }

  input:focus:enabled {
    background-color: var(--wui-color-gray-glass-015);
    border: 1px solid var(--wui-color-accent-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  @media (hover: hover) and (pointer: fine) {
    input:hover:enabled {
      background-color: var(--wui-color-gray-glass-015);
    }
  }
`;var gl=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let uo=class extends w{constructor(){super(...arguments),this.disabled=!1,this.value=""}render(){return l`<input
      type="number"
      maxlength="1"
      inputmode="numeric"
      autofocus
      ?disabled=${this.disabled}
      value=${this.value}
    /> `}};uo.styles=[O,Q,Ef];gl([c({type:Boolean})],uo.prototype,"disabled",void 0);gl([c({type:String})],uo.prototype,"value",void 0);uo=gl([f("wui-input-numeric")],uo);const $f=b`
  button {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
    border-radius: var(--wui-border-radius-3xs);
    background-color: transparent;
    color: var(--wui-color-accent-100);
  }

  button:disabled {
    background-color: transparent;
    color: var(--wui-color-gray-glass-015);
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-005);
  }
`;var ml=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let po=class extends w{constructor(){super(...arguments),this.disabled=!1,this.color="inherit"}render(){return l`
      <button ?disabled=${this.disabled} ontouchstart>
        <slot name="iconLeft"></slot>
        <wui-text variant="small-600" color=${this.color}>
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}};po.styles=[O,Q,$f];ml([c({type:Boolean})],po.prototype,"disabled",void 0);ml([c()],po.prototype,"color",void 0);po=ml([f("wui-link")],po);const Rf=b`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 11px 18px 11px var(--wui-spacing-s);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
    transition:
      color var(--wui-ease-out-power-1) var(--wui-duration-md),
      background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: color, background-color;
  }

  button[data-iconvariant='square'],
  button[data-iconvariant='square-blue'] {
    padding: 6px 18px 6px 9px;
  }

  button > wui-flex {
    flex: 1;
  }

  button > wui-image {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }

  button > wui-icon {
    width: 36px;
    height: 36px;
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
  }

  button > wui-icon-box[data-variant='blue'] {
    box-shadow: 0 0 0 2px var(--wui-color-accent-glass-005);
  }

  button > wui-icon-box[data-variant='overlay'] {
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  button > wui-icon-box[data-variant='square-blue'] {
    border-radius: var(--wui-border-radius-3xs);
    position: relative;
    border: none;
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='square-blue']::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-accent-glass-010);
    pointer-events: none;
  }

  button > wui-icon:last-child {
    width: 14px;
    height: 14px;
  }

  button:disabled {
    color: var(--wui-color-gray-glass-020);
  }

  button[data-loading='true'] > wui-icon {
    opacity: 0;
  }

  wui-loading-spinner {
    position: absolute;
    right: 18px;
    top: 50%;
    transform: translateY(-50%);
  }
`;var si=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let kt=class extends w{constructor(){super(...arguments),this.variant="icon",this.disabled=!1,this.imageSrc=void 0,this.alt=void 0,this.chevron=!1,this.loading=!1}render(){return l`
      <button
        ?disabled=${this.loading?!0:!!this.disabled}
        data-loading=${this.loading}
        data-iconvariant=${$(this.iconVariant)}
        ontouchstart
      >
        ${this.loadingTemplate()} ${this.visualTemplate()}
        <wui-flex gap="3xs">
          <slot></slot>
        </wui-flex>
        ${this.chevronTemplate()}
      </button>
    `}visualTemplate(){if(this.variant==="image"&&this.imageSrc)return l`<wui-image src=${this.imageSrc} alt=${this.alt??"list item"}></wui-image>`;if(this.iconVariant==="square"&&this.icon&&this.variant==="icon")return l`<wui-icon name=${this.icon}></wui-icon>`;if(this.variant==="icon"&&this.icon&&this.iconVariant){const e=["blue","square-blue"].includes(this.iconVariant)?"accent-100":"fg-200",t=this.iconVariant==="square-blue"?"mdl":"md",r=this.iconSize?this.iconSize:t;return l`
        <wui-icon-box
          data-variant=${this.iconVariant}
          icon=${this.icon}
          iconSize=${r}
          background="transparent"
          iconColor=${e}
          backgroundColor=${e}
          size=${t}
        ></wui-icon-box>
      `}return null}loadingTemplate(){return this.loading?l`<wui-loading-spinner color="fg-300"></wui-loading-spinner>`:l``}chevronTemplate(){return this.chevron?l`<wui-icon size="inherit" color="fg-200" name="chevronRight"></wui-icon>`:null}};kt.styles=[O,Q,Rf];si([c()],kt.prototype,"icon",void 0);si([c()],kt.prototype,"iconSize",void 0);si([c()],kt.prototype,"variant",void 0);si([c()],kt.prototype,"iconVariant",void 0);si([c({type:Boolean})],kt.prototype,"disabled",void 0);si([c()],kt.prototype,"imageSrc",void 0);si([c()],kt.prototype,"alt",void 0);si([c({type:Boolean})],kt.prototype,"chevron",void 0);si([c({type:Boolean})],kt.prototype,"loading",void 0);kt=si([f("wui-list-item")],kt);var Us;(function(i){i.approve="approved",i.bought="bought",i.borrow="borrowed",i.burn="burnt",i.cancel="canceled",i.claim="claimed",i.deploy="deployed",i.deposit="deposited",i.execute="executed",i.mint="minted",i.receive="received",i.repay="repaid",i.send="sent",i.sell="sold",i.stake="staked",i.trade="swapped",i.unstake="unstaked",i.withdraw="withdrawn"})(Us||(Us={}));const If=b`
  :host > wui-flex {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 40px;
    height: 40px;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-gray-glass-005);
  }

  :host > wui-flex wui-image {
    display: block;
  }

  :host > wui-flex,
  :host > wui-flex wui-image,
  .swap-images-container,
  .swap-images-container.nft,
  wui-image.nft {
    border-top-left-radius: var(--local-left-border-radius);
    border-top-right-radius: var(--local-right-border-radius);
    border-bottom-left-radius: var(--local-left-border-radius);
    border-bottom-right-radius: var(--local-right-border-radius);
  }

  wui-icon {
    width: 20px;
    height: 20px;
  }

  wui-icon-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
  }

  .swap-images-container {
    position: relative;
    width: 40px;
    height: 40px;
    overflow: hidden;
  }

  .swap-images-container wui-image:first-child {
    position: absolute;
    width: 40px;
    height: 40px;
    top: 0;
    left: 0%;
    clip-path: inset(0px calc(50% + 2px) 0px 0%);
  }

  .swap-images-container wui-image:last-child {
    clip-path: inset(0px 0px 0px calc(50% + 2px));
  }
`;var Hn=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let xi=class extends w{constructor(){super(...arguments),this.images=[],this.secondImage={type:void 0,url:""}}render(){const[e,t]=this.images,r=(e==null?void 0:e.type)==="NFT",o=t!=null&&t.url?t.type==="NFT":r,n=r?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)",a=o?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)";return this.style.cssText=`
    --local-left-border-radius: ${n};
    --local-right-border-radius: ${a};
    `,l`<wui-flex> ${this.templateVisual()} ${this.templateIcon()} </wui-flex>`}templateVisual(){const[e,t]=this.images,r=e==null?void 0:e.type;return this.images.length===2&&(e!=null&&e.url||t!=null&&t.url)?l`<div class="swap-images-container">
        ${e!=null&&e.url?l`<wui-image src=${e.url} alt="Transaction image"></wui-image>`:null}
        ${t!=null&&t.url?l`<wui-image src=${t.url} alt="Transaction image"></wui-image>`:null}
      </div>`:e!=null&&e.url?l`<wui-image src=${e.url} alt="Transaction image"></wui-image>`:r==="NFT"?l`<wui-icon size="inherit" color="fg-200" name="nftPlaceholder"></wui-icon>`:l`<wui-icon size="inherit" color="fg-200" name="coinPlaceholder"></wui-icon>`}templateIcon(){let e="accent-100",t;return t=this.getIcon(),this.status&&(e=this.getStatusColor()),t?l`
      <wui-icon-box
        size="xxs"
        iconColor=${e}
        backgroundColor=${e}
        background="opaque"
        icon=${t}
        ?border=${!0}
        borderColor="wui-color-bg-125"
      ></wui-icon-box>
    `:null}getDirectionIcon(){switch(this.direction){case"in":return"arrowBottom";case"out":return"arrowTop";default:return}}getIcon(){return this.onlyDirectionIcon?this.getDirectionIcon():this.type==="trade"?"swapHorizontalBold":this.type==="approve"?"checkmark":this.type==="cancel"?"close":this.getDirectionIcon()}getStatusColor(){switch(this.status){case"confirmed":return"success-100";case"failed":return"error-100";case"pending":return"inverse-100";default:return"accent-100"}}};xi.styles=[If];Hn([c()],xi.prototype,"type",void 0);Hn([c()],xi.prototype,"status",void 0);Hn([c()],xi.prototype,"direction",void 0);Hn([c({type:Boolean})],xi.prototype,"onlyDirectionIcon",void 0);Hn([c({type:Array})],xi.prototype,"images",void 0);Hn([c({type:Object})],xi.prototype,"secondImage",void 0);xi=Hn([f("wui-transaction-visual")],xi);const Of=b`
  :host > wui-flex:first-child {
    align-items: center;
    column-gap: var(--wui-spacing-s);
    padding: 6.5px var(--wui-spacing-xs) 6.5px var(--wui-spacing-xs);
    width: 100%;
  }

  :host > wui-flex:first-child wui-text:nth-child(1) {
    text-transform: capitalize;
  }

  wui-transaction-visual {
    width: 40px;
    height: 40px;
  }

  wui-flex {
    flex: 1;
  }

  :host wui-flex wui-flex {
    overflow: hidden;
  }

  :host .description-container wui-text span {
    word-break: break-all;
  }

  :host .description-container wui-text {
    overflow: hidden;
  }

  :host .description-separator-icon {
    margin: 0px 6px;
  }

  :host wui-text > span {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
`;var Lt=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let ct=class extends w{constructor(){super(...arguments),this.type="approve",this.onlyDirectionIcon=!1,this.images=[],this.price=[],this.amount=[],this.symbol=[]}render(){return l`
      <wui-flex>
        <wui-transaction-visual
          .status=${this.status}
          direction=${$(this.direction)}
          type=${this.type}
          onlyDirectionIcon=${$(this.onlyDirectionIcon)}
          .images=${this.images}
        ></wui-transaction-visual>
        <wui-flex flexDirection="column" gap="3xs">
          <wui-text variant="paragraph-600" color="fg-100">
            ${Us[this.type]||this.type}
          </wui-text>
          <wui-flex class="description-container">
            ${this.templateDescription()} ${this.templateSecondDescription()}
          </wui-flex>
        </wui-flex>
        <wui-text variant="micro-700" color="fg-300"><span>${this.date}</span></wui-text>
      </wui-flex>
    `}templateDescription(){var t;const e=(t=this.descriptions)==null?void 0:t[0];return e?l`
          <wui-text variant="small-500" color="fg-200">
            <span>${e}</span>
          </wui-text>
        `:null}templateSecondDescription(){var t;const e=(t=this.descriptions)==null?void 0:t[1];return e?l`
          <wui-icon class="description-separator-icon" size="xxs" name="arrowRight"></wui-icon>
          <wui-text variant="small-400" color="fg-200">
            <span>${e}</span>
          </wui-text>
        `:null}};ct.styles=[O,Of];Lt([c()],ct.prototype,"type",void 0);Lt([c({type:Array})],ct.prototype,"descriptions",void 0);Lt([c()],ct.prototype,"date",void 0);Lt([c({type:Boolean})],ct.prototype,"onlyDirectionIcon",void 0);Lt([c()],ct.prototype,"status",void 0);Lt([c()],ct.prototype,"direction",void 0);Lt([c({type:Array})],ct.prototype,"images",void 0);Lt([c({type:Array})],ct.prototype,"price",void 0);Lt([c({type:Array})],ct.prototype,"amount",void 0);Lt([c({type:Array})],ct.prototype,"symbol",void 0);ct=Lt([f("wui-transaction-list-item")],ct);const Nf=b`
  :host > wui-flex:first-child {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
  }

  wui-flex {
    display: flex;
    flex: 1;
  }
`;var Pf=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Ws=class extends w{render(){return l`
      <wui-flex alignItems="center">
        <wui-shimmer width="40px" height="40px"></wui-shimmer>
        <wui-flex flexDirection="column" gap="2xs">
          <wui-shimmer width="72px" height="16px" borderRadius="4xs"></wui-shimmer>
          <wui-shimmer width="148px" height="14px" borderRadius="4xs"></wui-shimmer>
        </wui-flex>
        <wui-shimmer width="24px" height="12px" borderRadius="5xs"></wui-shimmer>
      </wui-flex>
    `}};Ws.styles=[O,Nf];Ws=Pf([f("wui-transaction-list-item-loader")],Ws);const Df=b`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    height: var(--wui-spacing-m);
    padding: 0 var(--wui-spacing-3xs) !important;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host > wui-text {
    transform: translateY(5%);
  }

  :host([data-variant='main']) {
    background-color: var(--wui-color-accent-glass-015);
    color: var(--wui-color-accent-100);
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  :host([data-variant='success']) {
    background-color: var(--wui-icon-box-bg-success-100);
    color: var(--wui-color-success-100);
  }

  :host([data-variant='error']) {
    background-color: var(--wui-icon-box-bg-error-100);
    color: var(--wui-color-error-100);
  }

  :host([data-size='lg']) {
    padding: 11px 5px !important;
  }

  :host([data-size='lg']) > wui-text {
    transform: translateY(2%);
  }
`;var vl=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let ho=class extends w{constructor(){super(...arguments),this.variant="main",this.size="lg"}render(){this.dataset.variant=this.variant,this.dataset.size=this.size;const e=this.size==="md"?"mini-700":"micro-700";return l`
      <wui-text data-variant=${this.variant} variant=${e} color="inherit">
        <slot></slot>
      </wui-text>
    `}};ho.styles=[O,Df];vl([c()],ho.prototype,"variant",void 0);vl([c()],ho.prototype,"size",void 0);ho=vl([f("wui-tag")],ho);const Uf=b`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-tag {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-300);
  }

  wui-icon {
    color: var(--wui-color-fg-200) !important;
  }
`;var Bt=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let ut=class extends w{constructor(){super(...arguments),this.walletImages=[],this.imageSrc="",this.name="",this.installed=!1,this.disabled=!1,this.showAllWallets=!1}render(){return l`
      <button ?disabled=${this.disabled} ontouchstart>
        ${this.templateAllWallets()} ${this.templateWalletImage()}
        <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text>
        ${this.templateStatus()}
      </button>
    `}templateAllWallets(){return this.showAllWallets&&this.imageSrc?l` <wui-all-wallets-image .imageeSrc=${this.imageSrc}> </wui-all-wallets-image> `:this.showAllWallets&&this.walletIcon?l` <wui-wallet-image .walletIcon=${this.walletIcon} size="sm"> </wui-wallet-image> `:null}templateWalletImage(){return!this.showAllWallets&&this.imageSrc?l`<wui-wallet-image
        size="sm"
        imageSrc=${this.imageSrc}
        name=${this.name}
        .installed=${this.installed}
      ></wui-wallet-image>`:!this.showAllWallets&&!this.imageSrc?l`<wui-wallet-image size="sm" name=${this.name}></wui-wallet-image>`:null}templateStatus(){return this.tagLabel&&this.tagVariant?l`<wui-tag variant=${this.tagVariant}>${this.tagLabel}</wui-tag>`:this.icon?l`<wui-icon color="inherit" size="sm" name=${this.icon}></wui-icon>`:null}};ut.styles=[O,Q,Uf];Bt([c({type:Array})],ut.prototype,"walletImages",void 0);Bt([c()],ut.prototype,"imageSrc",void 0);Bt([c()],ut.prototype,"name",void 0);Bt([c()],ut.prototype,"tagLabel",void 0);Bt([c()],ut.prototype,"tagVariant",void 0);Bt([c()],ut.prototype,"icon",void 0);Bt([c()],ut.prototype,"walletIcon",void 0);Bt([c({type:Boolean})],ut.prototype,"installed",void 0);Bt([c({type:Boolean})],ut.prototype,"disabled",void 0);Bt([c({type:Boolean})],ut.prototype,"showAllWallets",void 0);ut=Bt([f("wui-list-wallet")],ut);const Wf=b`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-005);
    overflow: hidden;
  }

  wui-icon {
    width: 100%;
    height: 100%;
  }
`;var xu=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let _a=class extends w{constructor(){super(...arguments),this.logo="google"}render(){return l`<wui-icon color="inherit" size="inherit" name=${this.logo}></wui-icon> `}};_a.styles=[O,Wf];xu([c()],_a.prototype,"logo",void 0);_a=xu([f("wui-logo")],_a);const Mf=b`
  :host {
    display: block;
    width: 100%;
  }

  button {
    width: 100%;
    height: 56px;
    background: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;var bl=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let fo=class extends w{constructor(){super(...arguments),this.logo="google",this.disabled=!1}render(){return l`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-logo logo=${this.logo}></wui-logo>
      </button>
    `}};fo.styles=[O,Q,Mf];bl([c()],fo.prototype,"logo",void 0);bl([c({type:Boolean})],fo.prototype,"disabled",void 0);fo=bl([f("wui-logo-select")],fo);const jf=b`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-2xs) var(--wui-spacing-s) var(--wui-spacing-2xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-color-gray-glass-010);
    background-color: var(--wui-color-gray-glass-005);
    color: var(--wui-color-fg-100);
  }

  button:disabled {
    border: 1px solid var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-gray-glass-010);
    }

    button:active:enabled {
      background-color: var(--wui-color-gray-glass-015);
    }
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }
`;var Ja=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let wr=class extends w{constructor(){super(...arguments),this.imageSrc=void 0,this.isUnsupportedChain=void 0,this.disabled=!1}render(){return l`
      <button ?disabled=${this.disabled}>
        ${this.visualTemplate()}
        <wui-text variant="paragraph-600" color="inherit">
          <slot></slot>
        </wui-text>
      </button>
    `}visualTemplate(){return this.isUnsupportedChain?l`
        <wui-icon-box
          size="sm"
          iconColor="error-100"
          backgroundColor="error-100"
          icon="warningCircle"
        ></wui-icon-box>
      `:this.imageSrc?l`<wui-image src=${this.imageSrc}></wui-image>`:l`
      <wui-icon-box
        size="sm"
        iconColor="inverse-100"
        backgroundColor="fg-100"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};wr.styles=[O,Q,jf];Ja([c()],wr.prototype,"imageSrc",void 0);Ja([c({type:Boolean})],wr.prototype,"isUnsupportedChain",void 0);Ja([c({type:Boolean})],wr.prototype,"disabled",void 0);wr=Ja([f("wui-network-button")],wr);const Lf=b`
  :host {
    position: relative;
    display: block;
  }
`;var es=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let gr=class extends w{constructor(){super(...arguments),this.length=6,this.otp="",this.values=Array.from({length:this.length}).map(()=>""),this.numerics=[],this.shouldInputBeEnabled=e=>this.values.slice(0,e).every(r=>r!==""),this.handleKeyDown=(e,t)=>{const r=e.target,o=this.getInputElement(r),n=["ArrowLeft","ArrowRight","Shift","Delete"];if(!o)return;n.includes(e.key)&&e.preventDefault();const a=o.selectionStart;switch(e.key){case"ArrowLeft":a&&o.setSelectionRange(a+1,a+1),this.focusInputField("prev",t);break;case"ArrowRight":this.focusInputField("next",t);break;case"Shift":this.focusInputField("next",t);break;case"Delete":o.value===""?this.focusInputField("prev",t):this.updateInput(o,t,"");break;case"Backspace":o.value===""?this.focusInputField("prev",t):this.updateInput(o,t,"");break}},this.focusInputField=(e,t)=>{if(e==="next"){const r=t+1;if(!this.shouldInputBeEnabled(r))return;const o=this.numerics[r<this.length?r:t],n=o?this.getInputElement(o):void 0;n&&(n.disabled=!1,n.focus())}if(e==="prev"){const r=t-1,o=this.numerics[r>-1?r:t],n=o?this.getInputElement(o):void 0;n&&n.focus()}}}firstUpdated(){var t,r;this.otp&&(this.values=this.otp.split(""));const e=(t=this.shadowRoot)==null?void 0:t.querySelectorAll("wui-input-numeric");e&&(this.numerics=Array.from(e)),(r=this.numerics[0])==null||r.focus()}render(){return l`
      <wui-flex gap="xxs" data-testid="wui-otp-input">
        ${Array.from({length:this.length}).map((e,t)=>l`
            <wui-input-numeric
              @input=${r=>this.handleInput(r,t)}
              @click=${r=>this.selectInput(r)}
              @keydown=${r=>this.handleKeyDown(r,t)}
              .disabled=${!this.shouldInputBeEnabled(t)}
              .value=${this.values[t]||""}
            >
            </wui-input-numeric>
          `)}
      </wui-flex>
    `}updateInput(e,t,r){const o=this.numerics[t],n=e||(o?this.getInputElement(o):void 0);n&&(n.value=r,this.values=this.values.map((a,s)=>s===t?r:a))}selectInput(e){const t=e.target;if(t){const r=this.getInputElement(t);r==null||r.select()}}handleInput(e,t){const r=e.target,o=this.getInputElement(r);if(o){const n=o.value;e.inputType==="insertFromPaste"?this.handlePaste(o,n,t):H.isNumber(n)&&e.data?(this.updateInput(o,t,e.data),this.focusInputField("next",t)):this.updateInput(o,t,"")}this.dispatchInputChangeEvent()}handlePaste(e,t,r){const o=t[0];if(o&&H.isNumber(o)){this.updateInput(e,r,o);const a=t.substring(1);if(r+1<this.length&&a.length){const s=this.numerics[r+1],p=s?this.getInputElement(s):void 0;p&&this.handlePaste(p,a,r+1)}else this.focusInputField("next",r)}else this.updateInput(e,r,"")}getInputElement(e){var t;return(t=e.shadowRoot)!=null&&t.querySelector("input")?e.shadowRoot.querySelector("input"):null}dispatchInputChangeEvent(){const e=this.values.join("");this.dispatchEvent(new CustomEvent("inputChange",{detail:e,bubbles:!0,composed:!0}))}};gr.styles=[O,Lf];es([c({type:Number})],gr.prototype,"length",void 0);es([c({type:String})],gr.prototype,"otp",void 0);es([d()],gr.prototype,"values",void 0);gr=es([f("wui-otp")],gr);const Bf=.1,pc=2.5,di=7;function Ts(i,e,t){return i===e?!1:(i-e<0?e-i:i-e)<=t+Bf}function zf(i,e){const t=Array.prototype.slice.call(Xu.create(i,{errorCorrectionLevel:e}).modules.data,0),r=Math.sqrt(t.length);return t.reduce((o,n,a)=>(a%r===0?o.push([n]):o[o.length-1].push(n))&&o,[])}const Vf={generate(i,e,t){const r="#141414",o="transparent",a=[],s=zf(i,"Q"),p=e/s.length,h=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];h.forEach(({x:se,y:J})=>{const ve=(s.length-di)*p*se,le=(s.length-di)*p*J,ge=.45;for(let be=0;be<h.length;be+=1){const Ce=p*(di-be*2);a.push(C`
            <rect
              fill=${be===2?r:o}
              width=${be===0?Ce-5:Ce}
              rx= ${be===0?(Ce-5)*ge:Ce*ge}
              ry= ${be===0?(Ce-5)*ge:Ce*ge}
              stroke=${r}
              stroke-width=${be===0?5:0}
              height=${be===0?Ce-5:Ce}
              x= ${be===0?le+p*be+5/2:le+p*be}
              y= ${be===0?ve+p*be+5/2:ve+p*be}
            />
          `)}});const x=Math.floor((t+25)/p),_=s.length/2-x/2,D=s.length/2+x/2-1,B=[];s.forEach((se,J)=>{se.forEach((ve,le)=>{if(s[J][le]&&!(J<di&&le<di||J>s.length-(di+1)&&le<di||J<di&&le>s.length-(di+1))&&!(J>_&&J<D&&le>_&&le<D)){const ge=J*p+p/2,be=le*p+p/2;B.push([ge,be])}})});const ne={};return B.forEach(([se,J])=>{var ve;ne[se]?(ve=ne[se])==null||ve.push(J):ne[se]=[J]}),Object.entries(ne).map(([se,J])=>{const ve=J.filter(le=>J.every(ge=>!Ts(le,ge,p)));return[Number(se),ve]}).forEach(([se,J])=>{J.forEach(ve=>{a.push(C`<circle cx=${se} cy=${ve} fill=${r} r=${p/pc} />`)})}),Object.entries(ne).filter(([se,J])=>J.length>1).map(([se,J])=>{const ve=J.filter(le=>J.some(ge=>Ts(le,ge,p)));return[Number(se),ve]}).map(([se,J])=>{J.sort((le,ge)=>le<ge?-1:1);const ve=[];for(const le of J){const ge=ve.find(be=>be.some(Ce=>Ts(le,Ce,p)));ge?ge.push(le):ve.push([le])}return[se,ve.map(le=>[le[0],le[le.length-1]])]}).forEach(([se,J])=>{J.forEach(([ve,le])=>{a.push(C`
              <line
                x1=${se}
                x2=${se}
                y1=${ve}
                y2=${le}
                stroke=${r}
                stroke-width=${p/(pc/2)}
                stroke-linecap="round"
              />
            `)})}),a}},Hf=b`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: var(--local-size);
  }

  :host([data-theme='dark']) {
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px);
    background-color: var(--wui-color-inverse-100);
    padding: var(--wui-spacing-l);
  }

  :host([data-theme='light']) {
    box-shadow: 0 0 0 1px var(--wui-color-bg-125);
    background-color: var(--wui-color-bg-125);
  }

  :host([data-clear='true']) > wui-icon {
    display: none;
  }

  svg:first-child,
  wui-image,
  wui-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: #3396ff !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }
`;var Yi=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let qt=class extends w{constructor(){super(...arguments),this.uri="",this.size=0,this.theme="dark",this.imageSrc=void 0,this.alt=void 0,this.arenaClear=void 0,this.farcaster=void 0}render(){return this.dataset.theme=this.theme,this.dataset.clear=String(this.arenaClear),this.style.cssText=`--local-size: ${this.size}px`,l`${this.templateVisual()} ${this.templateSvg()}`}templateSvg(){const e=this.theme==="light"?this.size:this.size-32;return C`
      <svg height=${e} width=${e}>
        ${Vf.generate(this.uri,e,this.arenaClear?0:e/4)}
      </svg>
    `}templateVisual(){return this.imageSrc?l`<wui-image src=${this.imageSrc} alt=${this.alt??"logo"}></wui-image>`:this.farcaster?l`<wui-icon
        class="farcaster"
        size="inherit"
        color="inherit"
        name="farcaster"
      ></wui-icon>`:l`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};qt.styles=[O,Hf];Yi([c()],qt.prototype,"uri",void 0);Yi([c({type:Number})],qt.prototype,"size",void 0);Yi([c()],qt.prototype,"theme",void 0);Yi([c()],qt.prototype,"imageSrc",void 0);Yi([c()],qt.prototype,"alt",void 0);Yi([c({type:Boolean})],qt.prototype,"arenaClear",void 0);Yi([c({type:Boolean})],qt.prototype,"farcaster",void 0);qt=Yi([f("wui-qr-code")],qt);const Ff=b`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`;var Zf=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Ms=class extends w{constructor(){super(...arguments),this.inputComponentRef=zi()}render(){return l`
      <wui-input-text
        ${Vi(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
      >
        <wui-input-element @click=${this.clearValue} icon="close"></wui-input-element>
      </wui-input-text>
    `}clearValue(){const e=this.inputComponentRef.value,t=e==null?void 0:e.inputElementRef.value;t&&(t.value="",t.focus(),t.dispatchEvent(new Event("input")))}};Ms.styles=[O,Ff];Ms=Zf([f("wui-search-bar")],Ms);const Gf=b`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-xs);
    align-items: center;
    padding: var(--wui-spacing-xs) var(--wui-spacing-m) var(--wui-spacing-xs) var(--wui-spacing-xs);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-005);
    box-sizing: border-box;
    max-height: 40px;
    background-color: var(--wui-color-bg-175);
    box-shadow:
      0px 14px 64px -4px rgba(0, 0, 0, 0.15),
      0px 8px 22px -6px rgba(0, 0, 0, 0.15);
  }

  :host wui-loading-spinner {
    margin-left: var(--wui-spacing-3xs);
  }
`;var Er=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Hi=class extends w{constructor(){super(...arguments),this.backgroundColor="accent-100",this.iconColor="accent-100",this.icon="checkmark",this.message="",this.loading=!1}render(){return l`
      ${this.loading?l`<wui-loading-spinner size="md" color="accent-100"></wui-loading-spinner>`:l`<wui-icon-box
            size="sm"
            iconSize="xs"
            iconColor=${this.iconColor}
            backgroundColor=${this.backgroundColor}
            icon=${this.icon}
            background="opaque"
          ></wui-icon-box>`}
      <wui-text variant="paragraph-500" color="fg-100">${this.message}</wui-text>
    `}};Hi.styles=[O,Gf];Er([c()],Hi.prototype,"backgroundColor",void 0);Er([c()],Hi.prototype,"iconColor",void 0);Er([c()],Hi.prototype,"icon",void 0);Er([c()],Hi.prototype,"message",void 0);Er([c()],Hi.prototype,"loading",void 0);Hi=Er([f("wui-snackbar")],Hi);const qf=b`
  :host {
    display: inline-flex;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    padding: var(--wui-spacing-3xs);
    position: relative;
    height: 36px;
    min-height: 36px;
    overflow: hidden;
  }

  :host::before {
    content: '';
    position: absolute;
    pointer-events: none;
    top: 4px;
    left: 4px;
    display: block;
    width: var(--local-tab-width);
    height: 28px;
    border-radius: var(--wui-border-radius-3xl);
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    transform: translateX(calc(var(--local-tab) * var(--local-tab-width)));
    transition: transform var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color, opacity;
  }

  :host([data-type='flex'])::before {
    left: 3px;
    transform: translateX(calc((var(--local-tab) * 34px) + (var(--local-tab) * 4px)));
  }

  :host([data-type='flex']) {
    display: flex;
    padding: 0px 0px 0px 12px;
    gap: 4px;
  }

  :host([data-type='flex']) > button > wui-text {
    position: absolute;
    left: 18px;
    opacity: 0;
  }

  button[data-active='true'] > wui-icon,
  button[data-active='true'] > wui-text {
    color: var(--wui-color-fg-100);
  }

  button[data-active='false'] > wui-icon,
  button[data-active='false'] > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='true']:disabled,
  button[data-active='false']:disabled {
    background-color: transparent;
    opacity: 0.5;
    cursor: not-allowed;
  }

  button[data-active='true']:disabled > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='false']:disabled > wui-text {
    color: var(--wui-color-fg-300);
  }

  button > wui-icon,
  button > wui-text {
    pointer-events: none;
    transition: color var(--wui-e ase-out-power-1) var(--wui-duration-md);
    will-change: color;
  }

  button {
    width: var(--local-tab-width);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  :host([data-type='flex']) > button {
    width: 34px;
    position: relative;
    display: flex;
    justify-content: flex-start;
  }

  button:hover:enabled,
  button:active:enabled {
    background-color: transparent !important;
  }

  button:hover:enabled > wui-icon,
  button:active:enabled > wui-icon {
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    color: var(--wui-color-fg-125);
  }

  button:hover:enabled > wui-text,
  button:active:enabled > wui-text {
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    color: var(--wui-color-fg-125);
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
  }
`;var Ki=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Yt=class extends w{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.buttons=[],this.disabled=!1,this.localTabWidth="100px",this.activeTab=0,this.isDense=!1}render(){return this.isDense=this.tabs.length>3,this.style.cssText=`
      --local-tab: ${this.activeTab};
      --local-tab-width: ${this.localTabWidth};
    `,this.dataset.type=this.isDense?"flex":"block",this.tabs.map((e,t)=>{var o;const r=t===this.activeTab;return l`
        <button
          ?disabled=${this.disabled}
          @click=${()=>this.onTabClick(t)}
          data-active=${r}
          data-testid="tab-${(o=e.label)==null?void 0:o.toLowerCase()}"
        >
          ${this.iconTemplate(e)}
          <wui-text variant="small-600" color="inherit"> ${e.label} </wui-text>
        </button>
      `})}firstUpdated(){this.shadowRoot&&this.isDense&&(this.buttons=[...this.shadowRoot.querySelectorAll("button")],setTimeout(()=>{this.animateTabs(0,!0)},0))}iconTemplate(e){return e.icon?l`<wui-icon size="xs" color="inherit" name=${e.icon}></wui-icon>`:null}onTabClick(e){this.buttons&&this.animateTabs(e,!1),this.activeTab=e,this.onTabChange(e)}animateTabs(e,t){const r=this.buttons[this.activeTab],o=this.buttons[e],n=r==null?void 0:r.querySelector("wui-text"),a=o==null?void 0:o.querySelector("wui-text"),s=o==null?void 0:o.getBoundingClientRect(),p=a==null?void 0:a.getBoundingClientRect();r&&n&&!t&&e!==this.activeTab&&(n.animate([{opacity:0}],{duration:50,easing:"ease",fill:"forwards"}),r.animate([{width:"34px"}],{duration:500,easing:"ease",fill:"forwards"})),o&&s&&p&&a&&(e!==this.activeTab||t)&&(this.localTabWidth=`${Math.round(s.width+p.width)+6}px`,o.animate([{width:`${s.width+p.width}px`}],{duration:t?0:500,fill:"forwards",easing:"ease"}),a.animate([{opacity:1}],{duration:t?0:125,delay:t?0:200,fill:"forwards",easing:"ease"}))}};Yt.styles=[O,Q,qf];Ki([c({type:Array})],Yt.prototype,"tabs",void 0);Ki([c()],Yt.prototype,"onTabChange",void 0);Ki([c({type:Array})],Yt.prototype,"buttons",void 0);Ki([c({type:Boolean})],Yt.prototype,"disabled",void 0);Ki([c()],Yt.prototype,"localTabWidth",void 0);Ki([d()],Yt.prototype,"activeTab",void 0);Ki([d()],Yt.prototype,"isDense",void 0);Yt=Ki([f("wui-tabs")],Yt);const Yf=b`
  :host {
    display: block;
  }

  :host > button {
    gap: var(--wui-spacing-xxs);
    padding: var(--wui-spacing-xs);
    padding-right: var(--wui-spacing-1xs);
    height: 40px;
    border-radius: var(--wui-border-radius-l);
    background: var(--wui-color-gray-glass-002);
    border-width: 0px;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
  }

  :host > button wui-image {
    width: 24px;
    height: 24px;
    border-radius: var(--wui-border-radius-s);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }
`;var xl=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let wo=class extends w{constructor(){super(...arguments),this.text=""}render(){return l`
      <button ontouchstart>
        ${this.tokenTemplate()}
        <wui-text variant="paragraph-600" color="fg-100">${this.text}</wui-text>
      </button>
    `}tokenTemplate(){return this.imageSrc?l`<wui-image src=${this.imageSrc}></wui-image>`:l`
      <wui-icon-box
        size="sm"
        iconColor="fg-200"
        backgroundColor="fg-300"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};wo.styles=[O,Q,Yf];xl([c()],wo.prototype,"imageSrc",void 0);xl([c()],wo.prototype,"text",void 0);wo=xl([f("wui-token-button")],wo);const Kf=b`
  :host {
    display: block;
    padding: 9px var(--wui-spacing-s) 10px var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);

    color: var(--wui-color-bg-100);
    position: relative;
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-color-bg-150);
    border: 1px solid var(--wui-color-gray-glass-005);
  }

  :host([data-variant='shade']) > wui-text {
    color: var(--wui-color-fg-150);
  }

  :host([data-variant='fill']) {
    background-color: var(--wui-color-fg-100);
    border: none;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
  }

  wui-icon[data-placement='top'] {
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`;var ts=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let mr=class extends w{constructor(){super(...arguments),this.placement="top",this.variant="fill",this.message=""}render(){return this.dataset.variant=this.variant,l`<wui-icon
        data-placement=${this.placement}
        color="fg-100"
        size="inherit"
        name=${this.variant==="fill"?"cursor":"cursorTransparent"}
      ></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>`}};mr.styles=[O,Q,Kf];ts([c()],mr.prototype,"placement",void 0);ts([c()],mr.prototype,"variant",void 0);ts([c()],mr.prototype,"message",void 0);mr=ts([f("wui-tooltip")],mr);const Xf=b`
  :host {
    height: 60px;
    min-height: 60px;
  }

  :host > wui-flex {
    cursor: pointer;
    height: 100%;
    display: flex;
    column-gap: var(--wui-spacing-s);
    padding: var(--wui-spacing-xs);
    padding-right: var(--wui-spacing-l);
    width: 100%;
    background-color: transparent;
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
    transition:
      background-color var(--wui-ease-out-power-1) var(--wui-duration-lg),
      opacity var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color, opacity;
  }

  @media (hover: hover) and (pointer: fine) {
    :host > wui-flex:hover {
      background-color: var(--wui-color-gray-glass-002);
    }

    :host > wui-flex:active {
      background-color: var(--wui-color-gray-glass-005);
    }
  }

  :host([disabled]) > wui-flex {
    opacity: 0.6;
  }

  :host([disabled]) > wui-flex:hover {
    background-color: transparent;
  }

  :host > wui-flex > wui-flex {
    flex: 1;
  }

  :host > wui-flex > wui-image,
  :host > wui-flex > .token-item-image-placeholder {
    width: 40px;
    max-width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-3xl);
    position: relative;
  }

  :host > wui-flex > .token-item-image-placeholder {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  :host > wui-flex > wui-image::after,
  :host > wui-flex > .token-item-image-placeholder::after {
    position: absolute;
    content: '';
    inset: 0;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
    border-radius: var(--wui-border-radius-l);
  }

  button > wui-icon-box[data-variant='square-blue'] {
    border-radius: var(--wui-border-radius-3xs);
    position: relative;
    border: none;
    width: 36px;
    height: 36px;
  }
`;var Xi=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Kt=class extends w{constructor(){super(),this.observer=new IntersectionObserver(()=>{}),this.imageSrc=void 0,this.name=void 0,this.symbol=void 0,this.price=void 0,this.amount=void 0,this.visible=!1,this.imageError=!1,this.observer=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting?this.visible=!0:this.visible=!1})},{threshold:.1})}firstUpdated(){this.observer.observe(this)}disconnectedCallback(){this.observer.disconnect()}render(){var t;if(!this.visible)return null;const e=this.amount&&this.price?(t=ue.multiply(this.price,this.amount))==null?void 0:t.toFixed(3):null;return l`
      <wui-flex alignItems="center">
        ${this.visualTemplate()}
        <wui-flex flexDirection="column" gap="3xs">
          <wui-flex justifyContent="space-between">
            <wui-text variant="paragraph-500" color="fg-100" lineClamp="1">${this.name}</wui-text>
            ${e?l`
                  <wui-text variant="paragraph-500" color="fg-100">
                    $${H.formatNumberToLocalString(e,3)}
                  </wui-text>
                `:null}
          </wui-flex>
          <wui-flex justifyContent="space-between">
            <wui-text variant="small-400" color="fg-200" lineClamp="1">${this.symbol}</wui-text>
            ${this.amount?l`<wui-text variant="small-400" color="fg-200">
                  ${H.formatNumberToLocalString(this.amount,4)}
                </wui-text>`:null}
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}visualTemplate(){return this.imageError?l`<wui-flex class="token-item-image-placeholder">
        <wui-icon name="image" color="inherit"></wui-icon>
      </wui-flex>`:this.imageSrc?l`<wui-image
        width="40"
        height="40"
        src=${this.imageSrc}
        @onLoadError=${this.imageLoadError}
      ></wui-image>`:null}imageLoadError(){this.imageError=!0}};Kt.styles=[O,Q,Xf];Xi([c()],Kt.prototype,"imageSrc",void 0);Xi([c()],Kt.prototype,"name",void 0);Xi([c()],Kt.prototype,"symbol",void 0);Xi([c()],Kt.prototype,"price",void 0);Xi([c()],Kt.prototype,"amount",void 0);Xi([d()],Kt.prototype,"visible",void 0);Xi([d()],Kt.prototype,"imageError",void 0);Kt=Xi([f("wui-token-list-item")],Kt);const Qf=b`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--wui-icon-box-size-xl);
    height: var(--wui-icon-box-size-xl);
    box-shadow: 0 0 0 8px var(--wui-thumbnail-border);
    border-radius: var(--local-border-radius);
    overflow: hidden;
  }

  wui-icon {
    width: 32px;
    height: 32px;
  }
`;var is=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let vr=class extends w{render(){return this.style.cssText=`--local-border-radius: ${this.borderRadiusFull?"1000px":"20px"}; background-color: var(--wui-color-modal-bg);`,l`${this.templateVisual()}`}templateVisual(){return this.imageSrc?l`<wui-image src=${this.imageSrc} alt=${this.alt??""}></wui-image>`:l`<wui-icon
      data-parent-size="md"
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};vr.styles=[O,Qf];is([c()],vr.prototype,"imageSrc",void 0);is([c()],vr.prototype,"alt",void 0);is([c({type:Boolean})],vr.prototype,"borderRadiusFull",void 0);vr=is([f("wui-visual-thumbnail")],vr);const Jf=b`
  :host {
    display: block;
  }

  button {
    width: 100%;
    display: block;
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    padding-left: var(--wui-spacing-s);
    padding-right: var(--wui-spacing-2l);
    border-radius: var(--wui-border-radius-s);
    background-color: var(--wui-color-accent-glass-010);
  }

  button:hover {
    background-color: var(--wui-color-accent-glass-015) !important;
  }

  button:active {
    background-color: var(--wui-color-accent-glass-020) !important;
  }
`;var ns=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let br=class extends w{constructor(){super(...arguments),this.label="",this.description="",this.icon="wallet"}render(){return l`
      <button>
        <wui-flex gap="m" alignItems="center" justifyContent="space-between">
          <wui-icon-box
            size="lg"
            iconcolor="accent-100"
            backgroundcolor="accent-100"
            icon=${this.icon}
            background="transparent"
          ></wui-icon-box>

          <wui-flex flexDirection="column" gap="3xs">
            <wui-text variant="paragraph-500" color="fg-100">${this.label}</wui-text>
            <wui-text variant="small-400" color="fg-200">${this.description}</wui-text>
          </wui-flex>

          <wui-icon size="md" color="fg-200" name="chevronRight"></wui-icon>
        </wui-flex>
      </button>
    `}};br.styles=[O,Q,Jf];ns([c()],br.prototype,"label",void 0);ns([c()],br.prototype,"description",void 0);ns([c()],br.prototype,"icon",void 0);br=ns([f("wui-notice-card")],br);const ew=b`
  button {
    height: auto;
    position: relative;
    flex-direction: column;
    gap: var(--wui-spacing-s);
    padding: 17px 18px 17px var(--wui-spacing-m);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  .overflowedContent {
    width: 100%;
    overflow: hidden;
  }

  .overflowedContent[data-active='false']:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to top, var(--wui-color-bg-150), transparent);
    border-bottom-left-radius: var(--wui-border-radius-xs);
    border-bottom-right-radius: var(--wui-border-radius-xs);
  }

  .heightContent {
    max-height: 100px;
  }

  pre {
    text-align: left;
    white-space: pre-wrap;
    height: auto;
    overflow-x: auto;
    overflow-wrap: anywhere;
  }
`;var yl=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};const ks=100;let go=class extends w{constructor(){super(...arguments),this.textTitle="",this.overflowedContent="",this.toggled=!1,this.enableAccordion=!1,this.scrollElement=void 0,this.scrollHeightElement=0}updated(e){super.updated(e),(e.has("textTitle")||e.has("overflowedContent"))&&setTimeout(()=>{this.checkHeight()},1)}checkHeight(){this.updateComplete.then(()=>{var r,o;const e=(r=this.shadowRoot)==null?void 0:r.querySelector(".heightContent"),t=(o=this.shadowRoot)==null?void 0:o.querySelector(".textContent");if(e&&t){this.scrollElement=e;const n=t==null?void 0:t.scrollHeight;n&&n>ks&&(this.enableAccordion=!0,this.scrollHeightElement=n,this.requestUpdate())}})}render(){return l`
      <button ontouchstart @click=${()=>this.onClick()}>
        <wui-flex justifyContent="space-between" alignItems="center">
          <wui-text variant="paragraph-500" color="fg-100">${this.textTitle}</wui-text>
          ${this.chevronTemplate()}
        </wui-flex>
        <div
          data-active=${this.enableAccordion?!!this.toggled:!0}
          class="overflowedContent"
        >
          <div class="heightContent">
            <wui-text class="textContent" variant="paragraph-400" color="fg-200">
              <pre>${this.overflowedContent}</pre>
            </wui-text>
          </div>
        </div>
      </button>
    `}onClick(){var t;const e=(t=this.shadowRoot)==null?void 0:t.querySelector("wui-icon");this.enableAccordion&&(this.toggled=!this.toggled,this.requestUpdate(),this.scrollElement&&this.scrollElement.animate([{maxHeight:this.toggled?`${ks}px`:`${this.scrollHeightElement}px`},{maxHeight:this.toggled?`${this.scrollHeightElement}px`:`${ks}px`}],{duration:300,fill:"forwards",easing:"ease"}),e&&e.animate([{transform:this.toggled?"rotate(0deg)":"rotate(180deg)"},{transform:this.toggled?"rotate(180deg)":"rotate(0deg)"}],{duration:300,fill:"forwards",easing:"ease"}))}chevronTemplate(){return this.enableAccordion?l` <wui-icon color="fg-100" size="sm" name="chevronBottom"></wui-icon>`:null}};go.styles=[O,Q,ew];yl([c()],go.prototype,"textTitle",void 0);yl([c()],go.prototype,"overflowedContent",void 0);go=yl([f("wui-list-accordion")],go);const tw=b`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-s);
    padding: 17px 18px 17px var(--wui-spacing-m);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  wui-image {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-icon {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
  }
`;var rs=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let xr=class extends w{constructor(){super(...arguments),this.imageSrc=void 0,this.textTitle="",this.textValue=void 0}render(){return l`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color=${this.textValue?"fg-200":"fg-100"}>
          ${this.textTitle}
        </wui-text>
        ${this.templateContent()}
      </wui-flex>
    `}templateContent(){return this.imageSrc?l`<wui-image src=${this.imageSrc} alt=${this.textTitle}></wui-image>`:this.textValue?l` <wui-text variant="paragraph-400" color="fg-100"> ${this.textValue} </wui-text>`:l`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};xr.styles=[O,Q,tw];rs([c()],xr.prototype,"imageSrc",void 0);rs([c()],xr.prototype,"textTitle",void 0);rs([c()],xr.prototype,"textValue",void 0);xr=rs([f("wui-list-content")],xr);const iw=b`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  button[data-transparent='true'] {
    pointer-events: none;
    background-color: transparent;
  }

  wui-icon {
    color: var(--wui-color-fg-200) !important;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-tag {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-300);
  }
`;var Mo=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let An=class extends w{constructor(){super(...arguments),this.imageSrc="",this.name="",this.disabled=!1,this.transparent=!1}render(){return l`
      <button data-transparent=${this.transparent} ?disabled=${this.disabled} ontouchstart>
        ${this.templateNetworkImage()}
        <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text>
      </button>
    `}templateNetworkImage(){return this.imageSrc?l`<wui-network-image
        size="sm"
        imageSrc=${this.imageSrc}
        name=${this.name}
      ></wui-network-image>`:this.imageSrc?null:l`<wui-network-image size="sm" name=${this.name}></wui-network-image>`}};An.styles=[O,Q,iw];Mo([c()],An.prototype,"imageSrc",void 0);Mo([c()],An.prototype,"name",void 0);Mo([c({type:Boolean})],An.prototype,"disabled",void 0);Mo([c({type:Boolean})],An.prototype,"transparent",void 0);An=Mo([f("wui-list-network")],An);const nw=b`
  :host {
    display: flex;
    flex-direction: column;
    gap: var(--wui-spacing-l);
    padding: 17px 18px 17px var(--wui-spacing-m);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  wui-image {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-icon {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
  }
`;var $r=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Fi=class extends w{constructor(){super(...arguments),this.amount="",this.networkCurreny="",this.networkImageUrl="",this.receiverAddress="",this.addressExplorerUrl=""}render(){return l`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color="fg-200">Sending</wui-text>
        <wui-flex gap="xs" alignItems="center">
          <wui-text variant="paragraph-400" color="fg-100">
            ${this.amount} ${this.networkCurreny}
          </wui-text>
          ${this.templateNetworkVisual()}
        </wui-flex>
      </wui-flex>
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color="fg-200">To</wui-text>
        <wui-chip
          icon="externalLink"
          variant="shadeSmall"
          href=${this.addressExplorerUrl}
          title=${this.receiverAddress}
        ></wui-chip>
      </wui-flex>
    `}templateNetworkVisual(){return this.networkImageUrl?l`<wui-image src=${this.networkImageUrl} alt="Network Image"></wui-image>`:l`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};Fi.styles=[O,Q,nw];$r([c()],Fi.prototype,"amount",void 0);$r([c()],Fi.prototype,"networkCurreny",void 0);$r([c()],Fi.prototype,"networkImageUrl",void 0);$r([c()],Fi.prototype,"receiverAddress",void 0);$r([c()],Fi.prototype,"addressExplorerUrl",void 0);Fi=$r([f("wui-list-wallet-transaction")],Fi);const rw=b`
  button {
    display: flex;
    gap: var(--wui-spacing-3xs);
    align-items: center;
    padding: 6.25px var(--wui-spacing-xs) 7.25px var(--wui-spacing-s);
    background-color: var(--wui-color-gray-glass-090);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-060);
    transition: background-color var(--wui-duration-md) var(--wui-ease-inout-power-1);
    will-change: background-color;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-gray-glass-080);
    }

    button:active:enabled {
      background-color: var(--wui-color-gray-glass-060);
    }
  }
`;var yu=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Ta=class extends w{constructor(){super(...arguments),this.text=""}render(){return l`<button ontouchstart>
      <wui-text variant="small-600" color="bg-100">${this.text}</wui-text>
      <wui-icon color="bg-100" size="xs" name="arrowRight"></wui-icon>
    </button>`}};Ta.styles=[O,Q,rw];yu([c()],Ta.prototype,"text",void 0);Ta=yu([f("wui-promo")],Ta);const ow=b`
  span {
    font-weight: 500;
    font-size: 40px;
    color: var(--wui-color-fg-100);
    line-height: 130%; /* 52px */
    letter-spacing: -1.6px;
    text-align: center;
  }

  .pennies {
    color: var(--wui-color-fg-200);
  }
`;var Cl=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let mo=class extends w{constructor(){super(...arguments),this.dollars="0",this.pennies="00"}render(){return l`<span>$${this.dollars}<span class="pennies">.${this.pennies}</span></span>`}};mo.styles=[O,ow];Cl([c()],mo.prototype,"dollars",void 0);Cl([c()],mo.prototype,"pennies",void 0);mo=Cl([f("wui-balance")],mo);const aw=b`
  button {
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-002);
    padding: var(--wui-spacing-xs) var(--wui-spacing-s) var(--wui-spacing-xs) var(--wui-spacing-xs);
    position: relative;
  }

  wui-avatar {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 0;
    outline: 3px solid var(--wui-color-gray-glass-005);
  }

  wui-icon-box,
  wui-image {
    width: 16px;
    height: 16px;
    border-radius: var(--wui-border-radius-3xl);
    position: absolute;
    left: 26px;
    top: 24px;
  }

  wui-image {
    outline: 2px solid var(--wui-color-bg-125);
  }

  wui-icon-box {
    outline: 2px solid var(--wui-color-bg-200);
    background-color: var(--wui-color-bg-250);
  }
`;var Rr=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Zi=class extends w{constructor(){super(...arguments),this.networkSrc=void 0,this.avatarSrc=void 0,this.profileName="",this.address="",this.icon="chevronBottom"}render(){return l`<button ontouchstart data-testid="wui-profile-button">
      <wui-flex gap="xs" alignItems="center">
        <wui-avatar
          .imageSrc=${this.avatarSrc}
          alt=${this.address}
          address=${this.address}
        ></wui-avatar>
        ${this.networkImageTemplate()}
        <wui-flex gap="xs" alignItems="center">
          <wui-text variant="large-600" color="fg-100">
            ${H.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?18:4,charsEnd:this.profileName?0:4,truncate:this.profileName?"end":"middle"})}
          </wui-text>
          <wui-icon size="sm" color="fg-200" name=${this.icon}></wui-icon>
        </wui-flex>
      </wui-flex>
    </button>`}networkImageTemplate(){return this.networkSrc?l`<wui-image src=${this.networkSrc}></wui-image>`:l`
      <wui-icon-box
        size="xxs"
        iconColor="fg-200"
        backgroundColor="bg-100"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};Zi.styles=[O,Q,aw];Rr([c()],Zi.prototype,"networkSrc",void 0);Rr([c()],Zi.prototype,"avatarSrc",void 0);Rr([c()],Zi.prototype,"profileName",void 0);Rr([c()],Zi.prototype,"address",void 0);Rr([c()],Zi.prototype,"icon",void 0);Zi=Rr([f("wui-profile-button")],Zi);const sw=b`
  button {
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-002);
    padding: var(--wui-spacing-xs) var(--wui-spacing-s) var(--wui-spacing-xs) var(--wui-spacing-xs);
    position: relative;
  }

  wui-avatar {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 0;
    outline: 3px solid var(--wui-color-gray-glass-005);
  }

  wui-icon-box,
  wui-image {
    width: 16px;
    height: 16px;
    border-radius: var(--wui-border-radius-3xl);
    position: absolute;
    left: 26px;
    top: 24px;
  }

  wui-image {
    outline: 2px solid var(--wui-color-bg-125);
  }

  wui-icon-box {
    outline: 2px solid var(--wui-color-bg-200);
    background-color: var(--wui-color-bg-250);
  }
`;var Fn=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let yi=class extends w{constructor(){super(...arguments),this.avatarSrc=void 0,this.profileName="",this.address="",this.icon="mail",this.connectedConnector=oe.getConnectedConnector(),this.shouldShowIcon=this.connectedConnector==="AUTH"}render(){return l`<button ontouchstart data-testid="wui-profile-button" @click=${this.handleClick}>
      <wui-flex gap="xs" alignItems="center">
        <wui-avatar
          .imageSrc=${this.avatarSrc}
          alt=${this.address}
          address=${this.address}
        ></wui-avatar>
        ${this.shouldShowIcon?this.getIconTemplate(this.icon):""}
        <wui-flex gap="xs" alignItems="center">
          <wui-text variant="large-600" color="fg-100">
            ${H.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?18:4,charsEnd:this.profileName?0:4,truncate:this.profileName?"end":"middle"})}
          </wui-text>
          <wui-icon size="sm" color="fg-200" name="copy" id="copy-address"></wui-icon>
        </wui-flex>
      </wui-flex>
    </button>`}handleClick(e){var t,r;if(e.target instanceof HTMLElement&&e.target.id==="copy-address"){(t=this.onCopyClick)==null||t.call(this,e);return}(r=this.onProfileClick)==null||r.call(this,e)}getIconTemplate(e){return l`
      <wui-icon-box
        size="xxs"
        iconColor="fg-200"
        backgroundColor="bg-100"
        icon="${e||"networkPlaceholder"}"
      ></wui-icon-box>
    `}};yi.styles=[O,Q,sw];Fn([c()],yi.prototype,"avatarSrc",void 0);Fn([c()],yi.prototype,"profileName",void 0);Fn([c()],yi.prototype,"address",void 0);Fn([c()],yi.prototype,"icon",void 0);Fn([c()],yi.prototype,"onProfileClick",void 0);Fn([c()],yi.prototype,"onCopyClick",void 0);yi=Fn([f("wui-profile-button-v2")],yi);const lw=b`
  button {
    border: none;
    border-radius: var(--wui-border-radius-3xl);
  }

  button[data-variant='main'] {
    background-color: var(--wui-color-accent-100);
    color: var(--wui-color-inverse-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='accent'] {
    background-color: var(--wui-color-accent-glass-010);
    color: var(--wui-color-accent-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  button[data-variant='gray'] {
    background-color: transparent;
    color: var(--wui-color-fg-200);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='shade'] {
    background-color: transparent;
    color: var(--wui-color-accent-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-size='sm'] {
    height: 32px;
    padding: 0 var(--wui-spacing-s);
  }

  button[data-size='md'] {
    height: 40px;
    padding: 0 var(--wui-spacing-l);
  }

  button[data-size='sm'] > wui-image {
    width: 16px;
    height: 16px;
  }

  button[data-size='md'] > wui-image {
    width: 24px;
    height: 24px;
  }

  button[data-size='sm'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  button[data-size='md'] > wui-icon {
    width: 14px;
    height: 14px;
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  button.disabled > wui-icon,
  button.disabled > wui-image {
    filter: grayscale(1);
  }

  button[data-variant='main'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-accent-090);
  }

  button[data-variant='shade'] > wui-image,
  button[data-variant='gray'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  @media (hover: hover) and (pointer: fine) {
    button[data-variant='main']:focus-visible {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='main']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='main']:active:enabled {
      background-color: var(--wui-color-accent-080);
    }

    button[data-variant='accent']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }

    button[data-variant='accent']:active:enabled {
      background-color: var(--wui-color-accent-glass-020);
    }

    button[data-variant='shade']:focus-visible,
    button[data-variant='gray']:focus-visible,
    button[data-variant='shade']:hover,
    button[data-variant='gray']:hover {
      background-color: var(--wui-color-gray-glass-002);
    }

    button[data-variant='gray']:active,
    button[data-variant='shade']:active {
      background-color: var(--wui-color-gray-glass-005);
    }
  }

  button.disabled {
    color: var(--wui-color-gray-glass-020);
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    pointer-events: none;
  }
`;var Zn=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Ci=class extends w{constructor(){super(...arguments),this.variant="accent",this.imageSrc="",this.disabled=!1,this.icon="externalLink",this.size="md",this.text=""}render(){const e=this.size==="sm"?"small-600":"paragraph-600";return l`
      <button
        class=${this.disabled?"disabled":""}
        data-variant=${this.variant}
        data-size=${this.size}
      >
        ${this.imageSrc?l`<wui-image src=${this.imageSrc}></wui-image>`:null}
        <wui-text variant=${e} color="inherit"> ${this.text} </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </button>
    `}};Ci.styles=[O,Q,lw];Zn([c()],Ci.prototype,"variant",void 0);Zn([c()],Ci.prototype,"imageSrc",void 0);Zn([c({type:Boolean})],Ci.prototype,"disabled",void 0);Zn([c()],Ci.prototype,"icon",void 0);Zn([c()],Ci.prototype,"size",void 0);Zn([c()],Ci.prototype,"text",void 0);Ci=Zn([f("wui-chip-button")],Ci);const cw=b`
  button {
    display: flex;
    gap: var(--wui-spacing-xl);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xxs);
    padding: var(--wui-spacing-m) var(--wui-spacing-s);
  }

  wui-text {
    width: 100%;
  }

  wui-flex {
    width: auto;
  }

  .network-icon {
    width: var(--wui-spacing-2l);
    height: var(--wui-spacing-2l);
    border-radius: calc(var(--wui-spacing-2l) / 2);
    overflow: hidden;
    box-shadow:
      0 0 0 3px var(--wui-color-gray-glass-002),
      0 0 0 3px var(--wui-color-modal-bg);
  }
`;var _l=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let vo=class extends w{constructor(){super(...arguments),this.networkImages=[""],this.text=""}render(){return l`
      <button ontouchstart>
        <wui-text variant="small-400" color="fg-200">${this.text}</wui-text>
        <wui-flex gap="3xs" alignItems="center">
          ${this.networksTemplate()}
          <wui-icon name="chevronRight" size="sm" color="fg-200"></wui-icon>
        </wui-flex>
      </button>
    `}networksTemplate(){const e=this.networkImages.slice(0,5);return l` <wui-flex class="networks">
      ${e==null?void 0:e.map(t=>l` <wui-flex class="network-icon"> <wui-image src=${t}></wui-image> </wui-flex>`)}
    </wui-flex>`}};vo.styles=[O,Q,cw];_l([c({type:Array})],vo.prototype,"networkImages",void 0);_l([c()],vo.prototype,"text",void 0);vo=_l([f("wui-compatible-network")],vo);const uw=b`
  wui-flex {
    width: 100%;
    background-color: var(--wui-color-gray-glass-005);
    border-radius: var(--wui-border-radius-s);
    padding: var(--wui-spacing-1xs) var(--wui-spacing-s) var(--wui-spacing-1xs)
      var(--wui-spacing-1xs);
  }
`;var Tl=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let bo=class extends w{constructor(){super(...arguments),this.icon="externalLink",this.text=""}render(){return l`
      <wui-flex gap="1xs" alignItems="center">
        <wui-icon-box
          size="sm"
          iconcolor="fg-200"
          backgroundcolor="fg-200"
          icon=${this.icon}
          background="transparent"
        ></wui-icon-box>
        <wui-text variant="small-400" color="fg-200">${this.text}</wui-text>
      </wui-flex>
    `}};bo.styles=[O,Q,uw];Tl([c()],bo.prototype,"icon",void 0);Tl([c()],bo.prototype,"text",void 0);bo=Tl([f("wui-banner")],bo);const dw=b`
  wui-flex {
    width: 100%;
    background-color: var(--wui-color-gray-glass-005);
    border-radius: var(--wui-border-radius-m);
    padding: var(--wui-spacing-1xs) var(--wui-spacing-s) var(--wui-spacing-1xs)
      var(--wui-spacing-1xs);
  }
`;var os=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let yr=class extends w{constructor(){super(...arguments),this.imageSrc="",this.text="",this.size=""}render(){return l`
      <wui-flex gap="1xs" alignItems="center">
        <wui-avatar size=${this.size} imageSrc=${this.imageSrc}></wui-avatar>
        <wui-text variant="small-400" color="fg-200">${this.text}</wui-text>
      </wui-flex>
    `}};yr.styles=[O,Q,dw];os([c()],yr.prototype,"imageSrc",void 0);os([c()],yr.prototype,"text",void 0);os([c()],yr.prototype,"size",void 0);yr=os([f("wui-banner-img")],yr);const pw=b`
  button {
    padding: 6.5px var(--wui-spacing-l) 6.5px var(--wui-spacing-xs);
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    background-color: var(--wui-color-gray-glass-002);
  }

  button[data-clickable='false'] {
    pointer-events: none;
    background-color: transparent;
  }

  wui-image,
  wui-icon {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
  }
`;var Gn=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let _i=class extends w{constructor(){super(...arguments),this.tokenName="",this.tokenImageUrl="",this.tokenValue=0,this.tokenAmount="0.0",this.tokenCurrency="",this.clickable=!1}render(){return l`
      <button data-clickable=${String(this.clickable)} ontouchstart>
        <wui-flex gap="s" alignItems="center">
          ${this.visualTemplate()}
          <wui-flex flexDirection="column" justifyContent="spaceBetween">
            <wui-text variant="paragraph-500" color="fg-100">${this.tokenName}</wui-text>
            <wui-text variant="small-400" color="fg-200">
              ${H.formatNumberToLocalString(this.tokenAmount,4)} ${this.tokenCurrency}
            </wui-text>
          </wui-flex>
        </wui-flex>
        <wui-text variant="paragraph-500" color="fg-100">$${this.tokenValue.toFixed(2)}</wui-text>
      </button>
    `}visualTemplate(){return this.tokenName&&this.tokenImageUrl?l`<wui-image alt=${this.tokenName} src=${this.tokenImageUrl}></wui-image>`:l`<wui-icon name="coinPlaceholder" color="fg-100"></wui-icon>`}};_i.styles=[O,Q,pw];Gn([c()],_i.prototype,"tokenName",void 0);Gn([c()],_i.prototype,"tokenImageUrl",void 0);Gn([c({type:Number})],_i.prototype,"tokenValue",void 0);Gn([c()],_i.prototype,"tokenAmount",void 0);Gn([c()],_i.prototype,"tokenCurrency",void 0);Gn([c({type:Boolean})],_i.prototype,"clickable",void 0);_i=Gn([f("wui-list-token")],_i);const hw=b`
  button {
    width: 100%;
    display: flex;
    gap: var(--wui-spacing-s);
    align-items: center;
    justify-content: flex-start;
    padding: var(--wui-spacing-s) var(--wui-spacing-m) var(--wui-spacing-s) var(--wui-spacing-s);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon-box {
    width: var(--wui-spacing-2xl);
    height: var(--wui-spacing-2xl);
  }

  wui-flex {
    width: auto;
  }
`;var Qi=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Xt=class extends w{constructor(){super(...arguments),this.icon="card",this.text="",this.description="",this.tag=void 0,this.iconBackgroundColor="accent-100",this.iconColor="accent-100",this.disabled=!1}render(){return l`
      <button ontouchstart ?disabled=${this.disabled}>
        <wui-icon-box
          iconColor=${this.iconColor}
          backgroundColor=${this.iconBackgroundColor}
          size="inherit"
          icon=${this.icon}
          iconSize="md"
        ></wui-icon-box>
        <wui-flex flexDirection="column" justifyContent="spaceBetween">
          ${this.titleTemplate()}
          <wui-text variant="small-400" color="fg-200"> ${this.description}</wui-text></wui-flex
        >
      </button>
    `}titleTemplate(){return this.tag?l` <wui-flex alignItems="center" gap="xxs"
        ><wui-text variant="paragraph-500" color="fg-100">${this.text}</wui-text
        ><wui-tag tagType="main" size="md">${this.tag}</wui-tag>
      </wui-flex>`:l`<wui-text variant="paragraph-500" color="fg-100">${this.text}</wui-text>`}};Xt.styles=[O,Q,hw];Qi([c()],Xt.prototype,"icon",void 0);Qi([c()],Xt.prototype,"text",void 0);Qi([c()],Xt.prototype,"description",void 0);Qi([c()],Xt.prototype,"tag",void 0);Qi([c()],Xt.prototype,"iconBackgroundColor",void 0);Qi([c()],Xt.prototype,"iconColor",void 0);Qi([c({type:Boolean})],Xt.prototype,"disabled",void 0);Xt=Qi([f("wui-list-description")],Xt);const fw=b`
  :host {
    position: relative;
    display: inline-block;
  }

  input {
    background: transparent;
    width: 100%;
    height: auto;
    font-family: var(--wui-font-family);
    color: var(--wui-color-fg-100);

    font-feature-settings: 'case' on;
    font-size: 32px;
    font-weight: var(--wui-font-weight-light);
    caret-color: var(--wui-color-accent-100);
    line-height: 130%;
    letter-spacing: -1.28px;
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input::placeholder {
    color: var(--wui-color-fg-275);
  }
`,ww=/[.*+?^${}()|[\]\\]/gu,gw=/[0-9,.]/u;var as=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Cr=class extends w{constructor(){super(...arguments),this.inputElementRef=zi(),this.disabled=!1,this.value="",this.placeholder="0"}render(){var e;return(e=this.inputElementRef)!=null&&e.value&&this.value&&(this.inputElementRef.value.value=this.value),l`<input
      ${Vi(this.inputElementRef)}
      type="text"
      inputmode="decimal"
      pattern="[0-9,.]*"
      placeholder=${this.placeholder}
      ?disabled=${this.disabled}
      autofocus
      value=${this.value??""}
      @input=${this.dispatchInputChangeEvent.bind(this)}
    /> `}dispatchInputChangeEvent(e){var r,o;const t=e.data;if(t&&((r=this.inputElementRef)!=null&&r.value))if(t===","){const n=this.inputElementRef.value.value.replace(",",".");this.inputElementRef.value.value=n,this.value=`${this.value}${n}`}else gw.test(t)||(this.inputElementRef.value.value=this.value.replace(new RegExp(t.replace(ww,"\\$&"),"gu"),""));this.dispatchEvent(new CustomEvent("inputChange",{detail:(o=this.inputElementRef.value)==null?void 0:o.value,bubbles:!0,composed:!0}))}};Cr.styles=[O,Q,fw];as([c({type:Boolean})],Cr.prototype,"disabled",void 0);as([c({type:String})],Cr.prototype,"value",void 0);as([c({type:String})],Cr.prototype,"placeholder",void 0);Cr=as([f("wui-input-amount")],Cr);const mw=b`
  :host {
    display: flex;
    gap: var(--wui-spacing-xs);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-002);
    background: var(--wui-color-gray-glass-002);
    padding: var(--wui-spacing-2xs) var(--wui-spacing-xs) var(--wui-spacing-2xs)
      var(--wui-spacing-s);
    align-items: center;
  }

  wui-avatar,
  wui-icon,
  wui-image {
    width: 32px;
    height: 32px;
    border: 1px solid var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-002);
  }
`;var jo=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let En=class extends w{constructor(){super(...arguments),this.text="",this.address="",this.isAddress=!1}render(){return l`<wui-text variant="large-500" color="fg-100">${this.text}</wui-text>
      ${this.imageTemplate()}`}imageTemplate(){return this.isAddress?l`<wui-avatar address=${this.address} .imageSrc=${this.imageSrc}></wui-avatar>`:this.imageSrc?l`<wui-image src=${this.imageSrc}></wui-image>`:l`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};En.styles=[O,Q,mw];jo([c()],En.prototype,"text",void 0);jo([c()],En.prototype,"address",void 0);jo([c()],En.prototype,"imageSrc",void 0);jo([c({type:Boolean})],En.prototype,"isAddress",void 0);En=jo([f("wui-preview-item")],En);const vw=b`
  button {
    padding: 6.5px var(--wui-spacing-l) 6.5px var(--wui-spacing-xs);
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    background-color: var(--wui-color-gray-glass-002);
  }

  button[data-clickable='false'] {
    pointer-events: none;
    background-color: transparent;
  }

  wui-image {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-avatar {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    box-shadow: 0 0 0 0;
  }
  .address {
    color: var(--wui-color-fg-base-100);
  }
  .address-description {
    text-transform: capitalize;
    color: var(--wui-color-fg-base-200);
  }

  wui-icon-box {
    position: relative;
    right: 15px;
    top: 15px;
    border: 2px solid var(--wui-color-bg-150);
    background-color: var(--wui-color-bg-125);
  }
`;var Lo=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let $n=class extends w{constructor(){super(...arguments),this.accountAddress="",this.accountType="",this.connectedConnector=oe.getConnectedConnector(),this.labels=m.state.addressLabels,this.caipNetwork=T.state.caipNetwork,this.socialProvider=oe.getConnectedSocialProvider(),this.balance=0,this.fetchingBalance=!0,this.shouldShowIcon=!1,this.selected=!1}connectedCallback(){var e;super.connectedCallback(),ke.getBalance(this.accountAddress,(e=this.caipNetwork)==null?void 0:e.id).then(t=>{let r=this.balance;t.balances.length>0&&(r=t.balances.reduce((o,n)=>o+((n==null?void 0:n.value)||0),0)),this.balance=r,this.fetchingBalance=!1,this.requestUpdate()})}render(){const e=this.getLabel();return this.shouldShowIcon=this.connectedConnector==="AUTH",l`
      <wui-flex
        flexDirection="row"
        justifyContent="space-between"
        .padding=${["0","0","s","1xs"]}
      >
        <wui-flex gap="md" alignItems="center">
          <wui-avatar address=${this.accountAddress}></wui-avatar>
          ${this.shouldShowIcon?l`<wui-icon-box
                size="sm"
                iconcolor="fg-200"
                backgroundcolor="fg-300"
                icon=${this.accountType===ae.ACCOUNT_TYPES.EOA?this.socialProvider??"mail":"lightbulb"}
                background="fg-300"
              ></wui-icon-box>`:l`<wui-flex .padding="${["0","0","0","s"]}"></wui-flex>`}
          <wui-flex flexDirection="column">
            <wui-text class="address" variant="paragraph-500" color="fg-100"
              >${H.getTruncateString({string:this.accountAddress,charsStart:4,charsEnd:6,truncate:"middle"})}</wui-text
            >
            <wui-text class="address-description" variant="small-400">${e}</wui-text></wui-flex
          >
        </wui-flex>
        <wui-flex gap="s" alignItems="center">
          ${this.fetchingBalance?l`<wui-loading-spinner size="sm" color="accent-100"></wui-loading-spinner>`:l` <wui-text variant="small-400">$${this.balance.toFixed(2)}</wui-text>`}
          <slot name="action"></slot>
        </wui-flex>
      </wui-flex>
    `}getLabel(){var t;let e=(t=this.labels)==null?void 0:t.get(this.accountAddress);return!e&&this.connectedConnector==="AUTH"?e=`${this.accountType==="eoa"?this.socialProvider??"Email":"Smart"} Account`:!e&&this.connectedConnector==="INJECTED"||this.connectedConnector==="ANNOUNCED"?e="Injected Account":e||(e="EOA"),e}};$n.styles=[O,Q,vw];Lo([c()],$n.prototype,"accountAddress",void 0);Lo([c()],$n.prototype,"accountType",void 0);Lo([c({type:Boolean})],$n.prototype,"selected",void 0);Lo([c({type:Function})],$n.prototype,"onSelect",void 0);$n=Lo([f("wui-list-account")],$n);const bw=b`
  :host {
    position: relative;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 48px;
    width: 100%;
    background-color: var(--wui-color-accent-glass-010);
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-color-accent-glass-010);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  wui-tooltip {
    padding: 7px var(--wui-spacing-s) 8px var(--wui-spacing-s);
    position: absolute;
    top: -8px;
    left: 50%;
    transform: translate(-50%, -100%);
    opacity: 0;
    display: none;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }

    button:active:enabled {
      background-color: var(--wui-color-accent-glass-020);
    }
  }
`;var kl=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let xo=class extends w{constructor(){super(...arguments),this.text="",this.icon="card"}render(){return l`<button>
      <wui-icon color="accent-100" name=${this.icon} size="lg"></wui-icon>
    </button>`}};xo.styles=[O,Q,bw];kl([c()],xo.prototype,"text",void 0);kl([c()],xo.prototype,"icon",void 0);xo=kl([f("wui-icon-button")],xo);const xw=b`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 16.5px var(--wui-spacing-l) 16.5px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
    justify-content: center;
    align-items: center;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }
`;var Sl=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let yo=class extends w{constructor(){super(...arguments),this.text="",this.disabled=!1}render(){return l`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-text align="center" variant="paragraph-500" color="inherit">${this.text}</wui-text>
      </button>
    `}};yo.styles=[O,Q,xw];Sl([c()],yo.prototype,"text",void 0);Sl([c({type:Boolean})],yo.prototype,"disabled",void 0);yo=Sl([f("wui-list-button")],yo);const yw=b`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    justify-content: flex-start;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  wui-text {
    text-transform: capitalize;
  }

  wui-text[data-align='left'] {
    display: flex;
    flex: 1;
  }

  wui-text[data-align='center'] {
    display: flex;
    flex: 1;
    justify-content: center;
  }

  .invisible {
    opacity: 0;
    pointer-events: none;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }
`;var Bo=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Rn=class extends w{constructor(){super(...arguments),this.logo="google",this.name="Continue with google",this.align="left",this.disabled=!1}render(){return l`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-logo logo=${this.logo}></wui-logo>
        <wui-text
          data-align=${this.align}
          variant="paragraph-500"
          color="inherit"
          align=${this.align}
          >${this.name}</wui-text
        >
        ${this.templatePlacement()}
      </button>
    `}templatePlacement(){return this.align==="center"?l` <wui-logo class="invisible" logo=${this.logo}></wui-logo>`:null}};Rn.styles=[O,Q,yw];Bo([c()],Rn.prototype,"logo",void 0);Bo([c()],Rn.prototype,"name",void 0);Bo([c()],Rn.prototype,"align",void 0);Bo([c({type:Boolean})],Rn.prototype,"disabled",void 0);Rn=Bo([f("wui-list-social")],Rn);const Cw=b`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`;var At=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let rt=class extends w{render(){return this.style.cssText=`
      grid-template-rows: ${this.gridTemplateRows};
      grid-template-columns: ${this.gridTemplateColumns};
      justify-items: ${this.justifyItems};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      align-content: ${this.alignContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&H.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&H.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&H.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&H.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&H.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&H.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&H.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&H.getSpacingStyles(this.margin,3)};
    `,l`<slot></slot>`}};rt.styles=[O,Cw];At([c()],rt.prototype,"gridTemplateRows",void 0);At([c()],rt.prototype,"gridTemplateColumns",void 0);At([c()],rt.prototype,"justifyItems",void 0);At([c()],rt.prototype,"alignItems",void 0);At([c()],rt.prototype,"justifyContent",void 0);At([c()],rt.prototype,"alignContent",void 0);At([c()],rt.prototype,"columnGap",void 0);At([c()],rt.prototype,"rowGap",void 0);At([c()],rt.prototype,"gap",void 0);At([c()],rt.prototype,"padding",void 0);At([c()],rt.prototype,"margin",void 0);rt=At([f("wui-grid")],rt);const _w=b`
  :host {
    position: relative;
    display: flex;
    width: 100%;
    height: 1px;
    background-color: var(--wui-color-gray-glass-005);
    justify-content: center;
    align-items: center;
  }

  :host > wui-text {
    position: absolute;
    padding: 0px 10px;
    background-color: var(--wui-color-modal-bg);
  }
`;var Cu=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let ka=class extends w{constructor(){super(...arguments),this.text=""}render(){return l`${this.template()}`}template(){return this.text?l`<wui-text variant="small-500" color="fg-200">${this.text}</wui-text>`:null}};ka.styles=[O,_w];Cu([c()],ka.prototype,"text",void 0);ka=Cu([f("wui-separator")],ka);const ia={interpolate(i,e,t){if(i.length!==2||e.length!==2)throw new Error("inputRange and outputRange must be an array of length 2");const r=i[0]||0,o=i[1]||0,n=e[0]||0,a=e[1]||0;return t<r?n:t>o?a:(a-n)/(o-r)*(t-r)+n}},Tw=3,kw=["receive","deposit","borrow","claim"],Sw=["withdraw","repay","burn"],hn={getMonthName(i){const e=new Date;return e.setMonth(i),e.toLocaleString("en-US",{month:"long"})},getTransactionGroupTitle(i,e){const t=ol.getYear(),r=this.getMonthName(e);return i===t?r:`${r} ${i}`},getTransactionImages(i){const[e,t]=i,r=!!e&&(i==null?void 0:i.every(a=>!!a.nft_info)),o=(i==null?void 0:i.length)>1;return(i==null?void 0:i.length)===2&&!r?[this.getTransactionImage(e),this.getTransactionImage(t)]:o?i.map(a=>this.getTransactionImage(a)):[this.getTransactionImage(e)]},getTransactionImage(i){return{type:hn.getTransactionTransferTokenType(i),url:hn.getTransactionImageURL(i)}},getTransactionImageURL(i){var o,n,a,s,p;let e;const t=!!(i!=null&&i.nft_info),r=!!(i!=null&&i.fungible_info);return i&&t?e=(a=(n=(o=i==null?void 0:i.nft_info)==null?void 0:o.content)==null?void 0:n.preview)==null?void 0:a.url:i&&r&&(e=(p=(s=i==null?void 0:i.fungible_info)==null?void 0:s.icon)==null?void 0:p.url),e},getTransactionTransferTokenType(i){if(i!=null&&i.fungible_info)return"FUNGIBLE";if(i!=null&&i.nft_info)return"NFT"},getTransactionDescriptions(i){var _,D,B;const e=(_=i==null?void 0:i.metadata)==null?void 0:_.operationType,t=i==null?void 0:i.transfers,r=((D=i==null?void 0:i.transfers)==null?void 0:D.length)>0,o=((B=i==null?void 0:i.transfers)==null?void 0:B.length)>1,n=r&&(t==null?void 0:t.every(ne=>!!(ne!=null&&ne.fungible_info))),[a,s]=t;let p=this.getTransferDescription(a),h=this.getTransferDescription(s);if(!r)return(e==="send"||e==="receive")&&n?(p=H.getTruncateString({string:i==null?void 0:i.metadata.sentFrom,charsStart:4,charsEnd:6,truncate:"middle"}),h=H.getTruncateString({string:i==null?void 0:i.metadata.sentTo,charsStart:4,charsEnd:6,truncate:"middle"}),[p,h]):[i.metadata.status];if(o)return t.map(ne=>this.getTransferDescription(ne));let x="";return kw.includes(e)?x="+":Sw.includes(e)&&(x="-"),p=x.concat(p),[p]},getTransferDescription(i){var t;let e="";return i&&(i!=null&&i.nft_info?e=((t=i==null?void 0:i.nft_info)==null?void 0:t.name)||"-":i!=null&&i.fungible_info&&(e=this.getFungibleTransferDescription(i)||"-")),e},getFungibleTransferDescription(i){var r;return i?[this.getQuantityFixedValue(i==null?void 0:i.quantity.numeric),(r=i==null?void 0:i.fungible_info)==null?void 0:r.symbol].join(" ").trim():null},getQuantityFixedValue(i){return i?parseFloat(i).toFixed(Tw):null}};var Et=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let dt=class extends w{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.balance="show",this.charsStart=4,this.charsEnd=6,this.address=m.state.address,this.balanceVal=m.state.balance,this.balanceSymbol=m.state.balanceSymbol,this.profileName=m.state.profileName,this.profileImage=m.state.profileImage,this.network=T.state.caipNetwork,this.isUnsupportedChain=T.state.isUnsupportedChain,this.unsubscribe.push(m.subscribe(e=>{e.isConnected?(this.address=e.address,this.balanceVal=e.balance,this.profileName=e.profileName,this.profileImage=e.profileImage,this.balanceSymbol=e.balanceSymbol):(this.address="",this.balanceVal="",this.profileName="",this.profileImage="",this.balanceSymbol="")}),T.subscribeKey("caipNetwork",e=>{this.network=e}),T.subscribeKey("isUnsupportedChain",e=>{this.isUnsupportedChain=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=we.getNetworkImage(this.network),t=this.balance==="show";return l`
      <wui-account-button
        .disabled=${!!this.disabled}
        .isUnsupportedChain=${this.isUnsupportedChain}
        address=${$(this.address)}
        profileName=${$(this.profileName)}
        networkSrc=${$(e)}
        avatarSrc=${$(this.profileImage)}
        balance=${t?k.formatBalance(this.balanceVal,this.balanceSymbol):""}
        @click=${this.onClick.bind(this)}
        data-testid="account-button"
        .charsStart=${this.charsStart}
        .charsEnd=${this.charsEnd}
      >
      </wui-account-button>
    `}onClick(){this.isUnsupportedChain?q.open({view:"UnsupportedChain"}):q.open()}};Et([c({type:Boolean})],dt.prototype,"disabled",void 0);Et([c()],dt.prototype,"balance",void 0);Et([c()],dt.prototype,"charsStart",void 0);Et([c()],dt.prototype,"charsEnd",void 0);Et([d()],dt.prototype,"address",void 0);Et([d()],dt.prototype,"balanceVal",void 0);Et([d()],dt.prototype,"balanceSymbol",void 0);Et([d()],dt.prototype,"profileName",void 0);Et([d()],dt.prototype,"profileImage",void 0);Et([d()],dt.prototype,"network",void 0);Et([d()],dt.prototype,"isUnsupportedChain",void 0);dt=Et([f("w3m-account-button")],dt);const Aw=b`
  :host {
    display: block;
    width: max-content;
  }
`;var $t=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let ot=class extends w{constructor(){super(...arguments),this.unsubscribe=[],this.disabled=!1,this.balance=void 0,this.size=void 0,this.label=void 0,this.loadingLabel=void 0,this.charsStart=4,this.charsEnd=6,this.isAccount=m.state.isConnected,this.isLoading=q.state.loading,this.balanceVal=m.state.balance,this.balanceSymbol=m.state.balanceSymbol}firstUpdated(){this.unsubscribe.push(m.subscribe(e=>{this.isAccount=e.isConnected,this.balanceVal=e.balance,this.balanceSymbol=e.balanceSymbol}),q.subscribeKey("loading",e=>{this.isLoading=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return this.balanceVal&&this.balanceSymbol&&this.isAccount&&!this.isLoading?l`
          <w3m-account-button
            .disabled=${!!this.disabled}
            balance=${$(this.balance)}
            .charsStart=${$(this.charsStart)}
            .charsEnd=${$(this.charsEnd)}
          >
          </w3m-account-button>
        `:l`
          <w3m-connect-button
            size=${$(this.size)}
            label=${$(this.label)}
            loadingLabel=${$(this.loadingLabel)}
          ></w3m-connect-button>
        `}};ot.styles=Aw;$t([c({type:Boolean})],ot.prototype,"disabled",void 0);$t([c()],ot.prototype,"balance",void 0);$t([c()],ot.prototype,"size",void 0);$t([c()],ot.prototype,"label",void 0);$t([c()],ot.prototype,"loadingLabel",void 0);$t([c()],ot.prototype,"charsStart",void 0);$t([c()],ot.prototype,"charsEnd",void 0);$t([d()],ot.prototype,"isAccount",void 0);$t([d()],ot.prototype,"isLoading",void 0);$t([d()],ot.prototype,"balanceVal",void 0);$t([d()],ot.prototype,"balanceSymbol",void 0);ot=$t([f("w3m-button")],ot);var Ir=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let In=class extends w{constructor(){super(),this.unsubscribe=[],this.size="md",this.label="Connect Wallet",this.loadingLabel="Connecting...",this.open=q.state.open,this.loading=q.state.loading,this.unsubscribe.push(q.subscribe(e=>{this.open=e.open,this.loading=e.loading}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.loading||this.open;return l`
      <wui-connect-button
        size=${$(this.size)}
        .loading=${e}
        @click=${this.onClick.bind(this)}
        data-testid="connect-button"
      >
        ${e?this.loadingLabel:this.label}
      </wui-connect-button>
    `}onClick(){this.open?q.close():this.loading||q.open()}};Ir([c()],In.prototype,"size",void 0);Ir([c()],In.prototype,"label",void 0);Ir([c()],In.prototype,"loadingLabel",void 0);Ir([d()],In.prototype,"open",void 0);Ir([d()],In.prototype,"loading",void 0);In=Ir([f("w3m-connect-button")],In);const Ew=b`
  :host {
    display: block;
    width: max-content;
  }
`;var qn=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Ti=class extends w{constructor(){super(...arguments),this.unsubscribe=[],this.disabled=!1,this.network=T.state.caipNetwork,this.connected=m.state.isConnected,this.loading=q.state.loading,this.isUnsupportedChain=T.state.isUnsupportedChain}firstUpdated(){this.unsubscribe.push(T.subscribeKey("caipNetwork",e=>this.network=e),m.subscribeKey("isConnected",e=>this.connected=e),q.subscribeKey("loading",e=>this.loading=e),T.subscribeKey("isUnsupportedChain",e=>this.isUnsupportedChain=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return l`
      <wui-network-button
        data-testid="w3m-network-button"
        .disabled=${!!(this.disabled||this.loading)}
        .isUnsupportedChain=${this.isUnsupportedChain}
        imageSrc=${$(we.getNetworkImage(this.network))}
        @click=${this.onClick.bind(this)}
      >
        ${this.getLabel()}
        <slot></slot>
      </wui-network-button>
    `}getLabel(){return this.label?this.label:this.isUnsupportedChain?"Switch Network":this.network?this.network.name:this.connected?"Unknown Network":"Select Network"}onClick(){this.loading||(R.sendEvent({type:"track",event:"CLICK_NETWORKS"}),q.open({view:"Networks"}))}};Ti.styles=Ew;qn([c({type:Boolean})],Ti.prototype,"disabled",void 0);qn([c({type:String})],Ti.prototype,"label",void 0);qn([d()],Ti.prototype,"network",void 0);qn([d()],Ti.prototype,"connected",void 0);qn([d()],Ti.prototype,"loading",void 0);qn([d()],Ti.prototype,"isUnsupportedChain",void 0);Ti=qn([f("w3m-network-button")],Ti);const $w=b`
  :host {
    --prev-height: 0px;
    --new-height: 0px;
    display: block;
  }

  div.w3m-router-container {
    transform: translateY(0);
    opacity: 1;
  }

  div.w3m-router-container[view-direction='prev'] {
    animation:
      slide-left-out 150ms forwards ease,
      slide-left-in 150ms forwards ease;
    animation-delay: 0ms, 200ms;
  }

  div.w3m-router-container[view-direction='next'] {
    animation:
      slide-right-out 150ms forwards ease,
      slide-right-in 150ms forwards ease;
    animation-delay: 0ms, 200ms;
  }

  @keyframes slide-left-out {
    from {
      transform: translateX(0px);
      opacity: 1;
    }
    to {
      transform: translateX(10px);
      opacity: 0;
    }
  }

  @keyframes slide-left-in {
    from {
      transform: translateX(-10px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes slide-right-out {
    from {
      transform: translateX(0px);
      opacity: 1;
    }
    to {
      transform: translateX(-10px);
      opacity: 0;
    }
  }

  @keyframes slide-right-in {
    from {
      transform: translateX(10px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;var Rw={};const hi={ACCOUNT_TABS:[{label:"Tokens"},{label:"NFTs"},{label:"Activity"}],SECURE_SITE_ORIGIN:Rw.NEXT_PUBLIC_SECURE_SITE_ORIGIN||"https://secure.walletconnect.org",VIEW_DIRECTION:{Next:"next",Prev:"prev"},ANIMATION_DURATIONS:{HeaderText:120,ModalHeight:150,ViewTransition:150}};var Al=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Co=class extends w{constructor(){super(),this.resizeObserver=void 0,this.prevHeight="0px",this.prevHistoryLength=1,this.unsubscribe=[],this.view=g.state.view,this.viewDirection="",this.unsubscribe.push(g.subscribeKey("view",e=>this.onViewChange(e)))}firstUpdated(){this.resizeObserver=new ResizeObserver(([e])=>{const t=`${e==null?void 0:e.contentRect.height}px`;this.prevHeight!=="0px"&&(this.style.setProperty("--prev-height",this.prevHeight),this.style.setProperty("--new-height",t),this.style.animation="w3m-view-height 150ms forwards ease",this.style.height="auto"),setTimeout(()=>{this.prevHeight=t,this.style.animation="unset"},hi.ANIMATION_DURATIONS.ModalHeight)}),this.resizeObserver.observe(this.getWrapper())}disconnectedCallback(){var e;(e=this.resizeObserver)==null||e.unobserve(this.getWrapper()),this.unsubscribe.forEach(t=>t())}render(){return l`<div class="w3m-router-container" view-direction="${this.viewDirection}">
      ${this.viewTemplate()}
    </div>`}viewTemplate(){switch(this.view){case"AccountSettings":return l`<w3m-account-settings-view></w3m-account-settings-view>`;case"Account":return l`<w3m-account-view></w3m-account-view>`;case"AllWallets":return l`<w3m-all-wallets-view></w3m-all-wallets-view>`;case"ApproveTransaction":return l`<w3m-approve-transaction-view></w3m-approve-transaction-view>`;case"BuyInProgress":return l`<w3m-buy-in-progress-view></w3m-buy-in-progress-view>`;case"ChooseAccountName":return l`<w3m-choose-account-name-view></w3m-choose-account-name-view>`;case"Connect":return l`<w3m-connect-view></w3m-connect-view>`;case"ConnectingWalletConnect":return l`<w3m-connecting-wc-view></w3m-connecting-wc-view>`;case"ConnectingExternal":return l`<w3m-connecting-external-view></w3m-connecting-external-view>`;case"ConnectingSiwe":return l`<w3m-connecting-siwe-view></w3m-connecting-siwe-view>`;case"ConnectWallets":return l`<w3m-connect-wallets-view></w3m-connect-wallets-view>`;case"ConnectSocials":return l`<w3m-connect-socials-view></w3m-connect-socials-view>`;case"ConnectingSocial":return l`<w3m-connecting-social-view></w3m-connecting-social-view>`;case"Downloads":return l`<w3m-downloads-view></w3m-downloads-view>`;case"EmailVerifyOtp":return l`<w3m-email-verify-otp-view></w3m-email-verify-otp-view>`;case"EmailVerifyDevice":return l`<w3m-email-verify-device-view></w3m-email-verify-device-view>`;case"GetWallet":return l`<w3m-get-wallet-view></w3m-get-wallet-view>`;case"Networks":return l`<w3m-networks-view></w3m-networks-view>`;case"SwitchNetwork":return l`<w3m-network-switch-view></w3m-network-switch-view>`;case"Profile":return l`<w3m-profile-view></w3m-profile-view>`;case"SelectAddresses":return l`<w3m-select-addresses-view></w3m-select-addresses-view>`;case"SwitchAddress":return l`<w3m-switch-address-view></w3m-switch-address-view>`;case"Transactions":return l`<w3m-transactions-view></w3m-transactions-view>`;case"OnRampProviders":return l`<w3m-onramp-providers-view></w3m-onramp-providers-view>`;case"OnRampActivity":return l`<w3m-onramp-activity-view></w3m-onramp-activity-view>`;case"OnRampTokenSelect":return l`<w3m-onramp-token-select-view></w3m-onramp-token-select-view>`;case"OnRampFiatSelect":return l`<w3m-onramp-fiat-select-view></w3m-onramp-fiat-select-view>`;case"UpgradeEmailWallet":return l`<w3m-upgrade-wallet-view></w3m-upgrade-wallet-view>`;case"UpgradeToSmartAccount":return l`<w3m-upgrade-to-smart-account-view></w3m-upgrade-to-smart-account-view>`;case"UpdateEmailWallet":return l`<w3m-update-email-wallet-view></w3m-update-email-wallet-view>`;case"UpdateEmailPrimaryOtp":return l`<w3m-update-email-primary-otp-view></w3m-update-email-primary-otp-view>`;case"UpdateEmailSecondaryOtp":return l`<w3m-update-email-secondary-otp-view></w3m-update-email-secondary-otp-view>`;case"UnsupportedChain":return l`<w3m-unsupported-chain-view></w3m-unsupported-chain-view>`;case"Swap":return l`<w3m-swap-view></w3m-swap-view>`;case"SwapSelectToken":return l`<w3m-swap-select-token-view></w3m-swap-select-token-view>`;case"SwapPreview":return l`<w3m-swap-preview-view></w3m-swap-preview-view>`;case"WalletSend":return l`<w3m-wallet-send-view></w3m-wallet-send-view>`;case"WalletSendSelectToken":return l`<w3m-wallet-send-select-token-view></w3m-wallet-send-select-token-view>`;case"WalletSendPreview":return l`<w3m-wallet-send-preview-view></w3m-wallet-send-preview-view>`;case"WhatIsABuy":return l`<w3m-what-is-a-buy-view></w3m-what-is-a-buy-view>`;case"WalletReceive":return l`<w3m-wallet-receive-view></w3m-wallet-receive-view>`;case"WalletCompatibleNetworks":return l`<w3m-wallet-compatible-networks-view></w3m-wallet-compatible-networks-view>`;case"WhatIsAWallet":return l`<w3m-what-is-a-wallet-view></w3m-what-is-a-wallet-view>`;case"WhatIsANetwork":return l`<w3m-what-is-a-network-view></w3m-what-is-a-network-view>`;case"ConnectingFarcaster":return l`<w3m-connecting-farcaster-view></w3m-connecting-farcaster-view>`;case"RegisterAccountName":return l`<w3m-register-account-name-view></w3m-register-account-name-view>`;case"RegisterAccountNameSuccess":return l`<w3m-register-account-name-success-view></w3m-register-account-name-success-view>`;default:return l`<w3m-connect-view></w3m-connect-view>`}}onViewChange(e){lt.hide();let t=hi.VIEW_DIRECTION.Next;const{history:r}=g.state;r.length<this.prevHistoryLength&&(t=hi.VIEW_DIRECTION.Prev),this.prevHistoryLength=r.length,this.viewDirection=t,setTimeout(()=>{this.view=e},hi.ANIMATION_DURATIONS.ViewTransition)}getWrapper(){var e;return(e=this.shadowRoot)==null?void 0:e.querySelector("div")}};Co.styles=$w;Al([d()],Co.prototype,"view",void 0);Al([d()],Co.prototype,"viewDirection",void 0);Co=Al([f("w3m-router")],Co);const Iw=b`
  :host > wui-flex {
    width: 100%;
    max-width: 360px;
  }

  :host > wui-flex > wui-flex {
    border-radius: var(--wui-border-radius-l);
    width: 100%;
  }

  .amounts-container {
    width: 100%;
  }
`;var Ji=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};const Ow={USD:"$",EUR:"€",GBP:"£"},Nw=[100,250,500,1e3];let Qt=class extends w{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.connected=m.state.isConnected,this.loading=q.state.loading,this.paymentCurrency=he.state.paymentCurrency,this.paymentAmount=he.state.paymentAmount,this.purchaseAmount=he.state.purchaseAmount,this.quoteLoading=he.state.quotesLoading,this.unsubscribe.push(m.subscribeKey("isConnected",e=>{this.connected=e}),q.subscribeKey("loading",e=>{this.loading=e}),he.subscribe(e=>{this.paymentCurrency=e.paymentCurrency,this.paymentAmount=e.paymentAmount,this.purchaseAmount=e.purchaseAmount,this.quoteLoading=e.quotesLoading}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return l`
      <wui-flex flexDirection="column" justifyContent="center" alignItems="center">
        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <w3m-onramp-input
            type="Fiat"
            @inputChange=${this.onPaymentAmountChange.bind(this)}
            .value=${this.paymentAmount||0}
          ></w3m-onramp-input>
          <w3m-onramp-input
            type="Token"
            .value=${this.purchaseAmount||0}
            .loading=${this.quoteLoading}
          ></w3m-onramp-input>
          <wui-flex justifyContent="space-evenly" class="amounts-container" gap="xs">
            ${Nw.map(e=>{var t;return l`<wui-button
                  variant=${this.paymentAmount===e?"accent":"neutral"}
                  size="md"
                  textVariant="paragraph-600"
                  fullWidth
                  @click=${()=>this.selectPresetAmount(e)}
                  >${`${Ow[((t=this.paymentCurrency)==null?void 0:t.id)||"USD"]} ${e}`}</wui-button
                >`})}
          </wui-flex>
          ${this.templateButton()}
        </wui-flex>
      </wui-flex>
    `}templateButton(){return this.connected?l`<wui-button
          @click=${this.getQuotes.bind(this)}
          variant="main"
          fullWidth
          size="lg"
          borderRadius="xs"
        >
          Get quotes
        </wui-button>`:l`<wui-button
          @click=${this.openModal.bind(this)}
          variant="accent"
          fullWidth
          size="lg"
          borderRadius="xs"
        >
          Connect wallet
        </wui-button>`}getQuotes(){this.loading||q.open({view:"OnRampProviders"})}openModal(){q.open({view:"Connect"})}async onPaymentAmountChange(e){he.setPaymentAmount(Number(e.detail)),await he.getQuote()}async selectPresetAmount(e){he.setPaymentAmount(e),await he.getQuote()}};Qt.styles=Iw;Ji([c({type:Boolean})],Qt.prototype,"disabled",void 0);Ji([d()],Qt.prototype,"connected",void 0);Ji([d()],Qt.prototype,"loading",void 0);Ji([d()],Qt.prototype,"paymentCurrency",void 0);Ji([d()],Qt.prototype,"paymentAmount",void 0);Ji([d()],Qt.prototype,"purchaseAmount",void 0);Ji([d()],Qt.prototype,"quoteLoading",void 0);Qt=Ji([f("w3m-onramp-widget")],Qt);var li=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Wt=class extends w{constructor(){super(),this.usubscribe=[],this.networkImages=Me.state.networkImages,this.address=m.state.address,this.profileImage=m.state.profileImage,this.profileName=m.state.profileName,this.network=T.state.caipNetwork,this.preferredAccountType=m.state.preferredAccountType,this.disconnecting=!1,this.loading=!1,this.switched=!1,this.text="",this.usubscribe.push(m.subscribe(e=>{e.address?(this.address=e.address,this.profileImage=e.profileImage,this.profileName=e.profileName,this.preferredAccountType=e.preferredAccountType):q.close()}),m.subscribeKey("preferredAccountType",e=>this.preferredAccountType=e),T.subscribeKey("caipNetwork",e=>{e!=null&&e.id&&(this.network=e)}))}disconnectedCallback(){this.usubscribe.forEach(e=>e())}render(){var r,o,n;if(!this.address)throw new Error("w3m-account-settings-view: No account provided");const e=this.networkImages[((r=this.network)==null?void 0:r.imageId)??""],t=(o=this.profileName)==null?void 0:o.split(".")[0];return l`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="l"
        .padding=${["0","xl","m","xl"]}
      >
        <wui-avatar
          alt=${this.address}
          address=${this.address}
          imageSrc=${$(this.profileImage)}
          size="2lg"
        ></wui-avatar>
        <wui-flex flexDirection="column" alignItems="center">
          <wui-flex gap="3xs" alignItems="center" justifyContent="center">
            <wui-text variant="title-6-600" color="fg-100" data-testid="account-settings-address">
              ${t?H.getTruncateString({string:t,charsStart:20,charsEnd:0,truncate:"end"}):H.getTruncateString({string:this.address,charsStart:4,charsEnd:6,truncate:"middle"})}
            </wui-text>
            <wui-icon-link
              size="md"
              icon="copy"
              iconColor="fg-200"
              @click=${this.onCopyAddress}
            ></wui-icon-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>
      <wui-flex flexDirection="column" gap="m">
        <wui-flex flexDirection="column" gap="xs" .padding=${["0","l","m","l"]}>
          ${this.authCardTemplate()}
          <w3m-account-auth-button></w3m-account-auth-button>
          <wui-list-item
            .variant=${e?"image":"icon"}
            iconVariant="overlay"
            icon="networkPlaceholder"
            imageSrc=${$(e)}
            ?chevron=${this.isAllowedNetworkSwitch()}
            @click=${this.onNetworks.bind(this)}
            data-testid="account-switch-network-button"
          >
            <wui-text variant="paragraph-500" color="fg-100">
              ${((n=this.network)==null?void 0:n.name)??"Unknown"}
            </wui-text>
          </wui-list-item>
          ${this.togglePreferredAccountBtnTemplate()} ${this.chooseNameButtonTemplate()}
          <wui-list-item
            variant="icon"
            iconVariant="overlay"
            icon="disconnect"
            ?chevron=${!1}
            .loading=${this.disconnecting}
            @click=${this.onDisconnect.bind(this)}
            data-testid="disconnect-button"
          >
            <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
          </wui-list-item>
        </wui-flex>
      </wui-flex>
    `}chooseNameButtonTemplate(){const e=oe.getConnectedConnector();return!P.getAuthConnector()||e!=="AUTH"||this.profileName?null:l`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="id"
        iconSize="sm"
        ?chevron=${!0}
        @click=${this.onChooseName.bind(this)}
        data-testid="account-choose-name-button"
      >
        <wui-text variant="paragraph-500" color="fg-100">Choose account name </wui-text>
      </wui-list-item>
    `}authCardTemplate(){const e=oe.getConnectedConnector(),t=P.getAuthConnector(),{origin:r}=location;return!t||e!=="AUTH"||r.includes(Ue.SECURE_SITE)?null:l`
      <wui-notice-card
        @click=${this.onGoToUpgradeView.bind(this)}
        label="Upgrade your wallet"
        description="Transition to a self-custodial wallet"
        icon="wallet"
        data-testid="w3m-wallet-upgrade-card"
      ></wui-notice-card>
    `}isAllowedNetworkSwitch(){const e=T.getRequestedCaipNetworks(),t=e?e.length>1:!1,r=e==null?void 0:e.find(({id:o})=>{var n;return o===((n=this.network)==null?void 0:n.id)});return t||!r}onCopyAddress(){try{this.profileName?(k.copyToClopboard(this.profileName),z.showSuccess("Name copied")):this.address&&(k.copyToClopboard(this.address),z.showSuccess("Address copied"))}catch{z.showError("Failed to copy")}}togglePreferredAccountBtnTemplate(){const e=T.checkIfSmartAccountEnabled(),t=oe.getConnectedConnector();return!P.getAuthConnector()||t!=="AUTH"||!e?null:(this.switched||(this.text=this.preferredAccountType===ae.ACCOUNT_TYPES.SMART_ACCOUNT?"Switch to your EOA":"Switch to your smart account"),l`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="swapHorizontalBold"
        iconSize="sm"
        ?chevron=${!0}
        ?loading=${this.loading}
        @click=${this.changePreferredAccountType.bind(this)}
        data-testid="account-toggle-preferred-account-type"
      >
        <wui-text variant="paragraph-500" color="fg-100">${this.text}</wui-text>
      </wui-list-item>
    `)}onChooseName(){g.push("ChooseAccountName")}async changePreferredAccountType(){const e=T.checkIfSmartAccountEnabled(),t=this.preferredAccountType===ae.ACCOUNT_TYPES.SMART_ACCOUNT||!e?ae.ACCOUNT_TYPES.EOA:ae.ACCOUNT_TYPES.SMART_ACCOUNT;P.getAuthConnector()&&(this.loading=!0,await G.setPreferredAccountType(t),this.text=t===ae.ACCOUNT_TYPES.SMART_ACCOUNT?"Switch to your EOA":"Switch to your smart account",this.switched=!0,fe.resetSend(),this.loading=!1,this.requestUpdate())}onNetworks(){this.isAllowedNetworkSwitch()&&g.push("Networks")}async onDisconnect(){try{this.disconnecting=!0,await G.disconnect(),R.sendEvent({type:"track",event:"DISCONNECT_SUCCESS"}),q.close()}catch{R.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),z.showError("Failed to disconnect")}finally{this.disconnecting=!1}}onGoToUpgradeView(){R.sendEvent({type:"track",event:"EMAIL_UPGRADE_FROM_MODAL"}),g.push("UpgradeEmailWallet")}};li([d()],Wt.prototype,"address",void 0);li([d()],Wt.prototype,"profileImage",void 0);li([d()],Wt.prototype,"profileName",void 0);li([d()],Wt.prototype,"network",void 0);li([d()],Wt.prototype,"preferredAccountType",void 0);li([d()],Wt.prototype,"disconnecting",void 0);li([d()],Wt.prototype,"loading",void 0);li([d()],Wt.prototype,"switched",void 0);li([d()],Wt.prototype,"text",void 0);Wt=li([f("w3m-account-settings-view")],Wt);var Pw=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let hc=class extends w{render(){const e=oe.getConnectedConnector(),t=P.getAuthConnector();return l`
      ${t!=null&&t.walletFeatures&&e==="AUTH"?this.walletFeaturesTemplate():this.defaultTemplate()}
    `}walletFeaturesTemplate(){return l`<w3m-account-wallet-features-widget></w3m-account-wallet-features-widget>`}defaultTemplate(){return l`<w3m-account-default-widget></w3m-account-default-widget>`}};hc=Pw([f("w3m-account-view")],hc);var _u=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let js=class extends w{constructor(){super(...arguments),this.search="",this.onDebouncedSearch=k.debounce(e=>{this.search=e})}render(){const e=this.search.length>=2;return l`
      <wui-flex .padding=${["0","s","s","s"]} gap="s">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${e?l`<w3m-all-wallets-search query=${this.search}></w3m-all-wallets-search>`:l`<w3m-all-wallets-list></w3m-all-wallets-list>`}
    `}onInputChange(e){this.onDebouncedSearch(e.detail)}qrButtonTemplate(){return k.isMobile()?l`
        <wui-icon-box
          size="lg"
          iconSize="xl"
          iconColor="accent-100"
          backgroundColor="accent-100"
          icon="qrCode"
          background="transparent"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `:null}onWalletConnectQr(){g.push("ConnectingWalletConnect")}};_u([d()],js.prototype,"search",void 0);js=_u([f("w3m-all-wallets-view")],js);const Dw=b`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-visual {
    width: var(--wui-wallet-image-size-lg);
    height: var(--wui-wallet-image-size-lg);
    border-radius: calc(var(--wui-border-radius-5xs) * 9 - var(--wui-border-radius-xxs));
    position: relative;
    overflow: hidden;
  }

  wui-visual::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(var(--wui-border-radius-5xs) * 9 - var(--wui-border-radius-xxs));
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition:
      opacity var(--wui-ease-out-power-2) var(--wui-duration-lg),
      transform var(--wui-ease-out-power-2) var(--wui-duration-lg);
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }

  wui-link {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
  }
`;var zt=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let pt=class extends w{constructor(){super(),this.unsubscribe=[],this.selectedOnRampProvider=he.state.selectedProvider,this.uri=G.state.wcUri,this.ready=!1,this.showRetry=!1,this.buffering=!1,this.error=!1,this.startTime=null,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(he.subscribeKey("selectedProvider",e=>{this.selectedOnRampProvider=e})),this.watchTransactions()}disconnectedCallback(){this.intervalId&&clearInterval(this.intervalId)}render(){var r,o;let e="Continue in external window";this.error?e="Buy failed":this.selectedOnRampProvider&&(e=`Buy in ${(r=this.selectedOnRampProvider)==null?void 0:r.label}`);const t=this.error?"Buy can be declined from your side or due to and error on the provider app":"We’ll notify you once your Buy is processed";return l`
      <wui-flex
        data-error=${$(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-visual
            name=${$((o=this.selectedOnRampProvider)==null?void 0:o.name)}
            size="lg"
            class="provider-image"
          >
          </wui-visual>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text variant="paragraph-500" color=${this.error?"error-100":"fg-100"}>
            ${e}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${t}</wui-text>
        </wui-flex>

        ${this.error?this.tryAgainTemplate():null}
      </wui-flex>

      <wui-flex .padding=${["0","xl","xl","xl"]} justifyContent="center">
        <wui-link @click=${this.onCopyUri} color="fg-200">
          <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
          Copy link
        </wui-link>
      </wui-flex>
    `}watchTransactions(){if(this.selectedOnRampProvider)switch(this.selectedOnRampProvider.name){case"coinbase":this.startTime=Date.now(),this.initializeCoinbaseTransactions();break}}async initializeCoinbaseTransactions(){await this.watchCoinbaseTransactions(),this.intervalId=setInterval(()=>this.watchCoinbaseTransactions(),4e3)}async watchCoinbaseTransactions(){try{const e=m.state.address,t=A.state.projectId;if(!e)throw new Error("No address found");(await ke.fetchTransactions({account:e,onramp:"coinbase",projectId:t})).data.filter(n=>new Date(n.metadata.minedAt)>new Date(this.startTime)||n.metadata.status==="ONRAMP_TRANSACTION_STATUS_IN_PROGRESS").length?(clearInterval(this.intervalId),g.replace("OnRampActivity")):this.startTime&&Date.now()-this.startTime>=18e4&&(clearInterval(this.intervalId),this.error=!0)}catch(e){z.showError(e)}}onTryAgain(){this.selectedOnRampProvider&&(this.error=!1,k.openHref(this.selectedOnRampProvider.url,"popupWindow","width=600,height=800,scrollbars=yes"))}tryAgainTemplate(){var e;return(e=this.selectedOnRampProvider)!=null&&e.url?l`<wui-button size="md" variant="accent" @click=${this.onTryAgain.bind(this)}>
      <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
      Try again
    </wui-button>`:null}loaderTemplate(){const e=Ae.state.themeVariables["--w3m-border-radius-master"],t=e?parseInt(e.replace("px",""),10):4;return l`<wui-loading-thumbnail radius=${t*9}></wui-loading-thumbnail>`}onCopyUri(){var e;if(!((e=this.selectedOnRampProvider)!=null&&e.url)){z.showError("No link found"),g.goBack();return}try{k.copyToClopboard(this.selectedOnRampProvider.url),z.showSuccess("Link copied")}catch{z.showError("Failed to copy")}}};pt.styles=Dw;zt([d()],pt.prototype,"intervalId",void 0);zt([d()],pt.prototype,"selectedOnRampProvider",void 0);zt([d()],pt.prototype,"uri",void 0);zt([d()],pt.prototype,"ready",void 0);zt([d()],pt.prototype,"showRetry",void 0);zt([d()],pt.prototype,"buffering",void 0);zt([d()],pt.prototype,"error",void 0);zt([d()],pt.prototype,"startTime",void 0);zt([c({type:Boolean})],pt.prototype,"isMobile",void 0);zt([c()],pt.prototype,"onRetry",void 0);pt=zt([f("w3m-buy-in-progress-view")],pt);const Uw=b`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    scrollbar-width: none;
    overflow-y: scroll;
    overflow-x: hidden;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }

  .all-wallets {
    flex-flow: column;
  }
`;var Tu=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Sa=class extends w{constructor(){super(),this.unsubscribe=[],this.connectors=P.state.connectors,this.unsubscribe.push(P.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return l`
      <wui-flex flexDirection="column" .padding=${["3xs","s","s","s"]}>
        <w3m-email-login-widget></w3m-email-login-widget>
        <w3m-social-login-widget></w3m-social-login-widget>
        ${this.walletListTemplate()}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}walletListTemplate(){const e=this.connectors.find(t=>t.type==="AUTH");return e!=null&&e.socials?e!=null&&e.showWallets?l`
          <wui-flex flexDirection="column" gap="xs" .margin=${["xs","0","0","0"]}>
            <w3m-connector-list></w3m-connector-list>
            <wui-flex class="all-wallets">
              <w3m-all-wallets-widget></w3m-all-wallets-widget>
            </wui-flex>
          </wui-flex>
        `:l`<wui-list-button
        @click=${this.onContinueWalletClick.bind(this)}
        text="Continue with a wallet"
      ></wui-list-button>`:l`<w3m-wallet-login-list></w3m-wallet-login-list>`}onContinueWalletClick(){g.push("ConnectWallets")}};Sa.styles=Uw;Tu([d()],Sa.prototype,"connectors",void 0);Sa=Tu([f("w3m-connect-view")],Sa);const Te={WALLET_CONNECT_CONNECTOR_ID:"walletConnect",INJECTED_CONNECTOR_ID:"injected",WALLET_STANDARD_CONNECTOR_ID:"announced",COINBASE_CONNECTOR_ID:"coinbaseWallet",COINBASE_SDK_CONNECTOR_ID:"coinbaseWalletSDK",SAFE_CONNECTOR_ID:"safe",LEDGER_CONNECTOR_ID:"ledger",EIP6963_CONNECTOR_ID:"eip6963",AUTH_CONNECTOR_ID:"w3mAuth",EIP155:"eip155",ADD_CHAIN_METHOD:"wallet_addEthereumChain",EIP6963_ANNOUNCE_EVENT:"eip6963:announceProvider",EIP6963_REQUEST_EVENT:"eip6963:requestProvider",CONNECTOR_RDNS_MAP:{coinbaseWallet:"com.coinbase.wallet",coinbaseWalletSDK:"com.coinbase.wallet"},VERSION:"5.1.0"},er={ConnectorExplorerIds:{[Te.COINBASE_CONNECTOR_ID]:"fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",[Te.COINBASE_SDK_CONNECTOR_ID]:"fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",[Te.SAFE_CONNECTOR_ID]:"225affb176778569276e484e1b92637ad061b01e13a048b35a9d280c3b58970f",[Te.LEDGER_CONNECTOR_ID]:"19177a98252e07ddfc9af2083ba8e07ef627cb6103467ffebb3f8f4205fd7927"},EIP155NetworkImageIds:{1:"ba0ba0cd-17c6-4806-ad93-f9d174f17900",42161:"3bff954d-5cb0-47a0-9a23-d20192e74600",43114:"30c46e53-e989-45fb-4549-be3bd4eb3b00",56:"93564157-2e8e-4ce7-81df-b264dbee9b00",250:"06b26297-fe0c-4733-5d6b-ffa5498aac00",10:"ab9c186a-c52f-464b-2906-ca59d760a400",137:"41d04d42-da3b-4453-8506-668cc0727900",100:"02b53f6a-e3d4-479e-1cb4-21178987d100",9001:"f926ff41-260d-4028-635e-91913fc28e00",324:"b310f07f-4ef7-49f3-7073-2a0a39685800",314:"5a73b3dd-af74-424e-cae0-0de859ee9400",4689:"34e68754-e536-40da-c153-6ef2e7188a00",1088:"3897a66d-40b9-4833-162f-a2c90531c900",1284:"161038da-44ae-4ec7-1208-0ea569454b00",1285:"f1d73bb6-5450-4e18-38f7-fb6484264a00",7777777:"845c60df-d429-4991-e687-91ae45791600",42220:"ab781bbc-ccc6-418d-d32d-789b15da1f00",8453:"7289c336-3981-4081-c5f4-efc26ac64a00",1313161554:"3ff73439-a619-4894-9262-4470c773a100",2020:"b8101fc0-9c19-4b6f-ec65-f6dfff106e00",2021:"b8101fc0-9c19-4b6f-ec65-f6dfff106e00","5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp":"a1b58899-f671-4276-6a5e-56ca5bd59700","4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z":"a1b58899-f671-4276-6a5e-56ca5bd59700",EtWTRABZaYq6iMfeYKouRu166VU2xqa1:"a1b58899-f671-4276-6a5e-56ca5bd59700"},ConnectorImageIds:{[Te.COINBASE_CONNECTOR_ID]:"0c2840c3-5b04-4c44-9661-fbd4b49e1800",[Te.COINBASE_SDK_CONNECTOR_ID]:"0c2840c3-5b04-4c44-9661-fbd4b49e1800",[Te.SAFE_CONNECTOR_ID]:"461db637-8616-43ce-035a-d89b8a1d5800",[Te.LEDGER_CONNECTOR_ID]:"54a1aa77-d202-4f8d-0fb2-5d2bb6db0300",[Te.WALLET_CONNECT_CONNECTOR_ID]:"ef1a1fcf-7fe8-4d69-bd6d-fda1345b4400",[Te.INJECTED_CONNECTOR_ID]:"07ba87ed-43aa-4adf-4540-9e6a2b9cae00"},ConnectorNamesMap:{[Te.INJECTED_CONNECTOR_ID]:"Browser Wallet",[Te.WALLET_CONNECT_CONNECTOR_ID]:"WalletConnect",[Te.COINBASE_CONNECTOR_ID]:"Coinbase",[Te.COINBASE_SDK_CONNECTOR_ID]:"Coinbase",[Te.LEDGER_CONNECTOR_ID]:"Ledger",[Te.SAFE_CONNECTOR_ID]:"Safe"},ConnectorTypesMap:{[Te.INJECTED_CONNECTOR_ID]:"INJECTED",[Te.WALLET_CONNECT_CONNECTOR_ID]:"WALLET_CONNECT",[Te.EIP6963_CONNECTOR_ID]:"ANNOUNCED",[Te.AUTH_CONNECTOR_ID]:"AUTH"},WalletConnectRpcChainIds:[1,5,11155111,10,420,42161,421613,137,80001,42220,1313161554,1313161555,56,97,43114,43113,100,8453,84531,7777777,999,324,280]};var Aa;(function(i){i.Google="google",i.Github="github",i.Apple="apple",i.Facebook="facebook",i.X="x",i.Discord="discord",i.Farcaster="farcaster"})(Aa||(Aa={}));const Ww=b`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition-property: opacity, transform;
    transition-duration: var(--wui-duration-lg);
    transition-timing-function: var(--wui-ease-out-power-2);
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }
`;var Yn=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};class st extends w{constructor(){var e,t,r,o;super(),this.wallet=(e=g.state.data)==null?void 0:e.wallet,this.connector=(t=g.state.data)==null?void 0:t.connector,this.timeout=void 0,this.secondaryBtnLabel="Try again",this.secondaryBtnIcon="refresh",this.secondaryLabel="Accept connection request in the wallet",this.onConnect=void 0,this.onRender=void 0,this.onAutoConnect=void 0,this.isWalletConnect=!0,this.unsubscribe=[],this.imageSrc=we.getWalletImage(this.wallet)??we.getConnectorImage(this.connector),this.name=((r=this.wallet)==null?void 0:r.name)??((o=this.connector)==null?void 0:o.name)??"Wallet",this.isRetrying=!1,this.uri=G.state.wcUri,this.error=G.state.wcError,this.ready=!1,this.showRetry=!1,this.buffering=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(G.subscribeKey("wcUri",n=>{var a;this.uri=n,this.isRetrying&&this.onRetry&&(this.isRetrying=!1,(a=this.onConnect)==null||a.call(this))}),G.subscribeKey("wcError",n=>this.error=n),G.subscribeKey("buffering",n=>this.buffering=n))}firstUpdated(){var e;(e=this.onAutoConnect)==null||e.call(this),this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),clearTimeout(this.timeout)}render(){var r;(r=this.onRender)==null||r.call(this),this.onShowRetry();const e=this.error?"Connection can be declined if a previous request is still active":this.secondaryLabel;let t=`Continue in ${this.name}`;return this.buffering&&(t="Connecting..."),this.error&&(t="Connection declined"),l`
      <wui-flex
        data-error=${$(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${$(this.imageSrc)}></wui-wallet-image>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text variant="paragraph-500" color=${this.error?"error-100":"fg-100"}>
            ${t}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${e}</wui-text>
        </wui-flex>

        <wui-button
          variant="accent"
          size="md"
          ?disabled=${!this.error&&this.buffering}
          @click=${this.onTryAgain.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name=${this.secondaryBtnIcon}></wui-icon>
          ${this.secondaryBtnLabel}
        </wui-button>
      </wui-flex>

      ${this.isWalletConnect?l`
            <wui-flex .padding=${["0","xl","xl","xl"]} justifyContent="center">
              <wui-link @click=${this.onCopyUri} color="fg-200">
                <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
                Copy link
              </wui-link>
            </wui-flex>
          `:null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onShowRetry(){var e;if(this.error&&!this.showRetry){this.showRetry=!0;const t=(e=this.shadowRoot)==null?void 0:e.querySelector("wui-button");t==null||t.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}onTryAgain(){var e,t;this.buffering||(G.setWcError(!1),this.onRetry?(this.isRetrying=!0,(e=this.onRetry)==null||e.call(this)):(t=this.onConnect)==null||t.call(this))}loaderTemplate(){const e=Ae.state.themeVariables["--w3m-border-radius-master"],t=e?parseInt(e.replace("px",""),10):4;return l`<wui-loading-thumbnail radius=${t*9}></wui-loading-thumbnail>`}onCopyUri(){try{this.uri&&(k.copyToClopboard(this.uri),z.showSuccess("Link copied"))}catch{z.showError("Failed to copy")}}}st.styles=Ww;Yn([d()],st.prototype,"uri",void 0);Yn([d()],st.prototype,"error",void 0);Yn([d()],st.prototype,"ready",void 0);Yn([d()],st.prototype,"showRetry",void 0);Yn([d()],st.prototype,"buffering",void 0);Yn([c({type:Boolean})],st.prototype,"isMobile",void 0);Yn([c()],st.prototype,"onRetry",void 0);var Mw=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let fc=class extends st{constructor(){if(super(),!this.connector)throw new Error("w3m-connecting-view: No connector provided");R.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.connector.name??"Unknown",platform:"browser"}}),this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),this.isWalletConnect=!1}async onConnectProxy(){try{this.error=!1,this.connector&&(this.connector.imageUrl&&oe.setConnectedWalletImageUrl(this.connector.imageUrl),(this.connector.id!==Te.COINBASE_SDK_CONNECTOR_ID||!this.error)&&(await G.connectExternal(this.connector),A.state.isSiweEnabled?g.push("ConnectingSiwe"):q.close(),R.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser",name:this.connector.name||"Unknown"}})))}catch(e){R.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(e==null?void 0:e.message)??"Unknown"}}),this.error=!0}}};fc=Mw([f("w3m-connecting-external-view")],fc);var El=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Ea=class extends w{constructor(){var e;super(),this.interval=void 0,this.lastRetry=Date.now(),this.wallet=(e=g.state.data)==null?void 0:e.wallet,this.platform=void 0,this.platforms=[],this.initializeConnection(),this.interval=setInterval(this.initializeConnection.bind(this),Ue.TEN_SEC_MS)}disconnectedCallback(){clearTimeout(this.interval)}render(){return this.wallet?(this.determinePlatforms(),l`
      ${this.headerTemplate()}
      <div>${this.platformTemplate()}</div>
    `):l`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`}async initializeConnection(e=!1){try{const{wcPairingExpiry:t}=G.state;if(e||k.isPairingExpired(t)){if(this.wallet){const r=we.getWalletImage(this.wallet);r&&oe.setConnectedWalletImageUrl(r)}else{const o=P.state.connectors.find(a=>a.type==="WALLET_CONNECT"),n=we.getConnectorImage(o);n&&oe.setConnectedWalletImageUrl(n)}if(await G.connectWalletConnect(),this.finalizeConnection(),oe.getConnectedConnector()==="AUTH"&&A.state.hasMultipleAddresses)g.push("SelectAddresses");else if(A.state.isSiweEnabled){const{SIWEController:r}=await nr(async()=>{const{SIWEController:o}=await import("./index-DkkgsBGE.js");return{SIWEController:o}},__vite__mapDeps([0,1,2,3]),import.meta.url);r.state.status==="success"?q.close():g.push("ConnectingSiwe")}else q.close()}}catch(t){R.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(t==null?void 0:t.message)??"Unknown"}}),G.setWcError(!0),k.isAllowedRetry(this.lastRetry)&&(z.showError("Declined"),this.lastRetry=Date.now(),this.initializeConnection(!0))}}finalizeConnection(){var r;const{wcLinking:e,recentWallet:t}=G.state;e&&oe.setWalletConnectDeepLink(e),t&&oe.setWeb3ModalRecent(t),R.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:e?"mobile":"qrcode",name:((r=this.wallet)==null?void 0:r.name)||"Unknown"}})}determinePlatforms(){if(!this.wallet)throw new Error("w3m-connecting-wc-view:determinePlatforms No wallet");if(this.platform)return;const{mobile_link:e,desktop_link:t,webapp_link:r,injected:o,rdns:n}=this.wallet,a=o==null?void 0:o.map(({injected_id:ne})=>ne).filter(Boolean),s=n?[n]:a??[],p=A.state.isUniversalProvider?!1:s.length,h=e,x=r,_=G.checkInstalled(s),D=p&&_,B=t&&!k.isMobile();D&&this.platforms.push("browser"),h&&this.platforms.push(k.isMobile()?"mobile":"qrcode"),x&&this.platforms.push("web"),B&&this.platforms.push("desktop"),!D&&p&&this.platforms.push("unsupported"),this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case"browser":return l`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;case"desktop":return l`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;case"web":return l`
          <w3m-connecting-wc-web .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-web>
        `;case"mobile":return l`
          <w3m-connecting-wc-mobile isMobile .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;case"qrcode":return l`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`;default:return l`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){return this.platforms.length>1?l`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `:null}async onSelectPlatform(e){var r;const t=(r=this.shadowRoot)==null?void 0:r.querySelector("div");t&&(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.platform=e,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};El([d()],Ea.prototype,"platform",void 0);El([d()],Ea.prototype,"platforms",void 0);Ea=El([f("w3m-connecting-wc-view")],Ea);const jw=b`
  .continue-button-container {
    width: 100%;
  }
`;var ku=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let $a=class extends w{constructor(){super(...arguments),this.loading=!1}render(){return l`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="xxl"
        .padding=${["0","0","l","0"]}
      >
        ${this.onboardingTemplate()} ${this.buttonsTemplate()}
        <wui-link
          @click=${()=>{k.openHref(al.URLS.FAQ,"_blank")}}
        >
          Learn more about names
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-link>
      </wui-flex>
    `}onboardingTemplate(){return l` <wui-flex
      flexDirection="column"
      gap="xxl"
      alignItems="center"
      .padding=${["0","xxl","0","xxl"]}
    >
      <wui-flex gap="s" alignItems="center" justifyContent="center">
        <wui-icon-box
          icon="id"
          size="xl"
          iconSize="xxl"
          iconColor="fg-200"
          backgroundColor="fg-200"
        ></wui-icon-box>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="s">
        <wui-text align="center" variant="medium-600" color="fg-100">
          Choose your account name
        </wui-text>
        <wui-text align="center" variant="paragraph-400" color="fg-100">
          Finally say goodbye to 0x addresses, name your account to make it easier to exchange
          assets
        </wui-text>
      </wui-flex>
    </wui-flex>`}buttonsTemplate(){return l`<wui-flex
      .padding=${["0","2l","0","2l"]}
      gap="s"
      class="continue-button-container"
    >
      <wui-button
        fullWidth
        .loading=${this.loading}
        size="lg"
        borderRadius="xs"
        @click=${this.handleContinue.bind(this)}
        >Choose name
      </wui-button>
    </wui-flex>`}handleContinue(){g.push("RegisterAccountName"),R.sendEvent({type:"track",event:"OPEN_ENS_FLOW",properties:{isSmartAccount:m.state.preferredAccountType===ae.ACCOUNT_TYPES.SMART_ACCOUNT}})}};$a.styles=jw;ku([d()],$a.prototype,"loading",void 0);$a=ku([f("w3m-choose-account-name-view")],$a);var Lw=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let wc=class extends w{constructor(){var e;super(...arguments),this.wallet=(e=g.state.data)==null?void 0:e.wallet}render(){if(!this.wallet)throw new Error("w3m-downloads-view");return l`
      <wui-flex gap="xs" flexDirection="column" .padding=${["s","s","l","s"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `}chromeTemplate(){var e;return(e=this.wallet)!=null&&e.chrome_store?l`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Chrome Extension</wui-text>
    </wui-list-item>`:null}iosTemplate(){var e;return(e=this.wallet)!=null&&e.app_store?l`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">iOS App</wui-text>
    </wui-list-item>`:null}androidTemplate(){var e;return(e=this.wallet)!=null&&e.play_store?l`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Android App</wui-text>
    </wui-list-item>`:null}homepageTemplate(){var e;return(e=this.wallet)!=null&&e.homepage?l`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="paragraph-500" color="fg-100">Website</wui-text>
      </wui-list-item>
    `:null}onChromeStore(){var e;(e=this.wallet)!=null&&e.chrome_store&&k.openHref(this.wallet.chrome_store,"_blank")}onAppStore(){var e;(e=this.wallet)!=null&&e.app_store&&k.openHref(this.wallet.app_store,"_blank")}onPlayStore(){var e;(e=this.wallet)!=null&&e.play_store&&k.openHref(this.wallet.play_store,"_blank")}onHomePage(){var e;(e=this.wallet)!=null&&e.homepage&&k.openHref(this.wallet.homepage,"_blank")}};wc=Lw([f("w3m-downloads-view")],wc);var Bw=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};const zw="https://walletconnect.com/explorer";let gc=class extends w{render(){return l`
      <wui-flex flexDirection="column" .padding=${["0","s","s","s"]} gap="xs">
        ${this.recommendedWalletsTemplate()}
        <wui-list-wallet
          name="Explore all"
          showAllWallets
          walletIcon="allWallets"
          icon="externalLink"
          @click=${()=>{k.openHref("https://walletconnect.com/explorer?type=wallet","_blank")}}
        ></wui-list-wallet>
      </wui-flex>
    `}recommendedWalletsTemplate(){const{recommended:e,featured:t}=V.state,{customWallets:r}=A.state;return[...t,...r??[],...e].slice(0,4).map(n=>l`
        <wui-list-wallet
          name=${n.name??"Unknown"}
          tagVariant="main"
          imageSrc=${$(we.getWalletImage(n))}
          @click=${()=>{k.openHref(n.homepage??zw,"_blank")}}
        ></wui-list-wallet>
      `)}};gc=Bw([f("w3m-get-wallet-view")],gc);const Vw=b`
  wui-flex {
    width: 100%;
  }

  .suggestion {
    background: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }

  .suggestion:hover {
    background-color: var(--wui-color-gray-glass-005);
    cursor: pointer;
  }

  .suggested-name {
    max-width: 75%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  form {
    width: 100%;
  }

  wui-icon-link {
    position: absolute;
    right: 20px;
    transform: translateY(11px);
  }
`;var en=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Jt=class extends w{constructor(){super(),this.formRef=zi(),this.usubscribe=[],this.name="",this.error="",this.loading=Ft.state.loading,this.suggestions=Ft.state.suggestions,this.registered=!1,this.profileName=m.state.profileName,this.onDebouncedNameInputChange=k.debounce(e=>{Ft.validateName(e)?(this.error="",this.name=e,Ft.getSuggestions(e),Ft.isNameRegistered(e).then(t=>{this.registered=t})):e.length<4?this.error="Name must be at least 4 characters long":this.error="Can only contain letters, numbers and - characters"}),this.usubscribe.push(Ft.subscribe(e=>{this.suggestions=e.suggestions,this.loading=e.loading}),m.subscribeKey("profileName",e=>{this.profileName=e,e&&(this.error="You already own a name")}))}firstUpdated(){var e;(e=this.formRef.value)==null||e.addEventListener("keydown",this.onEnterKey.bind(this))}disconnectedCallback(){var e;super.disconnectedCallback(),this.usubscribe.forEach(t=>t()),(e=this.formRef.value)==null||e.removeEventListener("keydown",this.onEnterKey.bind(this))}render(){return l`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="m"
        .padding=${["0","s","m","s"]}
      >
        <form ${Vi(this.formRef)} @submit=${this.onSubmitName.bind(this)}>
          <wui-ens-input
            @inputChange=${this.onNameInputChange.bind(this)}
            .errorMessage=${this.error}
            .value=${this.name}
          >
          </wui-ens-input>
          ${this.submitButtonTemplate()}
          <input type="submit" hidden />
        </form>
        ${this.templateSuggestions()}
      </wui-flex>
    `}submitButtonTemplate(){return this.isAllowedToSubmit()?l`
          <wui-icon-link
            size="sm"
            icon="chevronRight"
            iconcolor="accent-100"
            @click=${this.onSubmitName.bind(this)}
          >
          </wui-icon-link>
        `:null}onSelectSuggestion(e){return()=>{this.name=e,this.registered=!1,this.requestUpdate()}}onNameInputChange(e){this.onDebouncedNameInputChange(e.detail)}nameSuggestionTagTemplate(){return this.loading?l`<wui-loading-spinner size="lg" color="fg-100"></wui-loading-spinner>`:this.registered?l`<wui-tag variant="shade" size="lg">Registered</wui-tag>`:l`<wui-tag variant="success" size="lg">Available</wui-tag>`}templateSuggestions(){if(!this.name||this.name.length<4||this.error)return null;const e=this.registered?this.suggestions.filter(t=>t.name!==this.name):[];return l`<wui-flex flexDirection="column" gap="xxs" alignItems="center">
      <wui-flex
        data-testid="account-name-suggestion"
        .padding=${["m","m","m","m"]}
        justifyContent="space-between"
        class="suggestion"
      >
        <wui-text color="fg-100" variant="paragraph-400" class="suggested-name">
          ${this.name}</wui-text
        >${this.nameSuggestionTagTemplate()}
      </wui-flex>
      ${e.map(t=>this.availableNameTemplate(t.name))}
    </wui-flex>`}availableNameTemplate(e){return l` <wui-flex
      data-testid="account-name-suggestion"
      .padding=${["m","m","m","m"]}
      justifyContent="space-between"
      class="suggestion"
      @click=${this.onSelectSuggestion(e)}
    >
      <wui-text color="fg-100" variant="paragraph-400" class="suggested-name">
        ${e}
      </wui-text>
      <wui-tag variant="success" size="lg">Available</wui-tag>
    </wui-flex>`}isAllowedToSubmit(){return!this.loading&&!this.registered&&!this.error&&!this.profileName&&Ft.validateName(this.name)}async onSubmitName(){try{if(!this.isAllowedToSubmit())return;R.sendEvent({type:"track",event:"REGISTER_NAME_INITIATED",properties:{isSmartAccount:m.state.preferredAccountType===ae.ACCOUNT_TYPES.SMART_ACCOUNT,ensName:this.name}}),await Ft.registerName(this.name),R.sendEvent({type:"track",event:"REGISTER_NAME_SUCCESS",properties:{isSmartAccount:m.state.preferredAccountType===ae.ACCOUNT_TYPES.SMART_ACCOUNT,ensName:this.name}})}catch(e){z.showError(e.message),R.sendEvent({type:"track",event:"REGISTER_NAME_ERROR",properties:{isSmartAccount:m.state.preferredAccountType===ae.ACCOUNT_TYPES.SMART_ACCOUNT,ensName:this.name,error:(e==null?void 0:e.message)||"Unknown error"}})}}onEnterKey(e){e.key==="Enter"&&this.isAllowedToSubmit()&&this.onSubmitName()}};Jt.styles=Vw;en([c()],Jt.prototype,"errorMessage",void 0);en([d()],Jt.prototype,"name",void 0);en([d()],Jt.prototype,"error",void 0);en([d()],Jt.prototype,"loading",void 0);en([d()],Jt.prototype,"suggestions",void 0);en([d()],Jt.prototype,"registered",void 0);en([d()],Jt.prototype,"profileName",void 0);Jt=en([f("w3m-register-account-name-view")],Jt);const Hw=b`
  .continue-button-container {
    width: 100%;
  }
`;var Fw=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Ls=class extends w{render(){return l`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="xxl"
        .padding=${["0","0","l","0"]}
      >
        ${this.onboardingTemplate()} ${this.buttonsTemplate()}
        <wui-link
          @click=${()=>{k.openHref(al.URLS.FAQ,"_blank")}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-link>
      </wui-flex>
    `}onboardingTemplate(){return l` <wui-flex
      flexDirection="column"
      gap="xxl"
      alignItems="center"
      .padding=${["0","xxl","0","xxl"]}
    >
      <wui-flex gap="s" alignItems="center" justifyContent="center">
        <wui-icon-box
          size="xl"
          iconcolor="success-100"
          backgroundcolor="success-100"
          icon="checkmark"
          background="opaque"
        ></wui-icon-box>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="s">
        <wui-text align="center" variant="medium-600" color="fg-100">
          Account name chosen successfully
        </wui-text>
        <wui-text align="center" variant="paragraph-400" color="fg-100">
          You can now fund your account and trade crypto
        </wui-text>
      </wui-flex>
    </wui-flex>`}buttonsTemplate(){return l`<wui-flex
      .padding=${["0","2l","0","2l"]}
      gap="s"
      class="continue-button-container"
    >
      <wui-button fullWidth size="lg" borderRadius="xs" @click=${this.redirectToAccount.bind(this)}
        >Let's Go!
      </wui-button>
    </wui-flex>`}redirectToAccount(){g.replace("Account")}};Ls.styles=Hw;Ls=Fw([f("w3m-register-account-name-success-view")],Ls);const Zw=b`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: 4px;
    bottom: 0;
    opacity: 0;
    transform: scale(0.5);
    z-index: 1;
  }

  wui-button {
    display: none;
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  wui-button[data-retry='true'] {
    display: block;
    opacity: 1;
  }
`,$l={onNetworkChange:async()=>{var i,e;if(A.state.isSiweEnabled){const{SIWEController:t}=await nr(async()=>{const{SIWEController:r}=await import("./index-DkkgsBGE.js");return{SIWEController:r}},__vite__mapDeps([0,1,2,3]),import.meta.url);(e=(i=t.state._client)==null?void 0:i.options)!=null&&e.signOutOnNetworkChange?await t.signOut():Os.navigateAfterNetworkSwitch()}else Os.navigateAfterNetworkSwitch()}};var Rl=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let _o=class extends w{constructor(){var e;super(),this.network=(e=g.state.data)==null?void 0:e.network,this.unsubscribe=[],this.showRetry=!1,this.error=!1}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}firstUpdated(){this.onSwitchNetwork()}render(){if(!this.network)throw new Error("w3m-network-switch-view: No network provided");this.onShowRetry();const e=this.getLabel(),t=this.getSubLabel();return l`
      <wui-flex
        data-error=${this.error}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","3xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-network-image
            size="lg"
            imageSrc=${$(we.getNetworkImage(this.network))}
          ></wui-network-image>

          ${this.error?null:l`<wui-loading-hexagon></wui-loading-hexagon>`}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            ?border=${!0}
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100">${e}</wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${t}</wui-text>
        </wui-flex>

        <wui-button
          data-retry=${this.showRetry}
          variant="accent"
          size="md"
          .disabled=${!this.error}
          @click=${this.onSwitchNetwork.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
          Try again
        </wui-button>
      </wui-flex>
    `}getSubLabel(){const e=oe.getConnectedConnector();return P.getAuthConnector()&&e==="AUTH"?"":this.error?"Switch can be declined if chain is not supported by a wallet or previous request is still active":"Accept connection request in your wallet"}getLabel(){var r;const e=oe.getConnectedConnector();return P.getAuthConnector()&&e==="AUTH"?`Switching to ${((r=this.network)==null?void 0:r.name)??"Unknown"} network...`:this.error?"Switch declined":"Approve in wallet"}onShowRetry(){var e;if(this.error&&!this.showRetry){this.showRetry=!0;const t=(e=this.shadowRoot)==null?void 0:e.querySelector("wui-button");t==null||t.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}async onSwitchNetwork(){try{this.error=!1,this.network&&(await T.switchActiveNetwork(this.network),await $l.onNetworkChange())}catch{this.error=!0}}};_o.styles=Zw;Rl([d()],_o.prototype,"showRetry",void 0);Rl([d()],_o.prototype,"error",void 0);_o=Rl([f("w3m-network-switch-view")],_o);const Gw=b`
  :host > wui-grid {
    max-height: 360px;
    overflow: auto;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }
`;var Il=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let To=class extends w{constructor(){super(),this.unsubscribe=[],this.caipNetwork=T.state.caipNetwork,this.requestedCaipNetworks=T.getRequestedCaipNetworks(),this.unsubscribe.push(T.subscribeKey("caipNetwork",e=>this.caipNetwork=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return l`
      <wui-grid padding="s" gridTemplateColumns="repeat(4, 1fr)" rowGap="l" columnGap="xs">
        ${this.networksTemplate()}
      </wui-grid>

      <wui-separator></wui-separator>

      <wui-flex padding="s" flexDirection="column" gap="m" alignItems="center">
        <wui-text variant="small-400" color="fg-300" align="center">
          Your connected wallet may not support some of the networks available for this dApp
        </wui-text>
        <wui-link @click=${this.onNetworkHelp.bind(this)}>
          <wui-icon size="xs" color="accent-100" slot="iconLeft" name="helpCircle"></wui-icon>
          What is a network
        </wui-link>
      </wui-flex>
    `}onNetworkHelp(){R.sendEvent({type:"track",event:"CLICK_NETWORK_HELP"}),g.push("WhatIsANetwork")}networksTemplate(){const e=T.getRequestedCaipNetworks(),t=T.state.approvedCaipNetworkIds,r=T.state.supportsAllNetworks,o=k.sortRequestedNetworks(t,e);return o==null?void 0:o.map(n=>{var a;return l`
        <wui-card-select
          .selected=${((a=this.caipNetwork)==null?void 0:a.id)===n.id}
          imageSrc=${$(we.getNetworkImage(n))}
          type="network"
          name=${n.name??n.id}
          @click=${()=>this.onSwitchNetwork(n)}
          .disabled=${!r&&!(t!=null&&t.includes(n.id))}
          data-testid=${`w3m-network-switch-${n.name??n.id}`}
        ></wui-card-select>
      `})}async onSwitchNetwork(e){const t=m.state.isConnected,r=T.state.approvedCaipNetworkIds,o=T.state.supportsAllNetworks,n=T.state.caipNetwork,a=g.state.data;t&&(n==null?void 0:n.id)!==e.id?r!=null&&r.includes(e.id)?(await T.switchActiveNetwork(e),await $l.onNetworkChange()):o&&g.push("SwitchNetwork",{...a,network:e}):t||(T.setCaipNetwork(e),g.push("Connect"))}};To.styles=Gw;Il([d()],To.prototype,"caipNetwork",void 0);Il([d()],To.prototype,"requestedCaipNetworks",void 0);To=Il([f("w3m-networks-view")],To);const qw=b`
  :host > wui-flex {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
    padding: var(--wui-spacing-m);
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }

  :host > wui-flex > wui-flex {
    width: 100%;
  }

  wui-transaction-list-item-loader {
    width: 100%;
  }
`;var zo=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};const Yw=7;let On=class extends w{constructor(){super(),this.unsubscribe=[],this.selectedOnRampProvider=he.state.selectedProvider,this.loading=!1,this.coinbaseTransactions=We.state.coinbaseTransactions,this.tokenImages=Me.state.tokenImages,this.unsubscribe.push(he.subscribeKey("selectedProvider",e=>{this.selectedOnRampProvider=e}),Me.subscribeKey("tokenImages",e=>this.tokenImages=e),()=>{clearTimeout(this.refetchTimeout)},We.subscribe(e=>{this.coinbaseTransactions={...e.coinbaseTransactions}})),We.clearCursor(),this.fetchTransactions()}render(){return l`
      <wui-flex flexDirection="column" .padding=${["0","s","s","s"]} gap="xs">
        ${this.loading?this.templateLoading():this.templateTransactionsByYear()}
      </wui-flex>
    `}templateTransactions(e){return e==null?void 0:e.map(t=>{var s,p,h;const r=ol.formatDate((s=t==null?void 0:t.metadata)==null?void 0:s.minedAt),o=t.transfers[0],n=o==null?void 0:o.fungible_info;if(!n)return null;const a=((p=n==null?void 0:n.icon)==null?void 0:p.url)||((h=this.tokenImages)==null?void 0:h[n.symbol||""]);return l`
        <w3m-onramp-activity-item
          label="Bought"
          .completed=${t.metadata.status==="ONRAMP_TRANSACTION_STATUS_SUCCESS"}
          .inProgress=${t.metadata.status==="ONRAMP_TRANSACTION_STATUS_IN_PROGRESS"}
          .failed=${t.metadata.status==="ONRAMP_TRANSACTION_STATUS_FAILED"}
          purchaseCurrency=${$(n.symbol)}
          purchaseValue=${o.quantity.numeric}
          date=${r}
          icon=${$(a)}
          symbol=${$(n.symbol)}
        ></w3m-onramp-activity-item>
      `})}templateTransactionsByYear(){return Object.keys(this.coinbaseTransactions).sort().reverse().map(t=>{const r=parseInt(t,10);return new Array(12).fill(null).map((n,a)=>a).reverse().map(n=>{var p;const a=hn.getTransactionGroupTitle(r,n),s=(p=this.coinbaseTransactions[r])==null?void 0:p[n];return s?l`
          <wui-flex flexDirection="column">
            <wui-flex
              alignItems="center"
              flexDirection="row"
              .padding=${["xs","s","s","s"]}
            >
              <wui-text variant="paragraph-500" color="fg-200">${a}</wui-text>
            </wui-flex>
            <wui-flex flexDirection="column" gap="xs">
              ${this.templateTransactions(s)}
            </wui-flex>
          </wui-flex>
        `:null})})}async fetchTransactions(){await this.fetchCoinbaseTransactions()}async fetchCoinbaseTransactions(){const e=m.state.address,t=A.state.projectId;if(!e)throw new Error("No address found");if(!t)throw new Error("No projectId found");this.loading=!0,await We.fetchTransactions(e,"coinbase"),this.loading=!1,this.refetchLoadingTransactions()}refetchLoadingTransactions(){var o;const e=new Date;if((((o=this.coinbaseTransactions[e.getFullYear()])==null?void 0:o[e.getMonth()])||[]).filter(n=>n.metadata.status==="ONRAMP_TRANSACTION_STATUS_IN_PROGRESS").length===0){clearTimeout(this.refetchTimeout);return}this.refetchTimeout=setTimeout(async()=>{const n=m.state.address;await We.fetchTransactions(n,"coinbase"),this.refetchLoadingTransactions()},3e3)}templateLoading(){return Array(Yw).fill(l` <wui-transaction-list-item-loader></wui-transaction-list-item-loader> `).map(e=>e)}};On.styles=qw;zo([d()],On.prototype,"selectedOnRampProvider",void 0);zo([d()],On.prototype,"loading",void 0);zo([d()],On.prototype,"coinbaseTransactions",void 0);zo([d()],On.prototype,"tokenImages",void 0);On=zo([f("w3m-onramp-activity-view")],On);const Kw=b`
  :host > wui-grid {
    max-height: 360px;
    overflow: auto;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }
`;var ss=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let _r=class extends w{constructor(){super(),this.unsubscribe=[],this.selectedCurrency=he.state.paymentCurrency,this.currencies=he.state.paymentCurrencies,this.currencyImages=Me.state.currencyImages,this.unsubscribe.push(he.subscribe(e=>{this.selectedCurrency=e.paymentCurrency,this.currencies=e.paymentCurrencies}),Me.subscribeKey("currencyImages",e=>this.currencyImages=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return l`
      <wui-flex flexDirection="column" .padding=${["0","s","s","s"]} gap="xs">
        ${this.currenciesTemplate()}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}currenciesTemplate(){return this.currencies.map(e=>{var t;return l`
        <wui-list-item
          imageSrc=${$((t=this.currencyImages)==null?void 0:t[e.id])}
          @click=${()=>this.selectCurrency(e)}
          variant="image"
        >
          <wui-text variant="paragraph-500" color="fg-100">${e.id}</wui-text>
        </wui-list-item>
      `})}selectCurrency(e){e&&(he.setPaymentCurrency(e),q.close())}};_r.styles=Kw;ss([d()],_r.prototype,"selectedCurrency",void 0);ss([d()],_r.prototype,"currencies",void 0);ss([d()],_r.prototype,"currencyImages",void 0);_r=ss([f("w3m-onramp-fiat-select-view")],_r);var Su=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Bs=class extends w{constructor(){super(),this.unsubscribe=[],this.providers=he.state.providers,this.unsubscribe.push(he.subscribeKey("providers",e=>{this.providers=e}))}firstUpdated(){const e=this.providers.map(async t=>t.name==="coinbase"?await this.getCoinbaseOnRampURL():Promise.resolve(t==null?void 0:t.url));Promise.all(e).then(t=>{this.providers=this.providers.map((r,o)=>({...r,url:t[o]||""}))})}render(){return l`
      <wui-flex flexDirection="column" .padding=${["0","s","s","s"]} gap="xs">
        ${this.onRampProvidersTemplate()}
      </wui-flex>
      <w3m-onramp-providers-footer></w3m-onramp-providers-footer>
    `}onRampProvidersTemplate(){return this.providers.map(e=>l`
        <w3m-onramp-provider-item
          label=${e.label}
          name=${e.name}
          feeRange=${e.feeRange}
          @click=${()=>{this.onClickProvider(e)}}
          ?disabled=${!e.url}
        ></w3m-onramp-provider-item>
      `)}onClickProvider(e){he.setSelectedProvider(e),g.push("BuyInProgress"),k.openHref(e.url,"popupWindow","width=600,height=800,scrollbars=yes"),R.sendEvent({type:"track",event:"SELECT_BUY_PROVIDER",properties:{provider:e.name,isSmartAccount:m.state.preferredAccountType===ae.ACCOUNT_TYPES.SMART_ACCOUNT}})}async getCoinbaseOnRampURL(){const e=m.state.address,t=T.state.caipNetwork;if(!e)throw new Error("No address found");if(!(t!=null&&t.name))throw new Error("No network found");const r=Ue.WC_COINBASE_PAY_SDK_CHAIN_NAME_MAP[t.name]??Ue.WC_COINBASE_PAY_SDK_FALLBACK_CHAIN,o=he.state.purchaseCurrency,n=o?[o.symbol]:he.state.purchaseCurrencies.map(a=>a.symbol);return await ke.generateOnRampURL({defaultNetwork:r,destinationWallets:[{address:e,blockchains:Ue.WC_COINBASE_PAY_SDK_CHAINS,assets:n}],partnerUserId:e,purchaseAmount:he.state.purchaseAmount})}};Su([d()],Bs.prototype,"providers",void 0);Bs=Su([f("w3m-onramp-providers-view")],Bs);const Xw=b`
  :host > wui-grid {
    max-height: 360px;
    overflow: auto;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }
`;var ls=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Tr=class extends w{constructor(){super(),this.unsubscribe=[],this.selectedCurrency=he.state.purchaseCurrencies,this.tokens=he.state.purchaseCurrencies,this.tokenImages=Me.state.tokenImages,this.unsubscribe.push(he.subscribe(e=>{this.selectedCurrency=e.purchaseCurrencies,this.tokens=e.purchaseCurrencies}),Me.subscribeKey("tokenImages",e=>this.tokenImages=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return l`
      <wui-flex flexDirection="column" .padding=${["0","s","s","s"]} gap="xs">
        ${this.currenciesTemplate()}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}currenciesTemplate(){return this.tokens.map(e=>{var t;return l`
        <wui-list-item
          imageSrc=${$((t=this.tokenImages)==null?void 0:t[e.symbol])}
          @click=${()=>this.selectToken(e)}
          variant="image"
        >
          <wui-flex gap="3xs" alignItems="center">
            <wui-text variant="paragraph-500" color="fg-100">${e.name}</wui-text>
            <wui-text variant="small-400" color="fg-200">${e.symbol}</wui-text>
          </wui-flex>
        </wui-list-item>
      `})}selectToken(e){e&&(he.setPurchaseCurrency(e),q.close())}};Tr.styles=Xw;ls([d()],Tr.prototype,"selectedCurrency",void 0);ls([d()],Tr.prototype,"tokens",void 0);ls([d()],Tr.prototype,"tokenImages",void 0);Tr=ls([f("w3m-onramp-token-select-view")],Tr);const Qw=b`
  :host > wui-flex:first-child {
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  .action-button {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
  }

  .action-button:disabled {
    border-color: 1px solid var(--wui-color-gray-glass-005);
  }

  .swap-inputs-container {
    position: relative;
  }

  .replace-tokens-button-container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    gap: var(--wui-spacing-1xs);
    border-radius: var(--wui-border-radius-xs);
    background-color: var(--wui-color-modal-bg-base);
    padding: var(--wui-spacing-xxs);
  }

  .replace-tokens-button-container > button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 40px;
    padding: var(--wui-spacing-xs);
    border: none;
    border-radius: var(--wui-border-radius-xxs);
    background: var(--wui-color-gray-glass-002);
    transition: background-color var(--wui-duration-md) var(--wui-ease-out-power-1);
    will-change: background-color;
    z-index: 20;
  }

  .replace-tokens-button-container > button:hover {
    background: var(--wui-color-gray-glass-005);
  }

  .details-container > wui-flex {
    background: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xxs);
    width: 100%;
  }

  .details-container > wui-flex > button {
    border: none;
    background: none;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    transition: background 0.2s linear;
  }

  .details-container > wui-flex > button:hover {
    background: var(--wui-color-gray-glass-002);
  }

  .details-content-container {
    padding: var(--wui-spacing-1xs);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .details-content-container > wui-flex {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: var(--wui-spacing-s) var(--wui-spacing-xl);
    border-radius: var(--wui-border-radius-xxs);
    background: var(--wui-color-gray-glass-002);
  }
`;var Fe=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let je=class extends w{constructor(){var e;super(),this.unsubscribe=[],this.detailsOpen=!1,this.caipNetworkId=(e=T.state.caipNetwork)==null?void 0:e.id,this.initialized=E.state.initialized,this.loadingQuote=E.state.loadingQuote,this.loadingPrices=E.state.loadingPrices,this.loadingTransaction=E.state.loadingTransaction,this.sourceToken=E.state.sourceToken,this.sourceTokenAmount=E.state.sourceTokenAmount,this.sourceTokenPriceInUSD=E.state.sourceTokenPriceInUSD,this.toToken=E.state.toToken,this.toTokenAmount=E.state.toTokenAmount,this.toTokenPriceInUSD=E.state.toTokenPriceInUSD,this.inputError=E.state.inputError,this.gasPriceInUSD=E.state.gasPriceInUSD,this.fetchError=E.state.fetchError,this.onDebouncedGetSwapCalldata=k.debounce(async()=>{await E.swapTokens()},200),T.subscribeKey("caipNetwork",t=>{this.caipNetworkId!==(t==null?void 0:t.id)&&(this.caipNetworkId=t==null?void 0:t.id,E.resetState(),E.initializeState())}),this.unsubscribe.push(q.subscribeKey("open",t=>{t||E.resetState()}),g.subscribeKey("view",t=>{t.includes("Swap")||E.resetValues()}),E.subscribe(t=>{this.initialized=t.initialized,this.loadingQuote=t.loadingQuote,this.loadingPrices=t.loadingPrices,this.loadingTransaction=t.loadingTransaction,this.sourceToken=t.sourceToken,this.sourceTokenAmount=t.sourceTokenAmount,this.sourceTokenPriceInUSD=t.sourceTokenPriceInUSD,this.toToken=t.toToken,this.toTokenAmount=t.toTokenAmount,this.toTokenPriceInUSD=t.toTokenPriceInUSD,this.inputError=t.inputError,this.gasPriceInUSD=t.gasPriceInUSD,this.fetchError=t.fetchError}))}firstUpdated(){E.initializeState(),this.watchTokensAndValues()}disconnectedCallback(){this.unsubscribe.forEach(e=>e==null?void 0:e()),clearInterval(this.interval)}render(){return l`
      <wui-flex flexDirection="column" .padding=${["0","l","l","l"]} gap="s">
        ${this.initialized?this.templateSwap():this.templateLoading()}
      </wui-flex>
    `}watchTokensAndValues(){this.interval=setInterval(()=>{E.getNetworkTokenPrice(),E.getMyTokensWithBalance(),E.swapTokens()},1e4)}templateSwap(){return l`
      <wui-flex flexDirection="column" gap="s">
        <wui-flex flexDirection="column" alignItems="center" gap="xs" class="swap-inputs-container">
          ${this.templateTokenInput("sourceToken",this.sourceToken)}
          ${this.templateTokenInput("toToken",this.toToken)} ${this.templateReplaceTokensButton()}
        </wui-flex>
        ${this.templateDetails()} ${this.templateActionButton()}
      </wui-flex>
    `}actionButtonLabel(){return this.fetchError?"Swap":!this.sourceToken||!this.toToken?"Select token":this.sourceTokenAmount?this.inputError?this.inputError:"Review swap":"Enter amount"}templateReplaceTokensButton(){return l`
      <wui-flex class="replace-tokens-button-container">
        <button @click=${this.onSwitchTokens.bind(this)}>
          <wui-icon name="recycleHorizontal" color="fg-250" size="lg"></wui-icon>
        </button>
      </wui-flex>
    `}templateLoading(){return l`
      <wui-flex flexDirection="column" gap="l">
        <wui-flex flexDirection="column" alignItems="center" gap="xs" class="swap-inputs-container">
          <w3m-swap-input-skeleton target="sourceToken"></w3m-swap-input-skeleton>
          <w3m-swap-input-skeleton target="toToken"></w3m-swap-input-skeleton>
          ${this.templateReplaceTokensButton()}
        </wui-flex>
        ${this.templateActionButton()}
      </wui-flex>
    `}templateTokenInput(e,t){var s,p;const r=(s=E.state.myTokensWithBalance)==null?void 0:s.find(h=>(h==null?void 0:h.address)===(t==null?void 0:t.address)),o=e==="toToken"?this.toTokenAmount:this.sourceTokenAmount,n=e==="toToken"?this.toTokenPriceInUSD:this.sourceTokenPriceInUSD;let a=parseFloat(o)*n;return e==="toToken"&&(a-=this.gasPriceInUSD||0),l`<w3m-swap-input
      .value=${e==="toToken"?this.toTokenAmount:this.sourceTokenAmount}
      ?disabled=${this.loadingQuote&&e==="toToken"}
      .onSetAmount=${this.handleChangeAmount.bind(this)}
      target=${e}
      .token=${t}
      .balance=${(p=r==null?void 0:r.quantity)==null?void 0:p.numeric}
      .price=${r==null?void 0:r.price}
      .marketValue=${a}
      .onSetMaxValue=${this.onSetMaxValue.bind(this)}
    ></w3m-swap-input>`}onSetMaxValue(e,t){const r=e==="sourceToken"?this.sourceToken:this.toToken,o=(r==null?void 0:r.address)===Ue.NATIVE_TOKEN_ADDRESS;let n="0";if(!t){n="0",this.handleChangeAmount(e,n);return}if(!this.gasPriceInUSD){n=t,this.handleChangeAmount(e,n);return}const a=ue.bigNumber(this.gasPriceInUSD.toFixed(5)).dividedBy(this.sourceTokenPriceInUSD),s=o?ue.bigNumber(t).minus(a):ue.bigNumber(t);this.handleChangeAmount(e,s.isGreaterThan(0)?s.toFixed(20):"0")}templateDetails(){return!this.sourceToken||!this.toToken||this.inputError?null:l`<w3m-swap-details .detailsOpen=${this.detailsOpen}></w3m-swap-details>`}handleChangeAmount(e,t){E.clearError(),e==="sourceToken"?E.setSourceTokenAmount(t):E.setToTokenAmount(t),this.onDebouncedGetSwapCalldata()}templateActionButton(){const e=!this.toToken||!this.sourceToken,t=!this.sourceTokenAmount,r=this.loadingQuote||this.loadingPrices||this.loadingTransaction,o=r||e||t||this.inputError;return l` <wui-flex gap="xs">
      <wui-button
        data-testid="swap-action-button"
        class="action-button"
        fullWidth
        size="lg"
        borderRadius="xs"
        variant=${e?"neutral":"main"}
        .loading=${r}
        .disabled=${o}
        @click=${this.onSwapPreview.bind(this)}
      >
        ${this.actionButtonLabel()}
      </wui-button>
    </wui-flex>`}onSwitchTokens(){E.switchTokens()}onSwapPreview(){var e,t;if(this.fetchError){E.swapTokens();return}R.sendEvent({type:"track",event:"INITIATE_SWAP",properties:{network:this.caipNetworkId||"",swapFromToken:((e=this.sourceToken)==null?void 0:e.symbol)||"",swapToToken:((t=this.toToken)==null?void 0:t.symbol)||"",swapFromAmount:this.sourceTokenAmount||"",swapToAmount:this.toTokenAmount||"",isSmartAccount:m.state.preferredAccountType===ae.ACCOUNT_TYPES.SMART_ACCOUNT}}),g.push("SwapPreview")}};je.styles=Qw;Fe([d()],je.prototype,"interval",void 0);Fe([d()],je.prototype,"detailsOpen",void 0);Fe([d()],je.prototype,"caipNetworkId",void 0);Fe([d()],je.prototype,"initialized",void 0);Fe([d()],je.prototype,"loadingQuote",void 0);Fe([d()],je.prototype,"loadingPrices",void 0);Fe([d()],je.prototype,"loadingTransaction",void 0);Fe([d()],je.prototype,"sourceToken",void 0);Fe([d()],je.prototype,"sourceTokenAmount",void 0);Fe([d()],je.prototype,"sourceTokenPriceInUSD",void 0);Fe([d()],je.prototype,"toToken",void 0);Fe([d()],je.prototype,"toTokenAmount",void 0);Fe([d()],je.prototype,"toTokenPriceInUSD",void 0);Fe([d()],je.prototype,"inputError",void 0);Fe([d()],je.prototype,"gasPriceInUSD",void 0);Fe([d()],je.prototype,"fetchError",void 0);je=Fe([f("w3m-swap-view")],je);const Jw=b`
  :host > wui-flex:first-child {
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }

  .preview-container,
  .details-container {
    width: 100%;
  }

  .token-image {
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
    border-radius: 12px;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  .token-item {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-xxs);
    padding: var(--wui-spacing-xs);
    height: 40px;
    border: none;
    border-radius: 80px;
    background: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    cursor: pointer;
    transition: background 0.2s linear;
  }

  .token-item:hover {
    background: var(--wui-color-gray-glass-005);
  }

  .preview-token-details-container {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: var(--wui-spacing-s) var(--wui-spacing-xl);
    border-radius: var(--wui-border-radius-xxs);
    background: var(--wui-color-gray-glass-002);
  }

  .action-buttons-container {
    width: 100%;
    gap: var(--wui-spacing-xs);
  }

  .action-buttons-container > button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    height: 48px;
    border-radius: var(--wui-border-radius-xs);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  .action-buttons-container > button:disabled {
    opacity: 0.8;
    cursor: not-allowed;
  }

  .action-button > wui-loading-spinner {
    display: inline-block;
  }

  .cancel-button:hover,
  .action-button:hover {
    cursor: pointer;
  }

  .action-buttons-container > wui-button.cancel-button {
    flex: 2;
  }

  .action-buttons-container > wui-button.action-button {
    flex: 4;
  }

  .action-buttons-container > button.action-button > wui-text {
    color: white;
  }

  .details-container > wui-flex {
    background: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xxs);
    width: 100%;
  }

  .details-container > wui-flex > button {
    border: none;
    background: none;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    transition: background 0.2s linear;
  }

  .details-container > wui-flex > button:hover {
    background: var(--wui-color-gray-glass-002);
  }

  .details-content-container {
    padding: var(--wui-spacing-1xs);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .details-content-container > wui-flex {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: var(--wui-spacing-s) var(--wui-spacing-xl);
    border-radius: var(--wui-border-radius-xxs);
    background: var(--wui-color-gray-glass-002);
  }
`;var Le=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Pe=class extends w{constructor(){super(),this.unsubscribe=[],this.detailsOpen=!0,this.approvalTransaction=E.state.approvalTransaction,this.swapTransaction=E.state.swapTransaction,this.sourceToken=E.state.sourceToken,this.sourceTokenAmount=E.state.sourceTokenAmount??"",this.sourceTokenPriceInUSD=E.state.sourceTokenPriceInUSD,this.toToken=E.state.toToken,this.toTokenAmount=E.state.toTokenAmount??"",this.toTokenPriceInUSD=E.state.toTokenPriceInUSD,this.caipNetwork=T.state.caipNetwork,this.balanceSymbol=m.state.balanceSymbol,this.gasPriceInUSD=E.state.gasPriceInUSD,this.inputError=E.state.inputError,this.loadingQuote=E.state.loadingQuote,this.loadingApprovalTransaction=E.state.loadingApprovalTransaction,this.loadingBuildTransaction=E.state.loadingBuildTransaction,this.loadingTransaction=E.state.loadingTransaction,this.unsubscribe.push(m.subscribeKey("balanceSymbol",e=>{this.balanceSymbol!==e&&g.goBack()}),T.subscribeKey("caipNetwork",e=>{this.caipNetwork!==e&&(this.caipNetwork=e)}),E.subscribe(e=>{this.approvalTransaction=e.approvalTransaction,this.swapTransaction=e.swapTransaction,this.sourceToken=e.sourceToken,this.gasPriceInUSD=e.gasPriceInUSD,this.toToken=e.toToken,this.gasPriceInUSD=e.gasPriceInUSD,this.toTokenPriceInUSD=e.toTokenPriceInUSD,this.sourceTokenAmount=e.sourceTokenAmount??"",this.toTokenAmount=e.toTokenAmount??"",this.inputError=e.inputError,e.inputError&&g.goBack(),this.loadingQuote=e.loadingQuote,this.loadingApprovalTransaction=e.loadingApprovalTransaction,this.loadingBuildTransaction=e.loadingBuildTransaction,this.loadingTransaction=e.loadingTransaction}))}firstUpdated(){E.getTransaction(),this.refreshTransaction()}disconnectedCallback(){this.unsubscribe.forEach(e=>e==null?void 0:e()),clearInterval(this.interval)}render(){return l`
      <wui-flex flexDirection="column" .padding=${["0","l","l","l"]} gap="s">
        ${this.templateSwap()}
      </wui-flex>
    `}refreshTransaction(){this.interval=setInterval(()=>{E.getApprovalLoadingState()||E.getTransaction()},1e4)}templateSwap(){var p,h,x,_;const e=`${H.formatNumberToLocalString(parseFloat(this.sourceTokenAmount))} ${(p=this.sourceToken)==null?void 0:p.symbol}`,t=`${H.formatNumberToLocalString(parseFloat(this.toTokenAmount))} ${(h=this.toToken)==null?void 0:h.symbol}`,r=parseFloat(this.sourceTokenAmount)*this.sourceTokenPriceInUSD,o=parseFloat(this.toTokenAmount)*this.toTokenPriceInUSD-(this.gasPriceInUSD||0),n=H.formatNumberToLocalString(r),a=H.formatNumberToLocalString(o),s=this.loadingQuote||this.loadingBuildTransaction||this.loadingTransaction||this.loadingApprovalTransaction;return l`
      <wui-flex flexDirection="column" alignItems="center" gap="l">
        <wui-flex class="preview-container" flexDirection="column" alignItems="flex-start" gap="l">
          <wui-flex
            class="preview-token-details-container"
            alignItems="center"
            justifyContent="space-between"
            gap="l"
          >
            <wui-flex flexDirection="column" alignItems="flex-start" gap="4xs">
              <wui-text variant="small-400" color="fg-150">Send</wui-text>
              <wui-text variant="paragraph-400" color="fg-100">$${n}</wui-text>
            </wui-flex>
            <wui-token-button
              flexDirection="row-reverse"
              text=${e}
              imageSrc=${(x=this.sourceToken)==null?void 0:x.logoUri}
            >
            </wui-token-button>
          </wui-flex>
          <wui-icon name="recycleHorizontal" color="fg-200" size="md"></wui-icon>
          <wui-flex
            class="preview-token-details-container"
            alignItems="center"
            justifyContent="space-between"
            gap="l"
          >
            <wui-flex flexDirection="column" alignItems="flex-start" gap="4xs">
              <wui-text variant="small-400" color="fg-150">Receive</wui-text>
              <wui-text variant="paragraph-400" color="fg-100">$${a}</wui-text>
            </wui-flex>
            <wui-token-button
              flexDirection="row-reverse"
              text=${t}
              imageSrc=${(_=this.toToken)==null?void 0:_.logoUri}
            >
            </wui-token-button>
          </wui-flex>
        </wui-flex>

        ${this.templateDetails()}

        <wui-flex flexDirection="row" alignItems="center" justifyContent="center" gap="xs">
          <wui-icon size="sm" color="fg-200" name="infoCircle"></wui-icon>
          <wui-text variant="small-400" color="fg-200">Review transaction carefully</wui-text>
        </wui-flex>

        <wui-flex
          class="action-buttons-container"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          gap="xs"
        >
          <wui-button
            class="cancel-button"
            fullWidth
            size="lg"
            borderRadius="xs"
            variant="neutral"
            @click=${this.onCancelTransaction.bind(this)}
          >
            <wui-text variant="paragraph-600" color="fg-200">Cancel</wui-text>
          </wui-button>
          <wui-button
            class="action-button"
            fullWidth
            size="lg"
            borderRadius="xs"
            variant="main"
            ?loading=${s}
            ?disabled=${s}
            @click=${this.onSendTransaction.bind(this)}
          >
            <wui-text variant="paragraph-600" color="inverse-100">
              ${this.actionButtonLabel()}
            </wui-text>
          </wui-button>
        </wui-flex>
      </wui-flex>
    `}templateDetails(){return!this.sourceToken||!this.toToken||this.inputError?null:l`<w3m-swap-details .detailsOpen=${this.detailsOpen}></w3m-swap-details>`}actionButtonLabel(){return this.loadingApprovalTransaction?"Approving...":this.approvalTransaction?"Approve":"Swap"}onCancelTransaction(){g.goBack()}onSendTransaction(){this.approvalTransaction?E.sendTransactionForApproval(this.approvalTransaction):E.sendTransactionForSwap(this.swapTransaction)}};Pe.styles=Jw;Le([d()],Pe.prototype,"interval",void 0);Le([d()],Pe.prototype,"detailsOpen",void 0);Le([d()],Pe.prototype,"approvalTransaction",void 0);Le([d()],Pe.prototype,"swapTransaction",void 0);Le([d()],Pe.prototype,"sourceToken",void 0);Le([d()],Pe.prototype,"sourceTokenAmount",void 0);Le([d()],Pe.prototype,"sourceTokenPriceInUSD",void 0);Le([d()],Pe.prototype,"toToken",void 0);Le([d()],Pe.prototype,"toTokenAmount",void 0);Le([d()],Pe.prototype,"toTokenPriceInUSD",void 0);Le([d()],Pe.prototype,"caipNetwork",void 0);Le([d()],Pe.prototype,"balanceSymbol",void 0);Le([d()],Pe.prototype,"gasPriceInUSD",void 0);Le([d()],Pe.prototype,"inputError",void 0);Le([d()],Pe.prototype,"loadingQuote",void 0);Le([d()],Pe.prototype,"loadingApprovalTransaction",void 0);Le([d()],Pe.prototype,"loadingBuildTransaction",void 0);Le([d()],Pe.prototype,"loadingTransaction",void 0);Pe=Le([f("w3m-swap-preview-view")],Pe);const eg=b`
  :host {
    --tokens-scroll--top-opacity: 0;
    --tokens-scroll--bottom-opacity: 1;
    --suggested-tokens-scroll--left-opacity: 0;
    --suggested-tokens-scroll--right-opacity: 1;
  }

  :host > wui-flex:first-child {
    overflow-y: hidden;
    overflow-x: hidden;
    scrollbar-width: none;
    scrollbar-height: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  .suggested-tokens-container {
    overflow-x: auto;
    mask-image: linear-gradient(
      to right,
      rgba(0, 0, 0, calc(1 - var(--suggested-tokens-scroll--left-opacity))) 0px,
      rgba(200, 200, 200, calc(1 - var(--suggested-tokens-scroll--left-opacity))) 1px,
      black 50px,
      black 90px,
      black calc(100% - 90px),
      black calc(100% - 50px),
      rgba(155, 155, 155, calc(1 - var(--suggested-tokens-scroll--right-opacity))) calc(100% - 1px),
      rgba(0, 0, 0, calc(1 - var(--suggested-tokens-scroll--right-opacity))) 100%
    );
  }

  .suggested-tokens-container::-webkit-scrollbar {
    display: none;
  }

  .tokens-container {
    border-top: 1px solid var(--wui-color-gray-glass-005);
    height: 100%;
    max-height: 390px;
  }

  .tokens {
    width: 100%;
    overflow-y: auto;
    mask-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, calc(1 - var(--tokens-scroll--top-opacity))) 0px,
      rgba(200, 200, 200, calc(1 - var(--tokens-scroll--top-opacity))) 1px,
      black 50px,
      black 90px,
      black calc(100% - 90px),
      black calc(100% - 50px),
      rgba(155, 155, 155, calc(1 - var(--tokens-scroll--bottom-opacity))) calc(100% - 1px),
      rgba(0, 0, 0, calc(1 - var(--tokens-scroll--bottom-opacity))) 100%
    );
  }

  .network-search-input,
  .select-network-button {
    height: 40px;
  }

  .select-network-button {
    border: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-xs);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
    background-color: transparent;
    border-radius: var(--wui-border-radius-xxs);
    padding: var(--wui-spacing-xs);
    align-items: center;
    transition: background-color 0.2s linear;
  }

  .select-network-button:hover {
    background-color: var(--wui-color-gray-glass-002);
  }

  .select-network-button > wui-image {
    width: 26px;
    height: 26px;
    border-radius: var(--wui-border-radius-xs);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }
`;var $i=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Mt=class extends w{constructor(){var e;super(),this.unsubscribe=[],this.targetToken=(e=g.state.data)==null?void 0:e.target,this.sourceToken=E.state.sourceToken,this.sourceTokenAmount=E.state.sourceTokenAmount,this.toToken=E.state.toToken,this.myTokensWithBalance=E.state.myTokensWithBalance,this.popularTokens=E.state.popularTokens,this.searchValue="",this.unsubscribe.push(E.subscribe(t=>{this.sourceToken=t.sourceToken,this.toToken=t.toToken,this.myTokensWithBalance=t.myTokensWithBalance}))}updated(){var r,o;const e=(r=this.renderRoot)==null?void 0:r.querySelector(".suggested-tokens-container");e==null||e.addEventListener("scroll",this.handleSuggestedTokensScroll.bind(this));const t=(o=this.renderRoot)==null?void 0:o.querySelector(".tokens");t==null||t.addEventListener("scroll",this.handleTokenListScroll.bind(this))}disconnectedCallback(){var r,o;super.disconnectedCallback();const e=(r=this.renderRoot)==null?void 0:r.querySelector(".suggested-tokens-container"),t=(o=this.renderRoot)==null?void 0:o.querySelector(".tokens");e==null||e.removeEventListener("scroll",this.handleSuggestedTokensScroll.bind(this)),t==null||t.removeEventListener("scroll",this.handleTokenListScroll.bind(this)),clearInterval(this.interval)}render(){return l`
      <wui-flex flexDirection="column" gap="s">
        ${this.templateSearchInput()} ${this.templateSuggestedTokens()} ${this.templateTokens()}
      </wui-flex>
    `}onSelectToken(e){this.targetToken==="sourceToken"?E.setSourceToken(e):(E.setToToken(e),this.sourceToken&&this.sourceTokenAmount&&E.swapTokens()),g.goBack()}templateSearchInput(){return l`
      <wui-flex .padding=${["3xs","s","0","s"]} gap="xs">
        <wui-input-text
          data-testid="swap-select-token-search-input"
          class="network-search-input"
          size="sm"
          placeholder="Search token"
          icon="search"
          .value=${this.searchValue}
          @inputChange=${this.onSearchInputChange.bind(this)}
        ></wui-input-text>
      </wui-flex>
    `}templateTokens(){const e=this.myTokensWithBalance?Object.values(this.myTokensWithBalance):[],t=this.popularTokens?this.popularTokens:[],r=this.filterTokensWithText(e,this.searchValue),o=this.filterTokensWithText(t,this.searchValue);return l`
      <wui-flex class="tokens-container">
        <wui-flex class="tokens" .padding=${["0","s","s","s"]} flexDirection="column">
          ${(r==null?void 0:r.length)>0?l`
                <wui-flex justifyContent="flex-start" padding="s">
                  <wui-text variant="paragraph-500" color="fg-200">Your tokens</wui-text>
                </wui-flex>
                ${r.map(n=>{var s,p,h;const a=n.symbol===((s=this.sourceToken)==null?void 0:s.symbol)||n.symbol===((p=this.toToken)==null?void 0:p.symbol);return l`
                    <wui-token-list-item
                      data-testid="swap-select-token-item-${n.symbol}"
                      name=${n.name}
                      ?disabled=${a}
                      symbol=${n.symbol}
                      price=${n==null?void 0:n.price}
                      amount=${(h=n==null?void 0:n.quantity)==null?void 0:h.numeric}
                      imageSrc=${n.logoUri}
                      @click=${()=>{a||this.onSelectToken(n)}}
                    >
                    </wui-token-list-item>
                  `})}
              `:null}

          <wui-flex justifyContent="flex-start" padding="s">
            <wui-text variant="paragraph-500" color="fg-200">Tokens</wui-text>
          </wui-flex>
          ${(o==null?void 0:o.length)>0?o.map(n=>l`
                  <wui-token-list-item
                    data-testid="swap-select-token-item-${n.symbol}"
                    name=${n.name}
                    symbol=${n.symbol}
                    imageSrc=${n.logoUri}
                    @click=${()=>this.onSelectToken(n)}
                  >
                  </wui-token-list-item>
                `):null}
        </wui-flex>
      </wui-flex>
    `}templateSuggestedTokens(){const e=E.state.suggestedTokens?E.state.suggestedTokens.slice(0,8):null;return e?l`
      <wui-flex class="suggested-tokens-container" .padding=${["0","s","0","s"]} gap="xs">
        ${e.map(t=>l`
            <wui-token-button
              text=${t.symbol}
              imageSrc=${t.logoUri}
              @click=${()=>this.onSelectToken(t)}
            >
            </wui-token-button>
          `)}
      </wui-flex>
    `:null}onSearchInputChange(e){this.searchValue=e.detail}handleSuggestedTokensScroll(){var t;const e=(t=this.renderRoot)==null?void 0:t.querySelector(".suggested-tokens-container");e&&(e.style.setProperty("--suggested-tokens-scroll--left-opacity",ia.interpolate([0,100],[0,1],e.scrollLeft).toString()),e.style.setProperty("--suggested-tokens-scroll--right-opacity",ia.interpolate([0,100],[0,1],e.scrollWidth-e.scrollLeft-e.offsetWidth).toString()))}handleTokenListScroll(){var t;const e=(t=this.renderRoot)==null?void 0:t.querySelector(".tokens");e&&(e.style.setProperty("--tokens-scroll--top-opacity",ia.interpolate([0,100],[0,1],e.scrollTop).toString()),e.style.setProperty("--tokens-scroll--bottom-opacity",ia.interpolate([0,100],[0,1],e.scrollHeight-e.scrollTop-e.offsetHeight).toString()))}filterTokensWithText(e,t){return e.filter(r=>`${r.symbol} ${r.name} ${r.address}`.toLowerCase().includes(t.toLowerCase()))}};Mt.styles=eg;$i([d()],Mt.prototype,"interval",void 0);$i([d()],Mt.prototype,"targetToken",void 0);$i([d()],Mt.prototype,"sourceToken",void 0);$i([d()],Mt.prototype,"sourceTokenAmount",void 0);$i([d()],Mt.prototype,"toToken",void 0);$i([d()],Mt.prototype,"myTokensWithBalance",void 0);$i([d()],Mt.prototype,"popularTokens",void 0);$i([d()],Mt.prototype,"searchValue",void 0);Mt=$i([f("w3m-swap-select-token-view")],Mt);const tg=b`
  :host > wui-flex:first-child {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }
`;var ig=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let zs=class extends w{render(){return l`
      <wui-flex flexDirection="column" .padding=${["0","m","m","m"]} gap="s">
        <w3m-activity-list page="activity"></w3m-activity-list>
      </wui-flex>
    `}};zs.styles=tg;zs=ig([f("w3m-transactions-view")],zs);var ng=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};const rg=[{images:["network","layers","system"],title:"The system’s nuts and bolts",text:"A network is what brings the blockchain to life, as this technical infrastructure allows apps to access the ledger and smart contract services."},{images:["noun","defiAlt","dao"],title:"Designed for different uses",text:"Each network is designed differently, and may therefore suit certain apps and experiences."}];let mc=class extends w{render(){return l`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${rg}></w3m-help-widget>
        <wui-button
          variant="main"
          size="md"
          @click=${()=>{k.openHref("https://ethereum.org/en/developers/docs/networks/","_blank")}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};mc=ng([f("w3m-what-is-a-network-view")],mc);var og=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};const ag=[{images:["login","profile","lock"],title:"One login for all of web3",text:"Log in to any app by connecting your wallet. Say goodbye to countless passwords!"},{images:["defi","nft","eth"],title:"A home for your digital assets",text:"A wallet lets you store, send and receive digital assets like cryptocurrencies and NFTs."},{images:["browser","noun","dao"],title:"Your gateway to a new web",text:"With your wallet, you can explore and interact with DeFi, NFTs, DAOs, and much more."}];let vc=class extends w{render(){return l`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${ag}></w3m-help-widget>
        <wui-button variant="main" size="md" @click=${this.onGetWallet.bind(this)}>
          <wui-icon color="inherit" slot="iconLeft" name="wallet"></wui-icon>
          Get a wallet
        </wui-button>
      </wui-flex>
    `}onGetWallet(){R.sendEvent({type:"track",event:"CLICK_GET_WALLET"}),g.push("GetWallet")}};vc=og([f("w3m-what-is-a-wallet-view")],vc);var sg=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let bc=class extends w{render(){return l`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","3xl","xl","3xl"]}
        alignItems="center"
        gap="xl"
      >
        <wui-visual name="onrampCard"></wui-visual>
        <wui-flex flexDirection="column" gap="xs" alignItems="center">
          <wui-text align="center" variant="paragraph-500" color="fg-100">
            Quickly and easily buy digital assets!
          </wui-text>
          <wui-text align="center" variant="small-400" color="fg-200">
            Simply select your preferred onramp provider and add digital assets to your account
            using your credit card or bank transfer
          </wui-text>
        </wui-flex>
        <wui-button @click=${g.goBack}>
          <wui-icon size="sm" color="inherit" name="add" slot="iconLeft"></wui-icon>
          Buy
        </wui-button>
      </wui-flex>
    `}};bc=sg([f("w3m-what-is-a-buy-view")],bc);const lg=b`
  wui-loading-spinner {
    margin: 9px auto;
  }

  .email-display,
  .email-display wui-text {
    max-width: 100%;
  }
`;var cs=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};const cg=6;let ki=class extends w{firstUpdated(){this.startOTPTimeout()}disconnectedCallback(){clearTimeout(this.OTPTimeout)}constructor(){var e;super(),this.loading=!1,this.timeoutTimeLeft=ar.getTimeToNextEmailLogin(),this.error="",this.otp="",this.email=(e=g.state.data)==null?void 0:e.email,this.authConnector=P.getAuthConnector()}render(){if(!this.email)throw new Error("w3m-email-otp-widget: No email provided");const e=!!this.timeoutTimeLeft,t=this.getFooterLabels(e);return l`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["l","0","l","0"]}
        gap="l"
      >
        <wui-flex
          class="email-display"
          flexDirection="column"
          alignItems="center"
          .padding=${["0","xl","0","xl"]}
        >
          <wui-text variant="paragraph-400" color="fg-100" align="center">
            Enter the code we sent to
          </wui-text>
          <wui-text variant="paragraph-500" color="fg-100" lineClamp="1" align="center">
            ${this.email}
          </wui-text>
        </wui-flex>

        <wui-text variant="small-400" color="fg-200">The code expires in 20 minutes</wui-text>

        ${this.loading?l`<wui-loading-spinner size="xl" color="accent-100"></wui-loading-spinner>`:l` <wui-flex flexDirection="column" alignItems="center" gap="xs">
              <wui-otp
                dissabled
                length="6"
                @inputChange=${this.onOtpInputChange.bind(this)}
                .otp=${this.otp}
              ></wui-otp>
              ${this.error?l`
                    <wui-text variant="small-400" align="center" color="error-100">
                      ${this.error}. Try Again
                    </wui-text>
                  `:null}
            </wui-flex>`}

        <wui-flex alignItems="center" gap="xs">
          <wui-text variant="small-400" color="fg-200">${t.title}</wui-text>
          <wui-link @click=${this.onResendCode.bind(this)} .disabled=${e}>
            ${t.action}
          </wui-link>
        </wui-flex>
      </wui-flex>
    `}startOTPTimeout(){this.timeoutTimeLeft=ar.getTimeToNextEmailLogin(),this.OTPTimeout=setInterval(()=>{this.timeoutTimeLeft>0?this.timeoutTimeLeft=ar.getTimeToNextEmailLogin():clearInterval(this.OTPTimeout)},1e3)}async onOtpInputChange(e){var t;try{this.loading||(this.otp=e.detail,this.authConnector&&this.otp.length===cg&&(this.loading=!0,await((t=this.onOtpSubmit)==null?void 0:t.call(this,this.otp))))}catch(r){this.error=k.parseError(r),this.loading=!1}}async onResendCode(){try{if(this.onOtpResend){if(!this.loading&&!this.timeoutTimeLeft){if(this.error="",this.otp="",!P.getAuthConnector()||!this.email)throw new Error("w3m-email-otp-widget: Unable to resend email");this.loading=!0,await this.onOtpResend(this.email),this.startOTPTimeout(),z.showSuccess("Code email resent")}}else this.onStartOver&&this.onStartOver()}catch(e){z.showError(e)}finally{this.loading=!1}}getFooterLabels(e){return this.onStartOver?{title:"Something wrong?",action:`Try again ${e?`in ${this.timeoutTimeLeft}s`:""}`}:{title:"Didn't receive it?",action:`Resend ${e?`in ${this.timeoutTimeLeft}s`:"Code"}`}}};ki.styles=lg;cs([d()],ki.prototype,"loading",void 0);cs([d()],ki.prototype,"timeoutTimeLeft",void 0);cs([d()],ki.prototype,"error",void 0);ki=cs([f("w3m-email-otp-widget")],ki);var Au=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Vs=class extends ki{constructor(){super(),this.unsubscribe=[],this.smartAccountDeployed=m.state.smartAccountDeployed,this.onOtpSubmit=async e=>{try{if(this.authConnector){const t=T.checkIfSmartAccountEnabled();await this.authConnector.provider.connectOtp({otp:e}),R.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),await G.connectExternal(this.authConnector),R.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"email",name:this.authConnector.name||"Unknown"}}),m.state.allAccounts.length>1?g.push("SelectAddresses"):t&&!this.smartAccountDeployed?g.push("UpgradeToSmartAccount"):q.close()}}catch(t){throw R.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL"}),t}},this.onOtpResend=async e=>{this.authConnector&&(await this.authConnector.provider.connectEmail({email:e}),R.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}))},this.unsubscribe.push(m.subscribeKey("smartAccountDeployed",e=>{this.smartAccountDeployed=e}))}};Au([d()],Vs.prototype,"smartAccountDeployed",void 0);Vs=Au([f("w3m-email-verify-otp-view")],Vs);const ug=b`
  wui-icon-box {
    height: var(--wui-icon-box-size-xl);
    width: var(--wui-icon-box-size-xl);
  }
`;var Eu=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Ra=class extends w{constructor(){var e;super(),this.email=(e=g.state.data)==null?void 0:e.email,this.authConnector=P.getAuthConnector(),this.loading=!1,this.listenForDeviceApproval()}render(){if(!this.email)throw new Error("w3m-email-verify-device-view: No email provided");if(!this.authConnector)throw new Error("w3m-email-verify-device-view: No auth connector provided");return l`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["xxl","s","xxl","s"]}
        gap="l"
      >
        <wui-icon-box
          size="xl"
          iconcolor="accent-100"
          backgroundcolor="accent-100"
          icon="verify"
          background="opaque"
        ></wui-icon-box>

        <wui-flex flexDirection="column" alignItems="center" gap="s">
          <wui-flex flexDirection="column" alignItems="center">
            <wui-text variant="paragraph-400" color="fg-100">
              Approve the login link we sent to
            </wui-text>
            <wui-text variant="paragraph-400" color="fg-100"><b>${this.email}</b></wui-text>
          </wui-flex>

          <wui-text variant="small-400" color="fg-200" align="center">
            The code expires in 20 minutes
          </wui-text>

          <wui-flex alignItems="center" id="w3m-resend-section" gap="xs">
            <wui-text variant="small-400" color="fg-100" align="center">
              Didn't receive it?
            </wui-text>
            <wui-link @click=${this.onResendCode.bind(this)} .disabled=${this.loading}>
              Resend email
            </wui-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}async listenForDeviceApproval(){if(this.authConnector)try{await this.authConnector.provider.connectDevice(),R.sendEvent({type:"track",event:"DEVICE_REGISTERED_FOR_EMAIL"}),R.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}),g.replace("EmailVerifyOtp",{email:this.email})}catch{g.goBack()}}async onResendCode(){try{if(!this.loading){if(!this.authConnector||!this.email)throw new Error("w3m-email-login-widget: Unable to resend email");this.loading=!0,await this.authConnector.provider.connectEmail({email:this.email}),this.listenForDeviceApproval(),z.showSuccess("Code email resent")}}catch(e){z.showError(e)}finally{this.loading=!1}}};Ra.styles=ug;Eu([d()],Ra.prototype,"loading",void 0);Ra=Eu([f("w3m-email-verify-device-view")],Ra);const dg=b`
  div {
    width: 100%;
    height: 400px;
  }

  [data-ready='false'] {
    transform: scale(1.05);
  }

  @media (max-width: 430px) {
    [data-ready='false'] {
      transform: translateY(-50px);
    }
  }
`;var $u=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};const xc=400,yc=360,pg=64;let Ia=class extends w{constructor(){super(),this.bodyObserver=void 0,this.unsubscribe=[],this.iframe=document.getElementById("w3m-iframe"),this.ready=!1,this.unsubscribe.push(q.subscribeKey("open",e=>{e||(this.onHideIframe(),g.popTransactionStack())}),q.subscribeKey("shake",e=>{e?this.iframe.style.animation="w3m-shake 500ms var(--wui-ease-out-power-2)":this.iframe.style.animation="none"}))}disconnectedCallback(){var e;this.onHideIframe(),this.unsubscribe.forEach(t=>t()),(e=this.bodyObserver)==null||e.unobserve(window.document.body)}async firstUpdated(){await this.syncTheme(),this.iframe.style.display="block",this.bodyObserver=new ResizeObserver(e=>{var o,n;const t=(o=e==null?void 0:e[0])==null?void 0:o.contentBoxSize,r=(n=t==null?void 0:t[0])==null?void 0:n.inlineSize;this.iframe.style.height=`${xc}px`,r&&r<=430?(this.iframe.style.width="100%",this.iframe.style.left="0px",this.iframe.style.bottom="0px",this.iframe.style.top="unset"):(this.iframe.style.width=`${yc}px`,this.iframe.style.left=`calc(50% - ${yc/2}px)`,this.iframe.style.top=`calc(50% - ${xc/2}px + ${pg/2}px)`,this.iframe.style.bottom="unset"),this.ready=!0,this.onShowIframe()}),this.bodyObserver.observe(window.document.body)}render(){return l`<div data-ready=${this.ready}></div>`}onShowIframe(){const e=window.innerWidth<=430;this.iframe.style.animation=e?"w3m-iframe-zoom-in-mobile 200ms var(--wui-ease-out-power-2)":"w3m-iframe-zoom-in 200ms var(--wui-ease-out-power-2)"}onHideIframe(){this.iframe.style.display="none",this.iframe.style.animation="w3m-iframe-fade-out 200ms var(--wui-ease-out-power-2)"}async syncTheme(){const e=P.getAuthConnector();if(e){const t=Ae.getSnapshot().themeMode,r=Ae.getSnapshot().themeVariables;await e.provider.syncTheme({themeVariables:r,w3mThemeVariables:Pi(r,t)})}}};Ia.styles=dg;$u([d()],Ia.prototype,"ready",void 0);Ia=$u([f("w3m-approve-transaction-view")],Ia);var hg=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Cc=class extends w{render(){return l`
      <wui-flex flexDirection="column" alignItems="center" gap="xl" padding="xl">
        <wui-text variant="paragraph-400" color="fg-100">Follow the instructions on</wui-text>
        <wui-chip
          icon="externalLink"
          variant="fill"
          href=${Ue.SECURE_SITE_DASHBOARD}
          imageSrc=${Ue.SECURE_SITE_FAVICON}
          data-testid="w3m-secure-website-button"
        >
        </wui-chip>
        <wui-text variant="small-400" color="fg-200">
          You will have to reconnect for security reasons
        </wui-text>
      </wui-flex>
    `}};Cc=hg([f("w3m-upgrade-wallet-view")],Cc);var Ol=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Oa=class extends w{constructor(){super(...arguments),this.authConnector=P.getAuthConnector(),this.loading=!1,this.setPreferSmartAccount=async()=>{if(this.authConnector)try{this.loading=!0,await G.setPreferredAccountType(ae.ACCOUNT_TYPES.SMART_ACCOUNT),this.loading=!1,Os.navigateAfterPreferredAccountTypeSelect()}catch{z.showError("Error upgrading to smart account")}}}render(){return l`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="xxl"
        .padding=${["0","0","l","0"]}
      >
        ${this.onboardingTemplate()} ${this.buttonsTemplate()}
        <wui-link
          @click=${()=>{k.openHref(al.URLS.FAQ,"_blank")}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-link>
      </wui-flex>
    `}onboardingTemplate(){return l` <wui-flex
      flexDirection="column"
      gap="xxl"
      alignItems="center"
      .padding=${["0","xxl","0","xxl"]}
    >
      <wui-flex gap="s" alignItems="center" justifyContent="center">
        <wui-visual name="google"></wui-visual>
        <wui-visual name="pencil"></wui-visual>
        <wui-visual name="lightbulb"></wui-visual>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="s">
        <wui-text align="center" variant="medium-600" color="fg-100">
          Discover Smart Accounts
        </wui-text>
        <wui-text align="center" variant="paragraph-400" color="fg-100">
          Access advanced features such as username, social login, improved security and a smoother
          user experience!
        </wui-text>
      </wui-flex>
    </wui-flex>`}buttonsTemplate(){return l`<wui-flex .padding=${["0","2l","0","2l"]} gap="s">
      <wui-button
        variant="accent"
        @click=${this.redirectToAccount.bind(this)}
        size="lg"
        borderRadius="xs"
      >
        Do it later
      </wui-button>
      <wui-button
        .loading=${this.loading}
        size="lg"
        borderRadius="xs"
        @click=${this.setPreferSmartAccount.bind(this)}
        >Continue
      </wui-button>
    </wui-flex>`}redirectToAccount(){g.push("Account")}};Ol([d()],Oa.prototype,"authConnector",void 0);Ol([d()],Oa.prototype,"loading",void 0);Oa=Ol([f("w3m-upgrade-to-smart-account-view")],Oa);const fg=b`
  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }
`;var Nl=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let ko=class extends w{constructor(){var e;super(...arguments),this.formRef=zi(),this.initialEmail=((e=g.state.data)==null?void 0:e.email)??"",this.email="",this.loading=!1}firstUpdated(){var e;(e=this.formRef.value)==null||e.addEventListener("keydown",t=>{t.key==="Enter"&&this.onSubmitEmail(t)})}render(){const e=!this.loading&&this.email.length>3&&this.email!==this.initialEmail;return l`
      <wui-flex flexDirection="column" padding="m" gap="m">
        <form ${Vi(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
          <wui-email-input
            value=${this.initialEmail}
            .disabled=${this.loading}
            @inputChange=${this.onEmailInputChange.bind(this)}
          >
          </wui-email-input>
          <input type="submit" hidden />
        </form>

        <wui-flex gap="s">
          <wui-button size="md" variant="neutral" fullWidth @click=${g.goBack}>
            Cancel
          </wui-button>

          <wui-button
            size="md"
            variant="main"
            fullWidth
            @click=${this.onSubmitEmail.bind(this)}
            .disabled=${!e}
            .loading=${this.loading}
          >
            Save
          </wui-button>
        </wui-flex>
      </wui-flex>
    `}onEmailInputChange(e){this.email=e.detail}async onSubmitEmail(e){try{if(this.loading)return;this.loading=!0,e.preventDefault();const t=P.getAuthConnector();if(!t)throw new Error("w3m-update-email-wallet: Auth connector not found");const r=await t.provider.updateEmail({email:this.email});R.sendEvent({type:"track",event:"EMAIL_EDIT"}),r.action==="VERIFY_SECONDARY_OTP"?g.push("UpdateEmailSecondaryOtp",{email:this.initialEmail,newEmail:this.email}):g.push("UpdateEmailPrimaryOtp",{email:this.initialEmail,newEmail:this.email})}catch(t){z.showError(t),this.loading=!1}}};ko.styles=fg;Nl([d()],ko.prototype,"email",void 0);Nl([d()],ko.prototype,"loading",void 0);ko=Nl([f("w3m-update-email-wallet-view")],ko);var wg=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let _c=class extends ki{constructor(){var e;super(),this.email=(e=g.state.data)==null?void 0:e.email,this.onOtpSubmit=async t=>{try{this.authConnector&&(await this.authConnector.provider.updateEmailPrimaryOtp({otp:t}),R.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),g.replace("UpdateEmailSecondaryOtp",g.state.data))}catch(r){throw R.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL"}),r}},this.onStartOver=()=>{g.replace("UpdateEmailWallet",g.state.data)}}};_c=wg([f("w3m-update-email-primary-otp-view")],_c);var gg=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Tc=class extends ki{constructor(){var e;super(),this.email=(e=g.state.data)==null?void 0:e.newEmail,this.onOtpSubmit=async t=>{try{this.authConnector&&(await this.authConnector.provider.updateEmailSecondaryOtp({otp:t}),R.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),g.reset("Account"))}catch(r){throw R.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL"}),r}},this.onStartOver=()=>{g.replace("UpdateEmailWallet",g.state.data)}}};Tc=gg([f("w3m-update-email-secondary-otp-view")],Tc);const mg=b`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }
`;var Ru=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Na=class extends w{constructor(){var e;super(...arguments),this.swapUnsupportedChain=(e=g.state.data)==null?void 0:e.swapUnsupportedChain,this.disconecting=!1}render(){return l`
      <wui-flex class="container" flexDirection="column" gap="0">
        <wui-flex
          class="container"
          flexDirection="column"
          .padding=${["m","xl","xs","xl"]}
          alignItems="center"
          gap="xl"
        >
          ${this.descriptionTemplate()}
        </wui-flex>

        <wui-flex flexDirection="column" padding="s" gap="xs">
          ${this.networksTemplate()}
        </wui-flex>

        <wui-separator text="or"></wui-separator>
        <wui-flex flexDirection="column" padding="s" gap="xs">
          <wui-list-item
            variant="icon"
            iconVariant="overlay"
            icon="disconnect"
            ?chevron=${!1}
            .loading=${this.disconecting}
            @click=${this.onDisconnect.bind(this)}
            data-testid="disconnect-button"
          >
            <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
          </wui-list-item>
        </wui-flex>
      </wui-flex>
    `}descriptionTemplate(){return this.swapUnsupportedChain?l`
        <wui-text variant="small-400" color="fg-200" align="center">
          The swap feature doesn’t support your current network. Switch to an available option to
          continue.
        </wui-text>
      `:l`
      <wui-text variant="small-400" color="fg-200" align="center">
        This app doesn’t support your current network. Switch to an available option to continue.
      </wui-text>
    `}networksTemplate(){const e=T.getRequestedCaipNetworks(),t=T.state.approvedCaipNetworkIds,r=k.sortRequestedNetworks(t,e);return(this.swapUnsupportedChain?r.filter(n=>Ue.SWAP_SUPPORTED_NETWORKS.includes(n.id)):r).map(n=>l`
        <wui-list-network
          imageSrc=${$(we.getNetworkImage(n))}
          name=${n.name??"Unknown"}
          @click=${()=>this.onSwitchNetwork(n)}
        >
        </wui-list-network>
      `)}async onDisconnect(){try{this.disconecting=!0,await G.disconnect(),R.sendEvent({type:"track",event:"DISCONNECT_SUCCESS"}),q.close()}catch{R.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),z.showError("Failed to disconnect")}finally{this.disconecting=!1}}async onSwitchNetwork(e){const t=m.state.isConnected,r=T.state.approvedCaipNetworkIds,o=T.state.supportsAllNetworks,n=T.state.caipNetwork,a=g.state.data;t&&(n==null?void 0:n.id)!==e.id?r!=null&&r.includes(e.id)?(await T.switchActiveNetwork(e),await $l.onNetworkChange()):o&&g.push("SwitchNetwork",{...a,network:e}):t||(T.setCaipNetwork(e),g.push("Connect"))}};Na.styles=mg;Ru([d()],Na.prototype,"disconecting",void 0);Na=Ru([f("w3m-unsupported-chain-view")],Na);const vg=b`
  wui-compatible-network {
    margin-top: var(--wui-spacing-l);
  }
`;var Vo=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Nn=class extends w{constructor(){super(),this.unsubscribe=[],this.address=m.state.address,this.profileName=m.state.profileName,this.network=T.state.caipNetwork,this.preferredAccountType=m.state.preferredAccountType,this.unsubscribe.push(m.subscribe(e=>{e.address?(this.address=e.address,this.profileName=e.profileName,this.preferredAccountType=e.preferredAccountType):z.showError("Account not found")}),T.subscribeKey("caipNetwork",e=>{e!=null&&e.id&&(this.network=e)}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(!this.address)throw new Error("w3m-wallet-receive-view: No account provided");const e=we.getNetworkImage(this.network);return l` <wui-flex
      flexDirection="column"
      .padding=${["0","l","l","l"]}
      alignItems="center"
    >
      <wui-chip-button
        data-testid="receive-address-copy-button"
        @click=${this.onCopyClick.bind(this)}
        text=${H.getTruncateString({string:this.profileName||this.address||"",charsStart:this.profileName?18:4,charsEnd:this.profileName?0:4,truncate:this.profileName?"end":"middle"})}
        icon="copy"
        size="sm"
        imageSrc=${e||""}
        variant="gray"
      ></wui-chip-button>
      <wui-flex
        flexDirection="column"
        .padding=${["l","0","0","0"]}
        alignItems="center"
        gap="s"
      >
        <wui-qr-code
          size=${232}
          theme=${Ae.state.themeMode}
          uri=${this.address}
          ?arenaClear=${!0}
          data-testid="wui-qr-code"
        ></wui-qr-code>
        <wui-text variant="paragraph-500" color="fg-100" align="center">
          Copy your address or scan this QR code
        </wui-text>
      </wui-flex>
      ${this.networkTemplate()}
    </wui-flex>`}networkTemplate(){var a;const e=T.getRequestedCaipNetworks(),t=T.checkIfSmartAccountEnabled(),r=T.state.caipNetwork;if(this.preferredAccountType===ae.ACCOUNT_TYPES.SMART_ACCOUNT&&t)return r?l`<wui-compatible-network
        @click=${this.onReceiveClick.bind(this)}
        text="Only receive assets on this network"
        .networkImages=${[we.getNetworkImage(r)??""]}
      ></wui-compatible-network>`:null;const n=((a=e==null?void 0:e.filter(s=>s==null?void 0:s.imageId))==null?void 0:a.slice(0,5)).map(we.getNetworkImage).filter(Boolean);return l`<wui-compatible-network
      @click=${this.onReceiveClick.bind(this)}
      text="Only receive assets on these networks"
      .networkImages=${n}
    ></wui-compatible-network>`}onReceiveClick(){g.push("WalletCompatibleNetworks")}onCopyClick(){try{this.address&&(k.copyToClopboard(this.address),z.showSuccess("Address copied"))}catch{z.showError("Failed to copy")}}};Nn.styles=vg;Vo([d()],Nn.prototype,"address",void 0);Vo([d()],Nn.prototype,"profileName",void 0);Vo([d()],Nn.prototype,"network",void 0);Vo([d()],Nn.prototype,"preferredAccountType",void 0);Nn=Vo([f("w3m-wallet-receive-view")],Nn);const bg=b`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }
`;var Iu=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Pa=class extends w{constructor(){super(),this.unsubscribe=[],this.preferredAccountType=m.state.preferredAccountType,this.unsubscribe.push(m.subscribeKey("preferredAccountType",e=>{this.preferredAccountType=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return l` <wui-flex
      flexDirection="column"
      .padding=${["xs","s","m","s"]}
      gap="xs"
    >
      <wui-banner
        icon="warningCircle"
        text="You can only receive assets on these networks"
      ></wui-banner>
      ${this.networkTemplate()}
    </wui-flex>`}networkTemplate(){const e=T.getRequestedCaipNetworks(),t=T.state.approvedCaipNetworkIds,r=T.state.caipNetwork,o=T.checkIfSmartAccountEnabled();let n=k.sortRequestedNetworks(t,e);if(o&&this.preferredAccountType===ae.ACCOUNT_TYPES.SMART_ACCOUNT){if(!r)return null;n=[r]}return n.map(a=>l`
        <wui-list-network
          imageSrc=${$(we.getNetworkImage(a))}
          name=${a.name??"Unknown"}
          ?transparent=${!0}
        >
        </wui-list-network>
      `)}};Pa.styles=bg;Iu([d()],Pa.prototype,"preferredAccountType",void 0);Pa=Iu([f("w3m-wallet-compatible-networks-view")],Pa);const xg=b`
  :host {
    display: block;
  }

  wui-flex {
    position: relative;
  }

  wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xs) !important;
    border: 5px solid var(--wui-color-bg-125);
    background: var(--wui-color-bg-175);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
  }

  wui-button {
    --local-border-radius: var(--wui-border-radius-xs) !important;
  }

  .inputContainer {
    height: fit-content;
  }
`;var tn=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let ei=class extends w{constructor(){super(),this.unsubscribe=[],this.token=fe.state.token,this.sendTokenAmount=fe.state.sendTokenAmount,this.receiverAddress=fe.state.receiverAddress,this.receiverProfileName=fe.state.receiverProfileName,this.loading=fe.state.loading,this.gasPriceInUSD=fe.state.gasPriceInUSD,this.message="Preview Send",this.fetchNetworkPrice(),this.unsubscribe.push(fe.subscribe(e=>{this.token=e.token,this.sendTokenAmount=e.sendTokenAmount,this.receiverAddress=e.receiverAddress,this.gasPriceInUSD=e.gasPriceInUSD,this.receiverProfileName=e.receiverProfileName,this.loading=e.loading}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return this.getMessage(),l` <wui-flex flexDirection="column" .padding=${["0","l","l","l"]}>
      <wui-flex class="inputContainer" gap="xs" flexDirection="column">
        <w3m-input-token
          .token=${this.token}
          .sendTokenAmount=${this.sendTokenAmount}
          .gasPriceInUSD=${this.gasPriceInUSD}
        ></w3m-input-token>
        <wui-icon-box
          size="inherit"
          backgroundColor="fg-300"
          iconSize="lg"
          iconColor="fg-250"
          background="opaque"
          icon="arrowBottom"
        ></wui-icon-box>
        <w3m-input-address
          .value=${this.receiverProfileName?this.receiverProfileName:this.receiverAddress}
        ></w3m-input-address>
      </wui-flex>
      <wui-flex .margin=${["l","0","0","0"]}>
        <wui-button
          @click=${this.onButtonClick.bind(this)}
          ?disabled=${!this.message.startsWith("Preview Send")}
          size="lg"
          variant="main"
          ?loading=${this.loading}
          fullWidth
        >
          ${this.message}
        </wui-button>
      </wui-flex>
    </wui-flex>`}async fetchNetworkPrice(){await E.getNetworkTokenPrice();const e=await E.getInitialGasPrice();e!=null&&e.gasPrice&&(e!=null&&e.gasPriceInUSD)&&(fe.setGasPrice(e.gasPrice),fe.setGasPriceInUsd(e.gasPriceInUSD))}onButtonClick(){g.push("WalletSendPreview")}getMessage(){var e;this.message="Preview Send",this.receiverAddress&&!k.isAddress(this.receiverAddress)&&(this.message="Invalid Address"),this.receiverAddress||(this.message="Add Address"),this.sendTokenAmount&&this.token&&this.sendTokenAmount>Number(this.token.quantity.numeric)&&(this.message="Insufficient Funds"),this.sendTokenAmount||(this.message="Add Amount"),this.sendTokenAmount&&((e=this.token)!=null&&e.price)&&(this.sendTokenAmount*this.token.price||(this.message="Incorrect Value")),this.token||(this.message="Select Token")}};ei.styles=xg;tn([d()],ei.prototype,"token",void 0);tn([d()],ei.prototype,"sendTokenAmount",void 0);tn([d()],ei.prototype,"receiverAddress",void 0);tn([d()],ei.prototype,"receiverProfileName",void 0);tn([d()],ei.prototype,"loading",void 0);tn([d()],ei.prototype,"gasPriceInUSD",void 0);tn([d()],ei.prototype,"message",void 0);ei=tn([f("w3m-wallet-send-view")],ei);const yg=b`
  .contentContainer {
    height: 440px;
    overflow: scroll;
    scrollbar-width: none;
  }

  .contentContainer::-webkit-scrollbar {
    display: none;
  }

  wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }
`;var Ho=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Pn=class extends w{constructor(){super(),this.unsubscribe=[],this.tokenBalance=m.state.tokenBalance,this.search="",this.onDebouncedSearch=k.debounce(e=>{this.search=e}),this.unsubscribe.push(m.subscribe(e=>{this.tokenBalance=e.tokenBalance}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return l`
      <wui-flex flexDirection="column">
        ${this.templateSearchInput()} <wui-separator></wui-separator> ${this.templateTokens()}
      </wui-flex>
    `}templateSearchInput(){return l`
      <wui-flex gap="xs" padding="s">
        <wui-input-text
          @inputChange=${this.onInputChange.bind(this)}
          class="network-search-input"
          size="sm"
          placeholder="Search token"
          icon="search"
        ></wui-input-text>
      </wui-flex>
    `}templateTokens(){var e,t;return this.tokens=(e=this.tokenBalance)==null?void 0:e.filter(r=>{var o;return r.chainId===((o=T.state.caipNetwork)==null?void 0:o.id)}),this.search?this.filteredTokens=(t=this.tokenBalance)==null?void 0:t.filter(r=>r.name.toLowerCase().includes(this.search.toLowerCase())):this.filteredTokens=this.tokens,l`
      <wui-flex
        class="contentContainer"
        flexDirection="column"
        .padding=${["0","s","0","s"]}
      >
        <wui-flex justifyContent="flex-start" .padding=${["m","s","s","s"]}>
          <wui-text variant="paragraph-500" color="fg-200">Your tokens</wui-text>
        </wui-flex>
        <wui-flex flexDirection="column" gap="xs">
          ${this.filteredTokens&&this.filteredTokens.length>0?this.filteredTokens.map(r=>l`<wui-list-token
                    @click=${this.handleTokenClick.bind(this,r)}
                    ?clickable=${!0}
                    tokenName=${r.name}
                    tokenImageUrl=${r.iconUrl}
                    tokenAmount=${r.quantity.numeric}
                    tokenValue=${r.value}
                    tokenCurrency=${r.symbol}
                  ></wui-list-token>`):l`<wui-flex
                .padding=${["4xl","0","0","0"]}
                alignItems="center"
                flexDirection="column"
                gap="l"
              >
                <wui-icon-box
                  icon="coinPlaceholder"
                  size="inherit"
                  iconColor="fg-200"
                  backgroundColor="fg-200"
                  iconSize="lg"
                ></wui-icon-box>
                <wui-flex
                  class="textContent"
                  gap="xs"
                  flexDirection="column"
                  justifyContent="center"
                  flexDirection="column"
                >
                  <wui-text variant="paragraph-500" align="center" color="fg-100"
                    >No tokens found</wui-text
                  >
                  <wui-text variant="small-400" align="center" color="fg-200"
                    >Your tokens will appear here</wui-text
                  >
                </wui-flex>
                <wui-link @click=${this.onBuyClick.bind(this)}>Buy</wui-link>
              </wui-flex>`}
        </wui-flex>
      </wui-flex>
    `}onBuyClick(){g.push("OnRampProviders")}onInputChange(e){this.onDebouncedSearch(e.detail)}handleTokenClick(e){fe.setToken(e),fe.setTokenAmount(void 0),g.goBack()}};Pn.styles=yg;Ho([d()],Pn.prototype,"tokenBalance",void 0);Ho([d()],Pn.prototype,"tokens",void 0);Ho([d()],Pn.prototype,"filteredTokens",void 0);Ho([d()],Pn.prototype,"search",void 0);Pn=Ho([f("w3m-wallet-send-select-token-view")],Pn);const Cg=b`
  wui-avatar,
  wui-image {
    display: ruby;
    width: 32px;
    height: 32px;
    border-radius: var(--wui-border-radius-3xl);
  }

  .sendButton {
    width: 70%;
    --local-width: 100% !important;
    --local-border-radius: var(--wui-border-radius-xs) !important;
  }

  .cancelButton {
    width: 30%;
    --local-width: 100% !important;
    --local-border-radius: var(--wui-border-radius-xs) !important;
  }
`;var nn=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let ti=class extends w{constructor(){super(),this.unsubscribe=[],this.token=fe.state.token,this.sendTokenAmount=fe.state.sendTokenAmount,this.receiverAddress=fe.state.receiverAddress,this.receiverProfileName=fe.state.receiverProfileName,this.receiverProfileImageUrl=fe.state.receiverProfileImageUrl,this.gasPriceInUSD=fe.state.gasPriceInUSD,this.caipNetwork=T.state.caipNetwork,this.unsubscribe.push(fe.subscribe(e=>{this.token=e.token,this.sendTokenAmount=e.sendTokenAmount,this.receiverAddress=e.receiverAddress,this.gasPriceInUSD=e.gasPriceInUSD,this.receiverProfileName=e.receiverProfileName,this.receiverProfileImageUrl=e.receiverProfileImageUrl}),T.subscribeKey("caipNetwork",e=>this.caipNetwork=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){var e,t;return l` <wui-flex flexDirection="column" .padding=${["0","l","l","l"]}>
      <wui-flex gap="xs" flexDirection="column" .padding=${["0","xs","0","xs"]}>
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-flex flexDirection="column" gap="4xs">
            <wui-text variant="small-400" color="fg-150">Send</wui-text>
            ${this.sendValueTemplate()}
          </wui-flex>
          <wui-preview-item
            text="${this.sendTokenAmount?H.roundNumber(this.sendTokenAmount,6,5):"unknown"} ${(e=this.token)==null?void 0:e.symbol}"
            .imageSrc=${(t=this.token)==null?void 0:t.iconUrl}
          ></wui-preview-item>
        </wui-flex>
        <wui-flex>
          <wui-icon color="fg-200" size="md" name="arrowBottom"></wui-icon>
        </wui-flex>
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="small-400" color="fg-150">To</wui-text>
          <wui-preview-item
            text="${this.receiverProfileName?H.getTruncateString({string:this.receiverProfileName,charsStart:20,charsEnd:0,truncate:"end"}):H.getTruncateString({string:this.receiverAddress?this.receiverAddress:"",charsStart:4,charsEnd:4,truncate:"middle"})}"
            address=${this.receiverAddress??""}
            .imageSrc=${this.receiverProfileImageUrl??void 0}
            .isAddress=${!0}
          ></wui-preview-item>
        </wui-flex>
      </wui-flex>
      <wui-flex flexDirection="column" .padding=${["xxl","0","0","0"]}>
        <w3m-wallet-send-details
          .caipNetwork=${this.caipNetwork}
          .receiverAddress=${this.receiverAddress}
          .networkFee=${this.gasPriceInUSD}
        ></w3m-wallet-send-details>
        <wui-flex justifyContent="center" gap="xxs" .padding=${["s","0","0","0"]}>
          <wui-icon size="sm" color="fg-200" name="warningCircle"></wui-icon>
          <wui-text variant="small-400" color="fg-200">Review transaction carefully</wui-text>
        </wui-flex>
        <wui-flex justifyContent="center" gap="s" .padding=${["l","0","0","0"]}>
          <wui-button
            class="cancelButton"
            @click=${this.onCancelClick.bind(this)}
            size="lg"
            variant="neutral"
          >
            Cancel
          </wui-button>
          <wui-button
            class="sendButton"
            @click=${this.onSendClick.bind(this)}
            size="lg"
            variant="main"
          >
            Send
          </wui-button>
        </wui-flex>
      </wui-flex></wui-flex
    >`}sendValueTemplate(){if(this.token&&this.sendTokenAmount){const t=this.token.price*this.sendTokenAmount;return l`<wui-text variant="paragraph-400" color="fg-100"
        >$${t.toFixed(2)}</wui-text
      >`}return null}onSendClick(){fe.sendToken()}onCancelClick(){g.goBack()}};ti.styles=Cg;nn([d()],ti.prototype,"token",void 0);nn([d()],ti.prototype,"sendTokenAmount",void 0);nn([d()],ti.prototype,"receiverAddress",void 0);nn([d()],ti.prototype,"receiverProfileName",void 0);nn([d()],ti.prototype,"receiverProfileImageUrl",void 0);nn([d()],ti.prototype,"gasPriceInUSD",void 0);nn([d()],ti.prototype,"caipNetwork",void 0);ti=nn([f("w3m-wallet-send-preview-view")],ti);const _g=b`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }
  wui-flex::-webkit-scrollbar {
    display: none;
  }
`;var Tg=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Hs=class extends w{render(){return l`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        <w3m-wallet-login-list></w3m-wallet-login-list>
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}};Hs.styles=_g;Hs=Tg([f("w3m-connect-wallets-view")],Hs);const kg=b`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }
  wui-flex::-webkit-scrollbar {
    display: none;
  }
`;var Sg=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Fs=class extends w{render(){return l`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        <w3m-social-login-list></w3m-social-login-list>
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}};Fs.styles=kg;Fs=Sg([f("w3m-connect-socials-view")],Fs);const Ag=b`
  wui-logo {
    width: 80px;
    height: 80px;
    border-radius: var(--wui-border-radius-m);
  }
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }
  wui-flex:first-child:not(:only-child) {
    position: relative;
  }
  wui-loading-thumbnail {
    position: absolute;
  }
  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }
  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }
  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }
  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }
  .capitalize {
    text-transform: capitalize;
  }
`;var Or=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Gi=class extends w{constructor(){super(),this.unsubscribe=[],this.socialProvider=m.state.socialProvider,this.socialWindow=m.state.socialWindow,this.error=!1,this.connecting=!1,this.message="Connect in the provider window",this.authConnector=P.getAuthConnector(),this.handleSocialConnection=async e=>{var t;if((t=e.data)!=null&&t.resultUri)if(e.origin===hi.SECURE_SITE_ORIGIN){window.removeEventListener("message",this.handleSocialConnection,!1);try{if(this.authConnector&&!this.connecting){this.socialWindow&&(this.socialWindow.close(),m.setSocialWindow(void 0,y.state.activeChain)),this.connecting=!0,this.updateMessage();const r=e.data.resultUri;await this.authConnector.provider.connectSocial(r),this.socialProvider&&(oe.setConnectedSocialProvider(this.socialProvider),await G.connectExternal(this.authConnector),R.sendEvent({type:"track",event:"SOCIAL_LOGIN_SUCCESS",properties:{provider:this.socialProvider}}))}}catch{this.error=!0,this.updateMessage(),this.socialProvider&&R.sendEvent({type:"track",event:"SOCIAL_LOGIN_ERROR",properties:{provider:this.socialProvider}})}}else g.goBack(),z.showError("Untrusted Origin"),this.socialProvider&&R.sendEvent({type:"track",event:"SOCIAL_LOGIN_ERROR",properties:{provider:this.socialProvider}})},this.unsubscribe.push(m.subscribe(e=>{e.socialProvider&&(this.socialProvider=e.socialProvider),e.socialWindow&&(this.socialWindow=e.socialWindow),e.address&&q.state.open&&q.close()})),this.authConnector&&this.connectSocial()}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),window.removeEventListener("message",this.handleSocialConnection,!1)}render(){return l`
      <wui-flex
        data-error=${$(this.error)}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-logo logo=${$(this.socialProvider)}></wui-logo>
          ${this.error?null:this.loaderTemplate()}
          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>
        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100"
            >Log in with
            <span class="capitalize">${this.socialProvider??"Social"}</span></wui-text
          >
          <wui-text align="center" variant="small-400" color=${this.error?"error-100":"fg-200"}
            >${this.message}</wui-text
          ></wui-flex
        >
      </wui-flex>
    `}loaderTemplate(){const e=Ae.state.themeVariables["--w3m-border-radius-master"],t=e?parseInt(e.replace("px",""),10):4;return l`<wui-loading-thumbnail radius=${t*9}></wui-loading-thumbnail>`}connectSocial(){const e=setInterval(()=>{var t;(t=this.socialWindow)!=null&&t.closed&&(!this.connecting&&g.state.view==="ConnectingSocial"&&g.goBack(),clearInterval(e))},1e3);window.addEventListener("message",this.handleSocialConnection,!1)}updateMessage(){this.error?this.message="Something went wrong":this.connecting?this.message="Retrieving user data":this.message="Connect in the provider window"}};Gi.styles=Ag;Or([d()],Gi.prototype,"socialProvider",void 0);Or([d()],Gi.prototype,"socialWindow",void 0);Or([d()],Gi.prototype,"error",void 0);Or([d()],Gi.prototype,"connecting",void 0);Or([d()],Gi.prototype,"message",void 0);Gi=Or([f("w3m-connecting-social-view")],Gi);const Eg=b`
  wui-flex {
    width: 100%;
  }

  wui-icon-link {
    margin-right: calc(var(--wui-icon-box-size-md) * -1);
  }

  .account-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .account-links wui-flex {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    background: red;
    align-items: center;
    justify-content: center;
    height: 48px;
    padding: 10px;
    flex: 1 0 0;

    border-radius: var(--XS, 16px);
    border: 1px solid var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    background: var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  .account-links wui-flex:hover {
    background: var(--dark-accent-glass-015, rgba(71, 161, 255, 0.15));
  }

  .account-links wui-flex wui-icon {
    width: var(--S, 20px);
    height: var(--S, 20px);
  }

  .account-links wui-flex wui-icon svg path {
    stroke: #47a1ff;
  }

  .account-settings-button {
    padding: calc(var(--wui-spacing-m) - 1px) var(--wui-spacing-2l);
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
    border: 1px solid var(--wui-color-gray-glass-002);
    background: var(--wui-color-gray-glass-002);
    cursor: pointer;
  }

  .account-settings-button:hover {
    background: var(--wui-color-gray-glass-005);
  }
`;var Fo=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Dn=class extends w{constructor(){super(),this.usubscribe=[],this.address=m.state.address,this.profileImage=m.state.profileImage,this.profileName=m.state.profileName,this.accounts=m.state.allAccounts,this.usubscribe.push(m.subscribeKey("address",e=>{e?this.address=e:q.close()})),this.usubscribe.push(m.subscribeKey("profileImage",e=>{this.profileImage=e})),this.usubscribe.push(m.subscribeKey("profileName",e=>{this.profileName=e}))}disconnectedCallback(){this.usubscribe.forEach(e=>e())}render(){var t;if(!this.address)throw new Error("w3m-profile-view: No account provided");const e=(t=this.profileName)==null?void 0:t.split(".")[0];return l`
      <wui-flex flexDirection="column" gap="l" .padding=${["0","xl","m","xl"]}>
        <wui-flex flexDirection="column" alignItems="center" gap="l">
          <wui-avatar
            alt=${this.address}
            address=${this.address}
            imageSrc=${$(this.profileImage)}
            size="2lg"
          ></wui-avatar>
          <wui-flex flexDirection="column" alignItems="center">
            <wui-flex gap="3xs" alignItems="center" justifyContent="center">
              <wui-text variant="title-6-600" color="fg-100" data-testid="account-settings-address">
                ${e?H.getTruncateString({string:e,charsStart:20,charsEnd:0,truncate:"end"}):H.getTruncateString({string:this.address,charsStart:4,charsEnd:6,truncate:"middle"})}
              </wui-text>
              <wui-icon-link
                size="md"
                icon="copy"
                iconColor="fg-200"
                @click=${this.onCopyAddress}
              ></wui-icon-link>
            </wui-flex>
          </wui-flex>
        </wui-flex>
        <wui-flex
          data-testid="account-settings-button"
          justifyContent="center"
          alignItems="center"
          class="account-settings-button"
          @click=${()=>g.push("AccountSettings")}
        >
          <wui-text variant="paragraph-500" color="fg-100">Account Settings</wui-text>
        </wui-flex>
        ${this.accountsTemplate()}
      </wui-flex>
    `}accountsTemplate(){return l`<wui-flex flexDirection="column">
      <wui-flex .padding=${["3xs","m","s","s"]}>
        <wui-text color="fg-200" variant="paragraph-400">Your accounts</wui-text>
      </wui-flex>
      <wui-flex flexDirection="column" gap="xxs">
        ${this.accounts.map(e=>this.accountTemplate(e))}
      </wui-flex>
    </wui-flex>`}async onSwitchAccount(e){m.setShouldUpdateToAddress(e.address);const t=P.getAuthConnector();t&&(await t.provider.setPreferredAccount(e.type),await t.provider.connect())}accountTemplate(e){return l`<wui-list-account accountAddress=${e.address} accountType=${e.type}>
      ${e.address===this.address?"":l`<wui-button
            slot="action"
            textVariant="small-600"
            size="sm"
            variant="accent"
            @click=${()=>this.onSwitchAccount(e)}
            >Switch</wui-button
          >`}
    </wui-list-account>`}onCopyAddress(){try{this.profileName?(k.copyToClopboard(this.profileName),z.showSuccess("Name copied")):this.address&&(k.copyToClopboard(this.address),z.showSuccess("Address copied"))}catch{z.showError("Failed to copy")}}};Dn.styles=Eg;Fo([d()],Dn.prototype,"address",void 0);Fo([d()],Dn.prototype,"profileImage",void 0);Fo([d()],Dn.prototype,"profileName",void 0);Fo([d()],Dn.prototype,"accounts",void 0);Dn=Fo([f("w3m-profile-view")],Dn);const $g=b`
  input[type='checkbox'] {
    all: revert;
    width: var(--wui-spacing-xl);
    height: var(--wui-spacing-xl);
    accent-color: var(--wui-color-accent-100);
  }
`;var Nr=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let qi=class extends w{constructor(){super(),this.metadata=A.state.metadata,this.allAccounts=m.state.allAccounts,this.selectedAccounts=m.state.allAccounts,this.selectAll=!0,this.approved=!1,this.isApproving=!1,this.getAddressTemplate=e=>{const t=this.selectedAccounts.some(r=>r.address===e.address);return l`<wui-list-account accountAddress="${e.address}" accountType="${e.type}">
      <input
        id="${e.address}"
        slot="action"
        type="checkbox"
        .checked="${t}"
        @change="${this.handleClick(e)}"
      />
    </wui-list-account>`},this.onSelectAll=e=>{const t=e.target.checked;this.selectAll=this.selectedAccounts.length===this.allAccounts.length,this.allAccounts.forEach(r=>{this.onSelect(r,t)})},this.onSelect=(e,t)=>{t?this.selectedAccounts.push(e):this.selectedAccounts=this.selectedAccounts.filter(r=>r.address!==e.address),this.selectedAccounts.length>0&&(this.selectAll=this.selectedAccounts.length===this.allAccounts.length)},m.subscribeKey("allAccounts",e=>{this.allAccounts=e})}render(){var e,t;return l`
    <wui-flex justifyContent="center" .padding=${["xl","0","xl","0"]}>
      <wui-banner-img imageSrc="${$((e=this.metadata)==null?void 0:e.icons[0])}" text="${$((t=this.metadata)==null?void 0:t.url)}" size="sm"></wui-banner>
    </wui-flex>
    <wui-flex .padding=${["0","xl","0","xl"]} flexDirection="row" justifyContent="space-between">
        <wui-text variant="paragraph-400" color="fg-200">Select all</wui-text>
        <input type="checkbox" .checked=${this.selectAll}  @click=${this.onSelectAll.bind(this)} />
    </wui-flex>
      <wui-flex flexDirection="column" .padding=${["l","xl","xl","xl"]}>
        ${this.allAccounts.map(r=>this.getAddressTemplate(r))}
      </wui-flex>
      <wui-flex .padding=${["l","xl","xl","xl"]} gap="s" justifyContent="space-between">
        <wui-button
          size="md"
          ?fullwidth=${!0}
          variant="neutral"
          @click=${this.onCancel.bind(this)}
          data-testid="w3m-connecting-siwe-cancel"
        >
          Cancel
        </wui-button>
        <wui-button
          size="md"
          ?fullwidth=${!0}
          variant="main"
          .disabled=${this.selectedAccounts.length===0}
          @click=${this.onContinue.bind(this)}
          ?loading=${this.isApproving}
        >
          ${this.isApproving?"Signing...":"Continue"}
        </wui-button>
      </wui-flex>
    `}handleClick(e){return t=>{var o;const r=t.target;(o=this.onSelect)==null||o.call(this,{...e},r==null?void 0:r.checked)}}onContinue(){var e;this.selectedAccounts.length>0?(this.isApproving=!0,m.setAllAccounts(this.selectedAccounts),m.setShouldUpdateToAddress(((e=this.selectedAccounts[0])==null?void 0:e.address)??""),this.approved=!0,this.isApproving=!1,q.close()):this.onCancel()}async onCancel(){const{isConnected:e}=m.state;e?(await G.disconnect(),q.close()):g.push("Connect")}disconnectedCallback(){super.disconnectedCallback(),this.approved||this.onCancel()}};qi.styles=$g;Nr([d()],qi.prototype,"allAccounts",void 0);Nr([d()],qi.prototype,"selectedAccounts",void 0);Nr([d()],qi.prototype,"selectAll",void 0);Nr([d()],qi.prototype,"approved",void 0);Nr([d()],qi.prototype,"isApproving",void 0);qi=Nr([f("w3m-select-addresses-view")],qi);const Rg=b`
  wui-avatar {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    box-shadow: 0 0 0 0;
  }

  wui-icon-box {
    position: relative;
    right: 15px;
    top: 15px;
    border: 2px solid var(--wui-color-bg-150);
    background-color: var(--wui-color-bg-125);
  }
`;var Pl=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let So=class extends w{constructor(){super(),this.metadata=A.state.metadata,this.allAccounts=m.state.allAccounts||[],this.balances={},this.labels=m.state.addressLabels,this.currentAddress=m.state.address||"",this.connectedConnector=oe.getConnectedConnector(),this.shouldShowIcon=this.connectedConnector==="AUTH",this.caipNetwork=T.state.caipNetwork,m.subscribeKey("allAccounts",e=>{this.allAccounts=e})}connectedCallback(){super.connectedCallback(),this.allAccounts.forEach(e=>{var t;ke.getBalance(e.address,(t=this.caipNetwork)==null?void 0:t.id).then(r=>{let o=this.balances[e.address]||0;r.balances.length>0&&(o=r.balances.reduce((n,a)=>n+((a==null?void 0:a.value)||0),0)),this.balances[e.address]=o,this.requestUpdate()})})}getAddressIcon(e){return e==="smartAccount"?"lightbulb":"mail"}render(){var e,t;return l`
      <wui-flex justifyContent="center" .padding=${["xl","0","xl","0"]}>
        <wui-banner-img
          imageSrc=${$((e=this.metadata)==null?void 0:e.icons[0])}
          text=${$((t=this.metadata)==null?void 0:t.url)}
          size="sm"
        ></wui-banner-img>
      </wui-flex>
      <wui-flex flexDirection="column" gap="xxl" .padding=${["l","xl","xl","xl"]}>
        ${this.allAccounts.map((r,o)=>this.getAddressTemplate(r,o))}
      </wui-flex>
    `}getAddressTemplate(e,t){var o,n,a,s;const r=(o=this.labels)==null?void 0:o.get(e.address);return l`
      <wui-flex
        flexDirection="row"
        justifyContent="space-between"
        data-testid="switch-address-item"
      >
        <wui-flex alignItems="center">
          <wui-avatar address=${e.address}></wui-avatar>
          ${this.shouldShowIcon?l`<wui-icon-box
                size="sm"
                iconcolor="fg-200"
                backgroundcolor="glass-002"
                background="gray"
                icon="${this.getAddressIcon(e.type)}"
                ?border=${!0}
              ></wui-icon-box>`:l`<wui-flex .padding="${["0","0","0","s"]}"></wui-flex>`}
          <wui-flex flexDirection="column">
            <wui-text class="address" variant="paragraph-500" color="fg-100"
              >${r||H.getTruncateString({string:e.address,charsStart:4,charsEnd:6,truncate:"middle"})}</wui-text
            >
            <wui-text class="address-description" variant="small-400">
              ${typeof this.balances[e.address]=="number"?`$${(n=this.balances[e.address])==null?void 0:n.toFixed(2)}`:l`<wui-loading-spinner size="sm" color="accent-100"></wui-loading-spinner>`}
            </wui-text>
          </wui-flex>
        </wui-flex>
        <wui-flex gap="s" alignItems="center">
          ${((a=e.address)==null?void 0:a.toLowerCase())===((s=this.currentAddress)==null?void 0:s.toLowerCase())?"":l`
                <wui-button
                  data-testid=${`w3m-switch-address-button-${t}`}
                  textVariant="small-600"
                  size="md"
                  variant="accent"
                  @click=${()=>this.onSwitchAddress(e.address)}
                  >Switch to</wui-button
                >
              `}
        </wui-flex>
      </wui-flex>
    `}onSwitchAddress(e){m.setShouldUpdateToAddress(e,y.state.activeChain),q.close()}};So.styles=Rg;Pl([d()],So.prototype,"allAccounts",void 0);Pl([d()],So.prototype,"balances",void 0);So=Pl([f("w3m-switch-address-view")],So);const Ig=b`
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px) !important;
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: 200ms;
    animation-timing-function: ease;
    animation-name: fadein;
    animation-fill-mode: forwards;
  }

  wui-logo {
    width: 80px;
    height: 80px;
    border-radius: var(--wui-border-radius-m);
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }
  wui-loading-thumbnail {
    position: absolute;
  }
  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }
`;var Zo=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Un=class extends w{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.socialProvider=m.state.socialProvider,this.uri=m.state.farcasterUrl,this.ready=!1,this.loading=!1,this.authConnector=P.getAuthConnector(),this.forceUpdate=()=>{this.requestUpdate()},this.unsubscribe.push(m.subscribeKey("farcasterUrl",e=>{e&&(this.uri=e,this.connectFarcaster())}),m.subscribeKey("socialProvider",e=>{e&&(this.socialProvider=e)})),window.addEventListener("resize",this.forceUpdate)}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.timeout),window.removeEventListener("resize",this.forceUpdate)}render(){return this.onRenderProxy(),l`${this.platformTemplate()}`}platformTemplate(){return k.isMobile()?l`${this.mobileTemplate()}`:l`${this.desktopTemplate()}`}desktopTemplate(){return this.loading?l`${this.loadingTemplate()}`:l`${this.qrTemplate()}`}qrTemplate(){return l` <wui-flex
      flexDirection="column"
      alignItems="center"
      .padding=${["0","xl","xl","xl"]}
      gap="xl"
    >
      <wui-shimmer borderRadius="l" width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

      <wui-text variant="paragraph-500" color="fg-100">
        Scan this QR Code with your phone
      </wui-text>
      ${this.copyTemplate()}
    </wui-flex>`}loadingTemplate(){return l`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-logo logo="farcaster"></wui-logo>
          ${this.loaderTemplate()}
          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>
        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100">
            Loading user data
          </wui-text>
          <wui-text align="center" variant="small-400" color="fg-200">
            Please wait a moment while we load your data.
          </wui-text>
        </wui-flex>
      </wui-flex>
    `}mobileTemplate(){return l` <wui-flex
      flexDirection="column"
      alignItems="center"
      .padding=${["3xl","xl","xl","xl"]}
      gap="xl"
    >
      <wui-flex justifyContent="center" alignItems="center">
        <wui-logo logo="farcaster"></wui-logo>
        ${this.loaderTemplate()}
        <wui-icon-box
          backgroundColor="error-100"
          background="opaque"
          iconColor="error-100"
          icon="close"
          size="sm"
          border
          borderColor="wui-color-bg-125"
        ></wui-icon-box>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="xs">
        <wui-text align="center" variant="paragraph-500" color="fg-100"
          >Continue in Farcaster</span></wui-text
        >
        <wui-text align="center" variant="small-400" color="fg-200"
          >Accept connection request in the app</wui-text
        ></wui-flex
      >
      ${this.mobileLinkTemplate()}
    </wui-flex>`}loaderTemplate(){const e=Ae.state.themeVariables["--w3m-border-radius-master"],t=e?parseInt(e.replace("px",""),10):4;return l`<wui-loading-thumbnail radius=${t*9}></wui-loading-thumbnail>`}async connectFarcaster(){var e;if(this.authConnector)try{await((e=this.authConnector)==null?void 0:e.provider.connectFarcaster()),this.socialProvider&&oe.setConnectedSocialProvider(this.socialProvider),this.loading=!0,await G.connectExternal(this.authConnector),this.loading=!1,q.close()}catch(t){g.goBack(),z.showError(t)}}mobileLinkTemplate(){return l`<wui-button
      size="md"
      ?loading=${this.loading}
      ?disabled=${!this.uri||this.loading}
      @click=${()=>{this.uri&&k.openHref(this.uri,"_blank")}}
    >
      Open farcaster</wui-button
    >`}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout(()=>{this.ready=!0},0))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;const e=this.getBoundingClientRect().width-40;return l` <wui-qr-code
      size=${e}
      theme=${Ae.state.themeMode}
      uri=${this.uri}
      ?farcaster=${!0}
      data-testid="wui-qr-code"
    ></wui-qr-code>`}copyTemplate(){const e=!this.uri||!this.ready;return l`<wui-link
      .disabled=${e}
      @click=${this.onCopyUri}
      color="fg-200"
      data-testid="copy-wc2-uri"
    >
      <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
      Copy link
    </wui-link>`}onCopyUri(){try{this.uri&&(k.copyToClopboard(this.uri),z.showSuccess("Link copied"))}catch{z.showError("Failed to copy")}}};Un.styles=Ig;Zo([d()],Un.prototype,"socialProvider",void 0);Zo([d()],Un.prototype,"uri",void 0);Zo([d()],Un.prototype,"ready",void 0);Zo([d()],Un.prototype,"loading",void 0);Un=Zo([f("w3m-connecting-farcaster-view")],Un);const Og=b`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 76px);
  }

  @media (max-width: 435px) {
    wui-grid {
      grid-template-columns: repeat(auto-fill, 77px);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    justify-content: center;
    grid-column: 1 / span 4;
  }
`;function Ou(i){const{connectors:e}=P.state,t=e.filter(n=>n.type==="ANNOUNCED").reduce((n,a)=>{var s;return(s=a.info)!=null&&s.rdns&&(n[a.info.rdns]=!0),n},{});return i.map(n=>({...n,installed:!!n.rdns&&!!t[n.rdns??""]})).sort((n,a)=>Number(a.installed)-Number(n.installed))}var Go=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};const kc="local-paginator";let Wn=class extends w{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.initial=!V.state.wallets.length,this.wallets=V.state.wallets,this.recommended=V.state.recommended,this.featured=V.state.featured,this.unsubscribe.push(V.subscribeKey("wallets",e=>this.wallets=e),V.subscribeKey("recommended",e=>this.recommended=e),V.subscribeKey("featured",e=>this.featured=e))}firstUpdated(){this.initialFetch(),this.createPaginationObserver()}disconnectedCallback(){var e;this.unsubscribe.forEach(t=>t()),(e=this.paginationObserver)==null||e.disconnect()}render(){return l`
      <wui-grid
        data-scroll=${!this.initial}
        .padding=${["0","s","s","s"]}
        columnGap="xxs"
        rowGap="l"
        justifyContent="space-between"
      >
        ${this.initial?this.shimmerTemplate(16):this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `}async initialFetch(){var t;const e=(t=this.shadowRoot)==null?void 0:t.querySelector("wui-grid");this.initial&&e&&(await V.fetchWallets({page:1}),await e.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.initial=!1,e.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}shimmerTemplate(e,t){return[...Array(e)].map(()=>l`
        <wui-card-select-loader type="wallet" id=${$(t)}></wui-card-select-loader>
      `)}walletsTemplate(){const e=[...this.featured,...this.recommended,...this.wallets];return Ou(e).map(r=>l`
        <w3m-all-wallets-list-item
          @click=${()=>this.onConnectWallet(r)}
          .wallet=${r}
        ></w3m-all-wallets-list-item>
      `)}paginationLoaderTemplate(){const{wallets:e,recommended:t,featured:r,count:o}=V.state,n=window.innerWidth<352?3:4,a=e.length+t.length;let p=Math.ceil(a/n)*n-a+n;return p-=e.length?r.length%n:0,o===0&&r.length>0?null:o===0||[...r,...e,...t].length<o?this.shimmerTemplate(p,kc):null}createPaginationObserver(){var t;const e=(t=this.shadowRoot)==null?void 0:t.querySelector(`#${kc}`);e&&(this.paginationObserver=new IntersectionObserver(([r])=>{if(r!=null&&r.isIntersecting&&!this.initial){const{page:o,count:n,wallets:a}=V.state;a.length<n&&V.fetchWallets({page:o+1})}}),this.paginationObserver.observe(e))}onConnectWallet(e){const t=P.getConnector(e.id,e.rdns);t?g.push("ConnectingExternal",{connector:t}):g.push("ConnectingWalletConnect",{wallet:e})}};Wn.styles=Og;Go([d()],Wn.prototype,"initial",void 0);Go([d()],Wn.prototype,"wallets",void 0);Go([d()],Wn.prototype,"recommended",void 0);Go([d()],Wn.prototype,"featured",void 0);Wn=Go([f("w3m-all-wallets-list")],Wn);const Ng=b`
  button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) var(--wui-spacing-0);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    will-change: background-color, color;
    outline: none;
    border: none;
  }

  button > wui-text {
    color: var(--wui-color-fg-100);
    max-width: var(--wui-icon-box-size-xl);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button:hover:enabled {
    background-color: var(--wui-color-gray-glass-005);
  }

  button:disabled > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  [data-selected='true'] {
    background-color: var(--wui-color-accent-glass-020);
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }
  }

  [data-selected='true']:active:enabled {
    background-color: var(--wui-color-accent-glass-010);
  }
`;var qo=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Mn=class extends w{constructor(){super(),this.observer=new IntersectionObserver(()=>{}),this.visible=!1,this.imageSrc=void 0,this.imageLoading=!1,this.wallet=void 0,this.observer=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting?(this.visible=!0,this.fetchImageSrc()):this.visible=!1})},{threshold:.01})}firstUpdated(){this.observer.observe(this)}disconnectedCallback(){this.observer.disconnect()}render(){var e;return l`
      <button ontouchstart>
        ${this.imageTemplate()}
        <wui-text variant="tiny-500" color="inherit">${(e=this.wallet)==null?void 0:e.name}</wui-text>
      </button>
    `}imageTemplate(){var e,t;return!this.visible&&!this.imageSrc||this.imageLoading?this.shimmerTemplate():l`
      <wui-wallet-image
        size="md"
        imageSrc=${$(this.imageSrc)}
        name=${(e=this.wallet)==null?void 0:e.name}
        .installed=${(t=this.wallet)==null?void 0:t.installed}
        badgeSize="sm"
      >
      </wui-wallet-image>
    `}shimmerTemplate(){return l`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}async fetchImageSrc(){this.wallet&&(this.imageSrc=we.getWalletImage(this.wallet),!this.imageSrc&&(this.imageLoading=!0,this.imageSrc=await we.fetchWalletImage(this.wallet.image_id),this.imageLoading=!1))}};Mn.styles=Ng;qo([d()],Mn.prototype,"visible",void 0);qo([d()],Mn.prototype,"imageSrc",void 0);qo([d()],Mn.prototype,"imageLoading",void 0);qo([c()],Mn.prototype,"wallet",void 0);Mn=qo([f("w3m-all-wallets-list-item")],Mn);const Pg=b`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }
`;var Dl=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Ao=class extends w{constructor(){super(...arguments),this.prevQuery="",this.loading=!0,this.query=""}render(){return this.onSearch(),this.loading?l`<wui-loading-spinner color="accent-100"></wui-loading-spinner>`:this.walletsTemplate()}async onSearch(){this.query.trim()!==this.prevQuery.trim()&&(this.prevQuery=this.query,this.loading=!0,await V.searchWallet({search:this.query}),this.loading=!1)}walletsTemplate(){const{search:e}=V.state,t=Ou(e);return e.length?l`
      <wui-grid
        .padding=${["0","s","s","s"]}
        gridTemplateColumns="repeat(4, 1fr)"
        rowGap="l"
        columnGap="xs"
      >
        ${t.map(r=>l`
            <w3m-all-wallets-list-item
              @click=${()=>this.onConnectWallet(r)}
              .wallet=${r}
            ></w3m-all-wallets-list-item>
          `)}
      </wui-grid>
    `:l`
        <wui-flex justifyContent="center" alignItems="center" gap="s" flexDirection="column">
          <wui-icon-box
            size="lg"
            iconColor="fg-200"
            backgroundColor="fg-300"
            icon="wallet"
            background="transparent"
          ></wui-icon-box>
          <wui-text color="fg-200" variant="paragraph-500">No Wallet found</wui-text>
        </wui-flex>
      `}onConnectWallet(e){const t=P.getConnector(e.id,e.rdns);t?g.push("ConnectingExternal",{connector:t}):g.push("ConnectingWalletConnect",{wallet:e})}};Ao.styles=Pg;Dl([d()],Ao.prototype,"loading",void 0);Dl([c()],Ao.prototype,"query",void 0);Ao=Dl([f("w3m-all-wallets-search")],Ao);var us=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Eo=class extends w{constructor(){super(),this.platformTabs=[],this.unsubscribe=[],this.platforms=[],this.onSelectPlatfrom=void 0,this.buffering=!1,this.unsubscribe.push(G.subscribeKey("buffering",e=>this.buffering=e))}disconnectCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.generateTabs();return l`
      <wui-flex justifyContent="center" .padding=${["0","0","l","0"]}>
        <wui-tabs
          ?disabled=${this.buffering}
          .tabs=${e}
          .onTabChange=${this.onTabChange.bind(this)}
        ></wui-tabs>
      </wui-flex>
    `}generateTabs(){const e=this.platforms.map(t=>t==="browser"?{label:"Browser",icon:"extension",platform:"browser"}:t==="mobile"?{label:"Mobile",icon:"mobile",platform:"mobile"}:t==="qrcode"?{label:"Mobile",icon:"mobile",platform:"qrcode"}:t==="web"?{label:"Webapp",icon:"browser",platform:"web"}:t==="desktop"?{label:"Desktop",icon:"desktop",platform:"desktop"}:{label:"Browser",icon:"extension",platform:"unsupported"});return this.platformTabs=e.map(({platform:t})=>t),e}onTabChange(e){var r;const t=this.platformTabs[e];t&&((r=this.onSelectPlatfrom)==null||r.call(this,t))}};us([c({type:Array})],Eo.prototype,"platforms",void 0);us([c()],Eo.prototype,"onSelectPlatfrom",void 0);us([d()],Eo.prototype,"buffering",void 0);Eo=us([f("w3m-connecting-header")],Eo);var Dg=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Sc=class extends st{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-browser: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),R.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}async onConnectProxy(){var e;try{this.error=!1;const{connectors:t}=P.state,r=t.find(n=>{var a,s;return n.type==="ANNOUNCED"&&((a=n.info)==null?void 0:a.rdns)===((s=this.wallet)==null?void 0:s.rdns)}),o=t.find(n=>n.type==="INJECTED");r?await G.connectExternal(r):o&&await G.connectExternal(o),q.close(),R.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser",name:((e=this.wallet)==null?void 0:e.name)||"Unknown"}})}catch(t){R.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(t==null?void 0:t.message)??"Unknown"}}),this.error=!0}}};Sc=Dg([f("w3m-connecting-wc-browser")],Sc);var Ug=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Ac=class extends st{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-desktop: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),R.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"desktop"}})}onRenderProxy(){var e;!this.ready&&this.uri&&(this.ready=!0,(e=this.onConnect)==null||e.call(this))}onConnectProxy(){var e;if((e=this.wallet)!=null&&e.desktop_link&&this.uri)try{this.error=!1;const{desktop_link:t,name:r}=this.wallet,{redirect:o,href:n}=k.formatNativeUrl(t,this.uri);G.setWcLinking({name:r,href:n}),G.setRecentWallet(this.wallet),k.openHref(o,"_blank")}catch{this.error=!0}}};Ac=Ug([f("w3m-connecting-wc-desktop")],Ac);var Wg=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Ec=class extends st{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-mobile: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),document.addEventListener("visibilitychange",this.onBuffering.bind(this)),R.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"mobile"}})}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("visibilitychange",this.onBuffering.bind(this))}onRenderProxy(){var e;!this.ready&&this.uri&&(this.ready=!0,(e=this.onConnect)==null||e.call(this))}onConnectProxy(){var e;if((e=this.wallet)!=null&&e.mobile_link&&this.uri)try{this.error=!1;const{mobile_link:t,name:r}=this.wallet,{redirect:o,href:n}=k.formatNativeUrl(t,this.uri);G.setWcLinking({name:r,href:n}),G.setRecentWallet(this.wallet),k.openHref(o,"_self")}catch{this.error=!0}}onBuffering(){const e=k.isIos();(document==null?void 0:document.visibilityState)==="visible"&&!this.error&&e&&(G.setBuffering(!0),setTimeout(()=>{G.setBuffering(!1)},5e3))}};Ec=Wg([f("w3m-connecting-wc-mobile")],Ec);const Mg=b`
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px) !important;
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: 200ms;
    animation-timing-function: ease;
    animation-name: fadein;
    animation-fill-mode: forwards;
  }
`;var jg=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Zs=class extends st{constructor(){var e;super(),this.forceUpdate=()=>{this.requestUpdate()},window.addEventListener("resize",this.forceUpdate),R.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:((e=this.wallet)==null?void 0:e.name)??"WalletConnect",platform:"qrcode"}})}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this.forceUpdate)}render(){return this.onRenderProxy(),l`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["0","xl","xl","xl"]}
        gap="xl"
      >
        <wui-shimmer borderRadius="l" width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

        <wui-text variant="paragraph-500" color="fg-100">
          Scan this QR Code with your phone
        </wui-text>
        ${this.copyTemplate()}
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout(()=>{this.ready=!0},0))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;const e=this.getBoundingClientRect().width-40,t=this.wallet?this.wallet.name:void 0;return G.setWcLinking(void 0),G.setRecentWallet(this.wallet),l` <wui-qr-code
      size=${e}
      theme=${Ae.state.themeMode}
      uri=${this.uri}
      imageSrc=${$(we.getWalletImage(this.wallet))}
      alt=${$(t)}
      data-testid="wui-qr-code"
    ></wui-qr-code>`}copyTemplate(){const e=!this.uri||!this.ready;return l`<wui-link
      .disabled=${e}
      @click=${this.onCopyUri}
      color="fg-200"
      data-testid="copy-wc2-uri"
    >
      <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
      Copy link
    </wui-link>`}};Zs.styles=Mg;Zs=jg([f("w3m-connecting-wc-qrcode")],Zs);var Lg=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let $c=class extends w{constructor(){var e;if(super(),this.wallet=(e=g.state.data)==null?void 0:e.wallet,!this.wallet)throw new Error("w3m-connecting-wc-unsupported: No wallet provided");R.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}render(){return l`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${$(we.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="paragraph-500" color="fg-100">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}};$c=Lg([f("w3m-connecting-wc-unsupported")],$c);var Bg=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Rc=class extends st{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-web: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.secondaryBtnLabel="Open",this.secondaryLabel="Open and continue in a new browser tab",this.secondaryBtnIcon="externalLink",R.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"web"}})}onConnectProxy(){var e;if((e=this.wallet)!=null&&e.webapp_link&&this.uri)try{this.error=!1;const{webapp_link:t,name:r}=this.wallet,{redirect:o,href:n}=k.formatUniversalUrl(t,this.uri);G.setWcLinking({name:r,href:n}),G.setRecentWallet(this.wallet),k.openHref(o,"_blank")}catch{this.error=!0}}};Rc=Bg([f("w3m-connecting-wc-web")],Rc);const zg=b`
  :host {
    width: 100%;
  }

  .details-container > wui-flex {
    background: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xxs);
    width: 100%;
  }

  .details-container > wui-flex > button {
    border: none;
    background: none;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    cursor: pointer;
  }

  .details-content-container {
    padding: var(--wui-spacing-1xs);
    padding-top: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .details-content-container > wui-flex {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: var(--wui-spacing-s);
    padding-left: var(--wui-spacing-s);
    padding-right: var(--wui-spacing-1xs);
    border-radius: calc(var(--wui-border-radius-5xs) + var(--wui-border-radius-4xs));
    background: var(--wui-color-gray-glass-002);
  }

  .details-row-title {
    white-space: nowrap;
  }

  .details-row.provider-free-row {
    padding-right: var(--wui-spacing-xs);
  }
`;var wt=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};const Vg=Ue.CONVERT_SLIPPAGE_TOLERANCE;let Qe=class extends w{constructor(){var e;super(),this.unsubscribe=[],this.networkName=(e=T.state.caipNetwork)==null?void 0:e.name,this.detailsOpen=!1,this.sourceToken=E.state.sourceToken,this.toToken=E.state.toToken,this.toTokenAmount=E.state.toTokenAmount,this.sourceTokenPriceInUSD=E.state.sourceTokenPriceInUSD,this.toTokenPriceInUSD=E.state.toTokenPriceInUSD,this.gasPriceInUSD=E.state.gasPriceInUSD,this.priceImpact=E.state.priceImpact,this.maxSlippage=E.state.maxSlippage,this.networkTokenSymbol=E.state.networkTokenSymbol,this.inputError=E.state.inputError,this.unsubscribe.push(E.subscribe(t=>{this.sourceToken=t.sourceToken,this.toToken=t.toToken,this.toTokenAmount=t.toTokenAmount,this.gasPriceInUSD=t.gasPriceInUSD,this.priceImpact=t.priceImpact,this.maxSlippage=t.maxSlippage,this.sourceTokenPriceInUSD=t.sourceTokenPriceInUSD,this.toTokenPriceInUSD=t.toTokenPriceInUSD,this.inputError=t.inputError}))}render(){const e=this.toTokenAmount&&this.maxSlippage?ue.bigNumber(this.toTokenAmount).minus(this.maxSlippage).toString():null;if(!this.sourceToken||!this.toToken||this.inputError)return null;const t=this.sourceTokenPriceInUSD&&this.toTokenPriceInUSD?1/this.toTokenPriceInUSD*this.sourceTokenPriceInUSD:0;return l`
      <wui-flex flexDirection="column" alignItems="center" gap="1xs" class="details-container">
        <wui-flex flexDirection="column">
          <button @click=${this.toggleDetails.bind(this)}>
            <wui-flex justifyContent="space-between" .padding=${["0","xs","0","xs"]}>
              <wui-flex justifyContent="flex-start" flexGrow="1" gap="xs">
                <wui-text variant="small-400" color="fg-100">
                  1 ${this.sourceToken.symbol} =
                  ${H.formatNumberToLocalString(t,3)}
                  ${this.toToken.symbol}
                </wui-text>
                <wui-text variant="small-400" color="fg-200">
                  $${H.formatNumberToLocalString(this.sourceTokenPriceInUSD)}
                </wui-text>
              </wui-flex>
              <wui-icon name="chevronBottom"></wui-icon>
            </wui-flex>
          </button>
          ${this.detailsOpen?l`
                <wui-flex flexDirection="column" gap="xs" class="details-content-container">
                  <wui-flex flexDirection="column" gap="xs">
                    <wui-flex
                      justifyContent="space-between"
                      alignItems="center"
                      class="details-row"
                    >
                      <wui-flex alignItems="center" gap="xs">
                        <wui-text class="details-row-title" variant="small-400" color="fg-150">
                          Network cost
                        </wui-text>
                        <w3m-tooltip-trigger
                          text=${`Network cost is paid in ${this.networkTokenSymbol} on the ${this.networkName} network in order to execute transaction.`}
                        >
                          <wui-icon size="xs" color="fg-250" name="infoCircle"></wui-icon>
                        </w3m-tooltip-trigger>
                      </wui-flex>
                      <wui-text variant="small-400" color="fg-100">
                        $${H.formatNumberToLocalString(this.gasPriceInUSD,3)}
                      </wui-text>
                    </wui-flex>
                  </wui-flex>
                  ${this.priceImpact?l` <wui-flex flexDirection="column" gap="xs">
                        <wui-flex
                          justifyContent="space-between"
                          alignItems="center"
                          class="details-row"
                        >
                          <wui-flex alignItems="center" gap="xs">
                            <wui-text class="details-row-title" variant="small-400" color="fg-150">
                              Price impact
                            </wui-text>
                            <w3m-tooltip-trigger
                              text="Price impact reflects the change in market price due to your trade"
                            >
                              <wui-icon size="xs" color="fg-250" name="infoCircle"></wui-icon>
                            </w3m-tooltip-trigger>
                          </wui-flex>
                          <wui-flex>
                            <wui-text variant="small-400" color="fg-200">
                              ${H.formatNumberToLocalString(this.priceImpact,3)}%
                            </wui-text>
                          </wui-flex>
                        </wui-flex>
                      </wui-flex>`:null}
                  ${this.maxSlippage&&this.sourceToken.symbol?l`<wui-flex flexDirection="column" gap="xs">
                        <wui-flex
                          justifyContent="space-between"
                          alignItems="center"
                          class="details-row"
                        >
                          <wui-flex alignItems="center" gap="xs">
                            <wui-text class="details-row-title" variant="small-400" color="fg-150">
                              Max. slippage
                            </wui-text>
                            <w3m-tooltip-trigger
                              text=${`Max slippage sets the minimum amount you must receive for the transaction to proceed. ${e?`Transaction will be reversed if you receive less than ${H.formatNumberToLocalString(e,6)} ${this.toToken.symbol} due to price changes.`:""}`}
                            >
                              <wui-icon size="xs" color="fg-250" name="infoCircle"></wui-icon>
                            </w3m-tooltip-trigger>
                          </wui-flex>
                          <wui-flex>
                            <wui-text variant="small-400" color="fg-200">
                              ${H.formatNumberToLocalString(this.maxSlippage,6)}
                              ${this.toToken.symbol} ${Vg}%
                            </wui-text>
                          </wui-flex>
                        </wui-flex>
                      </wui-flex>`:null}
                  <wui-flex flexDirection="column" gap="xs">
                    <wui-flex
                      justifyContent="space-between"
                      alignItems="center"
                      class="details-row provider-free-row"
                    >
                      <wui-flex alignItems="center" gap="xs">
                        <wui-text class="details-row-title" variant="small-400" color="fg-150">
                          Provider fee
                        </wui-text>
                      </wui-flex>
                      <wui-flex>
                        <wui-text variant="small-400" color="fg-200">0.85%</wui-text>
                      </wui-flex>
                    </wui-flex>
                  </wui-flex>
                </wui-flex>
              `:null}
        </wui-flex>
      </wui-flex>
    `}toggleDetails(){this.detailsOpen=!this.detailsOpen}};Qe.styles=[zg];wt([d()],Qe.prototype,"networkName",void 0);wt([c()],Qe.prototype,"detailsOpen",void 0);wt([d()],Qe.prototype,"sourceToken",void 0);wt([d()],Qe.prototype,"toToken",void 0);wt([d()],Qe.prototype,"toTokenAmount",void 0);wt([d()],Qe.prototype,"sourceTokenPriceInUSD",void 0);wt([d()],Qe.prototype,"toTokenPriceInUSD",void 0);wt([d()],Qe.prototype,"gasPriceInUSD",void 0);wt([d()],Qe.prototype,"priceImpact",void 0);wt([d()],Qe.prototype,"maxSlippage",void 0);wt([d()],Qe.prototype,"networkTokenSymbol",void 0);wt([d()],Qe.prototype,"inputError",void 0);Qe=wt([f("w3m-swap-details")],Qe);const Hg=b`
  :host > wui-flex {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: var(--wui-border-radius-s);
    background-color: var(--wui-color-gray-glass-002);
    padding: var(--wui-spacing-xl);
    padding-right: var(--wui-spacing-s);
    width: 100%;
    height: 100px;
    box-sizing: border-box;
    box-shadow: inset 0px 0px 0px 1px var(--wui-color-gray-glass-002);
    position: relative;
    transition: box-shadow var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color;
  }

  :host wui-flex.focus {
    box-shadow: inset 0px 0px 0px 1px var(--wui-color-gray-glass-005);
  }

  :host > wui-flex .swap-input,
  :host > wui-flex .swap-token-button {
    z-index: 10;
  }

  :host > wui-flex .swap-input {
    -webkit-mask-image: linear-gradient(
      270deg,
      transparent 0px,
      transparent 8px,
      black 24px,
      black 25px,
      black 32px,
      black 100%
    );
    mask-image: linear-gradient(
      270deg,
      transparent 0px,
      transparent 8px,
      black 24px,
      black 25px,
      black 32px,
      black 100%
    );
  }

  :host > wui-flex .swap-input input {
    background: none;
    border: none;
    height: 42px;
    width: 100%;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    letter-spacing: -1.28px;
    outline: none;
    caret-color: var(--wui-color-accent-100);
    color: var(--wui-color-fg-100);
    padding: 0px;
  }

  :host > wui-flex .swap-input input:focus-visible {
    outline: none;
  }

  :host > wui-flex .swap-input input::-webkit-outer-spin-button,
  :host > wui-flex .swap-input input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .max-value-button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: var(--wui-color-gray-glass-020);
    padding-left: 0px;
  }

  .market-value {
    min-height: 18px;
  }
`;var Vt=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};const Fg=5e-5;let ht=class extends w{constructor(){super(...arguments),this.focused=!1,this.price=0,this.target="sourceToken",this.onSetAmount=null,this.onSetMaxValue=null}render(){const e=this.marketValue||"0",t=ue.bigNumber(e).isGreaterThan("0");return l`
      <wui-flex class="${this.focused?"focus":""}" justifyContent="space-between">
        <wui-flex
          flex="1"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="center"
          class="swap-input"
        >
          <input
            data-testid="swap-input-${this.target}"
            @focusin=${()=>this.onFocusChange(!0)}
            @focusout=${()=>this.onFocusChange(!1)}
            ?disabled=${this.disabled}
            .value=${this.value}
            @input=${this.dispatchInputChangeEvent}
            @keydown=${this.handleKeydown}
            placeholder="0"
            type="text"
            inputmode="decimal"
          />
          <wui-text class="market-value" variant="small-400" color="fg-200">
            ${t?`$${H.formatNumberToLocalString(this.marketValue,3)}`:null}
          </wui-text>
        </wui-flex>
        ${this.templateTokenSelectButton()}
      </wui-flex>
    `}handleKeydown(e){return sd.numericInputKeyDown(e,this.value,t=>{var r;return(r=this.onSetAmount)==null?void 0:r.call(this,this.target,t)})}dispatchInputChangeEvent(e){if(!this.onSetAmount)return;const t=e.target.value.replace(/[^0-9.]/gu,"");t===","||t==="."?this.onSetAmount(this.target,"0."):t.endsWith(",")?this.onSetAmount(this.target,t.replace(",",".")):this.onSetAmount(this.target,t)}setMaxValueToInput(){var e;(e=this.onSetMaxValue)==null||e.call(this,this.target,this.balance)}templateTokenSelectButton(){return this.token?l`
      <wui-flex
        class="swap-token-button"
        flexDirection="column"
        alignItems="flex-end"
        justifyContent="center"
        gap="xxs"
      >
        <wui-token-button
          data-testid="swap-input-token-${this.target}"
          text=${this.token.symbol}
          imageSrc=${this.token.logoUri}
          @click=${this.onSelectToken.bind(this)}
        >
        </wui-token-button>
        <wui-flex alignItems="center" gap="xxs"> ${this.tokenBalanceTemplate()} </wui-flex>
      </wui-flex>
    `:l` <wui-button
        data-testid="swap-select-token-button-${this.target}"
        class="swap-token-button"
        size="md"
        variant="accent"
        @click=${this.onSelectToken.bind(this)}
      >
        Select token
      </wui-button>`}tokenBalanceTemplate(){const e=ue.multiply(this.balance,this.price),t=e?e==null?void 0:e.isGreaterThan(Fg):!1;return l`
      ${t?l`<wui-text variant="small-400" color="fg-200">
            ${H.formatNumberToLocalString(this.balance,3)}
          </wui-text>`:null}
      ${this.target==="sourceToken"?this.tokenActionButtonTemplate(t):null}
    `}tokenActionButtonTemplate(e){return e?l` <button class="max-value-button" @click=${this.setMaxValueToInput.bind(this)}>
        <wui-text color="accent-100" variant="small-600">Max</wui-text>
      </button>`:l` <button class="max-value-button" @click=${this.onBuyToken.bind(this)}>
      <wui-text color="accent-100" variant="small-600">Buy</wui-text>
    </button>`}onFocusChange(e){this.focused=e}onSelectToken(){R.sendEvent({type:"track",event:"CLICK_SELECT_TOKEN_TO_SWAP"}),g.push("SwapSelectToken",{target:this.target})}onBuyToken(){g.push("OnRampProviders")}};ht.styles=[Hg];Vt([c()],ht.prototype,"focused",void 0);Vt([c()],ht.prototype,"balance",void 0);Vt([c()],ht.prototype,"value",void 0);Vt([c()],ht.prototype,"price",void 0);Vt([c()],ht.prototype,"marketValue",void 0);Vt([c()],ht.prototype,"disabled",void 0);Vt([c()],ht.prototype,"target",void 0);Vt([c()],ht.prototype,"token",void 0);Vt([c()],ht.prototype,"onSetAmount",void 0);Vt([c()],ht.prototype,"onSetMaxValue",void 0);ht=Vt([f("w3m-swap-input")],ht);const Zg=b`
  :host {
    width: 100%;
  }

  :host > wui-flex {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: var(--wui-border-radius-s);
    padding: var(--wui-spacing-xl);
    padding-right: var(--wui-spacing-s);
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0px 0px 0px 1px var(--wui-color-gray-glass-002);
    width: 100%;
    height: 100px;
    box-sizing: border-box;
    position: relative;
  }

  wui-shimmer.market-value {
    opacity: 0;
  }

  :host > wui-flex > svg.input_mask {
    position: absolute;
    inset: 0;
    z-index: 5;
  }

  :host wui-flex .input_mask__border,
  :host wui-flex .input_mask__background {
    transition: fill var(--wui-duration-md) var(--wui-ease-out-power-1);
    will-change: fill;
  }

  :host wui-flex .input_mask__border {
    fill: var(--wui-color-gray-glass-020);
  }

  :host wui-flex .input_mask__background {
    fill: var(--wui-color-gray-glass-002);
  }
`;var Nu=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Da=class extends w{constructor(){super(...arguments),this.target="sourceToken"}render(){return l`
      <wui-flex class justifyContent="space-between">
        <wui-flex
          flex="1"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="center"
          class="swap-input"
          gap="xxs"
        >
          <wui-shimmer width="80px" height="40px" borderRadius="xxs" variant="light"></wui-shimmer>
        </wui-flex>
        ${this.templateTokenSelectButton()}
      </wui-flex>
    `}templateTokenSelectButton(){return l`
      <wui-flex
        class="swap-token-button"
        flexDirection="column"
        alignItems="flex-end"
        justifyContent="center"
        gap="xxs"
      >
        <wui-shimmer width="80px" height="40px" borderRadius="3xl" variant="light"></wui-shimmer>
      </wui-flex>
    `}};Da.styles=[Zg];Nu([c()],Da.prototype,"target",void 0);Da=Nu([f("w3m-swap-input-skeleton")],Da);const Gg=b`
  :host {
    height: 64px;
  }

  wui-text {
    text-transform: capitalize;
  }

  wui-flex.w3m-header-title {
    transform: translateY(0);
    opacity: 1;
  }

  wui-flex.w3m-header-title[view-direction='prev'] {
    animation:
      slide-down-out 120ms forwards var(--wui-ease-out-power-2),
      slide-down-in 120ms forwards var(--wui-ease-out-power-2);
    animation-delay: 0ms, 200ms;
  }

  wui-flex.w3m-header-title[view-direction='next'] {
    animation:
      slide-up-out 120ms forwards var(--wui-ease-out-power-2),
      slide-up-in 120ms forwards var(--wui-ease-out-power-2);
    animation-delay: 0ms, 200ms;
  }

  wui-icon-link[data-hidden='true'] {
    opacity: 0 !important;
    pointer-events: none;
  }

  @keyframes slide-up-out {
    from {
      transform: translateY(0px);
      opacity: 1;
    }
    to {
      transform: translateY(3px);
      opacity: 0;
    }
  }

  @keyframes slide-up-in {
    from {
      transform: translateY(-3px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes slide-down-out {
    from {
      transform: translateY(0px);
      opacity: 1;
    }
    to {
      transform: translateY(-3px);
      opacity: 0;
    }
  }

  @keyframes slide-down-in {
    from {
      transform: translateY(3px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;var Ri=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};const qg=["Swap","SwapSelectToken","SwapPreview"];function Ss(){var a,s,p,h,x,_,D;const i=(s=(a=g.state.data)==null?void 0:a.connector)==null?void 0:s.name,e=(h=(p=g.state.data)==null?void 0:p.wallet)==null?void 0:h.name,t=(_=(x=g.state.data)==null?void 0:x.network)==null?void 0:_.name,r=e??i,o=P.getConnectors();return{Connect:`Connect ${o.length===1&&((D=o[0])==null?void 0:D.id)==="w3m-email"?"Email":""} Wallet`,ChooseAccountName:void 0,Account:void 0,AccountSettings:void 0,AllWallets:"All Wallets",ApproveTransaction:"Approve Transaction",BuyInProgress:"Buy",ConnectingExternal:r??"Connect Wallet",ConnectingWalletConnect:r??"WalletConnect",ConnectingSiwe:"Sign In",Convert:"Convert",ConvertSelectToken:"Select token",ConvertPreview:"Preview convert",Downloads:r?`Get ${r}`:"Downloads",EmailVerifyOtp:"Confirm Email",EmailVerifyDevice:"Register Device",GetWallet:"Get a wallet",Networks:"Choose Network",OnRampProviders:"Choose Provider",OnRampActivity:"Activity",OnRampTokenSelect:"Select Token",OnRampFiatSelect:"Select Currency",Profile:void 0,SelectAddresses:"Select accounts",SwitchNetwork:t??"Switch Network",SwitchAddress:"Switch Address",Transactions:"Activity",UnsupportedChain:"Switch Network",UpgradeEmailWallet:"Upgrade your Wallet",UpgradeToSmartAccount:void 0,UpdateEmailWallet:"Edit Email",UpdateEmailPrimaryOtp:"Confirm Current Email",UpdateEmailSecondaryOtp:"Confirm New Email",WhatIsABuy:"What is Buy?",RegisterAccountName:"Choose name",RegisterAccountNameSuccess:"",WalletReceive:"Receive",WalletCompatibleNetworks:"Compatible Networks",Swap:"Swap",SwapSelectToken:"Select token",SwapPreview:"Preview swap",WalletSend:"Send",WalletSendPreview:"Review send",WalletSendSelectToken:"Select Token",WhatIsANetwork:"What is a network?",WhatIsAWallet:"What is a wallet?",ConnectWallets:"Connect wallet",ConnectSocials:"All socials",ConnectingSocial:m.state.socialProvider?m.state.socialProvider:"Connect Social",ConnectingFarcaster:"Farcaster"}}let jt=class extends w{constructor(){super(),this.unsubscribe=[],this.heading=Ss()[g.state.view],this.buffering=!1,this.showBack=!1,this.isSiweEnabled=A.state.isSiweEnabled,this.prevHistoryLength=1,this.view=g.state.view,this.viewDirection="",this.headerText=Ss()[g.state.view],this.unsubscribe.push(g.subscribeKey("view",e=>{setTimeout(()=>{this.view=e,this.headerText=Ss()[e]},hi.ANIMATION_DURATIONS.HeaderText),this.onViewChange(),this.onHistoryChange()}),G.subscribeKey("buffering",e=>this.buffering=e))}disconnectCallback(){this.unsubscribe.forEach(e=>e())}render(){return l`
      <wui-flex .padding=${this.getPadding()} justifyContent="space-between" alignItems="center">
        ${this.dynamicButtonTemplate()} ${this.titleTemplate()} ${this.closeButtonTemplate()}
      </wui-flex>
    `}onWalletHelp(){R.sendEvent({type:"track",event:"CLICK_WALLET_HELP"}),g.push("WhatIsAWallet")}async onClose(){if(this.isSiweEnabled){const{SIWEController:e}=await nr(async()=>{const{SIWEController:t}=await import("./index-DkkgsBGE.js");return{SIWEController:t}},__vite__mapDeps([0,1,2,3]),import.meta.url);e.state.status==="success"?q.close():g.popTransactionStack(!0)}else q.close()}closeButtonTemplate(){const e=g.state.view==="ConnectingSiwe";return this.isSiweEnabled&&e?l`<div style="width:40px" />`:l`
      <wui-icon-link
        ?disabled=${this.buffering}
        icon="close"
        @click=${this.onClose.bind(this)}
        data-testid="w3m-header-close"
      ></wui-icon-link>
    `}titleTemplate(){const e=qg.includes(this.view);return l`
      <wui-flex
        view-direction="${this.viewDirection}"
        class="w3m-header-title"
        alignItems="center"
        gap="xs"
      >
        <wui-text variant="paragraph-700" color="fg-100">${this.headerText}</wui-text>
        ${e?l`<wui-tag variant="main">Beta</wui-tag>`:null}
      </wui-flex>
    `}dynamicButtonTemplate(){const{view:e}=g.state,t=e==="Connect",a=e==="ApproveTransaction"||e==="UpgradeToSmartAccount"||e==="ConnectingSiwe";return this.showBack&&!a?l`<wui-icon-link
        id="dynamic"
        icon="chevronLeft"
        ?disabled=${this.buffering}
        @click=${this.onGoBack.bind(this)}
      ></wui-icon-link>`:l`<wui-icon-link
      data-hidden=${!t}
      id="dynamic"
      icon="helpCircle"
      @click=${this.onWalletHelp.bind(this)}
    ></wui-icon-link>`}getPadding(){return this.heading?["l","2l","l","2l"]:["0","2l","0","2l"]}onViewChange(){const{history:e}=g.state;let t=hi.VIEW_DIRECTION.Next;e.length<this.prevHistoryLength&&(t=hi.VIEW_DIRECTION.Prev),this.prevHistoryLength=e.length,this.viewDirection=t}async onHistoryChange(){var r;const{history:e}=g.state,t=(r=this.shadowRoot)==null?void 0:r.querySelector("#dynamic");e.length>1&&!this.showBack&&t?(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!0,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})):e.length<=1&&this.showBack&&t&&(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!1,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}onGoBack(){g.goBack()}};jt.styles=[Gg];Ri([d()],jt.prototype,"heading",void 0);Ri([d()],jt.prototype,"buffering",void 0);Ri([d()],jt.prototype,"showBack",void 0);Ri([d()],jt.prototype,"isSiweEnabled",void 0);Ri([d()],jt.prototype,"prevHistoryLength",void 0);Ri([d()],jt.prototype,"view",void 0);Ri([d()],jt.prototype,"viewDirection",void 0);Ri([d()],jt.prototype,"headerText",void 0);jt=Ri([f("w3m-header")],jt);var Pu=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Gs=class extends w{constructor(){super(...arguments),this.data=[]}render(){return l`
      <wui-flex flexDirection="column" alignItems="center" gap="l">
        ${this.data.map(e=>l`
            <wui-flex flexDirection="column" alignItems="center" gap="xl">
              <wui-flex flexDirection="row" justifyContent="center" gap="1xs">
                ${e.images.map(t=>l`<wui-visual name=${t}></wui-visual>`)}
              </wui-flex>
            </wui-flex>
            <wui-flex flexDirection="column" alignItems="center" gap="xxs">
              <wui-text variant="paragraph-500" color="fg-100" align="center">
                ${e.title}
              </wui-text>
              <wui-text variant="small-500" color="fg-200" align="center">${e.text}</wui-text>
            </wui-flex>
          `)}
      </wui-flex>
    `}};Pu([c({type:Array})],Gs.prototype,"data",void 0);Gs=Pu([f("w3m-help-widget")],Gs);const Yg=b`
  :host {
    width: 100%;
  }

  :host > wui-flex {
    width: 100%;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xs);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: var(--wui-spacing-s);
  }

  :host > wui-flex:hover {
    background-color: var(--wui-color-gray-glass-002);
  }

  .purchase-image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: var(--wui-icon-box-size-lg);
    height: var(--wui-icon-box-size-lg);
  }

  .purchase-image-container wui-image {
    width: 100%;
    height: 100%;
    position: relative;
    border-radius: calc(var(--wui-icon-box-size-lg) / 2);
  }

  .purchase-image-container wui-image::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(var(--wui-icon-box-size-lg) / 2);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  .purchase-image-container wui-icon-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
  }
`;var gt=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Je=class extends w{constructor(){super(...arguments),this.disabled=!1,this.color="inherit",this.label="Bought",this.purchaseValue="",this.purchaseCurrency="",this.date="",this.completed=!1,this.inProgress=!1,this.failed=!1,this.onClick=null,this.symbol=""}firstUpdated(){this.icon||this.fetchTokenImage()}render(){return l`
      <wui-flex>
        ${this.imageTemplate()}
        <wui-flex flexDirection="column" gap="4xs" flexGrow="1">
          <wui-flex gap="xxs" alignItems="center" justifyContent="flex-start">
            ${this.statusIconTemplate()}
            <wui-text variant="paragraph-500" color="fg-100"> ${this.label}</wui-text>
          </wui-flex>
          <wui-text variant="small-400" color="fg-200">
            + ${this.purchaseValue} ${this.purchaseCurrency}
          </wui-text>
        </wui-flex>
        ${this.inProgress?l`<wui-loading-spinner color="fg-200" size="md"></wui-loading-spinner>`:l`<wui-text variant="micro-700" color="fg-300"><span>${this.date}</span></wui-text>`}
      </wui-flex>
    `}async fetchTokenImage(){await V._fetchTokenImage(this.purchaseCurrency)}statusIconTemplate(){return this.inProgress?null:this.completed?this.boughtIconTemplate():this.errorIconTemplate()}errorIconTemplate(){return l`<wui-icon-box
      size="xxs"
      iconColor="error-100"
      backgroundColor="error-100"
      background="opaque"
      icon="close"
      borderColor="wui-color-bg-125"
    ></wui-icon-box>`}imageTemplate(){const e=this.icon||`https://avatar.vercel.sh/andrew.svg?size=50&text=${this.symbol}`;return l`<wui-flex class="purchase-image-container">
      <wui-image src=${e}></wui-image>
    </wui-flex>`}boughtIconTemplate(){return l`<wui-icon-box
      size="xxs"
      iconColor="success-100"
      backgroundColor="success-100"
      background="opaque"
      icon="arrowBottom"
      borderColor="wui-color-bg-125"
    ></wui-icon-box>`}};Je.styles=[Yg];gt([c({type:Boolean})],Je.prototype,"disabled",void 0);gt([c()],Je.prototype,"color",void 0);gt([c()],Je.prototype,"label",void 0);gt([c()],Je.prototype,"purchaseValue",void 0);gt([c()],Je.prototype,"purchaseCurrency",void 0);gt([c()],Je.prototype,"date",void 0);gt([c({type:Boolean})],Je.prototype,"completed",void 0);gt([c({type:Boolean})],Je.prototype,"inProgress",void 0);gt([c({type:Boolean})],Je.prototype,"failed",void 0);gt([c()],Je.prototype,"onClick",void 0);gt([c()],Je.prototype,"symbol",void 0);gt([c()],Je.prototype,"icon",void 0);Je=gt([f("w3m-onramp-activity-item")],Je);const Kg=b`
  :host {
    width: 100%;
  }

  wui-loading-spinner {
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
  }

  .currency-container {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: var(--wui-spacing-1xs);
    height: 40px;
    padding: var(--wui-spacing-xs) var(--wui-spacing-1xs) var(--wui-spacing-xs)
      var(--wui-spacing-xs);
    min-width: 95px;
    border-radius: var(--FULL, 1000px);
    border: 1px solid var(--wui-color-gray-glass-002);
    background: var(--wui-color-gray-glass-002);
    cursor: pointer;
  }

  .currency-container > wui-image {
    height: 24px;
    width: 24px;
    border-radius: 50%;
  }
`;var Kn=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Si=class extends w{constructor(){var e;super(),this.unsubscribe=[],this.type="Token",this.value=0,this.currencies=[],this.selectedCurrency=(e=this.currencies)==null?void 0:e[0],this.currencyImages=Me.state.currencyImages,this.tokenImages=Me.state.tokenImages,this.unsubscribe.push(he.subscribeKey("purchaseCurrency",t=>{!t||this.type==="Fiat"||(this.selectedCurrency=this.formatPurchaseCurrency(t))}),he.subscribeKey("paymentCurrency",t=>{!t||this.type==="Token"||(this.selectedCurrency=this.formatPaymentCurrency(t))}),he.subscribe(t=>{this.type==="Fiat"?this.currencies=t.purchaseCurrencies.map(this.formatPurchaseCurrency):this.currencies=t.paymentCurrencies.map(this.formatPaymentCurrency)}),Me.subscribe(t=>{this.currencyImages={...t.currencyImages},this.tokenImages={...t.tokenImages}}))}firstUpdated(){he.getAvailableCurrencies()}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){var r;const e=((r=this.selectedCurrency)==null?void 0:r.symbol)||"",t=this.currencyImages[e]||this.tokenImages[e];return l`<wui-input-text type="number" size="lg" value=${this.value}>
      ${this.selectedCurrency?l` <wui-flex
            class="currency-container"
            justifyContent="space-between"
            alignItems="center"
            gap="xxs"
            @click=${()=>q.open({view:`OnRamp${this.type}Select`})}
          >
            <wui-image src=${$(t)}></wui-image>
            <wui-text color="fg-100">${this.selectedCurrency.symbol}</wui-text>
          </wui-flex>`:l`<wui-loading-spinner></wui-loading-spinner>`}
    </wui-input-text>`}formatPaymentCurrency(e){return{name:e.id,symbol:e.id}}formatPurchaseCurrency(e){return{name:e.name,symbol:e.symbol}}};Si.styles=Kg;Kn([c({type:String})],Si.prototype,"type",void 0);Kn([c({type:Number})],Si.prototype,"value",void 0);Kn([d()],Si.prototype,"currencies",void 0);Kn([d()],Si.prototype,"selectedCurrency",void 0);Kn([d()],Si.prototype,"currencyImages",void 0);Kn([d()],Si.prototype,"tokenImages",void 0);Si=Kn([f("w3m-onramp-input")],Si);const Xg=b`
  button {
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xs);
    border: none;
    outline: none;
    background-color: var(--wui-color-gray-glass-002);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: var(--wui-spacing-s);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-005);
  }

  .provider-image {
    width: var(--wui-spacing-3xl);
    min-width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    border-radius: calc(var(--wui-border-radius-xs) - calc(var(--wui-spacing-s) / 2));
    position: relative;
    overflow: hidden;
  }

  .provider-image::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(var(--wui-border-radius-xs) - calc(var(--wui-spacing-s) / 2));
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  .network-icon {
    width: var(--wui-spacing-m);
    height: var(--wui-spacing-m);
    border-radius: calc(var(--wui-spacing-m) / 2);
    overflow: hidden;
    box-shadow:
      0 0 0 3px var(--wui-color-gray-glass-002),
      0 0 0 3px var(--wui-color-modal-bg);
    transition: box-shadow var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: box-shadow;
  }

  button:hover .network-icon {
    box-shadow:
      0 0 0 3px var(--wui-color-gray-glass-005),
      0 0 0 3px var(--wui-color-modal-bg);
  }
`;var rn=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let ii=class extends w{constructor(){super(...arguments),this.disabled=!1,this.color="inherit",this.label="",this.feeRange="",this.loading=!1,this.onClick=null}render(){return l`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-visual name=${$(this.name)} class="provider-image"></wui-visual>
        <wui-flex flexDirection="column" gap="4xs">
          <wui-text variant="paragraph-500" color="fg-100">${this.label}</wui-text>
          <wui-flex alignItems="center" justifyContent="flex-start" gap="l">
            <wui-text variant="tiny-500" color="fg-100">
              <wui-text variant="tiny-400" color="fg-200">Fees</wui-text>
              ${this.feeRange}
            </wui-text>
            <wui-flex gap="xxs">
              <wui-icon name="bank" size="xs" color="fg-150"></wui-icon>
              <wui-icon name="card" size="xs" color="fg-150"></wui-icon>
            </wui-flex>
            ${this.networksTemplate()}
          </wui-flex>
        </wui-flex>
        ${this.loading?l`<wui-loading-spinner color="fg-200" size="md"></wui-loading-spinner>`:l`<wui-icon name="chevronRight" color="fg-200" size="sm"></wui-icon>`}
      </button>
    `}networksTemplate(){var r;const e=T.getRequestedCaipNetworks(),t=(r=e==null?void 0:e.filter(o=>o==null?void 0:o.imageId))==null?void 0:r.slice(0,5);return l`
      <wui-flex class="networks">
        ${t==null?void 0:t.map(o=>l`
            <wui-flex class="network-icon">
              <wui-image src=${$(we.getNetworkImage(o))}></wui-image>
            </wui-flex>
          `)}
      </wui-flex>
    `}};ii.styles=[Xg];rn([c({type:Boolean})],ii.prototype,"disabled",void 0);rn([c()],ii.prototype,"color",void 0);rn([c()],ii.prototype,"name",void 0);rn([c()],ii.prototype,"label",void 0);rn([c()],ii.prototype,"feeRange",void 0);rn([c({type:Boolean})],ii.prototype,"loading",void 0);rn([c()],ii.prototype,"onClick",void 0);ii=rn([f("w3m-onramp-provider-item")],ii);const Qg=b`
  wui-flex {
    background-color: var(--wui-color-gray-glass-005);
  }

  a {
    text-decoration: none;
    color: var(--wui-color-fg-175);
    font-weight: 500;
  }
`;var Jg=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let qs=class extends w{render(){const{termsConditionsUrl:e,privacyPolicyUrl:t}=A.state;return!e&&!t?null:l`
      <wui-flex .padding=${["m","s","s","s"]} justifyContent="center">
        <wui-text color="fg-250" variant="small-400" align="center">
          By connecting your wallet, you agree to our <br />
          ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
        </wui-text>
      </wui-flex>
    `}andTemplate(){const{termsConditionsUrl:e,privacyPolicyUrl:t}=A.state;return e&&t?"and":""}termsTemplate(){const{termsConditionsUrl:e}=A.state;return e?l`<a href=${e}>Terms of Service</a>`:null}privacyTemplate(){const{privacyPolicyUrl:e}=A.state;return e?l`<a href=${e}>Privacy Policy</a>`:null}};qs.styles=[Qg];qs=Jg([f("w3m-legal-footer")],qs);const em=b`
  :host {
    display: block;
    padding: 0 var(--wui-spacing-xl) var(--wui-spacing-xl);
  }
`;var Du=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Ua=class extends w{constructor(){super(...arguments),this.wallet=void 0}render(){if(!this.wallet)return this.style.display="none",null;const{name:e,app_store:t,play_store:r,chrome_store:o,homepage:n}=this.wallet,a=k.isMobile(),s=k.isIos(),p=k.isAndroid(),h=[t,r,n,o].filter(Boolean).length>1,x=H.getTruncateString({string:e,charsStart:12,charsEnd:0,truncate:"end"});return h&&!a?l`
        <wui-cta-button
          label=${`Don't have ${x}?`}
          buttonLabel="Get"
          @click=${()=>g.push("Downloads",{wallet:this.wallet})}
        ></wui-cta-button>
      `:!h&&n?l`
        <wui-cta-button
          label=${`Don't have ${x}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `:t&&s?l`
        <wui-cta-button
          label=${`Don't have ${x}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `:r&&p?l`
        <wui-cta-button
          label=${`Don't have ${x}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `:(this.style.display="none",null)}onAppStore(){var e;(e=this.wallet)!=null&&e.app_store&&k.openHref(this.wallet.app_store,"_blank")}onPlayStore(){var e;(e=this.wallet)!=null&&e.play_store&&k.openHref(this.wallet.play_store,"_blank")}onHomePage(){var e;(e=this.wallet)!=null&&e.homepage&&k.openHref(this.wallet.homepage,"_blank")}};Ua.styles=[em];Du([c({type:Object})],Ua.prototype,"wallet",void 0);Ua=Du([f("w3m-mobile-download-links")],Ua);const tm=b`
  wui-flex {
    border-top: 1px solid var(--wui-color-gray-glass-005);
  }

  a {
    text-decoration: none;
    color: var(--wui-color-fg-175);
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-3xs);
  }
`;var im=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Ys=class extends w{render(){const{termsConditionsUrl:e,privacyPolicyUrl:t}=A.state;return!e&&!t?null:l`
      <wui-flex
        .padding=${["m","s","s","s"]}
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="s"
      >
        <wui-text color="fg-250" variant="small-400" align="center">
          We work with the best providers to give you the lowest fees and best support. More options
          coming soon!
        </wui-text>

        ${this.howDoesItWorkTemplate()}
      </wui-flex>
    `}howDoesItWorkTemplate(){return l` <wui-link @click=${this.onWhatIsBuy.bind(this)}>
      <wui-icon size="xs" color="accent-100" slot="iconLeft" name="helpCircle"></wui-icon>
      How does it work?
    </wui-link>`}onWhatIsBuy(){R.sendEvent({type:"track",event:"SELECT_WHAT_IS_A_BUY",properties:{isSmartAccount:m.state.preferredAccountType===ae.ACCOUNT_TYPES.SMART_ACCOUNT}}),g.push("WhatIsABuy")}};Ys.styles=[tm];Ys=im([f("w3m-onramp-providers-footer")],Ys);const nm=b`
  :host {
    display: block;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 11px;
    left: 50%;
    width: max-content;
  }
`;var Uu=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};const rm={loading:void 0,success:{backgroundColor:"success-100",iconColor:"success-100",icon:"checkmark"},error:{backgroundColor:"error-100",iconColor:"error-100",icon:"close"}};let Wa=class extends w{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.open=z.state.open,this.unsubscribe.push(z.subscribeKey("open",e=>{this.open=e,this.onOpen()}))}disconnectedCallback(){clearTimeout(this.timeout),this.unsubscribe.forEach(e=>e())}render(){const{message:e,variant:t}=z.state,r=rm[t];return l`
      <wui-snackbar
        message=${e}
        backgroundColor=${r==null?void 0:r.backgroundColor}
        iconColor=${r==null?void 0:r.iconColor}
        icon=${r==null?void 0:r.icon}
        .loading=${t==="loading"}
      ></wui-snackbar>
    `}onOpen(){clearTimeout(this.timeout),this.open?(this.animate([{opacity:0,transform:"translateX(-50%) scale(0.85)"},{opacity:1,transform:"translateX(-50%) scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.timeout=setTimeout(()=>z.hide(),2500)):this.animate([{opacity:1,transform:"translateX(-50%) scale(1)"},{opacity:0,transform:"translateX(-50%) scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"})}};Wa.styles=nm;Uu([d()],Wa.prototype,"open",void 0);Wa=Uu([f("w3m-snackbar")],Wa);const om=b`
  wui-separator {
    margin: var(--wui-spacing-s) calc(var(--wui-spacing-s) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }

  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }

  wui-icon-link,
  wui-loading-spinner {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  wui-icon-link {
    right: var(--wui-spacing-xs);
  }

  wui-loading-spinner {
    right: var(--wui-spacing-m);
  }
`;var Yo=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let jn=class extends w{constructor(){super(),this.unsubscribe=[],this.formRef=zi(),this.connectors=P.state.connectors,this.email="",this.loading=!1,this.error="",this.unsubscribe.push(P.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}firstUpdated(){var e;(e=this.formRef.value)==null||e.addEventListener("keydown",t=>{t.key==="Enter"&&this.onSubmitEmail(t)})}render(){const e=this.connectors.find(r=>r.type==="AUTH"),t=this.connectors.length>1;return e!=null&&e.email?l`
      <form ${Vi(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
        <wui-email-input
          @focus=${this.onFocusEvent.bind(this)}
          .disabled=${this.loading}
          @inputChange=${this.onEmailInputChange.bind(this)}
          .errorMessage=${this.error}
        >
        </wui-email-input>

        ${this.submitButtonTemplate()}${this.loadingTemplate()}
        <input type="submit" hidden />
      </form>

      ${e.socials||!t?null:l`<wui-flex .padding=${["xxs","0","0","0"]}>
            <wui-separator text="or"></wui-separator>
          </wui-flex>`}
    `:null}submitButtonTemplate(){return!this.loading&&this.email.length>3?l`
          <wui-icon-link
            size="sm"
            icon="chevronRight"
            iconcolor="accent-100"
            @click=${this.onSubmitEmail.bind(this)}
          >
          </wui-icon-link>
        `:null}loadingTemplate(){return this.loading?l`<wui-loading-spinner size="md" color="accent-100"></wui-loading-spinner>`:null}onEmailInputChange(e){this.email=e.detail.trim(),this.error=""}async onSubmitEmail(e){try{if(this.loading)return;this.loading=!0,e.preventDefault();const t=P.getAuthConnector();if(!t)throw new Error("w3m-email-login-widget: Auth connector not found");const{action:r}=await t.provider.connectEmail({email:this.email});R.sendEvent({type:"track",event:"EMAIL_SUBMITTED"}),r==="VERIFY_OTP"?(R.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}),g.push("EmailVerifyOtp",{email:this.email})):r==="VERIFY_DEVICE"&&g.push("EmailVerifyDevice",{email:this.email})}catch(t){const r=k.parseError(t);r!=null&&r.includes("Invalid email")?this.error="Invalid email. Try again.":z.showError(t)}finally{this.loading=!1}}onFocusEvent(){R.sendEvent({type:"track",event:"EMAIL_LOGIN_SELECTED"})}};jn.styles=om;Yo([d()],jn.prototype,"connectors",void 0);Yo([d()],jn.prototype,"email",void 0);Yo([d()],jn.prototype,"loading",void 0);Yo([d()],jn.prototype,"error",void 0);jn=Yo([f("w3m-email-login-widget")],jn);const am=b`
  wui-flex {
    width: 100%;
  }

  :host > wui-flex:first-child {
    transform: translateY(calc(var(--wui-spacing-xxs) * -1));
  }

  wui-icon-link {
    margin-right: calc(var(--wui-icon-box-size-md) * -1);
  }

  wui-notice-card {
    margin-bottom: var(--wui-spacing-3xs);
  }

  wui-list-item > wui-text {
    flex: 1;
  }

  w3m-transactions-view {
    max-height: 200px;
  }

  .tab-content-container {
    height: 300px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  .tab-content-container::-webkit-scrollbar {
    display: none;
  }

  .account-button {
    width: auto;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-s);
    height: 48px;
    padding: var(--wui-spacing-xs);
    padding-right: var(--wui-spacing-s);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: 24px;
    transition: background-color 0.2s linear;
  }

  .account-button:hover {
    background-color: var(--wui-color-gray-glass-005);
  }

  .avatar-container {
    position: relative;
  }

  wui-avatar.avatar {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  wui-avatar.network-avatar {
    width: 16px;
    height: 16px;
    position: absolute;
    left: 100%;
    top: 100%;
    transform: translate(-75%, -75%);
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  .account-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .account-links wui-flex {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    background: red;
    align-items: center;
    justify-content: center;
    height: 48px;
    padding: 10px;
    flex: 1 0 0;
    border-radius: var(--XS, 16px);
    border: 1px solid var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    background: var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    transition:
      background-color var(--wui-ease-out-power-1) var(--wui-duration-md),
      opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color, opacity;
  }

  .account-links wui-flex:hover {
    background: var(--dark-accent-glass-015, rgba(71, 161, 255, 0.15));
  }

  .account-links wui-flex wui-icon {
    width: var(--S, 20px);
    height: var(--S, 20px);
  }

  .account-links wui-flex wui-icon svg path {
    stroke: #667dff;
  }
`;var on=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let ni=class extends w{constructor(){super(),this.unsubscribe=[],this.address=m.state.address,this.profileImage=m.state.profileImage,this.profileName=m.state.profileName,this.network=T.state.caipNetwork,this.disconnecting=!1,this.balance=m.state.balance,this.balanceSymbol=m.state.balanceSymbol,this.unsubscribe.push(m.subscribe(e=>{e.address?(this.address=e.address,this.profileImage=e.profileImage,this.profileName=e.profileName,this.balance=e.balance,this.balanceSymbol=e.balanceSymbol):this.disconnecting||z.showError("Account not found")}),T.subscribeKey("caipNetwork",e=>{e!=null&&e.id&&(this.network=e)}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){var t;if(!this.address)throw new Error("w3m-account-view: No account provided");const e=we.getNetworkImage(this.network);return l`<wui-flex
        flexDirection="column"
        .padding=${["0","xl","m","xl"]}
        alignItems="center"
        gap="l"
      >
        ${y.state.activeChain===Ee.CHAIN.EVM?this.multiAccountTemplate():this.singleAccountTemplate()}
        <wui-flex flexDirection="column" alignItems="center">
          <wui-text variant="paragraph-500" color="fg-200">
            ${k.formatBalance(this.balance,this.balanceSymbol)}
          </wui-text>
        </wui-flex>
        ${this.explorerBtnTemplate()}
      </wui-flex>

      <wui-flex flexDirection="column" gap="xs" .padding=${["0","s","s","s"]}>
        ${this.authCardTemplate()} <w3m-account-auth-button></w3m-account-auth-button>

        <wui-list-item
          .variant=${e?"image":"icon"}
          iconVariant="overlay"
          icon="networkPlaceholder"
          imageSrc=${$(e)}
          ?chevron=${this.isAllowedNetworkSwitch()}
          @click=${this.onNetworks.bind(this)}
          data-testid="w3m-account-select-network"
        >
          <wui-text variant="paragraph-500" color="fg-100">
            ${((t=this.network)==null?void 0:t.name)??"Unknown"}
          </wui-text>
        </wui-list-item>
        ${this.onrampTemplate()} ${this.swapsTemplate()} ${this.activityTemplate()}
        <wui-list-item
          variant="icon"
          iconVariant="overlay"
          icon="disconnect"
          ?chevron=${!1}
          .loading=${this.disconnecting}
          @click=${this.onDisconnect.bind(this)}
          data-testid="disconnect-button"
        >
          <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
        </wui-list-item>
      </wui-flex>`}onrampTemplate(){const{enableOnramp:e}=A.state,t=y.state.activeChain===Ee.CHAIN.SOLANA;return!e||t?null:l`
      <wui-list-item
        data-testid="w3m-account-default-onramp-button"
        iconVariant="blue"
        icon="card"
        ?chevron=${!0}
        @click=${this.handleClickPay.bind(this)}
      >
        <wui-text variant="paragraph-500" color="fg-100">Buy crypto</wui-text>
      </wui-list-item>
    `}activityTemplate(){const e=y.state.activeChain===Ee.CHAIN.SOLANA;return l` <wui-list-item
      iconVariant="blue"
      icon="clock"
      iconSize="sm"
      ?chevron=${!e}
      ?disabled=${e}
      @click=${this.onTransactions.bind(this)}
    >
      <wui-text variant="paragraph-500" color="fg-100" ?disabled=${e}> Activity </wui-text>
      ${e?l`<wui-tag variant="main">Coming soon</wui-tag>`:""}
    </wui-list-item>`}swapsTemplate(){const{enableSwaps:e}=A.state;return e?l`
      <wui-list-item
        iconVariant="blue"
        icon="recycleHorizontal"
        ?chevron=${!0}
        @click=${this.handleClickSwap.bind(this)}
      >
        <wui-text variant="paragraph-500" color="fg-100">Swap</wui-text>
      </wui-list-item>
    `:null}authCardTemplate(){const e=oe.getConnectedConnector(),t=P.getAuthConnector(),{origin:r}=location;return!t||e!=="AUTH"||r.includes(Ue.SECURE_SITE)?null:l`
      <wui-notice-card
        @click=${this.onGoToUpgradeView.bind(this)}
        label="Upgrade your wallet"
        description="Transition to a self-custodial wallet"
        icon="wallet"
        data-testid="w3m-wallet-upgrade-card"
      ></wui-notice-card>
    `}handleSwitchAccountsView(){g.push("SwitchAddress")}handleClickPay(){g.push("OnRampProviders")}handleClickSwap(){g.push("Swap")}explorerBtnTemplate(){return m.state.addressExplorerUrl?l`
      <wui-button size="md" variant="neutral" @click=${this.onExplorer.bind(this)}>
        <wui-icon size="sm" color="inherit" slot="iconLeft" name="compass"></wui-icon>
        Block Explorer
        <wui-icon size="sm" color="inherit" slot="iconRight" name="externalLink"></wui-icon>
      </wui-button>
    `:null}singleAccountTemplate(){return l`
      <wui-avatar
        alt=${$(this.address)}
        address=${$(this.address)}
        imageSrc=${$(this.profileImage===null?void 0:this.profileImage)}
      ></wui-avatar>
      <wui-flex flexDirection="column" alignItems="center">
        <wui-flex gap="3xs" alignItems="center" justifyContent="center">
          <wui-text variant="large-600" color="fg-100">
            ${this.profileName?H.getTruncateString({string:this.profileName,charsStart:20,charsEnd:0,truncate:"end"}):H.getTruncateString({string:this.address?this.address:"",charsStart:4,charsEnd:4,truncate:"middle"})}
          </wui-text>
          <wui-icon-link
            size="md"
            icon="copy"
            iconColor="fg-200"
            @click=${this.onCopyAddress}
          ></wui-icon-link> </wui-flex
      ></wui-flex>
    `}multiAccountTemplate(){var r;if(!this.address)throw new Error("w3m-account-view: No account provided");const e=(r=m.state.allAccounts)==null?void 0:r.find(o=>o.address===this.address),t=m.state.addressLabels.get(this.address);return l`
      <wui-profile-button-v2
        .onProfileClick=${this.handleSwitchAccountsView.bind(this)}
        address=${$(this.address)}
        icon="${(e==null?void 0:e.type)===ae.ACCOUNT_TYPES.SMART_ACCOUNT&&y.state.activeChain===Ee.CHAIN.EVM?"lightbulb":"mail"}"
        avatarSrc=${$(this.profileImage?this.profileImage:void 0)}
        profileName=${$(t||this.profileName)}
        .onCopyClick=${this.onCopyAddress.bind(this)}
      ></wui-profile-button-v2>
    `}isAllowedNetworkSwitch(){const e=T.getRequestedCaipNetworks(),t=e?e.length>1:!1,r=e==null?void 0:e.find(({id:o})=>{var n;return o===((n=this.network)==null?void 0:n.id)});return t||!r}onCopyAddress(){try{this.address&&(k.copyToClopboard(this.address),z.showSuccess("Address copied"))}catch{z.showError("Failed to copy")}}onNetworks(){this.isAllowedNetworkSwitch()&&(R.sendEvent({type:"track",event:"CLICK_NETWORKS"}),g.push("Networks"))}onTransactions(){R.sendEvent({type:"track",event:"CLICK_TRANSACTIONS",properties:{isSmartAccount:m.state.preferredAccountType===ae.ACCOUNT_TYPES.SMART_ACCOUNT}}),g.push("Transactions")}async onDisconnect(){try{this.disconnecting=!0,await G.disconnect(),R.sendEvent({type:"track",event:"DISCONNECT_SUCCESS"}),q.close()}catch{R.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),z.showError("Failed to disconnect")}finally{this.disconnecting=!1}}onExplorer(){const e=m.state.addressExplorerUrl;e&&k.openHref(e,"_blank")}onGoToUpgradeView(){R.sendEvent({type:"track",event:"EMAIL_UPGRADE_FROM_MODAL"}),g.push("UpgradeEmailWallet")}};ni.styles=am;on([d()],ni.prototype,"address",void 0);on([d()],ni.prototype,"profileImage",void 0);on([d()],ni.prototype,"profileName",void 0);on([d()],ni.prototype,"network",void 0);on([d()],ni.prototype,"disconnecting",void 0);on([d()],ni.prototype,"balance",void 0);on([d()],ni.prototype,"balanceSymbol",void 0);ni=on([f("w3m-account-default-widget")],ni);const sm=b`
  wui-flex {
    width: 100%;
  }

  wui-promo {
    position: absolute;
    top: -32px;
  }

  wui-profile-button {
    margin-top: calc(-1 * var(--wui-spacing-2l));
  }

  wui-promo + wui-profile-button {
    margin-top: var(--wui-spacing-2l);
  }

  wui-tabs {
    width: 100%;
  }

  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }

  .contentContainer > .textContent {
    width: 65%;
  }
`;var ci=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};const lm=3,cm=48,um=430;let St=class extends w{constructor(){super(),this.unsubscribe=[],this.address=m.state.address,this.profileImage=m.state.profileImage,this.profileName=m.state.profileName,this.smartAccountDeployed=m.state.smartAccountDeployed,this.network=T.state.caipNetwork,this.currentTab=m.state.currentTab,this.tokenBalance=m.state.tokenBalance,this.preferredAccountType=m.state.preferredAccountType,this.unsubscribe.push(m.subscribe(e=>{e.address?(this.address=e.address,this.profileImage=e.profileImage,this.profileName=e.profileName,this.currentTab=e.currentTab,this.tokenBalance=e.tokenBalance,this.smartAccountDeployed=e.smartAccountDeployed,this.preferredAccountType=e.preferredAccountType):q.close()}),T.subscribeKey("caipNetwork",e=>{this.network=e})),this.watchSwapValues()}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),clearInterval(this.watchTokenBalance)}firstUpdated(){m.fetchTokenBalance()}render(){if(!this.address)throw new Error("w3m-account-view: No account provided");const e=we.getNetworkImage(this.network);return l`<wui-flex
      flexDirection="column"
      .padding=${["0","xl","m","xl"]}
      alignItems="center"
      gap="m"
    >
      ${this.network&&l`<wui-network-icon .network=${this.network}></wui-network-icon>`}
      ${this.activateAccountTemplate()}
      <wui-profile-button
        @click=${this.onProfileButtonClick.bind(this)}
        address=${$(this.address)}
        networkSrc=${$(e)}
        icon="chevronBottom"
        avatarSrc=${$(this.profileImage?this.profileImage:void 0)}
        profileName=${this.profileName}
        data-testid="w3m-profile-button"
      ></wui-profile-button>
      ${this.tokenBalanceTemplate()}
      <wui-flex gap="s">
        <w3m-tooltip-trigger text="Buy">
          <wui-icon-button
            data-testid="wallet-features-onramp-button"
            @click=${this.onBuyClick.bind(this)}
            icon="card"
          ></wui-icon-button>
        </w3m-tooltip-trigger>
        ${this.swapsTemplate()}
        <w3m-tooltip-trigger text="Receive">
          <wui-icon-button
            data-testid="wallet-features-receive-button"
            @click=${this.onReceiveClick.bind(this)}
            icon="arrowBottomCircle"
          >
          </wui-icon-button>
        </w3m-tooltip-trigger>
        <w3m-tooltip-trigger text="Send">
          <wui-icon-button
            data-testid="wallet-features-send-button"
            @click=${this.onSendClick.bind(this)}
            icon="send"
          ></wui-icon-button>
        </w3m-tooltip-trigger>
      </wui-flex>

      <wui-tabs
        .onTabChange=${this.onTabChange.bind(this)}
        .activeTab=${this.currentTab}
        localTabWidth=${k.isMobile()&&window.innerWidth<um?`${(window.innerWidth-cm)/lm}px`:"104px"}
        .tabs=${hi.ACCOUNT_TABS}
      ></wui-tabs>
      ${this.listContentTemplate()}
    </wui-flex>`}swapsTemplate(){const{enableSwaps:e}=A.state;return e?l`
      <w3m-tooltip-trigger text="Swap">
        <wui-icon-button
          data-testid="wallet-features-swap-button"
          @click=${this.onSwapClick.bind(this)}
          icon="recycleHorizontal"
        >
        </wui-icon-button>
      </w3m-tooltip-trigger>
    `:null}watchSwapValues(){this.watchTokenBalance=setInterval(()=>m.fetchTokenBalance(),1e4)}listContentTemplate(){return this.currentTab===0?l`<w3m-account-tokens-widget></w3m-account-tokens-widget>`:this.currentTab===1?l`<w3m-account-nfts-widget></w3m-account-nfts-widget>`:this.currentTab===2?l`<w3m-account-activity-widget></w3m-account-activity-widget>`:l`<w3m-account-tokens-widget></w3m-account-tokens-widget>`}tokenBalanceTemplate(){var e;if(this.tokenBalance&&((e=this.tokenBalance)==null?void 0:e.length)>=0){const t=k.calculateBalance(this.tokenBalance),{dollars:r="0",pennies:o="00"}=k.formatTokenBalance(t);return l`<wui-balance dollars=${r} pennies=${o}></wui-balance>`}return l`<wui-balance dollars="0" pennies="00"></wui-balance>`}activateAccountTemplate(){return!T.checkIfSmartAccountEnabled()||this.preferredAccountType!==ae.ACCOUNT_TYPES.EOA||this.smartAccountDeployed?null:l` <wui-promo
      text=${"Activate your account"}
      @click=${this.onUpdateToSmartAccount.bind(this)}
      data-testid="activate-smart-account-promo"
    ></wui-promo>`}onTabChange(e){m.setCurrentTab(e)}onProfileButtonClick(){g.push("Profile")}onBuyClick(){g.push("OnRampProviders")}onSwapClick(){var e,t,r;(e=this.network)!=null&&e.id&&!Ue.SWAP_SUPPORTED_NETWORKS.includes((t=this.network)==null?void 0:t.id)?g.push("UnsupportedChain",{swapUnsupportedChain:!0}):(R.sendEvent({type:"track",event:"OPEN_SWAP",properties:{network:((r=this.network)==null?void 0:r.id)||"",isSmartAccount:m.state.preferredAccountType===ae.ACCOUNT_TYPES.SMART_ACCOUNT}}),g.push("Swap"))}onReceiveClick(){g.push("WalletReceive")}onSendClick(){var e;R.sendEvent({type:"track",event:"OPEN_SEND",properties:{network:((e=this.network)==null?void 0:e.id)||"",isSmartAccount:m.state.preferredAccountType===ae.ACCOUNT_TYPES.SMART_ACCOUNT}}),g.push("WalletSend")}onUpdateToSmartAccount(){g.push("UpgradeToSmartAccount")}};St.styles=sm;ci([d()],St.prototype,"watchTokenBalance",void 0);ci([d()],St.prototype,"address",void 0);ci([d()],St.prototype,"profileImage",void 0);ci([d()],St.prototype,"profileName",void 0);ci([d()],St.prototype,"smartAccountDeployed",void 0);ci([d()],St.prototype,"network",void 0);ci([d()],St.prototype,"currentTab",void 0);ci([d()],St.prototype,"tokenBalance",void 0);ci([d()],St.prototype,"preferredAccountType",void 0);St=ci([f("w3m-account-wallet-features-widget")],St);const dm=b`
  :host {
    width: 100%;
    max-height: 280px;
    overflow: scroll;
    scrollbar-width: none;
  }

  :host::-webkit-scrollbar {
    display: none;
  }
`;var pm=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Ks=class extends w{render(){return l`<w3m-activity-list page="account"></w3m-activity-list>`}};Ks.styles=dm;Ks=pm([f("w3m-account-activity-widget")],Ks);const hm=b`
  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }

  .contentContainer > .textContent {
    width: 65%;
  }
`;var fm=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Xs=class extends w{render(){return l`${this.nftTemplate()}`}nftTemplate(){return l` <wui-flex
      class="contentContainer"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gap="l"
    >
      <wui-icon-box
        icon="wallet"
        size="inherit"
        iconColor="fg-200"
        backgroundColor="fg-200"
        iconSize="lg"
      ></wui-icon-box>
      <wui-flex
        class="textContent"
        gap="xs"
        flexDirection="column"
        justifyContent="center"
        flexDirection="column"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100">Coming soon</wui-text>
        <wui-text variant="small-400" align="center" color="fg-200"
          >Stay tuned for our upcoming NFT feature</wui-text
        >
      </wui-flex>
      <wui-link @click=${this.onReceiveClick.bind(this)}>Receive funds</wui-link>
    </wui-flex>`}onReceiveClick(){g.push("WalletReceive")}};Xs.styles=hm;Xs=fm([f("w3m-account-nfts-widget")],Xs);const wm=b`
  :host {
    width: 100%;
  }

  wui-flex {
    width: 100%;
  }

  .contentContainer {
    max-height: 280px;
    overflow: scroll;
    scrollbar-width: none;
  }

  .contentContainer::-webkit-scrollbar {
    display: none;
  }
`;var Wu=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Ma=class extends w{constructor(){super(),this.unsubscribe=[],this.tokenBalance=m.state.tokenBalance,this.unsubscribe.push(m.subscribe(e=>{this.tokenBalance=e.tokenBalance}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return l`${this.tokenTemplate()}`}tokenTemplate(){var e;return this.tokenBalance&&((e=this.tokenBalance)==null?void 0:e.length)>0?l`<wui-flex class="contentContainer" flexDirection="column" gap="xs">
        ${this.tokenItemTemplate()}
      </wui-flex>`:l` <wui-flex flexDirection="column" gap="xs"
      ><wui-list-description
        @click=${this.onBuyClick.bind(this)}
        text="Buy Crypto"
        description="Easy with card or bank account"
        icon="card"
        iconColor="success-100"
        iconBackgroundColor="success-100"
        tag="popular"
      ></wui-list-description
      ><wui-list-description
        @click=${this.onReceiveClick.bind(this)}
        text="Receive funds"
        description="Transfer tokens on your wallet"
        icon="arrowBottomCircle"
        iconColor="fg-200"
        iconBackgroundColor="fg-200"
      ></wui-list-description
    ></wui-flex>`}tokenItemTemplate(){var e;return(e=this.tokenBalance)==null?void 0:e.map(t=>l`<wui-list-token
          tokenName=${t.name}
          tokenImageUrl=${t.iconUrl}
          tokenAmount=${t.quantity.numeric}
          tokenValue=${t.value}
          tokenCurrency=${t.symbol}
        ></wui-list-token>`)}onReceiveClick(){g.push("WalletReceive")}onBuyClick(){R.sendEvent({type:"track",event:"SELECT_BUY_CRYPTO",properties:{isSmartAccount:m.state.preferredAccountType===ae.ACCOUNT_TYPES.SMART_ACCOUNT}}),g.push("OnRampProviders")}};Ma.styles=wm;Wu([d()],Ma.prototype,"tokenBalance",void 0);Ma=Wu([f("w3m-account-tokens-widget")],Ma);const gm=b`
  :host {
    min-height: 100%;
  }

  .group-container[last-group='true'] {
    padding-bottom: var(--wui-spacing-m);
  }

  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }

  .contentContainer > .textContent {
    width: 65%;
  }

  .emptyContainer {
    height: 100%;
  }
`;var an=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};const na="last-transaction",mm=7;let ri=class extends w{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.page="activity",this.isSolana=y.state.activeChain===Ee.CHAIN.SOLANA,this.address=m.state.address,this.transactionsByYear=We.state.transactionsByYear,this.loading=We.state.loading,this.empty=We.state.empty,this.next=We.state.next,We.clearCursor(),this.unsubscribe.push(y.subscribeKey("activeChain",e=>{this.isSolana=e===Ee.CHAIN.SOLANA}),m.subscribe(e=>{e.isConnected&&this.address!==e.address&&(this.address=e.address,We.resetTransactions(),We.fetchTransactions(e.address))}),T.subscribeKey("caipNetwork",()=>{this.updateTransactionView()}),We.subscribe(e=>{this.transactionsByYear=e.transactionsByYear,this.loading=e.loading,this.empty=e.empty,this.next=e.next}))}firstUpdated(){if(this.isSolana){this.loading=!1,this.empty=!0;return}this.updateTransactionView(),this.createPaginationObserver()}updated(){this.setPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return l` ${this.empty?null:this.templateTransactionsByYear()}
    ${this.loading?this.templateLoading():null}
    ${!this.loading&&this.empty?this.templateEmpty():null}`}updateTransactionView(){var r;const e=(r=T.state.caipNetwork)==null?void 0:r.id;We.state.lastNetworkInView!==e&&(We.resetTransactions(),We.fetchTransactions(this.address)),We.setLastNetworkInView(e)}templateTransactionsByYear(){return Object.keys(this.transactionsByYear).sort().reverse().map(t=>{const r=parseInt(t,10),o=new Array(12).fill(null).map((n,a)=>{var h;const s=hn.getTransactionGroupTitle(r,a),p=(h=this.transactionsByYear[r])==null?void 0:h[a];return{groupTitle:s,transactions:p}}).filter(({transactions:n})=>n).reverse();return o.map(({groupTitle:n,transactions:a},s)=>{const p=s===o.length-1;return a?l`
          <wui-flex
            flexDirection="column"
            class="group-container"
            last-group="${p?"true":"false"}"
          >
            <wui-flex
              alignItems="center"
              flexDirection="row"
              .padding=${["xs","s","s","s"]}
            >
              <wui-text variant="paragraph-500" color="fg-200">${n}</wui-text>
            </wui-flex>
            <wui-flex flexDirection="column" gap="xs">
              ${this.templateTransactions(a,p)}
            </wui-flex>
          </wui-flex>
        `:null})})}templateRenderTransaction(e,t){const{date:r,descriptions:o,direction:n,isAllNFT:a,images:s,status:p,transfers:h,type:x}=this.getTransactionListItemProps(e),_=(h==null?void 0:h.length)>1;return(h==null?void 0:h.length)===2&&!a?l`
        <wui-transaction-list-item
          date=${r}
          .direction=${n}
          id=${t&&this.next?na:""}
          status=${p}
          type=${x}
          .images=${s}
          .descriptions=${o}
        ></wui-transaction-list-item>
      `:_?h.map((B,ne)=>{const se=hn.getTransferDescription(B),J=t&&ne===h.length-1;return l` <wui-transaction-list-item
          date=${r}
          direction=${B.direction}
          id=${J&&this.next?na:""}
          status=${p}
          type=${x}
          .onlyDirectionIcon=${!0}
          .images=${[s[ne]]}
          .descriptions=${[se]}
        ></wui-transaction-list-item>`}):l`
      <wui-transaction-list-item
        date=${r}
        .direction=${n}
        id=${t&&this.next?na:""}
        status=${p}
        type=${x}
        .images=${s}
        .descriptions=${o}
      ></wui-transaction-list-item>
    `}templateTransactions(e,t){return e.map((r,o)=>{const n=t&&o===e.length-1;return l`${this.templateRenderTransaction(r,n)}`})}emptyStateActivity(){const e=l`
      <wui-text align="center" variant="paragraph-500" color="fg-100"
        >Transaction history is coming soon!</wui-text
      >
    `,t=l` <wui-text align="center" variant="paragraph-500" color="fg-100"
        >No Transactions yet</wui-text
      >
      <wui-text align="center" variant="small-500" color="fg-200"
        >Start trading on dApps <br />
        to grow your wallet!</wui-text
      >`;return l`<wui-flex
      class="emptyContainer"
      flexGrow="1"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      .padding=${["3xl","xl","3xl","xl"]}
      gap="xl"
    >
      <wui-icon-box
        backgroundColor="gray-glass-005"
        background="gray"
        iconColor="fg-200"
        icon="wallet"
        size="lg"
        ?border=${!0}
        borderColor="wui-color-bg-125"
      ></wui-icon-box>
      <wui-flex flexDirection="column" alignItems="center" gap="xs">
        ${this.isSolana?e:t}
      </wui-flex>
    </wui-flex>`}emptyStateAccount(){const e=l`
      <wui-text variant="paragraph-500" align="center" color="fg-100"
        >Transaction history is coming soon!</wui-text
      >
    `,t=l` <wui-text variant="paragraph-500" align="center" color="fg-100"
        >No activity yet</wui-text
      >
      <wui-text variant="small-400" align="center" color="fg-200"
        >Your next transactions will appear here</wui-text
      >`;return l`<wui-flex
      class="contentContainer"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gap="l"
    >
      <wui-icon-box
        icon="swapHorizontal"
        size="inherit"
        iconColor="fg-200"
        backgroundColor="fg-200"
        iconSize="lg"
      ></wui-icon-box>
      <wui-flex
        class="textContent"
        gap="xs"
        flexDirection="column"
        justifyContent="center"
        flexDirection="column"
      >
        ${this.isSolana?e:t}
      </wui-flex>
      <wui-link @click=${this.onReceiveClick.bind(this)}>Trade</wui-link>
    </wui-flex>`}templateEmpty(){return this.page==="account"?l`${this.emptyStateAccount()}`:l`${this.emptyStateActivity()}`}templateLoading(){return this.page==="activity"?Array(mm).fill(l` <wui-transaction-list-item-loader></wui-transaction-list-item-loader> `).map(e=>e):null}onReceiveClick(){g.push("WalletReceive")}createPaginationObserver(){const{projectId:e}=A.state;this.paginationObserver=new IntersectionObserver(([t])=>{t!=null&&t.isIntersecting&&!this.loading&&(We.fetchTransactions(this.address),R.sendEvent({type:"track",event:"LOAD_MORE_TRANSACTIONS",properties:{address:this.address,projectId:e,cursor:this.next,isSmartAccount:m.state.preferredAccountType===ae.ACCOUNT_TYPES.SMART_ACCOUNT}}))},{}),this.setPaginationObserver()}setPaginationObserver(){var t,r,o;(t=this.paginationObserver)==null||t.disconnect();const e=(r=this.shadowRoot)==null?void 0:r.querySelector(`#${na}`);e&&((o=this.paginationObserver)==null||o.observe(e))}getTransactionListItemProps(e){var p,h,x,_,D;const t=ol.formatDate((p=e==null?void 0:e.metadata)==null?void 0:p.minedAt),r=hn.getTransactionDescriptions(e),o=e==null?void 0:e.transfers,n=(h=e==null?void 0:e.transfers)==null?void 0:h[0],a=!!n&&((x=e==null?void 0:e.transfers)==null?void 0:x.every(B=>!!B.nft_info)),s=hn.getTransactionImages(o);return{date:t,direction:n==null?void 0:n.direction,descriptions:r,isAllNFT:a,images:s,status:(_=e.metadata)==null?void 0:_.status,transfers:o,type:(D=e.metadata)==null?void 0:D.operationType}}};ri.styles=gm;an([c()],ri.prototype,"page",void 0);an([d()],ri.prototype,"isSolana",void 0);an([d()],ri.prototype,"address",void 0);an([d()],ri.prototype,"transactionsByYear",void 0);an([d()],ri.prototype,"loading",void 0);an([d()],ri.prototype,"empty",void 0);an([d()],ri.prototype,"next",void 0);ri=an([f("w3m-activity-list")],ri);const vm=b`
  :host {
    width: 100%;
    height: 100px;
    border-radius: var(--wui-border-radius-s);
    border: 1px solid var(--wui-color-gray-glass-002);
    background-color: var(--wui-color-gray-glass-002);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color;
  }

  :host(:hover) {
    background-color: var(--wui-color-gray-glass-005);
  }

  wui-flex {
    width: 100%;
    height: fit-content;
  }

  wui-button {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }

  wui-input-amount {
    mask-image: linear-gradient(
      270deg,
      transparent 0px,
      transparent 8px,
      black 24px,
      black 25px,
      black 32px,
      black 100%
    );
  }

  .totalValue {
    width: 100%;
  }
`;var ds=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let kr=class extends w{render(){return l` <wui-flex
      flexDirection="column"
      gap="4xs"
      .padding=${["xl","s","l","l"]}
    >
      <wui-flex alignItems="center">
        <wui-input-amount
          @inputChange=${this.onInputChange.bind(this)}
          ?disabled=${!this.token&&!0}
          .value=${this.sendTokenAmount?String(this.sendTokenAmount):""}
        ></wui-input-amount>
        ${this.buttonTemplate()}
      </wui-flex>
      <wui-flex alignItems="center" justifyContent="space-between">
        ${this.sendValueTemplate()}
        <wui-flex alignItems="center" gap="4xs" justifyContent="flex-end">
          ${this.maxAmountTemplate()} ${this.actionTemplate()}
        </wui-flex>
      </wui-flex>
    </wui-flex>`}buttonTemplate(){return this.token?l`<wui-token-button
        text=${this.token.symbol}
        imageSrc=${this.token.iconUrl}
        @click=${this.handleSelectButtonClick.bind(this)}
      >
      </wui-token-button>`:l`<wui-button
      size="md"
      variant="accent"
      @click=${this.handleSelectButtonClick.bind(this)}
      >Select token</wui-button
    >`}handleSelectButtonClick(){g.push("WalletSendSelectToken")}sendValueTemplate(){if(this.token&&this.sendTokenAmount){const t=this.token.price*this.sendTokenAmount;return l`<wui-text class="totalValue" variant="small-400" color="fg-200"
        >${t?`$${H.formatNumberToLocalString(t,2)}`:"Incorrect value"}</wui-text
      >`}return null}maxAmountTemplate(){return this.token?this.sendTokenAmount&&this.sendTokenAmount>Number(this.token.quantity.numeric)?l` <wui-text variant="small-400" color="error-100">
          ${H.roundNumber(Number(this.token.quantity.numeric),6,5)}
        </wui-text>`:l` <wui-text variant="small-400" color="fg-200">
        ${H.roundNumber(Number(this.token.quantity.numeric),6,5)}
      </wui-text>`:null}actionTemplate(){return this.token?this.sendTokenAmount&&this.sendTokenAmount>Number(this.token.quantity.numeric)?l`<wui-link @click=${this.onBuyClick.bind(this)}>Buy</wui-link>`:l`<wui-link @click=${this.onMaxClick.bind(this)}>Max</wui-link>`:null}onInputChange(e){fe.setTokenAmount(e.detail)}onMaxClick(){if(this.token&&this.gasPriceInUSD){const e=ue.bigNumber(this.gasPriceInUSD.toFixed(5)).dividedBy(this.token.price),r=this.token.address===void 0?ue.bigNumber(this.token.quantity.numeric).minus(e):ue.bigNumber(this.token.quantity.numeric);fe.setTokenAmount(Number(r.toFixed(20)))}}onBuyClick(){g.push("OnRampProviders")}};kr.styles=vm;ds([c({type:Object})],kr.prototype,"token",void 0);ds([c({type:Number})],kr.prototype,"sendTokenAmount",void 0);ds([c({type:Number})],kr.prototype,"gasPriceInUSD",void 0);kr=ds([f("w3m-input-token")],kr);const bm=b`
  :host {
    width: 100%;
    height: 100px;
    border-radius: var(--wui-border-radius-s);
    border: 1px solid var(--wui-color-gray-glass-002);
    background-color: var(--wui-color-gray-glass-002);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color;
    position: relative;
  }

  :host(:hover) {
    background-color: var(--wui-color-gray-glass-005);
  }

  wui-flex {
    width: 100%;
    height: fit-content;
  }

  wui-button {
    display: ruby;
    color: var(--wui-color-fg-100);
    margin: 0 var(--wui-spacing-xs);
  }

  .instruction {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  .paste {
    display: inline-flex;
  }

  textarea {
    background: transparent;
    width: 100%;
    font-family: var(--w3m-font-family);
    font-size: var(--wui-font-size-medium);
    font-style: normal;
    font-weight: var(--wui-font-weight-light);
    line-height: 130%;
    letter-spacing: var(--wui-letter-spacing-medium);
    color: var(--wui-color-fg-100);
    caret-color: var(--wui-color-accent-100);
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
    border: none;
    outline: none;
    appearance: none;
    resize: none;
    overflow: hidden;
  }
`;var ps=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Sr=class extends w{constructor(){super(...arguments),this.inputElementRef=zi(),this.instructionElementRef=zi(),this.instructionHidden=!!this.value,this.pasting=!1,this.onDebouncedSearch=k.debounce(async e=>{const t=await G.getEnsAddress(e);if(fe.setLoading(!1),t){fe.setReceiverProfileName(e),fe.setReceiverAddress(t);const r=await G.getEnsAvatar(e);r&&fe.setReceiverProfileImageUrl(r)}else fe.setReceiverAddress(e),fe.setReceiverProfileName(void 0),fe.setReceiverProfileImageUrl(void 0)})}firstUpdated(){this.value&&(this.instructionHidden=!0),this.checkHidden()}render(){return l` <wui-flex
      @click=${this.onBoxClick.bind(this)}
      flexDirection="column"
      justifyContent="center"
      gap="4xs"
      .padding=${["2xl","l","xl","l"]}
    >
      <wui-text
        ${Vi(this.instructionElementRef)}
        class="instruction"
        color="fg-300"
        variant="medium-400"
      >
        Type or
        <wui-button
          class="paste"
          size="md"
          variant="neutral"
          iconLeft="copy"
          @click=${this.onPasteClick.bind(this)}
        >
          <wui-icon size="sm" color="inherit" slot="iconLeft" name="copy"></wui-icon>
          Paste
        </wui-button>
        address
      </wui-text>
      <textarea
        spellcheck="false"
        ?disabled=${!this.instructionHidden}
        ${Vi(this.inputElementRef)}
        @input=${this.onInputChange.bind(this)}
        @blur=${this.onBlur.bind(this)}
        .value=${this.value??""}
        autocomplete="off"
      >
${this.value??""}</textarea
      >
    </wui-flex>`}async focusInput(){var e;this.instructionElementRef.value&&(this.instructionHidden=!0,await this.toggleInstructionFocus(!1),this.instructionElementRef.value.style.pointerEvents="none",(e=this.inputElementRef.value)==null||e.focus(),this.inputElementRef.value&&(this.inputElementRef.value.selectionStart=this.inputElementRef.value.selectionEnd=this.inputElementRef.value.value.length))}async focusInstruction(){var e;this.instructionElementRef.value&&(this.instructionHidden=!1,await this.toggleInstructionFocus(!0),this.instructionElementRef.value.style.pointerEvents="auto",(e=this.inputElementRef.value)==null||e.blur())}async toggleInstructionFocus(e){this.instructionElementRef.value&&await this.instructionElementRef.value.animate([{opacity:e?0:1},{opacity:e?1:0}],{duration:100,easing:"ease",fill:"forwards"}).finished}onBoxClick(){!this.value&&!this.instructionHidden&&this.focusInput()}onBlur(){!this.value&&this.instructionHidden&&!this.pasting&&this.focusInstruction()}checkHidden(){this.instructionHidden&&this.focusInput()}async onPasteClick(){this.pasting=!0;const e=await navigator.clipboard.readText();fe.setReceiverAddress(e),this.focusInput()}onInputChange(e){this.pasting=!1;const t=e.target;t.value&&!this.instructionHidden&&this.focusInput(),fe.setLoading(!0),this.onDebouncedSearch(t.value)}};Sr.styles=bm;ps([c()],Sr.prototype,"value",void 0);ps([d()],Sr.prototype,"instructionHidden",void 0);ps([d()],Sr.prototype,"pasting",void 0);Sr=ps([f("w3m-input-address")],Sr);const xm=b`
  :host {
    display: flex;
    width: auto;
    flex-direction: column;
    gap: var(--wui-border-radius-1xs);
    border-radius: var(--wui-border-radius-s);
    background: var(--wui-color-gray-glass-002);
    padding: var(--wui-spacing-s) var(--wui-spacing-1xs) var(--wui-spacing-1xs)
      var(--wui-spacing-1xs);
  }

  wui-text {
    padding: 0 var(--wui-spacing-1xs);
  }

  wui-flex {
    margin-top: var(--wui-spacing-1xs);
  }

  .network {
    cursor: pointer;
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color;
  }

  .network:focus-visible {
    border: 1px solid var(--wui-color-accent-100);
    background-color: var(--wui-color-gray-glass-005);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  .network:hover {
    background-color: var(--wui-color-gray-glass-005);
  }

  .network:active {
    background-color: var(--wui-color-gray-glass-010);
  }
`;var hs=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Ar=class extends w{render(){return l` <wui-text variant="small-400" color="fg-200">Details</wui-text>
      <wui-flex flexDirection="column" gap="xxs">
        <wui-list-content textTitle="Network cost" textValue="$${$(H.formatNumberToLocalString(this.networkFee,2))}"></wui-list-content></wui-list-content>
        <wui-list-content
          textTitle="Address"
          textValue=${H.getTruncateString({string:this.receiverAddress??"",charsStart:4,charsEnd:4,truncate:"middle"})}
        >
        </wui-list-content>
        ${this.networkTemplate()}
      </wui-flex>`}networkTemplate(){var e;return(e=this.caipNetwork)!=null&&e.name?l` <wui-list-content
        @click=${()=>this.onNetworkClick(this.caipNetwork)}
        class="network"
        textTitle="Network"
        imageSrc=${$(we.getNetworkImage(this.caipNetwork))}
      ></wui-list-content>`:null}onNetworkClick(e){e&&g.push("Networks",{network:e})}};Ar.styles=xm;hs([c()],Ar.prototype,"receiverAddress",void 0);hs([c({type:Object})],Ar.prototype,"caipNetwork",void 0);hs([c({type:Number})],Ar.prototype,"networkFee",void 0);Ar=hs([f("w3m-wallet-send-details")],Ar);const ym=b`
  :host {
    pointer-events: none;
  }

  :host > wui-flex {
    display: var(--w3m-tooltip-display);
    opacity: var(--w3m-tooltip-opacity);
    padding: 9px var(--wui-spacing-s) 10px var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    color: var(--wui-color-bg-100);
    position: fixed;
    top: var(--w3m-tooltip-top);
    left: var(--w3m-tooltip-left);
    transform: translate(calc(-50% + var(--w3m-tooltip-parent-width)), calc(-100% - 8px));
    max-width: calc(var(--w3m-modal-width) - var(--wui-spacing-xl));
    transition: opacity 0.2s var(--wui-ease-out-power-2);
    will-change: opacity;
  }

  :host([data-variant='shade']) > wui-flex {
    background-color: var(--wui-color-bg-150);
    border: 1px solid var(--wui-color-gray-glass-005);
  }

  :host([data-variant='shade']) > wui-flex > wui-text {
    color: var(--wui-color-fg-150);
  }

  :host([data-variant='fill']) > wui-flex {
    background-color: var(--wui-color-fg-100);
    border: none;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
    color: var(--wui-color-bg-150);
  }

  wui-icon[data-placement='top'] {
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`;var Ko=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Ln=class extends w{constructor(){super(),this.unsubscribe=[],this.open=lt.state.open,this.message=lt.state.message,this.triggerRect=lt.state.triggerRect,this.variant=lt.state.variant,this.unsubscribe.push(lt.subscribe(e=>{this.open=e.open,this.message=e.message,this.triggerRect=e.triggerRect,this.variant=e.variant}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){this.dataset.variant=this.variant;const e=this.triggerRect.top,t=this.triggerRect.left;return this.style.cssText=`
    --w3m-tooltip-top: ${e}px;
    --w3m-tooltip-left: ${t}px;
    --w3m-tooltip-parent-width: ${this.triggerRect.width/2}px;
    --w3m-tooltip-display: ${this.open?"flex":"none"};
    --w3m-tooltip-opacity: ${this.open?1:0};
    `,l`<wui-flex>
      <wui-icon data-placement="top" color="fg-100" size="inherit" name="cursor"></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>
    </wui-flex>`}};Ln.styles=[ym];Ko([d()],Ln.prototype,"open",void 0);Ko([d()],Ln.prototype,"message",void 0);Ko([d()],Ln.prototype,"triggerRect",void 0);Ko([d()],Ln.prototype,"variant",void 0);Ln=Ko([f("w3m-tooltip")],Ln);const Cm=b`
  :host {
    width: 100%;
    display: block;
  }
`;var Ul=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let $o=class extends w{constructor(){super(),this.unsubscribe=[],this.text="",this.open=lt.state.open,this.unsubscribe.push(g.subscribeKey("view",()=>{lt.hide()}),q.subscribeKey("open",e=>{e||lt.hide()}),lt.subscribeKey("open",e=>{this.open=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),lt.hide()}render(){return l`
      <div
        @pointermove=${this.onMouseEnter.bind(this)}
        @pointerleave=${this.onMouseLeave.bind(this)}
      >
        ${this.renderChildren()}
      </div>
    `}renderChildren(){return l`<slot></slot> `}onMouseEnter(){const e=this.getBoundingClientRect();this.open||lt.showTooltip({message:this.text,triggerRect:{width:e.width,height:e.height,left:e.left,top:e.top},variant:"shade"})}onMouseLeave(e){this.contains(e.relatedTarget)||lt.hide()}};$o.styles=[Cm];Ul([c()],$o.prototype,"text",void 0);Ul([d()],$o.prototype,"open",void 0);$o=Ul([f("w3m-tooltip-trigger")],$o);const _m=b`
  :host > wui-flex:first-child {
    margin-top: var(--wui-spacing-s);
  }
  wui-separator {
    margin: var(--wui-spacing-m) calc(var(--wui-spacing-m) * -1) var(--wui-spacing-m)
      calc(var(--wui-spacing-m) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }
`;var Mu=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};const Ic=2,Oc=6;let ja=class extends w{constructor(){super(),this.unsubscribe=[],this.connectors=P.state.connectors,this.connector=this.connectors.find(e=>e.type==="AUTH"),this.unsubscribe.push(P.subscribeKey("connectors",e=>{this.connectors=e,this.connector=this.connectors.find(t=>t.type==="AUTH")}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){var e;return(e=this.connector)!=null&&e.socials?l`
      <wui-flex
        class="container"
        flexDirection="column"
        gap="xs"
        .padding=${["0","0","xs","0"]}
      >
        ${this.topViewTemplate()}${this.bottomViewTemplate()}
      </wui-flex>
      ${this.separatorTemplate()}
    `:null}topViewTemplate(){var e,t,r;return(e=this.connector)!=null&&e.socials?this.connector.socials.length===2?l` <wui-flex gap="xs">
        ${this.connector.socials.slice(0,Ic).map(o=>l`<wui-logo-select
              data-testid=${`social-selector-${o}`}
              @click=${()=>{this.onSocialClick(o)}}
              logo=${o}
            ></wui-logo-select>`)}
      </wui-flex>`:l` <wui-list-social
      data-testid=${`social-selector-${(r=(t=this.connector)==null?void 0:t.socials)==null?void 0:r[0]}`}
      @click=${()=>{var o,n;this.onSocialClick((n=(o=this.connector)==null?void 0:o.socials)==null?void 0:n[0])}}
      logo=${$(this.connector.socials[0])}
      align="center"
      name=${`Continue with ${this.connector.socials[0]}`}
    ></wui-list-social>`:null}bottomViewTemplate(){var e,t,r;return!((e=this.connector)!=null&&e.socials)||((t=this.connector)==null?void 0:t.socials.length)<=Ic?null:((r=this.connector)==null?void 0:r.socials.length)>Oc?l`<wui-flex gap="xs">
        ${this.connector.socials.slice(1,Oc-1).map(o=>l`<wui-logo-select
              data-testid=${`social-selector-${o}`}
              @click=${()=>{this.onSocialClick(o)}}
              logo=${o}
            ></wui-logo-select>`)}
        <wui-logo-select logo="more" @click=${this.onMoreSocialsClick.bind(this)}></wui-logo-select>
      </wui-flex>`:l`<wui-flex gap="xs">
      ${this.connector.socials.slice(1,this.connector.socials.length).map(o=>l`<wui-logo-select
            data-testid=${`social-selector-${o}`}
            @click=${()=>{this.onSocialClick(o)}}
            logo=${o}
          ></wui-logo-select>`)}
    </wui-flex>`}separatorTemplate(){return this.connectors.find(t=>t.type==="WALLET_CONNECT")?l`<wui-separator text="or"></wui-separator>`:null}onMoreSocialsClick(){g.push("ConnectSocials")}async onSocialClick(e){var t,r;if(e&&(m.setSocialProvider(e,y.state.activeChain),R.sendEvent({type:"track",event:"SOCIAL_LOGIN_STARTED",properties:{provider:e}})),e===Aa.Farcaster){g.push("ConnectingFarcaster");const o=P.getAuthConnector();if(o&&!m.state.farcasterUrl)try{const{url:n}=await o.provider.getFarcasterUri();m.setFarcasterUrl(n)}catch(n){g.goBack(),z.showError(n)}}else{g.push("ConnectingSocial");const o=P.getAuthConnector();this.popupWindow=k.returnOpenHref("","popupWindow","width=600,height=800,scrollbars=yes");try{if(o&&e){const{uri:n}=await o.provider.getSocialRedirectUri({provider:e});if(this.popupWindow&&n)m.setSocialWindow(this.popupWindow,y.state.activeChain),this.popupWindow.location.href=n;else throw(t=this.popupWindow)==null||t.close(),new Error("Something went wrong")}}catch{(r=this.popupWindow)==null||r.close(),z.showError("Something went wrong")}}}};ja.styles=_m;Mu([d()],ja.prototype,"connectors",void 0);ja=Mu([f("w3m-social-login-widget")],ja);var Tm=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Nc=class extends w{render(){return l`
      <wui-flex flexDirection="column" gap="xs">
        <w3m-connector-list></w3m-connector-list>
        <w3m-all-wallets-widget></w3m-all-wallets-widget>
      </wui-flex>
    `}};Nc=Tm([f("w3m-wallet-login-list")],Nc);const km=b`
  :host {
    margin-top: var(--wui-spacing-3xs);
  }
  wui-separator {
    margin: var(--wui-spacing-m) calc(var(--wui-spacing-m) * -1) var(--wui-spacing-xs)
      calc(var(--wui-spacing-m) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }
`;var ju=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let La=class extends w{constructor(){super(),this.unsubscribe=[],this.connectors=P.state.connectors,this.connector=this.connectors.find(e=>e.type==="AUTH"),this.unsubscribe.push(P.subscribeKey("connectors",e=>{this.connectors=e,this.connector=this.connectors.find(t=>t.type==="AUTH")}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){var e;return(e=this.connector)!=null&&e.socials?l` <wui-flex flexDirection="column" gap="xs">
      ${this.connector.socials.map(t=>l`<wui-list-social
            @click=${()=>{this.onSocialClick(t)}}
            name=${t}
            logo=${t}
          ></wui-list-social>`)}
    </wui-flex>`:null}async onSocialClick(e){var t,r;if(e&&(m.setSocialProvider(e,y.state.activeChain),R.sendEvent({type:"track",event:"SOCIAL_LOGIN_STARTED",properties:{provider:e}})),e===Aa.Farcaster){g.push("ConnectingFarcaster");const o=P.getAuthConnector();if(o&&!m.state.farcasterUrl)try{const{url:n}=await o.provider.getFarcasterUri();m.setFarcasterUrl(n)}catch(n){g.goBack(),z.showError(n)}}else{g.push("ConnectingSocial");const o=P.getAuthConnector();this.popupWindow=k.returnOpenHref("","popupWindow","width=600,height=800,scrollbars=yes");try{if(o&&e){const{uri:n}=await o.provider.getSocialRedirectUri({provider:e});if(this.popupWindow&&n)m.setSocialWindow(this.popupWindow,y.state.activeChain),this.popupWindow.location.href=n;else throw(t=this.popupWindow)==null||t.close(),new Error("Something went wrong")}}catch{(r=this.popupWindow)==null||r.close(),z.showError("Something went wrong")}}}};La.styles=km;ju([d()],La.prototype,"connectors",void 0);La=ju([f("w3m-social-login-list")],La);var Lu=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Qs=class extends w{constructor(){super(),this.unsubscribe=[],this.connectors=P.state.connectors,this.unsubscribe.push(P.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.connectors.filter(t=>t.type==="ANNOUNCED");return e!=null&&e.length?l`
      <wui-flex flexDirection="column" gap="xs">
        ${e.map(t=>{var r,o;return(r=t.info)!=null&&r.rdns&&V.state.excludedRDNS&&V.state.excludedRDNS.includes((o=t==null?void 0:t.info)==null?void 0:o.rdns)?null:l`
            <wui-list-wallet
              imageSrc=${$(we.getConnectorImage(t))}
              name=${t.name??"Unknown"}
              @click=${()=>this.onConnector(t)}
              tagVariant="success"
              tagLabel="installed"
              data-testid=${`wallet-selector-${t.id}`}
              .installed=${!0}
            >
            </wui-list-wallet>
          `})}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnector(e){e.type==="WALLET_CONNECT"?k.isMobile()?g.push("AllWallets"):g.push("ConnectingWalletConnect"):g.push("ConnectingExternal",{connector:e})}};Lu([d()],Qs.prototype,"connectors",void 0);Qs=Lu([f("w3m-connect-announced-widget")],Qs);var Bu=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Js=class extends w{constructor(){super(),this.unsubscribe=[],this.connectors=P.state.connectors,this.unsubscribe.push(P.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const{customWallets:e}=A.state;if(!(e!=null&&e.length))return this.style.cssText="display: none",null;const t=this.filterOutDuplicateWallets(e);return l`<wui-flex flexDirection="column" gap="xs">
      ${t.map(r=>l`
          <wui-list-wallet
            imageSrc=${$(we.getWalletImage(r))}
            name=${r.name??"Unknown"}
            @click=${()=>this.onConnectWallet(r)}
            data-testid=${`wallet-selector-${r.id}`}
          >
          </wui-list-wallet>
        `)}
    </wui-flex>`}filterOutDuplicateWallets(e){const t=oe.getRecentWallets(),r=this.connectors.map(s=>{var p;return(p=s.info)==null?void 0:p.rdns}).filter(Boolean),o=t.map(s=>s.rdns).filter(Boolean),n=r.concat(o);if(n.includes("io.metamask.mobile")&&k.isMobile()){const s=n.indexOf("io.metamask.mobile");n[s]="io.metamask"}return e.filter(s=>!n.includes(String(s==null?void 0:s.rdns)))}onConnectWallet(e){g.push("ConnectingWalletConnect",{wallet:e})}};Bu([d()],Js.prototype,"connectors",void 0);Js=Bu([f("w3m-connect-custom-widget")],Js);const Ba={filterOutDuplicatesByRDNS(i){const e=A.state.enableEIP6963?P.state.connectors:[],t=oe.getRecentWallets(),r=e.map(s=>{var p;return(p=s.info)==null?void 0:p.rdns}).filter(Boolean),o=t.map(s=>s.rdns).filter(Boolean),n=r.concat(o);if(n.includes("io.metamask.mobile")&&k.isMobile()){const s=n.indexOf("io.metamask.mobile");n[s]="io.metamask"}return i.filter(s=>!n.includes(String(s==null?void 0:s.rdns)))},filterOutDuplicatesByIds(i){const e=P.state.connectors,t=oe.getRecentWallets(),r=e.map(s=>s.explorerId),o=t.map(s=>s.id),n=r.concat(o);return i.filter(s=>!n.includes(s==null?void 0:s.id))},filterOutDuplicateWallets(i){const e=this.filterOutDuplicatesByRDNS(i);return this.filterOutDuplicatesByIds(e)}};var Sm=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Pc=class extends w{constructor(){super(...arguments),this.unsubscribe=[]}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const{featured:e}=V.state;if(!e.length)return this.style.cssText="display: none",null;const t=Ba.filterOutDuplicateWallets(e);return l`
      <wui-flex flexDirection="column" gap="xs">
        ${t.map(r=>l`
            <wui-list-wallet
              imageSrc=${$(we.getWalletImage(r))}
              name=${r.name??"Unknown"}
              @click=${()=>this.onConnectWallet(r)}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `}onConnectWallet(e){const t=P.getConnector(e.id,e.rdns);t?g.push("ConnectingExternal",{connector:t}):g.push("ConnectingWalletConnect",{wallet:e})}};Pc=Sm([f("w3m-connect-featured-widget")],Pc);var zu=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let el=class extends w{constructor(){super(),this.unsubscribe=[],this.connectors=P.state.connectors,this.unsubscribe.push(P.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){var t;const e=this.connectors.filter(r=>r.type==="INJECTED");return!(e!=null&&e.length)||e.length===1&&((t=e[0])==null?void 0:t.name)==="Browser Wallet"&&!k.isMobile()?(this.style.cssText="display: none",null):l`
      <wui-flex flexDirection="column" gap="xs">
        ${e.map(r=>{var o,n;return!k.isMobile()&&r.name==="Browser Wallet"?null:G.checkInstalled()?(o=r.info)!=null&&o.rdns&&V.state.excludedRDNS&&V.state.excludedRDNS.includes((n=r==null?void 0:r.info)==null?void 0:n.rdns)?null:l`
            <wui-list-wallet
              imageSrc=${$(we.getConnectorImage(r))}
              .installed=${!0}
              name=${r.name??"Unknown"}
              tagVariant="success"
              tagLabel="installed"
              data-testid=${`wallet-selector-${r.id}`}
              @click=${()=>this.onConnector(r)}
            >
            </wui-list-wallet>
          `:(this.style.cssText="display: none",null)})}
      </wui-flex>
    `}onConnector(e){g.push("ConnectingExternal",{connector:e})}};zu([d()],el.prototype,"connectors",void 0);el=zu([f("w3m-connect-injected-widget")],el);var Vu=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let tl=class extends w{constructor(){super(),this.unsubscribe=[],this.connectors=P.state.connectors,this.unsubscribe.push(P.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.connectors.find(t=>t.id==="coinbaseWalletSDK");return e?l`
      <wui-flex flexDirection="column" gap="xs">
        <wui-list-wallet
          imageSrc=${$(we.getConnectorImage(e))}
          .installed=${!0}
          name=${$(e.name)}
          data-testid=${`wallet-selector-${e.id}`}
          @click=${()=>this.onConnector(e)}
        >
        </wui-list-wallet>
      </wui-flex>
    `:(this.style.cssText="display: none",null)}async onCoinbaseConnector(e){try{G.setWcError(!1),e.imageUrl&&oe.setConnectedWalletImageUrl(e.imageUrl),await G.connectExternal(e),A.state.isSiweEnabled?g.push("ConnectingSiwe"):q.close(),R.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser",name:e.name||"Unknown"}})}catch(t){R.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(t==null?void 0:t.message)??"Unknown"}}),G.setWcError(!0)}}onConnector(e){g.push("ConnectingExternal",{connector:e}),e.id===Te.COINBASE_SDK_CONNECTOR_ID&&this.onCoinbaseConnector(e)}};Vu([d()],tl.prototype,"connectors",void 0);tl=Vu([f("w3m-connect-coinbase-widget")],tl);var Hu=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let il=class extends w{constructor(){super(),this.unsubscribe=[],this.connectors=P.state.connectors,this.unsubscribe.push(P.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const t=this.connectors.filter(r=>r.type==="EXTERNAL").filter(r=>r.id!=="coinbaseWalletSDK");return t!=null&&t.length?l`
      <wui-flex flexDirection="column" gap="xs">
        ${t.map(r=>l`
            <wui-list-wallet
              imageSrc=${$(we.getConnectorImage(r))}
              .installed=${!0}
              name=${r.name??"Unknown"}
              data-testid=${`wallet-selector-external-${r.id}`}
              @click=${()=>this.onConnector(r)}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnector(e){g.push("ConnectingExternal",{connector:e})}};Hu([d()],il.prototype,"connectors",void 0);il=Hu([f("w3m-connect-external-widget")],il);var Am=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Dc=class extends w{render(){const e=oe.getRecentWallets();return e!=null&&e.length?l`
      <wui-flex flexDirection="column" gap="xs">
        ${e.map(t=>l`
            <wui-list-wallet
              imageSrc=${$(we.getWalletImage(t))}
              name=${t.name??"Unknown"}
              @click=${()=>this.onConnectWallet(t)}
              tagLabel="recent"
              tagVariant="shade"
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnectWallet(e){g.push("ConnectingWalletConnect",{wallet:e})}};Dc=Am([f("w3m-connect-recent-widget")],Dc);var Fu=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let nl=class extends w{constructor(){super(),this.unsubscribe=[],this.connectors=P.state.connectors,this.unsubscribe.push(P.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(!this.connectors.find(D=>D.type==="WALLET_CONNECT"))return null;const{recommended:t}=V.state,{customWallets:r,featuredWalletIds:o}=A.state,{connectors:n}=P.state,a=oe.getRecentWallets(),p=n.filter(D=>D.type==="INJECTED"||D.type==="ANNOUNCED").filter(D=>D.name!=="Browser Wallet");if(o||r||!t.length)return this.style.cssText="display: none",null;const h=p.length+a.length,x=Math.max(0,2-h),_=Ba.filterOutDuplicateWallets(t).slice(0,x);return _.length?l`
      <wui-flex flexDirection="column" gap="xs">
        ${_.map(D=>l`
            <wui-list-wallet
              imageSrc=${$(we.getWalletImage(D))}
              name=${(D==null?void 0:D.name)??"Unknown"}
              @click=${()=>this.onConnectWallet(D)}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnectWallet(e){const t=P.getConnector(e.id,e.rdns);t?g.push("ConnectingExternal",{connector:t}):g.push("ConnectingWalletConnect",{wallet:e})}};Fu([d()],nl.prototype,"connectors",void 0);nl=Fu([f("w3m-connect-recommended-widget")],nl);var Zu=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let rl=class extends w{constructor(){super(),this.unsubscribe=[],this.connectors=P.state.connectors,this.unsubscribe.push(P.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(k.isMobile())return this.style.cssText="display: none",null;const e=this.connectors.find(t=>t.type==="WALLET_CONNECT");return e?l`
      <wui-list-wallet
        imageSrc=${$(we.getConnectorImage(e))}
        name=${e.name??"Unknown"}
        @click=${()=>this.onConnector(e)}
        tagLabel="qr code"
        tagVariant="main"
        data-testid="wallet-selector-walletconnect"
      >
      </wui-list-wallet>
    `:(this.style.cssText="display: none",null)}onConnector(e){e.type==="WALLET_CONNECT"?k.isMobile()?g.push("AllWallets"):g.push("ConnectingWalletConnect"):g.push("ConnectingExternal",{connector:e})}};Zu([d()],rl.prototype,"connectors",void 0);rl=Zu([f("w3m-connect-walletconnect-widget")],rl);const Em=b`
  :host {
    margin-top: var(--wui-spacing-3xs);
  }
  wui-separator {
    margin: var(--wui-spacing-m) calc(var(--wui-spacing-m) * -1) var(--wui-spacing-xs)
      calc(var(--wui-spacing-m) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }
`;var Gu=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let za=class extends w{constructor(){super(),this.unsubscribe=[],this.connectors=P.state.connectors,this.unsubscribe.push(P.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const{custom:e,recent:t,announced:r,coinbase:o,injected:n,recommended:a,featured:s,external:p}=this.getConnectorsByType();return l`
      <wui-flex flexDirection="column" gap="xs">
        <w3m-connect-walletconnect-widget></w3m-connect-walletconnect-widget>
        ${t.length?l`<w3m-connect-recent-widget></w3m-connect-recent-widget>`:null}
        ${r.length?l`<w3m-connect-announced-widget></w3m-connect-announced-widget>`:null}
        ${n.length?l`<w3m-connect-injected-widget></w3m-connect-injected-widget>`:null}
        ${s.length?l`<w3m-connect-featured-widget></w3m-connect-featured-widget>`:null}
        ${e!=null&&e.length?l`<w3m-connect-custom-widget></w3m-connect-custom-widget>`:null}
        ${o?l`<w3m-connect-coinbase-widget></w3m-connect-coinbase-widget>`:null}
        ${p.length?l`<w3m-connect-external-widget></w3m-connect-external-widget>`:null}
        ${a.length?l`<w3m-connect-recommended-widget></w3m-connect-recommended-widget>`:null}
      </wui-flex>
    `}getConnectorsByType(){const{featured:e,recommended:t}=V.state,{customWallets:r}=A.state,o=oe.getRecentWallets(),n=Ba.filterOutDuplicateWallets(t),a=Ba.filterOutDuplicateWallets(e),s=this.connectors.filter(B=>B.type==="ANNOUNCED"),p=this.connectors.filter(B=>B.type==="INJECTED"),h=this.connectors.filter(B=>B.type==="EXTERNAL"),x=this.connectors.find(B=>B.id===Te.COINBASE_SDK_CONNECTOR_ID),D=y.state.activeChain===Ee.CHAIN.EVM?A.state.enableEIP6963:!0;return{custom:r,recent:o,coinbase:x,external:h,announced:D?s:[],injected:D?p:[],recommended:n,featured:a}}};za.styles=Em;Gu([d()],za.prototype,"connectors",void 0);za=Gu([f("w3m-connector-list")],za);var Wl=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Va=class extends w{constructor(){super(),this.unsubscribe=[],this.connectors=P.state.connectors,this.count=V.state.count,this.unsubscribe.push(P.subscribeKey("connectors",e=>this.connectors=e),V.subscribeKey("count",e=>this.count=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.connectors.find(s=>s.type==="WALLET_CONNECT"),{allWallets:t}=A.state;if(!e||t==="HIDE"||t==="ONLY_MOBILE"&&!k.isMobile())return null;const r=V.state.featured.length,o=this.count+r,n=o<10?o:Math.floor(o/10)*10,a=n<o?`${n}+`:`${n}`;return l`
      <wui-list-wallet
        name="All Wallets"
        walletIcon="allWallets"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${a}
        tagVariant="shade"
        data-testid="all-wallets"
      ></wui-list-wallet>
    `}onAllWallets(){R.sendEvent({type:"track",event:"CLICK_ALL_WALLETS"}),g.push("AllWallets")}};Wl([d()],Va.prototype,"connectors",void 0);Wl([d()],Va.prototype,"count",void 0);Va=Wl([f("w3m-all-wallets-widget")],Va);var $m=function(i,e,t,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(n=(o<3?a(n):o>3?a(e,t,n):a(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};let Uc=class extends w{constructor(){super(...arguments),this.socialProvider=oe.getConnectedSocialProvider(),this.socialUsername=oe.getConnectedSocialUsername()}render(){const e=oe.getConnectedConnector(),t=P.getAuthConnector();if(!t||e!=="AUTH")return this.style.cssText="display: none",null;const r=t.provider.getEmail()??"";return l`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon=${this.socialProvider??"mail"}
        iconSize=${this.socialProvider?"xxl":"sm"}
        data-testid="w3m-account-email-update"
        ?chevron=${!this.socialProvider}
        @click=${()=>{this.onGoToUpdateEmail(r,this.socialProvider)}}
      >
        <wui-text variant="paragraph-500" color="fg-100">${this.getAuthName(r)}</wui-text>
      </wui-list-item>
    `}onGoToUpdateEmail(e,t){t||g.push("UpdateEmailWallet",{email:e})}getAuthName(e){return this.socialUsername?this.socialProvider==="discord"&&this.socialUsername.endsWith("0")?this.socialUsername.slice(0,-1):this.socialUsername:e.length>30?`${e.slice(0,-3)}...`:e}};Uc=$m([f("w3m-account-auth-button")],Uc);let Wc=!1;class Rm{constructor(e){this.initPromise=void 0,this.setIsConnected=(t,r)=>{m.setIsConnected(t,r)},this.getIsConnectedState=()=>m.state.isConnected,this.setAllAccounts=(t,r)=>{m.setAllAccounts(t||[],r),A.setHasMultipleAddresses((t==null?void 0:t.length)>1)},this.addAddressLabel=(t,r)=>{m.addAddressLabel(t,r)},this.removeAddressLabel=t=>{m.removeAddressLabel(t)},this.getCaipAddress=()=>m.state.caipAddress,this.setCaipAddress=(t,r)=>{m.setCaipAddress(t,r)},this.setBalance=(t,r,o)=>{m.setBalance(t,r,o)},this.setProfileName=(t,r)=>{m.setProfileName(t,r)},this.setProfileImage=(t,r)=>{m.setProfileImage(t,r)},this.resetAccount=t=>{m.resetAccount(t)},this.setCaipNetwork=t=>{T.setCaipNetwork(t)},this.getCaipNetwork=()=>T.state.caipNetwork,this.setRequestedCaipNetworks=(t,r)=>{T.setRequestedCaipNetworks(t,r)},this.getApprovedCaipNetworkIds=()=>T.getApprovedCaipNetworkIds(),this.setApprovedCaipNetworksData=()=>T.setApprovedCaipNetworksData(),this.resetNetwork=()=>{T.resetNetwork()},this.setConnectors=t=>{P.setConnectors(t)},this.addConnector=t=>{P.addConnector(t)},this.getConnectors=()=>P.getConnectors(),this.resetWcConnection=()=>{G.resetWcConnection()},this.fetchIdentity=t=>ke.fetchIdentity(t),this.setAddressExplorerUrl=(t,r)=>{m.setAddressExplorerUrl(t,r)},this.setSmartAccountDeployed=(t,r)=>{m.setSmartAccountDeployed(t,r)},this.setConnectedWalletInfo=(t,r)=>{m.setConnectedWalletInfo(t,r)},this.setSmartAccountEnabledNetworks=(t,r)=>{T.setSmartAccountEnabledNetworks(t,r)},this.setPreferredAccountType=(t,r)=>{m.setPreferredAccountType(t,r)},this.getWalletConnectName=t=>Ft.getNamesForAddress(t),this.resolveWalletConnectName=async t=>{var a;const r=t.replace(Ee.WC_NAME_SUFFIX,""),o=await Ft.resolveName(r);return((a=(Object.values(o==null?void 0:o.addresses)||[])[0])==null?void 0:a.address)||!1},this.setEIP6963Enabled=t=>{A.setEIP6963Enabled(t)},this.setClientId=t=>{ke.setClientId(t)},this.initControllers(e),this.initOrContinue()}async open(e){await this.initOrContinue(),q.open(e)}async close(){await this.initOrContinue(),q.close()}setLoading(e){q.setLoading(e)}getThemeMode(){return Ae.state.themeMode}getThemeVariables(){return Ae.state.themeVariables}setThemeMode(e){Ae.setThemeMode(e),lu(Ae.state.themeMode)}setThemeVariables(e){Ae.setThemeVariables(e),qp(Ae.state.themeVariables)}subscribeTheme(e){return Ae.subscribe(e)}getWalletInfo(){return m.state.connectedWalletInfo}subscribeWalletInfo(e){return m.subscribeKey("connectedWalletInfo",e)}subscribeShouldUpdateToAddress(e){m.subscribeKey("shouldUpdateToAddress",e)}subscribeCaipNetworkChange(e){T.subscribeKey("caipNetwork",e)}getState(){return fi.state}subscribeState(e){return fi.subscribe(e)}showErrorMessage(e){z.showError(e)}showSuccessMessage(e){z.showSuccess(e)}getEvent(){return{...R.state}}subscribeEvents(e){return R.subscribe(e)}replace(e){g.replace(e)}redirect(e){g.push(e)}popTransactionStack(e){g.popTransactionStack(e)}isOpen(){return q.state.open}isTransactionStackEmpty(){return g.state.transactionStack.length===0}isTransactionShouldReplaceView(){var e;return(e=g.state.transactionStack[g.state.transactionStack.length-1])==null?void 0:e.replace}async initControllers(e){if(y.initialize([{networkControllerClient:e.networkControllerClient,connectionControllerClient:e.connectionControllerClient,chain:e.chain}]),T.setDefaultCaipNetwork(e.defaultChain,e.chain),A.setProjectId(e.projectId),A.setAllWallets(e.allWallets),A.setIncludeWalletIds(e.includeWalletIds),A.setExcludeWalletIds(e.excludeWalletIds),A.setFeaturedWalletIds(e.featuredWalletIds),A.setTokens(e.tokens),A.setTermsConditionsUrl(e.termsConditionsUrl),A.setPrivacyPolicyUrl(e.privacyPolicyUrl),A.setEnableAnalytics(e.enableAnalytics),A.setCustomWallets(e.customWallets),A.setIsUniversalProvider(e.isUniversalProvider),A.setSdkVersion(e._sdkVersion),A.setOnrampEnabled(e.enableOnramp!==!1),A.setEnableSwaps(e.chain===Ee.CHAIN.EVM&&e.enableSwaps!==!1),e.metadata&&A.setMetadata(e.metadata),e.themeMode&&Ae.setThemeMode(e.themeMode),e.themeVariables&&Ae.setThemeVariables(e.themeVariables),e.disableAppend&&A.setDisableAppend(!!e.disableAppend),e.allowUnsupportedChain&&T.setAllowUnsupportedChain(e.allowUnsupportedChain),e.siweControllerClient){const{SIWEController:t}=await nr(async()=>{const{SIWEController:r}=await import("./index-DkkgsBGE.js");return{SIWEController:r}},__vite__mapDeps([0,1,2,3]),import.meta.url);t.setSIWEClient(e.siweControllerClient)}}async initOrContinue(){return!this.initPromise&&!Wc&&k.isClient()&&(Wc=!0,this.initPromise=new Promise(async e=>{await Promise.all([nr(()=>import("./index-Cg8OeAZX.js"),__vite__mapDeps([4,1,2,3]),import.meta.url),nr(()=>import("./w3m-modal-ByG1BSkC.js"),__vite__mapDeps([5,1,2,3]),import.meta.url)]);const t=document.createElement("w3m-modal");A.state.disableAppend||document.body.insertAdjacentElement("beforeend",t),e()})),this.initPromise}}class Im extends Rm{constructor(t){const{universalProvider:r,namespaces:o,...n}=t;if(!r)throw new Error("web3modal:constructor - universalProvider is undefined");if(!n.projectId)throw new Error("web3modal:constructor - projectId is undefined");super({networkControllerClient:{switchCaipNetwork:async h=>{h&&this.universalProvider.setDefaultChain(h.id)},getApprovedCaipNetworksData:()=>{var _,D;const h=(D=(_=this.universalProvider)==null?void 0:_.session)==null?void 0:D.namespaces[this.requestedScope].accounts;return{supportsAllNetworks:!1,approvedCaipNetworkIds:h==null?void 0:h.map(B=>`${this.requestedScope}:`+B.split(":")[1])}}},connectionControllerClient:{connectWalletConnect:async h=>{this.universalProvider.events.on("display_uri",h),await this.universalProvider.connect({optionalNamespaces:this.requestedNamespaces}),this.universalProvider.removeListener("display_uri",h),this.syncAccount()},disconnect:async()=>{await this.universalProvider.disconnect(),this.syncAccount()}},featuredWalletIds:[],allowUnsupportedChain:!0,chain:Ee.CHAIN.EVM,isUniversalProvider:!0,_sdkVersion:`universal-appkit-solana-adapter-${Te.VERSION}`,enableOnramp:!1,...n});un(this,"hasSyncedConnectedAccount",!1);un(this,"options");un(this,"universalProvider");un(this,"requestedScope");un(this,"requestedNamespaces");un(this,"_onSyncAccount");this.options=t,this.requestedScope=Object.keys(o)[0],this.requestedNamespaces=o,this.universalProvider=r;const p="walletConnect";this.setConnectors([{id:p,explorerId:er.ConnectorExplorerIds[p],name:er.ConnectorNamesMap[p],imageId:er.ConnectorImageIds[p],type:er.ConnectorTypesMap[p],info:{rdns:p},chain:Ee.CHAIN.EVM}]),this.syncAccount(),this.syncNetwork(),this._onSyncAccount=this.syncAccount.bind(this),r.client.on("session_update",this._onSyncAccount),r.client.on("session_delete",this._onSyncAccount)}async disconnect(){await this.universalProvider.disconnect(),this.syncAccount()}async syncAccount(){var r,o,n,a,s,p;this.resetAccount();const t=this.universalProvider.session;if(t){const h=Object.keys(t.namespaces)[0],x=(o=(r=t.namespaces)==null?void 0:r[h])==null?void 0:o.accounts[0].split(":")[1];this.setIsConnected(!0),this.setCaipAddress((a=(n=t.namespaces)==null?void 0:n[h])==null?void 0:a.accounts[0]),this.setCaipNetwork({id:h+x,name:h,imageId:er.EIP155NetworkImageIds[x],imageUrl:(p=(s=this.options)==null?void 0:s.chainImages)==null?void 0:p[x],chain:Ee.CHAIN.EVM}),this.hasSyncedConnectedAccount=!0}else this.hasSyncedConnectedAccount&&(this.resetWcConnection(),this.resetNetwork())}syncNetwork(){var r,o;const t=this.requestedNamespaces[this.requestedScope].chains[0];this.setCaipNetwork({id:t,name:this.requestedScope,imageId:er.EIP155NetworkImageIds[t],imageUrl:(o=(r=this.options)==null?void 0:r.chainImages)==null?void 0:o[t],chain:Ee.CHAIN.EVM}),V.reFetchWallets()}}const Q5=Object.freeze(Object.defineProperty({__proto__:null,WalletConnectModal:Im},Symbol.toStringTag,{value:"Module"}));export{ct as $,m as A,vi as B,G as C,bi as D,R as E,lo as F,hr as G,Ds as H,xa as I,co as J,fr as K,kn as L,q as M,T as N,A as O,Dt as P,Sn as Q,g as R,oe as S,hn as T,H as U,Ca as V,ae as W,uo as X,Ut as Y,po as Z,kt as _,d as a,Ws as a0,ut as a1,fo as a2,_a as a3,wr as a4,Tn as a5,gr as a6,qt as a7,Ms as a8,Hi as a9,xo as aA,yo as aB,Rn as aC,Xe as aD,rt as aE,ka as aF,V as aG,k as aH,Ae as aI,Q5 as aJ,Yt as aa,wo as ab,ho as ac,mr as ad,Kt as ae,xi as af,vr as ag,mi as ah,br as ai,go as aj,xr as ak,An as al,Fi as am,Ta as an,mo as ao,Zi as ap,yi as aq,Ci as ar,vo as as,bo as at,yr as au,_i as av,Xt as aw,Cr as ax,En as ay,$n as az,z as b,f as c,C as d,ia as e,Mm as f,lu as g,qp as h,b as i,Ns as j,dr as k,pr as l,Ps as m,ao as n,ma as o,yn as p,Cn as q,w as r,at as s,so as t,_t as u,va as v,_n as w,l as x,Tt as y,ba as z};
