import React from "react";
import Header from "../../components/header/Header";
import tileData from "../../components/main/MainTrainers/tileData";


function Boxing() {
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
        <h2>Бокс</h2>
        <p>
          Сегодня позитивное отношение к боксу выражается не только через
          просмотр профессиональных боев, транслируемых по телевизору или в
          интернете. В последнее время этот вид спорта стал любимым увлечением
          молодежи различного возраста, К этой же категории относится и
          большинство участников нашего клуба. Прочно утвердился <b>бокс в
          Екатеринбурге</b> в качестве одного из самых популярных единоборств,
          заняться которым не против как парни, так и девушки.
        </p>
        <p>
          Грамотно организованные <b>тренировки по боксу в Екатеринбурге</b> помогают
          обрести прекрасную физическую форму, а также стать сильнее и
          выносливее. Занятия под руководством опытного тренера нацелены на
          улучшение боевых способностей каждого бойца, решившего посвятить свой
          досуг любимому спортивному увлечению. Боксерские тренировки
          способствуют качественной подготовке к бою и развитию приобретаемых
          навыков.
        </p>
        <p>
          Подобно любому бойцовскому искусству этот вид единоборств отличается
          особенностями тренировок. Как правило, это спарринговые и <b>групповые
          занятия боксом в Екатеринбурге</b>, с помощью которых спортсмен развивает
          не только свою физическую силу, но и улучшает координацию движений, а
          также скорость реакции. Несмотря на то, что при тренировках боксер в
          основном задействует мышцы рук и корпуса, мышечная масса остальных
          частей тела не остается в полном покое. Бойцу нужны сильные ноги,
          чтобы быстро передвигаться на ринге и стойко «держать удар».
        </p>
        <p>
          Немаловажное значение в достижении высоких результатов имеет должным
          образом обустроенный <b>зал бокса</b>, а также поддержка опытного тренера.
          Особенно важен психологический фактор, когда наставник не только
          помогает «поставить удар», но и постоянно настраивает на победу, таким
          образом, помогая своему ученику развить в себе уверенность. Для тех,
          кто мечтает о триумфе на боксерском ринге, такая поддержка просто
          неоценима.
        </p>
        <p>
          Действующая в рамках нашего клуба <b>школа бокса</b> предполагает проведение
          тренировочных занятий, начинающихся, в первую очередь, с разминки. К
          подобным упражнениям относится стандартный комплекс разминочных
          движений и действий, способствующих достижению оптимального состояния
          для проведения боксерских тренировок. После основных занятий наступает
          время обязательной классической заминки с элементами растяжки. Как
          начальный, так и заключительный этапы тренировки очень важны. Их
          выполнение помогает предотвратить мышечные боли и жжения, возникающие
          во время активизации выброса молочной кислоты в мышцы после
          тренировки.
        </p>
      </div>
    </div>
  );
}
export default Boxing;
