// interfaces/index.ts
import { ButtonHTMLAttributes, HTMLAttributes } from "react"

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  variant?: 'default' | 'outline' | 'ghost';
  children: React.ReactNode;
  title?: string;
  description?: string;
  hover?: boolean;
  clickable?: boolean;
  loading?: boolean;
  bordered?: boolean;
  shadow?: 'none' | 'sm' | 'md' | 'lg';
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full';
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg' | 'icon';
  children: React.ReactNode;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  loading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
}
