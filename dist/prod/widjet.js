this.widgetElement = document.createElement('div');
			this.widgetElement.setAttribute('class', 'support_widget'); /* главный блок */
			this.widgetElement.classList.add('support_widget_container--down-left'); /* в него позиционирование и закрытие */
			this.widgetElement.innerHTML = `
			<div class="support_widget__body support_widget__orange"> /* а в боди цветовая схема */
			<button type="button" id="support_widget__close" class="support_widget__close"></button>
			<div class="support_widget__header">
				<div class="support_widget__header-img">
					<img src="http://promopost.net/img/Content-UI-img-icons-png-cs.png" />
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
		</div>`