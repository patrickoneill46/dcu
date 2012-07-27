Ext.define('Sport.view.Viewport', {
    extend: 'Ext.navigation.View',
    requires: ['Cs.component.ImagesTiles', 'Sport.view.SplitList',
               'Sport.view.Clubs', 'Sport.view.ClubDetail'],
    xtype: 'viewport',
    id: 'viewport',
    
    
    config: {
        fullscreen: true,
        //layout: 'fit',
        layout: {
        	type: 'card',
        	cardSwitchAnimation: 'slide'
        },
        
        items: [   
              {
            	  xtype: 'clubtiles',
            	  //xtype: 'splitlist',
            	  //xtype: 'clubdetail'
              }
        ]
    },
});
