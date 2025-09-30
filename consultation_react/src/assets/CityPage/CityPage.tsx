import type { JSX } from "react";
import style from './CityPage.module.css'


export default function CityPage(): JSX.Element {
  return (
    <div className={style.cityClass}>
        <h1>All about the city</h1>
        <p>Численность населения города по оценке на 31 декабря 2017 года составляет 95 797 человек[7]. По данным на 31 декабря 2011 года (с учётом итогов переписи 2011) —  91 327 жителей (причём ранее на ту же дату оценивалась в 95 300 жителей)[8]. По данным на 31 декабря 2000 года в городе проживало 101 267 человек, на 1990 год —  127 447 человек, на 1970 год — 97 389 человек.</p>
      <img src="https://www.mecklenburg-schwerin.de/export/sites/tvms/bilder/buehne_startseite/schloss_BG.jpg" alt="" />
    </div>
  )
}
