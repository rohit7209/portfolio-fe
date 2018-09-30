import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Btn from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

const Button = styled(Btn) `
  font-size: ${props => props.hover ? '10px' : '13px'} !important;
  color: ${props => props.scrolled ? 'black' : 'white'} !important;
  height: 60px !important;
  min-width: 110px !important;
  border-radius: 0px !important;
  display: unset !important;
  &:hover{
    background: ${props => props.scrolled ? 'rgba(0, 0, 0, 0.1)' : 'rgba(255, 255, 255, 0.1)'} !important;
  }
`;

const HoverText = styled.span`
  transition: all 0.2s;
`;

class MenuBtn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
    };
    this.onHover = this.onHover.bind(this);
    this.onOut = this.onOut.bind(this);
  }

  onHover(e) {
    this.setState({ hover: true });
  }

  onOut(e) {
    this.setState({ hover: false });
  }

  render() {
    return (
      <Button scrolled={this.props.scrolled} hover={this.state.hover} onMouseEnter={this.onHover} onMouseLeave={this.onOut}>
        {
          this.state.hover ?
            <HoverText>
              <Icon>{this.props.icon}</Icon>
              <div>{this.props.text}</div>
            </HoverText>
            :
            <HoverText>{this.props.text}</HoverText>
        }
      </Button>
    );
  }
}

MenuBtn.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default MenuBtn;
