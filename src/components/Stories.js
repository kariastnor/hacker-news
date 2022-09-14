import React, { useContext } from "react";
import { SiteContext } from "../context";
import moment from "moment";

function Stories() {
  const { stories, category, sorting, changeSorting } = useContext(SiteContext);

  if (stories.length === 0) {
    return <p>No results found</p>;
  }

  return (
    <section className="stories">
      {category === "search" && (
        <div className="sorting">
          <label htmlFor="sorting">Sort results by:</label>
          <select
            id="sorting"
            value={sorting}
            onChange={(event) => changeSorting(event.target.value)}
          >
            <option value="relevance">Relevance</option>
            <option value="date">Date (most recent)</option>
          </select>
        </div>
      )}
      {stories.map((story) => {
        const { objectID, created_at, title, url, author } = story;
        const dateFormatted = moment(created_at).format("DD MMMM YYYY");
        return (
          <article key={objectID}>
            <a href={url} target="_blank" rel="noreferrer">
              {title}
            </a>
            <p>
              By {author} | <span>From {dateFormatted}</span>
            </p>
          </article>
        );
      })}
    </section>
  );
}

export default Stories;
