import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import EventNoteIcon from '@mui/icons-material/EventNote';
import HistoryIcon from '@mui/icons-material/History';
import LogoutIcon from '@mui/icons-material/Logout';

import styles from './Page.module.scss'

export default function SubMenu() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{ width: "70%", maxWidth: 360, bgcolor: "background.paper", paddingTop: "45px", marginLeft: "20px" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
        <ListItemButton onClick={handleClick} sx={{ background: '#EFEFFD', borderRadius: '5px', padding: '5px 10px', color: '#5A60E7'}}>
            <ListItemIcon sx={{ minWidth: '0', marginRight: '10px', color: '#5A60E7' }}>
                <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText primary="Статистика" />
            {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit sx={{ paddingLeft: '40px' }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4, background: '#EFEFFD', margin: '5px 0', borderRadius: '5px', padding: '5px 10px', color: '#5A60E7'}}>
            <ListItemText primary="Футбол" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4, margin: '5px 0', borderRadius: '5px', padding: '5px 10px' }}>
            <ListItemText primary="Баскетбол" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4, margin: '5px 0', borderRadius: '5px', padding: '5px 10px' }}>
            <ListItemText primary="Волейбол" />
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton sx={{ pl: 4, margin: '5px 0', borderRadius: '5px', padding: '5px 10px' }}>
        <ListItemIcon sx={{ minWidth: '0', marginRight: '10px',color: '#5A60E7' }}>
          <CalendarTodayIcon />
        </ListItemIcon>
        <ListItemText primary="Ближайшие игры" />
      </ListItemButton>
      <ListItemButton sx={{ pl: 4, margin: '5px 0', borderRadius: '5px', padding: '5px 10px' }}>
        <ListItemIcon sx={{ minWidth: '0', marginRight: '10px',color: '#5A60E7' }}>
          <EventNoteIcon />
        </ListItemIcon>
        <ListItemText primary="Игровые отчеты" />
      </ListItemButton>
      <ListItemButton sx={{ pl: 4, margin: '5px 0', borderRadius: '5px', padding: '5px 10px' }}>
        <ListItemIcon sx={{ minWidth: '0', marginRight: '10px',color: '#5A60E7' }}>
          <HistoryIcon />
        </ListItemIcon>
        <ListItemText primary="История заказов" />
      </ListItemButton>

      <div className={styles.exit}>
      <ListItemButton sx={{ pl: 4, margin: '5px 0', borderRadius: '5px', padding: '5px 10px' }}>
        <ListItemIcon sx={{ minWidth: '0', marginRight: '10px',color: '#5A60E7' }}>
          <LogoutIcon />
        </ListItemIcon>
        <ListItemText primary="Выйти" />
      </ListItemButton>
      </div>
      
      
    </List>
  );
}
