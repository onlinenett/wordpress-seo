yoastWebpackJsonp([230],{348:function(e,t,o){"use strict";var r,a,i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(n,l){"object"==i(t)&&void 0!==e?e.exports=l():(r=l,void 0!==(a="function"==typeof r?r.call(t,o,t,e):r)&&(e.exports=a))}(0,function(){return[{locale:"ars",pluralRuleFunction:function(e,t){var o=String(e).split("."),r=Number(o[0])==e&&o[0].slice(-2);return t?"other":0==e?"zero":1==e?"one":2==e?"two":r>=3&&r<=10?"few":r>=11&&r<=99?"many":"other"},fields:{year:{displayName:"Year",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Month",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Day",relative:{0:"today",1:"tomorrow","-1":"yesterday"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Hour",relative:{0:"this hour"},relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Minute",relative:{0:"this minute"},relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Second",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}}]})}});