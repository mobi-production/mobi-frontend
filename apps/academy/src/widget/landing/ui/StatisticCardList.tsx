import { STATISTIC_CARDS } from '../constants'
import { StatisticCard } from './StatisticCard'

export function StatisticCardList() {
  return (
    <div className='flex w-full flex-row items-center justify-center gap-[1.875rem] mobile:flex-col'>
      {STATISTIC_CARDS.map((card, index) => (
        <StatisticCard
          key={index}
          title={<StatisticCard.title>{card.title}</StatisticCard.title>}
          count={<StatisticCard.count>{card.count}</StatisticCard.count>}
        />
      ))}
    </div>
  )
}
