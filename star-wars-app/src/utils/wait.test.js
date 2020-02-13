import wait from "./wait";

test("for promise to resolve", async () => {
  const results = await wait(2);
  expect(results).toBe("success");
});