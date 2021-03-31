import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import FileInput from '../FileInput';

const FILE = {
    size: 50,
    name: 'image.png'
};

describe('FileInput', (): void => {
    const onChange = jest.fn();

    beforeEach((): void => {
        onChange.mockClear();
    });

    it('should call passed handler when files are selected', (): void => {
        const result = render(<FileInput onFileChange={onChange}/>)
        const input = result.getByTestId('fileInput');
        fireEvent.change(input, { target: { files: [FILE]}})

        expect(onChange).toHaveBeenCalledTimes(1);
        expect(onChange).toHaveBeenCalledWith([FILE]);
    });
});