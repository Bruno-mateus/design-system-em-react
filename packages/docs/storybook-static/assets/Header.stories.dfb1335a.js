var a=Object.defineProperty;var o=(e,r)=>a(e,"name",{value:r,configurable:!0});import{j as s}from"./jsx-runtime.9ba06c30.js";import{H as n}from"./Header.379f2f81.js";import"./iframe.556bb6e7.js";import"./index.49227ba1.js";import"./Button.bd0eb039.js";const y={title:"Example/Header",component:n,parameters:{storySource:{source:`import React from 'react';

import { Header } from './Header';

export default {
  title: 'Example/Header',
  component: Header,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = (args) => <Header {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {
    name: 'Jane Doe',
  },
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
`,locationsMap:{"logged-in":{startLoc:{col:17,line:14},endLoc:{col:47,line:14},startBody:{col:17,line:14},endBody:{col:47,line:14}},"logged-out":{startLoc:{col:17,line:14},endLoc:{col:47,line:14},startBody:{col:17,line:14},endBody:{col:47,line:14}}}},layout:"fullscreen"}},t=o(e=>s(n,{...e}),"Template"),l=t.bind({});l.args={user:{name:"Jane Doe"}};const d=t.bind({});d.args={};const L=["LoggedIn","LoggedOut"];export{l as LoggedIn,d as LoggedOut,L as __namedExportsOrder,y as default};
//# sourceMappingURL=Header.stories.dfb1335a.js.map
