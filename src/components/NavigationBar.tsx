import { ReactNode } from 'react';
import styled from 'styled-components';

const NavBar = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 50px;
  margin-bottom: 10px;
  background-color: rgba(0, 0, 0, 0.3);

  & > div {
    cursor: pointer;
    color: white;
    font-size: 16px;
    font-weight: bold;
  }
`;

export default function NavigationBar({ children }: { children: ReactNode }) {
  return <NavBar>{children}</NavBar>;
}
