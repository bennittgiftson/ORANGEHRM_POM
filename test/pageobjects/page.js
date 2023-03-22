export default class Page {
  
    open (_path) {
        return browser.url(`https://opensource-demo.orangehrmlive.com/web/index.php/auth/login`)
    }
}
