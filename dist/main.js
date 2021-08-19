!function(t){var i={};function e(s){if(i[s])return i[s].exports;var h=i[s]={i:s,l:!1,exports:{}};return t[s].call(h.exports,h,h.exports,e),h.l=!0,h.exports}e.m=t,e.c=i,e.d=function(t,i,s){e.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:s})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,i){if(1&i&&(t=e(t)),8&i)return t;if(4&i&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(e.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&i&&"string"!=typeof t)for(var h in t)e.d(s,h,function(i){return t[i]}.bind(null,h));return s},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},e.p="/dist/",e(e.s=1)}([function(t,i,e){},function(t,i,e){"use strict";function s(t,i){for(var e=0;e<i.length;e++){var s=i[e];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}e.r(i);var h=function(){function t(i){!function(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}(this,t),this.game=i,this.width=213,this.height=137,this.reset()}var i,e,h;return i=t,(e=[{key:"reset",value:function(){this.x=this.game.width/2-this.width/2,this.y=this.game.height/2-2*this.height,this.dx=0,this.dy=0,this.innerRect={width:81,height:66},this.innerRect.x=this.x+this.innerRect.width/1.25,this.innerRect.y=this.y+this.innerRect.height/1.5}},{key:"draw",value:function(){this.game.ctx.beginPath(),this.game.ctx.rect(this.x,this.y,this.width,this.height),this.game.ctx.strokeStyle="#3c7c8b",this.game.ctx.lineWidth=5,this.game.ctx.stroke(),this.game.ctx.closePath(),this.game.ctx.beginPath(),this.game.ctx.rect(this.innerRect.x,this.innerRect.y,this.innerRect.width,this.innerRect.height),this.game.ctx.strokeStyle="##3c7c8b",this.game.ctx.lineWidth=5,this.game.ctx.stroke(),this.game.ctx.closePath()}},{key:"update",value:function(){(this.x+this.width>this.game.width||this.x<0)&&(this.dx=-this.dx),this.x+=this.dx,this.innerRect.x+=this.dx}}])&&s(i.prototype,e),h&&s(i,h),t}();function a(t,i){for(var e=0;e<i.length;e++){var s=i[e];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}var n=function(){function t(i){!function(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}(this,t),this.ball=document.getElementById("ballImg"),this.game=i,this.gravity=40,this.friction=.5,this.miss=document.getElementById("missNoise"),this.reset()}var i,e,s;return i=t,(e=[{key:"reset",value:function(){this.diameter=70,this.x=this.game.width/2-this.diameter/2,this.y=this.game.height-this.diameter/2-this.diameter,this.dx=0,this.dy=0,this.comingDown=!1,this.pos1=[this.x+this.diameter/2,this.y+this.diameter/2],this.pos2=null,this.shooting=!1}},{key:"random",value:function(){var t=Math.random()*(this.game.width-this.diameter);this.diameter=70,this.x=t,this.y=this.game.height-this.diameter/2-this.diameter,this.dx=0,this.dy=0,this.comingDown=!1,this.pos1=[this.x+this.diameter/2,this.y+this.diameter/2],this.pos2=null,this.shooting=!1}},{key:"draw",value:function(){this.game.ctx.drawImage(this.ball,this.x,this.y,this.diameter,this.diameter)}},{key:"update",value:function(){this.y<this.game.height/2&&(this.diameter*=.99),this.y+this.diameter<this.game.backboard.y&&(this.comingDown=!0,this.dx*=this.friction,this.dy=this.gravity),this.comingDown&&this.y+this.diameter*(5/6)>this.game.rim.y&&(this.game.rim.x1>this.x&&this.game.rim.x1<this.x+this.diameter?(this.dy=-this.dy,this.dy*=this.friction,this.dx-=5,this.miss.play()):this.game.rim.x2>this.x&&this.game.rim.x2<this.x+this.diameter?(this.dy=-this.dy,this.dy*=this.friction,this.dx+=5,this.miss.play()):(this.dy=this.gravity,this.dy*=this.friction)),this.x+=this.dx,this.y+=this.dy}}])&&a(i.prototype,e),s&&a(i,s),t}();var r=function t(i){!function(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}(this,t),i.ctx.canvas.addEventListener("mousedown",(function(t){i.basketball.pos2=null,i.basketball.shooting=!0}),!1),i.ctx.canvas.addEventListener("mouseup",(function(t){i.basketball.pos2=[t.clientX-i.ctx.canvas.offsetLeft,t.clientY-i.ctx.canvas.offsetTop];var e=Math.atan2(i.basketball.pos2[1]-i.basketball.pos1[1],i.basketball.pos2[0]-i.basketball.pos1[0]);i.basketball.dx=25*Math.cos(e),i.basketball.dy=25*Math.sin(e)}),!1),document.addEventListener("keydown",(function(t){switch(t.code){case"Space":i.running=!0}}),!1)};function o(t,i){for(var e=0;e<i.length;e++){var s=i[e];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}var c=function(){function t(i){!function(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}(this,t),this.game=i,this.backboard=this.game.backboard,this.reset()}var i,e,s;return i=t,(e=[{key:"reset",value:function(){this.x1=this.backboard.innerRect.x-5,this.x2=this.backboard.innerRect.x+this.backboard.innerRect.width+5,this.y=this.backboard.innerRect.y+this.backboard.innerRect.height}},{key:"draw",value:function(){this.game.ctx.beginPath(),this.game.ctx.moveTo(this.x1-this.game.ctx.lineWidth,this.y),this.game.ctx.lineTo(this.x2+this.game.ctx.lineWidth,this.y),this.game.ctx.strokeStyle="red",this.game.ctx.lineWidth=8,this.game.ctx.stroke(),this.game.ctx.closePath()}},{key:"update",value:function(){this.x1+=this.backboard.dx,this.x2+=this.backboard.dx}}])&&o(i.prototype,e),s&&o(i,s),t}();function l(t,i){for(var e=0;e<i.length;e++){var s=i[e];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}var d=function(){function t(i,e){!function(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}(this,t),this.ctx=i,this.width=this.ctx.canvas.width,this.height=this.ctx.canvas.height,this.backboard=new h(this),this.basketball=new n(this),this.rim=new c(this),this.scoreDiv=e,this.bestScore=document.getElementById("best"),this.bestScore.innerHTML=0,this.score=0,this.scored=!1,this.swish=document.getElementById("swishNoise"),this.running=!1,new r(this)}var i,e,s;return i=t,(e=[{key:"start",value:function(){this.backboard.reset(),this.rim.reset(),this.scored?(this.basketball.random(),this.score>=10?this.backboard.dx>=0?this.backboard.dx=2:this.backboard.dx=-2:this.score>=20&&(this.backboard.dx>=0?this.backboard.dx=4:this.backboard.dx=-4)):(this.score>this.bestScore.innerHTML&&(this.bestScore.innerHTML=this.score),this.score=0,this.basketball.reset()),this.scored=!1}},{key:"scoreBucket",value:function(){this.basketball.comingDown&&this.basketball.x>this.rim.x1&&this.basketball.x+this.basketball.diameter<this.rim.x2&&this.basketball.y+this.basketball.diameter/2>this.rim.y&&(this.score++,this.basketball.comingDown=!1,this.scored=!0,this.basketball.shooting=!1,this.swish.play()),this.score?this.scoreDiv.style.color="green":this.scoreDiv.style.color="red",this.scoreDiv.innerHTML=this.score}},{key:"draw",value:function(){this.backboard.draw(),this.basketball.dy<=0&&this.rim.draw(),this.basketball.draw(),this.basketball.dy>0&&this.rim.draw(),this.running||(this.ctx.rect(0,0,canvas.width,canvas.height),this.ctx.fillStyle="#dadde1",this.ctx.fill(),this.ctx.font="32px Roboto",this.ctx.fillStyle="#f2a154",this.ctx.textAlign="center",this.ctx.fillText("Press Spacebar to begin",this.width/2,this.height/2))}},{key:"update",value:function(){this.running&&(this.basketball.y+this.basketball.diameter>this.height||this.basketball.x+this.basketball.diameter>this.width||this.basketball.x<0?this.start():(this.backboard.update(),this.basketball.update(),this.rim.update()))}}])&&l(i.prototype,e),s&&l(i,s),t}(),b=(e(0),document.getElementById("canvas")),u=document.getElementById("score"),m=b.getContext("2d");b.width=900,b.height=800;var f=new d(m,u);!function t(){m.clearRect(0,0,b.width,b.height),f.update(),f.draw(),f.scoreBucket(),requestAnimationFrame(t)}()}]);
//# sourceMappingURL=main.js.map