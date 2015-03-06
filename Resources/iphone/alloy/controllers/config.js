function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "config";
    if (arguments[0]) {
        {
            __processArg(arguments[0], "__parentSymbol");
        }
        {
            __processArg(arguments[0], "$model");
        }
        {
            __processArg(arguments[0], "__itemTemplate");
        }
    }
    var $ = this;
    var exports = {};
    $.__views.mainView = Ti.UI.createView({
        layout: "vertical",
        backgroundColor: "#cacaca",
        id: "mainView"
    });
    $.__views.mainView && $.addTopLevelView($.__views.mainView);
    $.__views.mainTopBar = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: "60dp",
        backgroundColor: "#5B96B2",
        layout: "horizontal",
        id: "mainTopBar"
    });
    $.__views.mainView.add($.__views.mainTopBar);
    $.__views.menuButton = Ti.UI.createView({
        width: "60dp",
        height: "60dp",
        id: "menuButton"
    });
    $.__views.mainTopBar.add($.__views.menuButton);
    var __alloyId1 = [];
    $.__views.row = Ti.UI.createTableViewRow({
        id: "row"
    });
    __alloyId1.push($.__views.row);
    $.__views.__alloyId2 = Ti.UI.createView({
        id: "__alloyId2"
    });
    $.__views.row.add($.__views.__alloyId2);
    var __alloyId3 = [];
    $.__views.appcHQ = require("ti.map").createAnnotation({
        latitude: 37.390749,
        longitude: -122.081651,
        title: "Appcelerator Headquarters",
        subtitle: "Mountain View, CA",
        pincolor: Alloy.Globals.Map.ANNOTATION_RED,
        id: "appcHQ",
        myid: "1"
    });
    __alloyId3.push($.__views.appcHQ);
    $.__views.mapview = require("ti.map").createView({
        region: {
            latitude: 33.74511,
            longitude: -84.38993,
            latitudeDelta: .01,
            longitudeDelta: .01
        },
        height: "100%",
        annotations: __alloyId3,
        id: "mapview"
    });
    $.__views.__alloyId2.add($.__views.mapview);
    $.__views.__alloyId0 = Ti.UI.createTableView({
        data: __alloyId1,
        id: "__alloyId0"
    });
    $.__views.mainView.add($.__views.__alloyId0);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;