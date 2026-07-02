import { cn } from "@/lib/utils";

const fieldClasses =
  "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 transition-colors focus:border-mint-400/60";

export function Label({
  htmlFor,
  children,
  optional,
}: {
  htmlFor: string;
  children: React.ReactNode;
  optional?: boolean;
}) {
  return (
    <label htmlFor={htmlFor} className="mb-2 block text-sm font-medium text-slate-300">
      {children}
      {optional && <span className="ml-2 text-xs font-normal text-slate-500">optional</span>}
    </label>
  );
}

export function Input({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={cn(fieldClasses, className)} />;
}

export function Textarea({
  className,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea {...props} className={cn(fieldClasses, "resize-y", className)} />;
}

export function Select({
  className,
  children,
  ...props
}: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      {...props}
      className={cn(fieldClasses, "cursor-pointer appearance-none [&>option]:bg-ink-900", className)}
    >
      {children}
    </select>
  );
}
