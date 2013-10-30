/* PANEL 
 * Contient le formulaire pour editer un evenement*/

Ext.define("EventsManager.view.EventsEditor", {
    extend: "Ext.form.Panel",
    requires: "Ext.form.FieldSet",
    alias: "widget.eventseditor",
    
    config:{
        scrollable:'vertical'
    },
    
    initialize: function () {
    	
    	// Bouton pour revenir a la page precedente
    	var backButton = {
            xtype: "button",
            ui: "back",
            text: "Home"
        };
    	
    	// Bouton pour enregistrer les modifications
        var saveButton = {
            xtype: "button",
            ui: "action",
            text: "Save"
        };
        
        // Toolbar en haut de l'ecran contenant les boutons "Back" et "Save"
        var topToolbar = {
            xtype: "toolbar",
            docked: "top",
            title: "Edit Event",
            items: [
                backButton,
                { xtype: "spacer" },
                saveButton
            ]
        };
        
        // Bouton pour supprimer l'evenement
        var deleteButton = {
            xtype: "button",
            iconCls: "trash",
            iconMask: true,
            scope: this
        };
        
        // Toolbar en bas de l'ecran contenant le bouton "Delete"
        var bottomToolbar = {
            xtype: "toolbar",
            docked: "bottom",
            items: [
                deleteButton
            ]
        };
        
        // Champ texte contenant le titre de l'evenement
        var eventTitleEditor = {
            xtype: 'textfield',
            name: 'title',
            label: 'Title'
        };
        
        // Champ textarea contenant la description de l'evenement
        var eventNarrativeEditor = {
            xtype: 'textareafield',
            name: 'description',
            label: 'Description'
        };
        
        // Champ date contenant la date de l'evenement
        var eventDateEditor = Ext.create('Ext.field.DatePicker', {
            label: 'Date',
            value: new Date()
        });

        this.add([
            topToolbar,
            { xtype: "fieldset",
                items: [eventTitleEditor, eventNarrativeEditor, eventDateEditor]
            },
            bottomToolbar
        ]);
    }
});