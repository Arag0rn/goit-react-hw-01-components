import { ProfileWraper, UserAvatar, ProfileCard, ProfHead, ProfInfo, StatsList, StatsItem} from "./Profile.styled"

export const Profile = ({username, tag, location, avatar, stats}) => {
    return <ProfileWraper className="profile">{
        <ProfileCard className="description">
         <UserAvatar
      src={avatar}
      alt="User avatar"
      className="avatar"
    />
        <ProfHead className="name">{username}</ProfHead>
        <ProfInfo className="tag">@{tag}</ProfInfo>
        <ProfInfo className="location">{location}</ProfInfo>

        <StatsList className="stats">
    <StatsItem>
      <span className="label">Followers </span>
      <span className="quantity">{stats.followers}</span>
    </StatsItem>
    <StatsItem>
      <span className="label">Views </span>
      <span className="quantity">{stats.views}</span>
    </StatsItem>
    <StatsItem>
      <span className="label">Likes </span>
      <span className="quantity">{stats.likes}</span>
    </StatsItem>
  </StatsList>
        </ProfileCard>}
        </ProfileWraper>
        
}