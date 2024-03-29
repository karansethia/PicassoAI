import React from "react";
import classes from "./Community.module.css";
import ImgGrid from "../../Components/ImgGrid/ImgGrid";
import {getCommunityPosts} from "../../utils/http";
import {useQuery} from "@tanstack/react-query";
const Community = () => {
  const {data, isPending, isError, error} = useQuery({
    queryKey: ["Community"],
    queryFn: ({signal}) => getCommunityPosts({signal}),
    staleTime: 120,
  });
  let images = [];
  if (!isPending && !isError) {
    data.images?.map((image) => images.push(image));
  }
  return (
    <div className={classes.container}>
      <h1>
        Explore creative minds <br />
        in our community
      </h1>
      <div className={classes.imggrid}>
        {!isPending && !isError && <ImgGrid images={images} />}
        {isError && error && <p>Something went wrong</p>}
      </div>
    </div>
  );
};

export default Community;
