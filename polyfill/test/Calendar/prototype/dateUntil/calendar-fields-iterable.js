// Copyright (C) 2021 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.calendar.prototype.dateuntil
info: |
    sec-temporal.calendar.prototype.dateuntil steps 4–5:
      4. Set _one_ to ? ToTemporalDate(_one_).
      5. Set _two_ to ? ToTemporalDate(_two_).
    sec-temporal-totemporaldate step 2.c:
      c. Let _fieldNames_ be ? CalendarFields(_calendar_, « *"day"*, *"month"*, *"monthCode"*, *"year"* »).
    sec-temporal-calendarfields step 4:
      4. Let _result_ be ? IterableToList(_fieldsArray_).
includes: [compareArray.js, temporalHelpers.js]
---*/

const expected = [
  "day",
  "month",
  "monthCode",
  "year",
];

const calendar1 = TemporalHelpers.calendarFieldsIterable();
const calendar2 = TemporalHelpers.calendarFieldsIterable();
const calendar3 = TemporalHelpers.calendarFieldsIterable();
calendar1.dateUntil(
  { year: 2000, month: 5, day: 2, calendar: calendar2 },
  { year: 2005, month: 6, day: 3, calendar: calendar3 },
);

assert.sameValue(calendar1.fieldsCallCount, 0, "fields() method not called");
assert.sameValue(calendar2.fieldsCallCount, 1, "fields() method called once");
assert.sameValue(calendar3.fieldsCallCount, 1, "fields() method called once");
assert.compareArray(calendar2.fieldsCalledWith[0], expected, "fields() method called with correct args");
assert(calendar2.iteratorExhausted[0], "iterated through the whole iterable");
assert.compareArray(calendar3.fieldsCalledWith[0], expected, "fields() method called with correct args");
assert(calendar3.iteratorExhausted[0], "iterated through the whole iterable");
