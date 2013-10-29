/* STORE
 * Contient les donnees pour la liste des evenements */

Ext.define("EventsManager.store.Events", {
    extend: "Ext.data.Store",
    requires: "Ext.data.proxy.LocalStorage",
    config: {
        model: "EventsManager.model.Events",
        data: [
            { titre: "Bite Me I'm Famous", description: "Convention The Vampire Diaries", date: "19-05-2013" },
            { titre: "From Wilmington To Paris", description: "Convention One Tree Hill", date: "17-10-2013" }
        ],
        sorters: [{ property: 'date', direction: 'DESC'}]
    }
});