import React, { Component } from 'react';
import styled from 'styled-components';
import { ContentBase, ButtonBase } from 'baseStyled';
import Input from 'components/Input/Input';
import { GUTTER } from 'constants/style';

const LoginStyled = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled(ContentBase)`
  margin: 0;
  padding: ${GUTTER}px;
  background: #fff;
`;

const Title = styled.h3`
  margin: 0 0 20px;
  font-weight: 500;
`;

const AlertMessage = styled.div`
  margin: 10px
`;

const SubmitButton = styled(ButtonBase)`

`;

const checkUsername = (username) => {
  return username.length >= 5;
};

const checkPassword = (password) => {
  const isLengthValid = password.length >= 8;
  const isSmallLetterValid = /[a-z]/.test(password);
  const isCapitalizeLetterValid = /[A-Z]/.test(password);
  const isNumberValid = /[0-9]/.test(password);

  return isLengthValid && isSmallLetterValid && isCapitalizeLetterValid && isNumberValid;
};

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isValid: true,
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();

    const target = event.target;
    const username = target.querySelector('[name="username"]').value;
    const password = target.querySelector('[name="password"]').value;

    const isUsernameValid = checkUsername(username);
    const isPasswordValid = checkPassword(password);

    if (isUsernameValid && isPasswordValid) {
      this.setState({ isValid: true });
      this.props.logUser();
    } else {
      this.setState({ isValid: false });
    }
  }

  render() {
    const { isValid } = this.state;

    return (
      <LoginStyled>
        <Content>
          <form onSubmit={this.onSubmit}>
            <Title>Sign in</Title>

            <Input placeholder="username" name="username" />
            <Input placeholder="password" name="password" type="password" />

            {!isValid && (
              <AlertMessage>
                Username, or password is invalid:
                <ul>
                  <li>username is at least 5 characters long</li>
                  <li>password contains 8 characters, at least one small letter, at least one capital letter, at least one number</li>
                </ul>
              </AlertMessage>
            )}

            <SubmitButton>Login</SubmitButton>
          </form>
        </Content>
      </LoginStyled>
    );
  }
}

export default Login;
