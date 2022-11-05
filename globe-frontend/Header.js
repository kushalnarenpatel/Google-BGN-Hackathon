import * as React from "react";
import styled from "styled-components";
// import SearchIcon from '@mui/icons-material/Search'
// import HomeIcon from '@mui/icons-material/Home'
// import FlagIcon from '@mui/icons-material/Flag'
// import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined'
// import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined'
// import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle'
// import { Avatar, IconButton } from '@mui/material'

// import AddIcon from '@mui/icons-material/Add'
// import ForumIcon from '@mui/icons-material/Flag'
// import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive'
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import {
  Search,
  Home,
  Flag,
  SubscriptionsOutlined,
  StorefrontOutlined,
  SupervisedUserCircle,
  Add,
  Forum,
  NotificationsActive,
  ExpandMore,
} from "@mui/icons-material";

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderLeft>
        <img src="waffle.png"  id="waffle" alt="waffle" width={100} />
      </HeaderLeft>
      <HeaderInput>
        <Search />
        <input placeholder="Search Popular" type="text" />
      </HeaderInput>
      <HeaderCenter>
        <div className="header__option header__option--active">
          <Home fontsize="large" />
        </div>
        <div className="header__option">
          <Flag fontsize="large" />
        </div>
        <div className="header__option">
          <SubscriptionsOutlined fontsize="large" />
        </div>
        <div className="header__option">
          <StorefrontOutlined fontsize="large" />
        </div>
        <div className="header__option">
          <SupervisedUserCircle fontsize="large" />
        </div>
      </HeaderCenter>
      <HeaderRight>
        <div className="header__info">
          <Avatar
            src="https://pbs.twimg.com/profile_
images/1020939891457241088/fcbu814K_400x400.jpg "
          />
          <h4>User</h4>
        </div>
        <IconButton>
          <Add />
        </IconButton>
        <IconButton>
          <Forum />
        </IconButton>
        <IconButton>
          <NotificationsActive />
        </IconButton>
        <IconButton>
          <ExpandMore />
        </IconButton>
      </HeaderRight>
    </HeaderWrapper>
  );
};
const HeaderWrapper = styled.div`
  opacity: 0.95;
  display: flex;
  padding: 15px 20px;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  background-color: white;
  z-index: 100;
  top: 0;
  box-shadow: 0px 5px 8px -9px rgba(0, 0, 0, 0.75);
`;
const HeaderLeft = styled.div`
  display: flex;
  justify-content: space-evenly;
  img {
    height: 100px;
  }
  #waffle{
    width: 500px;
    height: 500px;
  }
`;
const HeaderInput = styled.div`
  display: flex;
  align-items: center;
  background-color: #eff2f5;
  padding: 10px;
  margin-left: 10px;
  border-radius: 33px;
  input {
    border: none;
    background-color: transparent;
    outline-width: 0;
  }
`;
const HeaderCenter = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  .header__option {
    display: flex;
    align-items: center;
    padding: 10px 30px;
    cursor: pointer;
    .MuiSvgIcon-root {
      color: gray;
    }
    &:hover {
      background-color: #eff2f5;
      border-radius: 10px;
      align-items: center;
      padding: 0 30px;
      border-bottom: none;
      .MuiSvgIcon-root {
        color: #FF8C00;
      }
    }
  }
  .header__option--active {
    border-bottom: 4px solid #FF8C00;
    .MuiSvgIcon-root {
      color: #FF8C00;
    }
  }
`;
const HeaderRight = styled.div`
  display: flex;
  .header__info {
    display: flex;
    align-items: center;
    h4 {
      margin-left: 10px;
    }
  }
`;
export default Header;
return;
