const privateMakeUnique = () => {
  let count = 0;
  return () => {
    count += 1;
    return count;
  };
};
export const makeUnique = privateMakeUnique();

const privateTimeFlies = () => {
  const SECOND_MILLI = 1000;
  const MINUTE_MILLI = SECOND_MILLI * 60;
  const HOUR_MILLI = MINUTE_MILLI * 60;
  const DAY_MILLI = HOUR_MILLI * 24;
  const MONTH_MILLI = DAY_MILLI * 30;
  const YEAD_MILLI = MONTH_MILLI * 12;

  return (timeArg) => {
    const now = new Date();
    const time = new Date(timeArg);
    const delta = now - time;

    switch (true) {
      case delta < MINUTE_MILLI:
        return '刚刚';
      case delta >= MINUTE_MILLI && delta <= HOUR_MILLI:
        return `${Math.floor(delta / MINUTE_MILLI)} 分钟前`;
      case delta >= HOUR_MILLI && delta <= DAY_MILLI:
        return `${Math.floor(delta / HOUR_MILLI)} 小时前`;
      case delta >= DAY_MILLI && delta <= MONTH_MILLI:
        return `${Math.floor(delta / DAY_MILLI)} 天前`;
      case delta >= MONTH_MILLI && delta <= YEAD_MILLI:
        return `${Math.floor(delta / MONTH_MILLI)} 月前`;
      case delta >= YEAD_MILLI:
        return `${Math.floor(delta / YEAD_MILLI)} 年前`;
      default:
        return NaN;
    }
  };
};
export const timeFlies = privateTimeFlies();

export const range = (startArg, endArg) => {
  const result = [];
  let start = startArg;
  let end = endArg;
  if (end == null) {
    end = start;
    start = 0;
  }
  for (;start < end; start += 1) {
    result.push(start);
  }
  return result;
};

export const type = (arg) => {
  const typeList = ['Boolean', 'Number', 'String', 'Function', 'Array', 'Date', 'RegExp', 'Object', 'Error'];
  const class2type = {};
  const toString = class2type.toString;
  typeList.forEach((item) => {
    class2type[`[object ${item}]`] = item.toLowerCase();
  });
  return class2type[toString.call(arg)];
};
