const func = require('./utils/App.functions.js')


describe('testing for all users endpoint', ()=>{
  test('should get an array of users', async ()=>{
    let data = await func.getAllUsers('http://localhost:3005/api/getAllUsers').then(res=>{
      expect(Array.isArray(res)).toBeTruthy();
      // expect(res.length).toBeGreaterThan(0)
    })
  })

  test('wrong url', ()=>{
    expect.assertions(1)
    return func.getAllUsers('htttp://localhost:3005/api/getAllUsers').then(res=>{
      expect(res +'').toBe('Error: Network Error')
    })
  })
})