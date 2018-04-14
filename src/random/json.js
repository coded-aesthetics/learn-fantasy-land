const S = require("sanctuary");
const R = require("ramda");

const convertRawDataToInputData = version => raw => {
    // if parseInt(version) is greater than 3 return a left
    let a = S.maybeToEither("version (raw.v) is not a valid number")(S.parseInt(10, version))
    let b = S.ifElse(
        S.gte(S.Right(4)), 
        x => S.Left("Versions greater than 3 not supported"),
        S.I,
        a
    )
    //console.log(b)
    return S.map(x => (x*x)+"test", b)
}

const getVersionString = R.compose(
    S.map(S.trim),
    S.chain(S.encaseEither(S.I)(S.prop("v")))
)

const tryParseJSON = S.encaseEither(S.I)(JSON.parse)

const processQRCode = (qrCodeJSON) => {
    let raw = tryParseJSON(qrCodeJSON)
    let version = getVersionString(raw)

    return S.join(S.ap(S.map(convertRawDataToInputData)(version))(raw))
}

console.log(processQRCode('{"v":" 3", "test": "test"}'))