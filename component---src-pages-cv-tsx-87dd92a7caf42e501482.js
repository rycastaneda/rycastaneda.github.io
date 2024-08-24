"use strict";(self.webpackChunkmy_gatsby_site=self.webpackChunkmy_gatsby_site||[]).push([[834],{3514:function(e,t,a){var l=a(7294),n=a(4593);t.Z=e=>{let{children:t,data:a}=e;return l.createElement("div",{className:"bg-gray-300"},l.createElement(n.Z,{title:a.name,meta:[{name:"description",content:a.summary},{name:"keywords",content:"frontend dev, react, blog"}]}),l.createElement("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Fira+Sans:400,400i,600,600i"}),l.createElement("div",null,t))}},2735:function(e,t,a){a.r(t),a.d(t,{default:function(){return o}});var l=a(7294);var n=e=>{let{education:t}=e;const a=t.map(((e,t)=>l.createElement("div",{key:t},l.createElement("h2",{className:"font-bold"},e.node.institution),l.createElement("p",{className:"italics mb-2"},e.node.startDate," — ",e.node.endDate),l.createElement("p",null,e.node.studyType," in ",e.node.area))));return l.createElement("div",null,l.createElement("h1",{className:"font-bold font-mono my-4 text-2xl"},"Education"),a)};var r=e=>{let{basics:t}=e;const a=t.profiles.map(((e,t)=>{const a=e.url?l.createElement("a",{href:e.url},e.username):e.username;return l.createElement("div",{key:t},e.network&&l.createElement("strong",null,e.network,": "),a)}));return l.createElement("div",null,l.createElement("div",{className:"flex justify-center"},l.createElement("img",{src:t.picture,className:"rounded-full",alt:t.name})),l.createElement("h1",{className:"font-bold"},t.name),l.createElement("p",{className:"italic mb-4 text-2xl"},t.label),l.createElement("h1",{className:"font-bold font-mono my-4 text-2xl"},"Contact"),l.createElement("div",null,l.createElement("strong",null,"Email: "),l.createElement("a",{href:`mailto:${t.email}`},t.email)),l.createElement("div",null,l.createElement("strong",null,"Phone: "),t.phone),l.createElement("div",null,l.createElement("strong",null,"Website: "),t.website),a)};var m=e=>{let{skills:t}=e;const a=t.map(((e,t)=>l.createElement("div",{key:t,className:"rounded-full inline-block h-10 text-white px-3 pt-2 mb-1 mr-1 font-bold bg-gray-800"},e.node.name)));return l.createElement("div",null,l.createElement("h1",{className:"font-bold font-mono my-4 text-2xl"},"Skills"),a)};var c=e=>{let{work:t}=e;const a=t.map(((e,t)=>{const a=e.node.website?l.createElement("a",{href:e.node.website},e.node.company):null,n=e.node.highlights.map(((e,t)=>l.createElement("li",{key:t,className:"list-disc"},e)));return l.createElement("div",{key:t},l.createElement("h1",{className:"font-bold text-2xl"},a),l.createElement("h4",{className:"mt-4 text-gray-700"},e.node.position),l.createElement("p",{className:"italic mb-2 text-gray-700"},e.node.startDate," — ",e.node.endDate||"present"),l.createElement("p",null,e.node.summary),l.createElement("ul",{className:"text-md font-mono pl-8 py-4"},n))}));return l.createElement("div",null,l.createElement("h1",{className:"font-bold font-mono my-4 text-2xl"},"Work Experience"),a)},s=a(3514);var o=e=>{let{data:t}=e;return l.createElement(s.Z,{data:t.basic.value},l.createElement("div",{className:"container mx-auto min-h-screen pt-8 pb-20"},l.createElement("div",{className:"grid grid-cols-side gap-2 pl-4"},l.createElement("div",null,l.createElement(r,{basics:t.basic.value}),l.createElement("hr",{className:"border-t-2 h-px mt-4"}),l.createElement(m,{skills:t.allSkill.edges}),l.createElement("hr",{className:"border-t-2 h-px mt-4"}),l.createElement(n,{education:t.allEducation.edges}),l.createElement("hr",{className:"border-t-2 h-px my-4"}),l.createElement("div",{className:"my-4"},l.createElement("a",{href:"https://gitconnected.com/rycastaneda/resume",rel:"noreferrer",target:"_blank",className:"bg-gray-800 text-white py-2 px-4 mb-12"},l.createElement("i",{className:"bi bi-download"})," Download as PDF"))),l.createElement("div",{className:"ml-8"},l.createElement(c,{work:t.allWork.edges})))))}}}]);
//# sourceMappingURL=component---src-pages-cv-tsx-87dd92a7caf42e501482.js.map