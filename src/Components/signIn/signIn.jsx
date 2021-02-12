import React from "react";

import "./signIn.css";
import { SignIn, SignInFooter } from "./css-in-js.jsx";

class SignInPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <SignIn className="signIn">
        <SignInFooter className="signInddb2705e">
          <div
            data-layer="24e22650-802c-41ec-b6fa-9b8f17dfae19"
            className="bg721fe8a7"
          ></div>
          <div
            data-layer="f6c5dde5-3635-4220-905d-3c8be981e616"
            className="xCopyrightAcme2020"
          >
            © Copyright ACME 2020
          </div>
          <div
            data-layer="66865bb0-5136-4859-923a-a90b49188c0c"
            className="content"
          >
            <div
              data-layer="6a0377b5-c989-44e6-8388-10d0fa82c5bd"
              className="forgotYourPasswordResetItHere"
            >
              <span className="forgotYourPasswordResetItHere-0">
                Forgot your password?{" "}
              </span>
              <a className="forgotYourPasswordResetItHere-22"
                href='#/resetPassword'>Reset it here
              </a>
              <span className="forgotYourPasswordResetItHere-35">.</span>
            </div>
            <div
              data-layer="e6e49ded-9691-4d66-b0c6-d513992609a9"
              className="button"
            >
              <div
                data-layer="1c3b29c4-9727-4009-8d48-fe6e53850f05"
                className="buttonBg"
              ></div>
              <div
                data-layer="0ec52b6f-b686-4489-b82f-ab8c3d99c16a"
                className="signIn016c19b8"
              >
                Sign In
              </div>
            </div>
            <div
              data-layer="9e7ed495-cdf9-41a6-9bfe-3600e7e82042"
              className="input57aea595"
            >
              <div
                data-layer="316b8240-a509-4259-9143-03715e78ca5a"
                className="bg949c4c47"
              ></div>
              <div
                data-layer="5e271113-e0e2-40c7-b22c-4c0248923ac3"
                className="password"
              >
                Password
              </div>
            </div>
            <div
              data-layer="f26124c5-fd1f-4dde-b6c7-fa7137772478"
              className="input"
            >
              <div
                data-layer="fdc1dfae-aa62-4641-9a5c-fb2c6dc61480"
                className="bg"
              ></div>
              <div
                data-layer="a4842414-d617-4f6a-9c10-3bc2ecc8e251"
                className="email"
              >
                Email
              </div>
            </div>
            <svg
              data-layer="ddb72354-ef8d-49ab-9735-c3be6ff2f439"
              preserveAspectRatio="none"
              viewBox="-2.5 -2.5 43 5"
              className="line1"
            >
              <path d="M 0 0 L 38 0" />
            </svg>
            <div
              data-layer="86910696-dbbb-4914-bb12-1fb4fedfab30"
              className="signIn90f702f3"
            >
              Sign In
            </div>
          </div>
        </SignInFooter>
        <div data-layer="15314543-9faa-4802-9f6b-0d2d4be597e8" className="cta">
          <div
            data-layer="e9a2536f-3ce6-4ed8-a366-932f173d7e76"
            className="background"
          >
            <div
              data-layer="a747e59f-d089-4af8-b6b8-6e5a6f8a1d74"
              className="gradient"
            ></div>
            <div
              data-layer="1f142871-e39a-45e4-964d-8b2c17561d75"
              className="accent02a87413"
            ></div>
            <div
              data-layer="f2f5a0b3-dd46-4138-a106-e7dcaf87effa"
              className="accent"
            ></div>
          </div>
          <div
            data-layer="9f9467d2-6c52-42a5-b095-34de86467334"
            className="signInAndStartSavingYourTimeToday"
          >
            Sign in and start saving your time today.
          </div>
          <div
            data-layer="51b41aca-05c8-491c-b5dc-ac50a602e8c5"
            className="weProvide247SupportWithOurHighlyDedicatedProfessionalTeam"
          >
            We provide 24/7 support with our highly dedicated professional team.
          </div>
          <div
            data-layer="9109dac5-cc00-428f-a493-247d8f882e06"
            className="logo"
          >
            <div
              data-layer="00f10b29-1d41-4baa-a5e2-98053c2707c2"
              className="acme"
            >
              ACME
            </div>
            <div
              data-layer="a83ea967-8e9e-49fe-af57-598ae43525ef"
              className="rectangle1"
            ></div>
          </div>
        </div>
      </SignIn>
    );
  }
}

SignInPage.propTypes = {};

SignInPage.defaultProps = {};

export default SignInPage;
