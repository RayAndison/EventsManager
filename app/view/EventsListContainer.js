/* CONTAINER
 * Contient une toolbar avec un bouton "New", une barre de recherche, la liste des evenements et une toolbar avec des options de prŽsentation */

Ext.define("EventsManager.view.EventsListContainer", {
    extend: "Ext.Container",
    alias: "widget.eventslistcontainer",
    initialize: function () {
 
	    // Bouton pour ajouter un nouvel element
	    var newButton = {
	        xtype: "button",
	        text: 'New',
	        ui: 'action',
	        handler: this.onNewButtonTap,
	        scope: this
	    };
	    
	    // Toolbar en haut de l'ecran (contient le bouton "New")
	    var topToolbar = {
	        xtype: "toolbar",
	        title: 'Events',
	        docked: "top",
	        items: [
	            { xtype: 'spacer' },
	            newButton
	        ]
	    };
	    
	    // Barre de recherche
	    var searchbar = {
	    	xtype: "searchbar"
	    };
	    
	    // Liste des evenements
	    var eventsList = {
	    	xtype: "eventslist",
	    	store: Ext.getStore("Events")
	    };
	    
	    // Toolbar en bas de l'ecran avec des boutons "Home", "List" et "Calendar"
	    var bottomToolbar = {
	        xtype: "toolbar",
	        docked: "bottom",
	        layout:{
	            pack: 'center'
	        },
	        items: [
	        {
				xtype: 'button',
				iconCls: 'organize',
				text: 'List'
	        },
	        {
				xtype: 'button',
				iconCls: 'calendar',
				text: 'Calendar'
	        }
	        ]
	    };

	    this.add([topToolbar,searchbar,eventsList,bottomToolbar]);
	},
	config: {
        layout: {
            type: 'fit'
        }
    },
    
    // Fonction sur Tap du bouton "New" => declenche l'evenement "newEventCommand"
    onNewButtonTap: function () {
    	this.fireEvent("newEventCommand");
    }

});