import React, { ChangeEvent } from "react";
import Divider from "@mui/material/Divider";
import Pagination from "@mui/material/Pagination";
import { GetPaginationPostItems } from "../../dataProviders/posts/PostProvider";
import PaginationPostItemComponent from "../posts/PaginationPostItemComponent";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";

export default function PaginationPostsPage() {
  var posts = GetPaginationPostItems();
  const page = 1;

  return (
    <React.Fragment>
      <Grid container spacing={2}>
        <List sx={{ width: "100%", bgcolor: "background.paper" }}>
          {posts.map((post) => (
            <>
              <PaginationPostItemComponent key={post.postId} post={post} />
              <Divider variant="inset" component="li" />
            </>
          ))}
        </List>
      </Grid>
      <Grid
        item
        xs={12}
        alignItems="center"
        container
        spacing={0}
        direction="column"
        justifyContent="center"
      >
        <Pagination count={10} page={page} onChange={handleChangePagination} />
      </Grid>
    </React.Fragment>
  );
}

const handleChangePagination = (e: ChangeEvent<unknown>, page: number) => {};
