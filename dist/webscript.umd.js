!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e=e||self).webscript=r()}(this,function(){function e(){return(e=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}function r(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}function n(e,n){var t;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(t=function(e,n){if(e){if("string"==typeof e)return r(e,void 0);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?r(e,void 0):void 0}}(e))||n&&e&&"number"==typeof e.length){t&&(e=t);var o=0;return function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(t=e[Symbol.iterator]()).next.bind(t)}function t(e){for(var r,t=e[0],o=e.slice(1),i=[],u=n(t.entries());!(r=u()).done;){var a=r.value,l=a[0],p=a[1];""!==p&&i.push(p);var f=o[l];void 0!==f&&i.push(f)}return i}function o(r,n){function o(){var r,n=[].slice.call(arguments),o=n,i=o[0],a=this.__element_info__,l=a.props,p=a.prop;return void 0===i?(delete(l=e({},l))[p],u({props:l,prop:null})):(Array.isArray(i)&&Object.isFrozen(i)?i=t(n).join(""):n.length>1&&(i=n),u({props:l=e({},l,((r={})[p]=i,r)),prop:null}))}function i(r){return u({props:r=e({},this.__element_info__.props,r),prop:null})}function u(e){var u=new Proxy(function(){},{apply:function(e,o,i){var a=u.__element_info__.props;if("function"==typeof a.exec){var l=a.exec;delete a.exec;var p=l(u,i);return a.exec=l,p}var f,c=i[0];Array.isArray(c)&&Object.isFrozen(c)&&(i=t(i)),Array.isArray(a.children)&&((f=a.children).push.apply(f,i),i=a.children,delete a.children);for(var s=0;s<i.length;s++){var d=i[s];"function"==typeof d&&d.__element_info__&&(i[s]=d())}return r.apply(void 0,[n,a].concat(i))},get:function(e,r){var n=e[r];return void 0!==n?n:"props"===r?i:"string"==typeof r?r.endsWith("Value")&&r.length>5?e.__element_info__.props[r.slice(0,-5)]:(e.__element_info__.prop=r,o):void 0}});return u.__element_info__=e,u}return u({props:{},prop:null})}return function(e,r){if(void 0===r&&(r=[]),"function"!=typeof e)throw Error("elementConstructor argument must be present and it must be a function.");if(r.length>0){for(var t,i=[],u=n(r);!(t=u()).done;)i.push(o(e,t.value));return i}return new Proxy(function(){},{get:function(r,n){var t=r[n];return void 0!==t?t:(r[n]=o(e,n),r[n])}})}});
//# sourceMappingURL=webscript.umd.js.map
