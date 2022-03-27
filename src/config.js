const config = {
    STRIPE_KEY: "pk_test_51KgR5fCNskL63vDekKmOyj1it34iAGIT4w1GOEWxY58lYXnbDxlYExoyKPu4Efp9U0J5ygCS4qPpMouhleiZIiF500Z7ehSuCf",
    MAX_ATTACHMENT_SIZE: 5000000,
    
    s3: {
        REGION: "ap-northeast-1",
        BUCKET: "notes-app-upload-s3ipex",
    },
    apiGateway: {
        REGION: "ap-northeast-1",
        URL: "https://y5kbrl5dcd.execute-api.ap-northeast-1.amazonaws.com/prod",
    },
    cognito: {
        REGION: "ap-northeast-1",
        USER_POOL_ID: "ap-northeast-1_7dFrNbH8x",
        APP_CLIENT_ID: "4sg0po6fmen61bksgnhvgg9anl",
        IDENTITY_POOL_ID: "ap-northeast-1:93652474-ba13-4abe-9a93-624c0c06f6f2",
    },
};
  
export default config;