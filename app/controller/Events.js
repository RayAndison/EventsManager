/* EVENT CONTROLLER
 * Capte les evenements generes par les tap sur les boutons et lance les fonctions associees */

Ext.define("EventsManager.controller.Events", {
    extend: "Ext.app.Controller",
    config: {
		// References sur les vues
        refs: {
			eventsListContainer: "eventslistcontainer"
        },
        control: {
        	// Evenements lance par EventsListContainer
        	eventsListContainer: {
        		newEventCommand: "onNewEventCommand"
            }
        }
    },
    
    onNewEventCommand: function () {
    	alert("onNewEvent");
    },
    
    launch: function () {
    },
    
    init: function () {
    }
});