import { useState } from 'react';
import SwitchSection from './SwitchSection';
import { ViewType } from '../types/types';
import CardsSection from './CardsSection';
import { getData } from '../helpers/helpers';

const VotesSection = () => {
  const [viewMode, setViewMode] = useState<ViewType>('list');
  const data = getData();

  return (
    <>
      <SwitchSection setViewMode={setViewMode} />
      <CardsSection viewMode={viewMode} data={data} />
    </>
  );
};

export default VotesSection;
