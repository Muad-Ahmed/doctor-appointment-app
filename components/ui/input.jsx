import * as React from "react";
import { cn } from "@/lib/utils";

// تحسين: إضافة واجهة (Interface) لدعم TypeScript وتسهيل استخدام المكون
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        ref={ref} 
        data-slot="input"
        className={cn(
        
          "flex h-10 w-full rounded-xl border border-input bg-background px-3 py-2 text-sm ring-offset-background",
          "file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground",
          "placeholder:text-muted-foreground/60",
          

          "dark:bg-input/20 backdrop-blur-sm transition-all duration-200",
          
          //  (Focus) 
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          
          // (Disabled)
          "disabled:cursor-not-allowed disabled:opacity-50",
          
          // (Invalid)
          "aria-invalid:border-destructive aria-invalid:ring-destructive/20",
          
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = "Input"; // تحسين: ضروري عند استخدام forwardRef لتسهيل التصحيح (Debugging)

export { Input };
