import { ReactNode } from "react";

type Props = {
    children: ReactNode;
    className?: string;
};

export default function Container({ children, className }: Props) {
    return (
        <div className={`max-w-7xl w-full mx-auto px-6 md:px-10 lg:px-10 ${className ?? ""}`}>
            {children}
        </div>
    );
}