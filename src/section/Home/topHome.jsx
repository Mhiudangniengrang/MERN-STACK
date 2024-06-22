import React from "react";
import { Layout, Carousel } from "antd";
import WatchCard from "./watchCard";
function TopHome() {
  const { Content } = Layout;

  return (
    <div>
      <Layout>
        <Carousel autoplay>
          <div>
            <img
              src="https://www.carlsuchy.com/wp-content/uploads/2024/02/CS-Web-Waltz-Collection2024-1-1920x1080.jpg"
              alt="Description"
              style={{ width: "100%", maxHeight: "500px", objectFit: "cover" }}
            />
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1604242692760-2f7b0c26856d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Description"
              style={{ width: "100%", maxHeight: "500px", objectFit: "cover" }}
            />
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1598624725582-39c9f21bc565?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Description"
              style={{ width: "100%", maxHeight: "500px", objectFit: "cover" }}
            />
          </div>
        </Carousel>
        <Content className="mx-[250px] p-8">
          <WatchCard />
        </Content>
      </Layout>
    </div>
  );
}
export default TopHome;
