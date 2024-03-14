import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className='footer'>
      <section>
        <div class="final_square">
          <section class="hub">
            <div class="hub_title">
              <div class="hub_one"><a class="hub_link" href="#">Лиговский пр. 133 Е</a></div>
              <div class="hub_two"><a class="hub_link" href="#">+7 (911) 123-45-67</a></div>
              <div class="hub_three"><a class="hub_link" href="#">lavita_school@gmail.com</a>
              </div>
            </div>
            <div class="big_hub">
              <div class="hub_list">
                <ul>
                  <h1><a class="hub_link_two" href="#">Основные ссылки</a></h1>
                  <li><a class="hub_link_two" href="#">Наши специалисты</a></li>
                  <li><a class="hub_link_two" href="#">Расписание занятий</a></li>
                  <li> <a class="hub_link_two" href="#">Курсы и стоимость</a></li>
                </ul>
              </div>
              <div class="hub_list_one">
                <li><a class="hub_link_two" href="#">MSK 1</a></li>
                <li><a class="hub_link_two" href="#">OPT</a></li>
              </div>
              <div class="hub_square">
                <div class="square_title">
                  <h2>Режим работы</h2>
                </div>
                <div class="own">
                  <div class="hub_list_two">
                    <ul>
                      <li>Понедельник - Пятница</li>
                      <li>Суббота</li>
                    </ul>
                  </div>
                  <div class="hub_list_two">
                    <ul>
                      <li>11:00 - 21:00</li>
                      <li>11:00 - 19:00</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </footer>
  )
}