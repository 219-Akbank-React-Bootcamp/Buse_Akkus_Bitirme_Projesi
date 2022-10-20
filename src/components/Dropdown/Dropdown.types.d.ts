import { PropsWithChildren } from "react";

export type DropdownProps = PropsWithChildren<{
    onClose: () => void;
    class: string
}>