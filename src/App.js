import "./App.css";
import Pages from "./pages/Pages";
import Category from "./pages/Category";
import { BrowserRouter } from "react-router-dom";
import Search from "./components/Search";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GiKnifeFork } from "react-icons/gi";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav>
          <GiKnifeFork />
          <Logo to={"/"}>Delicious</Logo>
        </Nav>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

const Logo = styled(Link)`
  padding: 0.2rem;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: Arial, Helvetica, sans-serif;
`;
const Nav = styled.div`
  padding: 4rem 0rem;
  display: flex;
  justify-content: center;
  svg {
    font-size: 2rem;
  }
`;

export default App;
