sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device"
], function(UIComponent, Device) {
	"use strict";

	return UIComponent.extend("converted.helloworldview.Component", {
		metadata: {
			manifest: "json"
		},

		init: function() {
			UIComponent.prototype.init.apply(this, arguments);

			// Set device model
			this.setModel(new sap.ui.model.json.JSONModel(Device), "device");

			// Initialize the router
			this.getRouter().initialize();
		}
	});
});
