/**
 * Created with JetBrains WebStorm.
 * User: swarm
 * Date: 22.05.12
 * Time: 19:09
 * To change this template use File | Settings | File Templates.
 */
exports.random = function getRandom(min, max) {
    if(min > max) {
        return -1;
    }

    if(min === max) {
        return min;
    }

    var r;

    do {
        r = Math.random();
    }
    while(r == 1.0);

    return min + parseInt(r * (max-min+1));
}

exports.uuid = function uuid()
{
    var chars = '0123456789abcdef'.split('');

    var uuid = [], rnd = Math.random, r;
    uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
    uuid[14] = '4'; // version 4

    for (var i = 0; i < 36; i++)
    {
        if (!uuid[i])
        {
            r = 0 | rnd()*16;

            uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r & 0xf];
        }
    }

    return uuid.join('');
}