lengthFromUnit = document.getElementById('length-from-unit');
lengthFromValue = document.getElementById('length-from-value');
lengthToUnit = document.getElementById('length-to-unit');
lengthToValue = document.getElementById('length-to-value');

weightFromUnit = document.getElementById('weight-from-unit');
weightFromValue = document.getElementById('weight-from-value');
weightToUnit = document.getElementById('weight-to-unit');
weightToValue = document.getElementById('weight-to-value');

temperatureFromUnit = document.getElementById('temperature-from-unit');
temperatureFromValue = document.getElementById('temperature-from-value');
temperatureToUnit = document.getElementById('temperature-to-unit');
temperatureToValue = document.getElementById('temperature-to-value');

function convertLength() {
	if (lengthFromUnit.value == 'mm') {
		if (lengthToUnit.value == 'mm') {
			lengthToValue.value = 'Lol';
		}
		if (lengthToUnit.value == 'cm') {
			lengthToValue.value = lengthFromValue.value / 10;
		}
		if (lengthToUnit.value == 'inch') {
			lengthToValue.value = lengthFromValue.value / 25.4;
		}
		if (lengthToUnit.value == 'foot') {
			lengthToValue.value = lengthFromValue.value / 305;
		}
		if (lengthToUnit.value == 'meter') {
			lengthToValue.value = lengthFromValue.value / 1000;
		}
		if (lengthToUnit.value == 'km') {
			lengthToValue.value = lengthFromValue.value / 1e+6;
		}
		if (lengthToUnit.value == 'mile') {
			lengthToValue.value = lengthFromValue.value / 1.609e+6;
		}
	}
	if (lengthFromUnit.value == 'cm') {
		if (lengthToUnit.value == 'mm') {
			lengthToValue.value = lengthFromValue.value * 10;
		}
		if (lengthToUnit.value == 'cm') {
			lengthToValue.value = 'Lol';
		}
		if (lengthToUnit.value == 'inch') {
			lengthToValue.value = lengthFromValue.value / 2.54;
		}
		if (lengthToUnit.value == 'foot') {
			lengthToValue.value = lengthFromValue.value / 30.48;
		}
		if (lengthToUnit.value == 'meter') {
			lengthToValue.value = lengthFromValue.value / 100;
		}
		if (lengthToUnit.value == 'km') {
			lengthToValue.value = lengthFromValue.value / 100000;
		}
		if (lengthToUnit.value == 'mile') {
			lengthToValue.value = lengthFromValue.value / 160934;
		}
	}
	if (lengthFromUnit.value == 'inch') {
		if (lengthToUnit.value == 'mm') {
			lengthToValue.value = lengthFromValue.value * 25.4;
		}
		if (lengthToUnit.value == 'cm') {
			lengthToValue.value = lengthFromValue.value * 2.54;
		}
		if (lengthToUnit.value == 'inch') {
			lengthToValue.value = 'Lol';
		}
		if (lengthToUnit.value == 'foot') {
			lengthToValue.value = lengthFromValue.value / 12;
		}
		if (lengthToUnit.value == 'meter') {
			lengthToValue.value = lengthFromValue.value / 39.37;
		}
		if (lengthToUnit.value == 'km') {
			lengthToValue.value = lengthFromValue.value / 39370;
		}
		if (lengthToUnit.value == 'mile') {
			lengthToValue.value = lengthFromValue.value / 63360;
		}
	}
	if (lengthFromUnit.value == 'foot') {
		if (lengthToUnit.value == 'mm') {
			lengthToValue.value = lengthFromValue.value * 305;
		}
		if (lengthToUnit.value == 'cm') {
			lengthToValue.value = lengthFromValue.value * 30.48;
		}
		if (lengthToUnit.value == 'inch') {
			lengthToValue.value = lengthFromValue.value * 12;
		}
		if (lengthToUnit.value == 'foot') {
			lengthToValue.value = 'Lol';
		}
		if (lengthToUnit.value == 'meter') {
			lengthToValue.value = lengthFromValue.value / 3.281;
		}
		if (lengthToUnit.value == 'km') {
			lengthToValue.value = lengthFromValue.value / 3281;
		}
		if (lengthToUnit.value == 'mile') {
			lengthToValue.value = lengthFromValue.value / 5280;
		}
	}
	if (lengthFromUnit.value == 'meter') {
		if (lengthToUnit.value == 'mm') {
			lengthToValue.value = lengthFromValue.value * 1000;
		}
		if (lengthToUnit.value == 'cm') {
			lengthToValue.value = lengthFromValue.value * 100;
		}
		if (lengthToUnit.value == 'inch') {
			lengthToValue.value = lengthFromValue.value * 39.37;
		}
		if (lengthToUnit.value == 'foot') {
			lengthToValue.value = lengthFromValue.value * 3.281;
		}
		if (lengthToUnit.value == 'meter') {
			lengthToValue.value = 'Lol';
		}
		if (lengthToUnit.value == 'km') {
			lengthToValue.value = lengthFromValue.value / 1000;
		}
		if (lengthToUnit.value == 'mile') {
			lengthToValue.value = lengthFromValue.value / 1609;
		}
	}
	if (lengthFromUnit.value == 'km') {
		if (lengthToUnit.value == 'mm') {
			lengthToValue.value = lengthFromValue.value * 1e+6;
		}
		if (lengthToUnit.value == 'cm') {
			lengthToValue.value = lengthFromValue.value * 100000;
		}
		if (lengthToUnit.value == 'inch') {
			lengthToValue.value = lengthFromValue.value * 39370;
		}
		if (lengthToUnit.value == 'foot') {
			lengthToValue.value = lengthFromValue.value * 3281;
		}
		if (lengthToUnit.value == 'meter') {
			lengthToValue.value = lengthFromValue.value * 1000;
		}
		if (lengthToUnit.value == 'km') {
			lengthToValue.value = 'Lol';
		}
		if (lengthToUnit.value == 'mile') {
			lengthToValue.value = lengthFromValue.value / 1.609;
		}
	}
}

function convertWeight() {
	if (weightFromUnit.value == 'grain') {
		if (weightToUnit.value == 'grain') {
			weightToValue.value = 'Lol';
		}
		if (weightToUnit.value == 'gram') {
			weightToValue.value = weightFromValue.value / 15.432;
		}
		if (weightToUnit.value == 'ounce') {
			weightToValue.value = weightFromValue.value / 438;
		}
		if (weightToUnit.value == 'pound') {
			weightToValue.value = weightFromValue.value / 7000;
		}
		if (weightToUnit.value == 'kg') {
			weightToValue.value = weightFromValue.value / 15432;
		}
		if (weightToUnit.value == 'stone') {
			weightToValue.value = weightFromValue.value / 98000;
		}
	}
	if (weightFromUnit.value == 'gram') {
		if (weightToUnit.value == 'grain') {
			weightToValue.value = weightFromValue.value * 15.432;
		}
		if (weightToUnit.value == 'gram') {
			weightToValue.value = 'Lol';
		}
		if (weightToUnit.value == 'ounce') {
			weightToValue.value = weightFromValue.value / 28.35;
		}
		if (weightToUnit.value == 'pound') {
			weightToValue.value = weightFromValue.value / 454;
		}
		if (weightToUnit.value == 'kg') {
			weightToValue.value = weightFromValue.value / 1000;
		}
		if (weightToUnit.value == 'stone') {
			weightToValue.value = weightFromValue.value / 6350;
		}
	}
	if (weightFromUnit.value == 'ounce') {
		if (weightToUnit.value == 'grain') {
			weightToValue.value = weightFromValue.value * 438;
		}
		if (weightToUnit.value == 'gram') {
			weightToValue.value = weightFromValue.value * 28.35;
		}
		if (weightToUnit.value == 'ounce') {
			weightToValue.value = 'Lol';
		}
		if (weightToUnit.value == 'pound') {
			lweightToValue.value = weightFromValue.value / 16;
		}
		if (weightToUnit.value == 'kg') {
			weightToValue.value = weightFromValue.value / 35.274;
		}
		if (weightToUnit.value == 'stone') {
			weightToValue.value = weightFromValue.value / 224;
		}
	}
	if (weightFromUnit.value == 'pound') {
		if (weightToUnit.value == 'grain') {
			weightToValue.value = weightFromValue.value * 7000;
		}
		if (weightToUnit.value == 'gram') {
			weightToValue.value = weightFromValue.value * 454;
		}
		if (weightToUnit.value == 'ounce') {
			weightToValue.value = weightFromValue.value * 16;
		}
		if (weightToUnit.value == 'pound') {
			weightToValue.value = 'Lol';
		}
		if (weightToUnit.value == 'kg') {
			weightToValue.value = weightFromValue.value / 2.205;
		}
		if (weightToUnit.value == 'stone') {
			weightToValue.value = weightFromValue.value / 14;
		}
	}
	if (weightFromUnit.value == 'kg') {
		if (weightToUnit.value == 'grain') {
			weightToValue.value = weightFromValue.value * 15432;
		}
		if (weightToUnit.value == 'gram') {
			weightToValue.value = weightFromValue.value * 1000;
		}
		if (weightToUnit.value == 'ounce') {
			weightToValue.value = weightFromValue.value * 35.274;
		}
		if (weightToUnit.value == 'pound') {
			weightToValue.value = weightFromValue.value * 2.205;
		}
		if (weightToUnit.value == 'kg') {
			weightToValue.value = 'Lol';
		}
		if (weightToUnit.value == 'stone') {
			weightToValue.value = weightFromValue.value / 6.35;
		}
	}
	if (weightFromUnit.value == 'stone') {
		if (weightToUnit.value == 'grain') {
			weightToValue.value = weightFromValue.value * 98000;
		}
		if (weightToUnit.value == 'gram') {
			weightToValue.value = weightFromValue.value * 6350;
		}
		if (weightToUnit.value == 'ounce') {
			weightToValue.value = weightFromValue.value * 224;
		}
		if (weightToUnit.value == 'pound') {
			weightToValue.value = weightFromValue.value * 14;
		}
		if (weightToUnit.value == 'kg') {
			weightToValue.value = weightFromValue.value * 6.35;
		}
		if (weightToUnit.value == 'stone') {
			weightToValue.value = 'Lol';
		}
	}
}

function convertTemperature() {
	if (temperatureFromUnit.value == 'centigrade') {
		if (temperatureToUnit.value == 'centigrade') {
			temperatureToValue.value = 'Lol';
		}
		if (temperatureToUnit.value == 'fahrenheit') {
			temperatureToValue.value = (temperatureFromValue.value * 9/5) + 32;
		}
		if (temperatureToUnit.value == 'kelvin') {
			temperatureToValue.value = temperatureFromValue.value + 273.15;
		}
		if (temperatureToUnit.value == 'rankine') {
			temperatureToValue.value = temperatureFromValue.value * 9/5 + 491.67;
		}
	}
	if (temperatureFromUnit.value == 'fahrenheit') {
		if (temperatureToUnit.value == 'centigrade') {
			temperatureToValue.value = (temperatureFromValue.value - 32) * 5/9;
		}
		if (temperatureToUnit.value == 'fahrenheit') {
			temperatureToValue.value = 'Lol';
		}
		if (temperatureToUnit.value == 'kelvin') {
			temperatureToValue.value = (temperatureFromValue.value - 32) * 5/9 + 273.15;
		}
		if (temperatureToUnit.value == 'rankine') {
			temperatureToValue.value = temperatureFromValue.value + 459.67;
		}
	}
	if (temperatureFromUnit.value == 'kelvin') {
		if (temperatureToUnit.value == 'centigrade') {
			temperatureToValue.value = temperatureFromValue.value - 273.15;
		}
		if (temperatureToUnit.value == 'fahrenheit') {
			temperatureToValue.value = (temperatureFromValue.value - 273.15) * 9/5 + 32;
		}
		if (temperatureToUnit.value == 'kelvin') {
			temperatureToValue.value = 'Lol';
		}
		if (temperatureToUnit.value == 'rankine') {
			temperatureToValue.value = temperatureFromValue.value * 9/5;
		}
	}
	if (temperatureFromUnit.value == 'rankine') {
		if (temperatureToUnit.value == 'centigrade') {
			temperatureToValue.value = (temperatureFromValue.value - 491.67) * 5/9;
		}
		if (temperatureToUnit.value == 'fahrenheit') {
			temperatureToValue.value = temperatureFromValue.value - 459.67;
		}
		if (temperatureToUnit.value == 'kelvin') {
			temperatureToValue.value = temperatureFromValue.value * 5/9;
		}
		if (temperatureToUnit.value == 'rankine') {
			temperatureToValue.value = 'Lol';
		}
	}
}
