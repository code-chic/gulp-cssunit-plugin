const rem = require("../lib/rem");
const code = `body { font-size: 12px; }`;

test("`css` px to rem", () => {
  expect(
    rem(code,{
      htmlSize: 37.5,
    })
  ).toBe(
    `body{font-size:0.32rem}`
  );
});
