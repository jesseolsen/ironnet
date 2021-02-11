import { HashRouter, Route, Switch } from 'react-router-dom';

import SignIn from './signIn/signIn';
import ResetPassword from './resetPassword/resetPassword';
import ResetPasswordInput from './resetPasswordInput/resetPasswordInput';
import ResetPasswordConfirmation from './resetPasswordConfirmation/resetPasswordConfirmation';
import { GlobalStyle } from './Styled/Global';

function App() {
  console.log('hashrouter. url:', process.env.PUBLIC_URL);
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
            <SignIn />
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
