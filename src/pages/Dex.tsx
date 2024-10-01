import ChainSelect from '../components/dex/ChainSelect';
import { DexContainer } from '../components/dex/commons';
import DexToggle from '../components/dex/ToogleButton';

export default function DexPage() {
  return (
    <DexContainer>
      <DexToggle />
      <ChainSelect />
    </DexContainer>
  );
}
