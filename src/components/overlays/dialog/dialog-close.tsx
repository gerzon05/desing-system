import { cn, dialogClose } from '@/tailwind'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import React from 'react'

export interface Comp extends React.ElementRef<typeof DialogPrimitive.Close> {}
export interface Props extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Close> {}

const DialogClose = React.forwardRef<Comp, Props>(({ className, ...props }, ref) => (
  <DialogPrimitive.Close
    ref={ref}
    className={cn(dialogClose(), className)}
    {...props}
  />
))

DialogClose.displayName = DialogPrimitive.Overlay.displayName

export default DialogClose
