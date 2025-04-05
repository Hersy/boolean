import t from "tap";

t.test("Boolean Value Conversion Test", async (test) => {
  const { boolean } = await import("../lib/index");

  // Testing `true` equivalent values
  test.equal(boolean(true), true);
  test.equal(boolean(1), true);
  test.equal(boolean("true"), true);
  test.equal(boolean("TRUE"), true);
  test.equal(boolean("t"), true);
  test.equal(boolean("T"), true);
  test.equal(boolean("yes"), true);
  test.equal(boolean("YES"), true);
  test.equal(boolean("y"), true);
  test.equal(boolean("Y"), true);
  test.equal(boolean("on"), true);
  test.equal(boolean("ON"), true);
  test.equal(boolean("1"), true);

  // Testing `false` equivalent values
  test.equal(boolean(undefined), false);
  test.equal(boolean(null), false);
  test.equal(boolean(false), false);
  test.equal(boolean(0), false);
  test.equal(boolean("false"), false);
  test.equal(boolean("FALSE"), false);
  test.equal(boolean("f"), false);
  test.equal(boolean("F"), false);
  test.equal(boolean("no"), false);
  test.equal(boolean("NO"), false);
  test.equal(boolean("n"), false);
  test.equal(boolean("N"), false);
  test.equal(boolean("off"), false);
  test.equal(boolean("OFF"), false);
  test.equal(boolean("0"), false);

  // Testing node wrapped `true` equivalent values
  test.equal(boolean(Boolean(true)), true);
  test.equal(boolean(Number(1)), true);
  test.equal(boolean(String("true")), true);
  test.equal(boolean(String("TRUE")), true);
  test.equal(boolean(String("t")), true);
  test.equal(boolean(String("T")), true);
  test.equal(boolean(String("yes")), true);
  test.equal(boolean(String("YES")), true);
  test.equal(boolean(String("y")), true);
  test.equal(boolean(String("Y")), true);
  test.equal(boolean(String("on")), true);
  test.equal(boolean(String("ON")), true);
  test.equal(boolean(String("1")), true);

  // Testing node wrapped `false` equivalent values
  test.equal(boolean(Boolean(false)), false);
  test.equal(boolean(Number(0)), false);
  test.equal(boolean(String("false")), false);
  test.equal(boolean(String("FALSE")), false);
  test.equal(boolean(String("f")), false);
  test.equal(boolean(String("F")), false);
  test.equal(boolean(String("no")), false);
  test.equal(boolean(String("NO")), false);
  test.equal(boolean(String("n")), false);
  test.equal(boolean(String("N")), false);
  test.equal(boolean(String("off")), false);
  test.equal(boolean(String("OFF")), false);
  test.equal(boolean(String("0")), false);

  test.end();
});
