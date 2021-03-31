import * as React from 'react';
import { createMemoryHistory, MemoryHistory } from 'history';
import { Router, Route, RouteComponentProps } from 'react-router-dom';

function renderWithRouter(
	children: React.ReactNode,
	history: MemoryHistory = createMemoryHistory()
): JSX.Element {
	return (
        <Router history={history}>
            <React.Fragment>
                {children}
            </React.Fragment>
        </Router>
    );
}

export {
    renderWithRouter
}