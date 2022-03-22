import React, { useState } from "react";
import { Layout, Menu, Breadcrumb, Button} from "antd";
import { postData } from "./posts";
import { PostsList } from "./components/PostsList";


const { Header, Content, Footer } = Layout;

export const AppAnt = () => { 
  const [posts, setPosts] = useState(postData);

  return (
    <>
      <Layout>
        <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
          <div className="logo">
          </div>

          <Menu className="menu" theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
            <Menu.Item key="1"><a href="https://react-learning.ru/">Home</a></Menu.Item>
            <Menu.Item key="2"> <a href="https://react-learning.ru/">Remix Docs</a></Menu.Item>
            <Menu.Item key="3"><a href="https://github.com/Dmitry495">GitHub</a></Menu.Item>
          </Menu>
        </Header>

        <Content 
          className="site-layout"
          style={{ padding: "0 50px", marginTop: 64 }}
        >
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item> 
            <Breadcrumb.Item>All Posts</Breadcrumb.Item>
            <Button>Create post</Button>
          </Breadcrumb>  
         
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 380 }}
          >
            <PostsList postsData={posts}/>

          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2022 Created by Ant UED
        </Footer>
      </Layout>
    </>
  );  
};