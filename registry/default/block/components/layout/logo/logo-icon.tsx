type LogoIconProps = React.HTMLAttributes<SVGSVGElement>;

export const LogoIcon = (props: LogoIconProps) => {
  return (
    <svg
      {...props}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="8" cy="8" r="8" fill="white" />
      <circle
        className="text-primary"
        cx="8"
        cy="8"
        r="7.5"
        fill="currentColor"
      />
      <path
        d="M5.21813 12H2.74654L6.51252 1.09091H9.48482L13.2455 12H10.7739L8.04128 3.58381H7.95605L5.21813 12ZM5.06365 7.712H10.9017V9.51243H5.06365V7.712Z"
        fill="white"
      />
    </svg>
  );
};
