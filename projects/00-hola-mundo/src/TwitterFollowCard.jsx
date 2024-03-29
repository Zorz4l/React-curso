import { useState } from "react";

export function TwitterFollowCard({ children, userName, initialIsFollowing }){

  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

  //if functions
  const text = isFollowing ? "siguiendo" : "seguír";
  const buttonClassName = isFollowing
    ? "tw-followCard-button is-following"
    : "tw-followCard-button";
    
  //onclick function
    const handleClick = ()=>{
      setIsFollowing(!isFollowing);
    }

  return(
    <article className="tw-followCard">
    <header className="tw-followCard-header">
      <img className="tw-followCard-avatar" src={`https://unavatar.io/${userName}`} alt="El avatar de kikobeats" />
      <div className="tw-followCard-info">
        <strong>{children}</strong>
        <span className="tw-followCard-infoUserName">@{userName}</span>
      </div>
    </header>

    <aside>
      <button className={buttonClassName} onClick={handleClick}>
        <span className="tw-followCard-text">{text}</span>
        <span className="tw-followCard-stopFollow">Dejar de seguír</span>
      </button>
    </aside>
  
   </article>
  )
}