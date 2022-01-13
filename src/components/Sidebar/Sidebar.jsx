import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader } from 'react-pro-sidebar';
import './Sidebar.css'

export const Sidebar = (props) => {
    console.log(props)
    let bridgeStatus = (props.user.bridge === undefined) ? 'Not Connected to Bridge' : 'Connected!'
    return (
        <ProSidebar>
            <Menu iconShape="square">
                <SidebarHeader>{bridgeStatus}</SidebarHeader>
                <MenuItem>Select Bridge</MenuItem>
            </Menu>
        </ProSidebar>
    );

}
export default Sidebar