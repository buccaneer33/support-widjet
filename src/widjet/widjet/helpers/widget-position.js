class WidgetPosition {

	constructor() {
     const TopPosition = {x:".top = '5%';", y:".right = '40%';"};
     const LeftPosition = `this.widgetElement.style.top = '40%';this.widgetElement.style.left = '5%';`;
     const RightPosition = `this.widgetElement.style.top = '40%';this.widgetElement.style.right = '5%';`;
     const DownLeftPosition = `this.widgetElement.style.bottom = '5%';this.widgetElement.style.left = '5%';`;
     const DownRightPosition = `this.widgetElement.style.bottom = '5%';this.widgetElement.style.right = '5%';`;

		this.positionTypes = {
			'top' : TopPosition,
			'left' : LeftPosition,
            'right': RightPosition,
            'down-left': DownLeftPosition,
            'down-right': DownRightPosition
};
}

	returnPosByType(positionType) {
		if(this.positionTypes.hasOwnProperty( positionType )) {
			return this.positionTypes[positionType];
}
//  обработчик ошибки
    return DownRightPosition;
	}

}
export default WidgetPosition;