import { StatisticCard } from './StatisticCard'

export function StatisticCardList() {
  return (
    <div className='flex w-full flex-row items-center justify-center gap-[30px]'>
      <StatisticCard
        title={<StatisticCard.Title>지금까지 모비와 함께한 사람들</StatisticCard.Title>}
        count={<StatisticCard.Count>15+</StatisticCard.Count>}
      />
      <StatisticCard
        title={<StatisticCard.Title>모비 프로젝트</StatisticCard.Title>}
        count={<StatisticCard.Count>2</StatisticCard.Count>}
      />
      <StatisticCard
        title={<StatisticCard.Title>모비를 통해 취업한 사람들</StatisticCard.Title>}
        count={<StatisticCard.Count>10+</StatisticCard.Count>}
      />
    </div>
  )
}
