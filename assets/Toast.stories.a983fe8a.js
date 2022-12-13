var i=Object.defineProperty;var s=(e,t)=>i(e,"name",{value:t,configurable:!0});import{r}from"./index.1a9923d2.js";import{a as c,d as p}from"./index.941611da.js";import{a as u,j as a}from"./jsx-runtime.9151f591.js";import"./iframe.8f0b59c7.js";import"./index.ce2a2007.js";const m=s(e=>{const[t,n]=r.exports.useState(!1),o=r.exports.useRef(0);return r.exports.useEffect(()=>()=>clearTimeout(o.current),[]),u("div",{children:[a(c,{onClick:()=>{n(!1),window.clearTimeout(o.current),o.current=window.setTimeout(()=>{n(!0)},100)},children:"Agendar"}),a(p,{open:t,onOpenChange:n,...e})]})},"DemoToast"),x={parameters:{storySource:{source:`import React, { useEffect, useRef, useState } from 'react'
import { Button, Toast, ToastProps } from '@ignite-ui/react'
import { Meta, StoryObj } from '@storybook/react'

export const DemoToast = (props: ToastProps) => {
  const [IsOpen, setOpen] = useState(false)

  const timerRef = useRef(0)

  useEffect(() => {
    return () => clearTimeout(timerRef.current)
  }, [])

  return (
    <div>
      <Button
        onClick={() => {
          setOpen(false)
          window.clearTimeout(timerRef.current)
          timerRef.current = window.setTimeout(() => {
            setOpen(true)
          }, 100)
        }}
      >
        Agendar
      </Button>
      <Toast open={IsOpen} onOpenChange={setOpen} {...props} />
    </div>
  )
}

export default {
  title: 'Data Display/Toast',
  component: DemoToast,
  args: {
    title: 'Agendamento realizado',
    description: 'Quarta-feira, 23 de Outubro as 16h ',
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
`,locationsMap:{"demo-toast":{startLoc:{col:25,line:5},endLoc:{col:1,line:30},startBody:{col:25,line:5},endBody:{col:1,line:30}}}}},title:"Data Display/Toast",component:m,args:{title:"Agendamento realizado",description:"Quarta-feira, 23 de Outubro as 16h "}},g={},R=["DemoToast","Primary"];export{m as DemoToast,g as Primary,R as __namedExportsOrder,x as default};
//# sourceMappingURL=Toast.stories.a983fe8a.js.map
