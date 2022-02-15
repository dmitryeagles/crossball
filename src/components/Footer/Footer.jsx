import React from 'react';
import Button from "@mui/material/Button";
import CallIcon from '@mui/icons-material/Call';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <div className={styles.footerBody}>
      
      <div className={styles.footerLayout}>
        <div className={styles.contactBlock}>
          <Button >
                  <img alt="#" src="/img/LogoFooter.svg" />
          </Button>
          <div className={styles.btnStore}>
            <Button >
                    <img alt="#" src="/img/appstore.png" />
            </Button>
            <Button >
                    <img alt="#" src="/img/googleplay.png" />
            </Button>
          </div>
          <div className={styles.contactBlock}>
            <p>Наши контакты</p>
            <div>
              <CallIcon sx={{marginRight: "10px", float: 'left'}}/>
              <h4>+7(495)109-03-09</h4>
            </div>
            <div>
              <MailOutlineIcon sx={{marginRight: "10px",  float: 'left' }}/>
              <h4>go@crossball.ru</h4>
            </div>
          </div>
        </div>
        <div className={styles.footerLink}>
          <ul>
            <p>
              Разделы
            </p>
            <li>
              Главная
            </li>
            <li>
              Расписание
            </li>
            <li>
              Игровые отчеты
            </li>
            <li>
              Статистика
            </li>
          </ul>
          <ul>
            <p>
              Виды спорта
            </p>
            <li>
              Футбол
            </li>
            <li>
              Баскетбол
            </li>
            <li>
              Волейбол
            </li>
          </ul>
          <ul>
            <p>
              Полезное
            </p>
            <li>
              Как записаться?
            </li>
            <li>
              Ответы на вопросы
            </li>
            <li>
              Достижения
            </li>
          </ul>
          <ul>
            <p>
              Чё почём
            </p>
            <li>
              Абонементы
            </li>
            <li>
              Корп. клиентам
            </li>
            <li>
              Партнеры
            </li>
          </ul>
        </div>      
      </div>
      <div className={styles.footerDew}>
        <p>© Все права защищены</p>
        <div>
        <Button >
            <img alt="#" src="/img/IG.png" />
        </Button>
        <Button >
            <img alt="#" src="/img/VK.png" />
        </Button>
        <Button >
            <img alt="#" src="/img/FB.png" />
        </Button>
        <Button >
            <img alt="#" src="/img/YT.png" />
        </Button>
        <Button >
            <img alt="#" src="/img/Telegram.png" />
        </Button>
        <Button >
            <img alt="#" src="/img/WA.png" />
        </Button>
        </div>
        <p>Сделали в Spans</p>
      </div>
     
    </div>
  )
}

export default Footer