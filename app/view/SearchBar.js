/* SEARCHBAR 
 * Contient un champ de recherche et un bouton "search" */

Ext.define("EventsManager.view.SearchBar",{
    extend: "Ext.Toolbar",
    requires: ["Ext.field.Search"],
    alias: "widget.searchbar",
    initialize: function() {
	
		var searchbar = {
            xtype: "toolbar",
            ui: "searchbar",
            items: [
            {
                xtype: "searchfield",
                placeHolder: "Search...",
                flex: 1
            },
            {
                xtype: "button",
                text: "Search",
                handler: this.onSearch
            }
            ]
        };
        this.add([searchbar]);
	},
    config: {
        docked: "top", 
        ui: "searchbar",
        layout: "vbox"
    },
    
    // Fonction appelee quand on lance la recherche
    onSearch: function() {
    	alert("search");
    }
});