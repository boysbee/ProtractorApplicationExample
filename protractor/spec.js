describe('project homepage title', function() {
    it('should have a title', function() {
        var url = "https://github.com/FilipeFalcaoBatista.github.io/ProtractorApplicationExample";                 browser.get(url);

        expect(browser.getTitle()).toEqual('AngularJS and Protractor');
    });
});