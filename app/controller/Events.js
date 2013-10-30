/* EVENT CONTROLLER
 * Capte les evenements generes par les tap sur les boutons et lance les fonctions associees */

Ext.define("EventsManager.controller.Events", {
    extend: "Ext.app.Controller",
    config: {
		// References sur les vues
        refs: {
			eventsListContainer: "eventslistcontainer",
			eventsList: "eventslist",
			eventsEditor: "eventseditor"
        },
        control: {
        	// Evenements lance par EventsListContainer
        	eventsListContainer: {
        		newEventCommand: "onNewEventCommand"
            },
            // Evenements lance par EventsList
            eventsList: {
            	editEventCommand: "onEditEventCommand"
            },
            // Evenements lance par EventsEditor
            eventsEditor: {
            	homeCommand: "onHomeCommand"
            }
        }
    },
    
    // Creer un nouvel evenement
    onNewEventCommand: function () {
    	var newEvent = Ext.create("EventsManager.model.Events");
    	this.getEventsEditor().setRecord(newEvent);
    	Ext.Viewport.animateActiveItem(this.getEventsEditor(), {type: 'slide', direction: 'left'});  	
    },
    
    // Modifier un evenement existant
    onEditEventCommand: function(record){
    	this.getEventsEditor().setRecord(record);
    	Ext.Viewport.animateActiveItem(this.getEventsEditor(), {type: 'slide', direction: 'left'});  	
    },
    
    // Retourner a la page principale
    onHomeCommand: function(){
    	Ext.Viewport.animateActiveItem(this.getEventsListContainer(), {type: 'slide', direction: 'right'});
    },
    
    launch: function () {
    },
    
    init: function () {
    }
});