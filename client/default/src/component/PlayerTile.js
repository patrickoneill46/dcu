Ext.define('Cs.component.PlayerTile', {
	extend: 'Ext.dataview.component.DataItem',
	requires: [Cs.component.ImgExtra],
	xtype: 'playertile',
	
	config:{
		hidden: true,
		imgTile: true,
        dataMap: {
            
            //Dataitem store data mapping
            getImgTile: {
                setSrc: 'img',
                setAlt: 'name',
                setTitle: 'surname',
                setBadgeText: 'children'//added dynamically
            }
        },
        
        bubbleEvents: [
            'itemloading',
            'itemloaded'
        ]
	},
	applyRecord: function(record) {
	    	//console.log('applyRecord:' + record);
	/**
	var children = record.childNodes.length;
	if (children > 0) {
	
	    //Add children count of current node
	    record.data['children'] = children;
	}
	 **/   
	    return record;
	},
	
	applyImgTile: function(imt) {
		//console.log('applyImgTile:' + imt);
	var self = this;
	
	var tileItem = Ext.factory(imt, Cs.component.ImgExtra, self.getImgTile());
	
	tileItem.on({
	    scope: self,
	    imageupdated: function(el, e) {
	        
	        if (!self.rendered) {
	            self.on({
	                renderedchange: function() {
	                    self.fireEvent('itemloading', self, el, e);
	                }
	            });
	        }
	    },
	    imageload: function(el, e) {
	        
	        //Notification about item loading finish
	        self.fireEvent('itemloaded', self, el, e);
	            self.show();
	        }
	    });
	    
	    return tileItem;
	},
	
	updateImgTile: function(newImgTile, oldImgTile) {
		//console.log('updateImgTile: ' + newImgTile + ', ' + oldImgTile);
	if (oldImgTile) {
	    this.remove(oldImgTile);
	}
	
	if (newImgTile) {
	    this.add(newImgTile);
	}
	    }
});