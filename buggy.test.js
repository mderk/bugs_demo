const buggy = require("./buggy");

describe("Buggy test", () => {
    it("returns true", () => {
        expect(buggy([1, 2, 3], 0)).toBe(true);
    });
});
