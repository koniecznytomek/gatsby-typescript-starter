import { ReactChildren } from 'react';

export interface IArticle {
  slug: string;
  id: string;
  hero: {
    seo: string;
  };
}

interface IArticleQuery {
  edges: {
    node: IArticle;
  }[];
}

interface IProps {
  bg: string;
  src: string;
  alt: string;
}

export interface INode {
  children: ReactChildren;
}

export interface IHelmet {
  title?: string;
  description?: string;
  image?: string;
  article?: string;
}
