"use client";

import React, { useState } from "react";
import {
  BgColorsOutlined,
  ExperimentOutlined,
  ThunderboltOutlined,
  GithubOutlined,
  ToolOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu, Row, Col } from "antd";
import { usePathname } from "next/navigation";
import Link from "next/link";

const items: MenuProps["items"] = [
  {
    label: <Link href='/'>MIC-ImgPrompt</Link>,
    key: "/",
    icon: <BgColorsOutlined />,
  },
];

export function Navigation() {
  const pathname = usePathname();
  const [current, setCurrent] = useState(pathname);

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <Row justify='space-between' align='middle' gutter={16}>
      <Col xs={20} sm={18} md={16}>
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode='horizontal'
          items={items}
        />
      </Col>
      <Col>
        <Row gutter={16} wrap={false}>
        </Row>
      </Col>
    </Row>
  );
}
