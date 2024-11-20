"use client";

import { combo } from "@lib/combo";

type InputProps = {
    label: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string;

    type?: "text" | "email" | "password";
    placeholder?: boolean;

    classDiv?: string;
    classLabel?: string;
    classInput?: string;
};

export default function InputClient(props: InputProps) {
    const { label, onChange, value, type="text", placeholder = false, classDiv, classLabel, classInput } = props;

    const labelLowerCased = label.toLocaleLowerCase();
    const labelFirstLetterCapitalized = label[0].toLocaleUpperCase() + label.slice(1).toLocaleLowerCase();

    return (
        <div className={combo("flex flex-col gap-1", classDiv)}>
            <label className={combo("text-gray-600", classLabel)} htmlFor={labelLowerCased}>
                {labelFirstLetterCapitalized}
            </label>
            <input
                className={combo(
                    "rounded-md border-[1.5px] border-gray-300 px-2 outline-none ring-transparent ring-offset-0 transition-all duration-150 focus:ring-2 focus:ring-teal-300 focus:ring-offset-2",
                    classInput
                )}
                type={type}
                id={labelLowerCased}
                name={labelLowerCased}
                placeholder={placeholder ? labelFirstLetterCapitalized : ""}
                onChange={onChange}
                value={value}
            />
        </div>
    );
}
