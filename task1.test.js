const stringLength = require("./task1")

    test('the length of empty string or string more then 10 characters long should throw error passed', () => {
        expect(stringLength(" ")).toEqual("Please enter at least 1 character long and not longer than 10");
      });// })
      test('the salwa.length = 5 passed', () => {
        expect(stringLength("salwa")).toBe(5);
      });
