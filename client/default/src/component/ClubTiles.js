Ext.define("Cs.component.ClubTiles", {
	
	extend: 'Ext.NestedList',
	requires: ['Cs.component.Tile'],
	
	xtype: 'img-clubtiles',
	itemsState: {},
	
	config: {
        dataviewCls: 'cs-tilesdataview',
        itemCls: 'cs-imagetile',
        pressedCls: 'cs-tile-pressed',
        selectedCls: 'cs-tile-selected',
        
        tileConfig: {
            childrenBadge: true,
            fixedHeight: false
        },
        
        loadingText: 'Loading...'
    },
    
    //Initial tile state setup
    onItemLoading: function(cmp) {
    	//console.log('onItemLoading - cmp.id:' + cmp.id);
        this.itemsState[cmp.id] = false;
    },    
    
    //Tile state updating
    onItemLoaded: function(cmp) {
    	//console.log('onItemLoaded - cmp.id:' + cmp.id);
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
    
    //Generating tiles from store
    getList: function(node) {
        globalnode = node;
    	//console.log('getList' + node);
        var self = this;
        //console.log(self);
        
        //Build store for current node
        conole.log('Trying to create the nodestore');
        var nodeStore = Ext.create('Ext.data.NodeStore', {
            recursive: false,
            node: node,
            rootVisible: false,
            model: self.getStore().getModel()
        });
        
        node.expand();
        
        //Enable mask while dataview loading
        self.setMasked({
            xtype: 'loadmask',
            message: self.getLoadingText()
        });
        
        //Tiles dataview configuration
        var newDataView = Ext.create('Ext.DataView', {
            pressedDelay: 50,
            autoDestroy: true,
            store: nodeStore,
            onItemDisclosure: self.getOnItemDisclosure(),
            allowDeselect : self.getAllowDeselect(),
            cls: self.getDataviewCls(),
            itemCls: self.getItemCls(),
            pressedCls: self.getPressedCls(),
            selectedCls: self.getSelectedCls(),
            itemConfig: self.getTileConfig() || {},
            padding: '0 0 12 0',//bottom padding for dataview container
            useComponents: true,
            defaultType: 'imgtile',
            
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
                //Events handlers from Ext.NestedList component
                {
                    event: 'itemdoubletap', 
                    fn: 'onItemDoubleTap', 
                    scope: self
                },
                {
                    event: 'itemtap', 
                    fn: 'onItemInteraction', 
                    scope: self, 
                    order: 'before'
                },
                {
                    event: 'itemtouchstart', 
                    fn: 'onItemInteraction', 
                    scope: self, 
                    order: 'before'
                },
                {
                    event: 'itemtap', 
                    fn: 'onItemTap', 
                    scope: self
                },
                {
                    event: 'beforeselect', 
                    fn: 'onBeforeSelect', 
                    scope: self
                },
                {
                    event: 'containertap', 
                    fn: 'onContainerTap', 
                    scope: self
                },
                {
                    event: 'selectionchange', 
                    fn: 'onSelectionChange', 
                    scope: self
                }
            ]
        });
        
        return newDataView;
    }
});