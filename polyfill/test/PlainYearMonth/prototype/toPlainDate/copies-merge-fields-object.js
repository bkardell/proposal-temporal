// Copyright (C) 2021 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plainyearmonth.prototype.toplaindate
description: The object returned from mergeFields() is copied before being passed to monthDayFromFields().
info: |
    sec-temporal.plainyearmonth.prototype.toplaindate steps 9 and 11:
      9. Let _mergedFields_ be ? CalendarMergeFields(_calendar_, _fields_, _inputFields_).
      11. Set _mergedFields_ to ? PrepareTemporalFields(_mergedFields_, _mergedFieldNames_, «»).
includes: [compareArray.js, temporalHelpers.js]
---*/

const expected = [
  "get monthCode",
  "toString monthCode",
  "get year",
  "valueOf year",
  "get day",  // first receiver fields, then input fields
  "valueOf day",
];

const calendar = TemporalHelpers.calendarMergeFieldsGetters();
const yearmonth = new Temporal.PlainYearMonth(2000, 5, calendar);
yearmonth.toPlainDate({ day: 2 });

assert.compareArray(calendar.mergeFieldsReturnOperations, expected, "getters called on mergeFields return");
