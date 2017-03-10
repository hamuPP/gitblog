/**
 * Created by ty on 17/3/10.
 */
$(function () {
	var $combotree = $("#inputCombotree");

	$combotree.combotree({
		url: "data1.json",//请求的后端接口，此处用静态json代替
		onBeforeExpand: function (node) {
			var $tree = $combotree.combotree("tree");
			$tree.tree("options").url = "data2.json";//请求的后端接口，此处用静态json代替
		}
	});
});