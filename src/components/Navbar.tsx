import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';
import { Header, Menu } from 'semantic-ui-react';

function Navbar({ location }: RouteComponentProps): JSX.Element {
    const { pathname } = location;

    return (
        <Menu secondary={true} stackable={true}>
            <Menu.Item>
                <Header size="huge">
                    Upload manager
                </Header>
            </Menu.Item>
            <Menu.Item
                active={pathname === '/'}>
                <Link to='/'>Upload</Link>
            </Menu.Item>
            <Menu.Item
                active={pathname === '/queue'}>
                <Link to='/queue'>Queue</Link>
            </Menu.Item>
        </Menu>
    );
}

export default withRouter(Navbar);