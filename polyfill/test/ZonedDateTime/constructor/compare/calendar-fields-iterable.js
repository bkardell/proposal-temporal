// Copyright (C) 2021 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.zoneddatetime.compare
info: |
    sec-temporal.zoneddatetime.compare steps 1–2:
      1. Set _one_ to ? ToTemporalZonedDateTime(_one_).
      2. Set _two_ to ? ToTemporalZonedDateTime(_two_).
    sec-temporal-totemporalzoneddatetime step 2.c:
      c. Let _fieldNames_ be ? CalendarFields(_calendar_, « *"day"*, *"hour"*, *"microsecond"*, *"millisecond"*, *"minute"*, *"month"*, *"monthCode"*, *"nanosecond"*, *"second"*, *"year"* »).
    sec-temporal-calendarfields step 4:
      4. Let _result_ be ? IterableToList(_fieldsArray_).
includes: [compareArray.js, temporalHelpers.js]
---*/

const expected = [
  "day",
  "hour",
  "microsecond",
  "millisecond",
  "minute",
  "month",
  "monthCode",
  "nanosecond",
  "second",
  "year",
];

const calendar1 = TemporalHelpers.calendarFieldsIterable();
const calendar2 = TemporalHelpers.calendarFieldsIterable();
Temporal.ZonedDateTime.compare(
  { year: 2000, month: 5, day: 2, timeZone: "UTC", calendar: calendar1 },
  { year: 2001, month: 6, day: 3, timeZone: "UTC", calendar: calendar2 },
);

assert.sameValue(calendar1.fieldsCallCount, 1, "fields() method called once");
assert.compareArray(calendar1.fieldsCalledWith[0], expected, "fields() method called with correct args");
assert(calendar1.iteratorExhausted[0], "iterated through the whole iterable");
assert.sameValue(calendar2.fieldsCallCount, 1, "fields() method called once");
assert.compareArray(calendar2.fieldsCalledWith[0], expected, "fields() method called with correct args");
assert(calendar2.iteratorExhausted[0], "iterated through the whole iterable");
