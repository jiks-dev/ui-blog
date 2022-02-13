import internal from "stream";

export interface PostSummary {
  date: string;
  description: string;
  image: string;
  imageLabel: string;
  title: string;
}

export interface PaginationPostItem {
    author: string;
    authorImageUrl: string;
    postId : number;
    postTitle: string;
    postSection: string;
    postContentSummary: string;
}
