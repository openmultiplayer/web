"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["69996"],{38054:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return a},default:function(){return u},frontMatter:function(){return s},metadata:function(){return r},toc:function(){return c}});var r=t(51316),i=t(85893),o=t(50065);let s={slug:"timers",title:"Timers module",authors:"y_less"},a=void 0,l={authorsImageUrls:[void 0]},c=[];function m(e){let n={admonition:"admonition",code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"This sneak-peek showcases improvements to the timers module in open.mp, introducing a more flexible and efficient API while maintaining backward compatibility."}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsx)(n.p,{children:"The content of the following post is out of date and has no reference to the current state of open.mp. The post is published here for archival purposes."})}),"\n",(0,i.jsx)(n.p,{children:"This is a sneak-peek at one of the improved modules we've done, for timers in open.mp:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'native SetTimer(const func[], msInterval, bool:repeat) = SetTimerEx;\nnative SetTimerEx(const func[], msInterval, bool:repeat, const params[], GLOBAL_TAG_TYPES:...);\nnative KillTimer(timer) = Timer_Kill;\n\n// CreateTimer\nnative Timer:Timer_Create(const func[], usDelay, usInterval, repeatCount, const params[] = "", GLOBAL_TAG_TYPES:...);\n\n// KillTimer\nnative bool:Timer_Kill(Timer:timer);\n\n// Return time till next call.\nnative Timer_GetTimeRemaining(Timer:timer);\n\n// Get number of calls left to make (0 for unlimited).\nnative Timer_GetCallsRemaining(Timer:timer);\n\n// Get `repeatCount` parameter.\nnative Timer_GetTotalCalls(Timer:timer);\n\n//  Get `usInterval` parameter.\nnative Timer_GetInterval(Timer:timer);\n\n// Reset time remaining till next call to `usInterval`.\nnative bool:Timer_Restart(Timer:timer);\n'})}),"\n",(0,i.jsx)(n.p,{children:"The first two are just for backwards-compatibility, the rest are the improved API:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'native Timer:Timer_Create(const func[], usDelay, usInterval, repeatCount, const params[] = "", GLOBAL_TAG_TYPES:...);\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"func"})," - Fairly obvious; what to call."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"usDelay"})," - Again obvious, the delay before the call (in microseconds)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"usInterval"})," - What to reset usDelay to after the first call. So if you wanted a timer on the hour every hour, but it was 8:47am right now, the call would be ",(0,i.jsx)(n.code,{children:'Timer_Create("OnTheHour", 780 SECONDS, 3600 SECONDS, 0);'})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"repeatCount"}),' - Unlike the old functions, which are just "once" or "forever", this instead takes the number of times to call the function. "once" would be ',(0,i.jsx)(n.code,{children:"1"}),", ",(0,i.jsx)(n.code,{children:"500"})," would stop after 500 calls, and (backwards from the old API) ",(0,i.jsx)(n.code,{children:"0"}),' means "forever".']}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"GLOBAL_TAG_TYPES"})," - Like ",(0,i.jsx)(n.code,{children:"{Float, ...}"}),", but with more tags."]}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return s}});var r=t(67294);let i={},o=r.createContext(i);function s(e){let n=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(o.Provider,{value:n},e.children)}},51316:function(e){e.exports=JSON.parse('{"permalink":"/fil/blog/timers","editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/blog/blog/2019-05-22-timers.md","source":"@site/blog/2019-05-22-timers.md","title":"Timers module","description":"This sneak-peek showcases improvements to the timers module in open.mp, introducing a more flexible and efficient API while maintaining backward compatibility.","date":"2019-05-22T00:00:00.000Z","tags":[],"readingTime":1.45,"hasTruncateMarker":true,"authors":[{"name":"Y_Less","key":"y_less","page":null}],"frontMatter":{"slug":"timers","title":"Timers module","authors":"y_less"},"unlisted":false,"prevItem":{"title":"Turfs (formerly gangzones) module","permalink":"/fil/blog/turfs-formerly-gangzones-module"}}')}}]);