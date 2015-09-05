describe("Regexpcommon", function() {
  var integerValue = '42';
  var stringValue = 'abc';
  var floatValue = '42.42';
  var romanValue = 'XLII';
  var ssnValue = '123-45-6789';
  var urlValue = 'http://www.example.com/';
  var emailValue = 'test@example.com';
  var phoneValue = '(555)555-5555';

  describe("numberInteger", function() {
    it("'" + integerValue + "' should match numberInteger", function() {
      match = integerValue.match($.regexpCommon('numberInteger'));
      expect(match[0]).not.toBeNull();
    });

    it("'" + integerValue + "' should equal '" + integerValue + "'", function() {
      match = integerValue.match($.regexpCommon('numberInteger'));
      expect(match[0]).toBe(integerValue);
    });

    it("'" + stringValue + "' should not match numberInteger", function() {
      match = stringValue.match($.regexpCommon('numberInteger'));
      expect(match).toBeNull();
    });
  });

  describe("numberFloat", function() {
    it("'" + floatValue + "' should match numberFloat", function() {
      match = floatValue.match($.regexpCommon('numberFloat'));
      expect(match[0]).not.toBeNull();
    });

    it("'" + floatValue + "' should equal '" + floatValue + "'", function() {
      match = floatValue.match($.regexpCommon('numberFloat'));
      expect(match[0]).toBe(floatValue);
    });

    it("'" + stringValue + "' should not match numberFloat", function() {
      match = stringValue.match($.regexpCommon('numberFloat'));
      expect(match).toBeNull();
    });
  });

  describe("numberRoman", function() {
    it("'" + romanValue + "' should match numberRoman", function() {
      match = romanValue.match($.regexpCommon('numberRoman'));
      expect(match[0]).not.toBeNull();
    });

    it("'" + romanValue + "' should equal '" + romanValue + "'", function() {
      match = romanValue.match($.regexpCommon('numberRoman'));
      expect(match[0]).toBe(romanValue);
    });

    it("'" + stringValue + "' should not match numberRoman", function() {
      match = stringValue.match($.regexpCommon('numberRoman'));
      expect(match).toBeNull();
    });
  });

  describe("ssn", function() {
    it("'" + ssnValue + "' should match ssn", function() {
      match = ssnValue.match($.regexpCommon('ssn'));
      expect(match[0]).not.toBeNull();
    });

    it("'" + ssnValue + "' should equal '" + ssnValue + "'", function() {
      match = ssnValue.match($.regexpCommon('ssn'));
      expect(match[0]).toBe(ssnValue);
    });

    it("'" + stringValue + "' should not match ssn", function() {
      match = stringValue.match($.regexpCommon('ssn'));
      expect(match).toBeNull();
    });
  });

  describe("url", function() {
    it("'" + urlValue + "' should match url", function() {
      match = urlValue.match($.regexpCommon('url'));
      expect(match[0]).not.toBeNull();
    });

    it("'" + urlValue + "' should equal '" + urlValue + "'", function() {
      match = urlValue.match($.regexpCommon('url'));
      expect(match[0]).toBe(urlValue);
    });

    it("'" + stringValue + "' should not match url", function() {
      match = stringValue.match($.regexpCommon('url'));
      expect(match).toBeNull();
    });
  });

  describe("email", function() {
    it("'" + emailValue + "' should match email", function() {
      match = emailValue.match($.regexpCommon('email'));
      expect(match[0]).not.toBeNull();
    });

    it("'" + emailValue + "' should equal '" + emailValue + "'", function() {
      match = emailValue.match($.regexpCommon('email'));
      expect(match[0]).toBe(emailValue);
    });

    it("'" + stringValue + "' should not match email", function() {
      match = stringValue.match($.regexpCommon('email'));
      expect(match).toBeNull();
    });
  });

  describe("phoneNumberUS", function() {
    it("'" + phoneValue + "' should match phoneNumberUS", function() {
      match = phoneValue.match($.regexpCommon('phoneNumberUS'));
      expect(match[0]).not.toBeNull();
    });

    it("'" + phoneValue + "' should equal '" + phoneValue + "'", function() {
      match = phoneValue.match($.regexpCommon('phoneNumberUS'));
      expect(match[0]).toBe(phoneValue);
    });

    it("'" + stringValue + "' should not match phoneNumberUS", function() {
      match = stringValue.match($.regexpCommon('phoneNumberUS'));
      expect(match).toBeNull();
    });
  });

});
