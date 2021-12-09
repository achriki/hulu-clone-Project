

const valueOfButton = require('./index')

test('value to be submit',()=>{
    const res = valueOfButton()
    expect(res).tobe("submit")
})