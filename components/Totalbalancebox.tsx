import React from 'react'
import { formatAmount } from '@/lib/utils'
import CountUp from 'react-count-up'
import AnimatedCounter from './AnimatedCounter'
import DountChart from './DountChart'
const Totalbalancebox = ({
  accounts= [],totalBanks,totalCurrentBalance
}:TotlaBalanceBoxProps) => {
  return (
    <section className="total-balance">
      <div className="total-balance-chart">
          <DountChart accounts={accounts}/>
      </div>
      <div className="flex flex-col gap-6">
        <h2 className="heder-2">
        Bank Accounts: {totalBanks} 
        </h2>
        <div className="flex flex-col gap-2">
          <p className="total-balance-label">
            Total Current Balance 
          </p>
          <p className="total-balance-amount flex-center gap-2">
            {/* <AnimatedCounter amount={totalCurrentBalance}/> */}
          {formatAmount(totalCurrentBalance)}
          </p>
        </div>
      </div>
    </section>
  )
}

export default Totalbalancebox