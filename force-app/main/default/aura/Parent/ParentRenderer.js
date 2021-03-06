({
    render : function(component, helper){
        var ret = this.superRender();
        console.log('Parent Render -title' + component.get("v.title"));
        return ret;
    },
    rerender : function(component, helper){
        this.superRerender();
        console.log('Parent Re-Render -title' + component.get("v.title"));
    },
    afterRender : function(component, helper){
        this.superAfterRender();
        console.log('Parent After-Render -title' + component.get("v.title"));
    },
    unrender : function(component, helper){
        this.superUnrender();
        console.log('Parent Un-Render -title' + component.get("v.title"));
    }
})