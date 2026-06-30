import axios from "axios";
import env from "@/config/env";

interface NewsArticle {
  title: string;
  description: string;
  url: string;
  source: string;
}

export const getNews = async (
  country: string,
  topics: string[]
): Promise<NewsArticle[]> => {
  const query = topics.join(" OR ");

  const { data } = await axios.get("https://newsapi.org/v2/everything", {
    params: {
      q: `${query} ${country}`,
      language: "en",
      sortBy: "publishedAt",
      pageSize: 20,
      apiKey: env.newsApiKey,
    },
  });

  return data.articles.map((article: any) => ({
    title: article.title,
    description: article.description,
    url: article.url,
    source: article.source?.name,
  }));
};
