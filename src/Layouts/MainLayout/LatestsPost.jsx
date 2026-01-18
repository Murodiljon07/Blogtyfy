import React, { useEffect, useState } from "react";

let Posts_API = import.meta.env.VITE_BASE_URL;

function LatestsPost() {
  let [posts, setPosts] = useState([]);

  useEffect(() => {
    async function get_posts() {
      try {
        let res = await fetch(Posts_API);

        if (!res.ok) throw new Error("Apida muammo paydo boldi");

        let data = await res.json();

        console.log(data);

        setPosts(data);
      } catch (error) {
        console.log(error);
      } finally {
        <p>Loading.....</p>;
      }
    }

    get_posts();
  }, []);

  return (
    <section>
      {posts.map((item) => {
        let { image, title } = item;
        return (
          <div>
            <img src={image} alt="" />
            <p></p>
            <h4>{title}</h4>
          </div>
        );
      })}
    </section>
  );
}

export default LatestsPost;
