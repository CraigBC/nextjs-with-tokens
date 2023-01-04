const data = [
  {
    name: "leading-none",
    value: "1",
  },
  {
    name: "leading-tight",
    value: "1.25",
  },
  {
    name: "leading-snug",
    value: "1.375",
  },
  {
    name: "leading-normal",
    value: "1.5",
  },
  {
    name: "leading-relaxed",
    value: "1.625",
  },
  {
    name: "leading-loose",
    value: "2",
  },
];

function objCreate() {
  return data.map(
    (item) =>
      `"${item.name}": {"value": "${item.value}", "type": "paragraphSpacing"}`
  );
}

console.log(`{
  "paragraphSpacing": {
${objCreate()}
  }
}`);
