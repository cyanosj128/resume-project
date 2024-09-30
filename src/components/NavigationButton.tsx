import styled from 'styled-components';

const NavButton = styled.div``;

interface Props {
  label: string;
  onClick: Function;
}

export default function NavigationButton({ label, onClick }: Props) {
  return <NavButton onClick={() => onClick()}>{label}</NavButton>;
}
