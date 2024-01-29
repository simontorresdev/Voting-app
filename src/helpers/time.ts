const dateStringMap: Record<string, number> = {
  day: 24 * 60 * 60 * 1000,
  month: 30 * 24 * 60 * 60 * 1000,
  year: 365 * 24 * 60 * 60 * 1000,
};

export function generateTimeAgo(lastUpdated: string): string {
  const currentDate: Date = new Date();

  const updatedDate: Date = new Date(lastUpdated);
  const timeDifference: number = currentDate.getTime() - updatedDate.getTime();

  if (timeDifference < dateStringMap.day) return `${Math.floor(timeDifference / (60 * 1000))} minutes ago`;
  if (timeDifference < dateStringMap.month) return `${Math.floor(timeDifference / dateStringMap.day)} days ago`;
  if (timeDifference < dateStringMap.year) return `${Math.floor(timeDifference / dateStringMap.month)} months ago`;

  return `${Math.floor(timeDifference / dateStringMap.year)} years ago`;
}
