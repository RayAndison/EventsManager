/* LIST
 * Contient la liste des evenements */

Ext.define("EventsManager.view.EventsList", {
    extend: "Ext.dataview.List",
    alias: "widget.eventslist",
    config: {
        loadingText: "Loading Events...",
        emptyText: '</pre><div class="events-list-empty-text">No events found.</div><pre>',
        itemTpl: '</pre><div class="list-item-title">{title}</div><div class="list-item-description">{description}</div><pre>',
        itemHeight: 100,
        
        // Fonction appelee quand on veut modifier l'evenement
        onItemDisclosure: function(record,btn,index) {
			this.fireEvent("editEventCommand", record);
		}
    }
});