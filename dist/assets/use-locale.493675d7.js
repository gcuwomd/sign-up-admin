import{i as y,an as g,l as f}from"./index.8b970e15.js";const b={name:"en-US",global:{undo:"Undo",redo:"Redo",confirm:"Confirm"},Popconfirm:{positiveText:"Confirm",negativeText:"Cancel"},Cascader:{placeholder:"Please Select",loading:"Loading",loadingRequiredMessage:e=>`Please load all ${e}'s descendants before checking it.`},Time:{dateFormat:"yyyy-MM-dd",dateTimeFormat:"yyyy-MM-dd HH:mm:ss"},DatePicker:{yearFormat:"yyyy",monthFormat:"MMM",dayFormat:"eeeeee",yearTypeFormat:"yyyy",monthTypeFormat:"yyyy-MM",dateFormat:"yyyy-MM-dd",dateTimeFormat:"yyyy-MM-dd HH:mm:ss",quarterFormat:"yyyy-qqq",clear:"Clear",now:"Now",confirm:"Confirm",selectTime:"Select Time",selectDate:"Select Date",datePlaceholder:"Select Date",datetimePlaceholder:"Select Date and Time",monthPlaceholder:"Select Month",yearPlaceholder:"Select Year",quarterPlaceholder:"Select Quarter",startDatePlaceholder:"Start Date",endDatePlaceholder:"End Date",startDatetimePlaceholder:"Start Date and Time",endDatetimePlaceholder:"End Date and Time",startMonthPlaceholder:"Start Month",endMonthPlaceholder:"End Month",monthBeforeYear:!0,firstDayOfWeek:6,today:"Today"},DataTable:{checkTableAll:"Select all in the table",uncheckTableAll:"Unselect all in the table",confirm:"Confirm",clear:"Clear"},LegacyTransfer:{sourceTitle:"Source",targetTitle:"Target"},Transfer:{selectAll:"Select all",unselectAll:"Unselect all",clearAll:"Clear",total:e=>`Total ${e} items`,selected:e=>`${e} items selected`},Empty:{description:"No Data"},Select:{placeholder:"Please Select"},TimePicker:{placeholder:"Select Time",positiveText:"OK",negativeText:"Cancel",now:"Now"},Pagination:{goto:"Goto",selectionSuffix:"page"},DynamicTags:{add:"Add"},Log:{loading:"Loading"},Input:{placeholder:"Please Input"},InputNumber:{placeholder:"Please Input"},DynamicInput:{create:"Create"},ThemeEditor:{title:"Theme Editor",clearAllVars:"Clear All Variables",clearSearch:"Clear Search",filterCompName:"Filter Component Name",filterVarName:"Filter Variable Name",import:"Import",export:"Export",restore:"Reset to Default"},Image:{tipPrevious:"Previous picture (\u2190)",tipNext:"Next picture (\u2192)",tipCounterclockwise:"Counterclockwise",tipClockwise:"Clockwise",tipZoomOut:"Zoom out",tipZoomIn:"Zoom in",tipClose:"Close (Esc)",tipOriginalSize:"Zoom to original size"}},p=b;function h(e){return function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=a.width?String(a.width):e.defaultWidth,n=e.formats[t]||e.formats[e.defaultWidth];return n}}function u(e){return function(a,t){var n=t!=null&&t.context?String(t.context):"standalone",i;if(n==="formatting"&&e.formattingValues){var r=e.defaultFormattingWidth||e.defaultWidth,o=t!=null&&t.width?String(t.width):r;i=e.formattingValues[o]||e.formattingValues[r]}else{var l=e.defaultWidth,s=t!=null&&t.width?String(t.width):e.defaultWidth;i=e.values[s]||e.values[l]}var d=e.argumentCallback?e.argumentCallback(a):a;return i[d]}}function m(e){return function(a){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.width,i=n&&e.matchPatterns[n]||e.matchPatterns[e.defaultMatchWidth],r=a.match(i);if(!r)return null;var o=r[0],l=n&&e.parsePatterns[n]||e.parsePatterns[e.defaultParseWidth],s=Array.isArray(l)?w(l,function(c){return c.test(o)}):P(l,function(c){return c.test(o)}),d;d=e.valueCallback?e.valueCallback(s):s,d=t.valueCallback?t.valueCallback(d):d;var v=a.slice(o.length);return{value:d,rest:v}}}function P(e,a){for(var t in e)if(e.hasOwnProperty(t)&&a(e[t]))return t}function w(e,a){for(var t=0;t<e.length;t++)if(a(e[t]))return t}function M(e){return function(a){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=a.match(e.matchPattern);if(!n)return null;var i=n[0],r=a.match(e.parsePattern);if(!r)return null;var o=e.valueCallback?e.valueCallback(r[0]):r[0];o=t.valueCallback?t.valueCallback(o):o;var l=a.slice(i.length);return{value:o,rest:l}}}var S={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},T=function(e,a,t){var n,i=S[e];return typeof i=="string"?n=i:a===1?n=i.one:n=i.other.replace("{{count}}",a.toString()),t!=null&&t.addSuffix?t.comparison&&t.comparison>0?"in "+n:n+" ago":n};const C=T;var D={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},W={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},k={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},F={date:h({formats:D,defaultWidth:"full"}),time:h({formats:W,defaultWidth:"full"}),dateTime:h({formats:k,defaultWidth:"full"})};const x=F;var A={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},N=function(e,a,t,n){return A[e]};const L=N;var E={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},q={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},R={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},V={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},j={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},z={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},O=function(e,a){var t=Number(e),n=t%100;if(n>20||n<10)switch(n%10){case 1:return t+"st";case 2:return t+"nd";case 3:return t+"rd"}return t+"th"},I={ordinalNumber:O,era:u({values:E,defaultWidth:"wide"}),quarter:u({values:q,defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:u({values:R,defaultWidth:"wide"}),day:u({values:V,defaultWidth:"wide"}),dayPeriod:u({values:j,defaultWidth:"wide",formattingValues:z,defaultFormattingWidth:"wide"})};const U=I;var J=/^(\d+)(th|st|nd|rd)?/i,$=/\d+/i,X={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},Q={any:[/^b/i,/^(a|c)/i]},_={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},H={any:[/1/i,/2/i,/3/i,/4/i]},Y={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Z={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},B={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},K={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},G={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},ee={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},te={ordinalNumber:M({matchPattern:J,parsePattern:$,valueCallback:function(e){return parseInt(e,10)}}),era:m({matchPatterns:X,defaultMatchWidth:"wide",parsePatterns:Q,defaultParseWidth:"any"}),quarter:m({matchPatterns:_,defaultMatchWidth:"wide",parsePatterns:H,defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:m({matchPatterns:Y,defaultMatchWidth:"wide",parsePatterns:Z,defaultParseWidth:"any"}),day:m({matchPatterns:B,defaultMatchWidth:"wide",parsePatterns:K,defaultParseWidth:"any"}),dayPeriod:m({matchPatterns:G,defaultMatchWidth:"any",parsePatterns:ee,defaultParseWidth:"any"})};const ae=te;var ne={code:"en-US",formatDistance:C,formatLong:x,formatRelative:L,localize:U,match:ae,options:{weekStartsOn:0,firstWeekContainsDate:1}};const re=ne,oe={name:"en-US",locale:re},ie=oe;function de(e){const{mergedLocaleRef:a,mergedDateLocaleRef:t}=y(g,null)||{},n=f(()=>{var r,o;return(o=(r=a==null?void 0:a.value)===null||r===void 0?void 0:r[e])!==null&&o!==void 0?o:p[e]});return{dateLocaleRef:f(()=>{var r;return(r=t==null?void 0:t.value)!==null&&r!==void 0?r:ie}),localeRef:n}}export{de as u};
