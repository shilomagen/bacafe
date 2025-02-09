import {
  ArticlesApi,
  Configuration,
  DailyDigestApi,
  FeedsApi,
  OnboardingApi,
  UsersApi,
} from "@/generated/http-clients/backend";

const config = new Configuration({
  basePath: process.env.BACKEND_API_URL ?? "",
});

const articlesApi = new ArticlesApi(config);
const feedsApi = new FeedsApi(config);
const onboardingApi = new OnboardingApi(config);
const dailyDigestApi = new DailyDigestApi(config);
const usersApi = new UsersApi(config);

export { articlesApi, dailyDigestApi, feedsApi, onboardingApi, usersApi };

