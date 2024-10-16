import { cn, tableFooter } from '@/tailwind'
import React from 'react'

export interface Props extends React.HTMLAttributes<HTMLTableSectionElement> {}
export interface Comp extends HTMLTableSectionElement {}

const TableFooter = React.forwardRef<Comp, Props>(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn(
      tableFooter(),
      className,
    )}
    {...props}
  />
))

TableFooter.displayName = 'TableFooter'

export default TableFooter
