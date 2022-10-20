import { PropsWithChildren } from "react"

export type ModalProps = PropsWithChildren<{
    onClose: () => void;
}>