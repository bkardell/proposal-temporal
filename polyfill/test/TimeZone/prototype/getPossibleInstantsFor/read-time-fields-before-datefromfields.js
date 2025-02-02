// Copyright (C) 2021 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.timezone.prototype.getpossibleinstantsfor
description: The time fields are read from the object before being passed to dateFromFields().
info: |
    sec-temporal.timezone.prototype.getpossibleinstantsfor step 3:
      3. Set _dateTime_ to ? ToTemporalDateTime(_dateTime_).
    sec-temporal-totemporaldatetime step 2.e:
      e. Let _result_ be ? InterpretTemporalDateTimeFields(_calendar_, _fields_, _options_).
    sec-temporal-interprettemporaldatetimefields steps 1–2:
      1. Let _timeResult_ be ? ToTemporalTimeRecord(_fields_).
      2. Let _temporalDate_ be ? DateFromFields(_calendar_, _fields_, _options_).
includes: [temporalHelpers.js]
---*/

const timezone = new Temporal.TimeZone("UTC");
const calendar = TemporalHelpers.calendarMakeInfinityTime();
const result = timezone.getPossibleInstantsFor({ year: 1970, month: 1, day: 1, calendar });

assert.sameValue(result.length, 1, "result array length");
assert.sameValue(result[0].epochNanoseconds, 0n, "epochNanoseconds result");
