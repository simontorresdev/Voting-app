import { useState } from 'react';
import SwitchSection from './SwitchSection';
import { ViewType } from '../types/types';
import CardsSection from './CardsSection';

const VotesSection = () => {
  const [viewMode, setViewMode] = useState<ViewType>('list');

  return (
    <>
      <SwitchSection setViewMode={setViewMode} />
      <CardsSection />
    </>
  );
};

export default VotesSection;
