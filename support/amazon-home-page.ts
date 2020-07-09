export class AmazonHomePage{

    get searchbox(){ return $('input[name=field-keywords]')}
    get submitsearch(){ return $('input[class=nav-input]')}

    navigate(){
        browser.navigateTo('https://www.amazon.co.uk/')}

    searchForColor(){
        this.searchbox.setValue('Green')
        browser.keys('\uE006')}

}

export const homepage: AmazonHomePage = new AmazonHomePage()
