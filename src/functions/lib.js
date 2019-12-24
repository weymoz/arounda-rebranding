const composeDate = date => {
  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
  let d = new Date(date);
  return `${d.getDay()} ${monthNames[d.getMonth()]}, ${d.getFullYear()}`
}

export { composeDate }