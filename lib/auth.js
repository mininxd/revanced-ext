import { config } from 'dotenv';
config();

export default function auth(token=process.env.GITHUB_TOKEN) {
  return {
    Authorization: `Bearer ${token}`,
    Accept: 'application/vnd.github+json',
  };
}