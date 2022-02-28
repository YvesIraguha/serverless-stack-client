const config = {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-attachments-123",
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://vpk7wzrbtc.execute-api.us-east-1.amazonaws.com/dev",
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_oSOoJlIwV",
    APP_CLIENT_ID: "5nq142d8m12mio1i00t47697a8",
    IDENTITY_POOL_ID: "us-east-1:ecd72280-624b-4193-a772-44cdc1c76aad",
  },
};

export default config;
