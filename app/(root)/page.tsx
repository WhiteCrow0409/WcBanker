import { Section } from 'lucide-react'
import React from 'react'
import HeaderBox from '@/components/HeaderBox'
import Totalbalancebox from '@/components/Totalbalancebox'
import RightSideBar from '@/components/RightSideBar'
const Home = () => {
    const loggedIn = {firstName:'WhiteCrow'};
    return (
        <section className="home">
            <div className="home-content">
                <header className="home-header">
                <HeaderBox 
                type="greeting"
                title="Welcome Back !"
                user={loggedIn?.firstName||'Guest'}
                subtext="Time to check your account, Wallet Warrior! let’s see where all those coffee runs went!"
                /> 
                <Totalbalancebox 
                accounts ={[]}
                totalBanks={1}
                totalCurrentBalance= {1250.69}
                />
                </header>
                RECENT TRANSACTIONS
            </div>
            <RightSideBar 
                user={loggedIn}
                transactions={[]}
                banks={[]}
            />
        </section>
    )
}
export default Home