import * as React from "react"
import type { SVGProps } from "react"

export function NelsonGPTIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={80}
      height={80}
      viewBox="0 0 80 80"
      className="bg-primary"
      fill="none"
      {...props}
    >
      <g clipPath="url(#nelsongpt)">
        <mask
          id="nelsongpt"
          width={80}
          height={80}
          x={0}
          y={0}
          maskUnits="userSpaceOnUse"
          style={{
            maskType: "luminance",
          }}
        >
          <path fill="currentColor" d="M80 0H0v80h80z" />
        </mask>
        <g fill="currentColor" mask="url(#b)">
          {/* Medical cross symbol */}
          <path d="M36 20h8v12h12v8H44v12h-8V40H24v-8h12z" />
          {/* Stethoscope shape */}
          <path d="M20 40a10 10 0 0 1 10-10 10 10 0 0 1 10 10v4a6 6 0 0 0 6 6 6 6 0 0 0 6-6v-4a10 10 0 0 1 20 0 10 10 0 0 1-20 0v4a14 14 0 0 1-28 0v-4a10 10 0 0 1 10-10z" />
        </g>
      </g>
      <defs>
        <clipPath id="nelsongpt">
          <path fill="currentColor" d="M0 0h80v80H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}