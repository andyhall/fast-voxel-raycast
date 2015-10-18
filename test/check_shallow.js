var test = require("tap").test
var raycast = require("..")

var voxel = { getBlock: function (x, y, z) { return x === 0 && y === 0 && z === 0 ? 1 : 0 } }

test("shallow", function (t) {
	t.equals(raycast(voxel,
		[1.6014050509453097, -0.05316262501184864, -1.1969442782079132],
		[-0.8007025204726549, 0.02658131750592432, 0.5984721441039565],
		5.0), 1)

	t.equals(raycast(voxel,
		[-1.41733953858252, 1.4110806611407838, 0.25000001],
		[0.70866977429126, -0.7055403255703919, 0],
		5.0), 1)

	t.equals(raycast(voxel,
		[1, 1, 1],
		[1, 1, -1],
		5.0), 0)

	t.equals(raycast(voxel,
		[1.9788948495478698, -0.06569435085032517, -0.2822400161197344],
		[-0.9894474247739349, 0.032847175425162585, 0.1411200080598672],
		5.0), 1)

	t.equals(raycast(voxel,
		[1, 1, 0],
		[-1, -1, -1],
		5.0), 0)

	t.end()
});