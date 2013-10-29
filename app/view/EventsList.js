/* LIST
 * Contient la liste des evenements */

Ext.define("EventsManager.view.EventsList", {
    extend: "Ext.dataview.List",
    alias: "widget.eventslist",
    config: {
        loadingText: "Loading Events...",
        emptyText: '</pre><div class="events-list-empty-text">No events found.</div><pre>',
        itemTpl: '</pre><div class="list-item-titre">{titre}</div><div class="list-item-description">{description}</div><pre>',
        itemHeight: 100,
        onItemDisclosure: function(record,btn,index) {
			alert("Edit");
		}
    }
});