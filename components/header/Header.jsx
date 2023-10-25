import styles from './Header.module.css';
import {h, Fragments} from 'start-dom-jsx';

export default () => {
  return (
    <div class="headerContainer">
        <div class="headerLeft">
                <span class="logo">Sentire</span>
        </div>
        <div class="headerCenter">
            <i class="fa fa-search"></i>
            <input placeholder="Search for songs, artists or albums" class="searchInput" />
        </div>
        <div class="headerRight">
            <div class="headerLinks">
                <span class="headerLink">Login</span>
                <span class="profile-divider">|</span>
                <span class="headerLink">Register</span>
            </div>
            <div class="headerIcons">
                <div class="headerIconItem">
                <i class="fa fa-user"></i>
                    <span class="headerIconBadge">1</span>
                </div>
                <div class="headerIconItem">
                <i class="fa fa-comment"></i>
                    <span class="headerIconBadge">1</span>
                </div>
                <div class="headerIconItem">
                <i class="fa fa-bell"></i><span class="headerIconBadge">2</span>
                </div>
            </div> 
               <img src='../../assets/noAvatar.png' alt='profileImage' style="width:30px" />
        </div>    
    </div>
  )
}
