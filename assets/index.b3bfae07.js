var y=Object.defineProperty,q=Object.defineProperties;var E=Object.getOwnPropertyDescriptors;var _=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var k=(t,s,a)=>s in t?y(t,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[s]=a,d=(t,s)=>{for(var a in s||(s={}))C.call(s,a)&&k(t,a,s[a]);if(_)for(var a of _(s))M.call(s,a)&&k(t,a,s[a]);return t},m=(t,s)=>q(t,E(s));import{j,r as l,R as A,a as w}from"./vendor.1668928d.js";const R=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function a(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=a(i);fetch(i.href,o)}};R();const e=j.exports.jsx,r=j.exports.jsxs,F=()=>r("div",{className:"avatarMenu",children:[e("div",{className:"header__circle"}),r("div",{className:"socials",children:[e("a",{href:"https://github.com/QuiqueSupertramp",className:"social",target:"_blank",rel:"noreferrer",children:e("img",{src:"images/social/github.svg",alt:"github"})}),e("a",{href:"https://linkedin.com/in/quiquesupertramp",className:"social social1",target:"_blank",rel:"noreferrer",children:e("img",{src:"images/social/linkedin.svg",alt:"linkedin"})}),e("a",{href:"https://instagram.com/quiquesupertramp",className:"social social2",target:"_blank",rel:"noreferrer",children:e("img",{src:"images/social/instagram.svg",alt:"instagram"})})]}),e("img",{className:"header__emoji",src:"images/avatar.png",alt:"Quique Supertramp Avatar"})]});const V=()=>r("div",{className:"header__text",children:[e("span",{className:"header__span",children:"const NAME = "}),e("h1",{children:"Quique Supertramp"}),r("h2",{children:[e("span",{className:"orange",children:"<"}),"DesarrolladorWeb",e("span",{className:"orange",children:"/>"})]}),r("div",{className:"header__buttons",children:[e("a",{href:"#about",className:"btn btn--filled",children:"About Me"}),e("a",{download:"CV Enrique L\xF3pez",href:"public/resources/QuiqueLopezCV.pdf",className:"btn btn--ghost",children:"Download CV"})]})]}),L=()=>r("header",{className:"header",children:[e(V,{}),e(F,{})]});const g=({text:t,number:s})=>r("div",{className:"title",children:[r("span",{className:"orange",children:[s,"."]}),e("h2",{children:t})]});const P=()=>r("div",{className:"about__sidebar",children:[e("div",{className:"photo",children:e("img",{src:"images/quiquePerfil.png",alt:"foto portfolio"})}),r("div",{className:"about__links",children:[e("a",{className:"btn btn--filled",href:"#softSkills",children:"Soft Skills"}),e("a",{className:"btn btn--filled",href:"#skills",children:"Hard Skills"}),e("a",{className:"btn btn--filled",href:"#projects",children:"Projects"})]})]}),I=()=>r("div",{className:"about__text",children:[e("h3",{children:"Bienvenido!"}),r("p",{children:["Mi nombre es Quique, tengo 37 a\xF1os y soy de Barcelona. Hace un a\xF1o que empec\xE9 a estudiar programaci\xF3n y he descubierto que tiene mucho que ver con el mundo del que vengo.",e("br",{}),e("br",{}),"Soy entrenador de baloncesto y los \xFAltimos 6 a\xF1os he estado dirigiendo un club de casi 200 familias, lo que me ha permitido desarrollar habilidades personales, metodol\xF3gicas y de gesti\xF3n muy valiosas para cualquier trabajo en equipo.",e("br",{}),e("br",{}),"Ahora busco mi primera oportunidad laboral en el mundo del desarrollo web. Llevo un a\xF1o prepar\xE1ndome de forma autodidacta y el siguiente paso que necesito es convivir y trabajar a diario con profesionales.",e("br",{}),e("br",{})]})]});function h(t="0px 0px -150px 0px"){const s=l.exports.useRef();return l.exports.useEffect(()=>{const a=new IntersectionObserver(([n],i)=>{n.isIntersecting&&(s.current.classList.add("showOn"),i.unobserve(s.current))},{rootMargin:t});return s.current&&a.observe(s.current),()=>{a.unobserve(s.current)}},[]),{ref:s}}const T=()=>{const{ref:t}=h();return e("section",{id:"about",children:r("div",{ref:t,className:"about",children:[e(g,{text:"About Me",number:"1"}),r("div",{className:"about__main",children:[e(P,{}),e(I,{})]})]})})};const B=({view:t,setView:s})=>{const a=l.exports.useRef(null),n=i=>{s(Number(i.target.dataset.view))};return l.exports.useEffect(()=>{t===1&&(a.current.style.transform="translateY(0rem)"),t===2&&(a.current.style.transform="translateY(2.5rem)"),t===3&&(a.current.style.transform="translateY(5rem)"),t===4&&(a.current.style.transform="translateY(7.5rem)")},[t]),e("nav",{className:"skills__menu",children:r("ul",{children:[e("div",{className:"skills__bar",ref:a}),e("li",{children:e("button",{"data-view":"1",onClick:n,className:t===1?"active":null,children:"Frontend"})}),e("li",{children:e("button",{"data-view":"2",onClick:n,className:t===2?"active":null,children:"Backend"})}),e("li",{children:e("button",{"data-view":"3",onClick:n,className:t===3?"active":null,children:"Tools"})}),e("li",{children:e("button",{"data-view":"4",onClick:n,className:t===4?"active":null,children:"Methodologies"})})]})})},z="images/skills/frontend/html.svg",$="images/skills/frontend/css.svg",D="images/skills/frontend/js.svg",O="images/skills/frontend/react.svg",H="images/skills/frontend/vue.svg",Q="images/skills/backend/node.svg",G="images/skills/backend/express.svg",J="images/skills/backend/mongo.svg",Y="images/skills/tools/vite.svg",U="images/skills/tools/git.svg",W="images/skills/tools/npm.svg",K="images/skills/tools/eslint.svg",X="images/skills/scrum/scrum.svg",u={1:{title:"Frontend",desc:"Me atrae porque es el \xE1rea que tiene relaci\xF3n directa con el cliente. Considero importante dominar HTML, CSS y JAVASCRIPT nativos. En cuanto a frameworks, empec\xE9 con VUE y ahora me estoy especializando en REACT.",images:[{img:z,text:"HTML"},{img:$,text:"CSS"},{img:D,text:"JavaScript"},{img:O,text:"React"},{img:H,text:"Vue"}]},2:{title:"Backend",desc:"Imprescindible poder crear un crud con NODE y EXPRESS. En cuanto a bases de datos, por ahora he trabajado s\xF3lo con MONGODB. Sin duda es un \xE1rea en la que tambi\xE9n me gustar\xEDa seguir form\xE1ndome.",images:[{img:Q,text:"NodeJS"},{img:G,text:"Express"},{img:J,text:"MongoDB"}]},3:{title:"Tools",desc:"En mi d\xEDa a d\xEDa trabajo con algunas herramientas como GIT, ESLINT o NPM, y estoy aprendiendo otras como VITE, utilizado para este proyecto. Ahora me falta aprender a usarlas de manera profesional dentro de un equipo.",images:[{img:U,text:"Git"},{img:Y,text:"Vite"},{img:W,text:"NPM"},{img:K,text:"esLint"}]},4:{title:"Methodologies",desc:"He le\xEDdo mucho sobre metodolog\xEDas \xE1giles y dada mi experiencia en el deporte son formas de organizar equipos que me resultan familiares. SCRUM, por ejemplo, es una metodolog\xEDa que viene del rugby.",images:[{img:X,text:"Scrum"}]}},Z=({skill:t})=>r("article",{className:"skills__main",children:[e("h3",{className:"skills__h3",children:u[t].title}),e("p",{className:"skills__p",children:u[t].desc}),e("div",{className:"skills__logos",children:u[t].images.map(s=>e("img",{src:s.img,title:s.text,alt:s.text,className:"skills__img"},s.text))})]}),f=({skill:t})=>{const s=l.exports.useRef(),a=n=>{var i;n.target.classList.toggle("skills__reverse"),(i=s.current)==null||i.classList.toggle("skills__show")};return r("article",{className:"skills__main",children:[r("div",{className:"skills__title",children:[e("h3",{className:"skills__h3",children:u[t].title}),e("img",{onClick:a,src:"images/skills/down.svg",alt:"arrow down"})]}),r("div",{className:"skills__text skills__toggle",ref:s,children:[e("p",{className:"skills__p",children:u[t].desc}),e("div",{className:"skills__logos",children:u[t].images.map(n=>e("img",{src:n.img,alt:n.text,className:"skills__img"},n.text))})]})]})},ee=()=>{const[t,s]=l.exports.useState(1),{ref:a}=h();return e("section",{id:"skills",children:r("div",{className:"skills",ref:a,children:[e(g,{text:"Hard Skills",number:"3"}),r("div",{className:"skills__container skills__container--desktop",children:[e(B,{view:t,setView:s}),e(Z,{skill:t})]}),r("div",{className:"skills__container skills__container--mobile",children:[e(f,{skill:"1"}),e(f,{skill:"2"}),e(f,{skill:"3"}),e(f,{skill:"4"})]})]})})};const se="images/projects/todoVue.png",te="images/projects/todoVue-tb.png",ae="images/projects/todoVue-mb.png",re="images/projects/landing.png",ie="images/projects/landing-tb.png",ne="images/projects/landing-mb.png",oe={todoApp:{title:"Todo App",images:[{img:se,class:"project__img project__img--desktop"},{img:te,class:"project__img project__img--tablet"},{img:ae,class:"project__img project__img--mobile"}],desc:"Aplicaci\xF3n fullstack responsive con login de usuario. Frontend desarrollado con Vue 3 y Vue-Router. Backend con Node y Express. Base de datos MongoDB.",links:{code:"https://github.com/QuiqueSupertramp/todoList-Vue3",code2:"https://github.com/QuiqueSupertramp/API-todoList-Node",web:"https://todolistvue3.netlify.app/"}},landingPage:{title:"Landing Page",images:[{img:re,class:"project__img project__img--desktop"},{img:ie,class:"project__img project__img--tablet"},{img:ne,class:"project__img project__img--mobile"}],desc:"P\xE1gina de producto multilenguaje y con gesti\xF3n de opiniones (Context API). Frontend desarrollado con React y CSS modules",links:{code:"https://github.com/QuiqueSupertramp/landing-product-page-react",web:"https://quiquesupertramp.github.io/landing-product-page-react/"}}},N=({project:t})=>{const s=oe[t];return r("div",{className:"project",children:[e("div",{className:"project__images",children:s.images.map((a,n)=>e("img",{src:a.img,alt:"",className:a.class},n))}),e("h3",{className:"project__h3",children:s.title}),e("p",{className:"project__description",children:s.desc}),r("div",{className:"project__links",children:[e("a",{href:s.links.web,target:"_blank",rel:"noreferrer",className:"btn btn--filled",children:"Web"}),e("a",{href:s.links.code,target:"_blank",rel:"noreferrer",className:"btn btn--filled",children:s.links.code2?"Frontend Code":"Code"}),s.links.code2&&e("a",{href:s.links.code2,target:"_blank",rel:"noreferrer",className:"btn btn--filled",children:"Backend Code"})]})]})},le=()=>{const{ref:t}=h();return e("section",{id:"projects",children:r("div",{className:"projects",ref:t,children:[e(g,{text:"Projects",number:"4"}),r("div",{className:"projects__main",children:[e(N,{project:"todoApp"}),e(N,{project:"landingPage"})]})]})})};const ce=()=>r("div",{className:"contact__sidebar",children:[r("div",{className:"contact__text",children:[e("p",{children:"Gracias por llegar hasta aqu\xED. Espero que este portfolio, hecho con mucho cari\xF1o, haya sido de tu agrado."}),e("br",{}),e("p",{children:"Contacta conmigo a trav\xE9s del correo electr\xF3nico, redes sociales o rellenando el formulario. Hasta pronto!"})]}),r("div",{className:"contact__social",children:[e("a",{href:"mailto:quiquesupertramp@gmail.com",children:e("p",{children:"quiquesupertramp@gmail.com"})}),r("div",{className:"contact__links",children:[e("a",{href:"https://linkedin.com/in/quiquesupertramp",className:"btn--rounded",target:"_blank",rel:"noreferrer",children:e("img",{src:"images/social/linkedin.svg",alt:"linkedin",title:"LinkedIn"})}),e("a",{href:"https://github.com/QuiqueSupertramp",className:"btn--rounded",target:"_blank",rel:"noreferrer",children:e("img",{src:"images/social/github.svg",alt:"github",title:"GitHub"})}),e("a",{href:"https://instagram.com/quiquesupertramp",className:"btn--rounded",target:"_blank",rel:"noreferrer",children:e("img",{src:"images/social/instagram.svg",alt:"instagram",title:"Instagram"})})]})]})]}),de="https://formspree.io/f/xnqwvpbo",me=async t=>await(await fetch(de,{method:"POST",body:JSON.stringify(t),headers:{Accept:"application/json"}})).json(),ue=({validation:t,email:s})=>r("div",{className:"contact__email",children:[e("input",{type:"email",className:["contact__emailInput",s.input.active?"input-active":null].join(" "),placeholder:"Email...",value:s.input.value,onChange:s.onChange,onFocus:s.onFocus,onBlur:s.onBlur,required:!0}),s.input.error&&r("p",{className:"contact__emailError",children:["* ",t.errorMessage]})]}),pe=({comment:t})=>e("textarea",{className:["contact__comment",t.input.active?"input-active":null].join(" "),rows:"6",placeholder:"Mensaje...",value:t.input.value,onChange:t.onChange,onFocus:t.onFocus,onBlur:t.onBlur,required:!0}),ge=({submitError:t})=>e("span",{className:"contact__error",children:t===!1?"Mensaje enviado correctamente":"No se ha podido enviar. Revisa que el email sea correcto"}),x={email:{regularExp:/^[a-zñÑ0-9_-]+(?:\.[a-zñÑ0-9_-]+)*@(?:[a-z0-9](?:[a-z0-9-_]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9]*[a-z0-9])?$/,errorMessage:"El email es incorrecto"}},S=t=>{const[s,a]=l.exports.useState({value:"",error:!1,active:!1}),n=v=>a(m(d({},s),{value:v.target.value})),i=()=>a(m(d({},s),{value:""})),o=()=>a(m(d({},s),{active:!0})),c=()=>a(m(d({},s),{active:!1})),p=v=>a(m(d({},s),{error:v})),b=()=>{if(!!t){if(s.value.length===0)return p(!1);t.test(s.value)?p(!1):p(!0)}};return l.exports.useEffect(()=>{b()},[s.value]),{input:s,onChange:n,onFocus:o,onBlur:c,reset:i}},he=()=>{const t=S(x.email.regularExp),s=S(),[a,n]=l.exports.useState(null);l.exports.useEffect(()=>{if(a===null)return;const c=setTimeout(()=>n(null),5e3);return()=>clearTimeout(c)},[a]);const i=()=>{n(!1),t.reset(),s.reset()};return r("form",{className:"contact__form",onSubmit:c=>{if(c.preventDefault(),t.input.error||s.input.value.length===0){n(!0);return}const p={email:t.input.value,comment:s.input.value};me(p).then(b=>{b.ok===!0?i():n(!0)})},children:[e(ue,{validation:x.email,email:t}),e(pe,{comment:s}),a!==null&&e(ge,{submitError:a}),e("input",{type:"submit",className:"btn btn--filled w100",value:"Enviar"})]})},fe=()=>{const{ref:t}=h();return e("section",{id:"contact",children:r("div",{className:"contact",ref:t,children:[e(g,{text:"Say Hello!",number:"5"}),r("div",{className:"contact__container",children:[e(ce,{}),e(he,{})]})]})})};const be=({softSkill:t})=>r("div",{className:"softSkills__wrapper",children:[r("div",{className:"softSkills__title",children:[e("img",{src:t.img,alt:t.title}),e("h4",{children:t.title})]}),e("p",{children:t.desc})]}),ve=[{id:1,img:"images/softSkills/conflicts.svg",title:"Resoluci\xF3n de conflictos",desc:'"Los conflictos son parte del d\xEDa a d\xEDa y la semilla del crecimiento de un equipo. Es clave escuchar, buena comunicaci\xF3n y cierta creatividad."'},{id:2,img:"images/softSkills/pressure.svg",title:"Tolerancia a la presi\xF3n",desc:'"Estoy acostumbrado a trabajar bajo presi\xF3n, tanto en el d\xEDa a d\xEDa como en la toma de decisiones. Siempre con preparaci\xF3n y responsabilidad."'},{id:3,img:"images/softSkills/changes.svg",title:"Adaptaci\xF3n al cambio",desc:'"Vengo de un mundo d\xF3nde el primero en adaptarse juega con ventaja. Las herramientas clave son la curiosidad y poner el foco en los detalles."'},{id:4,img:"images/softSkills/teamwork.svg",title:"Trabajo en equipo",desc:'"El secreto radica en crear sinergias, proyectando los objetivos individuales hacia el colectivo. Es vital dominar la asertividad."'},{id:5,img:"images/softSkills/results.svg",title:"Orientado a resultados",desc:'"Estoy acostumbrado a trabajar con objetivos a corto y largo plazo. Serenidad y una buena planificaci\xF3n son los ingredientes del \xE9xito."'},{id:6,img:"images/softSkills/knowledge.svg",title:"Formaci\xF3n continuada",desc:'"Conozco el camino y los m\xE9todos de aprendizaje eficientes, lo que me permite ser autodidacta y tener facilidad para formar a otras personas."'}],_e=()=>{const{ref:t}=h();return r("section",{id:"softSkills",className:"softSkills",ref:t,children:[e(g,{number:"2",text:"Soft Skills"}),e("div",{className:"softSkills__container",children:ve.map(s=>e(be,{softSkill:s},s.id))})]})};function ke(){return r("div",{className:"App",children:[e(L,{}),r("main",{children:[e(T,{}),e(_e,{}),e(ee,{}),e(le,{}),e(fe,{})]})]})}A.render(e(w.StrictMode,{children:e(ke,{})}),document.getElementById("root"));
