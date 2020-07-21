/**
 * @Author: harsha
 * @Date:   2020-07-21T13:18:18+02:00
 * @Last modified by:   harsha
 * @Last modified time: 2020-07-21T14:36:30+02:00
 */
import React, { Fragment, Component } from "react";
import { Header } from "semantic-ui-react";
import { useLocation } from "react-router-dom";
import { Avatar, Badge } from "antd";
import { MailOutlined, MenuOutlined } from "@ant-design/icons";
import HeaderStyles from "./HeaderStyles";

export const HeaderComponent = () => {
  let location = useLocation();
  return (
    <Fragment>
      <HeaderStyles>
        <Header textAlign="center">
          {location.pathname === "/" && (
            <Header.Content className="header-title">ZKSystems</Header.Content>
          )}
          {location.pathname !== "/" && (
            <div className="header-container">
              <MenuOutlined className="hamburger-menu" />
              <Header.Content className="header-title">
                ZKSystems
              </Header.Content>
              <div className="user-grid">
                <Avatar
                  style={{
                    backgroundColor: "purple",
                    verticalAlign: "middle",
                    margin: "20px"
                  }}
                  size="large"
                >
                  SM
                </Avatar>
                <Badge count={5}>
                  <MailOutlined />
                </Badge>
              </div>
            </div>
          )}
        </Header>
      </HeaderStyles>
    </Fragment>
  );
};
