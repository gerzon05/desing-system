import type { VariantProps } from '@/tailwind'
import { avatar, cn } from '@/tailwind'
import * as AvatarPrimitive from '@radix-ui/react-avatar'
import React from 'react'

export interface Comp extends React.ElementRef<typeof AvatarPrimitive.Root> {}
export interface Props extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>, VariantProps<typeof avatar> {}

const Avatar = React.forwardRef<Comp, Props>(({ className, size, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(avatar({ size }), className)}
    {...props}
  />
))

Avatar.displayName = AvatarPrimitive.Root.displayName

export default Avatar
