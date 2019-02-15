import React from "react";
import { shallow } from "enzyme";
import Hello from "components/hello_react";

describe("HelloReact component", () => {
  describe("when a name is given as a prop", () => {
    it("render Hello Caique!", () => {
      const wrapper = () => shallow(<Hello name="Caique" />);
      expect(wrapper().text()).toBe("Hello Caique!!!!!");
    });
  });

  describe("when no name is given", () => {
    it("render Hello David!", () => {
      const wrapper = () => shallow(<Hello />);
      expect(wrapper().text()).toBe("Hello David!!!!!");
    });
  });
});
