class WidgetPosition {

	constructor() {
     const TopPosition = {x:"30", y:"50"};
     const LeftPosition = {x:"50", y:"15"};
     const RightPosition = {x:"50", y:"85"};
     const DownLeftPosition = {x:"70", y:"15"};
     const DownRightPosition = {x:"70", y:"85"};

		this.positionTypes = {
			'top' : TopPosition,
			'left' : LeftPosition,
            'right': RightPosition,
            'down-left': DownLeftPosition,
            'down-right': DownRightPosition
};
}

	returnPosByType(positionType) {
        console.log('positionType ' + positionType);
		if(this.positionTypes.hasOwnProperty( positionType )) {
			return this.positionTypes[positionType];
}
//  обработчик ошибки
    return DownRightPosition;
	}

}
export default WidgetPosition;