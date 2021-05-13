(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{115:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return c})),n.d(e,"metadata",(function(){return o})),n.d(e,"toc",(function(){return l})),n.d(e,"default",(function(){return b}));var r=n(3),a=n(7),i=(n(0),n(164)),c={id:"data_structures7",title:"\ud574\uc2dc",sidebar_label:"\ud574\uc2dc"},o={unversionedId:"kdt/data_structures/data_structures7",id:"kdt/data_structures/data_structures7",isDocsHomePage:!1,title:"\ud574\uc2dc",description:"\ud83d\udca1 \u300eKDT \ud504\ub85c\uadf8\ub798\uba38\uc2a4 \uc778\uacf5\uc9c0\ub2a5 \ub370\ube0c\ucf54\uc2a4\u300f\uc5d0\uc11c \uacf5\ubd80\uc911..\ud83d\udc40",source:"@site/docs\\kdt\\data_structures\\data_structures7.md",slug:"/kdt/data_structures/data_structures7",permalink:"/willbe/docs/kdt/data_structures/data_structures7",version:"current",sidebar_label:"\ud574\uc2dc",sidebar:"kdt",previous:{title:"\ud799",permalink:"/willbe/docs/kdt/data_structures/data_structures6"},next:{title:"\ud0d0\uc695\ubc95",permalink:"/willbe/docs/kdt/data_structures/data_structures8"}},l=[{value:"\ud574\uc2dc (Hash)",id:"\ud574\uc2dc-hash",children:[{value:"\ud574\uc2dc \ucda9\ub3cc (hash collision)",id:"\ud574\uc2dc-\ucda9\ub3cc-hash-collision",children:[]},{value:"\uc5f0\uc2b5\ubb38\uc81c - \uc644\uc8fc\ud558\uc9c0 \ubabb\ud55c \uc120\uc218",id:"\uc5f0\uc2b5\ubb38\uc81c---\uc644\uc8fc\ud558\uc9c0-\ubabb\ud55c-\uc120\uc218",children:[]}]}],p={toc:l};function b(t){var e=t.components,n=Object(a.a)(t,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:e,mdxType:"MDXLayout"}),Object(i.b)("p",null,"\ud83d\udca1 \u300eKDT \ud504\ub85c\uadf8\ub798\uba38\uc2a4 \uc778\uacf5\uc9c0\ub2a5 \ub370\ube0c\ucf54\uc2a4\u300f\uc5d0\uc11c \uacf5\ubd80\uc911..\ud83d\udc40"),Object(i.b)("h2",{id:"\ud574\uc2dc-hash"},"\ud574\uc2dc (Hash)"),Object(i.b)("p",null,"\uc2e4\uc81c \ub370\uc774\ud130 (\ud0a4, key)\uc758 \uc704\uce58\ub97c \uc815\ud574 \ud574\uc2dc \ud14c\uc774\ube14 (hash table) \ub0b4\uc5d0 \uc800\uc7a5\ud558\uba70, \ud574\uc2dc \ud14c\uc774\ube14 \uc548\uc758 \uce78\ub4e4\uc744 \ud574\uc2dc \ubc84\ud0b7 (hash bucket)\uc774\ub77c\uace0 \ud55c\ub2e4. \uc774\ub54c, \ud574\ub2f9 \ud0a4\ub97c \ud574\uc2dc \ud14c\uc774\ube14\uc758 \uc5b4\ub5a4 \uce78\uc5d0 \uc800\uc7a5\ud560\uc9c0 \uacb0\uc815\ud558\uae30 \uc704\ud574 \ud574\uc2dc \ud568\uc218 (hash function)\uc744 \uc774\uc6a9\ud558\uba70, \ud574\uc2dc \ud568\uc218\ub294 \ud574\uc2dc \ubc84\ud0b7\uc758 \uac2f\uc218\uc5d0 \ub9de\uac8c \uad6c\uc131\ub418\uc5b4\uc57c \ud55c\ub2e4.  "),Object(i.b)("h3",{id:"\ud574\uc2dc-\ucda9\ub3cc-hash-collision"},"\ud574\uc2dc \ucda9\ub3cc (hash collision)"),Object(i.b)("p",null,"\uc11c\ub85c \ub2e4\ub978 \ud0a4\uac00 \uac19\uc740 \ud574\uc2dc \ubc84\ud0b7\uc5d0 \ud574\uc2dc\ub418\ub294 \ud604\uc0c1  "),Object(i.b)("h3",{id:"\uc5f0\uc2b5\ubb38\uc81c---\uc644\uc8fc\ud558\uc9c0-\ubabb\ud55c-\uc120\uc218"},"\uc5f0\uc2b5\ubb38\uc81c - \uc644\uc8fc\ud558\uc9c0 \ubabb\ud55c \uc120\uc218"),Object(i.b)("h4",{id:"\uc785\ucd9c\ub825-\uc608"},"\uc785\ucd9c\ub825 \uc608"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"},"participant"),Object(i.b)("th",{parentName:"tr",align:"left"},"completion"),Object(i.b)("th",{parentName:"tr",align:"left"},"return"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},'["leo", "kiki", "eden"]'),Object(i.b)("td",{parentName:"tr",align:"left"},'["eden", "kiki"]'),Object(i.b)("td",{parentName:"tr",align:"left"},'"leo"')),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},'["marina", "josipa", "nikola", "vinko", "filipa"]'),Object(i.b)("td",{parentName:"tr",align:"left"},'["josipa", "filipa", "marina", "nikola"]'),Object(i.b)("td",{parentName:"tr",align:"left"},'"vinko"')),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},'["mislav", "stanko", "mislav", "ana"]'),Object(i.b)("td",{parentName:"tr",align:"left"},'["stanko", "ana", "mislav"]'),Object(i.b)("td",{parentName:"tr",align:"left"},'"mislav"')))),Object(i.b)("h4",{id:"\uac15\uc758-\ud480\uc774-2"},"\uac15\uc758 \ud480\uc774 2"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"\uba3c\uc800 participant\uc5d0\uc11c \ub4f1\uc7a5\ud558\ub294 \uc774\ub984\uc758 \ud69f\uc218\ub97c \uc13c\ub2e4.  "),Object(i.b)("li",{parentName:"ol"},"completion\uc5d0\uc11c \ub4f1\uc7a5\ud558\ub294 \uc774\ub984\uc758 \ud69f\uc218\ub97c \ube80\ub2e4.  "),Object(i.b)("li",{parentName:"ol"},"\ucc38\uac00\ud558\uc9c0 \uc54a\uc740 \uc120\uc218\uc758 \uc774\ub984\uc744 \ub9ac\ud134\ud55c\ub2e4.  ")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"def solution(participant, completion):\n    d = {}\n    # \uc774\ub984 \uc218 \uc138\uae30 - O(n)\n    for x in participant:\n        d[x] = d.get(x, 0) + 1\n    # \ucc38\uac00\ud55c \uc120\uc218\uc758 \uc774\ub984 \uc81c\uac70 - O(n)\n    for x in completion:\n        d[x] -= 1\n    # \ucc38\uac00\ud558\uc9c0 \uc54a\uc740 \uc120\uc218 \ub9ac\uc2a4\ud2b8 - O(n)\n    dnf = [k for k, v in d.items() if v > 0]\n    answer = dnf[0]\n    return answer\n")),Object(i.b)("p",null,"\uc2dc\uac04 \ubcf5\uc7a1\ub3c4:",Object(i.b)("br",{parentName:"p"}),"\n","participant\uc758 \uae38\uc774\ub97c n\uc774\ub77c \ud558\uba74, O(n)\uc758 \uc2dc\uac04 \ubcf5\uc7a1\ub3c4\ub97c \uac00\uc9c4\ub2e4.  "),Object(i.b)("h4",{id:"\uac15\uc758-\ud480\uc774-1"},"\uac15\uc758 \ud480\uc774 1"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"participant\uc640 completion\uc744 \uc624\ub984\ucc28\uc21c \uc815\ub82c\ud55c\ub2e4.  "),Object(i.b)("li",{parentName:"ol"},"\uc778\ub371\uc2a4 \uc21c\uc11c\ub300\ub85c \uc21c\ud658\ud558\uba74 participant\uc640 completion\uc758 \uac12\uc774 \ub2e4\ub974\uba74 \ub9ac\ud134\ud55c\ub2e4.  ")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"def solution(participant, completion):\n    # \uc815\ub82c - O(n log n)\n    participant.sort()\n    completion.sort()\n    # participant\uc640 completion\uc758 \uc6d0\uc18c \ube44\uad50 - O(n)\n    for i in range(len(completion)):\n        if participant[i] != completion[i]:\n            return participant[i]\n    return participant[-1]\n")),Object(i.b)("p",null,"\uc2dc\uac04 \ubcf5\uc7a1\ub3c4:",Object(i.b)("br",{parentName:"p"}),"\n","participant\uc758 \uae38\uc774\ub97c n\uc774\ub77c \ud558\uba74, O(n log n)\uc758 \uc2dc\uac04 \ubcf5\uc7a1\ub3c4\ub97c \uac00\uc9c4\ub2e4.",Object(i.b)("br",{parentName:"p"}),"\n","(\ud574\uc2dc \ubc29\ubc95\ubcf4\ub2e4 \uc2dc\uac04 \ubcf5\uc7a1\ub3c4\uac00 \ub354 \ud06c\ub2e4.)  "),Object(i.b)("h4",{id:"\ub0b4-\ud480\uc774"},"\ub0b4 \ud480\uc774"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"from collections import defaultdict\n\ndef solution(participant, completion):\n    dic = defaultdict(int)\n    for i in participant:\n        dic[i] += 1\n    for i in completion:\n        dic[i] -= 1\n    for i in dic:\n        if dic[i] == 1:\n            return i\n")))}b.isMDXComponent=!0},164:function(t,e,n){"use strict";n.d(e,"a",(function(){return u})),n.d(e,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=a.a.createContext({}),b=function(t){var e=a.a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=b(t.components);return a.a.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.a.createElement(a.a.Fragment,{},e)}},d=a.a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,c=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),u=b(n),d=r,m=u["".concat(c,".").concat(d)]||u[d]||s[d]||i;return n?a.a.createElement(m,o(o({ref:e},p),{},{components:n})):a.a.createElement(m,o({ref:e},p))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,c=new Array(i);c[0]=d;var o={};for(var l in e)hasOwnProperty.call(e,l)&&(o[l]=e[l]);o.originalType=t,o.mdxType="string"==typeof t?t:r,c[1]=o;for(var p=2;p<i;p++)c[p]=n[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);