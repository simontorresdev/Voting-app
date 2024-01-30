import { calculatePercentages, updateCharacters, getData, buildBackground } from './helpers';
import { data } from '../assets/data.json';
import { Character } from '../types/types';

const localStorageData = [...data, { ...data[0], name: 'Kanye West copy mock' }];

// mock localStorage

const mockGetItem = jest.fn().mockReturnValue(JSON.stringify(localStorageData));
const mockSetItem = jest.fn();
const mockRemoveItem = jest.fn();

Object.defineProperty(window, 'localStorage', {
  value: {
    getItem: (...args: string[]) => mockGetItem(...args),
    setItem: (...args: string[]) => mockSetItem(...args),
    removeItem: (...args: string[]) => mockRemoveItem(...args),
  },
});

// Test the calculatePercentages function
describe('calculatePercentages', () => {
  it('Should correctly calculate percentages', () => {
    const result = calculatePercentages(20, 30);
    expect(result).toEqual({ positive: '40.0', negative: '60.0' });
  });
});

// Test the updateCharacters function
describe('updateCharacters', () => {
  it('Should correctly update votes for a character', () => {
    const characters = [
      { name: 'Character 1', votes: { positive: 10, negative: 5 } },
      { name: 'Character 2', votes: { positive: 8, negative: 7 } },
    ] as Character[];

    const updatedCharacters = updateCharacters(characters, 0, 'positive');
    expect(updatedCharacters[0].votes.positive).toBe(11);
  });
});

// Test the getData function
describe('getData', () => {
  it('Should return data from localStorage if present', () => {
    const result = getData();
    expect(result).toEqual(localStorageData);
  });
});

// Test the buildBackground function
describe('buildBackground', () => {
  it('Should correctly build the background for viewMode "list"', () => {
    const result = buildBackground('image', 'list');
    expect(result).toEqual({
      background: expect.stringContaining("url('src/assets/img/image.png') left center / contain"),
      backgroundRepeat: 'no-repeat',
    });
  });

  it('Should correctly build the background for viewMode other than "list"', () => {
    const result = buildBackground('image', 'grid');
    expect(result).toEqual({
      background: expect.stringContaining("url('src/assets/img/image@2x.png') center center / cover"),
    });
  });
});
