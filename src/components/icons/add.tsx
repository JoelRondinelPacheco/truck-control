import { SVGProps } from "react";

export function addIcon(props?: SVGProps<SVGSVGElement>) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 36 36" {...props}><path fill="currentColor" d="M34 18A16 16 0 1 1 18 2a16 16 0 0 1 16 16m-8.41-1.5H19.5v-6.09a1.5 1.5 0 0 0-3 0v6.09h-6.09a1.5 1.5 0 0 0 0 3h6.09v6.09a1.5 1.5 0 0 0 3 0V19.5h6.09a1.5 1.5 0 0 0 0-3" className="clr-i-solid clr-i-solid-path-1"/><path fill="none" d="M0 0h36v36H0z"/></svg>
    )
  }