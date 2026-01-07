import clsx from "clsx";


type ButtonVariant = "accent" | "neutral" | "outline";

type ButtonProps = {
  children: React.ReactNode;
  size?: "md" | "sm";
  variant?: ButtonVariant;
  fullWidth?: boolean;
} & (
  | ({ href: string } & React.AnchorHTMLAttributes<HTMLAnchorElement>)
  | ({ href?: never } & React.ButtonHTMLAttributes<HTMLButtonElement>)
);


const Button = (props: ButtonProps) => {
  const {
    size = "md",
    variant = "accent",
    fullWidth = false,
    href,
    children,
    className,
    ...rest
  } = props as ButtonProps & { className?: string };

  const base =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2";
  const sizes = size === "sm" ? "px-4 py-2 text-sm" : "px-6 py-3 text-base";
  const width = fullWidth ? "w-full" : "";
  const variants = {
    accent: "bg-accent text-white hover:bg-accent/90",
    neutral: "bg-neutral-200 text-neutral-900 hover:bg-neutral-300",
    outline: "border border-accent text-accent bg-transparent hover:bg-accent/10",
  };
  const style = clsx(base, sizes, width, variants[variant], className);

  if (href) {
    return (
      <a href={href} className={style} {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }

  return (
    <button className={style} {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
};

export default Button;