export const config = {
  PORT: process.env.PORT,
  vendors: {
    gitlab: {
      url: process.env.GITLAB_URL,
    },
    github: {
      url: process.env.GITHUB_URL,
    },
  },
  database: {
    DB_HOST: process.env.DB_HOST,
    DB_PORT: process.env.DB_PORT,
    DB_USERNAME: process.env.DB_USERNAME,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_DIALECT: process.env.DB_DIALECT,
    DB_NAME: process.env.DB_NAME,
    GITLAB_URL: process.env.GITLAB_URL,
    GITHUB_URL: process.env.GITHUB_URL,
  },
};
