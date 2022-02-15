import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import styles from './Table.module.scss'


const columns = [
  { field: "season", headerName: "Сезон", width: 450, },
  { field: "gameNum", headerName: "Кол-во игр", width: 180 },
  { field: "goal", headerName: "Гол", type: "number", width: 80 },
  { field: "pas", headerName: "Пас", type: "number", width: 80 },
  { field: "pasGoal", headerName: "Пас + гол", type: "number", width: 100 },
  { field: "rating", headerName: "Рейтинг", type: "number", width: 100 },
];

const rows = [
  {
    id: 1,
    gameNum: "5",
    season: "Сезон 2022/2021",
    goal: 35,
    pas: 2,
    pasGoal: 2,
    rating: 121,
  },
  {
    id: 2,
    gameNum: "1",
    season: "Сезон 2021/2020",
    goal: 42,
    pas: 2,
    pasGoal: 2,
    rating: 121,
  },
  {
    id: 3,
    gameNum: "4",
    season: "Сезон 2020/2019",
    goal: 45,
    pas: 2,
    pasGoal: 2,
    rating: 121,
  },
  {
    id: 4,
    gameNum: "5",
    season: "Сезон 2019/2018",
    goal: 16,
    pas: 2,
    pasGoal: 2,
    rating: 121,
  },
  {
    id: 5,
    gameNum: "7",
    season: "Сезон 2018/2017",
    goal: null,
    pas: 2,
    pasGoal: 2,
    rating: 121,
  },
  {
    id: 6,
    gameNum: "10",
    season: "Сезон 2017/2016",
    goal: 150,
    pas: 2,
    pasGoal: 2,
    rating: 121,
  },
  {
    id: 7,
    gameNum: "4",
    season: "Сезон 2016/2015",
    goal: 44,
    pas: 2,
    pasGoal: 2,
    rating: 121,
  },
  {
    id: 8,
    gameNum: "3",
    season: "Сезон 2015/2014",
    goal: 36,
    pas: 2,
    pasGoal: 2,
    rating: 121,
  },
  {
    id: 9,
    gameNum: "2",
    season: "Сезон 2014/2013",
    goal: 65,
    pas: 2,
    pasGoal: 2,
    rating: 121,
  },
];

export default function Table() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ marginTop: "30px", minWidth: 170 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Формат</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={age}
          onChange={handleChange}
          autoWidth
          label="Age"
        >
          <MenuItem value="">
            <em>One</em>
          </MenuItem>
          <MenuItem value={10}>Two</MenuItem>
          <MenuItem value={21}>Three</MenuItem>
          <MenuItem value={22}>Smiles</MenuItem>
        </Select>
      </FormControl>

      <div className={styles.rowStyles}>
        <DataGrid 
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
        />
      </div>
    </div>
  );
}
