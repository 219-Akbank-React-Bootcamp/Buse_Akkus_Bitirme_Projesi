export type CurrentInputProps = {
    text: string;
    onSubmit: (value: string) => void;
    displayClass?: string;
    editClass?: string;
    placeholder?: string;
    defaultValue?: string;
    buttonText?: string;
};