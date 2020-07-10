(function(global) {
	let EasyTipCalc = function(config) {
		return new EasyTipCalc.init(config);
	};

	EasyTipCalc.prototype = {
		calc: function() {
			let total = this.totalBillSum * this.levelOfServicePercent / this.peopleCount;
			total = Math.round(total * 100) / 100;
			return total.toFixed(2);
		},
		setTotalBillSum: function(totalBillSum) {
			if (typeof totalBillSum === 'number') {
				throw 'total sum must be number';
			}

			if (!totalBillSum) {
				throw 'total sum is invalid. Must be of type number';
			}

			if (totalBillSum < 0) {
				totalBillSum = 1;
			}

			return totalBillSum;
		},
		setLevelOfServicePercent: function(levelOfServicePercent) {
			if (typeof levelOfServicePercent === 'number') {
				throw 'value of level of service must be number';
			}

			if (!levelOfServicePercent) {
				throw 'value of level of service is invalid. Must be of type number';
			}
			return levelOfServicePercent / 100;
		},

		setPeopleCount: function(peopleCount) {
			if (typeof peopleCount === 'number') {
				throw 'people count must be number';
			}

			if (!peopleCount) {
				throw 'people count is invalid. Must be of type number';
			}

			if (peopleCount < 1) {
				peopleCount = 1;
			}

			return peopleCount;
		}
	};

	EasyTipCalc.init = function(config) {
		let that = this;
		that.totalBillSum = that.setTotalBillSum(config.totalBillSum);
		that.levelOfServicePercent = that.setLevelOfServicePercent(config.levelOfServicePercent);
		that.peopleCount = that.setPeopleCount(config.peopleCount);
	};

	EasyTipCalc.init.prototype = EasyTipCalc.prototype;
	global.EasyTipCalc = global.etc = $etc = EasyTipCalc;
})(window);
