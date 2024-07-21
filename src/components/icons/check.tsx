import { SVGProps } from "react";

export function checkIcon(props?: SVGProps<SVGSVGElement>) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2"><path d="M12 21a9 9 0 1 0-6.364-2.636"/><path d="m16 10l-3.598 4.318c-.655.786-.983 1.18-1.424 1.2c-.44.02-.803-.343-1.527-1.067L8 13"/></g></svg>
    )
  }