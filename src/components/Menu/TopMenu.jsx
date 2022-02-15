import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import Stack from "@mui/material/Stack";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

import styles from './TopMenu.module.scss'



export default function TopMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className={styles.conteiner}>
      <Box sx={{ display: "flex", alignItems: "center", width: '96%', margin: 'auto', minWidth: '1300px' }}>
        <Grid container spacing={0} sx={{ justifyContent: "space-between" }}>
          <Grid item xs={3}>
            <Button sx={{ paddingRight: 5 }}>
              <img alt="#" src="/img/Logo.svg" />
            </Button>
          </Grid>
          <Grid
            item
            xs={6}
            sx={{ display: "flex", alignItems: "center", textAlign: "center" }}
          >
            <Typography sx={{ paddingRight: 5 }}>Расписание</Typography>
            <Typography sx={{ paddingRight: 5 }}>Игровые отчеты</Typography>
            <Typography sx={{ paddingRight: 5 }}>Статистика</Typography>
            <Typography sx={{ paddingRight: 5 }}>Еще <ExpandMoreIcon sx={{ verticalAlign: "middle" }}/></Typography>
          </Grid>
          <Grid item xs={1} >
            <IconButton aria-label="upload picture" component="span">
              <SportsSoccerIcon />
            </IconButton>
            <ExpandMoreIcon sx={{ verticalAlign: "middle" }}/>
          </Grid>
          <Grid item xs={1}>
            <Tooltip  title="Account settings" >
              <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              >
                <Stack direction="row" spacing={2}>
                  <Avatar
                    alt="#"
                    src="/img/Ava.svg"
                    sx={{ width: 40, height: 40 }}
                  />
                </Stack>
              </IconButton>
            </Tooltip>
            
          </Grid>
          <Grid item xs={1}>
            <IconButton>
                  <img alt="#" src="/img/bag.svg" />
            </IconButton>
          </Grid>
        </Grid>
        
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem>
          <Avatar /> Профиль
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
}
