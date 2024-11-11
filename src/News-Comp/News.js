import React, { useEffect, useState } from "react";
import News_Item from "./NewsItem";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const updateNews = async () => {
    setLoading(true);
    try {
      const url = `https://newsapi.org/v2/everything?q=${props.query}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;

      const data = await fetch(url);
      const parsedData = await data.json();
      setTotalResults(parsedData.totalResults);
      setArticles(parsedData.articles);
    } catch (error) {
      console.error("Failed to fetch news:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    updateNews();
  }, [page]); // Reload news whenever page changes

  const handlePreviousClick = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNextClick = () => {
    if (page < Math.ceil(totalResults / props.pageSize)) setPage(page + 1);
  };

  return (
    <div className="container my-3">
      <h1 className="text-center" style={{ margin: "35px 0px", marginTop: "90px" }}>
        News-Beta - Latest News
      </h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="row">
          {articles.map((article) => (
            <div className="col-md-4" key={article.url}>
              <News_Item
                title={article.title || "No Title"}
                description={article.description || "No Description"}
                imageUrl={article.urlToImage}
                newsUrl={article.url}
                author={article.author}
                date={article.publishedAt}
              />
            </div>
          ))}
        </div>
      )}
      <div className="container d-flex justify-content-between">
        <button
          disabled={page <= 1}
          type="button"
          className="btn btn-primary"
          onClick={handlePreviousClick}
        >
          &larr; Previous
        </button>
        <button
          disabled={page >= Math.ceil(totalResults / props.pageSize)}
          type="button"
          className="btn btn-primary"
          onClick={handleNextClick}
        >
          Next &rarr;
        </button>
      </div>
    </div>
  );
};

News.defaultProps = {
  query: "latest",
  pageSize: 6,
  apiKey: "e87af74ef81f4ca0b308333deca54e6a",
};

export default News;
