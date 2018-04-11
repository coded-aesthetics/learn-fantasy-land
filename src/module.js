const {create, env} = require('../node_modules/sanctuary');
const $ = require('../node_modules/sanctuary-def');
const type = require('../node_modules/sanctuary-type-identifiers');

//    Sum :: a -> Sum a
const Sum = function Sum(x) {
  if (!(this instanceof Sum)) return new Sum(x);
  this.value = x;
};

Sum['@@type'] = 'my-package/Sum@1';

Sum.prototype['fantasy-land/map'] = function(f) {
  return Sum(f(this.value));
};
Sum.prototype['fantasy-land/concat'] = function(identity) {
    return Sum(this.value + identity.value);
};
Sum['fantasy-land/empty'] = function() {
    return Sum(0);
};
Sum.prototype['fantasy-land/invert'] = function() {
    return Sum(-this.value);
};

//    SumType :: Type -> Type
const SumType = $.UnaryType(
  Sum['@@type'])(
  'http://example.com/my-package#Sum')(
  x => type(x) === Sum['@@type'])(
  identity => [identity.value]
);

const S = create({
  checkTypes: process.env.NODE_ENV !== 'production',
  env: env.concat([SumType($.Number)]),
});

console.log(S.Just("42"));
console.log(S.map(S.sub(1), Sum(43)));
console.log(S.concat(Sum(43))(Sum(42)));
console.log(S.empty(Sum));
console.log(S.invert(Sum(42)));
// => Sum(42)