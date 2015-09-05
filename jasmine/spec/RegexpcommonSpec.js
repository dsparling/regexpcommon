describe("Regexpcommon", function() {
  var integerValue = '42';
  var stringValue = 'abc';
  var floatValue = '42.42';
  var romanValue = 'XLII';

  describe("numberInteger", function() {
    it(integerValue + " should match numberInteger", function() {
      match = integerValue.match($.regexpCommon('numberInteger'));
      expect(match[0]).not.toBeNull();
    });

    it(integerValue + " should equal " + integerValue, function() {
      match = integerValue.match($.regexpCommon('numberInteger'));
      expect(match[0]).toBe(integerValue);
    });

    it(stringValue + " should not match numberInteger", function() {
      match = stringValue.match($.regexpCommon('numberInteger'));
      expect(match).toBeNull();
    });
  });

  describe("numberFloat", function() {
    it(floatValue + " should match numberFloat", function() {
      match = floatValue.match($.regexpCommon('numberFloat'));
      expect(match[0]).not.toBeNull();
    });

    it(floatValue + " should equal " + floatValue, function() {
      match = floatValue.match($.regexpCommon('numberFloat'));
      expect(match[0]).toBe(floatValue);
    });

    it(stringValue + " should not match numberFloat", function() {
      match = stringValue.match($.regexpCommon('numberFloat'));
      expect(match).toBeNull();
    });
  });

  describe("numberRoman", function() {
    it(romanValue + " should match numberRoman", function() {
      match = romanValue.match($.regexpCommon('numberRoman'));
      expect(match[0]).not.toBeNull();
    });

    it(romanValue + " should equal " + romanValue, function() {
      match = romanValue.match($.regexpCommon('numberRoman'));
      expect(match[0]).toBe(romanValue);
    });

    it(stringValue + " should not match numberRoman", function() {
      match = stringValue.match($.regexpCommon('numberRoman'));
      expect(match).toBeNull();
    });
  });
});
