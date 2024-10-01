import styled from 'styled-components';

const SelectWrapper = styled.div`
  display: flex;
`;

const SelectBox = styled.div<{ $isSelected: boolean }>`
  flex: 1;
  padding: 12px;
  background-color: ${(props) => (props.$isSelected ? '#4e4e4e' : null)};
  font-style: ${(props) => (props.$isSelected ? 'italic' : null)};
  color: ${(props) => (props.$isSelected ? 'white' : '#a8a8a8')};
`;

const SelectBoxTitle = styled.h3`
  margin: 0 0 16px;
  color: white;
`;

const Select = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 100%;
  padding: 8px;
`;

const Option = styled.option``;

export default function ChainSelect() {
  return (
    <SelectWrapper>
      <SelectBox $isSelected={true}>
        <SelectBoxTitle>From</SelectBoxTitle>
        <Select>
          <Option>a</Option>
          <Option>b</Option>
          <Option>c</Option>
        </Select>
      </SelectBox>
      <SelectBox $isSelected={false}>
        <SelectBoxTitle>To</SelectBoxTitle>
        <Select />
      </SelectBox>
    </SelectWrapper>
  );
}
