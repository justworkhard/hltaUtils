/**
 * 
 * @param number 精度计算
 */
export function menoyAcount(number: number) {
    return parseInt(number.toFixed(0));
}

/**
 * 验证手机号是否合理
 * @param number 
 */
export function checkPhone(phone: string) {
    if (!(/^[1][3,4,5,7,8,6][0-9]{9}$/.test(phone))) {
        return false;
    }
    return true;
}

/**
 * 获取url参数
 * @param variable 获取的参数名
 */
export function getQueryVariable(variable: string) {
    const query = window.location.search.substring(1);
    const vars = query.split('&');
    for (let i = 0; i < vars.length; i++) {
        const pair = vars[i].split('=');
        if (pair[0] == variable) { return pair[1]; }
    }
    return (false);
}

/**
 * 检查邮箱是否合理
 * @param string 
 */
export function checkEmail(str: string) {
    const re = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
    if (re.test(str)) {
        return true;
    }
    return false;

}

/**
 * 计算倒计时
 * @param string 
 */
export function getAcountTime(str: string) {
    // let setTime = new Date(str)
    str = str || '';
    const setTime = new Date(str.replace(/\-/g, '/').substr(0, 19));
    const nowTime = new Date();

    const restTime = setTime.getTime() - nowTime.getTime();
    if (restTime <= 0) {
        return {
            day: '0',
            hour: '0',
            minu: '0',
        };
    }
    const day = parseInt(String(restTime / (60 * 60 * 1000 * 24)));
    const hour = parseInt(String(restTime / (60 * 60 * 1000) % 24));
    const minu = parseInt(String(restTime / (60 * 1000) % 60));
    const sec = parseInt(String(restTime / 1000 % 60));
    return {
        day: day.toString(),
        hour: hour.toString(),
        minu: minu.toString(),
    };
}

// 两个浮点数求和
export function accAdd(num1: number, num2: number) {
    var r1, r2, m;
    try {
        r1 = num1.toString().split('.')[1].length;
    } catch (e) {
        r1 = 0;
    }
    try {
        r2 = num2.toString().split(".")[1].length;
    } catch (e) {
        r2 = 0;
    }
    m = Math.pow(10, Math.max(r1, r2));
    // return (num1*m+num2*m)/m;
    return Math.round(num1 * m + num2 * m) / m;
}

// 两个浮点数相减
export function accSub(num1: number, num2: number) {
    var r1, r2, m, n;
    try {
        r1 = num1.toString().split('.')[1].length;
    } catch (e) {
        r1 = 0;
    }
    try {
        r2 = num2.toString().split(".")[1].length;
    } catch (e) {
        r2 = 0;
    }
    m = Math.pow(10, Math.max(r1, r2));
    n = (r1 >= r2) ? r1 : r2;
    return (Math.round(num1 * m - num2 * m) / m).toFixed(n);
}
// 两数相除
export function accDiv(num1: number, num2: number) {
    var t1, t2, r1, r2;
    try {
        t1 = num1.toString().split('.')[1].length;
    } catch (e) {
        t1 = 0;
    }
    try {
        t2 = num2.toString().split(".")[1].length;
    } catch (e) {
        t2 = 0;
    }
    r1 = Number(num1.toString().replace(".", ""));
    r2 = Number(num2.toString().replace(".", ""));
    return (r1 / r2) * Math.pow(10, t2 - t1);
}
// 两数相乘
export function accMul(num1: number, num2: number) {
    var m = 0, s1 = num1.toString(), s2 = num2.toString();
    try { m += s1.split(".")[1].length } catch (e) { };
    try { m += s2.split(".")[1].length } catch (e) { };
    return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m);
}