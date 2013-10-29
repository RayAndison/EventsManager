Ext.application({
    name: "EventsManager",
    
    // Vues
    views: [
	    "EventsListContainer",
	    "EventsList",
	    "SearchBar"
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
		// Ajout de la vue au ViewPort
		Ext.Viewport.add(eventsListContainer);
    }
});