import type { SVGProps } from 'react'

export function Copy(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1.2rem" height="1.2rem" viewBox="0 0 24 24" {...props}>
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color="currentColor">
        <path d="M9 15c0-2.828 0-4.243.879-5.121C10.757 9 12.172 9 15 9h1c2.828 0 4.243 0 5.121.879C22 10.757 22 12.172 22 15v1c0 2.828 0 4.243-.879 5.121C20.243 22 18.828 22 16 22h-1c-2.828 0-4.243 0-5.121-.879C9 20.243 9 18.828 9 16z"></path>
        <path d="M17 9c-.003-2.957-.047-4.489-.908-5.538a4 4 0 0 0-.554-.554C14.43 2 12.788 2 9.5 2c-3.287 0-4.931 0-6.038.908a4 4 0 0 0-.554.554C2 4.57 2 6.212 2 9.5c0 3.287 0 4.931.908 6.038a4 4 0 0 0 .554.554c1.05.86 2.58.906 5.538.908"></path>
      </g>
    </svg>
  )
}
