import{j as S}from"./jsx-runtime-CLpGMVip.js";const C=({label:x,size:g="nomal",allCaps:b=!1,color:h="text-primary",fontColor:v})=>S.jsx("span",{className:`${g} ${h} label`,style:{color:v||void 0,textTransform:b?"uppercase":"none"},children:x});C.__docgenInfo={description:"",methods:[],displayName:"MyLabel",props:{label:{required:!0,tsType:{name:"string"},description:"Label to Display"},size:{required:!1,tsType:{name:"union",raw:"'nomal' | 'h1' | 'h2' | 'h3'",elements:[{name:"literal",value:"'nomal'"},{name:"literal",value:"'h1'"},{name:"literal",value:"'h2'"},{name:"literal",value:"'h3'"}]},description:"Size of the label",defaultValue:{value:"'nomal'",computed:!1}},allCaps:{required:!1,tsType:{name:"boolean"},description:"All characters to display in uppercase",defaultValue:{value:"false",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'text-primary' | 'text-secondary' | 'text-tertiary'",elements:[{name:"literal",value:"'text-primary'"},{name:"literal",value:"'text-secondary'"},{name:"literal",value:"'text-tertiary'"}]},description:"Color of the text",defaultValue:{value:"'text-primary'",computed:!1}},fontColor:{required:!1,tsType:{name:"string"},description:"Color of the text"}}};const q={title:"Example/MyLabel",component:C,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{size:{control:"inline-radio"}}},e={args:{label:"Hello World"}},a={args:{label:"All Caps",allCaps:!0}},r={args:{label:"Secondary",color:"text-secondary"}},l={args:{label:"Custom Color",fontColor:"#035900"}};var o,s,t;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    label: 'Hello World'
  }
}`,...(t=(s=e.parameters)==null?void 0:s.docs)==null?void 0:t.source}}};var n,c,i;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    label: 'All Caps',
    allCaps: true
  }
}`,...(i=(c=a.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var p,m,u;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: 'Secondary',
    color: 'text-secondary'
  }
}`,...(u=(m=r.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var d,y,f;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: 'Custom Color',
    fontColor: "#035900"
  }
}`,...(f=(y=l.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};const A=["Basic","AllCaps","Secondary","CustomColor"];export{a as AllCaps,e as Basic,l as CustomColor,r as Secondary,A as __namedExportsOrder,q as default};
