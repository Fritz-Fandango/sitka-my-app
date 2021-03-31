import * as React from 'react';

interface FileInputProps {
    onFileChange: (files: File[] | null) => void;
}

function FileInput({ onFileChange }: FileInputProps): JSX.Element {

    function onChange({ target }: React.ChangeEvent<HTMLInputElement>) {
        if (target.files !== null) {
            const files = Array.from(target.files);
            return onFileChange(files);
        }

        return onFileChange([]);
    }

    return (
        <input
            multiple={false}
            onChange={onChange}
            type="file"
            data-testid="fileInput"
        />
    )
}

export default FileInput;