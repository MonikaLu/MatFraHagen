import {
  AuthFlowType,
  CognitoIdentityProviderClient,
  ConfirmSignUpCommand,
  GlobalSignOutCommand,
  InitiateAuthCommand,
  SignUpCommand,
} from "@aws-sdk/client-cognito-identity-provider";
import config from "../config.json";

export const cognitoClient = new CognitoIdentityProviderClient({
  region: config.region,
});

export const signIn = async (username: string, password: string) => {
  const params = {
    AuthFlow: AuthFlowType.USER_PASSWORD_AUTH,
    ClientId: config.clientId,
    AuthParameters: {
      USERNAME: username,
      PASSWORD: password,
    },
  };
  try {
    const command = new InitiateAuthCommand(params);
    const { AuthenticationResult } = await cognitoClient.send(command);
    if (AuthenticationResult) {
      sessionStorage.setItem("idToken", AuthenticationResult.IdToken || "");
      sessionStorage.setItem(
        "accessToken",
        AuthenticationResult.AccessToken || ""
      );
      sessionStorage.setItem(
        "refreshToken",
        AuthenticationResult.RefreshToken || ""
      );
      return AuthenticationResult;
    }
  } catch (error) {
    console.error("Det oppstod en feil ved innlogging: ", error);
    throw error;
  }
};

export const signOut = async () => {
  try {
    const accessToken = sessionStorage.getItem("accessToken");
    if (accessToken) {
      const params = {
        AccessToken: accessToken,
      };
      const command = new GlobalSignOutCommand(params);
      await cognitoClient.send(command);
    }

    sessionStorage.removeItem("idToken");
    sessionStorage.removeItem("accessToken");
    sessionStorage.removeItem("refreshToken");

    window.location.href = "/login";
  } catch (error) {
    console.error("Det oppstod et problem ved utlogging: ", error);
    throw error;
  }
};

export const signUp = async (
  email: string,
  username: string,
  password: string
) => {
  const params = {
    ClientId: config.clientId,
    Username: username,
    Password: password,
    UserAttributes: [
      {
        Name: "email",
        Value: email,
      },
    ],
  };
  try {
    const command = new SignUpCommand(params);
    const response = await cognitoClient.send(command);
    console.log("Registreringen er fullført: ", response);
    return response;
  } catch (error) {
    console.error("Et problem oppstod under brukerregistreringen: ", error);
    throw error;
  }
};

export const confirmSignUp = async (username: string, code: string) => {
  const params = {
    ClientId: config.clientId,
    Username: username,
    ConfirmationCode: code,
  };
  try {
    const command = new ConfirmSignUpCommand(params);
    await cognitoClient.send(command);
    console.log("Brukeren er bekreftet!");
    return true;
  } catch (error) {
    console.error("Det oppstod et problem med bekreftelse: ", error);
    throw error;
  }
};
