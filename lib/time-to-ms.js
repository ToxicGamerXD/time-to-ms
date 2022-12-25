/**
 * 
 * ```javascript
 * // Convert Time to Milliseconds
 * console.log(time_to_ms({milliseconds: 1000}))
 * ```
 */
module.exports = function (options = {milliseconds, seconds, minutes, hours, days, weeks, months, years} = {milliseconds: 0, seconds: 0, minutes: 0, hours: 0, days: 0, weeks: 0, months: 0, years: 0}) {
    if(options.years == undefined) options.years = 0
    if(options.months == undefined) options.months = 0
    if(options.weeks == undefined) options.weeks = 0
    if(options.days == undefined) options.days = 0
    if(options.hours == undefined) options.hours = 0
    if(options.minutes == undefined) options.minutes = 0
    if(options.seconds == undefined) options.seconds = 0
    if(options.milliseconds == undefined) options.milliseconds = 0

    let ms = new Array()
    ms.push(
        options.years * 31536000000,
        options.months * 2628000000,
        options.weeks * 604800000,
        options.days * 86400000,
        options.hours * 3600000,
        options.minutes * 60000,
        options.seconds * 1000,
        options.milliseconds
    )

    let ms_outcome = 0
    for(i = 0; i < ms.length; i++) {
        ms_outcome += parseInt(ms[i])
    }

    return ms_outcome
}