(function(e){function t(t){for(var n,c,o=t[0],u=t[1],s=t[2],l=0,f=[];l<o.length;l++)c=o[l],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&f.push(a[c][0]),a[c]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);p&&p(t);while(f.length)f.shift()();return i.push.apply(i,s||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,c=1;c<r.length;c++){var u=r[c];0!==a[u]&&(n=!1)}n&&(i.splice(t--,1),e=o(o.s=r[0]))}return e}var n={},a={app:0},i=[];function c(e){return o.p+"js/"+({about:"about"}[e]||e)+"."+{about:"5a073df2"}[e]+".js"}function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.e=function(e){var t=[],r=a[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=n);var i,u=document.createElement("script");u.charset="utf-8",u.timeout=120,o.nc&&u.setAttribute("nonce",o.nc),u.src=c(e);var s=new Error;i=function(t){u.onerror=u.onload=null,clearTimeout(l);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+n+": "+i+")",s.name="ChunkLoadError",s.type=n,s.request=i,r[1](s)}a[e]=void 0}};var l=setTimeout((function(){i({type:"timeout",target:u})}),12e4);u.onerror=u.onload=i,document.head.appendChild(u)}return Promise.all(t)},o.m=e,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/mtrx3700-major-project-website/",o.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var p=s;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("cd49")},"1d19":function(e,t,r){"use strict";r("f1a4")},7043:function(e,t,r){},a370:function(e,t,r){"use strict";r("7043")},cd49:function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("7a23"),a=Object(n["l"])(" Home "),i=Object(n["l"])(" About ");function c(e,t){var r=Object(n["O"])("va-button"),c=Object(n["O"])("va-navbar-item"),o=Object(n["O"])("router-link"),u=Object(n["O"])("va-navbar"),s=Object(n["O"])("router-view");return Object(n["E"])(),Object(n["h"])(n["a"],null,[Object(n["m"])(u,null,{center:Object(n["Z"])((function(){return[Object(n["m"])(o,{to:"/"},{default:Object(n["Z"])((function(){return[Object(n["m"])(c,null,{default:Object(n["Z"])((function(){return[Object(n["m"])(r,null,{default:Object(n["Z"])((function(){return[a]})),_:1})]})),_:1})]})),_:1}),Object(n["m"])(o,{to:"/about"},{default:Object(n["Z"])((function(){return[Object(n["m"])(c,null,{default:Object(n["Z"])((function(){return[Object(n["m"])(r,null,{default:Object(n["Z"])((function(){return[i]})),_:1})]})),_:1})]})),_:1})]})),_:1}),Object(n["m"])(s)],64)}r("a370");var o=r("6b0d"),u=r.n(o);const s={},l=u()(s,[["render",c]]);var p=l;r("9483");r("d3b7"),r("3ca3"),r("ddb0");var f=r("6c02"),b={class:"home"},d=Object(n["i"])("h1",{class:"display-1"},"Home Page",-1),h=Object(n["l"])(" Connect "),v={key:0};function m(e,t,r,a,i,c){var o=Object(n["O"])("va-button"),u=Object(n["O"])("ports-list"),s=Object(n["O"])("logger-display"),l=Object(n["O"])("manual-move"),p=Object(n["O"])("stepper-move"),f=Object(n["O"])("g-code-upload");return Object(n["E"])(),Object(n["h"])(n["a"],null,[Object(n["i"])("div",b,[d,Object(n["m"])(o,{onClick:e.connectPort},{default:Object(n["Z"])((function(){return[h]})),_:1},8,["onClick"])]),Object(n["m"])(u,{plotter:e.plotter},null,8,["plotter"]),Object(n["m"])(s),e.connected?(Object(n["E"])(),Object(n["h"])("div",v,[Object(n["m"])(l,{plotter:e.plotter},null,8,["plotter"]),Object(n["m"])(p,{plotter:e.plotter},null,8,["plotter"]),Object(n["m"])(f,{plotter:e.plotter},null,8,["plotter"]),Object(n["i"])("button",{onClick:t[0]||(t[0]=function(){return e.test&&e.test.apply(e,arguments)})},"Test")])):Object(n["g"])("",!0)],64)}var O=r("1da1"),j=r("d4ec"),w=r("bee2"),k=r("262e"),g=r("2caf"),y=(r("5cc6"),r("9a8c"),r("a975"),r("735e"),r("c1ac"),r("d139"),r("3a7b"),r("d5d6"),r("82f8"),r("e91f"),r("60bd"),r("5f96"),r("3280"),r("3fcc"),r("ca91"),r("25a1"),r("cd26"),r("3c5d"),r("2954"),r("649e"),r("219c"),r("170b"),r("b39a"),r("72f7"),r("96cf"),r("9ab4")),E=r("ce1f"),T=Object(n["i"])("h1",{class:"display-1"},"Ports List",-1),R=Object(n["l"])(" Get Ports ");function x(e,t,r,a,i,c){var o=Object(n["O"])("va-button");return Object(n["E"])(),Object(n["h"])(n["a"],null,[T,Object(n["m"])(o,{onClick:e.getPorts},{default:Object(n["Z"])((function(){return[R]})),_:1},8,["onClick"]),Object(n["l"])(" "+Object(n["R"])(e.ports),1)],64)}r("25f0"),r("99af");var S=r("5c7d"),P=r.n(S),_=r("d306"),A=r.n(_),L=function(e){Object(k["a"])(r,e);var t=Object(g["a"])(r);function r(){return Object(j["a"])(this,r),t.apply(this,arguments)}return Object(w["a"])(r,null,[{key:"init",value:function(){A.a.reg(P.a),P.a.enableAll(),A.a.apply(P.a,{format:function(e,t,r){return"".concat(r," ").concat(e," ").concat(t,":")}}),this.clear()}},{key:"addLine",value:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var n=t.toString();n.length>0&&this.logs.push(n)}},{key:"clear",value:function(){var e;do{e=this.logs.pop()}while(void 0!==e)}},{key:"log",value:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];P.a.log(t),this.addLine(t)}},{key:"info",value:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];P.a.info(t),this.addLine(t)}},{key:"warn",value:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];P.a.warn(t),this.addLine(t)}},{key:"error",value:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];P.a.error(t),this.addLine(t)}}]),r}(E["b"]);L.logs=Object(n["J"])([]);var C=function(){function e(){Object(j["a"])(this,e),this.ack=!0,this.port=null,this.receiveCallback=null,this.timeoutIntervalId=-1,this.currentPacket=[]}return Object(w["a"])(e,[{key:"open",value:function(){var e=Object(O["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(null!==this.receiveCallback){e.next=2;break}throw new Error("Receive Callback has not been set");case 2:return e.prev=2,e.next=5,navigator.serial.requestPort();case 5:return t=e.sent,L.info("Opening port with 9600 baud"),e.next=9,t.open({baudRate:9600});case 9:this.port=t,e.next=15;break;case 12:e.prev=12,e.t0=e["catch"](2),L.error(e.t0);case 15:case"end":return e.stop()}}),e,this,[[2,12]])})));function t(){return e.apply(this,arguments)}return t}()},{key:"write",value:function(){var e=Object(O["a"])(regeneratorRuntime.mark((function e(t){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(null!==this.port){e.next=2;break}throw new Error("Write called on Null Port");case 2:if(null!==this.port.writable){e.next=4;break}throw new Error("Writer is not Writable");case 4:return r=new Uint8Array(t.byteLength+1),r.set(t),r.set(new Uint8Array([0]),t.byteLength),n=this.port.writable.getWriter(),this.ack=!1,L.info(r),e.next=12,n.write(r);case 12:L.info("Finished Write"),n.releaseLock();case 14:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"readPort",value:function(){var e=Object(O["a"])(regeneratorRuntime.mark((function e(){var t,r,n,a,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(null!==this.port){e.next=2;break}throw new Error("Read called on Null Port");case 2:L.info("Starting Read Loop");case 3:if(!this.port.readable){e.next=28;break}t=this.port.readable.getReader(),e.prev=5,r=!0;case 7:if(!r){e.next=18;break}return e.next=10,t.read();case 10:if(n=e.sent,a=n.value,i=n.done,!i){e.next=15;break}return e.abrupt("break",18);case 15:void 0!==a&&this.addToPacket(a),e.next=7;break;case 18:e.next=23;break;case 20:e.prev=20,e.t0=e["catch"](5),L.error(e.t0.toString());case 23:return e.prev=23,t.releaseLock(),e.finish(23);case 26:e.next=3;break;case 28:case"end":return e.stop()}}),e,this,[[5,20,23,26]])})));function t(){return e.apply(this,arguments)}return t}()},{key:"close",value:function(){var e=Object(O["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,null===(t=this.port)||void 0===t?void 0:t.close();case 2:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"addToPacket",value:function(t){clearTimeout(this.timeoutIntervalId);for(var r=0;r<t.length;r++)this.currentPacket.push(t[r]);this.timeoutIntervalId=setTimeout(this.emitPacket.bind(this),e.TIMEOUT_INTERVAL)}},{key:"emitPacket",value:function(){var e=Object(O["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(clearTimeout(this.timeoutIntervalId),!(this.currentPacket.length>0)){e.next=5;break}return e.next=4,null===(t=this.receiveCallback)||void 0===t?void 0:t.call(this,new Uint8Array(this.currentPacket));case 4:this.ack=!0;case 5:this.currentPacket=[];case 6:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"ackOrTimeout",value:function(){var t=Object(O["a"])(regeneratorRuntime.mark((function t(r){var n=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t){var a=void 0!==r?r:e.POLL_ACK_TIMEOUT,i=function r(){n.ack?t(!0):(a-=e.POLL_ACK_INTERVAL)<0?t(!1):setTimeout(r,e.POLL_ACK_INTERVAL)};setTimeout(i,e.POLL_ACK_INTERVAL)})));case 1:case"end":return t.stop()}}),t)})));function r(e){return t.apply(this,arguments)}return r}()}],[{key:"getPorts",value:function(){var e=Object(O["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,navigator.serial.getPorts();case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()}]),e}();C.TIMEOUT_INTERVAL=100,C.POLL_ACK_INTERVAL=100,C.POLL_ACK_TIMEOUT=3e5;r("c19f");var V=function(){function e(){Object(j["a"])(this,e),this.port=new C,this.rate=0,this.ack=!0}return Object(w["a"])(e,[{key:"connect",value:function(){var e=Object(O["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.port.receiveCallback=this.receiveData.bind(this),e.next=3,this.port.open();case 3:this.port.readPort();case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"sendGCode",value:function(){var e=Object(O["a"])(regeneratorRuntime.mark((function e(t){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.reset(),console.log(t.commands);case 2:if(r=t.nextLine(),null!==r){e.next=6;break}return e.abrupt("break",34);case 6:e.t0=r.command,e.next=e.t0===I.LINEAR_TRAVERSE?9:e.t0===I.STEPPER_STATE?12:e.t0===I.TOOL_SELECT?15:e.t0===I.TOOL_STATE?18:e.t0===I.HOME?21:24;break;case 9:return e.next=11,this.sendXY(r.data[0],r.data[1],r.data[2]);case 11:return e.abrupt("break",25);case 12:return e.next=14,this.sendStepperState(r.data[0]);case 14:return e.abrupt("break",25);case 15:return e.next=17,this.sendToolSelect(r.data[0]);case 17:return e.abrupt("break",25);case 18:return e.next=20,this.sendToolState(r.data[0]);case 20:return e.abrupt("break",25);case 21:return e.next=23,this.sendHome();case 23:return e.abrupt("break",25);case 24:throw new Error("Unknown Command ".concat(r.command));case 25:return e.next=27,this.port.ackOrTimeout();case 27:if(n=e.sent,n){e.next=30;break}throw new Error("Timed out waiting for ack from plotter");case 30:if(this.ack){e.next=32;break}throw new Error("Invalid ack from plotter");case 32:e.next=2;break;case 34:L.info("G Code Finished");case 35:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"sendStepperState",value:function(){var e=Object(O["a"])(regeneratorRuntime.mark((function e(t){var r,n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=new ArrayBuffer(2),n=new DataView(r),n.setUint8(0,I.STEPPER_STATE),n.setUint8(1,t),a=new Uint8Array(r),e.next=7,this.writePlotter(a);case 7:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"sendToolSelect",value:function(){var e=Object(O["a"])(regeneratorRuntime.mark((function e(t){var r,n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=new ArrayBuffer(2),n=new DataView(r),n.setUint8(0,I.TOOL_SELECT),n.setUint8(1,t),a=new Uint8Array(r),e.next=7,this.writePlotter(a);case 7:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"sendToolState",value:function(){var e=Object(O["a"])(regeneratorRuntime.mark((function e(t){var r,n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=new ArrayBuffer(2),n=new DataView(r),n.setUint8(0,I.TOOL_STATE),n.setUint8(1,t),a=new Uint8Array(r),e.next=7,this.writePlotter(a);case 7:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"sendHome",value:function(){var e=Object(O["a"])(regeneratorRuntime.mark((function e(){var t,r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=new ArrayBuffer(1),r=new DataView(t),r.setUint8(0,I.HOME),n=new Uint8Array(t),e.next=6,this.writePlotter(n);case 6:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"sendXY",value:function(){var t=Object(O["a"])(regeneratorRuntime.mark((function t(r,n,a){var i,c,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return i=new ArrayBuffer(13),c=new DataView(i),this.rate=a||this.rate,c.setUint8(0,I.LINEAR_TRAVERSE),c.setFloat32(1,r,e.endian),c.setFloat32(5,n,e.endian),c.setFloat32(9,this.rate,e.endian),o=new Uint8Array(i),t.next=10,this.writePlotter(o);case 10:case"end":return t.stop()}}),t,this)})));function r(e,r,n){return t.apply(this,arguments)}return r}()},{key:"sendMove",value:function(){var t=Object(O["a"])(regeneratorRuntime.mark((function t(r){var n,a,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=new ArrayBuffer(9),a=new DataView(n),a.setUint8(0,I.LINEAR_TRAVERSE),a.setFloat32(1,1,e.endian),a.setFloat32(5,1,e.endian),i=new Uint8Array(n),t.next=8,this.writePlotter(i);case 8:case"end":return t.stop()}}),t,this)})));function r(e){return t.apply(this,arguments)}return r}()},{key:"sendStepper",value:function(){var t=Object(O["a"])(regeneratorRuntime.mark((function t(r,n,a){var i,c,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return i=new ArrayBuffer(6),c=new DataView(i),c.setUint8(0,I.MOVE_STEPPER),c.setUint8(1,r),c.setUint16(2,n,e.endian),c.setUint16(4,a,e.endian),o=new Uint8Array(i),t.next=9,this.writePlotter(o);case 9:case"end":return t.stop()}}),t,this)})));function r(e,r,n){return t.apply(this,arguments)}return r}()},{key:"writePlotter",value:function(){var e=Object(O["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.ack=!1,e.next=3,this.port.write(t);case 3:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"receiveData",value:function(){var e=Object(O["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:r=t[0],e.t0=r,e.next=e.t0===I.LINEAR_TRAVERSE?4:e.t0===I.MOVE_STEPPER?7:e.t0===I.HOME?10:e.t0===I.STEPPER_STATE?13:e.t0===I.TOOL_SELECT?16:e.t0===I.TOOL_STATE?19:22;break;case 4:return L.info("Linear Command Received from Plotter"),this.ack=!0,e.abrupt("break",25);case 7:return L.info("Move Stepper Received from Plotter"),this.ack=!0,e.abrupt("break",25);case 10:return L.info("Received Home from Plotter"),this.ack=!0,e.abrupt("break",25);case 13:return L.info("Received Stepper State from Plotter"),this.ack=!0,e.abrupt("break",25);case 16:return L.info("Received Tool Select from Plotter"),this.ack=!0,e.abrupt("break",25);case 19:return L.info("Received Tool State from Plotter"),this.ack=!0,e.abrupt("break",25);case 22:throw new Error("Unknown Response from Plotter");case 25:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()}]),e}();V.endian=!0;var I,N,U,M,D,G,F=function e(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];Object(j["a"])(this,e),this.command=t,this.data=r};(function(e){e[e["NONE"]=0]="NONE",e[e["LINEAR_TRAVERSE"]=1]="LINEAR_TRAVERSE",e[e["MOVE_STEPPER"]=2]="MOVE_STEPPER",e[e["TOOL_STATE"]=3]="TOOL_STATE",e[e["HOME"]=4]="HOME",e[e["STEPPER_STATE"]=5]="STEPPER_STATE",e[e["TOOL_SELECT"]=6]="TOOL_SELECT"})(I||(I={})),function(e){e[e["RETRACTED"]=0]="RETRACTED",e[e["ENGAGED"]=1]="ENGAGED"}(N||(N={})),function(e){e[e["PEN"]=0]="PEN",e[e["ERASER"]=1]="ERASER"}(U||(U={})),function(e){e[e["DISABLED"]=0]="DISABLED",e[e["ENABLED"]=1]="ENABLED"}(M||(M={})),function(e){e[e["LEFT"]=0]="LEFT",e[e["RIGHT"]=1]="RIGHT"}(D||(D={})),function(e){e[e["LEFT"]=0]="LEFT",e[e["UP"]=1]="UP",e[e["RIGHT"]=2]="RIGHT",e[e["DOWN"]=3]="DOWN"}(G||(G={}));var H=function(e){Object(k["a"])(r,e);var t=Object(g["a"])(r);function r(){var e;return Object(j["a"])(this,r),e=t.apply(this,arguments),e.ports=null,e.plotter=null,e}return Object(w["a"])(r,[{key:"mounted",value:function(){this.getPorts()}},{key:"getPorts",value:function(){var e=Object(O["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return L.info("Getting Ports"),e.next=3,C.getPorts();case 3:this.ports=e.sent;case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}]),r}(E["b"]);H=Object(y["a"])([Object(E["a"])({props:{plotter:V}})],H);var Z=H;const B=u()(Z,[["render",x]]);var X=B,Y={class:"hello"},W=Object(n["k"])('<p data-v-05c737f4> For a guide and recipes on how to configure / customize this project,<br data-v-05c737f4> check out the <a href="https://cli.vuejs.org" target="_blank" rel="noopener" data-v-05c737f4>vue-cli documentation</a>. </p><h3 data-v-05c737f4>Installed CLI Plugins</h3><ul data-v-05c737f4><li data-v-05c737f4><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener" data-v-05c737f4>babel</a></li><li data-v-05c737f4><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa" target="_blank" rel="noopener" data-v-05c737f4>pwa</a></li><li data-v-05c737f4><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank" rel="noopener" data-v-05c737f4>router</a></li><li data-v-05c737f4><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex" target="_blank" rel="noopener" data-v-05c737f4>vuex</a></li><li data-v-05c737f4><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener" data-v-05c737f4>eslint</a></li><li data-v-05c737f4><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript" target="_blank" rel="noopener" data-v-05c737f4>typescript</a></li></ul><h3 data-v-05c737f4>Essential Links</h3><ul data-v-05c737f4><li data-v-05c737f4><a href="https://vuejs.org" target="_blank" rel="noopener" data-v-05c737f4>Core Docs</a></li><li data-v-05c737f4><a href="https://forum.vuejs.org" target="_blank" rel="noopener" data-v-05c737f4>Forum</a></li><li data-v-05c737f4><a href="https://chat.vuejs.org" target="_blank" rel="noopener" data-v-05c737f4>Community Chat</a></li><li data-v-05c737f4><a href="https://twitter.com/vuejs" target="_blank" rel="noopener" data-v-05c737f4>Twitter</a></li><li data-v-05c737f4><a href="https://news.vuejs.org" target="_blank" rel="noopener" data-v-05c737f4>News</a></li></ul><h3 data-v-05c737f4>Ecosystem</h3><ul data-v-05c737f4><li data-v-05c737f4><a href="https://router.vuejs.org" target="_blank" rel="noopener" data-v-05c737f4>vue-router</a></li><li data-v-05c737f4><a href="https://vuex.vuejs.org" target="_blank" rel="noopener" data-v-05c737f4>vuex</a></li><li data-v-05c737f4><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener" data-v-05c737f4>vue-devtools</a></li><li data-v-05c737f4><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener" data-v-05c737f4>vue-loader</a></li><li data-v-05c737f4><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener" data-v-05c737f4>awesome-vue</a></li></ul>',7);function K(e,t,r,a,i,c){return Object(n["E"])(),Object(n["h"])("div",Y,[Object(n["i"])("h1",null,Object(n["R"])(e.msg),1),W])}var J=function(e){Object(k["a"])(r,e);var t=Object(g["a"])(r);function r(){return Object(j["a"])(this,r),t.apply(this,arguments)}return r}(E["b"]);J=Object(y["a"])([Object(E["a"])({props:{msg:String}})],J);var q=J;r("1d19");const z=u()(q,[["render",K],["__scopeId","data-v-05c737f4"]]);var Q=z,$=Object(n["i"])("div",{class:"row"},[Object(n["i"])("div",{class:"flex md12"},[Object(n["i"])("h3",{class:"display-3"},"Logger Display")])],-1),ee={class:"row"},te={class:"va-table-responsive flex md12"},re={class:"va-table"},ne=Object(n["i"])("thead",null,[Object(n["i"])("tr",null,[Object(n["i"])("th",null,"Message")])],-1),ae=Object(n["l"])("Clear");function ie(e,t,r,a,i,c){var o=Object(n["O"])("va-button"),u=Object(n["O"])("va-card");return Object(n["E"])(),Object(n["f"])(u,{color:"background",style:{padding:"0.75rem",margin:"2rem"}},{default:Object(n["Z"])((function(){return[$,Object(n["i"])("div",ee,[Object(n["i"])("div",te,[Object(n["i"])("table",re,[ne,Object(n["i"])("tbody",null,[(Object(n["E"])(!0),Object(n["h"])(n["a"],null,Object(n["M"])(e.logs,(function(e){return Object(n["E"])(),Object(n["h"])("tr",{key:e},[Object(n["i"])("td",null,Object(n["R"])(e),1)])})),128))])])])]),Object(n["m"])(o,{onClick:e.clear},{default:Object(n["Z"])((function(){return[ae]})),_:1},8,["onClick"])]})),_:1})}var ce=function(e){Object(k["a"])(r,e);var t=Object(g["a"])(r);function r(){return Object(j["a"])(this,r),t.apply(this,arguments)}return Object(w["a"])(r,[{key:"logs",get:function(){return L.logs}},{key:"clear",value:function(){L.clear()}}]),r}(E["b"]);const oe=u()(ce,[["render",ie]]);var ue=oe,se={class:"row"},le={class:"flex md12"},pe={class:"row"},fe={class:"flex md12"},be={class:"row"},de={class:"flex md12"},he={class:"row",style:{margin:"2rem"}},ve={class:"flex md3"},me={class:"flex md3"},Oe={class:"flex md3"},je={class:"flex md3"},we=Object(n["l"])(" Send X Y ");function ke(e,t,r,a,i,c){var o=Object(n["O"])("va-button"),u=Object(n["O"])("va-input"),s=Object(n["O"])("va-card");return Object(n["E"])(),Object(n["f"])(s,{color:"background",style:{padding:"0.75rem",margin:"2rem"}},{default:Object(n["Z"])((function(){return[Object(n["i"])("div",se,[Object(n["i"])("div",le,[Object(n["m"])(o,{onClick:t[0]||(t[0]=function(t){return e.sendMove(e.PlotterDirections.UP)}),icon:"keyboard_arrow_up"})])]),Object(n["i"])("div",pe,[Object(n["i"])("div",fe,[Object(n["m"])(o,{onClick:t[1]||(t[1]=function(t){return e.sendMove(e.PlotterDirections.LEFT)}),icon:"keyboard_arrow_left"}),Object(n["m"])(o,{icon:"block"}),Object(n["m"])(o,{onClick:t[2]||(t[2]=function(t){return e.sendMove(e.PlotterDirections.RIGHT)}),icon:"keyboard_arrow_right"})])]),Object(n["i"])("div",be,[Object(n["i"])("div",de,[Object(n["m"])(o,{onClick:t[3]||(t[3]=function(t){return e.sendMove(e.PlotterDirections.DOWN)}),icon:"keyboard_arrow_down"})])]),Object(n["i"])("div",he,[Object(n["i"])("div",ve,[Object(n["m"])(u,{modelValue:e.x,"onUpdate:modelValue":t[4]||(t[4]=function(t){return e.x=t}),modelModifiers:{number:!0},type:"number",label:"X"},null,8,["modelValue"])]),Object(n["i"])("div",me,[Object(n["m"])(u,{modelValue:e.y,"onUpdate:modelValue":t[5]||(t[5]=function(t){return e.y=t}),modelModifiers:{number:!0},type:"number",label:"Y"},null,8,["modelValue"])]),Object(n["i"])("div",Oe,[Object(n["m"])(u,{modelValue:e.rate,"onUpdate:modelValue":t[6]||(t[6]=function(t){return e.rate=t}),modelModifiers:{number:!0},type:"number",label:"Rate"},null,8,["modelValue"])]),Object(n["i"])("div",je,[Object(n["m"])(o,{onClick:e.sendXY},{default:Object(n["Z"])((function(){return[we]})),_:1},8,["onClick"])])])]})),_:1})}var ge=function(e){Object(k["a"])(r,e);var t=Object(g["a"])(r);function r(){var e;return Object(j["a"])(this,r),e=t.apply(this,arguments),e.PlotterDirections=G,e.x=0,e.y=0,e.rate=0,e}return Object(w["a"])(r,[{key:"sendXY",value:function(){var e=Object(O["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.plotter.sendXY(this.x,this.y,this.rate);case 2:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"sendMove",value:function(){var e=Object(O["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.plotter.sendMove(t);case 2:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()}]),r}(E["b"]);ge=Object(y["a"])([Object(E["a"])({props:{plotter:V}})],ge);var ye=ge;const Ee=u()(ye,[["render",ke]]);var Te=Ee,Re={class:"row"},xe={class:"flex md3"},Se={class:"flex md3"},Pe={class:"flex md3"},_e={class:"flex md3"},Ae=Object(n["l"])(" Send Stepper Command ");function Le(e,t,r,a,i,c){var o=Object(n["O"])("va-select"),u=Object(n["O"])("va-input"),s=Object(n["O"])("va-button"),l=Object(n["O"])("va-card");return Object(n["E"])(),Object(n["f"])(l,{color:"background",style:{padding:"0.75rem",margin:"2rem"}},{default:Object(n["Z"])((function(){return[Object(n["i"])("div",Re,[Object(n["i"])("div",xe,[Object(n["m"])(o,{modelValue:e.stepper,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.stepper=t}),options:e.stepperOptions,label:"Stepper"},null,8,["modelValue","options"])]),Object(n["i"])("div",Se,[Object(n["m"])(u,{modelValue:e.steps,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.steps=t}),modelModifiers:{number:!0},type:"number",label:"Steps"},null,8,["modelValue"])]),Object(n["i"])("div",Pe,[Object(n["m"])(u,{modelValue:e.velocity,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.velocity=t}),modelModifiers:{number:!0},type:"number",label:"Velocity"},null,8,["modelValue"])]),Object(n["i"])("div",_e,[Object(n["m"])(s,{onClick:e.sendStepper},{default:Object(n["Z"])((function(){return[Ae]})),_:1},8,["onClick"])])])]})),_:1})}r("d81d"),r("4de4"),r("b64b"),r("a9e3");var Ce=function(e){Object(k["a"])(r,e);var t=Object(g["a"])(r);function r(){var e;return Object(j["a"])(this,r),e=t.apply(this,arguments),e.stepperOptions=Object.keys(D).filter((function(e){return!isNaN(Number(e))})).map((function(e){var t=D[e];return{text:t.toString(),value:parseInt(e)}})),e.stepper=e.stepperOptions[0],e.steps=0,e.velocity=0,e}return Object(w["a"])(r,[{key:"sendStepper",value:function(){var e=Object(O["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.plotter.sendStepper(this.stepper.value,this.steps,this.velocity);case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}]),r}(E["b"]);Ce=Object(y["a"])([Object(E["a"])({props:{plotter:V}})],Ce);var Ve=Ce;const Ie=u()(Ve,[["render",Le]]);var Ne=Ie,Ue={class:"row"},Me={class:"flex md3"},De={class:"flex md3"},Ge=Object(n["l"])(" Send ");function Fe(e,t,r,a,i,c){var o=Object(n["O"])("va-file-upload"),u=Object(n["O"])("va-button"),s=Object(n["O"])("va-card");return Object(n["E"])(),Object(n["f"])(s,{color:"background",style:{padding:"0.75rem",margin:"2rem"}},{default:Object(n["Z"])((function(){return[Object(n["i"])("div",Ue,[Object(n["i"])("div",Me,[Object(n["m"])(o,{modelValue:e.file,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.file=t}),dropzone:""},null,8,["modelValue"])]),Object(n["i"])("div",De,[Object(n["m"])(u,{onClick:e.send},{default:Object(n["Z"])((function(){return[Ge]})),_:1},8,["onClick"])])])]})),_:1})}var He=r("b85c"),Ze=(r("ac1f"),r("1276"),r("466d"),function(){function e(t){Object(j["a"])(this,e),this.rawCommands=[],this.commands=[],this.counter=0,this.toolState=null,this.toolSelect=null,this.stepperState=null,this.file=t,this.reset()}return Object(w["a"])(e,[{key:"parse",value:function(){var e=Object(O["a"])(regeneratorRuntime.mark((function e(){var t,r,n,a,i,c,o,u,s,l,p,f,b,d,h,v,m,O,j;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Be(this.file);case 2:t=e.sent,this.rawCommands=t.split(/\r?\n/),L.info(this.rawCommands),this.reset(),this.commands=[],this.addInitCommands(),r=[],n=0,a=!1,i=this.commands,c=Object(He["a"])(this.rawCommands),e.prev=13,c.s();case 15:if((o=c.n()).done){e.next=71;break}if(u=o.value,s=u.match(/[GMT][0-9]+/),null!==s){e.next=20;break}throw new Error("No Valid Gcode Commands Found");case 20:e.t0=s[0],e.next="G0"===e.t0?23:"G1"===e.t0?34:"G28"===e.t0?45:"M17"===e.t0?48:"M18"===e.t0?50:"M808"===e.t0?52:"T1"===e.t0?64:"T2"===e.t0?66:68;break;case 23:if(this.setToolState(N.RETRACTED,i),l=u.match(/X[0-9.]+/),null!==l){e.next=27;break}throw new Error("No Valid X Value");case 27:if(p=u.match(/Y[0-9.]+/),null!==p){e.next=30;break}throw new Error("No Valid Y Value");case 30:return f=u.match(/F[0-9.]+/),b=new F(I.LINEAR_TRAVERSE,[l[0].substr(1),p[0].substr(1),null===f?null:f[0].substr(1)]),i.push(b),e.abrupt("break",69);case 34:if(this.setToolState(N.ENGAGED,i),d=u.match(/X[0-9.]+/),null!==d){e.next=38;break}throw new Error("No Valid X Value");case 38:if(h=u.match(/Y[0-9.]+/),null!==h){e.next=41;break}throw new Error("No Valid Y Value");case 41:return v=u.match(/F[0-9.]+/),m=new F(I.LINEAR_TRAVERSE,[d[0].substr(1),h[0].substr(1),null===v?null:v[0].substr(1)]),i.push(m),e.abrupt("break",69);case 45:return O=new F(I.HOME),i.push(O),e.abrupt("break",69);case 48:return this.setStepperState(M.ENABLED,i),e.abrupt("break",69);case 50:return this.setStepperState(M.DISABLED,i),e.abrupt("break",69);case 52:if(!a){e.next=57;break}for(;n>0;n--)this.commands=this.commands.concat(r);return a=!1,i=this.commands,e.abrupt("break",69);case 57:if(j=u.match(/L[0-9]+/),null!==j){e.next=60;break}throw new Error("No Valid L Value");case 60:return a=!0,n=parseInt(j[0].substr(1)),i=r,e.abrupt("break",69);case 64:return this.selectTool(U.PEN,i),e.abrupt("break",69);case 66:return this.selectTool(U.ERASER,i),e.abrupt("break",69);case 68:throw new Error("Invalid Gcode command ".concat(s[0]));case 69:e.next=15;break;case 71:e.next=76;break;case 73:e.prev=73,e.t1=e["catch"](13),c.e(e.t1);case 76:return e.prev=76,c.f(),e.finish(76);case 79:return e.abrupt("return",!0);case 80:case"end":return e.stop()}}),e,this,[[13,73,76,79]])})));function t(){return e.apply(this,arguments)}return t}()},{key:"reset",value:function(){this.counter=0}},{key:"nextLine",value:function(){return this.counter>=this.commands.length?null:this.commands[this.counter++]}},{key:"addInitCommands",value:function(){this.setToolState(N.RETRACTED),this.selectTool(U.PEN),this.setStepperState(M.ENABLED)}},{key:"addFinishCommands",value:function(){this.setStepperState(M.DISABLED)}},{key:"selectTool",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.commands;this.toolSelect!==e&&(t.push(new F(I.TOOL_SELECT,[e])),this.toolSelect=e)}},{key:"setToolState",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.commands;this.toolState!==e&&(t.push(new F(I.TOOL_STATE,[e])),this.toolState=e)}},{key:"setStepperState",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.commands;this.stepperState!==e&&(t.push(new F(I.STEPPER_STATE,[e])),this.stepperState=e)}}]),e}());function Be(e){return new Promise((function(t,r){var n=new FileReader;n.onload=function(e){if(null!==e.target){if("string"!==typeof e.target.result)throw new Error("Type is not string");t(e.target.result)}else r("Target is null")},n.onerror=function(e){return r(e)},n.readAsText(e)}))}var Xe=function(e){Object(k["a"])(r,e);var t=Object(g["a"])(r);function r(){var e;return Object(j["a"])(this,r),e=t.apply(this,arguments),e.file=[],e}return Object(w["a"])(r,[{key:"send",value:function(){var e=Object(O["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return L.info(this.file),t=new Ze(this.file[0]),e.next=4,t.parse();case 4:return e.next=6,this.plotter.sendGCode(t);case 6:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}]),r}(E["b"]);Xe=Object(y["a"])([Object(E["a"])({props:{plotter:V}})],Xe);var Ye=Xe;const We=u()(Ye,[["render",Fe]]);var Ke=We,Je=function(e){Object(k["a"])(r,e);var t=Object(g["a"])(r);function r(){var e;return Object(j["a"])(this,r),e=t.apply(this,arguments),e.plotter=null,e}return Object(w["a"])(r,[{key:"connected",get:function(){return null!==this.plotter}},{key:"setup",value:function(){var e="serial"in navigator;e||L.error("The Web Serial API is not supported.")}},{key:"connectPort",value:function(){var e=Object(O["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(null===this.plotter){e.next=2;break}throw new Error("Port already connected");case 2:this.plotter=new V,this.plotter.connect();case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"test",value:function(){var e=Object(O["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:null===(t=this.plotter)||void 0===t||t.port.write(new Uint8Array([1,2,3,4,5,6,7,8]));case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}]),r}(E["b"]);Je=Object(y["a"])([Object(E["a"])({components:{HelloWorld:Q,PortsList:X,LoggerDisplay:ue,ManualMove:Te,StepperMove:Ne,GCodeUpload:Ke}})],Je);var qe=Je;const ze=u()(qe,[["render",m]]);var Qe=ze,$e=[{path:"/",name:"Home",component:Qe},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))}}],et=Object(f["a"])({history:Object(f["b"])("/mtrx3700-major-project-website/"),routes:$e}),tt=et,rt=r("5502"),nt=Object(rt["a"])({state:{},mutations:{},actions:{},modules:{}}),at=r("46f3");r("4821");L.init();var it=Object(n["e"])(p);it.use(nt),it.use(tt),it.use(at["a"]),it.mount("#app")},f1a4:function(e,t,r){}});
//# sourceMappingURL=app.196e0f0e.js.map