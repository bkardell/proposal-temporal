// Copyright (C) 2021 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.instant.fromepochseconds
includes: [temporalHelpers.js]
---*/

TemporalHelpers.checkSubclassingIgnoredStatic(
  Temporal.Instant,
  "fromEpochSeconds",
  [10],
  (result) => {
    assert.sameValue(result.epochNanoseconds, 10_000_000_000n, "epochNanoseconds result");
  },
);
