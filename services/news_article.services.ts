import http from "../lib/utils";
import { ArticleItems } from "../types/types";
const getAll = () => {
  return http.get<Array<ArticleItems>>("news-article/");
};
const filterArticle = (
  topics: string | null,
  source: string | null,
  sector: string | null,
  pestle: string | null,
  end_year: string | null,
  country: string | null,
  region: string | null,
  city: string | null
) => {
  return http.get<Array<ArticleItems>>("news-article/");
};

const ArticleDataServices = {
  getAll,
  filterArticle,
};
export default ArticleDataServices;
