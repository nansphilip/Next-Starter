import { combo } from "@lib/combo";

type LoaderProps = {
    className?: string;
    color?: "white" | "gray" | "black";
};

export default function Loader(props: LoaderProps) {
    const { color = "gray", className } = props;

    const colorMap = {
        white: "border-gray-300",
        gray: "border-gray-500",
        black: "border-gray-700",
    }

    return (
        <div
            className={combo(
                colorMap[color],
                "size-4 animate-spin rounded-full border-2 border-t-transparent",
                className
            )}
        />
    );
}
