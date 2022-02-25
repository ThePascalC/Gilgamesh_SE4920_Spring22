import React from 'react';
import {
Nav,
// NavLogo,
NavLink,
// Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';
const ColoredLine = ({ color }) => (
	<hr
	  style={{
		color,
		backgroundColor: color,
		height: 1
	  }}
	/>
  );
const Navbar = () => {
return (
	<>
	<Nav>
		{/* <Bars /> */}
		<NavMenu>
		{/* <NavLogo></NavLogo> */}
		<NavLink to='/index' activeStyle>
			Logo
		</NavLink>
		<NavLink to='/about' activeStyle>
			How It works
		</NavLink>
		<NavLink to='/extra' activeStyle>
			Extra
		</NavLink>
		{/* Second Nav */}
		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
		</NavMenu>
		<NavBtn>
		<NavBtnLink to='/sign-up' activeStyle>
			Get Started</NavBtnLink>
		<NavBtnLink to='/login'>Sign In</NavBtnLink>
		</NavBtn>
	</Nav>
	<div>
      <ColoredLine color="Gray" />
    </div>
	</>
);
};

export default Navbar;
