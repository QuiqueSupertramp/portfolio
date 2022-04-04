import{j as _,r as l,R as q,a as E}from"./vendor.607369a9.js";const C=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}};C();var M="/assets/bienvenidos.b2d25817.png",k="/assets/github.e9fd16a1.svg",N="/assets/linkedin.8e188bca.svg",j="/assets/instagram.32cab093.svg";const e=_.exports.jsx,r=_.exports.jsxs,A=()=>r("div",{className:"avatarMenu",children:[e("div",{className:"header__circle"}),r("div",{className:"socials",children:[e("a",{href:"https://github.com/QuiqueSupertramp",className:"social",target:"_blank",rel:"noreferrer",children:e("img",{src:k,alt:"github"})}),e("a",{href:"https://linkedin.com/in/quiquesupertramp",className:"social social1",target:"_blank",rel:"noreferrer",children:e("img",{src:N,alt:"linkedin"})}),e("a",{href:"https://instagram.com/quiquesupertramp",className:"social social2",target:"_blank",rel:"noreferrer",children:e("img",{src:j,alt:"instagram"})})]}),e("img",{className:"header__emoji",src:M,alt:"Quique Supertramp Avatar"})]}),R="<",w=" />",F=()=>r("div",{className:"header__text",children:[e("span",{className:"header__span",children:"const NAME = "}),e("h1",{children:"Quique Supertramp"}),r("h2",{children:[e("span",{className:"orange",children:R}),"DesarrolladorWeb",e("span",{className:"orange",children:w})]}),r("div",{className:"header__buttons",children:[e("a",{href:"#about",className:"btn btn--filled",children:"About Me"}),e("button",{className:"btn btn--ghost",children:"Resume"})]})]}),P=()=>r("header",{className:"header",children:[e(F,{}),e(A,{})]});const u=({text:s,number:a})=>r("div",{className:"title",children:[r("span",{className:"orange",children:[a,"."]}),e("h2",{children:s})]});function m(s="0px 0px -150px 0px"){const a=l.exports.useRef();return l.exports.useEffect(()=>{const n=new IntersectionObserver(([o],t)=>{o.isIntersecting&&(a.current.classList.add("showOn"),t.unobserve(a.current))},{rootMargin:s});return a.current&&n.observe(a.current),()=>{n.unobserve(a.current)}},[]),{ref:a}}var V="/assets/quique1.bc161d1a.png";const B=()=>r("div",{className:"about__sidebar",children:[e("div",{className:"photo",children:e("img",{src:V,alt:"foto portfolio"})}),r("div",{className:"about__links",children:[e("a",{className:"btn btn--filled",href:"#softSkills",children:"Soft Skills"}),e("a",{className:"btn btn--filled",href:"#skills",children:"Hard Skills"}),e("a",{className:"btn btn--filled",href:"#projects",children:"Projects"})]})]}),L=()=>r("div",{className:"about__text",children:[e("h3",{children:"Bienvenido!"}),r("p",{children:["Mi nombre es Quique, tengo 37 a\xF1os y soy de Barcelona. Hace un a\xF1o que empec\xE9 a estudiar programaci\xF3n y he descubierto que tiene mucho que ver con el mundo del que vengo.",e("br",{}),e("br",{}),"Soy entrenador de baloncesto y los \xFAltimos 6 a\xF1os he estado dirigiendo un club de casi 200 familias, lo que me ha permitido desarrolllar habilidades personales, metodol\xF3gicas y de gesti\xF3n muy valiosas para cualquier trabajo en equipo.",e("br",{}),e("br",{}),"Ahora busco mi primera oportunidad laboral en el mundo del desarrollo web. Llevo un a\xF1o prepar\xE1ndome de forma autodidacta y el siguiente paso que necesito es convivir y trabajar a diario con profesionales.",e("br",{}),e("br",{})]})]}),T=()=>{const{ref:s}=m();return e("section",{id:"about",children:r("div",{ref:s,className:"about",children:[e(u,{text:"About Me",number:"1"}),r("div",{className:"about__main",children:[e(B,{}),e(L,{})]})]})})};const I=({view:s,setView:a})=>{const n=l.exports.useRef(null),o=t=>{a(Number(t.target.dataset.view))};return l.exports.useEffect(()=>{s===1&&(n.current.style.transform="translateY(0rem)"),s===2&&(n.current.style.transform="translateY(2.5rem)"),s===3&&(n.current.style.transform="translateY(5rem)"),s===4&&(n.current.style.transform="translateY(7.5rem)")},[s]),e("nav",{className:"skills__menu",children:r("ul",{children:[e("div",{className:"skills__bar",ref:n}),e("li",{children:e("button",{"data-view":"1",onClick:o,className:s===1?"active":null,children:"Frontend"})}),e("li",{children:e("button",{"data-view":"2",onClick:o,className:s===2?"active":null,children:"Backend"})}),e("li",{children:e("button",{"data-view":"3",onClick:o,className:s===3?"active":null,children:"Tools"})}),e("li",{children:e("button",{"data-view":"4",onClick:o,className:s===4?"active":null,children:"Methodologies"})})]})})};var z="/assets/html.281ad198.svg",O="/assets/css.02005660.svg",$="/assets/js.40a27a1f.svg",D="/assets/react.03ddbe0e.svg",H="/assets/vue.ce689462.svg",Q="/assets/node.b7d12c95.svg",Y="/assets/express.0d654bbb.svg",G="/assets/mongo.bda78459.svg",U="/assets/vite.45c31588.svg",J="/assets/git.cf84b451.svg",W="/assets/npm.5ff4574a.svg",K="/assets/eslint.63904ad1.svg",X="/assets/scrum.6b48b949.svg";const d={1:{title:"Frontend",desc:"Me atrae porque es el \xE1rea que tiene relaci\xF3n directa con el cliente. Considero importante dominar HTML, CSS y JAVASCRIPT nativos. En cuanto a frameworks, empec\xE9 con VUE y ahora me estoy especializando en REACT.",imgs:[z,O,$,D,H]},2:{title:"Backend",desc:"Imprescindible poder crear un crud con NODE y EXPRESS. En cuanto a bases de datos, por ahora he trabajado s\xF3lo con MONGODB. Sin duda es un \xE1rea en la que tambi\xE9n me gustar\xEDa seguir form\xE1ndome.",imgs:[Q,Y,G]},3:{title:"Tools",desc:"En mi d\xEDa a d\xEDa trabajo con algunas herramientas como GIT, ESLINT o NPM, y estoy aprendiendo otras como VITE, utilizado para este proyecto. Ahora me falta aprender a usarlas de manera profesional dentro de un equipo.",imgs:[J,U,W,K]},4:{title:"Methodologies",desc:"He le\xEDdo mucho sobre metodolog\xEDas \xE1giles y dada mi experiencia en el deporte son formas de organizar equipos que me resultan familiares. SCRUM, por ejemplo, es una metodolog\xEDa que viene del rugby.",imgs:[X]}},Z=({skill:s})=>e("div",{className:"skills__wrapper",children:r("article",{className:"skills__main",children:[e("h3",{className:"skills__h3",children:d[s].title}),e("p",{className:"skills__p",children:d[s].desc}),e("div",{className:"skills__logos",children:d[s].imgs.map(a=>e("img",{src:a,alt:"",className:"skills__img"},a))})]})});var ee="/assets/down.146719de.svg";const p=({skill:s})=>{const a=l.exports.useRef(),n=o=>{var t;o.target.classList.toggle("skills__reverse"),(t=a.current)==null||t.classList.toggle("skills__toggle")};return e("div",{className:"skills__wrapper",children:r("article",{className:"skills__main",children:[r("div",{className:"skills__title",children:[e("h3",{className:"skills__h3",children:d[s].title}),e("img",{onClick:n,src:ee,alt:""})]}),r("div",{className:"skills__text skills__toggle",ref:a,children:[e("p",{className:"skills__p",children:d[s].desc}),e("div",{className:"skills__logos",children:d[s].imgs.map(o=>e("img",{src:o,alt:"",className:"skills__img"},o))})]})]})})},se=()=>{const[s,a]=l.exports.useState(1),{ref:n}=m();return e("section",{id:"skills",children:r("div",{className:"skills",ref:n,children:[e(u,{text:"Hard Skills",number:"3"}),r("div",{className:"skills__container skills__container--desktop",children:[e(I,{view:s,setView:a}),e(Z,{skill:s})]}),r("div",{className:"skills__container skills__container--mobile",children:[e(p,{skill:"1"}),e(p,{skill:"2"}),e(p,{skill:"3"}),e(p,{skill:"4"})]})]})})};var ae="/assets/todoVue.d3e244a0.png",re="/assets/todoVue-tb.31738912.png",te="/assets/todoVue-mb.cc9cb72f.png",ne="/assets/landing.9875ca0f.png",oe="/assets/landing-tb.9a806de7.png",ie="/assets/landing-mb.633eacf9.png";const le={todoApp:{title:"Todo App",images:[{img:ae,class:"project__img project__img--desktop"},{img:re,class:"project__img project__img--tablet"},{img:te,class:"project__img project__img--mobile"}],desc:"Aplicaci\xF3n fullstack responsive con login de usuario. Frontend desarrollado con Vue 3 y Vue-Router. Backend con Node y Express. Base de datos MongoDB.",links:{code:"https://github.com/QuiqueSupertramp/todoList-Vue3",code2:"https://github.com/QuiqueSupertramp/API-todoList-Node",web:"https://todolistvue3.netlify.app/"}},landingPage:{title:"Landing Page",images:[{img:ne,class:"project__img project__img--desktop"},{img:oe,class:"project__img project__img--tablet"},{img:ie,class:"project__img project__img--mobile"}],desc:"P\xE1gina de producto responsive, multilenguaje y con gesti\xF3n de opiniones. Frontend desarrollado con React, CSS modules y Context API para el estado global.",links:{code:"https://github.com/QuiqueSupertramp/landing-product-page-react",web:"https://quiquesupertramp.github.io/landing-product-page-react/"}}},v=({project:s})=>{const a=le[s];return r("div",{className:"project",children:[e("div",{className:"project__images",children:a.images.map((n,o)=>e("img",{src:n.img,alt:"",className:n.class},o))}),e("h3",{className:"project__h3",children:a.title}),e("p",{className:"project__description",children:a.desc}),r("div",{className:"project__links",children:[e("a",{href:a.links.web,target:"_blank",rel:"noreferrer",className:"btn btn--filled",children:"Web"}),e("a",{href:a.links.code,target:"_blank",rel:"noreferrer",className:"btn btn--filled",children:a.links.code2?"Frontend Code":"Code"}),a.links.code2&&e("a",{href:a.links.code2,target:"_blank",rel:"noreferrer",className:"btn btn--filled",children:"Backend Code"})]})]})},ce=()=>{const{ref:s}=m();return e("section",{id:"projects",children:r("div",{className:"projects",ref:s,children:[e(u,{text:"Projects",number:"4"}),r("div",{className:"projects__main",children:[e(v,{project:"todoApp"}),e(v,{project:"landingPage"})]})]})})};const b=s=>{const[a,n]=l.exports.useState(""),[o,t]=l.exports.useState(!1),[i,c]=l.exports.useState(!1),h=x=>n(x.target.value),g=()=>n(""),S=()=>c(!0),y=()=>c(!1);return l.exports.useEffect(()=>{if(!!s){if(a.length===0)return t(!1);s.test(a)?t(!1):t(!0)}},[a]),{value:a,error:o,active:i,onChange:h,onFocus:S,onBlur:y,reset:g}},de="https://formspree.io/f/xnqwvpbo",ue=async s=>await(await fetch(de,{method:"POST",body:JSON.stringify(s),headers:{Accept:"application/json"}})).json(),me=({validations:s,email:a})=>r("div",{className:"contact__email",children:[e("input",{type:"email",className:["contact__emailInput",a.active?"blur":null].join(" "),placeholder:"Email...",value:a.value,onChange:a.onChange,onFocus:a.onFocus,onBlur:a.onBlur,required:!0}),e("div",{className:"contact__emailError",children:a.error&&r("p",{children:["* ",s.email.errorMessage]})})]}),pe=({comment:s})=>e("textarea",{className:["contact__comment",s.active?"blur":null].join(" "),rows:"6",placeholder:"Mensaje...",value:s.value,onChange:s.onChange,onFocus:s.onFocus,onBlur:s.onBlur,required:!0}),he=({submitError:s})=>e("div",{className:"contact__error",children:e("h4",{children:s===!1?"Mensaje enviado correctamente":"No se ha podido enviar"})}),f={email:{regularExp:/^[a-zñÑ0-9_-]+(?:\.[a-zñÑ0-9_-]+)*@(?:[a-z0-9](?:[a-z0-9-_]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9]*[a-z0-9])?$/,errorMessage:"El email es incorrecto"}},ge=()=>{const s=b(f.email.regularExp),a=b(),[n,o]=l.exports.useState(null),t=()=>{o(!1),s.reset(),a.reset()};return r("form",{className:"contact__form",onSubmit:c=>{if(c.preventDefault(),!s.error&&a.value.length!==0){const h={email:s.value,comment:a.value};ue(h).then(g=>{g.ok===!0?t():o(!0),setTimeout(()=>o(null),4e3)})}},children:[e(me,{validations:f,email:s}),e(pe,{comment:a}),n!==null&&e(he,{submitError:n}),e("input",{type:"submit",className:"btn btn--filled contact__submitBtn",value:"Enviar"})]})},ve=()=>{const{ref:s}=m();return e("section",{id:"contact",children:r("div",{className:"contact",ref:s,children:[e(u,{text:"Say Hello!",number:"5"}),r("div",{className:"contact__container",children:[r("div",{className:"contact__sidebar",children:[r("div",{className:"contact__text",children:[e("p",{children:"Gracias por llegar hasta aqu\xED. Espero que este portfolio, hecho con mucho cari\xF1o, haya sido de tu agrado."}),e("br",{}),e("p",{children:"Contacta conmigo a trav\xE9s del correo electr\xF3nico, redes sociales o rellenando el formulario. Hasta pronto!"})]}),r("div",{className:"contact__social",children:[e("a",{href:"mailto:quiquesupertramp@gmail.com",children:e("p",{children:"quiquesupertramp@gmail.com"})}),r("div",{className:"contact__links",children:[e("a",{href:"https://linkedin.com/in/quiquesupertramp",target:"_blank",rel:"noreferrer",children:e("img",{src:N,alt:"linkedin"})}),e("a",{href:"https://github.com/QuiqueSupertramp",target:"_blank",rel:"noreferrer",children:e("img",{src:k,alt:"github"})}),e("a",{href:"https://instagram.com/quiquesupertramp",target:"_blank",rel:"noreferrer",children:e("img",{src:j,alt:"instagram"})})]})]})]}),e(ge,{})]})]})})};var be="/assets/results.1ec91b32.svg",fe="/assets/teamwork.6b6ec656.svg",_e="/assets/conflicts.ab8ce17a.svg",ke="/assets/changes.f4244f10.svg",Ne="/assets/pressure.91996bc9.svg",je="/assets/knowledge.3d7972b5.svg";const Se=[{img:fe,title:"Trabajo en equipo",desc:'"El secreto radica en crear sinergias, proyectando los objetivos individuales hacia el colectivo. Es vital dominar la asertividad."'},{img:Ne,title:"Tolerancia a la presi\xF3n",desc:'"Estoy acostumbrado a trabajar bajo presi\xF3n, tanto en el d\xEDa a d\xEDa como en la toma de decisiones. Siempre con preparaci\xF3n y responsabilidad."'},{img:ke,title:"Adaptaci\xF3n al cambio",desc:'"Vengo de un mundo d\xF3nde el primero en adaptarse juega con ventaja. Las herramientas clave son la curiosidad y poner el foco en los detalles."'},{img:_e,title:"Resoluci\xF3n de conflictos",desc:'"Los conflictos son parte del d\xEDa a d\xEDa y la semilla del crecimiento de un equipo. Es clave escuchar, buena comunicaci\xF3n y cierta creatividad."'},{img:be,title:"Orientado a resultados",desc:'"Estoy acostumbrado a trabajar con objetivos a corto y largo plazo. Serenidad y una buena planificaci\xF3n son los ingredientes del \xE9xito."'},{img:je,title:"Formaci\xF3n continuada",desc:'"Conozco el camino y los m\xE9todos de aprendizaje eficientes, lo que me permite ser autodidacta y tener facilidad para formar a otras personas."'}],ye=({softSkill:s})=>r("div",{className:"softSkills__wrapper",children:[r("div",{className:"softSkills__title",children:[e("img",{src:s.img,alt:""}),e("h4",{children:s.title})]}),e("p",{children:s.desc})]}),xe=()=>{const{ref:s}=m();return e("section",{id:"softSkills",children:r("div",{className:"softSkills",ref:s,children:[e(u,{number:"2",text:"Soft Skills"}),e("div",{className:"softSkills__container",children:Se.map((a,n)=>e(ye,{softSkill:a},n))})]})})};function qe(){return r("div",{className:"App",children:[e(P,{}),r("main",{children:[e(T,{}),e(xe,{}),e(se,{}),e(ce,{}),e(ve,{})]})]})}q.render(e(E.StrictMode,{children:e(qe,{})}),document.getElementById("root"));
