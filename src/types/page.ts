export type Catgeory = {
  _id: string;
  name: string;
  slug: Slug;
};
export type Card = {
  _id: string;
  name: string;
  slug: string;
  description: string;
  category: string;
  date: string;
  image: TImage;
  author:Author;
  popular: boolean;
  slugs: Slug;
  related:Card[]
};
export type Author = {
  _id: String;
  name: string;
  description: string;
  date: string;
  slug: Slug;
  image: TImage;
};

//   slug

export type Slug = {
  _type: string;
  current: string;
};
// image
export type TImage = {
  _key: string;
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
};
