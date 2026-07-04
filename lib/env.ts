type EnvVar = {
  name: string;
  requiredInProduction: boolean;
};

const envVars: EnvVar[] = [
  { name: 'AWS_REGION', requiredInProduction: true },
  { name: 'AWS_ACCESS_KEY_ID', requiredInProduction: true },
  { name: 'AWS_SECRET_ACCESS_KEY', requiredInProduction: true },
  { name: 'AWS_BUCKET', requiredInProduction: true },
  { name: 'CONFIG_KEY', requiredInProduction: true },
];

const isProduction = process.env.NODE_ENV === 'production';

const missing = envVars
  .filter((env) => isProduction && env.requiredInProduction)
  .filter((env) => !process.env[env.name])
  .map((env) => env.name);

if (missing.length > 0) {
  throw new Error(
    `Missing required environment variable(s): ${missing.join(', ')}`,
  );
}

export const env = {
  AWS_REGION: process.env.AWS_REGION,
  AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
  AWS_BUCKET: process.env.AWS_BUCKET,
  CONFIG_KEY: process.env.CONFIG_KEY,
  isProduction,
};
