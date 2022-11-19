import { assert } from "chai";
import nock from "nock";

describe("network tests", function () {
  it("truth", function () {
    assert.equal(!!1, true);
  });

  beforeEach(() => {
    nock.disableNetConnect();
  });

  afterEach(() => {
    nock.cleanAll();
    nock.enableNetConnect();
  });
});
