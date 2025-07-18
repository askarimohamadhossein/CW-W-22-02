interface IPosts {
  id: number;
  title: string;
  body: string;
  tags: Array<string>;
  userid: number;
}

interface IPostList {
  posts: Array<IPosts>;
}
