import React from "react";
import clsx from "clsx";

const Loader = ({
  size = "md",
  text,
  fullScreen = false,
  className,
}) => {
  const sizes = {
    sm: "h-4 w-4 border-2",
    md: "h-6 w-6 border-2",
    lg: "h-10 w-10 border-4",
  };

  return (
    <div
      className={clsx(
        "flex items-center justify-center gap-2",
        fullScreen && "fixed inset-0 bg-white/70 z-50",
        className
      )}
    >
      <span
        className={clsx(
          "animate-spin rounded-full border-primary-500 border-t-transparent",
          sizes[size]
        )}
      />
      {text && (
        <span className="text-sm text-gray-500">{text}</span>
      )}
    </div>
  );
};

export default Loader;
