import { ReactNode } from "react";

type Props = {
    children: ReactNode;
};

export default function Container({ children }: Props) {
    return (
        <div className="max-w-7xl w-full mx-auto px-6 md:px-10 lg:px-10">
            {children}
        </div>
    );
}