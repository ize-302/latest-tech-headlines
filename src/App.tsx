import React, { useEffect, useState } from "react";
import github from "./github.svg";
import "./App.css";
import ArticleCard from "./articleCard";
import SkeletonLoader from "./skeletonLoader";
import axios from "axios";
import { Helmet } from "react-helmet";

function App() {
  const [posts, setPosts]: any = useState();
  const [unsortedPosts, setUnsortedPosts]: any = useState([]);
  const [rows]: any = useState([1, 2, 3, 4]);
  const [loading, setLoading]: any = useState(true);

  useEffect(() => {
    // let unsortedPosts: any = [];
    // techpoint
    axios
      .get("https://techpoint.africa/wp-json/wp/v2/posts")
      .then((response) => {
        response.data.map((postData: any) =>
          setUnsortedPosts(
            unsortedPosts.push({
              ...postData,
              source: "Techpoint",
            })
          )
        );
        setLoading(false);
      });

    // tecgcabal
    axios.get("https://techcabal.com/wp-json/wp/v2/posts").then((response) => {
      response.data.map((postData: any) =>
        setUnsortedPosts(
          unsortedPosts.push({
            ...postData,
            source: "Techcabal",
          })
        )
      );
    });
    // technext
    axios.get("https://technext.ng/wp-json/wp/v2/posts").then((response) => {
      response.data.map((postData: any) =>
        setUnsortedPosts(
          unsortedPosts.push({
            ...postData,
            source: "Technext",
          })
        )
      );
    });
    setPosts(unsortedPosts);
  }, []);

  return (
    <div className="custom-container">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Latest Technology Headlines</title>
        <link
          rel="canonical"
          href="https://latest-tech-headlines.netlify.app/"
        />
        <meta
          name="description"
          content="Latest Technology News headlines sourced from Techpoint.africa, Techcabal.com & Technext.ng"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Latest Technology News headlines sourced from Techpoint.africa, Techcabal.com & Technext.ng"
        />
        <meta
          name="twitter:description"
          content="Latest Technology News headlines sourced from Techpoint.africa, Techcabal.com & Technext.ng"
        />
        <meta
          name="twitter:image"
          content="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
        />
      </Helmet>

      <header className="flex justify-between items-center my-10">
        <div>
          <span className="text-4xl">👨🏾‍💻</span>
        </div>
        <a
          href="https://github.com/ozorku/latest-tech-headlines"
          title="Talk is cheap, show me the code 👏"
        >
          <img src={github} alt="github" />
        </a>
      </header>

      <h1 className="text-xl md:text-2xl font-bold w-full md:w-2/3 lg:w-1/2 my-16 text-gray-800">
        Latest Technology News headlines sourced from{" "}
        <a className="text-blue-600" href="http://techpoint.africa">
          Techpoint.africa
        </a>
        ,{" "}
        <a className="text-red-600" href="http://techcabal.com">
          Techcabal.com
        </a>{" "}
        &{" "}
        <a className="text-red-700" href="http://technext.ng">
          Technext.ng
        </a>{" "}
      </h1>

      <div>
        {loading ? (
          <div className="lg:flex lg:justify-between lg:flex-wrap">
            {rows && rows.map((row: any) => <SkeletonLoader />)}
          </div>
        ) : (
          <div className="lg:flex lg:justify-between lg:flex-wrap">
            {posts &&
              posts.map((post: any) => (
                <ArticleCard key={post.id} post={post} />
              ))}
          </div>
        )}
      </div>

      <footer className="text-center my-10 text-sm">
        Built with 💙 by{" "}
        <a
          className="underline"
          href="http://twitter.com/ozorku"
          title="I no too sabi 👨🏾‍🦱"
        >
          Ozorku
        </a>
      </footer>
    </div>
  );
}

export default App;
