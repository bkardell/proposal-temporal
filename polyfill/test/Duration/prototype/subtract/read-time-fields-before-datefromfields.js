// Copyright (C) 2021 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.duration.prototype.subtract
info: |
    sec-temporal.duration.prototype.subtract step 5:
      5. Let _relativeTo_ be ? ToRelativeTemporalObject(_options_).
    sec-temporal-torelativetemporalobject step 4.g:
      g. Let _result_ be ? InterpretTemporalDateTimeFields(_calendar_, _fields_, _options_).
    sec-temporal-interprettemporaldatetimefields steps 1–2:
      1. Let _timeResult_ be ? ToTemporalTimeRecord(_fields_).
      2. Let _temporalDate_ be ? DateFromFields(_calendar_, _fields_, _options_).
includes: [temporalHelpers.js]
---*/

const calendar = TemporalHelpers.calendarMakeInvalidGettersTime();
const duration1 = new Temporal.Duration(1);
const duration2 = new Temporal.Duration(0, 12);
duration1.subtract(duration2, { relativeTo: { year: 2000, month: 1, day: 1, calendar } });
