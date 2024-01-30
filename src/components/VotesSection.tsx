import { useEffect, useState } from 'react';
import SwitchSection from './SwitchSection';
import { ViewType } from '../types/types';
import CardsSection from './CardsSection';
import { getData } from '../helpers/helpers';
import useIsMobile from '../hooks/useIsMobile';

const VotesSection = () => {
  const { isMobile } = useIsMobile();
  const [viewMode, setViewMode] = useState<ViewType>('list');
  const data = getData();

  useEffect(() => {
    setViewMode(isMobile ? 'grid' : 'list');
  }, [isMobile]);

  if (!viewMode) return;

  return (
    <>
      <SwitchSection setViewMode={setViewMode} />
      <CardsSection viewMode={viewMode} data={data} />
    </>
  );
};

export default VotesSection;
