import { namespace } from "../src/namespace"

describe("namespace", () => {
  it("should provide bem correctly", () => {
    const { b, e, m, be, bm, em, bem } = namespace("button")

    expect(b()).toBe("do-button")
    expect(b("main")).toBe("do-button-main")
    expect(e("content")).toBe("do-button__content")
    expect(m("primary")).toBe("do-button--primary")
    expect(be("main", "content")).toBe("do-button-main__content")
    expect(bm("main", "primary")).toBe("do-button-main--primary")
    expect(em("content", "primary")).toBe("do-button__content--primary")
    expect(bem("main", "content", "primary")).toBe(
      "do-button-main__content--primary"
    )
  })
})
