import{c as t,a as s,e as a,d as e,h as n,f as o,g as i,i as r,j as h,k as c,o as l,b as p}from"./chunk.c746e806.js";function f(p){var f,m,u,g,d,_,v,j,y;if(t(this,p),this._state=s({},p.data),this._intro=!0,this._fragment=(f=this._state,j=f.post.title,y=f.post.html,document.title=m=f.post.title,{c(){u=a("\n\n"),g=e("h1"),d=a(j),_=a("\n\n"),v=e("div"),this.h()},l(t){u=n(t,"\n\n"),g=o(t,"H1",{},!1);var s=i(g);d=n(s,j),s.forEach(r),_=n(t,"\n\n"),v=o(t,"DIV",{class:!0},!1),i(v).forEach(r),this.h()},h(){v.className="content svelte-gnxal1"},m(t,s){h(t,u,s),h(t,g,s),c(g,d),h(t,_,s),h(t,v,s),v.innerHTML=y},p(t,s){t.post&&m!==(m=s.post.title)&&(document.title=m),t.post&&j!==(j=s.post.title)&&l(d,j),t.post&&y!==(y=s.post.html)&&(v.innerHTML=y)},d(t){t&&(r(u),r(g),r(_),r(v))}}),p.target){var E=i(p.target);p.hydrate?this._fragment.l(E):this._fragment.c(),E.forEach(r),this._mount(p.target,p.anchor)}}s(f.prototype,p),f.preload=async function({params:t,query:s}){const a=await this.fetch(`blog/${t.slug}.json`),e=await a.json();if(200===a.status)return{post:e};this.error(a.status,e.message)};export default f;
//# sourceMappingURL=chunk.683a6ab8.js.map