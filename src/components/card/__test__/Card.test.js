import React from "react"
import renderer from "react-test-renderer"

import Card from "../Card"

describe("<Card></Card>", () => {
  test("Renders correctly", () => {
    const card = renderer.create(<Card></Card>).toJSON()
    expect(card).toMatchSnapshot()
  })
})
