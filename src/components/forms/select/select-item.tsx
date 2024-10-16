import type { VariantProps } from '@/tailwind'
import { cn, selectItem } from '@/tailwind'
import * as SelectPrimitive from '@radix-ui/react-select'
import * as React from 'react'

export interface Props extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>,
  VariantProps<typeof selectItem> {}
export interface Comp extends React.ElementRef<typeof SelectPrimitive.Item> {}

const SelectItem = React.forwardRef<Comp, Props>(({ className, children, ...props }, ref) => {
  return (
    <SelectPrimitive.Item
      ref={ref}
      className={cn(
        selectItem(),
        className,
      )}
      {...props}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <SelectPrimitive.ItemIndicator>
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  )
})
SelectItem.displayName = 'SelectItem'

export default SelectItem
