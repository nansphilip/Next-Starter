"use client"

import Loader from "@comps/server/Loader";
import { combo } from "@lib/combo";
import Link from "next/link";

export type ButtonClientProps = {
    type: "link" | "button" | "submit";
    href?: string | never;
    label: string;
    loadingLabel?: string;
    isLoading?: boolean;
    variant?: "default" | "outline" | "ghost" | "underline" | "none";
    padding?: "sm" | "md" | "lg" | "none";
    ring?: boolean;
    className?: string;
    children?: React.ReactNode;
    onClick?: () => void;
} & (
    | {
          // If type "link"
          type: "link";
          href: string;
      }
    | {
          // If type "button" or "submit"
          type: "button" | "submit";
          href?: never;
      }
);

export default function ButtonClient(props: ButtonClientProps) {
    const {
        type = "button",
        href,
        label,
        loadingLabel = "Loading...",
        isLoading = false,
        variant = "default",
        padding = "md",
        ring = true,
        className,
        children,
        onClick,
    } = props;

    const labelLowerCased = label.toLocaleLowerCase();
    const labelFirstLetterCapitalized = label[0].toLocaleUpperCase() + label.slice(1).toLocaleLowerCase();

    const varianteStyle = {
        default: "bg-black text-gray-100 hover:bg-gray-800",
        outline: "border text-gray-800 hover:bg-gray-100",
        ghost: "hover:bg-gray-200",
        underline: "hover:underline",
        none: "",
    };

    const paddingStyle = {
        sm: "px-2",
        md: "py-1 px-4",
        lg: "py-1.5 px-6",
        none: "",
    };

    const classList = combo(
        "flex flex-row items-center justify-center gap-2 rounded-md outline-none transition-all duration-150",
        varianteStyle[variant],
        paddingStyle[padding],
        ring && "ring-transparent focus:ring-2 focus:ring-teal-300 focus:ring-offset-2",
        className
    );

    if (type === "link" && href) {
        return (
            <Link href={href} className={classList} id={labelLowerCased} onClick={onClick}>
                {labelFirstLetterCapitalized}
            </Link>
        );
    } else if (type === "button" || type === "submit") {
        const loaderColor = (
            variant === "default" && "white" ||
            variant === "outline" && "gray" ||
            variant === "ghost" && "gray" ||
            variant === "underline" && "gray" ||
            variant === "none" && "gray" || "black"
        )

        return (
            <button
                type={type}
                className={classList}
                id={labelLowerCased}
                name={labelLowerCased}
                onClick={onClick}
                disabled={isLoading}
            >
                {isLoading ? (
                    <>
                        <Loader color={loaderColor} />
                        <span>{loadingLabel}</span>
                    </>
                ) : (
                    children ?? labelFirstLetterCapitalized
                )}
            </button>
        );
    }
}
