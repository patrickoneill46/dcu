Ext.define( 'Sport.view.Clubs', {
	extend: 'Ext.dataview.DataView',
	xtype: 'clubtiles',
	id: 'clubtiles',
	requires: ['Cs.component.ClubTile', 'Sport.view.ClubDetail'],
	
	config:{
		store: 'Club',
		title: 'DCU Clubs',
		cls: 'cs-tilesdataview',
		itemCls: 'cs-imagetile',
		pressedCls: 'cs-tile-pressed',
        selectedCls: 'cs-tile-selected',
        loadingText: 'Loading...',
        useComponents: true,
        defaultType: 'clubtile',
        onItemDisclosure: true,
        listeners: [
                    
		        //Custom events handlers
		        {
		            event: 'itemloading',
		            fn: 'onItemLoading',
		            scope: self
		        },
		        {
		            event: 'itemloaded',
		            fn: 'onItemLoaded',
		            scope: self
		        },
       
        	]
	},
	
    //Initial tile state setup
    onItemLoading: function(cmp) {

        this.itemsState[cmp.id] = false;
    },    
    
    //Tile state updating
    onItemLoaded: function(cmp) {
    	
        this.itemsState[cmp.id] = true;
        
        var flag = true;
        for (var i in this.itemsState) {
            if (this.itemsState[i] === false) {
                flag = false;
            }
        }
        
        //Loading of all inner tiles is finished
        if (flag) {
            this.setMasked(false);
        }
    },
    
    
});