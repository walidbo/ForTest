import{g as d,R as t,_ as r,u as e,j as n,a,o as l}from"./index.js";import{a as u,E as h,u as E}from"./ApiUrls-d3440f87.js";const p=async i=>await u.get(h).then(o=>{i(d(o.data))}),m=t.lazy(()=>r(()=>import("./ReadMoreModal-8e54878c.js"),["assets/ReadMoreModal-8e54878c.js","assets/index-30e17cf7.js","assets/index-4b2f9ae4.css","assets/ApiUrls-d3440f87.js"])),R=()=>{const i=E(),c=e(s=>s.modal.isOpen),o=e(s=>s.education.education);return t.useEffect(()=>{p(i)},[]),n("div",{id:"Education",children:[a("h1",{children:"Educations"}),a("div",{className:""}),a("div",{className:"box",children:o&&(o==null?void 0:o.map(s=>n("div",{children:[a("img",{src:s.icon}),a("h2",{children:s.school}),a("button",{onClick:()=>i(l(s)),children:"READ MORE"})]},s._id)))}),c&&a(t.Suspense,{fallback:a("div",{children:"...load"}),children:a(m,{})})]})};export{R as default};
