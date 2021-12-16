import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import BlogItem from "../blog-item";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import posts from "../../../data/posts.json";

export const useAuthGuard = () => {
  const history = useHistory();

  useEffect(() => {
    const params = new URLSearchParams(history.location.search);
    const accessToken =
      localStorage.getItem("ACCESS_TOKEN") || params.get("accessToken");

    if (!accessToken) {
      history.push("/login");
    } else if (params.get("accessToken")) {
      localStorage.setItem("ACCESS_TOKEN", accessToken);
      history.push("/");
    }
  }, []);
};

export default function BlogList() {
  useAuthGuard();

  return (
    <Row>
      {posts.map((post) => (
        <Col md={4} style={{ marginBottom: 50 }}>
          <BlogItem key={post.title} {...post} />
        </Col>
      ))}
    </Row>
  );
}
