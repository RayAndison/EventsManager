/* MODEL
 * Definit la structure d'un evenement => id, date, titre et description */

Ext.define("EventsManager.model.Events", {
    extend: "Ext.data.Model",
    config: {
        idProperty: 'id',
        fields: [
            { name: 'id', type: 'int' },
            { name: 'date', type: 'date', dateFormat: 'c' },
            { name: 'title', type: 'string' },
            { name: 'description', type: 'string' }
        ]
    }
});