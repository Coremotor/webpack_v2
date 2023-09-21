declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: string;
      KEYCLOCK_URL: string;
      KEYCLOCK_REALM: string;
      KEYCLOCK_CLIENT_ID: string;
      DOT_ENV_FILE: string;
      API_BASE_URL: string;
    }
  }
}
export {};
