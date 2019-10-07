({
    render : function(component, helper){
        var ret = this.superRender();
        console.log('Child 2 Render -title' + component.get("v.title"));
        return ret;
    },
    rerender : function(component, helper){
        this.superRerender();
        console.log('Child 2 Re-Render -title' + component.get("v.title"));
    },
    afterRender : function(component, helper){
        this.superAfterRender();
        console.log('Child 2 After-Render -title' + component.get("v.title"));
    },
    unrender : function(component, helper){
        this.superUnrender();
        console.log('Child 2 Un-Render -title' + component.get("v.title"));
    }
})