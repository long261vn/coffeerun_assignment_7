(function () {
    'use strict';
    var App = window.App || {};
    var Validation = {
        isCompanyEmail: function (email) {
            return /.+@bignerdranch\.com$/.test(email);
        },

        // Silver Challenge: Custom Validation for Decaf
        // Add another function to your Validation module. It should accept two arguments: a string and an
        // integer. If the string contains the word “decaf” and the integer is greater than 20, the function should return false.
        // Add listeners for the coffee order text field and for the caffeine strength slider. Trigger the custom
        // validation for whichever field is currently being edited and caused the validation failure.
        isDecaf: function(coffee, strength) {
            if (/decaf/.test(coffee) && strength > 20) {
                return false;
            }
            return true;
        }
    };

    App.Validation = Validation;
    window.App = App;
})(window);
