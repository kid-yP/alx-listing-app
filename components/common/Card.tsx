// components/common/Card.tsx
import { cn } from "@/lib/utils"
import { CardProps } from "@/interfaces"

const Card = ({
  className,
  variant = "default",
  children,
  title,
  description,
  hover = false,
  clickable = false,
  loading = false,
  bordered = true,
  shadow = "md",
  rounded = "md",
  ...props
}: CardProps) => {
  const baseStyles = "relative w-full"
  
  const variantStyles = {
    default: "bg-white",
    outline: "border border-gray-200",
    ghost: "bg-transparent"
  }
  
  const shadowStyles = {
    none: "",
    sm: "shadow-sm",
    md: "shadow-md",
    lg: "shadow-lg"
  }
  
  const roundedStyles = {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    full: "rounded-full"
  }
  
  return (
    <div
      className={cn(
        baseStyles,
        variantStyles[variant],
        shadowStyles[shadow],
        roundedStyles[rounded],
        bordered && "border border-gray-200",
        hover && "transition-all duration-200 hover:shadow-lg",
        clickable && "cursor-pointer",
        className
      )}
      {...props}
    >
      {loading ? (
        <div className="animate-pulse p-4">
          <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        </div>
      ) : (
        <div className="p-4">
          {title && (
            <h3 className="text-lg font-semibold leading-none tracking-tight">
              {title}
            </h3>
          )}
          {description && (
            <p className="text-sm text-gray-500 mt-2">{description}</p>
          )}
          {children}
        </div>
      )}
    </div>
  )
}

export default Card
