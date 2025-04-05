import t from "tap";

t.test("Boolean Value Recognision Test", async (test) => {
  const { isBooleanable } = await import("../lib/index");

  // Testing values considered as boolean
  test.equal(isBooleanable(true), true);
  test.equal(isBooleanable(false), true);
  test.equal(isBooleanable(1), true);
  test.equal(isBooleanable(0), true);
  test.equal(isBooleanable("true"), true);
  test.equal(isBooleanable("TRUE"), true);
  test.equal(isBooleanable("false"), true);
  test.equal(isBooleanable("FALSE"), true);
  test.equal(isBooleanable("t"), true);
  test.equal(isBooleanable("T"), true);
  test.equal(isBooleanable("f"), true);
  test.equal(isBooleanable("F"), true);
  test.equal(isBooleanable("yes"), true);
  test.equal(isBooleanable("YES"), true);
  test.equal(isBooleanable("no"), true);
  test.equal(isBooleanable("NO"), true);
  test.equal(isBooleanable("y"), true);
  test.equal(isBooleanable("Y"), true);
  test.equal(isBooleanable("n"), true);
  test.equal(isBooleanable("N"), true);
  test.equal(isBooleanable("on"), true);
  test.equal(isBooleanable("ON"), true);
  test.equal(isBooleanable("off"), true);
  test.equal(isBooleanable("OFF"), true);
  test.equal(isBooleanable("1"), true);
  test.equal(isBooleanable("0"), true);

  // Testing values not considered as boolean
  test.equal(isBooleanable(undefined), false);
  test.equal(isBooleanable(null), false);
  test.equal(isBooleanable([]), false);
  test.equal(isBooleanable(2), false);
  test.equal(isBooleanable(3), false);
  test.equal(isBooleanable("legit"), false);
  test.equal(isBooleanable("LEGIT"), false);
  test.equal(isBooleanable("untrue"), false);
  test.equal(isBooleanable("UNTRUE"), false);
  test.equal(isBooleanable("l"), false);
  test.equal(isBooleanable("L"), false);
  test.equal(isBooleanable("u"), false);
  test.equal(isBooleanable("U"), false);
  test.equal(isBooleanable("hai"), false);
  test.equal(isBooleanable("HAI"), false);
  test.equal(isBooleanable("ia"), false);
  test.equal(isBooleanable("IA"), false);
  test.equal(isBooleanable("h"), false);
  test.equal(isBooleanable("H"), false);
  test.equal(isBooleanable("i"), false);
  test.equal(isBooleanable("I"), false);
  test.equal(isBooleanable("up"), false);
  test.equal(isBooleanable("UP"), false);
  test.equal(isBooleanable("down"), false);
  test.equal(isBooleanable("DOWN"), false);
  test.equal(isBooleanable("2"), false);
  test.equal(isBooleanable("3"), false);

  // Testing node wrapped values considered as boolean
  test.equal(isBooleanable(Boolean(true)), true);
  test.equal(isBooleanable(Boolean(false)), true);
  test.equal(isBooleanable(Number(1)), true);
  test.equal(isBooleanable(Number(0)), true);
  test.equal(isBooleanable(String("true")), true);
  test.equal(isBooleanable(String("TRUE")), true);
  test.equal(isBooleanable(String("false")), true);
  test.equal(isBooleanable(String("FALSE")), true);
  test.equal(isBooleanable(String("t")), true);
  test.equal(isBooleanable(String("T")), true);
  test.equal(isBooleanable(String("f")), true);
  test.equal(isBooleanable(String("F")), true);
  test.equal(isBooleanable(String("yes")), true);
  test.equal(isBooleanable(String("YES")), true);
  test.equal(isBooleanable(String("no")), true);
  test.equal(isBooleanable(String("NO")), true);
  test.equal(isBooleanable(String("y")), true);
  test.equal(isBooleanable(String("Y")), true);
  test.equal(isBooleanable(String("n")), true);
  test.equal(isBooleanable(String("N")), true);
  test.equal(isBooleanable(String("on")), true);
  test.equal(isBooleanable(String("ON")), true);
  test.equal(isBooleanable(String("off")), true);
  test.equal(isBooleanable(String("OFF")), true);
  test.equal(isBooleanable(String("1")), true);
  test.equal(isBooleanable(String("0")), true);

  // Testing node wrapped values not considered as boolean
  test.equal(isBooleanable(Number(2)), false);
  test.equal(isBooleanable(Number(3)), false);
  test.equal(isBooleanable(String("legit")), false);
  test.equal(isBooleanable(String("LEGIT")), false);
  test.equal(isBooleanable(String("untrue")), false);
  test.equal(isBooleanable(String("UNTRUE")), false);
  test.equal(isBooleanable(String("l")), false);
  test.equal(isBooleanable(String("L")), false);
  test.equal(isBooleanable(String("u")), false);
  test.equal(isBooleanable(String("U")), false);
  test.equal(isBooleanable(String("hai")), false);
  test.equal(isBooleanable(String("HAI")), false);
  test.equal(isBooleanable(String("ia")), false);
  test.equal(isBooleanable(String("IA")), false);
  test.equal(isBooleanable(String("h")), false);
  test.equal(isBooleanable(String("H")), false);
  test.equal(isBooleanable(String("i")), false);
  test.equal(isBooleanable(String("I")), false);
  test.equal(isBooleanable(String("up")), false);
  test.equal(isBooleanable(String("UP")), false);
  test.equal(isBooleanable(String("down")), false);
  test.equal(isBooleanable(String("DOWN")), false);
  test.equal(isBooleanable(String("2")), false);
  test.equal(isBooleanable(String("3")), false);

  test.end();
});
