// Copyright (C) 2021 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plaindatetime.prototype.tostring
---*/

const calendar = {
  toString() { return "custom"; }
};
const datetime = new Temporal.PlainDateTime(2000, 5, 2, 12, 34, 56, 987, 650, 0, calendar);

const explicit = datetime.toString(undefined);
assert.sameValue(
  explicit,
  "2000-05-02T12:34:56.98765[u-ca=custom]",
  "default show-calendar option is auto, precision is auto, and rounding is trunc"
);

const implicit = datetime.toString();
assert.sameValue(
  implicit,
  "2000-05-02T12:34:56.98765[u-ca=custom]",
  "default show-calendar option is auto, precision is auto, and rounding is trunc"
);
