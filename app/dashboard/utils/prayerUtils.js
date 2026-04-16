export function getNextPrayer(prayerTimes) {
    if (!prayerTimes || prayerTimes.length === 0) return null;

    const now = new Date();
    const currentMinutes = now.getHours() * 60 + now.getMinutes();

    let nextPrayer = null;
    let minDiff = Infinity;

    for (const prayer of prayerTimes) {
        // Parse time like "01:00 PM"
        const timeStr = prayer.iqamah || prayer.adhan;
        if (!timeStr) continue;

        const timeMatch = timeStr.match(/(\d+):(\d+)\s+(AM|PM)/i);
        if (timeMatch) {
            let hours = parseInt(timeMatch[1]);
            const minutes = parseInt(timeMatch[2]);
            const modifier = timeMatch[3].toUpperCase();

            if (modifier === 'PM' && hours < 12) {
                hours += 12;
            } else if (modifier === 'AM' && hours === 12) {
                hours = 0;
            }

            const prayerMinutes = hours * 60 + minutes;
            let diff = prayerMinutes - currentMinutes;

            // If diff is negative, it means the prayer has passed today, check for tomorrow
            if (diff < 0) {
                diff += 24 * 60;
            }

            if (diff >= 0 && diff < minDiff) {
                minDiff = diff;
                nextPrayer = { ...prayer, diffMinutes: diff };
            }
        }
    }

    if (!nextPrayer) {
        nextPrayer = { ...prayerTimes[0], diffMinutes: 0 };
    }

    return nextPrayer;
}

export function formatTimeDiff(diffMinutes) {
    if (diffMinutes < 0) return "Started";
    const hours = Math.floor(diffMinutes / 60);
    const mins = diffMinutes % 60;
    if (hours > 0) {
        return `Iqamah in ${hours} hour${hours > 1 ? 's' : ''} ${mins} minute${mins !== 1 ? 's' : ''}`;
    }
    return `Iqamah in ${mins} minute${mins !== 1 ? 's' : ''}`;
}

export function getCurrentDateFormatted() {
    const date = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}
