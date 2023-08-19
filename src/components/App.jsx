
import user from 'components/user.json';
import friends from 'components/friends.json';
import transactions from 'components/transactions.json'
import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import data from 'components/data.json';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';
import { GlobalStyle } from './GlobalStyle';




export const App = () => {
  return (
    <>
           <Profile 
                username={user.username}
                tag={user.tag}
                location={user.location}
                avatar={user.avatar}
                stats={user.stats}
            />
            <Statistics title="Upload stats" stats={data}/>
            <FriendList friends={friends} />
            <TransactionHistory items={transactions}/>
            <GlobalStyle/>
    </>
    
  );
};
