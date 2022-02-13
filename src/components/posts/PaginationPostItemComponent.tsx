import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import { PaginationPostItem } from "../../models/PostModels";

interface PaginationPostItemProp {
  post: PaginationPostItem;
}

export default function PaginationPostItemComponent(
  prop: PaginationPostItemProp
) {
  const { post: item } = prop;

  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt={item.author} src={item.authorImageUrl} />
      </ListItemAvatar>
      <ListItemText
        primary={item.postTitle}
        secondary={
          <React.Fragment>
            <Typography
              sx={{ display: "inline" }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              {item.postSection}
            </Typography>
            -{item.postContentSummary}
          </React.Fragment>
        }
      />
    </ListItem>
  );
}
