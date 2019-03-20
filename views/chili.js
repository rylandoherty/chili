    
   angular.module('userService', [])
			.service('userData', function () {
	var user = "";
    return {getProperty: function () {
                return property;
            },
	setProperty: function(value) {
                property = value;
            }
    }
    });