
const correctPolishLetters  = require('.')

test('Test 0', () => {
          expect(correctPolishLetters("Jędrzej Błądziński")).toBe("Jedrzej Bladzinski");
        })

test('Test 1', () => {
          expect(correctPolishLetters("Lech Wałęsa")).toBe("Lech Walesa");
        })

test('Test 2', () => {
          expect(correctPolishLetters("Maria Skłodowska-Curie")).toBe("Maria Sklodowska-Curie");
        })

