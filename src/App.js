import { HashRouter, Route, Switch } from 'react-router-dom';

import SignInPage from './Components/signIn/signIn';
import ResetPassword from './Components/resetPassword/resetPassword';
import ResetPasswordInput from './Components/resetPasswordInput/resetPasswordInput';
import ResetPasswordConfirmation from './Components/resetPasswordConfirmation/resetPasswordConfirmation';
import { GlobalStyle } from './Styled/Global';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <HashRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path="/resetpassword">
            <ResetPassword />
          </Route>
          <Route path="/resetpasswordinput">
            <ResetPasswordInput />
          </Route>
          <Route path="/resetpasswordconfirmation">
            <ResetPasswordConfirmation />
          </Route>
          <Route path="/">
            <SignInPage />
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
