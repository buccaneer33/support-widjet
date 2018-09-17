"use strict";
import View from '../view/view'
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
	
	
	let pos = new WidgetPosition();
	let posSchema = pos.returnPosByType("top");
	let x = JSON.stringify(posSchema);

	console.log('x ' + x); 

	var Widget = {
		created: false,
		widgetElement: null,
		show: function() {
			if (this.created)
				return;
			this.widgetElement = document.createElement('div');
			this.widgetElement.setAttribute('id', 'widget_container');
			this.widgetElement.innerHTML = `
			<div class="widget_container__body">
			<div class="widget_container__header">
				<div class="widget_container__header-img"><img src="https://secure.gravatar.com/avatar/0b1605b84a7bf445ce2af7348089c70c?s=60&d=mm&r=g" /></div>
				<div class="widget_container__header-desc"><h4>${options.person}</h4><h5>${options.personAtr}</h5></div>
			</div>
			<form class="widget_container__form">
				<div class="widget_container__messages"></div>
				<textarea rows="5" cols="30" name="text" placeholder="Введите сообщение"></textarea>
				<button type="button" id="widget_container__clear" class="widget_container__button">Отправить</button>
				<button type="button" id="widget_container__submit" class="widget_container__button">Отправить</button>
			</form>
		</div>`;
			document.body.insertBefore(this.widgetElement, document.body.nextSibling);
			posSchema;	

			
		/*	this.widgetElement.style.top = '50%';
			this.widgetElement.style.right = '5%'; */
			
			this.created = true;
		}
	}

	Widget.show();

}


export default openWidjet;