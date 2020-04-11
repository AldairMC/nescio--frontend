import React from "react"
import { mount, configure } from "enzyme"
import renderer from "react-test-renderer"
//Component
import Card from "../Card"

describe("<Card></Card>", () => {
  test("Renders correctly", () => {
    const card = renderer.create(<Card></Card>).toJSON()
    expect(card).toMatchSnapshot()
  })

  test("Mount Correctly", () => {
    const wrapper = mount(<Card></Card>)
    expect(wrapper.length).toEqual(1)
  })
})
