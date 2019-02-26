module.exports = function autolink(state, silent) {
    var tail, linkMatch, emailMatch, url, fullUrl, token,
        pos = state.pos;

    if (state.src.charCodeAt(pos) !== 0x3C /* < */ ) {
        return false;
    }

    tail = state.src.slice(pos);

    if (tail.indexOf('>') < 0) {
        return false;
    }
}
