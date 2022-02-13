import { PaginationPostItem, PostSummary } from "../../models/PostModels";

const PostSummaries: PostSummary[] = [
  {
    title: "Featured post",
    date: "Nov 12",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://source.unsplash.com/random",
    imageLabel: "Image Text",
  },
  {
    title: "Post title",
    date: "Nov 11",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://source.unsplash.com/random",
    imageLabel: "Image Text",
  },
];

export function GetPostSummaries(): PostSummary[] {
  return PostSummaries;
}

const PaginationPostItems: PaginationPostItem[] = [
  {
    postId: 1,
    author: "Mark",
    authorImageUrl: "./",
    postTitle: "Hello .Net Core",
    postSection : "Net Core",
    postContentSummary: "Net Core is ...",
  },
  {
    postId: 2,
    author: "Kal",
    authorImageUrl: "./",
    postTitle: "Hello .React",
    postSection : "React",
    postContentSummary: "React is ...",
  },
];

export function GetPaginationPostItems(): PaginationPostItem[] {
  return PaginationPostItems;
}
