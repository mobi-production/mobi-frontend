import { StatisticCard } from './StatisticCard'

export function StatisticCardList() {
  return (
    <div className='flex w-full flex-row items-center justify-center gap-[1.875rem]'>
      <StatisticCard
        title={<StatisticCard.title>지금까지 모비와 함께한 사람들</StatisticCard.title>}
        count={<StatisticCard.count>15+</StatisticCard.count>}
      />
      <StatisticCard
        title={<StatisticCard.title>모비 프로젝트</StatisticCard.title>}
        count={<StatisticCard.count>2</StatisticCard.count>}
      />
      <StatisticCard
        title={<StatisticCard.title>모비를 통해 취업한 사람들</StatisticCard.title>}
        count={<StatisticCard.count>10+</StatisticCard.count>}
      />
    </div>
  )
}
