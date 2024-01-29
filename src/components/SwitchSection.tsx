import React from 'react';
import '../styles/SwitchSection.scss';
import { ViewType } from '../types/types';

interface Props {
  setViewMode: React.Dispatch<React.SetStateAction<ViewType>>;
}

const SwitchSection = ({ setViewMode }: Props) => {
  const handleViewModeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value as ViewType;
    setViewMode(selectedValue);
  };

  return (
    <div className="switch-section">
      <h3>Previous Rulings</h3>
      <select name="viewMode" onChange={handleViewModeChange}>
        <option value="list">List</option>
        <option value="grid">Grid</option>
      </select>
    </div>
  );
};

export default SwitchSection;
