import * as React from "react";
import Avatar from "@mui/material/Avatar";
import styles from "./Page.module.scss";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import EditIcon from "@mui/icons-material/Edit";
import Link from "@mui/material/Link";


export default function UserInfo() {
  return (
    <div className={styles.cardPlayer}>
      <div className={styles.cardLayaut}>
        <Avatar alt="#" src="/img/Ava2.svg" sx={{ width: 80, height: 80 }} />
        <div className={styles.ratio}>
          <p className={styles.raiting}>
            89.4{" "}
            <span>
              999{" "}
              <ArrowUpwardIcon
                sx={{ fontSize: "12px", verticalAlign: "middle" }}
              />
            </span>
          </p>
          <p className={styles.name}>Елишакашвили Михо </p>
        </div>
      </div>
      <div className={styles.edit}>
        <Link href="#" underline="hover" sx={{ color: "#ACAFF3" }}>
          <EditIcon
            sx={{
              fontSize: "12px",
              verticalAlign: "middle",
              color: "#ACAFF3",
            }}
          />{" "}
          Редактировать{" "}
        </Link>
      </div>
    </div>
  );
}
