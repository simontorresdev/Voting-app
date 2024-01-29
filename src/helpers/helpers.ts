export function calculatePercentages(positiveVotes: number, negativeVotes: number) {
  const totalVotes = positiveVotes + negativeVotes;

  const positivePercentage = (positiveVotes / totalVotes) * 100;
  const negativePercentage = (negativeVotes / totalVotes) * 100;

  return {
    positive: positivePercentage.toFixed(1),
    negative: negativePercentage.toFixed(1),
  };
}
