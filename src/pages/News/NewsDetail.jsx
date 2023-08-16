import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./news.css";
import Left from "../../assets/left.png";
const apiUrlBase = "https://uzbekinvest.goldblock.uz";

function NewsDetail({ language }) {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [imagePath, setImagePath] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    const fetchNewsDetail = async () => {
      const apiUrl = `${apiUrlBase}/${language}/api/v1/news/${id}`;

      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setTitle(data.title);
        setImagePath(data.image_path);
        const content = await fetchNewsContent(apiUrl);
        setContent(content);
      } catch (error) {
        console.error(error);
      }
    };

    fetchNewsDetail();
  }, [id, language]);

  async function fetchNewsContent(apiUrl) {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      let content = data.content;

      // Remove HTML tags using regular expression
      const regex = /(<([^>]+)>)/gi;
      content = content.replace(regex, "");

      // Replace HTML entity &#39; with a single quote (')
      content = content.replace(/&#39;/g, "'");

      content = content.replace(/&rsquo;/g, "'");

      content = content.replace(/&lsquo;/g, "'");

      return content;
    } catch (error) {
      console.error("Error fetching data:", error);
      return "";
    }
  }

  return (
    <div className="container">
      <div className="newsDetail">
        <img
          src={imagePath}
          alt={title}
          style={{ width: "100%", height: "auto" }}
        />
        <h2>{title}</h2>
        <p  >{content}</p>
        <img src={Left} alt="" width="40px" style={{ marginTop: "40px" }} />
      </div>
    </div>
  );
}

export default NewsDetail;
