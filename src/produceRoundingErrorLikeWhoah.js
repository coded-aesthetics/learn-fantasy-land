const S = require("../node_modules/sanctuary");
const R = require("../node_modules/ramda");

let f = (x) => {
    if(x < 0) {
      throw new Error("can't represent sqrt of negative number!")
    } else {
      return Math.sqrt(x)
    }
  }
  
  let cryTatchSqrt = R.tryCatch(x => S.Right(f(x)), e => S.Left(e.message))
  
  let produceRoundingErrorLikeWhoah = S.pipe([
    cryTatchSqrt,
    S.map(x => Math.pow(x, 4)),
    S.map(x => x - 1)]
  );
  
  console.log(produceRoundingErrorLikeWhoah(15));
  console.log(produceRoundingErrorLikeWhoah(-3));

  console.log(S.encase(f, 3));
  console.log(S.encase(f, -1));

  let produceRoundingErrorLikeWhoah2 = S.pipe([
    S.encaseEither(S.prop('message'), f),
    S.map(x => Math.pow(x, 4)),
    S.map(x => x - 1)]
  );
  
  console.log(produceRoundingErrorLikeWhoah2(3));
  console.log(produceRoundingErrorLikeWhoah2(-1));