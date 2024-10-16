import { avatarImage, cn } from '@/tailwind'
import * as AvatarPrimitive from '@radix-ui/react-avatar'
import * as React from 'react'

export interface Comp extends React.ElementRef<typeof AvatarPrimitive.Image> {}
export interface Props extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image> {}

const AvatarImage = React.forwardRef<Comp, Props>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn(avatarImage(), className)}
    {...props}
  />
))

AvatarImage.displayName = AvatarPrimitive.Image.displayName

export default AvatarImage
