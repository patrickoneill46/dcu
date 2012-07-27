Ext.define('Sport.store.Catalog', {
    extend: 'Ext.data.TreeStore',
    
    config: {
        model: 'Sport.model.Catalog',
        autoLoad: true,
        
        proxy: {
            type: 'ajax',
            url: 'data/data.json',
            reader: {
                type: 'json',
                rootProperty: 'items'
            }
        }
    }
});