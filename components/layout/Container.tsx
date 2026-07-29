import type { ElementType, ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  size?: "default" | "wide" | "full";
};

const sizes = {
  default: "max-w-[1300px]",
  wide: "max-w-[1500px]",
  full: "max-w-[1700px]",
};

export default function Container({
  children,
  as: Component = "div",
  className = "",
  size = "wide",
}: ContainerProps) {
  return (
    <Component
      className={`mx-auto w-full px-6 md:px-12 lg:px-20 ${sizes[size]} ${className}`}
    >
      {children}
    </Component>
  );
}