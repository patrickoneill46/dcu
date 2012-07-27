Ext.define('Sport.view.ClubDetail', {
	extend: 'Ext.dataview.DataView',
	xtype: 'clubdetail',
	requires: ['Cs.component.TeamTile', 'Sport.view.TeamDetail', 'Sport.view.Team'],
	
	config:{
		 title: 'Club Detail View',
		 //cls: 'cs-tilesdataview',
		 //itemCls: 'cs-imagetile',
		 //pressedCls: 'cs-tile-pressed',
         //selectedCls: 'cs-tile-selected',
         loadingText: 'Loading...',
         useComponents: true,
         defaultType: 'teamtile',
         onItemDisclosure: true,
         listeners: [{
        	 itemtap: function (dataview, index, target, record, e , options) {
            	 console.log('hello');
             }
         }]                                   
	}
});