// src/lib/components/Button/Button.tsx
import React from "react";

export interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    variant?: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = ({ children, onClick, disabled = false, variant = "primary" }) => {
    const baseStyles: React.CSSProperties = {
        padding: "0.75rem 1.5rem",
        border: "none",
        borderRadius: "6px",
        fontSize: "1rem",
        fontWeight: "500",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.6 : 1,
        transition: "all 0.2s ease",
    };

    const variantStyles: React.CSSProperties =
        variant === "primary"
            ? {
                  backgroundColor: "#007bff",
                  color: "white",
              }
            : {
                  backgroundColor: "#6c757d",
                  color: "white",
              };

    return (
        <button
            color="primary"
            style={{ ...baseStyles, ...variantStyles }}
            onClick={onClick}
            disabled={disabled}
            onMouseOver={(e) => {
                if (!disabled) {
                    e.currentTarget.style.opacity = "0.9";
                }
            }}
            onMouseOut={(e) => {
                if (!disabled) {
                    e.currentTarget.style.opacity = "1";
                }
            }}
        >
            {children}
        </button>
    );
};

export default Button;
