/* EVENT CONTROLLER
 * Capte les evenements generes par les tap sur les boutons et lance les fonctions associees */

Ext.define("EventsManager.controller.Events", {
    extend: "Ext.app.Controller",
    config: {
		// References sur les vues
        refs: {
			eventsListContainer: "eventslistcontainer",
			eventsList: "eventslist"
        },
        control: {
        	// Evenements lance par EventsListContainer
        	eventsListContainer: {
        		newEventCommand: "onNewEventCommand"
            },
            // Evenements lance par EventsList
            eventsList: {
            	editEventCommand: "onEditEventCommand"
            }
        }
    },
    
    // Creer un nouvel evenement
    onNewEventCommand: function () {
   
    	var eventsEditor = {
			xtype: "eventseditor"
		};
    	Ext.Viewport.animateActiveItem(eventsEditor, {type: 'slide', direction: 'left'});
    	
    },
    
    // Modifier un evenement existant
    onEditEventCommand: function(){
    	alert("onEditEvent");
    },
    
    launch: function () {
    },
    
    init: function () {
    }
});