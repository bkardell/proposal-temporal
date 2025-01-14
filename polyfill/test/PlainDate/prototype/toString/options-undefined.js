// Copyright (C) 2021 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plaindate.prototype.tostring
---*/

const calendar = {
  toString() { return "custom"; }
};
const date = new Temporal.PlainDate(2000, 5, 2, calendar);

const explicit = date.toString(undefined);
assert.sameValue(explicit, "2000-05-02[u-ca=custom]", "default show-calendar option is auto");

const implicit = date.toString();
assert.sameValue(implicit, "2000-05-02[u-ca=custom]", "default show-calendar option is auto");
