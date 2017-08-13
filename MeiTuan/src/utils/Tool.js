/**
 * Created by LCN on 2017/8/10 0010.
 */

export function urlByAppendingParams(url: string, params: Object) {
    let result = url
    if (result.substr(result.length - 1) != '?') {
        result = result + `?`
    }

    for (let key in params) {
        let value = params[key]
        result += `${encodeURIComponent(key)}=${encodeURIComponent(value)}&`
    }

    result = result.substring(0, result.length - 1);
    return result;
}