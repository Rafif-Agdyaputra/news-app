export interface Multimedia {
  url: string;
}

export interface Article {
  _id: string;
  headline: {
    main: string;
  };
  byline: {
    original: string | null;
  };
  pub_date: string;
  web_url: string;
  multimedia: Multimedia[];
  lead_paragraph: string;
}
