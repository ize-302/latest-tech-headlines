import React, { useEffect, useState } from "react";
import moment from "moment";
import axios from "axios";

const ArticleCard = (props: any) => {
  const [thumbnail, setThumbnail] = useState();
  const techpointUrl = "https://techpoint.africa";
  const techcabalUrl = "https://techcabal.com";
  const technextUrl = "https://technext.ng";

  useEffect(() => {
    let baseUrl = "";
    switch (props.post.source) {
      case "Techpoint":
        baseUrl = techpointUrl;
        break;
      case "Techcabal":
        baseUrl = techcabalUrl;
        break;
      case "Technext":
        baseUrl = technextUrl;
        break;
      default:
        break;
    }
    try {
      axios
        .get(`${baseUrl}/wp-json/wp/v2/media/${props.post.featured_media}`)
        .then((response) => {
          setThumbnail(response.data.source_url);
        });
    } catch (error) {
      console.log(error.message);
    }
  }, []);
  return (
    <div className="border sm:border-none bg-white sm:bg-transparent p-4 sm:p-0 lg:w-1/2 md:flex lg:justify-between mb-10 md:mb-20 rounded-lg">
      <div className="rounded-lg mb-5 md:mb-0 w-full md:w-2/5">
        <img
          src={thumbnail}
          className="h-64 md:h-40"
          alt={props.post.slug}
          style={{
            borderRadius: "inherit",
            width: "100%",
            objectFit: "cover",
          }}
        />
      </div>
      <div className="w-full md:w-3/5 md:ml-8 md:mr-16 flex flex-col justify-between">
        <a
          href={props.post.link}
          target="_blank"
          className="md:text-lg font-bold hover:text-orange-400"
          dangerouslySetInnerHTML={{ __html: props.post.title.rendered }}
        ></a>
        <div className="mt-5 md:mt-0">
          <p className="text-gray-500">{props.post.source}</p>
          <p className="text-xs md:text-sm">
            {moment(props.post.date).format("DD MMM YYYY, h:mm a")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
