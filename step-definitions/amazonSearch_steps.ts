import { Given,When,Then } from 'cucumber'
import {homepage} from 'support/amazon-home-page'

    
    Given('I navigate to amazon home page', function () {
        browser.deleteCookies()
        homepage.navigate()
    })

    When('I search for Green', function () {
       homepage.searchForColor()
    })

    Then('I get relevant information', function () {
       browser.getUrl().match("'\=Green\'")
    })
