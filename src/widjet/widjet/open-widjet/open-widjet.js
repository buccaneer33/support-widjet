"use strict";
// import View from '../view/view';
import DOMEN from '../../settings/settings.js';
import PATH from '../../settings/settings.js';
import WidgetPosition from '../helpers/widget-position';

function openWidjet(config, token){

	var options = {
	 domain: JSON.stringify(DOMEN.DOMEN),
		path: JSON.stringify(PATH.PATH),
        bg_color: "FFFFFF",
        colorSchema: config.colorSchema,
		widgetPos: config.widgetPos,
		person: 'Фиталий Филиповский',
		personAtr: 'Консультант' 
	};
	console.log('widgetPos ' + options.widgetPos); 
	
	let pos = new WidgetPosition();
	let posSchema = pos.returnPosByType(options.widgetPos);
	let x = (posSchema.x);                       
	let y = (posSchema.y);

	var Widget = {
		created: false,
		widgetElement: null,
		show: function() {
			if (this.created)
				return;
			this.widgetElement = document.createElement('div');
			this.widgetElement.setAttribute('class', 'support_widget');
			this.widgetElement.classList.add('support_widget_container--down-left');
			this.widgetElement.innerHTML = `
			<div class="support_widget__body support_widget__orange">
			<button type="button" id="support_widget__close" class="support_widget__close"></button>
			<div class="support_widget__header">
				<div class="support_widget__header-img">
					<button type="button" class="support_widget__header-button">
						<img src="http://promopost.net/img/Content-UI-img-icons-png-cs.png" />
					</button>
				</div>
				<div class="support_widget__header-desc"><h4>${options.person}</h4></div>
			</div>
			<form class="support_widget__form">
				<div class="support_widget__messages">
					<ul class="support_widget__mess-list">
					<li class="support_widget__mess-item">
					<span class="support_widget__mess-info">
						<span class="support_widget__mess-name">Систеное</span>
						<span class="support_widget__mess-date">6.15/19.09.2018</span>
					</span>
					Здравствуйте, введите ваше имя что бы мы могли начать общение. 
					</li>

					<li class="support_widget__mess-item">
					<span class="support_widget__mess-info">
						<span class="support_widget__mess-name">Систеное</span>
						<span class="support_widget__mess-date">6.15/19.09.2018</span>
					</span>
					<p>Здравствуйте, введите ваше имя что бы мы могли начать общение.</p>
					<p name="name" class="support_widget__name-form">
						<input type="text" name="name" class="support_widget__name-input" />
						<button type="button" class="support_widget__name-button">Ввод</button>
					</p>
					</li>
						<li class="support_widget__mess-item support_widget__mess-user">
						<span class="support_widget__mess-info">
							<span class="support_widget__mess-name">Name</span>
							<span class="support_widget__mess-date">6.15/19.09.2018</span>
						</span>	
						qbbhbd bdbffb fbbfbf bbbfbfbb bzcbbbb! !!!!! qbbhbd bdbffbfbbfbfbbbfbfbbbzcbbbb !!!!!!
						</li>
						<li class="support_widget__mess-item support_widget__mess-admin">
						<span class="support_widget__mess-info">
							<span class="support_widget__mess-name">Name</span>
							<span class="support_widget__mess-date">6.15/19.09.2018</span>
						</span>	
						qbbhbdbdbffbfbbfbfbbbfbfbbbzcbbbb!!!!!!qbbhbdbdbffbfbbfbfbbbfbfbbbzcbbbb!!!!!!qbbhbdbdbffbfbbfbfbbbfbfbbbzcbbbb!!!!!!
						</li>
						<li class="support_widget__mess-item support_widget__mess-user">
						<span class="support_widget__mess-info">
						<span class="support_widget__mess-name">Name</span>
						<span class="support_widget__mess-date">6.15/19.09.2018</span>
					</span>	
						qbbh bdbdbf fbfbbfb fbbbfbfbbbzcbbb b!!!! !!qbbhbdbd bffbfbbfbfbbbfbf bbbzcbbbb!!!!!!
						</li>
						<li class="support_widget__mess-item support_widget__mess-admin">
						<span class="support_widget__mess-info">
						<span class="support_widget__mess-name">Name</span>
						<span class="support_widget__mess-date">6.15/19.09.2018</span>
					</span>	
						qbbhbdbdbffbfb bfbfbbbfb fbbbzcbbbb!! !!!!qbbhbdbdbff bfbbfbfb bbfbfbbbzc bbb!!!!!!
						</li>
						<li class="support_widget__mess-item support_widget__mess-user">
						<span class="support_widget__mess-info">
						<span class="support_widget__mess-name">Name</span>
						<span class="support_widget__mess-date">6.15/19.09.2018</span>
					</span>	
						qbbhbdbdbffb fbbfbfbbbfbf bbbzcbbbb!!!!!!qbbhbdbd bffbfbbfbfbbbfb fbbbzcbbbb!!!!!!
						</li>
						<li class="support_widget__mess-item support_widget__mess-admin">
						<span class="support_widget__mess-info">
						<span class="support_widget__mess-name">Name</span>
						<span class="support_widget__mess-date">6.15/19.09.2018</span>
					</span>	
						qbbhbdbdbffbfbbfbfbbbfbfbbbzcbbbb!!!!!!qbbhbdbdbffbfbbfbfbbbfbfbbbzcbbbb!!!!!!
						</li>
						<li class="support_widget__mess-item support_widget__mess-user">
						<span class="support_widget__mess-info">
						<span class="support_widget__mess-name">Name</span>
						<span class="support_widget__mess-date">6.15/19.09.2018</span>
					</span>	
						qbbh bdbdbffb fbbfbfbbbfbfbbbz cbbbb!!!!!!qbbhbd bdbffbfbbfbfbbbfbf bbbzcbbbb!!!!!!
						</li>
						<li class="support_widget__mess-item support_widget__mess-admin">
						<span class="support_widget__mess-info">
						<span class="support_widget__mess-name">Name</span>
						<span class="support_widget__mess-date">6.15/19.09.2018</span>
					</span>	
						qbbhbdbdbff bfbbfbfbbbfbfb bbzcbbbb! !!!!!qbbhbd bdbffbfbbfbfbbbf bfbbbzcbbbb!!!!!!
						</li>
						<li class="support_widget__mess-item support_widget__mess-user">
						<span class="support_widget__mess-info">
							<span class="support_widget__mess-name">Name</span>
							<span class="support_widget__mess-date">6.15/19.09.2018</span>
						</span>	
						qb bhbd bdbff bfbbfbfb bfbfbbbzcbbbb!!! !!!qbbhbdbdb ffbfbbfb bbbfbfbbbzcbbbb!!!!!!qbb hbdbdbffbfbbfbfbbbfbfbbbzcbbbb!!!!!!
						</li>
					</ul>
				</div>
				<textarea class="support_widget__entry" rows="5" cols="39" name="text" placeholder="Введите сообщение"></textarea>
				<button type="button" id="support_widget__submit" class="support_widget__button">Отправить</button>
			</form>
		</div>`;
			document.body.insertBefore(this.widgetElement, document.body.nextSibling);

			
			this.created = true;
		}
	}

	Widget.show();

}


export default openWidjet;