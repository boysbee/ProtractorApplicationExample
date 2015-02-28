describe('project homepage title', function () {
    var url = "http://filipefalcaobatista.github.io/";
    var what = element(by.model('what'));
    var who = element(by.model('who'));
    var when = element(by.model('when'));
    var add = element(by.id('add'));
    var quantity = element(by.binding('quantity'));
    var todos = element.all(by.repeater('todo in todos'));
    
    beforeEach(function() {
        browser.get(url);
    });
    
    it('should have a title', function () {
        expect(browser.getTitle()).toEqual('AngularJS and Protractor');
    });
    
    it('should add a todo, have 4 todos and the new one be the last one', function () {
        what.sendKeys('AngularJS and Protractor');
        who.sendKeys('Filipe Falcão');
        when.sendKeys('28 de Fevereiro');
        
        add.click();
        
        expect(quantity.getText()).toEqual('4 Todos');
        expect(todos.count()).toEqual(4);
        expect(todos.last().getText()).toContain('Filipe Falcão');
    });
});