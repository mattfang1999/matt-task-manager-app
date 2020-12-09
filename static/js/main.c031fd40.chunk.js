(this.webpackJsonptaskmanagerapp=this.webpackJsonptaskmanagerapp||[]).push([[0],{26:function(e,t,c){},27:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(1),s=c(15),r=c(2),o=c(3),d=c(4),i=c.n(d),j=c(16),l=c.n(j),b=(c(23),l.a.initializeApp({apiKey:"AIzaSyBic0yipL6n63-ch_bj4evvM0XVcLCkqr4",authDomain:"matt-task-manager.firebaseapp.com",databaseURL:"https://matt-task-manager.firebaseio.com",projectId:"matt-task-manager",storageBucket:"matt-task-manager.appspot.com",messagingSenderId:"728902353168",appId:"1:728902353168:web:38283d15434152f168a595",measurementId:"G-PXPFLK2R8X"})),u=c(8),O=[{key:"INBOX",name:"Inbox"},{key:"TODAY",name:"Today"},{key:"NEXT_7",name:"Next 7 Days"}],x=function(e){return O.find((function(t){return t.key===e}))},h=function(){var e="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",t=[];return function(){for(var c=(new Date).getTime(),n=new Array(8),a=7;a>=0;a--)n[a]=e.charAt(c%64),c=Math.floor(c/64);var s=n.join("");for(a=0;a<12;a++)s+=e.charAt(t[a]);return s}}(),f=Object(a.createContext)(),k=function(e){var t=e.children,c=function(){var e=Object(a.useState)([]),t=Object(r.a)(e,2),c=t[0],n=t[1];return Object(a.useEffect)((function(){b.firestore().collection("projects").where("userId","==","nfeCumoN").orderBy("projectId").get().then((function(e){var t=e.docs.map((function(e){return Object(u.a)(Object(u.a)({},e.data()),{},{docId:e.id})}));JSON.stringify(t)!==JSON.stringify(c)&&n(t)}))}),[c]),{projects:c,setProjects:n}}(),s=c.projects,o=c.setProjects;return Object(n.jsx)(f.Provider,{value:{projects:s,setProjects:o},children:t})},p=function(){return Object(a.useContext)(f)},m=Object(a.createContext)(),v=function(e){var t=e.children,c=Object(a.useState)("INBOX"),s=Object(r.a)(c,2),o=s[0],d=s[1];return Object(n.jsx)(m.Provider,{value:{selectedProject:o,setSelectedProject:d},children:t})},y=function(){return Object(a.useContext)(m)},_=function(e){var t=e.setProject,c=e.showProjectOverlay,a=e.setShowProjectOverlay,s=p().projects;return s&&c&&Object(n.jsx)("div",{className:"project-overlay",children:Object(n.jsx)("ul",{className:"project-overlay__list",children:s.map((function(e){return Object(n.jsx)("li",{children:Object(n.jsx)("div",{onClick:function(){t(e.projectId),a(!1)},onKeyDown:function(c){"Enter"===c.key&&(t(e.projectId),a(!1))},role:"button",tabIndex:0,children:e.name})},e.projectId)}))})})},N=function(e){var t=e.setTaskDate,c=e.showTaskDate,a=e.setShowTaskDate;return c&&Object(n.jsx)("div",{className:"task-date",children:Object(n.jsxs)("ul",{className:"task-date__list",children:[Object(n.jsx)("li",{children:Object(n.jsxs)("div",{onClick:function(){a(!1),t(i()().format("DD/MM/YYYY"))},onKeyDown:function(e){"Enter"===e.key&&(a(!1),t(i()().format("DD/MM/YYYY")))},"data-testid":"task-date-today",tabIndex:0,"aria-label":"Select today as the task date",role:"button",children:[Object(n.jsx)("span",{children:Object(n.jsx)(o.h,{})}),Object(n.jsx)("span",{children:"Today"})]})}),Object(n.jsx)("li",{children:Object(n.jsxs)("div",{onClick:function(){a(!1),t(i()().add(1,"day").format("DD/MM/YYYY"))},onKeyDown:function(e){"Enter"===e.key&&(a(!1),t(i()().add(1,"day").format("DD/MM/YYYY")))},role:"button",tabIndex:0,"aria-label":"Select tomorrow as the task date",children:[Object(n.jsx)("span",{children:Object(n.jsx)(o.i,{})}),Object(n.jsx)("span",{children:"Tomorrow"})]})}),Object(n.jsx)("li",{children:Object(n.jsxs)("div",{onClick:function(){a(!1),t(i()().add(7,"days").format("DD/MM/YYYY"))},onKeyDown:function(e){"Enter"===e.key&&(a(!1),t(i()().add(7,"days").format("DD/MM/YYYY")))},"aria-label":"Select next week as the task date",tabIndex:0,role:"button",children:[Object(n.jsx)("span",{children:Object(n.jsx)(o.g,{})}),Object(n.jsx)("span",{children:"Next week"})]})})]})})},D=function(e){var t=e.showAddTaskMain,c=void 0===t||t,s=e.shouldShowMain,d=void 0!==s&&s,j=e.showQuickAddTask,l=e.setShowQuickAddTask,u=Object(a.useState)(""),O=Object(r.a)(u,2),x=O[0],h=O[1],f=Object(a.useState)(""),k=Object(r.a)(f,2),p=k[0],m=k[1],v=Object(a.useState)(""),D=Object(r.a)(v,2),w=D[0],I=D[1],S=Object(a.useState)(d),Y=Object(r.a)(S,2),C=Y[0],g=Y[1],T=Object(a.useState)(!1),M=Object(r.a)(T,2),E=M[0],P=M[1],A=Object(a.useState)(!1),K=Object(r.a)(A,2),X=K[0],B=K[1],Q=y().selectedProject,J=function(){var e=w||Q,t="";return"TODAY"===e?t=i()().format("DD/MM/YYYY"):"NEXT_7"===e&&(t=i()().add(7,"days").format("DD/MM/YYYY")),x&&e&&b.firestore().collection("tasks").add({archived:!1,projectId:e,task:x,date:t||p,userId:"nfeCumoN"}).then((function(){h(""),I(""),g(""),P(!1)}))};return Object(n.jsxs)("div",{className:j?"add-task add-task__overlay":"add-task","data-testid":"add-task-comp",children:[c&&Object(n.jsxs)("div",{className:"add-task__shallow","data-testid":"show-main-action",onClick:function(){return g(!C)},onKeyDown:function(e){"Enter"===e.key&&g(!C)},tabIndex:0,"aria-label":"Add task",role:"button",children:[Object(n.jsx)("span",{className:"add-task__plus",children:"+"}),Object(n.jsx)("span",{className:"add-task__text",children:"Add Task"})]}),(C||j)&&Object(n.jsxs)("div",{className:"add-task__main",children:[j&&Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("div",{children:[Object(n.jsx)("h2",{className:"header",children:"Quick Add Task"}),Object(n.jsx)("span",{className:"add-task__cancel-x","aria-label":"Cancel adding task",onClick:function(){g(!1),P(!1),l(!1)},onKeyDown:function(e){"Enter"===e.key&&(g(!1),P(!1),l(!1))},tabIndex:0,role:"button",children:"X"})]})}),Object(n.jsx)(_,{setProject:I,showProjectOverlay:E,setShowProjectOverlay:P}),Object(n.jsx)(N,{setTaskDate:m,showTaskDate:X,setShowTaskDate:B}),Object(n.jsx)("input",{className:"add-task__content","aria-label":"Enter your task",type:"text",value:x,onChange:function(e){return h(e.target.value)}}),Object(n.jsx)("button",{type:"button",className:"add-task__submit",onClick:function(){return j?J()&&l(!1):J()},children:"Add Task"}),!j&&Object(n.jsx)("span",{className:"add-task__cancel",onClick:function(){g(!1),P(!1)},children:"Cancel"}),Object(n.jsx)("span",{className:"add-task__project",onClick:function(){return P(!E)},onKeyDown:function(e){"Enter"===e.key&&P(!E)},tabIndex:0,role:"button",children:Object(n.jsx)(o.f,{})}),Object(n.jsx)("span",{className:"add-task__date",onClick:function(){return B(!X)},onKeyDown:function(e){"Enter"===e.key&&B(!X)},tabIndex:0,role:"button",children:Object(n.jsx)(o.e,{})})]})]})},w=function(e){var t=e.darkMode,c=e.setDarkMode,s=Object(a.useState)(!1),d=Object(r.a)(s,2),i=d[0],j=d[1],l=Object(a.useState)(!1),b=Object(r.a)(l,2),u=b[0],O=b[1];return Object(n.jsxs)("header",{className:"header","data-testid":"header",children:[Object(n.jsxs)("nav",{children:[Object(n.jsx)("div",{className:"logo",children:Object(n.jsx)("img",{src:"/images/logo.png"})}),Object(n.jsx)("div",{className:"settings",children:Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{className:"settings__add","data-testid":"quick-add-task-action",onClick:function(){O(!0),j(!0)},children:"+"}),Object(n.jsx)("li",{className:"settings__darkmode","data-testid":"dark-mode-action",onClick:function(){return c(!t)},children:Object(n.jsx)(o.b,{})})]})})]}),Object(n.jsx)(D,{showAddTaskMain:!1,shouldShowMain:i,showQuickAddTask:u,setShowQuickAddTask:O})]})},I=c(7),S=function(e){var t=e.project,c=Object(a.useState)(!1),s=Object(r.a)(c,2),d=s[0],i=s[1],j=p(),l=j.projects,u=j.setProjects,O=y().setSelectedProject;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("span",{className:"sidebar__dot",children:"\u2022"}),Object(n.jsx)("span",{className:"sidebar__project-name",children:t.name}),Object(n.jsxs)("span",{className:"sidebar__project-delete","data-testid":"delete-project",onClick:function(){return i(!d)},onKeyDown:function(e){"Enter"===e.key&&i(!d)},tabIndex:0,role:"button","aria-label":"Confirm deletion of project",children:[Object(n.jsx)(o.j,{}),d&&Object(n.jsx)("div",{className:"project-delete-modal",children:Object(n.jsxs)("div",{className:"project-delete-modal__inner",children:[Object(n.jsx)("p",{children:"Are you sure you want to delete this project?"}),Object(n.jsx)("button",{type:"button",onClick:function(){return e=t.docId,void b.firestore().collection("projects").doc(e).delete().then((function(){u(Object(I.a)(l)),O("INBOX")}));var e},children:"Delete"}),Object(n.jsx)("span",{onClick:function(){return i(!d)},onKeyDown:function(e){"Enter"===e.key&&i(!d)},tabIndex:0,role:"button","aria-label":"Cancel adding project, do not delete",children:"Cancel"})]})})]})]})},Y=function(e){var t=e.activeValue,c=void 0===t?null:t,s=Object(a.useState)(c),o=Object(r.a)(s,2),d=o[0],i=o[1],j=y().setSelectedProject,l=p().projects;return l&&l.map((function(e){return Object(n.jsx)("li",{"data-doc-id":e.docId,className:d===e.projectId?"active sidebar__project":"sidebar__project",children:Object(n.jsx)("div",{role:"button",tabIndex:0,"aria-label":"Select ".concat(e.name," as the task project"),onClick:function(){i(e.projectId),j(e.projectId)},onKeyDown:function(t){"Enter"===t.key&&(i(e.projectId),j(e.projectId))},children:Object(n.jsx)(S,{project:e})})},e.projectId)}))},C=function(e){var t=e.shouldShow,c=void 0!==t&&t,s=Object(a.useState)(c),o=Object(r.a)(s,2),d=o[0],i=o[1],j=Object(a.useState)(""),l=Object(r.a)(j,2),u=l[0],O=l[1],x=h(),f=p(),k=f.projects,m=f.setProjects;return Object(n.jsxs)("div",{className:"add-project",children:[d&&Object(n.jsxs)("div",{className:"add-project__input",children:[Object(n.jsx)("input",{value:u,onChange:function(e){return O(e.target.value)},className:"add-project__name",type:"text",placeholder:"Name your project"}),Object(n.jsx)("button",{className:"add-project__submit",type:"button",onClick:function(){return u&&b.firestore().collection("projects").add({projectId:x,name:u,userId:"nfeCumoN"}).then((function(){m(Object(I.a)(k)),O(""),i(!1)}))},children:"Add Project"}),Object(n.jsx)("span",{className:"add-project__cancel",onClick:function(){return i(!1)},onKeyDown:function(e){"Enter"===e.key&&i(!1)},role:"button",tabIndex:0,children:"Cancel"})]}),Object(n.jsx)("span",{className:"add-project__plus",children:"+"}),Object(n.jsx)("span",{"aria-label":"Add Project",className:"add-project__text",onClick:function(){return i(!d)},onKeyDown:function(e){"Enter"===e.key&&i(!d)},role:"button",tabIndex:0,children:"Add Project"})]})},g=function(){var e=y().setSelectedProject,t=Object(a.useState)("inbox"),c=Object(r.a)(t,2),s=c[0],d=c[1],i=Object(a.useState)(!0),j=Object(r.a)(i,2),l=j[0],b=j[1];return Object(n.jsxs)("div",{className:"sidebar","data-testid":"sidebar",children:[Object(n.jsxs)("ul",{className:"sidebar__generic",children:[Object(n.jsx)("li",{"data-testid":"inbox",className:"inbox"===s?"active":void 0,onClick:function(){d("inbox"),e("INBOX")},children:Object(n.jsxs)("div",{"data-testid":"inbox-action","aria-label":"Show inbox tasks",tabIndex:0,role:"button",onClick:function(){d("inbox"),e("INBOX")},onKeyDown:function(t){"Enter"===t.key&&(d("inbox"),e("INBOX"))},children:[Object(n.jsx)("span",{children:Object(n.jsx)(o.c,{})}),Object(n.jsx)("span",{children:"Inbox"})]})}),Object(n.jsx)("li",{"data-testid":"today",className:"today"===s?"active":void 0,children:Object(n.jsxs)("div",{"data-testid":"today-action","aria-label":"Show today's tasks",tabIndex:0,role:"button",onClick:function(){d("today"),e("TODAY")},onKeyDown:function(t){"Enter"===t.key&&(d("today"),e("TODAY"))},children:[Object(n.jsx)("span",{children:Object(n.jsx)(o.d,{})}),Object(n.jsx)("span",{children:"Today"})]})}),Object(n.jsx)("li",{"data-testid":"next_7",className:"next_7"===s?"active":void 0,children:Object(n.jsxs)("div",{"data-testid":"next_7-action","aria-label":"Show tasks for the next 7 days",tabIndex:0,role:"button",onClick:function(){d("next_7"),e("NEXT_7")},onKeyDown:function(t){"Enter"===t.key&&(d("next_7"),e("NEXT_7"))},children:[Object(n.jsx)("span",{children:Object(n.jsx)(o.e,{})}),Object(n.jsx)("span",{children:"Next 7 days"})]})})]}),Object(n.jsxs)("div",{className:"sidebar__middle","aria-label":"Show/hide projects",onClick:function(){return b(!l)},onKeyDown:function(e){"Enter"===e.key&&b(!l)},role:"button",tabIndex:0,children:[Object(n.jsx)("span",{children:Object(n.jsx)(o.a,{className:l?void 0:"hidden-projects"})}),Object(n.jsx)("h2",{children:"Projects"})]}),Object(n.jsx)("ul",{className:"sidebar__projects",children:l&&Object(n.jsx)(Y,{})}),l&&Object(n.jsx)(C,{})]})},T=function(e){var t=e.id;return Object(n.jsx)("div",{className:"checkbox-holder",onClick:function(){b.firestore().collection("tasks").doc(t).update({archived:!0})},children:Object(n.jsx)("span",{className:"checkbox"})})},M=function(){var e=y().selectedProject,t=p().projects,c=function(e){var t=Object(a.useState)([]),c=Object(r.a)(t,2),n=c[0],s=c[1],o=Object(a.useState)([]),d=Object(r.a)(o,2),j=d[0],l=d[1];return Object(a.useEffect)((function(){var t=b.firestore().collection("tasks").where("userId","==","nfeCumoN");return t=(t=e&&!x(e)?t=t.where("projectId","==",e):"TODAY"===e?t=t.where("date","==",i()().format("DD/MM/YYYY")):"INBOX"===e||0===e?t=t.where("date","==",""):t).onSnapshot((function(t){var c=t.docs.map((function(e){return Object(u.a)({id:e.id},e.data())}));s("NEXT_7"===e?c.filter((function(e){return i()(e.date,"DD-MM-YYYY").diff(i()(),"days")<=7&&!0!==e.archived})):c.filter((function(e){return!0!==e.archived}))),l(c.filter((function(e){return!1!==e.archived})))})),function(){return t()}}),[e]),{tasks:n,archivedTasks:j}}(e).tasks,s="";return t&&e&&!x(e)&&(s=function(e,t){return e.find((function(e){return e.projectId===t}))}(t,e).name,console.log("projectName 1: ",s)),x(e)&&e&&(s=function(e,t){return e.find((function(e){return e.key===t}))}(O,e).name,console.log("projectName 2: ",s)),Object(a.useEffect)((function(){document.title="".concat(s,": Task!")})),Object(n.jsxs)("div",{className:"tasks","data-testid":"tasks",children:[Object(n.jsx)("h2",{"data-testid":"project-name",children:s}),Object(n.jsx)("ul",{className:"tasks__list",children:c.map((function(e){return Object(n.jsxs)("li",{children:[Object(n.jsx)(T,{id:e.id,taskDesc:e.task}),Object(n.jsx)("span",{children:e.task})]},"".concat(e.id))}))}),Object(n.jsx)(D,{})]})},E=function(){return Object(n.jsxs)("section",{className:"content",children:[Object(n.jsx)(g,{}),Object(n.jsx)(M,{})]})},P=function(e){var t=e.darkModeDefault,c=void 0!==t&&t,s=Object(a.useState)(c),o=Object(r.a)(s,2),d=o[0],i=o[1];return Object(n.jsx)(v,{children:Object(n.jsx)(k,{children:Object(n.jsxs)("main",{"data-testid":"application",className:d?"darkmode":void 0,children:[Object(n.jsx)(w,{darkMode:d,setDarkMode:i}),Object(n.jsx)(E,{})]})})})};c(26);Object(s.render)(Object(n.jsx)(P,{}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.c031fd40.chunk.js.map