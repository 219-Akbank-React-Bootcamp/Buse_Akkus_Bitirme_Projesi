export type LabelProps = {
    item: LabelValuesProps;
    removeLabel?: (label: LabelValuesProps) => void;
}


export type LabelValuesProps = {
    color: string;
    text: string;
}