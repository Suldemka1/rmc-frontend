import React from "react";
import { Link } from "react-router-dom";
import FormattedDate from "../../FormattedStrings";
import MediaQuery from "react-responsive";

const PostCard = (params: any) => {
  return (
    <div id="post-card" className="border border-black rounded">
      <div id="post-header" className="text-2xl p-3">
        <MediaQuery minWidth={1440}>
          {params.title.length < 200 ? (
            <h1>{params.title}</h1>
          ) : (
            <h1>{params.title.substring(0, 200)}...</h1>
          )}
        </MediaQuery>
        <MediaQuery minWidth={976} maxWidth={1439}>
          {params.title.length < 150 ? (
            <h1>{params.title}</h1>
          ) : (
            <h1>{params.title.substring(0, 150)}...</h1>
          )}
        </MediaQuery>
        <MediaQuery minWidth={768} maxWidth={975}>
          {params.title.length < 120 ? (
            <h1>{params.title}</h1>
          ) : (
            <h1>{params.title.substring(0, 120)}...</h1>
          )}
        </MediaQuery>
        <MediaQuery minWidth={481} maxWidth={767}>
          {params.title.length < 60 ? (
            <h1>{params.title}</h1>
          ) : (
            <h1>{params.title.substring(0, 60)}...</h1>
          )}
        </MediaQuery>
        <MediaQuery maxWidth={480}>
          {params.title.length < 30 ? (
            <h1>{params.title}</h1>
          ) : (
            <h1>{params.title.substring(0, 35)}...</h1>
          )}
        </MediaQuery>
      </div>

      <div
        id="post-body"
        className="flex sm:flex-col xs:flex-col md:flex-col lg:flex-row gap-3"
      >
        <div className="sm:hidden xs:hidden md:hidden lg:block">
          <img
            src={params.preview_image}
            className="min-w-[250px] w-[250px] h-[150px] object-cover"
          />
        </div>
        <div className="sm:p-3 lg:p-0">
          <MediaQuery minWidth={1440}>
            {params.short_body.length < 500 ? (
              <p>{params.short_body}</p>
            ) : (
              <p>{params.short_body.substring(0, 500)}...</p>
            )}
          </MediaQuery>
          <MediaQuery minWidth={976} maxWidth={1439}>
            {params.short_body.length < 300 ? (
              <p>{params.short_body}</p>
            ) : (
              <p>{params.short_body.substring(0, 300)}...</p>
            )}
          </MediaQuery>
          <MediaQuery minWidth={768} maxWidth={975}>
            {params.short_body.length < 200 ? (
              <p>{params.short_body}</p>
            ) : (
              <p>{params.short_body.substring(0, 200)}...</p>
            )}
          </MediaQuery>
          <MediaQuery minWidth={481} maxWidth={767}>
            {params.short_body.length < 150 ? (
              <p>{params.short_body}</p>
            ) : (
              <p>{params.short_body.substring(0, 150)}...</p>
            )}
          </MediaQuery>
          <MediaQuery maxWidth={480}>
            {params.short_body.length < 100 ? (
              <p>{params.short_body}</p>
            ) : (
              <p>{params.short_body.substring(0, 100)}...</p>
            )}
          </MediaQuery>
        </div>
      </div>

      <div
        id="post-footer"
        className="w-100 flex flex-row justify-between items-center bg-blue-400 text-gray-50 p-3"
      >
        <div className="flex flex-row sm:flex-col xs:flex-row gap-2 font-semibold">
          <p>Дата публикации:</p>
          <FormattedDate date={params.publication_date} />
        </div>

        <Link
          to={`/news/${params.id}`}
          className="border-2 border-blue-600 rounded bg-blue-600 px-3 py-2
                hover:bg-blue-700 transition-all
                active:border-blue-900"
        >
          Читать
        </Link>
      </div>
    </div>
  );
};

export default React.memo(PostCard);
