import { Grid } from "@mui/material";
import React from "react";
import { GetPostSummaries } from "../../dataProviders/posts/PostProvider";
import FeaturedPostComponent from "../mains/FeaturedPostComponent";
import MainFeaturedPostComponent from "../mains/MainFeaturedPostComponent";

export default function MainPage() {
  const postSummaries = GetPostSummaries();

  return (
    <React.Fragment>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <MainFeaturedPostComponent />
        </Grid>
      </Grid>
      <Grid container spacing={4}>
        {postSummaries.map((post) => (
          <FeaturedPostComponent key={post.title} post={post} />
        ))}
      </Grid>
    </React.Fragment>
  );
}
