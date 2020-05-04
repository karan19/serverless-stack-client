  const dev = {
    s3: {
      REGION: "us-east-2",
      BUCKET: "notes-appuploads"
    },
    apiGateway: {
      REGION: "us-east-2",
      URL: "https://2sxo0hfttf.execute-api.us-east-2.amazonaws.com/prod/"
    },
    cognito: {
      REGION: "us-east-2",
      USER_POOL_ID: "us-east-2_9U1uOF5zv",
      APP_CLIENT_ID: "bevgncsd4ue8grgrcvd8su4n1",
      IDENTITY_POOL_ID: "us-east-2:5b58bbbe-a319-4da6-b758-319ddf38ae9f"
    },
    STRIPE_KEY: "pk_test_WdO2PzgoyRtvvcHgs4X048dH00JHMLX23",
  };
  
  const prod = {
    s3: {
      REGION: "us-east-2",
      BUCKET: "notes-appuploads"
    },
    apiGateway: {
      REGION: "us-east-2",
      URL: "https://2sxo0hfttf.execute-api.us-east-2.amazonaws.com/prod/"
    },
    cognito: {
      REGION: "us-east-2",
      USER_POOL_ID: "us-east-2_9U1uOF5zv",
      APP_CLIENT_ID: "bevgncsd4ue8grgrcvd8su4n1",
      IDENTITY_POOL_ID: "us-east-2:5b58bbbe-a319-4da6-b758-319ddf38ae9f"
    },
    STRIPE_KEY: "pk_test_WdO2PzgoyRtvvcHgs4X048dH00JHMLX23",
  };
  
  console.log(process.env.REACT_APP_STAGE);

  // Default to dev if not set
  const config = process.env.REACT_APP_STAGE === 'prod'
    ? prod
    : dev;
  
  export default {
    // Add common config values here
    MAX_ATTACHMENT_SIZE: 5000000,
    ...config
  };