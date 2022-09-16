// Implement pow(x, n), which calculates x raised to the power n (i.e., xn).

 /**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
const binaryPow = (num, power) => {
    if (num === 0) return 0;
    if (power === 0) return 1;
    if (power === 1) return num;
    
    const halfPower = Math.floor(power / 2);
    const halfRes = binaryPow(num, halfPower);
    const res = halfRes * halfRes;
    
    return power % 2 === 0 ? res : res * num;
}

const myPow = (x, n) => {
    const res = binaryPow(x, Math.abs(n));
    
    return n < 0 ? 1/res : res;
};