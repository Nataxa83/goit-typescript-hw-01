// Типізуйте функцію isWeekend яка приймає день тижня з enumDayOfWeek і
// повертає boolean значення, що вказує, чи це день робочий чи вихідний.

enum DayOfWeek {
     Monday,
     Tuesday,
     Wednesday,
     Thursday,
     Friday,
     Saturday,
     Sunday
    }
    
    
    const isWeekend = (day : DayOfWeek) => {
        if (day === DayOfWeek.Saturday || day === DayOfWeek.Sunday) {
            return true;
        }
        return false;
    }
    