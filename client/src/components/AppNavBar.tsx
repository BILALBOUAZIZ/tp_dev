import { useState } from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from "reactstrap";

function AppNavApp(props){

    const [isOpen, setIsOpen] = useState(false);

    const onClickTaggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div>
                <Navbar color="dark" dark expand="md" className="mb-5">
                    <Container>
                        <NavbarBrand href="/">ShoppingList</NavbarBrand>
                        <NavbarToggler onClick={onClickTaggle}/>
                        <Collapse isOpen={isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink href="/http://www.google.com">Google</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
    )
}

export default AppNavApp;