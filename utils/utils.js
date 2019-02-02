
module.exports = {
    isEmpty: function(obj){
        if (typeof obj === 'undefined' || obj == null || obj === '' ){
            return true;
        } else {
            return false;
        }
    },

    isInStrings: function(str){
        const strings = ['C', 'PF', 'SF', 'PG', 'SG'];
        for (var i = 0; i < 5; i++) {
            if (strings[i] === str)
                return true;
        }
        return false;
    },

    isNumber: function(number){
        const re = /^[1-9]+$/;
        return re.test(number);
    }
};