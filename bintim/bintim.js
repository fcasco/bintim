/* BinTim: binary clock
 */
/*global window, document*/
/*jslint unparam: true*/

(function (BinTim) {
    "use strict";
    window.BinTim = BinTim;

    var clock_container = document.getElementById('bintim_clock');

    BinTim.version = '0.1.0';

    BinTim.stop = function stop() {
        window.clearInterval(BinTim.inverval_id);
    };

    function update_bits(bits_container, bits) {
        var bits_count = bits_container.getElementsByClassName('bit').length,
            bit, i;

        for (i = 0; i <= bits_count; i++) {
            bit = bits_container.getElementsByClassName('bit_' + i);

            if (bit.length > 0) {
                bit = bit[0];
            } else {
                console.log('missing bit ' + i + ' element');
                return;
            }

            if (bits[i] === '1') {
                bit.className = bit.className.replace(/\boff\b/, 'on');
            } else {
                bit.className = bit.className.replace(/\bon\b/, 'off');
            }
        }
    }

    function update_hours(hour_bits) {
        var hours_container = clock_container.getElementsByClassName('hours');

        if (hours_container.length > 0) {
            update_bits(hours_container[0], hour_bits);
        } else {
            console.log('missing hours element');
        }
    }

    function update_minutes(minute_bits) {
        var minutes_container = clock_container.getElementsByClassName('minutes');

        if (minutes_container.length > 0) {
            update_bits(minutes_container[0], minute_bits);
        } else {
            console.log('missing minutes element');
        }
    }

    function update_seconds(second_bits) {
        var seconds_container = clock_container.getElementsByClassName('seconds');

        if (seconds_container.length > 0) {
            update_bits(seconds_container[0], second_bits);
        } else {
            console.log('missing seconds element');
        }
    }

    function update_clock() {
        var now = new Date(),
            hour = now.getHours().toString(2),
            minute = now.getMinutes().toString(2),
            second = now.getSeconds().toString(2),
            hour_bits = ('00000' + hour).substring(hour.length),
            minute_bits = ('000000' + minute).substring(minute.length),
            second_bits = ('000000' + second).substring(second.length);

        update_hours(hour_bits);
        update_minutes(minute_bits);
        update_seconds(second_bits);
    }

    BinTim.start = function start() {
        BinTim.inverval_id = window.setInterval(update_clock, 100);
    };

    Array.prototype.map.call(clock_container.getElementsByClassName('start'),
        function (elem) {
            elem.addEventListener('click', BinTim.start);
        }
    );

    Array.prototype.map.call(clock_container.getElementsByClassName('stop'),
        function (elem) {
            elem.addEventListener('click', BinTim.stop);
        }
    );

    // BinTim.start();

}(window.BinTim || {}));
