const stringLenIsGood = (str, maxLen) => str.length <= maxLen;
stringLenIsGood('1234567890', 5);


const isPalindrom = (string) => {
  const normalStr = string.replaceAll(' ', '').toLowerCase();
  let reversedStr = '';

  for (let i = normalStr.length - 1; i >= 0; i--) {
    reversedStr += normalStr[i];
  }

  return (reversedStr === normalStr);
};
isPalindrom('довод');

const getNumbers = (string) => {
  string = string.toString();
  let numbers = '';
  for (let i = 0; i < string.length; i++) {
    if (!Number.isNaN(parseInt(string[i], 10))) {
      numbers += string[i];
    }
  }

  return (parseInt(numbers, 10));
};
getNumbers(1.5);

const timeIsGood = (start, end, meeting, time) => {
  const startTimes = start.split(':').map(Number);
  const endTimes = end.split(':').map(Number);
  const meetingTimes = meeting.split(':').map(Number);
  meetingTimes[0] += Math.trunc(time / 60);
  meetingTimes[1] += time % 60;
  if (start <= meeting || end >= meeting) {
    if (meetingTimes[0] <= endTimes[0] && meetingTimes[1] <= endTimes[1] && meetingTimes[0] >= startTimes[0] && meetingTimes[1] >= startTimes[1]) {
      return true;
    }
  }
  return false;
};

timeIsGood('08:00', '17:30', '14:00', 90); // true
timeIsGood('8:0', '10:0', '8:0', 120);     // true
timeIsGood('08:00', '14:30', '14:00', 90); // false
timeIsGood('14:00', '17:30', '08:0', 90);  // false
timeIsGood('8:00', '17:30', '08:00', 900); // false
