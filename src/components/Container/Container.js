import "./Container.css"

export default function Container({ center, children }) {
  let classNames = ["Container"]
  if (center) {
    classNames.push("Container--center")
  }
  console.log("<Container! component rendered!!! />")
  return <div className={classNames.join(" ")}>{children}</div>
}
