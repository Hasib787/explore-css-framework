import { React, useEffect, useState } from "react";
import { Row, Spinner } from "react-bootstrap";
import News from "../News/News";

const Newses = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/everything?q=bitcoin&apiKey=3bb8704cfe194767b1653a9999abd6a3"
    )
      .then((res) => res.json())
      .then((data) => setNews(data.articles));
  }, []);

  return (
    <div>
      {news.length === 0 ? (
        <Spinner animation="border" variant="primary" />
      ) : (
        <Row xs={1} md={3} className="g-4 ">
          {news.map((news, index) => (
            <News article={news} key={index} />
          ))}
        </Row>
      )}
    </div>
  );
};

export default Newses;
