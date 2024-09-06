/*global QUnit*/

sap.ui.define([
	"blank001/controller/Blank001.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Blank001 Controller");

	QUnit.test("I should test the Blank001 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
