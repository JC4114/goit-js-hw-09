function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},i=o.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var i={id:e,exports:{}};return n[e]=i,o.call(i.exports,i,i.exports),i.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,o){t[e]=o},o.parcelRequired7c6=i);var l=i("eWCmQ");function r(o,n){const t=Math.random()>.3;new Promise(((e,i)=>{setTimeout((()=>{t?e({position:o,delay:n}):i({position:o,delay:n})}),n)})).then((({position:o,delay:n})=>{e(l).Notify.success(`Fulfilled promise ${o} in ${n}ms`),console.log(`Fulfilled promise ${o} in ${n}ms`)})).catch((({position:o,delay:n})=>{e(l).Notify.failure(`Rejected promise ${o} in ${n}ms`),console.log(`Rejected promise ${o} in ${n}ms`)}))}document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault();const{delay:o,step:n,amount:t}=e.currentTarget;let i=+o.value,l=+n.value,s=+t.value;for(let e=1;e<=s;e++)r(e,i),i+=l}));
//# sourceMappingURL=03-promises.6703bafa.js.map
