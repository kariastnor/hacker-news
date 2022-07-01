import React, { useContext } from "react";
import { SiteContext } from "../context";
import moment from "moment";

function Stories() {
  const { stories } = useContext(SiteContext);

  return (
    <section>
      {stories.map((story) => {
        const { objectID, created_at, title, url, author } = story;
        const dateFormatted = moment(created_at).format("DD MMMM YYYY");

        return (
          <article key={objectID}>
            <a href={url} target="_blank" rel="noreferrer">
              {title}
            </a>
            <h5>
              By {author} | <span>From {dateFormatted}</span>
            </h5>
          </article>
        );
      })}
    </section>
  );
}

export default Stories;
