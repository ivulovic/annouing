import { PropsWithChildren } from "react";

export interface ButtonAttributes {
    className?: string;
};

export type ButtonProps = PropsWithChildren<ButtonAttributes>;
