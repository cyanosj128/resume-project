import { useState } from 'react';
import styled from 'styled-components';

const ToggleWrapper = styled.div`
  display: flex;
  border: 1px solid #a8a8a8;
  margin-bottom: 24px;
`;

const ToggleButton = styled.div<{ $isSelected: boolean }>`
  width: 50%;
  padding: 5px 0;
  color: white;
  text-align: center;
  font-size: 20px;
  background-color: ${(props) => (props.$isSelected ? '#4e4e4e' : null)};
  font-style: ${(props) => (props.$isSelected ? 'italic' : null)};
  color: ${(props) => (props.$isSelected ? 'white' : '#a8a8a8')};
  cursor: pointer;
`;

export default function DexToggle() {
  const [isBridge, setIsBridge] = useState(true);

  return (
    <ToggleWrapper>
      <ToggleButton $isSelected={isBridge} onClick={() => setIsBridge(true)}>
        Bridge
      </ToggleButton>
      <ToggleButton $isSelected={!isBridge} onClick={() => setIsBridge(false)}>
        Swap
      </ToggleButton>
    </ToggleWrapper>
  );
}
