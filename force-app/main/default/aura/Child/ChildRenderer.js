({
    render : function(component, helper){
        var ret = this.superRender();
        console.log('Child Render -title' + component.get("v.title"));
        return ret;
    },
    rerender : function(component, helper){
        this.superRerender();
        console.log('Child Re-Render -title' + component.get("v.title"));
    },
    afterRender : function(component, helper){
        this.superAfterRender();
        console.log('Child After-Render -title' + component.get("v.title"));
    },
    unrender : function(component, helper){
        this.superUnrender();
        console.log('Child Un-Render -title' + component.get("v.title"));
    }
})