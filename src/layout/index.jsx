/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { Avatar, Layout, notification, Input, Dropdown } from "antd";
import useAuth from "../hooks/useAuthen.js";
import logo from "../assets/images/LG_WS.jpg";
import imgae from "../assets/images/gprh1000-kv-1920x612.avif";
import { SearchOutlined } from "@ant-design/icons";

const { Content, Footer, Header } = Layout;

const DashboardLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const { isAuthenticated, infoUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;
    if (searchValue.trim() !== "") {
      navigate(`/watch/search/${searchValue}`);
    }
  };

  DashboardLayout.propTypes = {
    children: PropTypes.node.isRequired,
  };

  const handleLogout = () => {
    logout();
    notification.success({
      message: "Logout Successful",
      description: "You have successfully logged out.",
      duration: 2,
    });
  };

  const items = () => {
    return [
      {
        label: (
          <a href={`/users/info/${infoUser._id}`}>
            {isAuthenticated ? <strong>{infoUser.membername}</strong> : ""}
          </a>
        ),
        key: "0",
      },
      infoUser.isAdmin && {
        label: <a href="/admin/dashboard">Dashboard</a>,
        key: "1",
      },
      {
        label: (
          <a href={`/user/change-password/${infoUser._id}`}>Đổi mật khẩu</a>
        ),
        key: "2",
      },
      {
        label: (
          <p
            className="text-blue-500 font-bold hover:underline cursor-pointer"
            onClick={handleLogout}
          >
            Đăng Xuất
          </p>
        ),
        key: "3",
      },
    ].filter(Boolean);
  };
  console.log(">>>check user", infoUser);

  return (
    <Layout className="min-h-screen bg-[#fff] flex flex-col">
      <Header className="bg-[#ebecf0] flex justify-between items-center h-[80px] shadow-md px-8">
        <div className="flex items-center space-x-12">
          <div className="flex flex-row items-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzx1ufrnUwMOku8e-sp7wnrhCXDADDl0coDixTRAEmBkkzd_ffYGVQL4VsCF4xK66RU4c&usqp=CAU"
              className="w-[110px] h-[90px] ml-6 bg-[#f1f3f4]"
            />
          </div>
          <div className="flex justify-center space-x-8 font-bold text-md">
            <Link to="/home" className="header-link">
              Home
            </Link>
          </div>
        </div>
        <div>
          <form onSubmit={handleSearch}>
            <Input
              name="search"
              className="rounded-none w-56 float-right ml-[500px]"
              placeholder="Search by watch"
              prefix={<SearchOutlined />}
              allowClear
            />
          </form>
        </div>
        <Dropdown
          menu={{
            items: items(),
          }}
          placement="bottomLeft"
          trigger={["click"]}
        >
          <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
            <Avatar
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7rHb3Lmhnhau0CLSdDWBu3f4RKAiXHEV7hQ&s"
              size="large"
            />
          </a>
        </Dropdown>
      </Header>
      <Content className="bg-[#f5f5f5]">
        <div className="rounded-xl min-w-[250px] bg-[#f5f5f5]">{children}</div>
      </Content>
      <Footer className="text-center bg-[#ebecf0]">
        Copyright ©{new Date().getFullYear()} Watches
      </Footer>
    </Layout>
  );
};
export default DashboardLayout;
