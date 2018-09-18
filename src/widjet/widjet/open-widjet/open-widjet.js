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
			this.widgetElement.classList.add('support_widget_container--down-right');
			this.widgetElement.innerHTML = `
			<div class="support_widget__body support_widget__blue">
			<div class="support_widget__header">
				<div class="support_widget__header-img"><img src="https://secure.gravatar.com/avatar/0b1605b84a7bf445ce2af7348089c70c?s=60&d=mm&r=g" /></div>
				<div class="support_widget__header-desc"><h4>${options.person}</h4></div>
			</div>
			<form class="support_widget__form">
				<div class="support_widget__messages">
					<ul class="support_widget__mess-list">
						<li class="support_widget__mess-item support_widget__mess-user">
						qbbhbd bdbffb fbbfbf bbbfbfbb bzcbbbb! !!!!! qbbhbd bdbffbfbbfbfbbbfbfbbbzcbbbb !!!!!!
						</li>
						<li class="support_widget__mess-item support_widget__mess-admin">
						qbbhbdbdbffbfbbfbfbbbfbfbbbzcbbbb!!!!!!qbbhbdbdbffbfbbfbfbbbfbfbbbzcbbbb!!!!!!qbbhbdbdbffbfbbfbfbbbfbfbbbzcbbbb!!!!!!
						</li>
						<li class="support_widget__mess-item support_widget__mess-user">
						qbbh bdbdbf fbfbbfb fbbbfbfbbbzcbbb b!!!! !!qbbhbdbd bffbfbbfbfbbbfbf bbbzcbbbb!!!!!!
						</li>
						<li class="support_widget__mess-item support_widget__mess-admin">
						qbbhbdbdbffbfb bfbfbbbfb fbbbzcbbbb!! !!!!qbbhbdbdbff bfbbfbfb bbfbfbbbzc bbb!!!!!!
						</li>
						<li class="support_widget__mess-item support_widget__mess-user">
						qbbhbdbdbffb fbbfbfbbbfbf bbbzcbbbb!!!!!!qbbhbdbd bffbfbbfbfbbbfb fbbbzcbbbb!!!!!!
						</li>
						<li class="support_widget__mess-item support_widget__mess-admin">
						qbbhbdbdbffbfbbfbfbbbfbfbbbzcbbbb!!!!!!qbbhbdbdbffbfbbfbfbbbfbfbbbzcbbbb!!!!!!
						</li>
						<li class="support_widget__mess-item support_widget__mess-user">
						qbbh bdbdbffb fbbfbfbbbfbfbbbz cbbbb!!!!!!qbbhbd bdbffbfbbfbfbbbfbf bbbzcbbbb!!!!!!
						</li>
						<li class="support_widget__mess-item support_widget__mess-admin">
						qbbhbdbdbff bfbbfbfbbbfbfb bbzcbbbb! !!!!!qbbhbd bdbffbfbbfbfbbbf bfbbbzcbbbb!!!!!!
						</li>
						<li class="support_widget__mess-item support_widget__mess-user">
						qb bhbd bdbff bfbbfbfb bfbfbbbzcbbbb!!! !!!qbbhbdbdb ffbfbbfb bbbfbfbbbzcbbbb!!!!!!qbb hbdbdbffbfbbfbfbbbfbfbbbzcbbbb!!!!!!
						</li>
					</ul>
				</div>
				<textarea class="support_widget__entry" rows="5" cols="39" name="text" placeholder="Введите сообщение"></textarea>
				<button type="button" id="support_widget__submit" class="support_widget__button">Отправить</button>
			</form>
		</div>`;
			document.body.insertBefore(this.widgetElement, document.body.nextSibling);
		/*	this.widgetElement.style.top =`${x}%`;
			this.widgetElement.style.left = `${y}%`; */
			
			this.created = true;
		}
	}

	Widget.show();

}


export default openWidjet;