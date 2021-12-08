const {myatom} = require("../src/myatom")
const {useMycoilState, getMycoilValue,useSetMycoilValue} = require("../src/hooks")

function get(mycoilValue) {
    return getMycoilValue(mycoilValue)

}

function set(firstAtom) {
    const setState = useSetMycoilValue(firstAtom)
    setState("HI")
}

it('should return same value', function () {
    const firstAtom = myatom({
        key: "init",
        state: "init-default"
    })
    expect(get(firstAtom)).toBe("init-default")
    set(firstAtom)
    expect(get(firstAtom)).toBe("HI")
});