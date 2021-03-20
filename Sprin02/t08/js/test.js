describe("checkBrackets",function(){

    it("(((()))))(((fdf))))))(((0)))))(())()())))))(((9(((())))))(()())", function() {
      assert.equal(checkBrackets('(((()))))(((fdf))))))(((0)))))(())()())))))(((9(((())))))(()())'), 12);
    });
    it(")))&))))()(()()()()()()(()", function() {
      assert.equal(checkBrackets(')))&))))()(()()()()()()(()'), 9);
    });
    it("()()()))))))((((())))))))", function() {
      assert.equal(checkBrackets('()()()))))))((((())))))))'), 9);
    });
    it("()))$$)(()))))((((", function() {
      assert.equal(checkBrackets('()))$$)(()))))(((('), 10);
    });
    it("()", function() {
      assert.equal(checkBrackets('()'), 0);
    });
    it("()()()*()))(((())", function() {
      assert.equal(checkBrackets('()()()*()))(((())'), 4);
    });
    it("()))99(((90(((()90909000)))))", function() {
      assert.equal(checkBrackets('()))99(((90(((()90909000)))))'), 3);
    });
    it("1)()(())2(()", function() {
      assert.equal(checkBrackets('1)()(())2(()'), 2);
    });
    it("", function() {
        assert.equal(checkBrackets(''), -1);
      });
    it("wowoowown", function() {
      assert.equal(checkBrackets('wowoowown'), -1);
    });
    it("true", function() {
      assert.equal(checkBrackets('true'), -1);
    });
    it("()09(()sdfsdf))", function() {
      assert.equal(checkBrackets('()09(()sdfsdf))'), 1);
    });  
    it("134)()(()))(()++sdf()", function() {
      assert.equal(checkBrackets('134)()(()))(()++sdf()'), 3);
    });
    it("false", function() {
        assert.equal(checkBrackets('false'), -1);
    });
    it("(+++())(00((((())(0)))((()))))))", function() {
        assert.equal(checkBrackets('(+++())(00((((())(0)))((()))))))'), 2);
    });  
    it("^^^^^dfsdf())(09)(9)0))())", function() {
        assert.equal(checkBrackets('^^^^^dfsdf())(09)(9)0))())'), 4);
    });

});