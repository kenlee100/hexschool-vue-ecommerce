export function currency(num) {
  const n = parseInt(num, 10);
  return `${n
    .toFixed(0)
    .replace(/./g, (c, i, a) =>
      i && c !== "." && (a.length - i) % 3 === 0
        ? `, ${c}`.replace(/\s/g, "")
        : c
    )}`;
}

export function date(time) {
  if (!time) return;
  const localDate = new Date(time * 1000);
  return localDate.toLocaleDateString();
}

export function ddmmyyyy(time) {
  if (!time) return;
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const today = new Date(time * 1000);
  const yyyy = today.getFullYear();
  let mm = today.getMonth() + 1;
  const mmName = monthNames[mm - 1].slice(0, 3);
  let dd = today.getDate();
  // if (dd < 10) dd = `0${dd}`;
  // // if (mm < 10) mm = `0${mm}`;
  return `${dd}, ${mmName} ${yyyy}`;
}
