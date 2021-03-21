const test = require('tape')
const { createCLIWrapper } = require('./test-utils')
// tape, child_process, and assert on stderr/stdout/exit code

test(`pizza orders`, (t)=>{
    
t.plan(2)
t.test(`'-p -C' should return You ordered a pizza with:" \n- peppers`, t => {

    const wrapper = createCLIWrapper()
    const result = wrapper.run(['-p', '-C'])
    t.ok(result.stdout.includes(`You ordered a pizza with:"\n- peppers`))
    t.end()
})
t.test(`'-p -c gouda' should return You ordered a pizza with:" \n- peppers\n- gouda cheese`, t => {

    const wrapper = createCLIWrapper()
    const result = wrapper.run(['-p', '-c gouda'])
    console.log(result);
    t.ok(result.stdout.includes(`You ordered a pizza with:"\n- peppers\n-  gouda cheese\n`))
    t.end()
})
})