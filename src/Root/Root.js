import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { mainRoutes } from 'routes/routes';
import { getItem, setItem, removeItem } from 'utils/storageUtils';

import NotFound from 'pages/NotFound';
import Login from 'pages/Login';
import MainContent from 'components/MainContent/MainContent';
import Modal from 'components/Modal';

class Root extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isUserLogged: !!getItem('isUserLogged'),
      modal: {
        open: false,
        message: 'test',
      },
    };

    this.logUser = this.logUser.bind(this);
    this.logOutUser = this.logOutUser.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  logUser() {
    setItem('isUserLogged', true);
    this.setState({ isUserLogged: true });
  }

  logOutUser() {
    removeItem('isUserLogged');
    this.setState({ isUserLogged: false });
  }

  closeModal() {
    const prevModal = this.state.modal;
    const modal = { ...prevModal, open: false };
    this.setState({ modal });
  }

  openModal(message) {
    message = message || 'There was a problem with connection. Please try again.';
    this.setState({ modal: {
      open: true,
      message,
    } });
  }

  render() {
    const { isUserLogged, modal } = this.state;

    return (
      <MainContent>
        <Switch>
          {!isUserLogged && (
            <Route
              render={(props) => <Login {...props} logUser={this.logUser} />}
            />
          )}

          {mainRoutes.map(route => {
            const RouteComponent = route.component;
            return (
              <Route
                key={route.path}
                path={route.path}
                render={(props) => (
                  <RouteComponent
                    {...props}
                    logOutUser={this.logOutUser}
                    openModal={this.openModal}
                  />
                )}
                exact={route.exact}
              />
            );
          })}

          <Route component={NotFound} />
        </Switch>

        <Modal
          open={modal.open}
          message={modal.message}
          handleClose={this.closeModal}
        />
      </MainContent>
    );
  }
}

export default Root;
