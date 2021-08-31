const config = {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-attachments-123",
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://sislvgxub1.execute-api.us-east-1.amazonaws.com/prod",
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_WpRnKTcy0",
    APP_CLIENT_ID: "1vj3f9it54pijufdo0i9aodth6",
    IDENTITY_POOL_ID: "us-east-1:645bb9e0-f22f-4717-88b2-b3314b5eecb7",
  },
};

export default config;
