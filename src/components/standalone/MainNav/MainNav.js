/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

class MainNav extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const SGDSNavBar = styled.nav`
      background-color: hsl(0, 0%, 100%);
      position: relative;
      z-index: 30;
      font-size: .9375rem;

      @media screen and (min-width: 1024px){
        align-items: stretch;
        display: flex;
      }

      @media screen and (min-width: 1024px) {
        min-height: 5.25rem;
      }
      a{
        text-decoration: none;
      }
      a:hover {
        color: #1a88ff;
      }

    `;

    const NavBarContainer = styled.div`
      align-items: stretch;
      display: flex;
      min-height: 5.25rem;
      width: 100%;
      flex-grow: 1;
      margin: 0 auto;
      position: relative;

      @media screen and (min-width: 1216px) {
        max-width: 1152px;
      }

      @media screen and (max-width: 1023px) {
        display: block;
      }

      &.is-fluid{
        max-width: none;
        padding-left: 32px;
        padding-right: 32px;
        width: 100%;
      }

    `;


    return (
      <div id="app-root">
        <SGDSNavBar>
          <NavBarContainer
            className={
              (this.props.isFluid ? " is-fluid" : "")
            }
          >

          {React.Children.map(this.props.children, (child, childIndex) => {
            if (!React.isValidElement(child)) {
              return null;
            }
            const childValue = child.props.value === undefined ? childIndex : child.props.value;

            return React.cloneElement(child, {
                links: this.props.links,
                themePrimaryColor: this.props.themePrimaryColor,
                rootId: this.props.id
            });
          })}
          </NavBarContainer>
          
        </SGDSNavBar>
        
      </div>
    );
  }
}


MainNav.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      img: PropTypes.string
    })
  )
};

export default MainNav;
