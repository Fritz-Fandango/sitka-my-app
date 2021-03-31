import * as React from 'react';
import { render } from '@testing-library/react';

import Navbar from '../Navbar';
import { renderWithRouter } from '../../__testhelpers__';

describe('Navbar', (): void => {
    it('should show link to upload page', (): void => {
        const result = render(renderWithRouter(<Navbar />))
        const link = result.getByText('Upload');

        expect(link).toBeInTheDocument();
        expect(link.getAttribute('href')).toEqual('/');
    });

    it('should show link to queue page', (): void => {
        const result = render(renderWithRouter(<Navbar />))
        const link = result.getByText('Queue');

        expect(link).toBeInTheDocument();
        expect(link.getAttribute('href')).toEqual('/queue');
    });
});