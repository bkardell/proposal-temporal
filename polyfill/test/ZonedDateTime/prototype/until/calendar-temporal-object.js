// Copyright (C) 2021 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.zoneddatetime.prototype.until
description: Fast path for converting other Temporal objects to Temporal.Calendar by reading internal slots
info: |
    sec-temporal.zoneddatetime.prototype.until step 3:
      3. Set _other_ to ? ToTemporalZonedDateTime(_other_).
    sec-temporal-totemporalzoneddatetime step 2.b:
      b. Let _calendar_ be ? GetOptionalTemporalCalendar(_item_).
    sec-temporal-getoptionaltemporalcalendar step 2:
      2. Return ? ToOptionalTemporalCalendar(_calendar_).
    sec-temporal-tooptionaltemporalcalendar step 2:
      3. Return ? ToTemporalCalendar(_temporalCalendarLike_).
    sec-temporal-totemporalcalendar step 1.a:
      a. If _temporalCalendarLike_ has an [[InitializedTemporalDate]], [[InitializedTemporalDateTime]], [[InitializedTemporalMonthDay]], [[InitializedTemporalYearMonth]], or [[InitializedTemporalZonedDateTime]] internal slot, then
        i. Return _temporalCalendarLike_.[[Calendar]].
includes: [compareArray.js, temporalHelpers.js]
---*/

TemporalHelpers.checkToTemporalCalendarFastPath((temporalObject) => {
  const datetime = new Temporal.ZonedDateTime(1_000_000_000_000_000_000n, "UTC", temporalObject);
  datetime.until({ year: 2005, month: 6, day: 2, timeZone: "UTC", calendar: temporalObject });
});
