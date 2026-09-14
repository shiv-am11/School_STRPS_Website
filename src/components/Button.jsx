import React from "react";

export default function Button({
  children,
  onClick,
  href,
  variant = "primary",
  size = "md",
  className = "",
  icon: Icon,
  iconPosition = "right",
  type = "button",
  disabled = false,
}) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 select-none cursor-pointer active:scale-[0.98]";

  const sizeStyles = {
    sm: "text-xs px-3.5 py-2 gap-1.5",
    md: "text-sm px-5 py-2.5 gap-2 shadow-sm",
    lg: "text-base px-6 py-3.5 gap-2.5 shadow-md",
  };

  const variantStyles = {
    primary:
      "bg-[#F4B942] text-[#0F2747] hover:bg-[#E5A830] font-semibold shadow-[#F4B942]/20 focus:ring-[#F4B942]",

    navy:
      "bg-[#0F2747] text-white hover:bg-[#173A64] font-semibold shadow-[#0F2747]/20 focus:ring-[#0F2747]",

    royal:
      "bg-[#2563A6] text-white hover:bg-[#1D4ED8] font-semibold shadow-[#2563A6]/20 focus:ring-[#2563A6]",

    outline:
      "bg-white text-[#0F2747] border border-slate-200 hover:bg-slate-50 hover:border-slate-300 focus:ring-slate-300",

    "outline-navy":
      "bg-transparent text-[#0F2747] border-2 border-[#0F2747] hover:bg-[#0F2747]/5 focus:ring-[#0F2747]",

    "outline-white":
      "bg-transparent text-white border border-white/40 hover:bg-white/10 hover:border-white focus:ring-white/50",

    subtle:
      "bg-slate-100 text-[#0F2747] hover:bg-slate-200 focus:ring-slate-300",
  };

  const combinedClasses = `
    ${baseStyles}
    ${sizeStyles[size] || sizeStyles.md}
    ${variantStyles[variant] || variantStyles.primary}
    ${disabled ? "cursor-not-allowed opacity-50" : ""}
    ${className}
  `;

  const iconElement = Icon && (
    <Icon
      className={
        size === "sm"
          ? "w-3.5 h-3.5"
          : size === "lg"
          ? "w-5 h-5"
          : "w-4 h-4"
      }
    />
  );

  const content = (
    <>
      {Icon && iconPosition === "left" && iconElement}

      <span>{children}</span>

      {Icon && iconPosition === "right" && iconElement}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={combinedClasses}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
    >
      {content}
    </button>
  );
}