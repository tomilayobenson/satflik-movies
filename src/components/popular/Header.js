import { useState } from 'react';
import { 
    Navbar, 
    NavbarBrand,
    Collapse,
    NavbarToggler,
    Nav, 
    NavItem,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import SatFlikLogo from '../../images/satLogoOrange.png';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <Navbar dark style={{ backgroundColor: 'var(--dark)' }} sticky='top' expand='md'>
            <NavbarBrand className='ms-5' href='/'>
                <img src={SatFlikLogo} alt='nucamp logo' className='float-start' width='70px' height='auto' />
                <h3 className='mt-3' style={{color:'var(--yellow)'}}>SatFlik Movies</h3>
            </NavbarBrand>
            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)}/>
            <Collapse isOpen={menuOpen} navbar>
                <Nav className='ms-auto' navbar>
                    <NavItem>
                        <NavLink className='nav-link' to='/'>
                            <i className='fa fa-home fa-lg' /> Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/upcoming'>
                            <i className='fa fa-list fa-lg' /> Upcoming
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/top-rated'>
                            <i className='fa fa-star fa-lg' /> Top Rated
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/now-playing'>
                            <i className='fa fa-play fa-lg' /> Now Playing
                        </NavLink>
                    </NavItem>
                </Nav>
                
            </Collapse>
        </Navbar>
    );
};

export default Header;