describe("Regexpcommon", function() {
  var integerValue = '42';
  var stringValue = 'abc';
  var floatValue = '42.42';
  var romanValue = 'XLII';
  var ssnValue = '123-45-6789';
  var urlValue = 'http://www.example.com/';
  var emailValue = 'test@example.com';
  var usPhoneValue = '(555)555-5555';
  var usZipValue = '12345-1111';
  var usCurrencyValue = '$1,000';
  var htmlHexCodeValue = '#ffffff';
  var quadIpValue = '127.0.0.1';
  var macAddressValue = '08:00:69:02:01:FC';

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
    it("'" + usPhoneValue + "' should match phoneNumberUS", function() {
      match = usPhoneValue.match($.regexpCommon('phoneNumberUS'));
      expect(match[0]).not.toBeNull();
    });

    it("'" + usPhoneValue + "' should equal '" + usPhoneValue + "'", function() {
      match = usPhoneValue.match($.regexpCommon('phoneNumberUS'));
      expect(match[0]).toBe(usPhoneValue);
    });

    it("'" + stringValue + "' should not match phoneNumberUS", function() {
      match = stringValue.match($.regexpCommon('phoneNumberUS'));
      expect(match).toBeNull();
    });
  });

  describe("zipCodeUS", function() {
    it("'" + usZipValue + "' should match zipCodeUS", function() {
      match = usZipValue.match($.regexpCommon('zipCodeUS'));
      expect(match[0]).not.toBeNull();
    });

    it("'" + usZipValue + "' should equal '" + usZipValue + "'", function() {
      match = usZipValue.match($.regexpCommon('zipCodeUS'));
      expect(match[0]).toBe(usZipValue);
    });

    it("'" + stringValue + "' should not match zipCodeUS", function() {
      match = stringValue.match($.regexpCommon('zipCodeUS'));
      expect(match).toBeNull();
    });
  });

  describe("currencyUS", function() {
    it("'" + usCurrencyValue + "' should match currencyUS", function() {
      match = usCurrencyValue.match($.regexpCommon('currencyUS'));
      expect(match[0]).not.toBeNull();
    });

    it("'" + usCurrencyValue + "' should equal '" + usCurrencyValue + "'", function() {
      match = usCurrencyValue.match($.regexpCommon('currencyUS'));
      expect(match[0]).toBe(usCurrencyValue);
    });

    it("'" + stringValue + "' should not match currencyUS", function() {
      match = stringValue.match($.regexpCommon('currencyUS'));
      expect(match).toBeNull();
    });
  });

  describe("htmlHexCode", function() {
    it("'" + htmlHexCodeValue + "' should match htmlHexCode", function() {
      match = htmlHexCodeValue.match($.regexpCommon('htmlHexCode'));
      expect(match[0]).not.toBeNull();
    });

    it("'" + htmlHexCodeValue + "' should equal '" + htmlHexCodeValue + "'", function() {
      match = htmlHexCodeValue.match($.regexpCommon('htmlHexCode'));
      expect(match[0]).toBe(htmlHexCodeValue);
    });

    it("'" + stringValue + "' should not match htmlHexCode", function() {
      match = stringValue.match($.regexpCommon('htmlHexCode'));
      expect(match).toBeNull();
    });
  });

  describe("dottedQuadIP", function() {
    it("'" + quadIpValue + "' should match dottedQuadIP", function() {
      match = quadIpValue.match($.regexpCommon('dottedQuadIP'));
      expect(match[0]).not.toBeNull();
    });

    it("'" + quadIpValue + "' should equal '" + quadIpValue + "'", function() {
      match = quadIpValue.match($.regexpCommon('dottedQuadIP'));
      expect(match[0]).toBe(quadIpValue);
    });

    it("'" + stringValue + "' should not match dottedQuadIP", function() {
      match = stringValue.match($.regexpCommon('dottedQuadIP'));
      expect(match).toBeNull();
    });
  });

  describe("macAddress", function() {
    it("'" + macAddressValue + "' should match dottedQuadIP", function() {
      match = macAddressValue.match($.regexpCommon('macAddress'));
      expect(match[0]).not.toBeNull();
    });

    it("'" + macAddressValue + "' should equal '" + macAddressValue + "'", function() {
      match = macAddressValue.match($.regexpCommon('macAddress'));
      expect(match[0]).toBe(macAddressValue);
    });

    it("'" + stringValue + "' should not match macAddress", function() {
      match = stringValue.match($.regexpCommon('macAddress'));
      expect(match).toBeNull();
    });
  });

});
