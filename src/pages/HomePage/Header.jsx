import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ButtonBase } from 'baseStyled';
import Input from 'components/Input';
import { GUTTER } from 'constants/style';
import { SHADOWS } from 'config/theme';
import { media } from 'styles/media';

const HeaderStyled = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  ${media.lessThan('phone')`
    flex-wrap: wrap;
  `};
`;

const LogOutButton = styled(ButtonBase)`
  min-width: calc(33.3333% - ${GUTTER / 2}px);
  background: #fff;

  ${media.lessThan('tablet')`
    min-width: calc(50% - 7.5px);
  `};

  ${media.lessThan('phone')`
    min-width: 100%;
    margin-bottom: 15px;
  `};
`;

const InputContainer = styled.div`
  min-width: calc(66.6666% - ${GUTTER / 2}px);
  margin-left: auto;

  input {
    height: 100%;
    height: 38px;
    margin: 0;
    box-shadow: ${SHADOWS[2]};
  }

  ${media.lessThan('tablet')`
    min-width: calc(50% - 7.5px);
  `};

  ${media.lessThan('phone')`
    min-width: 100%;
  `};
`;

const Header = ({
  logOutUser,
  searchValue,
  onSearchChange,
}) => {
  return (
    <HeaderStyled>
      <LogOutButton onClick={logOutUser}>Log out</LogOutButton>

      <InputContainer>
        <Input
          value={searchValue}
          onChange={onSearchChange}
          placeholder="search"
        />
      </InputContainer>
    </HeaderStyled>
  );
};

Header.propTypes = {
  logOutUser: PropTypes.func.isRequired,
  searchValue: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
};

export default Header;
