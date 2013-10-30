Ext.application({
    name: "EventsManager",
    
    // Vues
    views: [
	    "EventsListContainer",
	    "EventsList",
	    "SearchBar",
	    "EventsEditor"
    ],
    
    // Controleurs
    controllers: ["Events"],
    
    // Modeles
    models: ["Events"],
    
    // Stores
    stores: ["Events"],
    
    launch: function () {
	
		// Creation d'une vue pour le container
		var eventsListContainer = {
	    	xtype: "eventslistcontainer"
	    };
		
		// Creation d'une vue pour le formulaire d'ajout/modification d'un evenement
		var eventsEditor = {
			xtype: "eventseditor"
		};
		
		// Ajout des vues au ViewPort
		Ext.Viewport.add([eventsListContainer, eventsEditor]);
    }
});