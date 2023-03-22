import LoginPage from '../pageobjects/login.page.js'
import ConfigData  from '../config.js';

describe('Logging in to OrangeHRM', () => {
    it("Verify Title", () => {
        expect(browser).toHaveTitle("OrangeHRM")
    })

it('should login with valid credentials', async () => {
    await LoginPage.open()
    await LoginPage.login(ConfigData.username,ConfigData.password)
})

it('Landing in Dashboard Page',async () => {
    await expect(browser).toHaveUrlContaining('dashboard')
})

})