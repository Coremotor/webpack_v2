export const mode = process.env.NODE_ENV;
export const isDev = mode === "development";
export const keycloakUrl = process.env.KEYCLOCK_URL;
export const keycloakRealm = process.env.KEYCLOCK_REALM;
export const keycloakClientId = process.env.KEYCLOCK_CLIENT_ID;
export const dotENVFile = process.env.DOT_ENV_FILE;
