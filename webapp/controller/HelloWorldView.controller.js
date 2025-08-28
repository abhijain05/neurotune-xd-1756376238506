sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/m/MessageToast"
], function(Controller, JSONModel, MessageToast) {
	"use strict";

	return Controller.extend("converted.helloworldview.controller.HelloWorldView", {
		onInit: function() {
			// Load mock data
			var oMaterialDataModel = new JSONModel();
			oMaterialDataModel.setData({
				materialNumber: "",
				createdOn: "",
				createdTime: "00:00:00",
				createdBy: "",
				materialType: "",
				materialGroup: "",
				radioButtonGroup: "radio1" // Default selection
			});
			this.getView().setModel(oMaterialDataModel, "materialData");
		},

		onGetData: function() {
			// In a real application, this would fetch data from a backend service.
			// For now, we'll just display a message.
			MessageToast.show("Data retrieved (mock data used)");
		},

		onExit: function() {
			// Cleanup logic (if needed)
		}
	});
});

