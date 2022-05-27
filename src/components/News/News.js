import React from "react";
import { Card, Col } from "react-bootstrap";

const News = ({article}) => {
 
  return (
    <div>
      <Col>
        <Card>
          <Card.Img variant="top" src={article.urlToImage} />
          <Card.Body>
            <Card.Title>{article.title}</Card.Title>
            <Card.Text>{article.description}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default News;
