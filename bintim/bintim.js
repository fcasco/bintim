/* BinTim: binary clock
 */
/*global window, document*/
/*jslint unparam: true*/

(function (BinTim) {
    "use strict";
    window.BinTim = BinTim;

    BinTim.version = '0.1.0';

    function update_clock() {
        var now = new Date(),
            hour = now.getHours().toString(2),
            minute = now.getMinutes().toString(2),
            second = now.getSeconds().toString(2),
            hour_bits = ('00000' + hour).substring(hour.length),
            minute_bits = ('000000' + minute).substring(minute.length),
            second_bits = ('000000' + second).substring(second.length),
            i;

        for (i = 0; i <= 4; i++) {
            if (hour_bits[i] === '1') {
                document.getElementById('hours_b' + i).className = 'on';
            } else {
                document.getElementById('hours_b' + i).className = 'off';
            }
        }

        for (i = 0; i <= 5; i++) {
            if (minute_bits[i] === '1') {
                document.getElementById('minutes_b' + i).className = 'on';
            } else {
                document.getElementById('minutes_b' + i).className = 'off';
            }
        }

        for (i = 0; i <= 5; i++) {
            if (second_bits[i] === '1') {
                document.getElementById('seconds_b' + i).className = 'on';
            } else {
                document.getElementById('seconds_b' + i).className = 'off';
            }
        }
    }

    BinTim.inverval_id = window.setInterval(update_clock, 100);

}(window.BinTim || {}));
