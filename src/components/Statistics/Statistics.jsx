import {StatWrap, StatList, StatHead, StatListItem} from "./Statistics.styled"


export const Statistics = ({stats}) => {
    return <>{
        <StatWrap className="statistics">
  <StatHead  className="title">Upload stats</StatHead>

  <StatList className="stat-list">
    {stats.map(({id, label, percentage})=>{
        return <StatListItem className="item" key={id}>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </StatListItem>
    })}
    
  </StatList>
</StatWrap>
    }
    </>
}