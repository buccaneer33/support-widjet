class WidgetPosition {

	constructor() {
     const TopPosition = {x:"5", y:"40"};
     const LeftPosition = {x:"20", y:"5"};
     const RightPosition = {x:"20", y:"74"};
     const DownLeftPosition = {x:"40", y:"5"};
     const DownRightPosition = {x:"40", y:"74"};

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