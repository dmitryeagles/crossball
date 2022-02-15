import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import styles from './Page.module.scss';
import SubMenu from './SubMenu';
import UserInfo from './UserInfo';
import Status from './Status';
import { TableWrapper } from '../TableWrapper';


const classes = {
    boxClasses: { flexGrow: 1, maxWidth: '1440px',minWidth: '1300px', margin: 'auto'},
    gridConteiner: { marginTop: 0, padding: '0 10px'},
    itemClasses: { background: 'linear-gradient(238.37deg, rgba(90, 96, 231, 0.35) 6.34%, rgba(30, 30, 40, 0) 103.77%), #2C2C2C;', padding: '25px 15px'},

}

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const headData = [
  {
    name: 'Сезон',
  },
  {
    name: 'Кол-во игр',
  },
  {
    name: 'Гол',
  },
  {
    name: 'Пас',
  },
  {
    name: 'Гол + пас',
  },
  {
    name: 'Рейтинг',
  },
]

export default function Page() {
  return (
    <Box sx={classes.boxClasses}>
      <Grid container spacing={6} columns={16} sx={classes.gridConteiner}>
        <Grid item xs={4} >
          <div className={styles.submenuBox}>
            <UserInfo/>
            <SubMenu/>
          </div>
        </Grid>
        <Grid item xs={12} >
          <Item sx={classes.itemClasses}> 
            <Status/>
          </Item>
          <TableWrapper 
            headData={headData}
          />
        </Grid>
        
      </Grid>
    </Box>
  );
}
