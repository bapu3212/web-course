jQuery.cookie=function(e,o,i){if(void 0===o){var n=null;if(document.cookie&&""!=document.cookie)for(var t=document.cookie.split(";"),r=0;r<t.length;r++){var p=jQuery.trim(t[r]);if(p.substring(0,e.length+1)==e+"="){n=decodeURIComponent(p.substring(e.length+1));break}}return n}i=i||{},null===o&&(o="",(i=$.extend({},i)).expires=-1);var s="",u=(i.expires&&("number"==typeof i.expires||i.expires.toUTCString)&&("number"==typeof i.expires?(u=new Date).setTime(u.getTime()+24*i.expires*60*60*1e3):u=i.expires,s="; expires="+u.toUTCString()),i.path?"; path="+i.path:""),c=i.domain?"; domain="+i.domain:"",i=i.secure?"; secure":"";document.cookie=[e,"=",encodeURIComponent(o),s,u,c,i].join("")};