import * as React from 'react';
import { Header } from 'semantic-ui-react';

function QueuePage(): JSX.Element {
    return (
        <React.Fragment>
            <Header size="huge">Uploads</Header>
            <p>Uploaded files</p>
        </React.Fragment>
    )
}

export default QueuePage;