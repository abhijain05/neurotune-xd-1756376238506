sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/UIComponent"
], function(Controller, UIComponent) {
	"use strict";

	return Controller.extend("converted.helloworldview.controller.App", {
		onInit: function() {
			// Get the router instance
			var oRouter = UIComponent.getRouterFor(this);

			// Handle routing errors
			oRouter.attachBypassed(function(oEvent) {
				console.error("Route bypassed:", oEvent.getParameter("hash"));
			});

			// Navigate to the main view if no hash is present
			if (!window.location.hash || window.location.hash === "#") {
				setTimeout(function() {
					oRouter.navTo("RouteMain");
				}, 100);
			}
		}
	});
});
