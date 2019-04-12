function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
}

function onDeviceReady() {
	navigator.notification.beep(1);
}

function deviceInfo() {

	info =  'Hi, I am your smartphone :-)' + '\n' +
			'=====' + '\n' +
			'Device Name    : '     + device.name     + '\n' + 
			'Device Cordova : '  + device.cordova + '\n' + 
			'Device Platform: ' + device.platform + '\n' + 
			'Device UUID    : '     + device.uuid     + '\n' + 
			'Device Model   : '    + device.model     + '\n' + 
			'Device Version : '  + device.version  + '\n';

	navigator.notification.alert(info);
	
}

function personalData() {
	info =  'Hi, I am not your smartphone :-)' + '\n' +
			'=====' + '\n' +
			'Name and surname: ' + 'Joanna Szymanek'   + '\n' + 
			'Email: ' + 'jakiś@email.com' + '\n' +
			'Website: ' + '----' + '\n' +
			'Dean\'s group: ' + '1212' + '\n' +
			'Field of study' + 'Computer science' + '\n';

	navigator.notification.alert(info);

}
