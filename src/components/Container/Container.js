import "./Container.css"

export default function Container({ center, children, scroll = true }) {
  let classNames = ["Container"]
  if (center) {
    classNames.push("Container--center")
  }

  if (scroll) {
    classNames.push("Container--scroll")
  }

  console.log("<Container! component rendered!!! />")
  return <div className={classNames.join(" ")}>{children}</div>
}
