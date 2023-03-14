//Тестирование
//Behavior Driven Development (BDD)
//Спецификация
describe ("pow", function() {
    function makeTest (x) {
        let expected = x * x * x;
        it(`${x} в степени 3 будет ${expected}`, function() {
            assert.equal(pow(x, 3), expected);
        })
    }

    for (let i = 1; i <= 5; i++) {
        makeTest (i)
    }

    it("для отрицательных n возвращает NaN", function() {
        assert.isNaN(pow(2, -1));
      });
    
    it("для дробных n возвращает NaN", function() {
        assert.isNaN(pow(2, 1.5));
    });

})