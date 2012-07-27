Ext.define("Sport.store.Player", {
	extend: "Ext.data.Store",
	
	config: {
		model: "Sport.model.Player",
		autoload: true,
	}
});