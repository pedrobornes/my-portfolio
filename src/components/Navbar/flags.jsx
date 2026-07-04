function FlagSpain({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 640 480"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect width="640" height="480" fill="#AA151B" />
      <rect y="120" width="640" height="240" fill="#F1BF00" />
    </svg>
  )
}

function FlagUSA({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 7410 3900"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect width="7410" height="3900" fill="#B22234" />
      <path
        fill="#FFFFFF"
        d="M0,450 H7410 M0,1350 H7410 M0,2250 H7410 M0,3150 H7410"
        stroke="#FFFFFF"
        strokeWidth="300"
      />
      <rect width="2964" height="2100" fill="#3C3B6E" />
      <g fill="#FFFFFF">
        <circle cx="247" cy="210" r="120" />
        <circle cx="741" cy="210" r="120" />
        <circle cx="1235" cy="210" r="120" />
        <circle cx="1729" cy="210" r="120" />
        <circle cx="2223" cy="210" r="120" />
        <circle cx="2717" cy="210" r="120" />
        <circle cx="494" cy="420" r="120" />
        <circle cx="988" cy="420" r="120" />
        <circle cx="1482" cy="420" r="120" />
        <circle cx="1976" cy="420" r="120" />
        <circle cx="2470" cy="420" r="120" />
      </g>
    </svg>
  )
}

export { FlagSpain, FlagUSA }
