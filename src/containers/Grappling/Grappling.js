import React from "react";
import Header from "../../components/header/Header";
import tileData from "../../components/main/MainTrainers/tileData";

function Grappling() {
  return (
    <div>
      <Header type={'secondary'}/>
      <div className='timetable'><h2>здесь будет расписание занятий</h2></div>
      <div className='trener-block'>
        <img className='trener-block__img' src={tileData[3].img}></img>
        <div classname='trener-block__info'>
          <h3>Василий Песков</h3>
          <h4>Тренер по Боксу</h4>
          <div>
            Менеджер по профессиональному боксу.
            Член сборной Свердловской области 2007 года.
            Призёр Свердловской области по боксу.
            Победитель различных турниров в городах Екатеринбург, 
            Верхняя Пышма, Березовский, Магнитогорск, Полевской. 
            Участник первенства Уральского федерального округа в составе сборной Свердловской области.
          </div>
        </div>
      </div>
      <div className='timetable'><h4>здесь будут цены</h4></div>
      <div className="infoWrapper">
        <h2>Грепплинг</h2>
        <p>
          Большую популярность за последнее время приобрел <b>грепплинг в
          Екатеринбурге</b>. Этот вид боевых искусств собирает в свои ряды все
          больше поклонников. Наш клуб не остается в сторонке от такой явной
          заинтересованности общества, а потому приглашает всех желающих на
          тренировки, проводимые под руководством опытного инструктора. Занятия
          предлагаются взрослой и детской аудитории спортсменов.
        </p>
        <p>
          Грепплинг объединяет в себе различные борцовские техники. При этом
          допускается минимальные ограничения, которые действует в отношении к
          применению удушающих и болевых приемов. Этот вид единоборства включает
          в себя элементы джиу-джитсу, самбо, дзюдо, вольной борьбы.
        </p>
        <p>
          Проводимые опытным инструктором <b>тренировки по грепплингу в
          Екатеринбурге</b> обладают высокой эффективностью. Систематически
          посещаемые занятия навсегда избавят вас от той уязвимости и
          незащищенности, которую можно испытать при нападении противника,
          например, в уличной драке. Оказавшись во время потасовки на земле, вы
          будете готовы применить освоенные в нашем клубе навыки борьбы и,
          несомненно, победите.
        </p>
        <p>
          Мы предлагаем вам записаться на персональные или <b>групповые занятия по
          грепплингу в Екатеринбурге</b>. Под руководством профессионала вы сможете
          не только применять грубую физическую силу, но также научитесь
          моментально оценивать обстановку, заодно обдумывая свои дальнейшие
          действия. Независимо от физических данных и веса соперника вы будете
          добиваться победы при помощи допустимых и только вам известных болевых
          и удушающих приемов.
        </p>
        <p>
          Комфортно обустроенный <b>зал грепплинга</b> приглашает всех, кого этот вид
          единоборства привлекает, прежде всего, возможностью заниматься борьбой
          и при этом учиться грамотно, рационально мыслить. Если у вас нет
          каких-либо проблем со здоровьем, вы можете уже сегодня записаться на
          групповые или индивидуальные занятия в соответствии с утвержденным
          расписанием.
        </p>
        <p>
          Приходите в клуб грепплинга и уже через какое-то время вы будете
          удивляться приобретенной в процессе тренировок гибкости, силе и
          пластике. Вы научитесь сопротивляться противнику, используя не только
          руки и ноги, но и все тело. При этом сможете воздействовать на него из
          любого положения. Помимо приобретения всевозможных навыков вы также
          научитесь развивать в себе чувство баланса как своего собственного
          тела, так и веса соперника.
        </p>
      </div>
    </div>
  );
}
export default Grappling;
