import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import styles from "./Page.module.scss";
import Button from "@mui/material/Button";
import ListItemText from "@mui/material/ListItemText";

const classes = {
  buttonActionClass: {
    background: "#5A60E7",
    margin: "5px 0",
    borderRadius: "3px",
    padding: "0 50px",
    color: "#FFF",
    width: "48%",
  },
  buttonClass: {
    margin: "5px 0",
    borderRadius: "3px",
    padding: "0 50px",
    color: "#ACAFF3",
    width: "48%",
  },
  gridClass: { marginTop: 0, marginLeft: 0 },
  shareBtn: {color: '#ACAFF3', fontSize: '12px', textAlign: 'left', paddingLeft: '5px', position: 'relative' },
  
};

export default function Status() {
  return (
    <Box sx={{ flexGrow: 1, margin: "auto" }}>
      <Grid container spacing={2} columns={10} sx={classes.gridClass}>
        <Grid xs={3}>
          <div className={styles.ConteinerAch}>
            <div className={styles.AchieY}>
              <div className={styles.Achievement}>
                <img alt="#" src="/img/AchieC.png" />
              </div>
              <div className={styles.Achievement}>
                <img alt="#" src="/img/AchieC.png" />
              </div>
              <div className={styles.Achievement}>
                <img alt="#" src="/img/AchieC.png" />
              </div>
            </div>
            <div className={styles.AchieN}>
              <div className={styles.NoAchievement}>
                <img alt="#" src="/img/Achie.png" />
              </div>
              <div className={styles.NoAchievement}>
                <img alt="#" src="/img/Achie.png" />
              </div>
            </div>
          </div>
          <div className={styles.ConteinerAchBt}>
            <div className={styles.AchieY}>
              <div>
                <img alt="#" src="/img/AchieC.png" />
              </div>
              <div>
                <img alt="#" src="/img/AchieC.png" />
              </div>
              <div>
                <img alt="#" src="/img/AchieC.png" />
              </div>
              <div>
                <img alt="#" src="/img/AchieC.png" />
              </div>
              <div>
                <img alt="#" src="/img/AchieC.png" />
              </div>
            </div>
          </div>
        </Grid>
        <Grid xs={5}>
          <div className={styles.season}>
            <Button sx={classes.buttonActionClass}>
              <ListItemText primary="Все сезоны" />
            </Button>
            <Button sx={classes.buttonClass}>
              <ListItemText primary="Сезон 2020/21" />
            </Button>
          </div>
          <div className={styles.GamesStatistic}>
            <div>
              <p>Игры</p> <span>36</span>
            </div>
            <div>
              <p>Гол</p> <span>67</span>
            </div>
            <div>
              <p>Пас</p> <span>136</span>
            </div>
            <div>
              <p>Гол + Пас</p> <span>136</span>
            </div>
          </div>
        </Grid>
        <Grid xs={2} sx={classes.shareBtn}>
          <div sx={{paddingLeft: '10px'}}>
            Поделиться
          </div>
          <nav>
            <img  alt="#" src="/img/FB.png" />
            <img  alt="#" src="/img/VK.png" />
            <img  alt="#" src="/img/link.png" />
          </nav>
          <div className={styles.backgroungImg} >
            <img  alt="#" src="/img/Pattern.png" />
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}
