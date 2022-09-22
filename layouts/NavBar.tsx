import Link from "next/link";
import { Component } from "react";

import { Typography, Drawer } from "antd";
import { UnorderedListOutlined } from "@ant-design/icons";


class NavBar extends Component {
    constructor (props) {
        super(props);
        this.state = {
            drawerOpen: false
        };
    }

    render () {
        return (
            <nav className="navBar padding">
                <div className="brand">
                    <Link href="/">
                        <a>
                            <Typography.Title level={4}>DISCOMMU</Typography.Title>
                        </a>
                     </Link>
                </div>

                <div className="menu">
                    <div className="left">

                    </div>
                    <div className="right">

                    </div>
                    <UnorderedListOutlined />
                </div>
            </nav>
        )
    }
}

export default NavBar;
