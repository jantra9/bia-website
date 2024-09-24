import Body from "../../components/Body"
import Header from "../../components/Header"
import HeaderBody from "../../components/HeaderBody"
export default function Page() {
    return (
  <div className="relative">
      <div className="max-h-[900px] relative">
        <Header />
        <HeaderBody />
      </div>
      <div className="relative">
        <Body />
      </div>
  </div>
    )
  }