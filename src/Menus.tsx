import React, { Component } from 'react';
import './Menus.css';

interface MenuProps {
    menuItems: MenuItem[];
}

interface MenuItem {
    id: number;
    label: string;
    subMenuItems?: MenuItem[];
}

interface MenuState {
    activeMenuItemId?: number;
}

class Menu extends Component<MenuProps, MenuState> {
    constructor(props: MenuProps) {
        super(props);
        this.state = {
            activeMenuItemId: undefined,
        };
    }

    handleMenuItemClick = (id: number) => {
        this.setState({ activeMenuItemId: id });
    };

    renderSubMenuItems = (subMenuItems?: MenuItem[]) => {
        if (!subMenuItems) return null;

        return (
            <ul className="sub-menu">
                {subMenuItems.map((item) => (
                    <li key={item.id}>
                        <a
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                this.handleMenuItemClick(item.id);
                            }}
                        >
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
        );
    };

    renderMenuItems = (menuItems: MenuItem[]) => {
        return (
            <ul className="menu">
                {menuItems.map((item) => (
                    <li
                        key={item.id}
                        className={item.id === this.state.activeMenuItemId ? 'active' : ''}
                    >
                        <a
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                this.handleMenuItemClick(item.id);
                            }}
                        >
                            {item.label}
                        </a>
                        {this.renderSubMenuItems(item.subMenuItems)}
                    </li>
                ))}
            </ul>
        );
    };

    render() {
        return <div>{this.renderMenuItems(this.props.menuItems)}</div>;
    }
}

export default Menu;
