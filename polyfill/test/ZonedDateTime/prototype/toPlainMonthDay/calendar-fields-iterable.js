// Copyright (C) 2021 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.zoneddatetime.prototype.toplainmonthday
info: |
    sec-temporal.zoneddatetime.prototype.toplainmonthday step 7:
      7. Let _fieldNames_ be ? CalendarFields(_calendar_, « *"day"*, *"monthCode"* »).
    sec-temporal-calendarfields step 4:
      4. Let _result_ be ? IterableToList(_fieldsArray_).
includes: [compareArray.js, temporalHelpers.js]
---*/

const expected = [
  "day",
  "monthCode",
];

const calendar = TemporalHelpers.calendarFieldsIterable();
const datetime = new Temporal.ZonedDateTime(1_000_000_000_000_000_000n, "UTC", calendar);
datetime.toPlainMonthDay();

assert.sameValue(calendar.fieldsCallCount, 1, "fields() method called once");
assert.compareArray(calendar.fieldsCalledWith[0], expected, "fields() method called with correct args");
assert(calendar.iteratorExhausted[0], "iterated through the whole iterable");
